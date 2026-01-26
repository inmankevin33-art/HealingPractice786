"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  
  const pathname = usePathname();
  const isBirmingham = pathname?.startsWith("/birmingham");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveSubmenu(null);
  };

  // Dynamic Menu Items based on Location
  const menuItems = [
    {
      name: "Facial Aesthetics",
      href: isBirmingham ? "/birmingham/facial-aesthetics" : "/facial-aesthetics",
    },
    {
      name: "Joint Injections",
      href: isBirmingham ? "/birmingham/joint-injections" : "/joint-injections",
    },
    {
      name: "Hair Restoration",
      href: isBirmingham ? "/birmingham/hair-restoration" : "/hair-restoration",
    },
    {
      name: "Sexual Rejuvenation",
      href: isBirmingham ? "/birmingham/sexual-rejuvenation" : "/sexual-rejuvenation",
    },
    {
      name: "Prices",
      href: isBirmingham ? "/birmingham/prices" : "/prices",
    },
    {
      name: "FAQs",
      href: isBirmingham ? "/birmingham/faq" : "/faq",
    },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className="sticky top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href={isBirmingham ? "/birmingham" : "/"} onClick={() => setIsMenuOpen(false)}>
                <div className="flex items-center gap-2">
                  <div className="relative h-8 w-8 md:h-9 md:w-9 flex-shrink-0">
                    <Image src="/Logo2.png" alt="Healing-PRP Logo" fill className="object-contain" priority />
                  </div>
                  <div className="text-base md:text-lg tracking-tight font-medium text-black font-raleway">
                    Healing-PRP Clinics
                  </div>
                </div>
              </Link>
            </div>

            {/* Menu Button */}
            <div className="flex items-center space-x-4">
               {/* Subtle Location Indicator for Desktop */}
               <div className="hidden md:flex items-center text-[11px] font-bold text-slate-400 uppercase tracking-widest gap-1">
                 <MapPin className="w-3 h-3" />
                 {isBirmingham ? "Birmingham Clinic" : "St Albans Clinic"}
               </div>
               
              <button onClick={toggleMenu} className="p-2 hover:bg-slate-50 rounded-md transition-colors flex items-center gap-2 group">
                <span className="text-[13px] font-bold font-raleway text-slate-800 group-hover:text-blue-600 transition-colors">MENU</span>
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-40 bg-white top-16 lg:top-20 overflow-y-auto"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
              
              {/* --- 1. LOCATION TOGGLE AT THE TOP --- */}
              <div className="mb-12 pb-8 border-b border-slate-100">
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">Select Clinic Location</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link 
                    href="/" 
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex-1 flex items-center justify-between p-4 rounded-xl border-2 transition-all ${!isBirmingham ? 'border-blue-600 bg-blue-50/50' : 'border-slate-100 hover:border-slate-300'}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${!isBirmingham ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400'}`}><MapPin className="w-4 h-4" /></div>
                      <span className={`font-raleway font-bold ${!isBirmingham ? 'text-blue-900' : 'text-slate-600'}`}>St Albans</span>
                    </div>
                    {!isBirmingham && <div className="w-2 h-2 rounded-full bg-blue-600" />}
                  </Link>

                  <Link 
                    href="/birmingham" 
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex-1 flex items-center justify-between p-4 rounded-xl border-2 transition-all ${isBirmingham ? 'border-blue-600 bg-blue-50/50' : 'border-slate-100 hover:border-slate-300'}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${isBirmingham ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400'}`}><MapPin className="w-4 h-4" /></div>
                      <span className={`font-raleway font-bold ${isBirmingham ? 'text-blue-900' : 'text-slate-600'}`}>Birmingham</span>
                    </div>
                    {isBirmingham && <div className="w-2 h-2 rounded-full bg-blue-600" />}
                  </Link>
                </div>
              </div>

              {/* --- 2. REORGANIZED MENU ITEMS --- */}
              <nav className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className="text-2xl md:text-3xl font-raleway font-medium text-slate-900 hover:text-blue-600 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
