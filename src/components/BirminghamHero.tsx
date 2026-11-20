"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaGoogle, 
  FaStar, 
  FaLock
} from "react-icons/fa";
import OnlineAssessmentModal from "./OnlineAssessmentModal"; 

export default function Hero() {
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false); 

  const pathname = usePathname();
  const isBirmingham = pathname?.startsWith("/birmingham");
  const isHampstead = pathname?.startsWith("/hampstead");
  
  const prefix = isBirmingham ? "/birmingham" : isHampstead ? "/hampstead" : "";
  
  // --- DYNAMIC LOCATION TEXT ---
  const locationSuffix = isBirmingham ? "in Birmingham" : isHampstead ? "in London" : "in St Albans";
  
  const locationBadgeText = isBirmingham 
    ? "Birmingham • Edgbaston • Solihull • Midlands" 
    : isHampstead 
    ? "Hampstead • Belsize Park • North West London"
    : "St Albans • Harpenden • Luton • London";

  const handleAction = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("open-contact-drawer"));
    
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
      transition: { duration: 0.8, delay: i * 0.15, ease: "easeOut" },
    }),
  };

  return (
    <div className="relative w-full mt-0 pt-0 min-h-[100vh] md:min-h-[calc(100vh-4rem)] overflow-hidden flex flex-col items-center justify-end bg-[#0A1128]">
      
      <div className="absolute inset-0 z-0">
        <Image 
          src="/mobilehero.webp" 
          alt="Healing-PRP Clinics Mobile" 
          fill 
          priority 
          className="object-cover object-top sm:hidden" 
        />
        <Image 
          src="/herobg.webp" 
          alt="Healing-PRP Clinics" 
          fill 
          priority 
          className="object-cover object-[center_15%] hidden sm:block" 
        />
        <div className="absolute inset-0 bg-black/60 z-10"></div>
      </div>

      <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-48 md:pb-40">
        
        <motion.div 
          custom={1} initial="hidden" animate="visible" variants={fadeUpVariants}
          className="inline-block px-4 py-1.5 bg-[#4041d1] text-white rounded-full text-[10px] mb-6 font-bold uppercase tracking-[0.2em] font-inter"
        >
          <FaMapMarkerAlt className="inline-block mr-2 mb-0.5 text-white/70" />
          {locationBadgeText}
        </motion.div>

        <motion.h1 
          custom={2} initial="hidden" animate="visible" variants={fadeUpVariants}
          className="md:text-5xl text-3xl font-bold font-raleway text-white leading-tight mb-4 tracking-tight"
        >
          {isHampstead 
            ? <>Doctor-Led Intimate Health <br className="hidden md:block" /> Treatments {locationSuffix}</>
            : <>Doctor-Led Intimate Health & <br /> Regenerative Treatments {locationSuffix}</>
          }
        </motion.h1>

        <motion.h2 
          custom={3} initial="hidden" animate="visible" variants={fadeUpVariants}
          className="mt-2 text-lg md:text-xl font-medium font-raleway text-blue-100 leading-relaxed max-w-4xl mx-auto mb-10"
        >
          {isHampstead ? (
            <>
              Discreet, private care and personalised treatment plans for erectile dysfunction, Peyronie&apos;s disease, premature ejaculation, vaginal dryness and selected intimate sensitivity concerns.
            </>
          ) : (
            <>
              Discreet, private care and evidence-based treatment plans for <br className="hidden md:block" />
              <Link href={`${prefix}/erectile-dysfunction`} className="font-bold text-white border-b border-white/30 hover:text-[#4041d1] hover:border-[#4041d1] transition-colors duration-300">
                Erectile dysfunction
              </Link>
              {", "}
              <Link href={`${prefix}/sexual-rejuvenation`} className="font-bold text-white border-b border-white/30 hover:text-[#4041d1] hover:border-[#4041d1] transition-colors duration-300">
                Sexual wellness
              </Link>
              {", "}
              <Link href={`${prefix}/joint-injections`} className="font-bold text-white border-b border-white/30 hover:text-[#4041d1] hover:border-[#4041d1] transition-colors duration-300">
                Joint injections
              </Link>
              {", "}
              <Link href={`${prefix}/hair-restoration`} className="font-bold text-white border-b border-white/30 hover:text-[#4041d1] hover:border-[#4041d1] transition-colors duration-300">
                Hair restoration
              </Link>
              {", and "}
              <Link href={`${prefix}/facial-aesthetics`} className="font-bold text-white border-b border-white/30 hover:text-[#4041d1] hover:border-[#4041d1] transition-colors duration-300">
                Facial aesthetics
              </Link>
              .
            </>
          )}
        </motion.h2>
        
        <motion.div 
          custom={4} initial="hidden" animate="visible" variants={fadeUpVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center" 
        >
          {/* Only render the assessment button on non-Hampstead pages */}
          {!isHampstead && (
            <button 
              onClick={() => setIsAssessmentOpen(true)}
              className="w-full sm:w-auto px-8 py-3.5 flex items-center justify-center text-sm cursor-pointer bg-white text-[#4041d1] hover:bg-blue-50 rounded-xl font-bold transition-all duration-300 gap-2 shadow-xl shadow-white/10 active:scale-95 font-inter border-2 border-white"
            >
               Take Free Online Assessment
            </button>
          )}

          <button 
            onClick={handleAction}
            className="w-full sm:w-auto px-10 py-3.5 flex items-center justify-center text-sm cursor-pointer bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-xl font-bold transition-all duration-300 gap-2 shadow-xl shadow-[#4041d1]/20 active:scale-95 font-inter"
          >
            <FaEnvelope className="w-4 h-4" /> {isHampstead ? "Book Private Consultation" : "Book Consultation"}
          </button>
        </motion.div>

      </div>

      <motion.div 
        custom={5} initial="hidden" animate="visible" variants={fadeUpVariants}
        className="absolute bottom-0 left-0 w-full bg-[#0f172a]/90 backdrop-blur-md border-t border-white/10 z-30"
      >
        <div className="px-2 py-4 max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-2 divide-none md:divide-x divide-white/10">
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
      </motion.div>

      {/* Only render the modal if not on Hampstead to save DOM bloat */}
      {!isHampstead && (
        <OnlineAssessmentModal 
          isOpen={isAssessmentOpen} 
          onClose={() => setIsAssessmentOpen(false)} 
        />
      )}
    </div>
  );
}
