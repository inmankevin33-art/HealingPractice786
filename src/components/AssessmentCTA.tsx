"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaClipboardCheck, FaShieldAlt } from "react-icons/fa";
import OnlineAssessmentModal from "./OnlineAssessmentModal"; // Import your existing modal!

export default function AssessmentCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-20 bg-slate-900 border-y border-slate-800 relative overflow-hidden">
        {/* Subtle Background Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#4041d1]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-blue-200 text-xs font-bold uppercase tracking-widest font-inter mb-8 backdrop-blur-sm">
              <FaShieldAlt className="w-3.5 h-3.5" /> 100% Confidential
            </div>

            {/* Headline */}
            <h2 className="text-3xl md:text-5xl font-raleway font-bold text-white mb-6 leading-tight tracking-tight">
              Not sure which treatment is right for you?
            </h2>

            {/* Sub-headline */}
            <p className="text-lg md:text-xl text-slate-300 font-inter max-w-2xl mx-auto mb-10 leading-relaxed">
              Take our free, 2-minute clinical assessment. Answer a few secure questions about your symptoms, and our doctor will review your profile to recommend the best path forward.
            </p>

            {/* Trigger Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-10 py-5 bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl shadow-[#4041d1]/30 active:scale-95 font-inter group"
            >
              <FaClipboardCheck className="w-5 h-5 text-blue-200 group-hover:scale-110 transition-transform" />
              Take Free Online Assessment
            </button>
          </motion.div>
        </div>
      </section>

      {/* The Modal */}
      <OnlineAssessmentModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}
