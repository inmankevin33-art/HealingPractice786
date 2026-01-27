"use client";

import { useState, useEffect } from "react";
import { Menu, X, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isBirmingham = pathname?.startsWith("/birmingham");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Sync Body Scroll
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMenuOpen]);

  const menuItems = [
    { name: "Facial Aesthetics", href: isBirmingham ? "/birmingham/facial-aesthetics" : "/facial-aesthetics" },
    { name: "Joint Injections", href: isBirmingham ? "/birmingham/joint-injections" : "/joint-injections" },
    { name: "Hair Restoration", href: isBirmingham ? "/birmingham/hair-restoration" : "/hair-restoration" },
    { name: "Sexual Rejuvenation", href: isBirmingham ? "/birmingham/sexual-rejuvenation" : "/sexual-rejuvenation" },
    { name: "Prices", href: isBirmingham ? "/birmingham/prices" : "/prices" }, // REVERTED LABEL
    { name: "FAQs", href: isBirmingham ? "/birmingham/faq" : "/faq" }, // REVERTED LABEL
    { name: "Health Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      <header className="sticky top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* Logo Section - Increased size, single line */}
            <div className="flex-shrink-0">
              <Link href={isBirmingham ? "/birmingham" : "/"} onClick={() => setIsMenuOpen(false)}>
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 md:h-11 md:w-11 flex-shrink-0">
                    <Image src="/Logo2.png" alt="Healing-PRP Logo" fill className="object-contain" priority />
                  </div>
                  <h1 className="text-xl md:text-2xl font-raleway font-semibold text-slate-900 tracking-tight whitespace-nowrap">
                    Healing-PRP Clinics
                  </h1>
                </div>
              </Link>
            </div>

            {/* Menu Controls */}
            <div className="flex items-center gap-6">
              <div className="hidden lg:flex flex-col items-end">
                <div className="flex items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest gap-1.5">
                  <MapPin className="w-3 h-3 text-blue-500" />
                  {isBirmingham ? "Birmingham Clinic" : "St Albans Clinic"}
                </div>
              </div>

              <button 
                onClick={toggleMenu} 
                className="flex items-center gap-3 group px-3 py-2 hover:bg-slate-50 rounded-lg transition-all"
              >
                <span className="hidden md:inline text-xs font-bold font-inter text-slate-900 uppercase tracking-widest">
                  {isMenuOpen ? "CLOSE" : "MENU"}
                </span>
                {isMenuOpen ? <X className="w-5 h-5 text-slate-900" /> : <Menu className="w-5 h-5 text-slate-900" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white pt-24 overflow-y-auto"
          >
            <div className="max-w-5xl mx-auto px-6 pb-20">
              {/* Location Selectors */}
              <div className="mb-12">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-6 text-center">Select Your Location</p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                  <Link href="/" onClick={() => setIsMenuOpen(false)} className={`flex-1 flex items-center justify-center p-4 rounded-xl border-2 transition-all ${!isBirmingham ? 'border-blue-600 bg-blue-50/50 text-blue-900 font-bold' : 'border-slate-100 text-slate-400'}`}>
                    St Albans Clinic
                  </Link>
                  <Link href="/birmingham" onClick={() => setIsMenuOpen(false)} className={`flex-1 flex items-center justify-center p-4 rounded-xl border-2 transition-all ${isBirmingham ? 'border-blue-600 bg-blue-50/50 text-blue-900 font-bold' : 'border-slate-100 text-slate-400'}`}>
                    Birmingham Clinic
                  </Link>
                </div>
              </div>

              {/* Navigation Items */}
              <nav className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                {menuItems.map((item, idx) => (
                  <Link key={idx} href={item.href} className="text-2xl md:text-3xl font-raleway font-medium text-slate-900 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
                    {item.name}
                  </Link>
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
