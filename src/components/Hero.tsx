"use client";

import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaGoogle, 
  FaStar, 
  FaLock 
} from "react-icons/fa";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const pathname = usePathname();
  const isBirmingham = pathname?.startsWith("/birmingham");
  const prefix = isBirmingham ? "/birmingham" : "";

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
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat sm:hidden" style={{ backgroundImage: "url('/mobilehero.webp')" }}></div>
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden sm:block" style={{ backgroundImage: "url('/herobg.webp')" }}></div>
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

        {/* Description - Inter (NOW WITH SUBTLE SEO LINKS) */}
        <motion.p 
          custom={4}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeUpVariants}
          className="mt-3 text-sm md:text-base text-white/80 font-inter leading-relaxed max-w-2xl mx-auto mb-8"
        >
          Evidence-based, non-surgical treatments for{" "}
          <Link href={`${prefix}/sexual-rejuvenation`} className="text-white border-b border-white/30 hover:text-[#4041d1] hover:border-[#4041d1] transition-colors duration-300">
            sexual wellness
          </Link>
          {", "}
          <Link href={`${prefix}/joint-injections`} className="text-white border-b border-white/30 hover:text-[#4041d1] hover:border-[#4041d1] transition-colors duration-300">
            joint pain relief
          </Link>
          {", "}
          <Link href={`${prefix}/facial-aesthetics`} className="text-white border-b border-white/30 hover:text-[#4041d1] hover:border-[#4041d1] transition-colors duration-300">
            facial aesthetics
          </Link>
          {", and "}
          <Link href={`${prefix}/hair-restoration`} className="text-white border-b border-white/30 hover:text-[#4041d1] hover:border-[#4041d1] transition-colors duration-300">
            hair restoration
          </Link>
          .
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

      {/* --- HERO TRUST BADGES (LOWER BORDER) --- */}
      <div className={`md:block absolute hidden bottom-0 left-0 right-0 bg-[#0f172a]/90 backdrop-blur-md border-t border-white/10 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="px-2 py-4 max-w-7xl mx-auto">
          <div className="grid grid-cols-4 gap-2 divide-x divide-white/10">
            
            {/* 1. Google 5-Star Link */}
            <a href="#reviews" onClick={(e) => {
              e.preventDefault();
              document.getElementById('reviews-section')?.scrollIntoView({ behavior: 'smooth' });
            }} className="flex justify-center items-center group cursor-pointer px-2">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#4285F4] group-hover:scale-110 transition-transform shadow-md">
                  <FaGoogle className="w-4 h-4" />
                </div>
                <div className="flex flex-col items-start">
                  <div className="flex text-amber-400 text-[10px] mb-0.5">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </div>
                  <span className="text-white text-[9px] font-bold tracking-widest uppercase opacity-90 group-hover:opacity-100 font-inter">
                    5.0 Patient Rating
                  </span>
                </div>
              </div>
            </a>

            {/* 2. Experience Badge */}
            <div className="flex justify-center items-center px-2 opacity-90 hover:opacity-100 transition-opacity">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-[#4041d1] rounded-full flex items-center justify-center text-white font-bold text-[12px] shadow-md border border-white/10">
                  10+
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-white text-[9px] font-bold uppercase tracking-widest leading-tight font-inter">Years</span>
                  <span className="text-blue-400 text-[9px] font-semibold tracking-wider uppercase leading-tight mt-0.5 font-inter">Experience</span>
                </div>
              </div>
            </div>
            
            {/* 3. GMC Badge */}
            <div className="flex justify-center items-center px-2 opacity-90 hover:opacity-100 transition-opacity">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-[#1f3a68] rounded-full flex items-center justify-center text-white font-bold text-[11px] shadow-md border border-white/10">
                  GMC
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-white text-[9px] font-bold uppercase tracking-widest leading-tight font-inter">Registered</span>
                  <span className="text-blue-400 text-[9px] font-semibold tracking-wider uppercase leading-tight mt-0.5 font-inter">Doctor</span>
                </div>
              </div>
            </div>

            {/* 4. Privacy & Discreet Care */}
            <div className="flex justify-center items-center px-2 opacity-90 hover:opacity-100 transition-opacity">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-slate-800 rounded-full flex items-center justify-center text-slate-300 shadow-md border border-white/10">
                  <FaLock className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-white text-[9px] font-bold uppercase tracking-widest leading-tight font-inter">Strictly 1:1</span>
                  <span className="text-blue-400 text-[9px] font-semibold tracking-wider uppercase leading-tight mt-0.5 font-inter">Discreet Care</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
