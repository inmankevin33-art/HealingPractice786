"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { FaEnvelope, FaWhatsapp, FaTimes, FaMapMarkerAlt } from "react-icons/fa";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsLoaded(true);
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isModalOpen]);

  // Unified Scroll Function for CTAs
  const scrollToContact = () => {
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
          className="inline-block px-4 py-1.5 bg-blue-600 text-white rounded-full text-[10px] mb-6 font-bold uppercase tracking-[0.2em]"
        >
          <FaMapMarkerAlt className="inline-block mr-2 mb-0.5 text-blue-200" />
          St Albans • Harpenden • Luton • London
        </motion.div>

        {/* Headline - Refined Sizing */}
        <motion.h1 
          custom={2}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeUpVariants}
          className="md:text-5xl text-3xl font-bold font-raleway text-white leading-tight mb-3 tracking-tight"
        >
          Natural Regeneration Treatments <br /> Healing-PRP Clinics
        </motion.h1>

        {/* Sub-headline - Refined Sizing */}
        <motion.h2 
          custom={3}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeUpVariants}
          className="mt-1 md:text-lg text-base text-blue-100 font-medium font-raleway leading-relaxed"
        >
          Doctor-led. Patient-focused. Regenerative care
        </motion.h2>

        {/* Description - Refined Sizing */}
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
            onClick={scrollToContact} 
            className="px-10 py-3.5 flex items-center justify-center text-sm cursor-pointer bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all duration-300 gap-2 shadow-xl active:scale-95"
          >
            <FaEnvelope className="w-4 h-4" /> Book Consultation
          </button>
          
          <button 
            onClick={() => isDesktop ? setIsModalOpen(true) : window.open('https://wa.me/447990364147', '_blank')} 
            className="px-10 py-3.5 flex items-center justify-center text-sm cursor-pointer border-2 border-white/20 backdrop-blur-md bg-white/5 rounded-xl text-white font-bold transition-all duration-300 hover:bg-white/10 hover:border-white/40 active:scale-95 gap-2"
          >
            <FaWhatsapp className="w-4 h-4" /> WhatsApp Support
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
                  <div className="text-blue-400 text-[10px] md:text-[11px] font-semibold font-inter">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-[#0f172a]/80 z-[60] backdrop-blur-md" onClick={() => setIsModalOpen(false)} />
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none">
              <div className="bg-white rounded-[2rem] p-8 max-w-sm w-full pointer-events-auto shadow-2xl relative text-center">
                <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-900 transition-colors"><FaTimes className="w-5 h-5" /></button>
                <h3 className="text-xl font-raleway font-bold text-slate-900 mb-2">Connect Instantly</h3>
                <p className="text-xs text-slate-500 mb-6 font-inter leading-relaxed">Scan with your phone camera to chat with our medical team</p>
                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 inline-block mb-6"><img src="/qrcode.png" alt="WhatsApp QR" className="w-40 h-40" /></div>
                <a href="https://web.whatsapp.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full py-4 bg-[#25D366] text-white rounded-xl font-bold hover:shadow-xl transition-all"><FaWhatsapp className="w-5 h-5" /> Open WhatsApp Web</a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
