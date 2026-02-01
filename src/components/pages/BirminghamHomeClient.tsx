"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaArrowRight, FaStethoscope, FaFlask, FaShieldAlt } from "react-icons/fa";

// Component Imports
import LocationSection from "@/components/LocationSection";
import PRPExplanationSection from "@/components/PRPExplanationSection";
import ContactCTASection from "@/components/ContactCTASection";
import Footer from "@/components/Footer";

export default function BirminghamHomeClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Performance Optimization: Force GPU layer for the entire page
  return (
    <div className="bg-slate-50 selection:bg-blue-100 selection:text-blue-900 transform-gpu overflow-x-hidden">
      
      {/* 1. CLINICAL HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden bg-[#0a1128]">
        {/* Optimized Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1128] via-[#0a1128]/80 to-transparent z-10" />
          <img
            src="/images/birmingham-clinic.jpg" 
            alt="Healing-PRP Birmingham Clinic"
            className="w-full h-full object-cover object-center scale-105"
            loading="eager"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl transform-gpu"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-[11px] font-bold uppercase tracking-widest mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Edgbaston Medical Quarter
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-raleway font-bold text-white leading-[1.1] mb-6 tracking-tight">
              Specialist PRP <br />
              <span className="text-blue-400">Clinic Birmingham</span>
            </h1>
            
            <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl font-medium">
              Doctor-led regenerative medicine specializing in PRP Hair Restoration, 
              Joint Injections, and Sexual Wellness (P-Shot & O-Shot).
            </p>

            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-900/20 flex items-center gap-2 group transform-gpu active:scale-95"
              >
                Book Consultation
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. CORE SERVICES GRID (Hardware Accelerated) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-4">Clinical Specialisms</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Hair Restoration", icon: <FaFlask />, path: "/birmingham/hair-restoration" },
              { title: "Joint Injections", icon: <FaStethoscope />, path: "/birmingham/joint-injections" },
              { title: "Sexual Wellness", icon: <FaShieldAlt />, path: "/birmingham/sexual-rejuvenation" }
            ].map((service, i) => (
              <motion.a
                key={i}
                href={service.path}
                initial={false} // Performance: Don't animate off-screen
                whileHover={{ y: -5 }}
                className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 hover:border-blue-200 transition-all group transform-gpu"
              >
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {React.cloneElement(service.icon as React.ReactElement, { size: 24 })}
                </div>
                <h3 className="text-xl font-raleway font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">Expert treatment plans tailored to your goals by GMC-registered doctors.</p>
                <span className="text-blue-600 font-bold text-sm flex items-center gap-2">
                  View Treatment <FaArrowRight size={12} />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* 3. NEW SCIENCE SECTION (Replaces old static joint section) */}
      <PRPExplanationSection />

      {/* 4. LOCALIZED LOCATION SECTION */}
      <LocationSection />

      {/* 5. CONTACT & FOOTER */}
      <div id="contact-form-section">
        <ContactCTASection />
      </div>
      <Footer />

      {/* OPTIMIZED WHATSAPP MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 transform-gpu">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" 
            />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative bg-white rounded-[2.5rem] p-8 max-w-md w-full shadow-2xl overflow-hidden"
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaWhatsapp size={40} />
                </div>
                <h2 className="text-2xl font-raleway font-bold text-slate-900 mb-2">Speak with our Doctor</h2>
                <p className="text-slate-600 mb-8">Get instant answers about PRP treatments in Birmingham via WhatsApp.</p>
                <a 
                  href="https://wa.me/447XXXXXXXXX" 
                  className="block w-full py-4 bg-green-600 hover:bg-green-700 text-white rounded-2xl font-bold transition-all shadow-lg shadow-green-600/20"
                >
                  Start Chat
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
