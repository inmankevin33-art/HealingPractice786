"use client";

import { useState, useEffect } from "react";
import { Menu, X, MapPin, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isBirmingham = pathname?.startsWith("/birmingham");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Scroll lock logic
  useEffect(() => {
    if (isMenuOpen) {
      const scrollY = window.scrollY;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
  }, [isMenuOpen]);

  const menuItems = [
    { name: "Facial Aesthetics", href: isBirmingham ? "/birmingham/facial-aesthetics" : "/facial-aesthetics" },
    { name: "Joint Injections", href: isBirmingham ? "/birmingham/joint-injections" : "/joint-injections" },
    { name: "Hair Restoration", href: isBirmingham ? "/birmingham/hair-restoration" : "/hair-restoration" },
    { name: "Sexual Rejuvenation", href: isBirmingham ? "/birmingham/sexual-rejuvenation" : "/sexual-rejuvenation" },
    { name: "Clinic Prices", href: isBirmingham ? "/birmingham/prices" : "/prices" },
    { name: "Medical FAQs", href: isBirmingham ? "/birmingham/faq" : "/faq" },
    { name: "Health Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      {/* Visual Polish: Glassmorphism effect matches the radial gradients on pages.
        Height adjusted to lg:h-24 for a more spacious, premium feel.
      */}
      <header className="sticky top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">
            
            {/* Logo Section - Aligned with Logo2.png scaling in Footer */}
            <div className="flex-shrink-0">
              <Link href={isBirmingham ? "/birmingham" : "/"} onClick={() => setIsMenuOpen(false)}>
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 flex-shrink-0">
                    <Image src="/Logo2.png" alt="Healing-PRP Logo" fill className="object-contain" priority />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg md:text-xl font-raleway font-semibold text-slate-900 leading-none tracking-tight">
                      Healing-PRP
                    </span>
                    <span className="text-[10px] font-inter font-bold uppercase tracking-[0.2em] text-blue-600 mt-1">
                      Clinics
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            {/* Menu Controls */}
            <div className="flex items-center gap-6">
              <div className="hidden lg:flex flex-col items-end">
                <div className="flex items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest gap-1.5 mb-0.5">
                  <MapPin className="w-3 h-3 text-blue-500" />
                  Currently Viewing
                </div>
                <div className="text-xs font-semibold text-slate-900 font-inter">
                  {isBirmingham ? "Birmingham Clinic" : "St Albans Clinic"}
                </div>
              </div>

              <button 
                onClick={toggleMenu} 
                className="flex items-center gap-3 group px-4 py-2 hover:bg-slate-50 rounded-full transition-all duration-300"
              >
                <span className="hidden md:inline text-xs font-bold font-inter text-slate-900 uppercase tracking-widest">
                  {isMenuOpen ? "Close" : "Menu"}
                </span>
                <div className="relative w-5 h-5">
                  <AnimatePresence mode="wait">
                    {isMenuOpen ? (
                      <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                        <X className="w-5 h-5 text-slate-900" />
                      </motion.div>
                    ) : (
                      <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                        <Menu className="w-5 h-5 text-slate-900" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full Screen Overlay Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "circOut" }}
            className="fixed inset-0 z-40 bg-white pt-24 lg:pt-32 overflow-y-auto"
          >
            <div className="max-w-5xl mx-auto px-6 pb-20">
              
              {/* Clinic Selection Toggle */}
              <div className="mb-16">
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-6 text-center">
                  Select Your Clinical Location
                </h4>
                <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                  <Link 
                    href="/" 
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex-1 flex items-center justify-between p-5 rounded-2xl border-2 transition-all duration-300 ${!isBirmingham ? 'border-blue-600 bg-blue-50/30 text-blue-900' : 'border-slate-100 text-slate-400 hover:border-slate-200'}`}
                  >
                    <div className="flex items-center gap-3">
                      <MapPin className={`w-4 h-4 ${!isBirmingham ? 'text-blue-600' : 'text-slate-300'}`} />
                      <span className="font-raleway font-bold text-sm">St Albans Clinic</span>
                    </div>
                    {!isBirmingham && <ChevronRight className="w-4 h-4" />}
                  </Link>

                  <Link 
                    href="/birmingham" 
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex-1 flex items-center justify-between p-5 rounded-2xl border-2 transition-all duration-300 ${isBirmingham ? 'border-blue-600 bg-blue-50/30 text-blue-900' : 'border-slate-100 text-slate-400 hover:border-slate-200'}`}
                  >
                    <div className="flex items-center gap-3">
                      <MapPin className={`w-4 h-4 ${isBirmingham ? 'text-blue-600' : 'text-slate-300'}`} />
                      <span className="font-raleway font-bold text-sm">Birmingham Clinic</span>
                    </div>
                    {isBirmingham && <ChevronRight className="w-4 h-4" />}
                  </Link>
                </div>
              </div>

              {/* Navigation Grid */}
              <motion.nav 
                className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4"
                initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
              >
                {menuItems.map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}
                    className="border-b border-slate-50 py-4 group"
                  >
                    <Link
                      href={item.href}
                      className="flex items-center justify-between text-xl md:text-2xl font-raleway font-semibold text-slate-900 hover:text-blue-600 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                      <ChevronRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-600" />
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
