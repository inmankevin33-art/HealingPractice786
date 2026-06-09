"use client";

import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaMapMarkerAlt, FaPhoneAlt, FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

interface MenuItem {
  name: string;
  href: string;
  isContact?: boolean;
  isSubItem?: boolean;
  isSpacer?: boolean;
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  
  // Real active route
  const isBirmingham = pathname?.startsWith("/birmingham");
  const isHampstead = pathname?.startsWith("/hampstead");

  // --- NEW: Context Switcher State for the Menu ---
  const [menuContext, setMenuContext] = useState<"stalbans" | "birmingham" | "hampstead">(
    isBirmingham ? "birmingham" : isHampstead ? "hampstead" : "stalbans"
  );

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMenuOpen]);

  // Keep menu context synced with the actual route when the menu is closed
  useEffect(() => {
    if (!isMenuOpen) {
      setMenuContext(isBirmingham ? "birmingham" : isHampstead ? "hampstead" : "stalbans");
    }
  }, [isMenuOpen, isBirmingham, isHampstead]);

  // Dynamic route builder based on the selected MENU context (not the actual page)
  const getMenuRoute = (basePath: string) => {
    if (menuContext === "birmingham") return `/birmingham${basePath}`;
    if (menuContext === "hampstead") return `/hampstead${basePath}`;
    return basePath;
  };

  const menuColumn1: MenuItem[] = [
    { name: "Sexual Rejuvenation", href: getMenuRoute("/sexual-rejuvenation") },
    { name: "P-Shot Treatment", href: getMenuRoute("/p-shot"), isSubItem: true },
    { name: "O-Shot Treatment", href: getMenuRoute("/o-shot"), isSubItem: true },
    { name: "Erectile Dysfunction", href: getMenuRoute("/erectile-dysfunction"), isSubItem: true },
    { name: "Shockwave Therapy", href: getMenuRoute("/shockwave-therapy-erectile-dysfunction"), isSubItem: true },
    { name: "Premature Ejaculation", href: getMenuRoute("/premature-ejaculation"), isSubItem: true },
    { name: "Peyronie's Disease", href: getMenuRoute("/peyronies-disease"), isSubItem: true },
    { name: "Personalised Medication", href: getMenuRoute("/personalised-ed-medication"), isSubItem: true },
    { 
      name: "Penis Filler", 
      href: menuContext === "hampstead" ? "/hampstead/penis-filler" : getMenuRoute("/penis-enlargement"), 
      isSubItem: true 
    },
  ];

  // Dynamically hide non-intimate treatments when the menu context is set to Hampstead
  const menuColumn2: MenuItem[] = [
    ...(menuContext !== "hampstead" ? [
      { name: "Facial Aesthetics", href: getMenuRoute("/facial-aesthetics") },
      { name: "Polynucleotides", href: getMenuRoute("/polynucleotides"), isSubItem: true },
      { name: "Joint Injections", href: getMenuRoute("/joint-injections"), isSpacer: true },
      { name: "Hair Restoration", href: getMenuRoute("/hair-restoration"), isSpacer: true },
    ] : []),
    { name: "Prices", href: getMenuRoute("/prices"), isSpacer: menuContext !== "hampstead" }, 
    { name: "FAQs", href: getMenuRoute("/faq"), isSpacer: true },
    { name: "Health Blog", href: "/blog", isSpacer: true },
    { name: "Contact Us", href: getMenuRoute("/contact"), isContact: true, isSpacer: true },
  ];

  return (
    <>
      <header className="sticky top-0 left-0 right-0 z-50 bg-[#0f172a] border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* Logo Section with Dynamic Location Badge */}
            <div className="flex-shrink-0">
              <Link href={isBirmingham ? "/birmingham" : isHampstead ? "/hampstead" : "/"} onClick={() => setIsMenuOpen(false)}>
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 md:h-11 md:w-11 flex-shrink-0">
                    <Image src="/Logo2.png" alt="Healing-PRP Logo" fill className="object-contain" priority />
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <h1 className="text-lg md:text-2xl font-raleway font-semibold text-white tracking-tight whitespace-nowrap leading-none mb-1 md:mb-1.5">
                      Healing-PRP Clinics
                    </h1>
                    {/* --- CHANGED: EXPLICIT WEBSITE BADGE --- */}
                    <span className="inline-flex items-center px-2 py-0.5 bg-[#4041d1]/30 border border-[#4041d1]/50 text-blue-100 text-[8px] md:text-[9px] font-bold uppercase tracking-widest rounded-full font-inter leading-none">
                      {isBirmingham ? "Birmingham Website" : isHampstead ? "Hampstead Website" : "St Albans Website"}
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            {/* Header Right Side */}
            <div className="flex items-center gap-4 md:gap-8">
              
              {/* Desktop Clinic Dropdown + Phone */}
              <div className="hidden lg:flex flex-col items-end">
                
                {/* Zero-JS CSS Dropdown */}
                <div className="relative group">
                  <button className="flex items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest gap-1.5 mb-1 font-inter hover:text-white transition-colors pb-1">
                    <FaMapMarkerAlt className="w-3 h-3 text-[#4041d1]" />
                    <span>Our Clinics <FaChevronDown className="inline w-2 h-2 ml-0.5 opacity-50" /></span>
                  </button>
                  
                  <div className="absolute top-full right-0 mt-0 w-56 bg-[#0f172a] border border-white/10 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 overflow-hidden">
                    <div className="flex flex-col py-2">
                      <Link href="/hampstead" className={`px-4 py-3 text-xs font-inter font-bold hover:bg-white/5 transition-colors border-b border-white/5 ${isHampstead ? 'text-[#4041d1]' : 'text-slate-300'}`}>
                        Hampstead, London
                      </Link>
                      <Link href="/birmingham" className={`px-4 py-3 text-xs font-inter font-bold hover:bg-white/5 transition-colors border-b border-white/5 ${isBirmingham ? 'text-[#4041d1]' : 'text-slate-300'}`}>
                        Edgbaston, Birmingham
                      </Link>
                      <Link href="/" className={`px-4 py-3 text-xs font-inter font-bold hover:bg-white/5 transition-colors ${!isBirmingham && !isHampstead ? 'text-[#4041d1]' : 'text-slate-300'}`}>
                        City Centre, St Albans
                      </Link>
                    </div>
                  </div>
                </div>

                <a 
                  href="tel:07990364147" 
                  className="flex items-center gap-2 text-sm font-bold text-white hover:text-[#4041d1] transition-colors tracking-wider group font-inter"
                >
                  <FaPhoneAlt className="w-3 h-3 fill-current text-[#4041d1] group-hover:scale-110 transition-transform" />
                  <span>07990 364 147</span>
                </a>
              </div>

              {/* Mobile Icons (Phone + Location Menu Trigger) */}
              <div className="flex lg:hidden items-center gap-2">
                <button 
                  onClick={toggleMenu}
                  className="p-2.5 bg-slate-800 rounded-full text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                  aria-label="View Clinics"
                >
                  <FaMapMarkerAlt className="w-4 h-4 fill-current" />
                </button>

                <a 
                  href="tel:07990364147" 
                  className="p-2.5 bg-[#4041d1] rounded-full text-white shadow-lg shadow-blue-500/20"
                  aria-label="Call Clinic"
                >
                  <FaPhoneAlt className="w-4 h-4 fill-current" />
                </a>
              </div>

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
            className="fixed inset-0 z-40 bg-[#0f172a] pt-20 pb-12 overflow-y-auto"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 pt-4">
              
              {/* --- CHANGED: Location Selectors are now Interactive Buttons --- */}
              <div className="mb-8 border-b border-white/10 pb-8">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] mb-4 font-inter">Select Your Location</p>
                <div className="flex flex-col md:flex-row gap-3 md:gap-4 max-w-3xl">
                  <button 
                    onClick={() => setMenuContext("stalbans")}
                    className={`flex-1 flex items-center justify-center p-3 md:p-4 rounded-xl border-2 transition-all font-inter ${menuContext === "stalbans" ? 'border-[#4041d1] bg-[#4041d1]/10 text-white font-bold shadow-[0_0_20px_rgba(64,65,209,0.3)]' : 'border-white/10 text-slate-400 hover:border-white/20 hover:text-white'}`}
                  >
                    St Albans
                  </button>
                  <button 
                    onClick={() => setMenuContext("birmingham")}
                    className={`flex-1 flex items-center justify-center p-3 md:p-4 rounded-xl border-2 transition-all font-inter ${menuContext === "birmingham" ? 'border-[#4041d1] bg-[#4041d1]/10 text-white font-bold shadow-[0_0_20px_rgba(64,65,209,0.3)]' : 'border-white/10 text-slate-400 hover:border-white/20 hover:text-white'}`}
                  >
                    Birmingham
                  </button>
                  <button 
                    onClick={() => setMenuContext("hampstead")}
                    className={`flex-1 flex items-center justify-center p-3 md:p-4 rounded-xl border-2 transition-all font-inter ${menuContext === "hampstead" ? 'border-[#4041d1] bg-[#4041d1]/10 text-white font-bold shadow-[0_0_20px_rgba(64,65,209,0.3)]' : 'border-white/10 text-slate-400 hover:border-white/20 hover:text-white'}`}
                  >
                    Hampstead
                  </button>
                </div>
              </div>

              {/* Navigation Grid (2 Columns on Desktop, 1 on Mobile) */}
              <nav className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
                
                {/* Column 1 */}
                <div className="flex flex-col space-y-3">
                  {menuColumn1.map((item, idx) => (
                    <motion.div
                      key={`col1-${idx}-${menuContext}`} // Added menuContext to key to force re-animation on switch
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
                      key={`col2-${idx}-${menuContext}`} // Added menuContext to key to force re-animation on switch
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
