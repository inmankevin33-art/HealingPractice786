"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  FaPlus,
  FaMinus,
  FaUserMd,
  FaPrescriptionBottleAlt,
  FaHeartbeat,
  FaBalanceScale,
  FaCheckCircle,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPills,
  FaExclamationTriangle,
  FaFileMedical,
  FaHistory
} from "react-icons/fa";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/ContactCTASection";

interface PersonalisedEDMedicationProps {
  locationName?: string;
  servingAreas?: string;
}

export default function PersonalisedEDMedicationClient({
  locationName = "St Albans",
  servingAreas = "Harpenden • Luton • Watford • Hertfordshire",
}: PersonalisedEDMedicationProps) {

  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoaded(true);
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  const handleAction = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("open-contact-drawer"));
    setTimeout(() => {
      const section = document.getElementById("contact-form-section");
      if (section) {
        const headerOffset = 100;
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }, 100);
  };

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i * 0.15, ease: "easeOut" },
    }),
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // --- WHO IT'S FOR CARDS (Updated to match Symptoms styling with icons) ---
  const candidates = [
    {
      title: "Limited Response to Standard Tablets",
      description: "Inadequate or inconsistent results despite appropriate use.",
      icon: FaPills,
      color: "bg-rose-50 text-rose-600",
    },
    {
      title: "Dose-Limiting Side Effects",
      description: "Flushing, headache or intolerance preventing dose escalation.",
      icon: FaExclamationTriangle,
      color: "bg-amber-50 text-amber-600",
    },
    {
      title: "Complex Medical Profile",
      description: "Diabetes, hypertension or multiple medications affecting response.",
      icon: FaFileMedical,
      color: "bg-indigo-50 text-indigo-600",
    },
    {
      title: "Previous PDE5 Inhibitor Use",
      description: "Suboptimal outcome despite correct timing and dosing.",
      icon: FaHistory,
      color: "bg-teal-50 text-teal-600",
    },
  ];

  // --- PROTOCOL STEPS ---
  const protocolSteps = [
    {
      number: 1,
      icon: FaUserMd,
      title: "Comprehensive Assessment",
      description: "Full cardiovascular, medication and lifestyle review to determine suitability.",
    },
    {
      number: 2,
      icon: FaHeartbeat,
      title: "Pharmacological Review",
      description: "Assessment of prior dosing response, tolerability and therapeutic targets.",
    },
    {
      number: 3,
      icon: FaPrescriptionBottleAlt,
      title: "Personalised Formulation",
      description: "Custom-formulated prescription medication where clinically appropriate.",
    },
    {
      number: 4,
      icon: FaBalanceScale,
      title: "Direct Dispensing",
      description: "Medication supplied directly with structured follow-up and dose refinement.",
    },
  ];

  const faqs = [
    {
      question: "Is personalised ED medication stronger than standard tablets?",
      answer: "The aim is precision rather than strength. Treatment is tailored to improve response and tolerability where fixed-dose therapy has been insufficient.",
    },
    {
      question: "Why not simply increase the dose?",
      answer: "Higher doses may increase side effects without improving response. A personalised approach considers pharmacokinetics and interactions.",
    },
    {
      question: "Is this safe if I have diabetes or high blood pressure?",
      answer: "Suitability depends on cardiovascular risk and medication profile. A full medical assessment is required before prescribing.",
    },
    {
      question: "How is medication supplied?",
      answer: "Prescription-only medication is dispensed directly following clinical assessment and confirmation of suitability.",
    },
    {
      question: "Is this suitable for everyone?",
      answer: "No. Erectile dysfunction has multiple causes. Treatment is offered only where clinically appropriate following full evaluation.",
    },
  ];

  return (
    <>
      {/* --- HERO SECTION (Restored fully compliant layout) --- */}
      <div className="relative min-h-[100vh] lg:min-h-[calc(100vh-5rem)] overflow-hidden flex items-end justify-center bg-black">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80 z-10" />
          <img
            src="/personalised-meds-hero.webp"
            alt="Personalised erectile dysfunction medication consultation"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 pb-48 md:pb-56">
          <motion.h1
            custom={1}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeUpVariants}
            // Removed the overly large lg:text-6xl and matched your main ED page sizing
            className="md:text-5xl text-[28px] sm:text-3xl font-bold font-raleway text-white leading-tight mb-4 tracking-tight px-2"
          >
            Personalised ED Medication <br className="hidden md:block" /> 
            in {locationName}
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeUpVariants}
            className="mt-6 text-sm md:text-lg text-white/90 font-inter leading-relaxed max-w-2xl mx-auto"
          >
            Advanced, doctor-led formulation for men who have not achieved satisfactory results or experienced side effects with standard tablets.
          </motion.p>

          <motion.div custom={3} initial="hidden" animate={isLoaded ? "visible" : "hidden"} variants={fadeUpVariants} className="mt-10 flex justify-center">
            <button
              onClick={handleAction}
              className="px-10 py-4 flex items-center justify-center text-sm cursor-pointer bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-xl font-bold transition-all duration-300 gap-2 shadow-xl shadow-[#4041d1]/20 active:scale-95 font-inter"
            >
              <FaEnvelope className="w-4 h-4" /> Book Medical Consultation
            </button>
          </motion.div>

          {/* Location Badge */}
          <motion.div 
            custom={4}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeUpVariants}
            className="inline-flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 px-6 py-3 bg-[#4041d1] text-white rounded-2xl sm:rounded-full text-[10px] md:text-xs mt-8 font-bold uppercase tracking-widest font-inter shadow-lg border border-white/10 max-w-[90%] mx-auto text-center"
          >
             <div className="flex items-center gap-1.5 text-white">
               <FaMapMarkerAlt className="w-3 h-3" /> 
               <span>Serving:</span>
             </div>
             <span className="leading-relaxed">{servingAreas}</span>
          </motion.div>
        </div>

        {/* Restored Feature Banner / Trust Bar */}
        <div className={`md:block absolute hidden bottom-0 left-0 right-0 bg-[#0f172a]/90 backdrop-blur-md border-t border-white/10 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="px-4 py-5">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-4 gap-4">
                {[
                  { label: "GMC-registered doctor", sub: "Clinical Assessment" },
                  { label: "Bespoke Formulas", sub: "Tailored to your profile" },
                  { label: "Discreet location", sub: "St Albans & Birmingham" },
                  { label: "Private dispensing", sub: "Directly from clinic" }
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

      {/* --- WHO THIS IS FOR (Restored Hover & Scroll Animations) --- */}
      <section className="py-24 bg-slate-50 font-inter relative z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-6"
            >
              Who This Programme Is Designed For
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {candidates.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 hover:border-[#4041d1]/20 transition-all duration-300 flex flex-col h-full group cursor-default"
              >
                <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-6 text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  <item.icon />
                </div>
                <h3 className="text-xl font-raleway font-bold text-slate-900 mb-3 group-hover:text-[#4041d1] transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-inter">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROTOCOL SECTION (Restored Interactive Stepper) --- */}
      <section className="relative py-20 lg:py-28 bg-[#0A1128] overflow-hidden font-inter" style={{ backgroundImage: "radial-gradient(circle at 10% 10%, rgba(64, 65, 209, 0.15) 0%, transparent 40%)" }}>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
            <motion.div className="inline-block px-5 py-2 bg-[#4041d1]/20 text-[#8ea3ff] rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 border border-[#4041d1]/30 font-raleway shadow-[0_0_15px_rgba(64,65,209,0.1)]" variants={itemVariants}>
              Clinical Protocol
            </motion.div>
            <motion.h2 className="text-3xl md:text-5xl font-raleway font-bold text-white leading-tight mb-8 tracking-tight" variants={itemVariants}>
              The Precision Pharmacological Pathway
            </motion.h2>
          </motion.div>

          <div className="max-w-6xl mx-auto mt-12 relative">
            <div className="text-center mb-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#4041d1]/20 border border-[#4041d1]/50 rounded-full shadow-[0_0_25px_rgba(64,65,209,0.3)] backdrop-blur-md"
                >
                  <span className="flex h-3 w-3 rounded-full bg-[#4041d1] animate-pulse shadow-[0_0_10px_#4041d1]" />
                  <span className="text-sm font-bold text-white uppercase tracking-[0.2em] font-raleway">
                    Step 0{protocolSteps[activeStep].number}: {protocolSteps[activeStep].title}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="hidden lg:block absolute top-[100px] left-0 w-full h-[1px] border-t border-dashed border-white/10 -z-10" />
              {protocolSteps.map((step, index) => {
                const IconComponent = step.icon;
                const isActive = activeStep === index;
                return (
                  <motion.div key={index} className="relative group cursor-pointer" onClick={() => setActiveStep(index)} variants={itemVariants}>
                    <div className={`p-6 rounded-[2.5rem] border transition-all duration-300 h-full flex flex-col ${isActive ? "border-[#4041d1] bg-white shadow-[0_0_40px_rgba(64,65,209,0.2)] scale-105 z-20" : "border-white/10 bg-white/[0.03] opacity-80 hover:opacity-100 hover:bg-white/[0.07]"}`}>
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${isActive ? "bg-[#4041d1] text-white shadow-lg scale-110" : "bg-white/10 text-slate-300 group-hover:text-[#4041d1] group-hover:scale-105"}`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h3 className={`font-raleway font-bold mb-3 text-lg transition-colors ${isActive ? "text-slate-900" : "text-white"}`}>
                        {step.title}
                      </h3>
                      <p className={`text-xs leading-relaxed font-inter transition-colors ${isActive ? "text-slate-600 font-medium" : "text-slate-400"}`}>
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

      {/* --- FAQ (Restored Typography & Styling) --- */}
      <section className="py-24 bg-white font-inter">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-raleway font-bold text-slate-900 mb-6">
              Common Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div key={index} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                <button
                  className="w-full p-6 md:p-8 text-left flex items-center justify-between hover:bg-slate-50 transition-colors duration-300"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="font-raleway font-bold text-slate-900 pr-8 text-base md:text-lg">
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${openFAQIndex === index ? 'bg-[#4041d1] text-white' : 'bg-[#4041d1]/10 text-[#4041d1]'}`}>
                    {openFAQIndex === index ? <FaMinus className="w-4 h-4" /> : <FaPlus className="w-4 h-4" />}
                  </div>
                </button>
                <AnimatePresence>
                  {openFAQIndex === index && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <div className="px-6 md:px-8 pb-8 border-t border-slate-100 pt-6">
                        <p className="font-inter text-base text-slate-600 leading-relaxed font-medium">
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

      <ContactCTASection />
      <LocationSection />
      <Footer />
    </>
  );
}
