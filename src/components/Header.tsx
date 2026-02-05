"use client";

import { useState, useEffect } from "react";
// FIXED: Swapped to react-icons/fa to match your installed library
import { FaBars, FaTimes, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

interface MenuItem {
  name: string;
  href: string;
  isContact?: boolean;
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
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
    
    // Smooth scroll if on the relevant homepage
    if (pathname === "/" || pathname === "/birmingham") {
      e.preventDefault();
      const section = document.getElementById("contact-form-section");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const menuItems: MenuItem[] = [
    { name: "Facial Aesthetics", href: isBirmingham ? "/birmingham/facial-aesthetics" : "/facial-aesthetics" },
    { name: "Joint Injections", href: isBirmingham ? "/birmingham/joint-injections" : "/joint-injections" },
    { name: "Hair Restoration", href: isBirmingham ? "/birmingham/hair-restoration" : "/hair-restoration" },
    { name: "Sexual Rejuvenation", href: isBirmingham ? "/birmingham/sexual-rejuvenation" : "/sexual-rejuvenation" },
    { name: "Prices", href: isBirmingham ? "/birmingham/prices" : "/prices" },
    { name: "FAQs", href: isBirmingham ? "/birmingham/faq" : "/faq" },
    { name: "Health Blog", href: "/blog" },
    { 
      name: "Contact Us", 
      href: isBirmingham ? "/birmingham/contact" : "/contact", 
      isContact: true 
    },
  ];

  return (
    <>
      {/* PRESERVED: Dark Background #0f172a */}
      <header className="sticky top-0 left-0 right-0 z-50 bg-[#0f172a] border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* Logo Section */}
            <div className="flex-shrink-0">
              <Link href={isBirmingham ? "/birmingham" : "/"} onClick={() => setIsMenuOpen(false)}>
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 md:h-11 md:w-11 flex-shrink-0">
                    <Image src="/Logo2.png" alt="Healing-PRP Logo" fill className="object-contain" priority />
                  </div>
                  <h1 className="text-xl md:text-2xl font-raleway font-semibold text-white tracking-tight whitespace-nowrap">
                    Healing-PRP Clinics
                  </h1>
                </div>
              </Link>
            </div>

            {/* Header Right Side */}
            <div className="flex items-center gap-4 md:gap-8">
              {/* Desktop Clinic Info + Phone */}
              <div className="hidden lg:flex flex-col items-end">
                <div className="flex items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest gap-1.5 mb-1 font-inter">
                  <FaMapMarkerAlt className="w-3 h-3 text-[#4041d1]" />
                  <span className="text-slate-300">
                    {isBirmingham ? "Birmingham Clinic" : "St Albans Clinic"}
                  </span>
                </div>
                
                {/* Clickable Phone Number */}
                <a 
                  href="tel:07990364147" 
                  className="flex items-center gap-2 text-sm font-bold text-white hover:text-[#4041d1] transition-colors tracking-wider group font-inter"
                >
                  <FaPhoneAlt className="w-3 h-3 fill-current text-[#4041d1] group-hover:scale-110 transition-transform" />
                  <span>07990 364 147</span>
                </a>
              </div>

              {/* Mobile Phone Link (Visible icon only) */}
              <a 
                href="tel:07990364147" 
                // BRAND COLOR LOCK: #4041d1
                className="lg:hidden p-2.5 bg-[#4041d1] rounded-full text-white shadow-lg shadow-blue-500/20"
                aria-label="Call Clinic"
              >
                <FaPhoneAlt className="w-4 h-4 fill-current" />
              </a>

              {/* Menu Toggle */}
              <button 
                onClick={toggleMenu} 
                className="flex items-center gap-3 group px-3 py-2 hover:bg-white/5 rounded-lg transition-all"
              >
                <span className="hidden md:inline text-xs font-bold font-inter text-white uppercase tracking-widest">
                  {isMenuOpen ? "CLOSE" : "MENU"}
                </span>
                {isMenuOpen ? <FaTimes className="w-5 h-5 text-white" /> : <FaBars className="w-5 h-5 text-white" />}
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
            // PRESERVED: Dark Menu Background
            className="fixed inset-0 z-40 bg-[#0f172a] pt-24 overflow-y-auto"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
              
              {/* Location Selectors */}
              <div className="mb-12 border-b border-white/10 pb-12">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] mb-6 font-inter">Select Your Location</p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-xl">
                  <Link 
                    href="/" 
                    onClick={() => setIsMenuOpen(false)} 
                    // BRAND COLOR LOCK: #4041d1 for active state
                    className={`flex-1 flex items-center justify-center p-4 rounded-xl border-2 transition-all font-inter ${!isBirmingham ? 'border-[#4041d1] bg-[#4041d1]/10 text-white font-bold shadow-[0_0_20px_rgba(64,65,209,0.3)]' : 'border-white/10 text-slate-400 hover:border-white/20'}`}
                  >
                    St Albans Clinic
                  </Link>
                  <Link 
                    href="/birmingham" 
                    onClick={() => setIsMenuOpen(false)} 
                    className={`flex-1 flex items-center justify-center p-4 rounded-xl border-2 transition-all font-inter ${isBirmingham ? 'border-[#4041d1] bg-[#4041d1]/10 text-white font-bold shadow-[0_0_20px_rgba(64,65,209,0.3)]' : 'border-white/10 text-slate-400 hover:border-white/20'}`}
                  >
                    Birmingham Clinic
                  </Link>
                </div>
              </div>

              {/* Navigation Items */}
              <nav className="flex flex-col space-y-4 md:space-y-6">
                {menuItems.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link 
                      href={item.href} 
                      className={`text-2xl md:text-4xl font-raleway transition-colors inline-block ${
                        item.isContact 
                          ? "text-[#4041d1] font-bold border-b-2 border-[#4041d1]/30 pb-1" 
                          : "font-medium text-white hover:text-[#4041d1]"
                      }`}
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
