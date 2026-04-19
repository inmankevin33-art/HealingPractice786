"use client";

import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

interface MenuItem {
  name: string;
  href: string;
  isContact?: boolean;
  isSubItem?: boolean;
  isSpacer?: boolean; // Used to add a little margin above new main sections
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isBirmingham = pathname?.startsWith("/birmingham");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMenuOpen]);

  // We split the menu into two columns for desktop to use space better
  const menuColumn1: MenuItem[] = [
    { name: "Sexual Rejuvenation", href: isBirmingham ? "/birmingham/sexual-rejuvenation" : "/sexual-rejuvenation" },
    { name: "P-Shot Treatment", href: isBirmingham ? "/birmingham/p-shot" : "/p-shot", isSubItem: true },
    { name: "O-Shot Treatment", href: isBirmingham ? "/birmingham/o-shot" : "/o-shot", isSubItem: true },
    { name: "Erectile Dysfunction", href: isBirmingham ? "/birmingham/erectile-dysfunction" : "/erectile-dysfunction", isSubItem: true },
    { name: "Shockwave Therapy", href: isBirmingham ? "/birmingham/shockwave-therapy-erectile-dysfunction" : "/shockwave-therapy-erectile-dysfunction", isSubItem: true },
    { name: "Premature Ejaculation", href: isBirmingham ? "/birmingham/premature-ejaculation" : "/premature-ejaculation", isSubItem: true },
    { name: "Peyronie's Disease", href: isBirmingham ? "/birmingham/peyronies-disease" : "/peyronies-disease", isSubItem: true },
    { name: "Personalised Medication", href: isBirmingham ? "/birmingham/personalised-ed-medication" : "/personalised-ed-medication", isSubItem: true },
    { name: "Penis Enlargement", href: isBirmingham ? "/birmingham/penis-enlargement" : "/penis-enlargement", isSubItem: true },
  ];

  const menuColumn2: MenuItem[] = [
    { name: "Facial Aesthetics", href: isBirmingham ? "/birmingham/facial-aesthetics" : "/facial-aesthetics" },
    { name: "Polynucleotides", href: isBirmingham ? "/birmingham/polynucleotides" : "/polynucleotides", isSubItem: true },
    { name: "Joint Injections", href: isBirmingham ? "/birmingham/joint-injections" : "/joint-injections", isSpacer: true },
    { name: "Hair Restoration", href: isBirmingham ? "/birmingham/hair-restoration" : "/hair-restoration", isSpacer: true },
    { name: "Prices", href: isBirmingham ? "/birmingham/prices" : "/prices", isSpacer: true },
    { name: "FAQs", href: isBirmingham ? "/birmingham/faq" : "/faq", isSpacer: true },
    { name: "Health Blog", href: "/blog", isSpacer: true },
    { name: "Contact Us", href: isBirmingham ? "/birmingham/contact" : "/contact", isContact: true, isSpacer: true },
  ];

  return (
    <>
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
            // Added pb-12 to container and pb-32 to inner div to ensure mobile scrolling never cuts off
            className="fixed inset-0 z-40 bg-[#0f172a] pt-20 pb-12 overflow-y-auto"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 pt-4">
              
              {/* Location Selectors */}
              <div className="mb-8 border-b border-white/10 pb-8">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] mb-4 font-inter">Select Your Location</p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-xl">
                  {/* Removed onClick={() => setIsMenuOpen(false)} so it seamlessly switches without closing */}
                  <Link 
                    href="/" 
                    className={`flex-1 flex items-center justify-center p-4 rounded-xl border-2 transition-all font-inter ${!isBirmingham ? 'border-[#4041d1] bg-[#4041d1]/10 text-white font-bold shadow-[0_0_20px_rgba(64,65,209,0.3)]' : 'border-white/10 text-slate-400 hover:border-white/20 hover:text-white'}`}
                  >
                    St Albans Clinic
                  </Link>
                  <Link 
                    href="/birmingham" 
                    className={`flex-1 flex items-center justify-center p-4 rounded-xl border-2 transition-all font-inter ${isBirmingham ? 'border-[#4041d1] bg-[#4041d1]/10 text-white font-bold shadow-[0_0_20px_rgba(64,65,209,0.3)]' : 'border-white/10 text-slate-400 hover:border-white/20 hover:text-white'}`}
                  >
                    Birmingham Clinic
                  </Link>
                </div>
              </div>

              {/* Navigation Grid (2 Columns on Desktop, 1 on Mobile) */}
              <nav className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
                
                {/* Column 1 */}
                <div className="flex flex-col space-y-3">
                  {menuColumn1.map((item, idx) => (
                    <motion.div
                      key={`col1-${idx}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className={`${item.isSubItem ? "pl-6 border-l-2 border-white/10 ml-1" : ""} ${item.isSpacer ? "mt-4" : ""}`}
                    >
                      <Link 
                        href={item.href} 
                        className={`text-xl md:text-2xl font-raleway transition-colors inline-block ${
                          item.isSubItem 
                            ? "font-medium text-slate-400 hover:text-[#4041d1]" 
                            : "font-medium text-white hover:text-[#4041d1]"
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Column 2 */}
                <div className="flex flex-col space-y-3 mt-6 md:mt-0">
                  {menuColumn2.map((item, idx) => (
                    <motion.div
                      key={`col2-${idx}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (menuColumn1.length + idx) * 0.05 }}
                      className={`${item.isSubItem ? "pl-6 border-l-2 border-white/10 ml-1" : ""} ${item.isSpacer ? "pt-4" : ""}`}
                    >
                      <Link 
                        href={item.href} 
                        className={`text-xl md:text-2xl font-raleway transition-colors inline-block ${
                          item.isContact 
                            ? "text-[#4041d1] font-bold border-b-2 border-[#4041d1]/30 pb-1" 
                            : item.isSubItem 
                              ? "font-medium text-slate-400 hover:text-[#4041d1]" 
                              : "font-medium text-white hover:text-[#4041d1]"
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
