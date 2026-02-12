"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  FaPlus,
  FaMinus,
  FaSyringe,
  FaDna,
  FaCheckCircle,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBurn,
  FaExpandArrowsAlt,
  FaShieldAlt,
  FaArrowRight,
  FaRegClock, // Time icon
  FaLeaf,     // Natural/Treatment icon
  FaWalking,  // Downtime icon
  FaUserMd,   // Medical icon
  FaMicroscope, // Added for Exo-P section
  FaVial,       // Added for Exo-P section
} from "react-icons/fa";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/ContactCTASection";
import LocationSection from "@/components/LocationSection";

// --- INTERFACE ---
interface PShotProps {
  locationName?: string;
  servingAreas?: string;
}

export default function PShotClient({
  locationName = "St Albans",
  servingAreas = "Harpenden • Luton • Watford • Hertfordshire",
}: PShotProps) {
  
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

  // --- ACTION HANDLER ---
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

  // --- VARIANTS ---
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

  // --- DATA ---
  const benefits = [
    {
      title: "Erectile Strength",
      description:
        "Improved blood flow and tissue support may contribute to firmer, more sustainable erections in suitable patients.",
      icon: FaBurn,
      color: "bg-rose-50 text-rose-600",
    },
    {
      title: "Enhanced Sensitivity",
      description:
        "Supporting nerve responsiveness and tissue health may improve sensation and overall sexual experience.",
      icon: FaDna,
      color: "bg-indigo-50 text-indigo-600",
    },
    {
      title: "Support for Peyronie’s",
      description:
        "May support tissue quality in selected cases where curvature or scar tissue are contributing factors.",
      icon: FaExpandArrowsAlt,
      color: "bg-teal-50 text-teal-600",
    },
    {
      title: "Improved Fullness",
      description:
        "Some patients report improved firmness or fullness as tissue health and vascular function improve over time.",
      icon: FaExpandArrowsAlt,
      color: "bg-[#f0f0ff] text-[#4041d1]",
    },
  ];

  const protocolSteps = [
    {
      number: 1,
      icon: FaSyringe,
      title: "Blood Draw",
      description: "A small amount of blood is drawn from your arm, similar to a standard blood test. Quick and simple.",
    },
    {
      number: 2,
      icon: FaDna,
      title: "PRP Preparation",
      description: "Your blood is spun in a centrifuge to separate the Platelet-Rich Plasma (PRP), concentrating healing factors.",
    },
    {
      number: 3,
      icon: FaShieldAlt,
      title: "Numbing Application",
      description: "A potent local anaesthetic cream is applied to ensure the procedure is comfortable and virtually pain-free.",
    },
    {
      number: 4,
      icon: FaSyringe,
      title: "The Injection",
      description: "The PRP is injected into specific areas of the penis using a tiny needle. The process takes just a few minutes.",
    },
  ];

  const faqs = [
    {
      question: "Is the P-Shot painful?",
      answer:
        "Local anaesthetic is used to maximise comfort during the procedure. Most patients describe the treatment as well tolerated, with only mild temporary discomfort at the injection sites.",
    },
    {
      question: "How long does the procedure take?",
      answer:
        "The full appointment usually lasts around 45–60 minutes. This includes consultation review, blood collection, PRP preparation, and the treatment itself.",
    },
    {
      question: "When might I notice changes?",
      answer:
        "Individual responses vary. Some men notice gradual changes within a few weeks, while regenerative processes may continue to develop over several months as tissue healing occurs.",
    },
    {
      question: "Is the P-Shot permanent?",
      answer:
        "PRP therapy is not considered a permanent treatment. While some men report sustained improvement, results vary and may gradually change over time depending on age, vascular health, and lifestyle factors. Maintenance treatment can be discussed where appropriate.",
    },
    {
      question: "How long may the effects last?",
      answer:
        "Duration varies depending on age, vascular health, and underlying conditions. Some patients report sustained improvement for many months, and maintenance treatment may be discussed where appropriate.",
    },
    {
      question: "Are there any side effects?",
      answer:
        "Because PRP is derived from your own blood, the risk of allergic reaction is extremely low. Temporary swelling, mild bruising, or tenderness at the injection site can occur and usually settles within a few days.",
    },
  ];

  return (
    <>
      {/* --- HERO SECTION --- */}
      <div className="relative md:h-[calc(100vh-4rem)] pb-5 md:pb-0 lg:h-[calc(100vh-5rem)] overflow-hidden flex items-center justify-center bg-black">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" /> 
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80 z-10" />
          <img 
            src="/ed-doctor-consultation.webp" 
            alt="P-Shot treatment consultation" 
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => (e.currentTarget.src = "/ed-doctor-consultation.webp")}
          />
        </div>

        <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
          <motion.h1 
            custom={1}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeUpVariants}
            className="md:text-5xl text-3xl font-bold font-raleway text-white leading-tight mb-3 tracking-tight"
          >
            The P-Shot (Priapus Shot)<br />
            <span className="block mt-2">Healing-PRP Clinics, {locationName}</span>
          </motion.h1>

          <motion.h2 
            custom={2}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeUpVariants}
            className="mt-1 md:text-lg text-base text-blue-100 font-medium font-raleway leading-relaxed"
          >
            Advanced Platelet-Rich Plasma (PRP) Therapy for Men
          </motion.h2>

          <motion.p 
            custom={3}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeUpVariants}
            className="mt-3 text-sm md:text-base text-white/80 font-inter leading-relaxed max-w-2xl mx-auto mb-8"
          >
            A natural, non-surgical treatment designed to rejuvenate tissue, 
            enhance performance, and improve vascular health using your body’s own healing factors.
          </motion.p>

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

        <div className={`md:block absolute hidden bottom-0 left-0 right-0 bg-[#0f172a]/90 backdrop-blur-md border-t border-white/10 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="px-4 py-5">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-4 gap-4">
                {[
                  { label: "GMC-registered doctor", sub: "Specialist Care" },
                  { label: "100% Natural", sub: "Uses Your Own PRP" },
                  { label: "Minimal Downtime", sub: "Return to Routine" },
                  { label: "Private & Confidential", sub: "Strictly 1:1" }
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

      {/* --- BENEFITS SECTION --- */}
      <section className="py-24 bg-slate-50 font-inter relative z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-6"
            >
              Potential Benefits of the P-Shot
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-600 text-lg leading-relaxed font-inter"
            >
              By stimulating growth factors, the P-Shot aims to rejuvenate penile tissue, leading to improved function and sensation.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
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
                  className={`w-14 h-14 rounded-2xl ${benefit.color} flex items-center justify-center mb-6 text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                >
                  <benefit.icon />
                </div>
                <h3 className="text-xl font-raleway font-bold text-slate-900 mb-3 group-hover:text-[#4041d1] transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-inter">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROTOCOL SECTION (Updated with Quick Facts) --- */}
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
              The Procedure
            </motion.div>
            <motion.h2
              className="text-3xl md:text-5xl font-raleway font-bold text-white leading-tight mb-8 tracking-tight"
              variants={itemVariants}
            >
              Simple, Safe & Effective
            </motion.h2>
            <motion.p
              className="text-lg text-slate-200 leading-relaxed max-w-3xl mx-auto font-medium font-inter"
              variants={itemVariants}
            >
              The P-Shot is a straightforward in-clinic procedure that uses the healing power of your own blood. There is no surgery, and downtime is minimal.
            </motion.p>
          </motion.div>

          <div className="max-w-6xl mx-auto mt-12 relative">
            {/* Steps Visualizer */}
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
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative mb-16"
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

            {/* Quick Facts Grid */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.4 }}
               className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {/* Card 1: Time */}
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center text-center hover:bg-white/[0.06] transition-colors">
                   <FaRegClock className="text-[#4041d1] text-xl mb-2" />
                   <div className="text-slate-400 text-[10px] uppercase tracking-wider font-bold mb-1">Time</div>
                   <div className="text-white font-raleway font-bold text-sm md:text-base mb-0.5">Approx. 60 Mins</div>
                   <div className="text-slate-500 text-[10px] font-medium">Includes consultation & prep</div>
              </div>

              {/* Card 2: Comfort */}
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center text-center hover:bg-white/[0.06] transition-colors">
                   <FaShieldAlt className="text-[#4041d1] text-xl mb-2" />
                   <div className="text-slate-400 text-[10px] uppercase tracking-wider font-bold mb-1">Comfort</div>
                   <div className="text-white font-raleway font-bold text-sm md:text-base mb-0.5">Local Anaesthetic</div>
                   <div className="text-slate-500 text-[10px] font-medium">Well tolerated</div>
              </div>

              {/* Card 3: Downtime */}
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center text-center hover:bg-white/[0.06] transition-colors">
                   <FaWalking className="text-[#4041d1] text-xl mb-2" />
                   <div className="text-slate-400 text-[10px] uppercase tracking-wider font-bold mb-1">Downtime</div>
                   <div className="text-white font-raleway font-bold text-sm md:text-base mb-0.5">Little to None</div>
                   <div className="text-slate-500 text-[10px] font-medium">Resume daily activities</div>
              </div>

              {/* Card 4: Method */}
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center text-center hover:bg-white/[0.06] transition-colors">
                   <FaUserMd className="text-[#4041d1] text-xl mb-2" />
                   <div className="text-slate-400 text-[10px] uppercase tracking-wider font-bold mb-1">Treatment</div>
                   <div className="text-white font-raleway font-bold text-sm md:text-base mb-0.5">Autologous PRP</div>
                   <div className="text-slate-500 text-[10px] font-medium">Your own growth factors</div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- NEW SECTION: EXO-P SHOT (ADVANCED OPTION) --- */}
      <section className="py-24 bg-gradient-to-br from-[#f8f9ff] to-white relative overflow-hidden font-inter border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-[#4041d1]/10 text-[#4041d1] rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-[#4041d1]/20">
              Advanced Option
            </div>
            <h2 className="text-3xl md:text-5xl font-raleway font-bold text-slate-900 mb-6 leading-tight">
              The Exo-P Shot
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">
              For men seeking a non-surgical, doctor-led option, the Exo-P Shot offers an advanced PRP-based treatment enhanced with exosome-derived regenerative signalling.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Description */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden group hover:border-[#4041d1]/20 transition-colors">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#4041d1]"></div>
                <h3 className="text-2xl font-raleway font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <FaMicroscope className="text-[#4041d1] text-2xl" />
                  Regenerative Signalling
                </h3>
                <p className="text-slate-600 text-base leading-relaxed">
                  This approach uses your own platelet-rich plasma (PRP), enhanced with exosome-derived regenerative signalling, and is designed to support tissue repair and blood flow.
                </p>
                <div className="mt-6 flex items-center gap-2 text-xs font-bold text-[#4041d1] uppercase tracking-widest">
                  <FaMapMarkerAlt /> Available in St Albans, Birmingham & London
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-bold font-raleway text-slate-900">Safety & Transparency</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Doctor-led treatment",
                    "Uses your own blood (autologous)",
                    "No synthetic fillers",
                    "Not a stem cell treatment"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-700 font-medium bg-slate-50 px-4 py-3 rounded-xl border border-slate-100">
                      <FaCheckCircle className="text-[#4041d1] shrink-0" /> {item}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-500 italic mt-2">
                  * Results are not guaranteed. Individual response varies and more than one session may be recommended.
                </p>
              </div>
            </div>

            {/* Right Column: How it Works (Visual) */}
            <div className="bg-slate-900 text-white p-8 md:p-10 rounded-[2.5rem] relative overflow-hidden">
              {/* Background Glow */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#4041d1]/30 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-900 to-transparent z-10"></div>

              <h3 className="text-2xl font-raleway font-bold mb-8 relative z-20">How Does it Work?</h3>
              
              <div className="space-y-8 relative z-20">
                {/* Step 1 */}
                <div className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-[#4041d1] flex items-center justify-center shrink-0 shadow-lg shadow-[#4041d1]/30">
                      <span className="font-bold text-sm">1</span>
                    </div>
                    <div className="w-0.5 h-full bg-[#4041d1]/50 mt-2"></div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold font-raleway mb-2 text-blue-100">Platelet Activation</h4>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      A key step in PRP-based treatments. During processing, platelets are physiologically activated, encouraging the release of growth factors involved in tissue repair and vascular support.                    
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-[#5a5bfa] flex items-center justify-center shrink-0 shadow-lg shadow-[#5a5bfa]/30">
                      <span className="font-bold text-sm">2</span>
                    </div>
                    <div className="w-0.5 h-full bg-[#4041d1]/50 mt-2"></div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold font-raleway mb-2 text-blue-100">Exosome Support</h4>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      Exosome-derived bioactive factors are incorporated to support cellular communication and help optimise the regenerative environment within treated tissue.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center shrink-0 shadow-lg">
                      <FaVial className="text-sm" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold font-raleway mb-2 text-white">Integrated Regeneration</h4>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      This combined protocol is designed to support tissue health, endothelial function, and blood flow associated with erectile performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- WHAT P-SHOT CAN DO (Reality Check) --- */}
      <section className="py-24 bg-white font-inter">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-6">
              The P-Shot: Realistic Expectations
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Platelet-Rich Plasma (PRP) therapy is a powerful regenerative tool, 
              but it is important to understand what it can achieve. We believe in 
              honest, medical-led advice so you can make an informed decision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* COLUMN 1: Benefits */}
            <div className="bg-blue-50/50 p-8 rounded-3xl border border-blue-100">
              <h4 className="text-xl font-raleway font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="w-2 h-8 bg-[#4041d1] rounded-full block"></span>
                What the P-Shot aims to deliver
              </h4>
              <ul className="space-y-4">
                {[
                  "Enhanced sensitivity and nerve responsiveness",
                  "Firmer, more sustainable erections",
                  "Potential improvement in girth and blood flow",
                  "Support for straightening (Peyronie’s Disease)",
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
                   * Results are based on tissue regeneration, which is a gradual process. Best results are typically seen 8-12 weeks after treatment.
                 </p>
              </div>
            </div>

            {/* COLUMN 2: Limitations */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
              <h4 className="text-xl font-raleway font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="w-2 h-8 bg-slate-400 rounded-full block"></span>
                Important limitations
              </h4>
              <ul className="space-y-4">
                {[
                   "It is not a surgical enlargement procedure (length gains are variable)",
                   "Results depend on age, health, and hormone levels",
                   "It cannot fix severe structural damage instantly",
                   "A medical consultation is required to assess suitability",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
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
                   The P-Shot is often most effective when combined with a healthy lifestyle or other therapies like Shockwave.
                 </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- DOCTOR & PRIVACY SECTION (Text-Only + Buttons) --- */}
      <section className="py-24 bg-slate-50 font-inter">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="inline-block px-4 py-1.5 bg-[#4041d1]/10 text-[#4041d1] rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            Patient Privacy Priority
          </div>
          <h3 className="text-3xl md:text-5xl font-raleway font-bold text-slate-900 mb-8 leading-tight">
            Discreet, Private & Professional
          </h3>

          <div className="prose prose-lg prose-slate mx-auto mb-12">
            <p className="text-slate-600 font-inter text-lg leading-relaxed mb-6">
              We understand that discussing sexual health can feel uncomfortable. 
              Our clinics provide a discreet, confidential, and judgement-free 
              medical environment, where concerns are addressed professionally 
              and with respect.
            </p>
            <p className="text-slate-600 font-inter text-lg leading-relaxed">
              Whether you are seeking performance enhancement or restoration, 
              seeking assessment allows you to explore your options with clarity 
              and medical guidance — without pressure to proceed unless it feels 
              right for you.
            </p>
          </div>

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
              <FaEnvelope className="w-4 h-4" /> Speak To A Specialist
            </button>

            {/* 2. Prices Link */}
            <Link
              href={locationName === "Birmingham" ? "/birmingham/prices" : "/prices"}
              className="px-6 py-3 w-full md:w-max md:text-sm text-xs items-center justify-center cursor-pointer bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-lg font-inter font-bold transition-all duration-300 inline-flex gap-2 shadow-lg"
            >
              View Treatment Prices
            </Link>
            
            {/* 3. FAQ Link */}
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
      
      {/* Location Section Added Here */}
      <LocationSection />

      <Footer />
    </>
  );
}
