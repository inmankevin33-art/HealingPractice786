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

  const toggleSubmenu = (name: string) => {
    setActiveSubmenu(activeSubmenu === name ? null : name);
  };

  useEffect(() => {
    if (isMenuOpen) {
      const scrollY = window.scrollY;
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.paddingRight = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.paddingRight = "";
    };
  }, [isMenuOpen]);

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
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <header className="sticky top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
              <Link href={isBirmingham ? "/birmingham" : "/"} onClick={() => setIsMenuOpen(false)}>
                <div className="flex items-center gap-2">
                  <div className="relative h-8 w-8 md:h-9 md:w-9 flex-shrink-0">
                    <Image src="/Logo2.png" alt="Healing-PRP Logo" fill className="object-contain" priority />
                  </div>
                  <div className="text-base md:text-lg tracking-tight font-medium text-black">
                    Healing-PRP Clinics
                    {isBirmingham && (
                      <span className="hidden sm:inline-block ml-2 text-[10px] bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full align-middle uppercase tracking-wide">
                        Birmingham
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </div>

            <div className="flex items-center space-x-2">
              <div className="hidden md:flex items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest gap-1 mr-4">
                 <MapPin className="w-3 h-3" />
                 {isBirmingham ? "Birmingham Clinic" : "St Albans Clinic"}
              </div>
              <span className="hidden md:inline text-[13px] font-medium font-raleway text-slate-800">
                MENU
              </span>
              <button
                onClick={toggleMenu}
                className="p-2 cursor-pointer hover:bg-slate-50 rounded-md transition-colors"
              >
                {isMenuOpen ? <X className="h-5 w-5 text-slate-700" /> : <Menu className="h-5 w-5 text-slate-700" />}
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
            className="fixed inset-0 z-40 bg-white top-16 lg:top-20 overflow-y-auto"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
              
              {/* --- 1. LOCATION TOGGLE AT THE TOP --- */}
              <div className="max-w-2xl mx-auto mb-12 pb-8 border-b border-slate-100">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-6 text-center">
                  Select Clinic Location
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Link 
                    href="/" 
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all ${!isBirmingham ? 'border-blue-600 bg-blue-50/50' : 'border-slate-100 hover:border-slate-300'}`}
                  >
                    <div className="flex items-center gap-3">
                      <MapPin className={`w-4 h-4 ${!isBirmingham ? 'text-blue-600' : 'text-slate-400'}`} />
                      <span className={`font-raleway font-bold text-sm ${!isBirmingham ? 'text-blue-900' : 'text-slate-600'}`}>St Albans</span>
                    </div>
                    {!isBirmingham && <div className="w-2 h-2 rounded-full bg-blue-600" />}
                  </Link>

                  <Link 
                    href="/birmingham" 
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all ${isBirmingham ? 'border-blue-600 bg-blue-50/50' : 'border-slate-100 hover:border-slate-300'}`}
                  >
                    <div className="flex items-center gap-3">
                      <MapPin className={`w-4 h-4 ${isBirmingham ? 'text-blue-600' : 'text-slate-400'}`} />
                      <span className={`font-raleway font-bold text-sm ${isBirmingham ? 'text-blue-900' : 'text-slate-600'}`}>Birmingham</span>
                    </div>
                    {isBirmingham && <div className="w-2 h-2 rounded-full bg-blue-600" />}
                  </Link>
                </div>
              </div>

              {/* --- 2. VERTICAL MENU LINKS --- */}
              <motion.nav
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col items-center space-y-6 md:space-y-8"
              >
                {menuItems.map((item, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <Link
                      href={item.href}
                      className="text-2xl md:text-4xl font-raleway font-light text-slate-900 hover:text-blue-600 transition-colors tracking-tight text-center block"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
