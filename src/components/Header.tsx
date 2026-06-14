"use client";

import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

interface MenuItem {
  name: string;
  href?: string;
  isContact?: boolean;
  isSubItem?: boolean;
  isSpacer?: boolean;
  isCategoryTitle?: boolean; // New flag for unclickable category headers
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  
  // Location variables
  const isBirmingham = pathname?.startsWith("/birmingham");
  const isHampstead = pathname?.startsWith("/hampstead");
  const isStAlbans = !isBirmingham && !isHampstead;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMenuOpen]);

  // Dynamic route prefixer
  const getPrefix = () => {
    if (isBirmingham) return "/birmingham";
    if (isHampstead) return "/hampstead";
    return "";
  };
  const prefix = getPrefix();
  const link = (path: string) => `${prefix}${path}`;

  // Column 1: Intimate Health
  const menuColumn1: MenuItem[] = [
    { name: "Men's Health", isCategoryTitle: true },
    { name: "P-Shot Treatment", href: link("/p-shot"), isSubItem: true },
    { name: "Erectile Dysfunction", href: link("/erectile-dysfunction"), isSubItem: true },
    { name: "Shockwave Therapy", href: link("/shockwave-therapy-erectile-dysfunction"), isSubItem: true },
    { name: "Premature Ejaculation", href: link("/premature-ejaculation"), isSubItem: true },
    { name: "Peyronie's Disease", href: link("/peyronies-disease"), isSubItem: true },
    { name: "Personalised Medication", href: link("/personalised-ed-medication"), isSubItem: true },
    { name: "Penis Enlargement", href: link("/penis-enlargement"), isSubItem: true },
    
    { name: "Women's Health", isCategoryTitle: true, isSpacer: true },
    { name: "O-Shot Treatment", href: link("/o-shot"), isSubItem: true },
    { name: "Vaginal Dryness", href: link("/vaginal-dryness"), isSubItem: true },
    { name: "Sexual Rejuvenation", href: link("/sexual-rejuvenation"), isSubItem: true },
  ];

  // Column 2: Aesthetics, Info & Contact
  let menuColumn2: MenuItem[] = [
    { name: "Aesthetics & Wellness", isCategoryTitle: true },
    { name: "Facial Aesthetics", href: link("/facial-aesthetics"), isSubItem: true },
    { name: "Polynucleotides", href: link("/polynucleotides"), isSubItem: true },
    { name: "Joint Injections", href: link("/joint-injections"), isSubItem: true },
    { name: "Hair Restoration", href: link("/hair-restoration"), isSubItem: true },
    
    { name: "Clinic Information", isCategoryTitle: true, isSpacer: true },
    { name: "Prices", href: link("/prices"), isSubItem: true },
    { name: "FAQs", href: link("/faq"), isSubItem: true },
    { name: "Health Blog", href: "/blog", isSubItem: true },
    { name: "Contact Us", href: link("/contact"), isContact: true, isSpacer: true },
  ];

  // Filter out aesthetics for Hampstead
  if (isHampstead) {
    menuColumn2 = [
      { name: "Clinic Information", isCategoryTitle: true },
      { name: "Prices", href: link("/prices"), isSubItem: true },
      { name: "FAQs", href: link("/faq"), isSubItem: true },
      { name: "Health Blog", href: "/blog", isSubItem: true },
      { name: "Contact Us", href: link("/contact"), isContact: true, isSpacer: true },
    ];
  }

  // Active Style logic for the location selector
  const activeLocationStyle = "border-[#4041d1] bg-[#4041d1]/10 text-white font-bold shadow-[0_0_20px_rgba(64,65,209,0.3)]";
  const inactiveLocationStyle = "border-white/10 text-slate-400 hover:border-white/20 hover:text-white";

  return (
    <>
      <header className="sticky top-0 left-0 right-0 z-50 bg-[#0f172a] border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* Logo & Location Badge Section */}
            <div className="flex-shrink-0">
              <Link href={isBirmingham ? "/birmingham" : isHampstead ? "/hampstead" : "/"} onClick={() => setIsMenuOpen(false)}>
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 md:h-11 md:w-11 flex-shrink-0">
                    <Image src="/Logo2.png" alt="Healing-PRP Logo" fill className="object-contain" priority />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                    <h1 className="text-xl md:text-2xl font-raleway font-semibold text-white tracking-tight whitespace-nowrap">
                      Healing-PRP Clinics
                    </h1>
                    <span className="bg-[#4041d1] text-white text-[9px] sm:text-[10px] md:text-xs px-2.5 py-0.5 sm:py-1 rounded-full font-bold uppercase tracking-widest shadow-sm w-fit">
                      {isBirmingham ? "Birmingham Website" : isHampstead ? "Hampstead Website" : "St Albans Website"}
                    </span>
                  </div>
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
                    {isBirmingham ? "Birmingham Clinic" : isHampstead ? "Hampstead Clinic" : "St Albans Clinic"}
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
            className="fixed inset-0 z-40 bg-[#0f172a] pt-20 pb-12 overflow-y-auto"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 pt-4">
              
              {/* Location Selectors */}
              <div className="mb-8 border-b border-white/10 pb-8">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] mb-4 font-inter">Select Your Location</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
                  <Link 
                    href="/" 
                    className={`flex items-center justify-center p-4 rounded-xl border-2 transition-all font-inter text-sm md:text-base ${isStAlbans ? activeLocationStyle : inactiveLocationStyle}`}
                  >
                    St Albans Clinic
                  </Link>
                  <Link 
                    href="/birmingham" 
                    className={`flex items-center justify-center p-4 rounded-xl border-2 transition-all font-inter text-sm md:text-base ${isBirmingham ? activeLocationStyle : inactiveLocationStyle}`}
                  >
                    Birmingham Clinic
                  </Link>
                  <Link 
                    href="/hampstead" 
                    className={`flex items-center justify-center p-4 rounded-xl border-2 transition-all font-inter text-sm md:text-base ${isHampstead ? activeLocationStyle : inactiveLocationStyle}`}
                  >
                    Hampstead, London
                  </Link>
                </div>
              </div>

              {/* Navigation Grid */}
              <nav className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
                
                {/* Column 1 */}
                <div className="flex flex-col space-y-3">
                  {menuColumn1.map((item, idx) => (
                    <motion.div
                      key={`col1-${idx}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.03 }}
                      className={`${item.isSubItem ? "pl-4 border-l-2 border-white/10 ml-1" : ""} ${item.isSpacer ? "mt-6" : ""}`}
                    >
                      {item.isCategoryTitle ? (
                        <span className="text-xs md:text-sm font-inter font-bold text-[#4041d1] uppercase tracking-[0.2em] mb-1 block">
                          {item.name}
                        </span>
                      ) : (
                        <Link 
                          href={item.href || "#"} 
                          className={`text-xl md:text-2xl font-raleway transition-colors inline-block ${
                            item.isSubItem 
                              ? "font-medium text-slate-400 hover:text-white" 
                              : "font-medium text-white hover:text-[#4041d1]"
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Column 2 */}
                <div className="flex flex-col space-y-3 mt-8 md:mt-0">
                  {menuColumn2.map((item, idx) => (
                    <motion.div
                      key={`col2-${idx}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (menuColumn1.length + idx) * 0.03 }}
                      className={`${item.isSubItem ? "pl-4 border-l-2 border-white/10 ml-1" : ""} ${item.isSpacer ? "mt-6" : ""}`}
                    >
                      {item.isCategoryTitle ? (
                        <span className="text-xs md:text-sm font-inter font-bold text-[#4041d1] uppercase tracking-[0.2em] mb-1 block">
                          {item.name}
                        </span>
                      ) : (
                        <Link 
                          href={item.href || "#"} 
                          className={`text-xl md:text-2xl font-raleway transition-colors inline-block ${
                            item.isContact 
                              ? "text-[#4041d1] font-bold border-b-2 border-[#4041d1]/30 pb-1 hover:text-white" 
                              : item.isSubItem 
                                ? "font-medium text-slate-400 hover:text-white" 
                                : "font-medium text-white hover:text-[#4041d1]"
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )}
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
