"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaCheck,
  FaPlus,
  FaMinus,
  FaBolt,
  FaTint,
  FaRulerVertical,
  FaStopwatch,
  FaVial,
  FaMicroscope,
  FaCheckCircle,
} from "react-icons/fa";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/ContactCTASection";

export default function PShotClient() {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);
  const [activeStep, setActiveStep] = useState(0);

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // --- DATA: P-SHOT BENEFITS (Card Style) ---
  const benefits = [
    {
      title: "Enhanced Sensitivity",
      description: "Rejuvenates nerve endings for increased sensation and pleasure.",
      icon: FaBolt,
      color: "bg-amber-50 text-amber-600",
    },
    {
      title: "Stronger Erections",
      description: "Improves blood flow for firmer, more reliable erections.",
      icon: FaRulerVertical,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Tissue Health",
      description: "Treats issues like Lichen Sclerosus and improves skin texture.",
      icon: FaTint,
      color: "bg-rose-50 text-rose-600",
    },
    {
      title: "No Downtime",
      description: "Walk-in, walk-out procedure. Resume normal activity immediately.",
      icon: FaStopwatch,
      color: "bg-green-50 text-green-600",
    },
  ];

  // --- DATA: P-SHOT PROCESS (Dark Blue Style) ---
  const processSteps = [
    {
      number: 1,
      icon: FaVial,
      title: "Blood Draw",
      description: "A small sample is taken from your arm, just like a standard blood test.",
    },
    {
      number: 2,
      icon: FaMicroscope,
      title: "Centrifuge",
      description: "We spin the blood to isolate the Platelet-Rich Plasma (PRP) & growth factors.",
    },
    {
      number: 3,
      icon: FaTint,
      title: "Activation",
      description: "The PRP is prepared for injection. A strong numbing cream is applied.",
    },
    {
      number: 4,
      icon: FaCheckCircle,
      title: "Injection",
      description: "Pain-free injection into specific areas to trigger rejuvenation.",
    },
  ];

  const faqs = [
    {
      question: "Does the injection hurt?",
      answer: "This is the most common fear, but the answer is no. We use a very strong medical-grade numbing cream. Most patients report feeling only pressure, not sharp pain.",
    },
    {
      question: "Will it increase size?",
      answer: "While the P-Shot is primarily for function, sensitivity, and erection quality, many men report an increase in girth due to improved blood flow and tissue health. Length gains are less common but possible if combined with pump therapy.",
    },
    {
      question: "How long does it last?",
      answer: "The results typically last 12 to 18 months. Since we are using your body's own biology to repair tissue, the effects are long-lasting. Many men choose to have an annual 'maintenance' shot.",
    },
    {
      question: "Is there recovery time?",
      answer: "There is zero downtime. You can return to work, exercise, and sexual activity on the same day.",
    },
  ];

  return (
    <>
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden font-inter">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-white/90 z-10" />
          <img
            src="/pshot_hero.jpg"
            alt="P-Shot Therapy"
            className="w-full h-full object-cover"
            onError={(e) => (e.currentTarget.src = "/hero_img.png")}
          />
        </div>

        <div className="relative z-20 flex h-full w-full items-center mt-10 md:mt-0">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial="hidden" animate="visible" variants={containerVariants} className="max-w-4xl mx-auto">
              <motion.div className="inline-block px-4 py-2 bg-[#4041d1] text-white rounded-full text-xs font-inter font-bold mb-6 uppercase tracking-wider" variants={itemVariants}>
                Male Enhancement
              </motion.div>
              <motion.h1 className="text-4xl lg:text-6xl font-raleway text-slate-900 font-bold leading-tight mb-6 drop-shadow-sm" variants={itemVariants}>
                The P-Shot® (Priapus Shot)
                <span className="block mt-2 text-xl lg:text-2xl font-medium text-slate-700 font-inter">
                  Power Your Performance Naturally
                </span>
              </motion.h1>
              <motion.div variants={itemVariants} className="flex justify-center mt-8">
                <button onClick={() => window.dispatchEvent(new CustomEvent("open-contact-drawer"))} className="px-10 py-4 flex items-center justify-center text-sm cursor-pointer bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-xl font-inter font-bold transition-all duration-300 shadow-xl shadow-blue-500/25 gap-2 group">
                  <FaBolt className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  Book P-Shot Consult
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- BENEFITS (Card Style) --- */}
      <section className="py-24 bg-white font-inter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-4">
              Why Choose The P-Shot?
            </motion.h2>
            <p className="text-slate-600 text-lg">
              {/* FIXED: Replaced ' with &apos; in "body's" */}
              Harness your body&apos;s own growth factors to rejuvenate tissue and enhance performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ y: -10 }} className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-2xl hover:border-[#4041d1]/20 transition-all duration-500 flex flex-col h-full group">
                <div className={`w-14 h-14 rounded-2xl ${benefit.color} flex items-center justify-center mb-6 text-2xl transition-transform group-hover:scale-110`}>
                  <benefit.icon />
                </div>
                <h3 className="text-xl font-raleway font-bold text-slate-900 mb-3 group-hover:text-[#4041d1] transition-colors">{benefit.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-inter">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROCESS (Dark Blue Style) --- */}
      <section className="relative py-20 lg:py-28 bg-[#0A1128] overflow-hidden font-inter" style={{ backgroundImage: "radial-gradient(circle at 10% 10%, rgba(64, 65, 209, 0.15) 0%, transparent 40%)" }}>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
            <motion.div className="inline-block px-4 py-1.5 bg-[#4041d1]/20 text-[#8ea3ff] rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-6 border border-[#4041d1]/30 font-raleway" variants={itemVariants}>
              The Procedure
            </motion.div>
            <motion.h2 className="text-3xl md:text-4xl font-raleway font-bold text-white leading-tight mb-6 tracking-tight" variants={itemVariants}>
              Simple, Safe & Effective
            </motion.h2>
          </motion.div>

          <div className="max-w-6xl mx-auto mt-16 relative">
             <div className="text-center mb-10">
                <AnimatePresence mode="wait">
                  <motion.div key={activeStep} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} transition={{ duration: 0.2 }} className="inline-flex items-center gap-3 px-6 py-3 bg-[#4041d1]/10 border border-[#4041d1]/40 rounded-full shadow-[0_0_15px_rgba(64,65,209,0.25)] backdrop-blur-md">
                    <span className="flex h-2 w-2 rounded-full bg-[#4041d1] animate-pulse shadow-[0_0_8px_#4041d1]" />
                    <span className="text-xs font-bold text-white uppercase tracking-[0.25em] font-raleway">
                      Step 0{processSteps[activeStep].number}: {processSteps[activeStep].title}
                    </span>
                  </motion.div>
                </AnimatePresence>
            </div>

            <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="hidden lg:block absolute top-[100px] left-0 w-full h-[1px] border-t border-dashed border-white/10 -z-10" />
              {processSteps.map((step, index) => {
                const IconComponent = step.icon;
                const isActive = activeStep === index;
                return (
                  <motion.div key={index} className="relative group cursor-pointer" onClick={() => setActiveStep(index)} variants={itemVariants}>
                    <div className={`p-6 rounded-[2rem] border transition-all duration-300 h-full flex flex-col ${isActive ? "border-[#4041d1] bg-white shadow-xl shadow-[#4041d1]/20 scale-105 z-20" : "border-white/10 bg-white/[0.04] opacity-70 hover:opacity-100"}`}>
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 ${isActive ? "bg-[#4041d1] text-white shadow-lg" : "bg-white/10 text-slate-300 group-hover:text-[#4041d1]"}`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className={`font-raleway font-bold mb-2 text-base transition-colors ${isActive ? "text-slate-900" : "text-white"}`}>{step.title}</h3>
                      <p className={`text-xs leading-relaxed font-inter transition-colors ${isActive ? "text-slate-600" : "text-slate-400"}`}>{step.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- IMAGE SECTION --- */}
      <section className="py-20 bg-slate-50 font-inter">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
               <div className="w-full md:w-1/2">
                   <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3] group">
                       <div className="absolute inset-0 bg-indigo-900/10 group-hover:bg-transparent transition-colors duration-500"/>
                        <img 
                            src="/pshot_hero.jpg" 
                            alt="Lab Processing" 
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                            onError={(e) => (e.currentTarget.src = "/hero_img.png")}
                        />
                   </div>
               </div>
               <div className="w-full md:w-1/2">
                   <h3 className="text-3xl font-raleway font-bold text-slate-900 mb-6">
                       Why Choose Healing-PRP Clinics?
                   </h3>
                   <ul className="space-y-4 mb-8">
                       {["Certified P-Shot® Providers", "Strictly Confidential", "Advanced Centrifuge Technology"].map((item, i) => (
                           <li key={i} className="flex items-center gap-3 text-slate-700 font-bold font-inter text-sm">
                               <FaCheckCircle className="text-[#4041d1]"/> {item}
                           </li>
                       ))}
                   </ul>
                   <button onClick={() => window.dispatchEvent(new CustomEvent("open-contact-drawer"))} className="px-8 py-3 bg-[#4041d1] text-white rounded-xl font-bold hover:bg-[#2a2bb8] transition-all shadow-lg">
                      Book P-Shot Consultation
                   </button>
               </div>
          </div>
      </section>

      <section id="faqs" className="py-20 lg:py-24 bg-white font-inter">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-raleway font-bold text-slate-900 mb-4">Common Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div key={index} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <button className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors duration-300" onClick={() => toggleFAQ(index)}>
                  <h3 className="font-raleway font-bold text-slate-900 pr-4 text-sm md:text-base">{faq.question}</h3>
                  <div className="flex-shrink-0 w-8 h-8 bg-[#4041d1]/10 rounded-full flex items-center justify-center text-[#4041d1]">
                    {openFAQIndex === index ? <FaMinus className="w-3 h-3"/> : <FaPlus className="w-3 h-3"/>}
                  </div>
                </button>
                <AnimatePresence>
                  {openFAQIndex === index && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <div className="px-6 pb-6 border-t border-slate-100 pt-4">
                        <p className="font-inter text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTASection />
      <Footer />
    </>
  );
}
