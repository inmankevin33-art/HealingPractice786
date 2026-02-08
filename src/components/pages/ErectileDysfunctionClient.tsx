"use client";

import Link from "next/link"; // <--- ADD THIS
// ... rest of your imports
import { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  FaPlus,
  FaMinus,
  FaBatteryQuarter,
  FaHourglassEnd,
  FaFeather,
  FaPills,
  FaWaveSquare,
  FaSyringe,
  FaDna,
  FaCheckCircle,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight, // Correctly imported
} from "react-icons/fa";
import LocationSection from "@/components/LocationSection"; // <--- ADD THIS
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/ContactCTASection";

// --- INTERFACE FOR DYNAMIC LOCATION PROPS ---
interface ErectileDysfunctionProps {
  locationName?: string;
  servingAreas?: string;
  pShotLink?: string; // <--- ADDED THIS: Required to fix the type error
}

export default function ErectileDysfunctionClient({
  locationName = "St Albans", // Default if no prop provided
  servingAreas = "Harpenden • Luton • Watford • Hertfordshire", // Default areas
  pShotLink = "/p-shot-treatment", // <--- ADDED THIS: Default link if not provided
}: ErectileDysfunctionProps) {
  
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

  // --- UNIFIED ACTION HANDLER ---
  const handleAction = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("open-contact-drawer"));
    setTimeout(() => {
      const section = document.getElementById("contact-form-section");
      if (section) {
        const headerOffset = 100;
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  // --- ANIMATION VARIANTS ---
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

  // --- DATA SECTIONS ---
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
      {/* --- HERO SECTION --- */}
      <div className="relative md:h-[calc(100vh-4rem)] pb-5 md:pb-0 lg:h-[calc(100vh-5rem)] overflow-hidden flex items-center justify-center bg-black">
        {/* Background Section */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" /> 
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80 z-10" />
          <img 
            src="/ed-doctor-consultation.webp" 
            alt="Erectile dysfunction treatment consultation" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Main Content */}
        <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
          
          {/* Headline */}
          <motion.h1 
            custom={1}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeUpVariants}
            className="md:text-5xl text-3xl font-bold font-raleway text-white leading-tight mb-3 tracking-tight"
          >
            Erectile Dysfunction Treatment<br />
            {/* DYNAMIC SUB-HEADING: Uses props */}
            <span className="block mt-2">Healing-PRP Clinics, {locationName}</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.h2 
            custom={2}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeUpVariants}
            className="mt-1 md:text-lg text-base text-blue-100 font-medium font-raleway leading-relaxed"
          >
            Doctor-led. Patient-focused. Regenerative care
          </motion.h2>

          {/* Description */}
          <motion.p 
            custom={3}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeUpVariants}
            className="mt-3 text-sm md:text-base text-white/80 font-inter leading-relaxed max-w-2xl mx-auto mb-8"
          >
            Evidence-based, non-surgical solutions to support confidence, 
            sensitivity and intimacy — delivered by a fully insured, 
            GMC-registered doctor.
          </motion.p>

          {/* CTA Button */}
          <motion.div 
            custom={4}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeUpVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button 
              onClick={handleAction}
              className="px-10 py-3.5 flex items-center justify-center text-sm cursor-pointer bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-xl font-bold transition-all duration-300 gap-2 shadow-xl shadow-[#4041d1]/20 active:scale-95 font-inter"
            >
              <FaEnvelope className="w-4 h-4" /> Book Consultation
            </button>
          </motion.div>

          {/* LOCATION BADGE (Moved to bottom & Dynamic) */}
          <motion.div 
            custom={5}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeUpVariants}
            className="inline-flex items-center justify-center gap-2 px-6 py-2 bg-[#4041d1] text-white rounded-full text-[10px] md:text-xs mt-8 font-bold uppercase tracking-widest font-inter shadow-lg border border-white/10"
          >
             <FaMapMarkerAlt className="text-white/80 mb-0.5" /> 
             <span>Serving: {servingAreas}</span>
          </motion.div>

        </div>

        {/* Feature Banner / Trust Bar */}
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

      {/* --- SYMPTOMS SECTION --- */}
      <section className="py-24 bg-slate-50 font-inter relative z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-6"
            >
              Signs You May Benefit From Treatment
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-600 text-lg leading-relaxed font-inter"
            >
              Erectile dysfunction is rarely &quot;just psychological.&quot; Recognising these signs early allows treatment to be more effective.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {symptoms.map((symptom, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 hover:border-[#4041d1]/20 transition-all duration-300 flex flex-col h-full group cursor-default"
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${symptom.color} flex items-center justify-center mb-6 text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
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

      {/* --- PROTOCOL SECTION --- */}
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

      {/* --- WHAT IT CAN DO (TRUST & REALITY CHECK) --- */}
      <section className="py-24 bg-white font-inter">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-6">
              What PRP & Shockwave Therapy Can — and Cannot — Do
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Regenerative treatments such as Platelet-Rich Plasma (PRP) therapy and
              low-intensity shockwave therapy are designed to support vascular
              health and tissue regeneration in men with erectile dysfunction,
              particularly where reduced blood flow is a contributing factor.
            </p>
            <p className="text-slate-600 text-base leading-relaxed">
              For many patients, these treatments offer a non-surgical, doctor-led
              option focused on restoring natural function rather than relying
              solely on symptom-based solutions.
            </p>
          </div>

          {/* TWO-COLUMN GRID: Benefits vs. Limitations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            
            {/* COLUMN 1: What it aims to support */}
            <div className="bg-blue-50/50 p-8 rounded-3xl border border-blue-100">
              <h4 className="text-xl font-raleway font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="w-2 h-8 bg-[#4041d1] rounded-full block"></span>
                What these treatments aim to support
              </h4>
              <ul className="space-y-4">
                {[
                  "Improved penile blood flow and vascular response over time",
                  "Healthier erectile tissue and smooth muscle function",
                  "Enhanced nerve responsiveness and sensitivity",
                  "Greater confidence and more reliable erectile function as tissue health improves",
                  "Support for endothelial and microvascular health",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FaCheckCircle className="text-[#4041d1] mt-1 shrink-0" />
                    <span className="text-slate-700 text-sm md:text-base font-medium leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-blue-100/50">
                 <p className="text-xs text-slate-500 italic">
                   * These processes are gradual and depend on the body’s natural healing response. Improvement is typically seen over weeks rather than days.
                 </p>
              </div>
            </div>

            {/* COLUMN 2: Important Limitations */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
              <h4 className="text-xl font-raleway font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="w-2 h-8 bg-slate-400 rounded-full block"></span>
                Important limitations to understand
              </h4>
              <ul className="space-y-4">
                {[
                  "Results vary between individuals and are influenced by age, overall health, diabetes control, and medications.",
                  "Cannot reverse severe nerve damage, advanced structural disease, or conditions where blood supply is irreversibly compromised.",
                  "Not an instant fix — regenerative healing takes time.",
                  "A medical consultation is essential to assess suitability and identify contributing factors.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    {/* Grey Checkmark for Neutral/Cautionary items */}
                    <div className="mt-1 shrink-0 text-slate-400">
                       <FaCheckCircle className="text-slate-400" /> 
                    </div>
                    <span className="text-slate-700 text-sm md:text-base font-medium leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-slate-200">
                 <p className="text-xs text-slate-500 italic">
                   Where appropriate, regenerative treatments may be used alongside lifestyle measures or medication as part of an individualised care plan.
                 </p>
              </div>
            </div>
          </div>

          {/* LINK TO P-SHOT PAGE (CTA Box) */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-lg font-raleway font-bold text-slate-900 mb-2">
                Interested in P-Shot specifically?
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed max-w-2xl">
                For patients interested in P-Shot treatment specifically, further details about the procedure, process, and suitability are available on our dedicated page.
              </p>
            </div>
            
            <a 
              href={pShotLink} 
              // UPDATED CLASSNAME: Matches the main "Book Consultation" button style exactly
              className="shrink-0 px-8 py-3 bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-xl font-bold transition-all duration-300 text-sm flex items-center gap-2 group whitespace-nowrap shadow-xl shadow-[#4041d1]/20 active:scale-95 font-inter"
            >
              View P-Shot® Treatment
              <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
      </section>

      {/* --- DOCTOR & PRIVACY SECTION (Updated: Text-Only + 3 Buttons) --- */}
      <section className="py-24 bg-slate-50 font-inter">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Badge & Heading */}
          <div className="inline-block px-4 py-1.5 bg-[#4041d1]/10 text-[#4041d1] rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            Patient Privacy Priority
          </div>
          <h3 className="text-3xl md:text-5xl font-raleway font-bold text-slate-900 mb-8 leading-tight">
            Discreet, Private & Professional
          </h3>

          {/* New Text Content */}
          <div className="prose prose-lg prose-slate mx-auto mb-12">
            <p className="text-slate-600 font-inter text-lg leading-relaxed mb-6">
              We understand that discussing sexual health can feel uncomfortable. 
              Our clinics provide a discreet, confidential, and judgement-free 
              medical environment, where concerns are addressed professionally 
              and with respect.
            </p>
            <p className="text-slate-600 font-inter text-lg leading-relaxed">
              Erectile dysfunction often develops gradually and may reflect underlying 
              vascular or metabolic health. Seeking assessment earlier can provide 
              greater clarity, more treatment options, and a better opportunity to 
              support long-term sexual health — without pressure to proceed unless 
              it feels right for you.
            </p>
          </div>

          {/* Key Features Grid (Horizontal) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-left">
            {[
              "Direct access to GMC-Registered Doctors",
              "No GP referral required",
              "Same-day appointments may be available",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center text-center md:items-start md:text-left hover:border-[#4041d1]/30 transition-colors"
              >
                <FaCheckCircle className="text-[#4041d1] text-2xl mb-3" /> 
                <span className="text-slate-800 font-bold font-inter text-sm md:text-base">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Pricing Note */}
          <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl border border-slate-200 mb-10 shadow-sm">
            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              Our pricing is intentionally kept accessible compared with many
              London clinics, while maintaining the same medical-grade
              equipment, evidence-based protocols, and experienced doctor-led care.
            </p>
          </div>

          {/* --- ACTION BUTTONS ROW --- */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-full">
            
            {/* 1. Book Consultation (Main Action) */}
            <button
              onClick={handleAction}
              className="px-6 py-3 w-full md:w-max md:text-sm text-xs items-center justify-center cursor-pointer bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-lg font-inter font-bold transition-all duration-300 inline-flex gap-2 shadow-lg shadow-[#4041d1]/20 active:scale-95"
            >
              <FaEnvelope className="w-4 h-4" /> Book Consultation
            </button>

            {/* 2. Prices Link (Logic: Checks if Birmingham) */}
            <Link
              href={locationName === "Birmingham" ? "/birmingham/prices" : "/prices"}
              className="px-6 py-3 w-full md:w-max md:text-sm text-xs items-center justify-center cursor-pointer bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-lg font-inter font-bold transition-all duration-300 inline-flex gap-2 shadow-lg"
            >
              View Treatment Prices
            </Link>
            
            {/* 3. FAQ Link (Logic: Checks if Birmingham) */}
            <Link
              href={locationName === "Birmingham" ? "/birmingham/faq" : "/faq"}
              className="px-6 py-3 w-full md:w-max md:text-sm text-xs items-center justify-center cursor-pointer border-2 border-[#4041d1] text-[#4041d1] hover:bg-blue-50 bg-white rounded-lg font-inter font-bold transition-all duration-300 inline-flex gap-2"
            >
              View Clinic FAQs
            </Link>
            
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
      
      {/* Location Section added here */}
      <LocationSection /> 

      <Footer />
    </>
  );
}
