"use client";

import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Unified Action Function: Opens Drawer + Smooth Scroll
  const handleAction = (e: React.MouseEvent) => {
    e.preventDefault();
    // 1. Signal the consultation drawer to open
    window.dispatchEvent(new CustomEvent("open-contact-drawer"));
    
    // 2. Smooth scroll to the form section
    const section = document.getElementById("contact-form-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.15,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="relative md:h-[calc(100vh-4rem)] pb-5 md:pb-0 lg:h-[calc(100vh-5rem)] overflow-hidden flex items-center justify-center">
      {/* Background Section */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat sm:hidden" style={{ backgroundImage: "url('/mobilehero.png')" }}></div>
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden sm:block" style={{ backgroundImage: "url('/herobg.jpg')" }}></div>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-[-4vh]">
        
        {/* Aligned Location Tag */}
        <motion.div 
          custom={1}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeUpVariants}
          // BRAND COLOR LOCK: bg-[#4041d1]
          className="inline-block px-4 py-1.5 bg-[#4041d1] text-white rounded-full text-[10px] mb-6 font-bold uppercase tracking-[0.2em] font-inter"
        >
          <FaMapMarkerAlt className="inline-block mr-2 mb-0.5 text-white/70" />
          St Albans • Harpenden • Luton • London
        </motion.div>

        {/* Headline - Raleway Bold */}
        <motion.h1 
          custom={2}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeUpVariants}
          className="md:text-5xl text-3xl font-bold font-raleway text-white leading-tight mb-3 tracking-tight"
        >
          Natural Regeneration Treatments <br /> Healing-PRP Clinics
        </motion.h1>

        {/* Sub-headline - Raleway Medium */}
        <motion.h2 
          custom={3}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeUpVariants}
          className="mt-1 md:text-lg text-base text-blue-100 font-medium font-raleway leading-relaxed"
        >
          Doctor-led. Patient-focused. Regenerative care
        </motion.h2>

        {/* Description - Inter */}
        <motion.p 
          custom={4}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeUpVariants}
          className="mt-3 text-sm md:text-base text-white/80 font-inter leading-relaxed max-w-2xl mx-auto mb-8"
        >
          Evidence-based, non-surgical treatments for facial aesthetics,
          joint pain relief, hair restoration, and sexual wellness.
        </motion.p>

        {/* Repurposed CTA Buttons */}
        <motion.div 
          custom={5}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeUpVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button 
            onClick={handleAction}
            // BRAND COLOR LOCK: bg-[#4041d1] with hover #2a2bb8
            className="px-10 py-3.5 flex items-center justify-center text-sm cursor-pointer bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-xl font-bold transition-all duration-300 gap-2 shadow-xl shadow-[#4041d1]/20 active:scale-95 font-inter"
          >
            <FaEnvelope className="w-4 h-4" /> Book Consultation
          </button>
        </motion.div>
      </div>

      {/* Feature Banner - Height Refined */}
      <div className={`md:block absolute hidden bottom-0 left-0 right-0 bg-[#0f172a]/90 backdrop-blur-md border-t border-white/10 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="px-4 py-5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-4 gap-4">
              {[
                { label: "GMC-registered doctor", sub: "Over 10 years experience" },
                { label: "Drug-free options", sub: "Natural PRP Treatments" },
                { label: "Discreet location", sub: "St Albans & Birmingham" },
                { label: "Private consultations", sub: "Strictly 1:1 Care" }
              ].map((item, idx) => (
                <div key={idx} className={`text-center ${idx !== 3 ? 'border-r border-white/10' : ''}`}>
                  <div className="text-white font-bold text-[10px] md:text-xs uppercase tracking-widest mb-1 font-inter">{item.label}</div>
                  <div className="text-blue-300 text-[10px] md:text-[11px] font-semibold font-inter">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
