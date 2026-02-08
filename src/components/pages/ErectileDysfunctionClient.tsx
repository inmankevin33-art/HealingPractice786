"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
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
  FaEnvelope, // Icon for the consultation button
} from "react-icons/fa";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/ContactCTASection";

export default function ErectileDysfunctionClient() {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);
  const [activeStep, setActiveStep] = useState(0);

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // --- SMART SCROLL HANDLER ---
  const handleAction = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // 1. Signal the consultation drawer to open
    window.dispatchEvent(new CustomEvent("open-contact-drawer"));
    
    // 2. Wait 100ms for the drawer animation to start, then scroll
    setTimeout(() => {
      const section = document.getElementById("contact-form-section");
      if (section) {
        const headerOffset = 100; 
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 100);
  };

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

  // --- DATA: SYMPTOMS ---
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
      description: "Feeling less pleasure or reduced sensitivity, often linked to blood flow.",
      icon: FaFeather,
      color: "bg-teal-50 text-teal-600",
    },
    {
      title: "Reliance on Pills",
      description: "Needing Viagra or Cialis for confidence, and wanting a longer-term approach.",
      icon: FaPills,
      color: "bg-[#f0f0ff] text-[#4041d1]",
    },
  ];

  // --- DATA: PROTOCOL STEPS ---
  const protocolSteps = [
    {
      number: 1,
      icon: FaWaveSquare,
      title: "Shockwave Therapy",
      description: "Low-intensity acoustic waves may stimulate new blood vessel growth (angiogenesis) and support healthier circulation.",
    },
    {
      number: 2,
      icon: FaSyringe,
      title: "PRP (P-Shot®)",
      description: "Platelet-rich plasma from your own blood is injected to support tissue repair and nerve responsiveness.",
    },
    {
      number: 3,
      icon: FaDna,
      title: "Hormone Review",
      description: "If appropriate, we review blood tests (including testosterone) to ensure contributing factors are addressed.",
    },
    {
      number: 4,
      icon: FaCheckCircle,
      title: "Recovery & Restoration",
      description: "Regeneration takes time. Many men notice gradual improvement over weeks as tissue health returns.",
    },
  ];

  const faqs = [
    {
      question: "Is Shockwave Therapy painful?",
      answer: "Most men find it very tolerable. You may feel a tapping sensation, but anaesthetic is not usually required. There is typically no downtime and you can drive home immediately.",
    },
    {
      question: "How is this different from Viagra/Cialis?",
      answer: "Tablets can help temporarily by increasing blood flow for a few hours. Regenerative treatments such as shockwave therapy and PRP aim to support vascular function and tissue health over time.",
    },
    {
      question: "How quickly will I see results?",
      answer: "Tissue healing takes time. Some men notice changes after a few sessions, but improvements are often more noticeable in the weeks following treatment. Results vary based on overall health.",
    },
    {
      question: "Can I treat ED if I have diabetes?",
      answer: "Often, yes. Diabetes-related ED is commonly linked to blood vessel and nerve changes. A medical consultation is important to assess suitability and cardiovascular risk.",
    },
    {
      question: "Is this treatment suitable for everyone?",
      answer: "Not always. Suitability depends on the cause of erectile dysfunction, overall health, and medications. A medical consultation is required to assess appropriateness.",
    },
  ];

  return (
    <>
     {/* --- HERO SECTION (Centered Text, Blurred & Shifted Image) --- */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden font-inter">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          {/* Gradient Overlay: Keeps the background dark for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70 z-10" />
          
          <img
            src="/ed-doctor-consultation.webp" 
            alt="Private doctor consultation for erectile dysfunction treatment"
            // VISUAL UPDATES:
            // 1. 'blur': Applies a distinct blur for text readability.
            // 2. 'object-[50%_25%]': Shifts focus upwards to show the doctor's head under the nav.
            // 3. 'scale-105': Slightly zooms in to prevent blurred edges from showing.
            className="w-full h-full object-cover object-[50%_25%] blur scale-105 transition-all duration-700" 
          />
        </div>

        <div className="relative z-20 flex h-full w-full items-center mt-10 md:mt-0">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="max-w-4xl mx-auto"
            >
              {/* HEADING */}
              <motion.h1
                className="text-4xl md:text-6xl font-raleway font-bold text-white leading-tight mb-4 tracking-tight drop-shadow-2xl"
                variants={itemVariants}
              >
                Erectile Dysfunction Treatment
                <span className="block mt-3 text-xl md:text-3xl font-medium text-blue-100">
                  Healing-PRP Clinics
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="mt-6 text-sm md:text-base text-white/90 max-w-2xl mx-auto leading-relaxed font-inter font-medium drop-shadow-md"
              >
                Patient-centred, non-surgical solutions to support confidence,
                sensitivity and intimacy — delivered by a fully insured,
                GMC-registered doctor.
              </motion.p>

              {/* TRUST BADGE & ACTION GROUP */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col items-center justify-center mt-10 gap-6"
              >
                {/* TRUST BADGE */}
                <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full text-[11px] font-bold uppercase tracking-[0.2em] font-inter shadow-sm">
                  GMC-Registered | CE-Marked Equipment | Confidential
                </div>

                {/* BUTTON */}
                <button
                  onClick={handleAction}
                  className="px-10 py-3.5 flex items-center justify-center text-sm cursor-pointer bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-xl font-bold transition-all duration-300 gap-2 shadow-xl shadow-[#4041d1]/20 active:scale-95 font-inter group"
                >
                  <FaEnvelope className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  Book Consultation
                </button>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SYMPTOMS (Card Style) --- */}
      {/* VISUAL UPDATE: Changed py-24 to pt-12 pb-24 to close the gap */}
      <section className="pt-12 pb-24 bg-slate-50 font-inter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            {/* VISUAL UPDATE: Reduced font size to text-3xl md:text-4xl */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-6"
            >
              Signs You May Benefit From Treatment
            </motion.h2>
            <p className="text-slate-600 text-lg leading-relaxed font-inter">
              Erectile dysfunction is rarely &quot;just psychological.&quot; Recognising these signs early allows treatment to be more effective.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* --- PROTOCOL (Dark Blue Scientific Style) --- */}
      <section
        className="relative py-20 lg:py-28 bg-[#0A1128] overflow-hidden font-inter"
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 10%, rgba(64, 65, 209, 0.15) 0%, transparent 40%)",
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div
              className="inline-block px-5 py-2 bg-[#4041d1]/20 text-[#8ea3ff] rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 border border-[#4041d1]/30 font-raleway shadow-[0_0_15px_rgba(64,65,209,0.1)]"
              variants={itemVariants}
            >
              Our Protocol
            </motion.div>
            <motion.h2
              className="text-3xl md:text-5xl font-raleway font-bold text-white leading-tight mb-8 tracking-tight"
              variants={itemVariants}
            >
              The &quot;Vascular Restoration&quot; Method
            </motion.h2>
            <motion.p
              className="text-lg text-slate-200 leading-relaxed max-w-3xl mx-auto font-medium font-inter"
              variants={itemVariants}
            >
              We combine Low-Intensity Shockwave Therapy (LiSWT) with Platelet-Rich
              Plasma (PRP) to support vascular regeneration and tissue repair.
              This approach is designed to improve penile blood flow, enhance
              nerve responsiveness, and support natural erectile function over
              time.
            </motion.p>
          </motion.div>

          {/* Interactive Steps */}
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
                    Step 0{protocolSteps[activeStep].number}:{" "}
                    {protocolSteps[activeStep].title}
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
                      className={`p-6 rounded-[2.5rem] border transition-all duration-300 h-full flex flex-col ${
                        isActive
                          ? "border-[#4041d1] bg-white shadow-[0_0_40px_rgba(64,65,209,0.2)] scale-105 z-20"
                          : "border-white/10 bg-white/[0.03] opacity-80 hover:opacity-100 hover:bg-white/[0.07]"
                      }`}
                    >
                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                          isActive
                            ? "bg-[#4041d1] text-white shadow-lg scale-110"
                            : "bg-white/10 text-slate-300 group-hover:text-[#4041d1] group-hover:scale-105"
                        }`}
                      >
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h3
                        className={`font-raleway font-bold mb-3 text-lg transition-colors ${
                          isActive ? "text-slate-900" : "text-white"
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p
                        className={`text-xs leading-relaxed font-inter transition-colors ${
                          isActive ? "text-slate-600 font-medium" : "text-slate-400"
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

      {/* --- WHAT IT CAN / CANNOT DO (Trust Section) --- */}
      <section className="py-20 bg-white font-inter">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <h3 className="text-3xl font-raleway font-bold text-slate-900 mb-6">
            What PRP & Shockwave Therapy Can — and Cannot — Do
          </h3>

          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            Regenerative treatments such as PRP and shockwave therapy can be
            effective for many men with vascular-related erectile dysfunction.
            Honest advice matters, and suitability should be assessed medically.
          </p>

          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-inner">
            <ul className="space-y-4 text-slate-700 text-sm md:text-base font-medium">
              <li className="flex items-start gap-3">
                 <FaCheckCircle className="text-[#4041d1] mt-1 shrink-0" />
                 <span>These treatments aim to support blood flow and tissue health — they are not instant fixes.</span>
              </li>
              <li className="flex items-start gap-3">
                 <FaCheckCircle className="text-[#4041d1] mt-1 shrink-0" />
                 <span>Results vary depending on age, overall health, diabetes control, and medication use.</span>
              </li>
              <li className="flex items-start gap-3">
                 <FaCheckCircle className="text-slate-400 mt-1 shrink-0" />
                 <span>They cannot reverse severe nerve damage or advanced structural disease.</span>
              </li>
              <li className="flex items-start gap-3">
                 <FaCheckCircle className="text-[#4041d1] mt-1 shrink-0" />
                 <span>A medical consultation is required to assess suitability before treatment is recommended.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- DOCTOR & TRUST (Image Section) --- */}
      <section className="py-24 bg-slate-50 font-inter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3] group border-4 border-white">
              <div className="absolute inset-0 bg-indigo-900/10 group-hover:bg-transparent transition-colors duration-500" />
              <img
                src="/doctor_consult.jpg"
                alt="Confidential doctor-led consultation"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                onError={(e) => (e.currentTarget.src = "/hero_img.png")}
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="inline-block px-4 py-1.5 bg-[#4041d1]/10 text-[#4041d1] rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                Patient Privacy Priority
            </div>
            <h3 className="text-3xl md:text-5xl font-raleway font-bold text-slate-900 mb-6 leading-tight">
              Discreet, Private & Professional
            </h3>
            <p className="text-slate-600 font-inter text-lg leading-relaxed mb-8">
              We understand that discussing sexual health can feel uncomfortable.
              Our clinics provide a discreet, confidential, and judgement-free
              medical environment, where concerns are addressed professionally
              and with respect.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Direct access to GMC-Registered Doctors",
                "No GP referral required",
                "Same-day appointments may be available",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-slate-800 font-bold font-inter text-base"
                >
                  <FaCheckCircle className="text-[#4041d1] text-xl" /> {item}
                </li>
              ))}
            </ul>

            <div className="p-6 bg-white rounded-2xl border border-slate-200 mb-8 shadow-sm">
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  Our pricing is intentionally kept accessible compared with many
                  London clinics, while maintaining the same medical-grade
                  equipment, evidence-based protocols, and experienced doctor-led
                  care.
                </p>
            </div>

            {/* BUTTON FIX: Uses handleAction */}
            <button
              onClick={handleAction}
              className="px-10 py-3.5 flex items-center justify-center text-sm cursor-pointer bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-xl font-bold transition-all duration-300 gap-2 shadow-xl shadow-[#4041d1]/20 active:scale-95 font-inter group"
            >
              <FaEnvelope className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              Speak To A Specialist
            </button>
          </div>
        </div>
      </section>

      {/* --- FAQs --- */}
      <section id="faqs" className="py-24 bg-white font-inter">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-raleway font-bold text-slate-900 mb-6">
              Common Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <button
                  className="w-full p-6 md:p-8 text-left flex items-center justify-between hover:bg-slate-50 transition-colors duration-300"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="font-raleway font-bold text-slate-900 pr-8 text-base md:text-lg">
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${openFAQIndex === index ? 'bg-[#4041d1] text-white' : 'bg-[#4041d1]/10 text-[#4041d1]'}`}>
                    {openFAQIndex === index ? (
                      <FaMinus className="w-4 h-4" />
                    ) : (
                      <FaPlus className="w-4 h-4" />
                    )}
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
      <Footer />
    </>
  );
}
