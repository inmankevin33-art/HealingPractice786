"use client";

import { useState, useEffect } from "react";
import { Menu, X, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isBirmingham = pathname?.startsWith("/birmingham");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMenuOpen]);

  // Unified Scroll/Navigate Function
  const handleContactClick = (e: React.MouseEvent) => {
    setIsMenuOpen(false);
    
    // If we are on the homepage, scroll. Otherwise, let Link handle navigation.
    if (pathname === "/" || pathname === "/birmingham") {
      e.preventDefault();
      const section = document.getElementById("contact-form-section");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const menuItems = [
    { name: "Facial Aesthetics", href: isBirmingham ? "/birmingham/facial-aesthetics" : "/facial-aesthetics" },
    { name: "Joint Injections", href: isBirmingham ? "/birmingham/joint-injections" : "/joint-injections" },
    { name: "Hair Restoration", href: isBirmingham ? "/birmingham/hair-restoration" : "/hair-restoration" },
    { name: "Sexual Rejuvenation", href: isBirmingham ? "/birmingham/sexual-rejuvenation" : "/sexual-rejuvenation" },
    { name: "Prices", href: isBirmingham ? "/birmingham/prices" : "/prices" },
    { name: "FAQs", href: isBirmingham ? "/birmingham/faq" : "/faq" },
    { name: "Health Blog", href: "/blog" },
    { name: "Contact Us", href: isBirmingham ? "/birmingham/contact" : "/contact" },
  ];

  return (
    <>
      <header className="sticky top-0 left-0 right-0 z-50 bg-[#0f172a] border-b border-white/10 shadow-lg">
        {/* Tightened horizontal padding: px-4 lg:px-6 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
          {/* Reduced height: h-14 lg:h-16 (was 16/20) */}
          <div className="flex items-center justify-between h-14 lg:h-16">
            
            {/* Logo Section */}
            <div className="flex-shrink-0">
              <Link href={isBirmingham ? "/birmingham" : "/"} onClick={() => setIsMenuOpen(false)}>
                <div className="flex items-center gap-2.5">
                  {/* Reduced logo size: h-8 w-8 */}
                  <div className="relative h-8 w-8 md:h-9 md:w-9 flex-shrink-0">
                    <Image src="/Logo2.png" alt="Healing-PRP Logo" fill className="object-contain" priority />
                  </div>
                  {/* Reduced text size: text-lg md:text-xl */}
                  <h1 className="text-lg md:text-xl font-raleway font-semibold text-white tracking-tight whitespace-nowrap">
                    Healing-PRP Clinics
                  </h1>
                </div>
              </Link>
            </div>

            {/* Header Right Side */}
            <div className="flex items-center gap-4">
              <div className="hidden lg:flex flex-col items-end">
                <div className="flex items-center text-[9px] font-bold text-slate-400 uppercase tracking-widest gap-1.5">
                  <MapPin className="w-2.5 h-2.5 text-blue-400" />
                  <span className="text-slate-300">
                    {isBirmingham ? "Birmingham Clinic" : "St Albans Clinic"}
                  </span>
                </div>
              </div>

              <button 
                onClick={toggleMenu} 
                className="flex items-center gap-2.5 group px-2.5 py-1.5 hover:bg-white/5 rounded-lg transition-all"
              >
                <span className="hidden md:inline text-[10px] font-bold font-inter text-white uppercase tracking-widest">
                  {isMenuOpen ? "CLOSE" : "MENU"}
                </span>
                {isMenuOpen ? <X className="w-4 h-4 text-white" /> : <Menu className="w-4 h-4 text-white" />}
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
            className="fixed inset-0 z-40 bg-[#0f172a] pt-20 overflow-y-auto"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
              
              {/* Location Selectors */}
              <div className="mb-10 border-b border-white/10 pb-10">
                <p className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.3em] mb-5">Select Your Location</p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-xl">
                  <Link href="/" onClick={() => setIsMenuOpen(false)} className={`flex-1 flex items-center justify-center p-3.5 rounded-xl border-2 text-xs transition-all ${!isBirmingham ? 'border-blue-500 bg-blue-500/10 text-white font-bold' : 'border-white/10 text-slate-400 hover:border-white/20'}`}>
                    St Albans Clinic
                  </Link>
                  <Link href="/birmingham" onClick={() => setIsMenuOpen(false)} className={`flex-1 flex items-center justify-center p-3.5 rounded-xl border-2 text-xs transition-all ${isBirmingham ? 'border-blue-500 bg-blue-500/10 text-white font-bold' : 'border-white/10 text-slate-400 hover:border-white/20'}`}>
                    Birmingham Clinic
                  </Link>
                </div>
              </div>

              {/* Navigation Items */}
              <nav className="flex flex-col space-y-3 md:space-y-4">
                {menuItems.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                  >
                    <Link 
                      href={item.href} 
                      className="text-xl md:text-3xl font-raleway font-medium text-white hover:text-blue-400 transition-colors inline-block"
                      onClick={item.isContact ? handleContactClick : () => setIsMenuOpen(false)}
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
