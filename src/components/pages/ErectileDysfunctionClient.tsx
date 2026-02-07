"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaCheck,
  FaPlus,
  FaMinus,
  FaUserMd,
  FaBatteryQuarter,
  FaHourglassEnd,
  FaFeather,
  FaPills,
  FaWaveSquare,
  FaSyringe,
  FaDna,
  FaCheckCircle,
} from "react-icons/fa";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/ContactCTASection";
import Link from "next/link";

export default function ErectileDysfunctionClient() {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);
  const [activeStep, setActiveStep] = useState(0); // For the Dark Blue Process Section

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // --- DATA: SYMPTOMS (Using Card Style) ---
  const symptoms = [
    {
      title: "Difficulty Achieving",
      description: "Struggling to get a full erection when you want to, causing frustration.",
      icon: FaBatteryQuarter,
      color: "bg-rose-50 text-rose-600",
    },
    {
      title: "Losing Maintenance",
      description: "Erection becomes soft or is lost during intercourse.",
      icon: FaHourglassEnd,
      color: "bg-indigo-50 text-indigo-600",
    },
    {
      title: "Reduced Sensation",
      description: "Feeling less pleasure or 'numbness', often linked to blood flow.",
      icon: FaFeather,
      color: "bg-teal-50 text-teal-600",
    },
    {
      title: "Reliance on Pills",
      description: "Needing Viagra or Cialis just to function, and wanting a natural fix.",
      icon: FaPills,
      color: "bg-blue-50 text-[#4041d1]",
    },
  ];

  // --- DATA: TREATMENT STEPS (Using Dark Blue Process Style) ---
  const protocolSteps = [
    {
      number: 1,
      icon: FaWaveSquare,
      title: "Shockwave Therapy",
      description: "Acoustic waves clear micro-plaque and stimulate new blood vessel growth (angiogenesis).",
    },
    {
      number: 2,
      icon: FaSyringe,
      title: "P-Shot® (PRP)",
      description: "Growth factors from your own blood are injected to rejuvenate nerve endings and tissue.",
    },
    {
      number: 3,
      icon: FaDna,
      title: "Hormone Optimization",
      description: "We review Testosterone levels to ensure your body has the chemical fuel it needs.",
    },
    {
      number: 4,
      icon: FaCheckCircle,
      title: "Restoration",
      description: "Over 6-12 weeks, blood flow improves, allowing for natural, spontaneous erections.",
    },
  ];

  const faqs = [
    {
      question: "Is Shockwave Therapy painful?",
      answer:
        "Not at all. It is a non-invasive, outpatient procedure. You will feel a tapping sensation, but no anaesthetic is required, and there is zero downtime. You can drive home immediately.",
    },
    {
      question: "How is this different from Viagra/Cialis?",
      answer:
        "Pills are a 'band-aid'—they temporarily force blood flow for a few hours. Our regenerative treatments (Shockwave & PRP) aim to repair the blood vessels and tissue, offering a lasting restoration of function.",
    },
    {
      question: "How quickly will I see results?",
      answer:
        "Tissue regeneration takes time. While some men notice improvements after 2-3 sessions, the peak benefit is usually seen 8-12 weeks after the course is completed as new blood vessels fully form.",
    },
    {
      question: "Can I treat ED if I have diabetes?",
      answer:
        "Yes. Diabetic ED is often vascular (blood flow related). Shockwave therapy is particularly effective for diabetic patients as it directly targets the compromised blood vessels.",
    },
  ];

  return (
    <>
      {/* --- HERO SECTION (Kept Standard) --- */}
      <section className="relative min-h-[55vh] md:min-h-[65vh] flex items-center justify-center overflow-hidden font-inter">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white z-10" />
          <img
            src="/ed_hero.jpg"
            alt="Male Health Consultation"
            className="w-full h-full object-cover"
            onError={(e) => (e.currentTarget.src = "/hero_img.png")}
          />
        </div>

        <div className="relative z-20 flex h-full w-full items-center mt-10 md:mt-0">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.div
                className="inline-block px-4 py-2 bg-[#4041d1]/10 text-[#4041d1] rounded-full text-xs font-inter font-bold mb-4 uppercase tracking-wider"
                variants={itemVariants}
              >
                Restorative Medicine
              </motion.div>

              <motion.h1
                className="text-3xl lg:text-5xl font-raleway text-slate-900 font-bold leading-snug mb-4"
                variants={itemVariants}
              >
                Erectile Dysfunction Treatment
                <span className="block mt-2 text-xl lg:text-2xl font-medium text-slate-600 font-inter">
                  Treat the Root Cause, Not Just Symptoms
                </span>
              </motion.h1>

              <motion.div
                variants={itemVariants}
                className="flex justify-center mt-8"
              >
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    window.dispatchEvent(
                      new CustomEvent("open-contact-drawer")
                    );
                  }}
                  className="px-8 py-4 flex items-center justify-center text-sm cursor-pointer bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-xl font-inter font-bold transition-all duration-300 shadow-xl shadow-blue-500/25 gap-2 group"
                >
                  <FaUserMd className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  Book Confidential Consult
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: SYMPTOMS (Using ServiceOverview Card Style) --- */}
      <section className="py-24 bg-white font-inter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-4"
            >
              Signs You May Need Treatment
            </motion.h2>
            <p className="text-slate-600 text-lg">
              ED is rarely "just in your head." If you recognize these signs, it is likely a treatable vascular issue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {symptoms.map((symptom, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-2xl hover:border-[#4041d1]/20 transition-all duration-500 flex flex-col h-full group"
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${symptom.color} flex items-center justify-center mb-6 text-2xl transition-transform group-hover:scale-110`}
                >
                  <symptom.icon />
                </div>

                <h3 className="text-xl font-raleway font-bold text-slate-900 mb-3 group-hover:text-[#4041d1] transition-colors">
                  {symptom.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed font-inter">
                  {symptom.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 3: THE PROTOCOL (Using Dark Blue Scientific Style) --- */}
      <section
        className="relative py-20 lg:py-28 bg-[#0A1128] overflow-hidden font-inter"
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 10%, rgba(64, 65, 209, 0.15) 0%, transparent 40%)",
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div
              className="inline-block px-4 py-1.5 bg-[#4041d1]/20 text-[#8ea3ff] rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-6 border border-[#4041d1]/30 font-raleway"
              variants={itemVariants}
            >
              Our Protocol
            </motion.div>

            <motion.h2
              className="text-3xl md:text-4xl font-raleway font-bold text-white leading-tight mb-6 tracking-tight"
              variants={itemVariants}
            >
              The "Vascular Restoration" Method
            </motion.h2>

            <motion.p
              className="text-base text-slate-200 leading-relaxed max-w-3xl mx-auto font-medium font-inter"
              variants={itemVariants}
            >
              We combine Low-Intensity Shockwave Therapy (LiSWT) with the P-Shot® (PRP) to tackle ED from two angles: clearing blockages and regenerating tissue.
            </motion.p>
          </motion.div>

          {/* Interactive Steps Display */}
          <div className="max-w-6xl mx-auto mt-16 relative">
             {/* Current Active Step Badge */}
             <div className="text-center mb-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="inline-flex items-center gap-3 px-6 py-3 bg-[#4041d1]/10 border border-[#4041d1]/40 rounded-full shadow-[0_0_15px_rgba(64,65,209,0.25)] backdrop-blur-md"
                  >
                    <span className="flex h-2 w-2 rounded-full bg-[#4041d1] animate-pulse shadow-[0_0_8px_#4041d1]" />
                    <span className="text-xs font-bold text-white uppercase tracking-[0.25em] font-raleway">
                      Step 0{protocolSteps[activeStep].number}: {protocolSteps[activeStep].title}
                    </span>
                  </motion.div>
                </AnimatePresence>
            </div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="hidden lg:block absolute top-[100px] left-0 w-full h-[1px] border-t border-dashed border-white/10 -z-10" />

              {protocolSteps.map((step, index) => {
                const IconComponent = step.icon;
                const isActive = activeStep === index;

                return (
                  <motion.div
                    key={index}
                    className="relative group cursor-pointer"
                    onClick={() => setActiveStep(index)}
                    variants={itemVariants}
                  >
                    <div
                      className={`p-6 rounded-[2rem] border transition-all duration-300 h-full flex flex-col ${
                        isActive
                          ? "border-[#4041d1] bg-white shadow-xl shadow-[#4041d1]/20 scale-105 z-20"
                          : "border-white/10 bg-white/[0.04] opacity-70 hover:opacity-100"
                      }`}
                    >
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 ${
                          isActive
                            ? "bg-[#4041d1] text-white shadow-lg"
                            : "bg-white/10 text-slate-300 group-hover:text-[#4041d1]"
                        }`}
                      >
                        <IconComponent className="w-5 h-5" />
                      </div>

                      <h3
                        className={`font-raleway font-bold mb-2 text-base transition-colors ${
                          isActive ? "text-slate-900" : "text-white"
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p
                        className={`text-xs leading-relaxed font-inter transition-colors ${
                          isActive ? "text-slate-600" : "text-slate-400"
                        }`}
                      >
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: DOCTOR / TRUST SECTION (Image Placeholder) --- */}
      <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
               <div className="w-full md:w-1/2">
                   {/* IMAGE PLACEHOLDER: Doctor interacting with patient */}
                   <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3] group">
                       <div className="absolute inset-0 bg-indigo-900/10 group-hover:bg-transparent transition-colors duration-500"/>
                        <img 
                            src="/doctor_consult.jpg" 
                            alt="Doctor Consultation" 
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                            onError={(e) => (e.currentTarget.src = "/hero_img.png")}
                        />
                   </div>
               </div>
               <div className="w-full md:w-1/2">
                   <h3 className="text-3xl font-raleway font-bold text-slate-900 mb-6">
                       Discreet, Private & Professional
                   </h3>
                   <p className="text-slate-600 font-inter leading-relaxed mb-6">
                       We understand that discussing sexual health can be difficult. That is why our clinic offers a strictly confidential, judgement-free environment.
                   </p>
                   <ul className="space-y-4 mb-8">
                       {[
                           "Direct access to GMC-Registered Doctors",
                           "No GP referral required",
                           "Same-day treatments available"
                       ].map((item, i) => (
                           <li key={i} className="flex items-center gap-3 text-slate-700 font-bold font-inter text-sm">
                               <FaCheckCircle className="text-[#4041d1]"/> {item}
                           </li>
                       ))}
                   </ul>
               </div>
          </div>
      </section>

      {/* --- SECTION 5: FAQs --- */}
      <section id="faqs" className="py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-raleway font-bold text-slate-900 mb-4">
              Common Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors duration-300"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="font-raleway font-bold text-slate-900 pr-4 text-sm md:text-base">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 w-8 h-8 bg-[#4041d1]/10 rounded-full flex items-center justify-center text-[#4041d1]">
                    {openFAQIndex === index ? <FaMinus className="w-3 h-3"/> : <FaPlus className="w-3 h-3"/>}
                  </div>
                </button>

                <AnimatePresence>
                  {openFAQIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 border-t border-slate-100 pt-4">
                        <p className="font-inter text-sm text-slate-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER CTA (Imported Component) --- */}
      <ContactCTASection />
      
      <Footer />
    </>
  );
}
