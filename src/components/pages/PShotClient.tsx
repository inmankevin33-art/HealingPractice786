"use client";

import Link from "next/link";
import Image from "next/image";
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
  FaRegClock,     
  FaWalking,  
  FaUserMd,   
  FaMicroscope, 
  FaVial,
  FaGoogle,
  FaStar,
  FaLock,
  FaChevronDown,
  FaExclamationTriangle
} from "react-icons/fa";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/ContactCTASection";
import LocationSection from "@/components/LocationSection";
import TrustReviews from "@/components/TrustReviews";
import OnlineAssessmentModal from "@/components/OnlineAssessmentModal";

// --- INTERFACE FOR DYNAMIC PROPS ---
type FaqType = {
  question: string;
  answer: string;
};

interface PShotProps {
  locationName?: string;
  servingAreas?: string;
  faqs: FaqType[];
}

export default function PShotClient({
  locationName = "St Albans",
  servingAreas = "Harpenden • Luton • Watford • Hertfordshire",
  faqs,
}: PShotProps) {
  
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showAllFaqs, setShowAllFaqs] = useState(false);
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);

  const isBirmingham = locationName === "Birmingham";

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

  const displayedFaqs = showAllFaqs ? faqs : faqs.slice(0, 5);

  return (
    <>
      {/* --- HERO SECTION --- */}
      <div className="relative md:h-[calc(100vh-4rem)] pb-5 md:pb-0 lg:h-[calc(100vh-5rem)] overflow-hidden flex items-center justify-center bg-black">
        
        {/* 1. Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" /> 
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80 z-10" />
          <Image 
            src="/ed-doctor-consultation.webp" 
            alt="P-Shot treatment consultation" 
            fill
            sizes="100vw"
            className="object-cover"
            priority
            fetchPriority="high"
          />
        </div>

        {/* 2. Main Content */}
        <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 md:pb-24">
          
          <motion.div 
            custom={0}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeUpVariants}
            className="inline-block px-4 py-1.5 mb-4 border border-blue-400/30 rounded-full bg-blue-900/20 backdrop-blur-sm transform-gpu"
          >
            <span className="text-blue-200 text-xs font-bold tracking-widest uppercase font-inter">Doctor-Led Private Clinic</span>
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-raleway text-white leading-tight mb-4 tracking-tight"
          >
            The P-Shot (Priapus Shot) <br />
            <span className="text-xl md:text-3xl lg:text-4xl text-blue-100 mt-2 inline-block">in {locationName}</span>
          </motion.h1>

          <motion.p 
            custom={2}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeUpVariants}
            className="mt-4 text-sm md:text-base text-blue-50/90 font-inter leading-relaxed max-w-2xl mx-auto mb-8 font-medium"
          >
            {isBirmingham 
              ? "The P-Shot (Priapus Shot) is a clinician-delivered PRP procedure offered at our Edgbaston clinic in Birmingham. Designed as an advanced Erectile Dysfunction (ED) treatment, it uses platelet-rich plasma prepared from your own blood to support sexual performance, tissue health, and penile blood flow. A consultation is required to assess suitability and discuss alternatives."
              : "A doctor-led PRP-based procedure using your own platelet-rich plasma. Designed as an advanced Erectile Dysfunction (ED) option, it is discussed during consultation for suitable patients seeking non-surgical treatments to support sexual performance. A clinical consultation is required to assess suitability and discuss alternatives."
            }
          </motion.p>

          <motion.div 
            custom={3}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeUpVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button 
              onClick={() => setIsAssessmentOpen(true)}
              className="px-8 py-4 w-full sm:w-auto flex items-center justify-center text-sm cursor-pointer bg-white text-[#4041d1] hover:bg-slate-50 rounded-xl font-bold transition-all duration-300 gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] active:scale-95 font-inter"
            >
              Free Confidential Online Assessment
            </button>

            <button 
              onClick={handleAction}
              aria-label="Book Consultation"
              className="px-8 py-4 w-full sm:w-auto flex items-center justify-center text-sm cursor-pointer bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-xl font-bold transition-all duration-300 gap-2 shadow-[0_0_20px_rgba(64,65,209,0.3)] hover:shadow-[0_0_25px_rgba(64,65,209,0.5)] active:scale-95 font-inter"
            >
              <FaEnvelope className="w-4 h-4" aria-hidden="true" /> Book Consultation
            </button>
          </motion.div>

          <motion.div 
            custom={4}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeUpVariants}
            className="inline-flex items-center justify-center gap-2 px-6 py-2 bg-[#4041d1]/10 text-white rounded-full text-[10px] md:text-xs mt-8 font-bold uppercase tracking-widest font-inter shadow-lg border border-white/10 backdrop-blur-sm"
          >
             <FaMapMarkerAlt className="text-white/80 mb-0.5" aria-hidden="true" /> 
             <span>Serving: {servingAreas}</span>
          </motion.div>
        </div>

        {/* 3. Hero Trust Badges */}
        <div className={`md:block absolute hidden bottom-0 left-0 right-0 bg-[#0f172a]/90 backdrop-blur-md border-t border-white/10 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="px-2 py-4 max-w-7xl mx-auto">
            <div className="grid grid-cols-4 gap-2 divide-x divide-white/10">
              
              <a 
                href="#reviews" 
                aria-label="Scroll to 5 Star Google Reviews"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('reviews-section')?.scrollIntoView({ behavior: 'smooth' });
                }} 
                className="flex justify-center items-center group cursor-pointer px-2"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#4285F4] group-hover:scale-110 transition-transform shadow-md">
                    <FaGoogle className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div className="flex flex-col items-start">
                    <div className="flex text-amber-400 text-[10px] mb-0.5">
                      <FaStar aria-hidden="true" /><FaStar aria-hidden="true" /><FaStar aria-hidden="true" /><FaStar aria-hidden="true" /><FaStar aria-hidden="true" />
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
                    <FaLock className="w-3.5 h-3.5" aria-hidden="true" />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-white text-[9px] font-bold uppercase tracking-widest leading-tight font-inter">Strictly 1:1</span>
                    <span className="text-blue-400 text-[9px] font-semibold tracking-wider uppercase leading-tight mt-0.5 font-inter">Discreet Care</span>
                  </div>
                </div>
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
                  <benefit.icon aria-hidden="true" />
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

      {/* --- REALISTIC EXPECTATIONS & MEDICAL TRANSPARENCY --- */}
      <section className="py-24 bg-white font-inter border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-6">
              The P-Shot: Realistic Expectations
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Platelet-Rich Plasma (PRP) therapy is a regenerative tool, but it is important to understand what it can achieve. We believe in honest, medical-led advice so you can make an informed decision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* COLUMN 1: Benefits Detail */}
            <div className="bg-blue-50/50 p-8 rounded-3xl border border-blue-100">
              <h3 className="text-xl font-raleway font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="w-2 h-8 bg-[#4041d1] rounded-full block"></span>
                What the P-Shot aims to deliver
              </h3>
              <ul className="space-y-4">
                {[
                  "Enhanced sensitivity and nerve responsiveness",
                  "Firmer, more sustainable erections",
                  "Potential improvement in girth and blood flow",
                  "Support for straightening (Peyronie’s Disease)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FaCheckCircle className="text-[#4041d1] mt-1 shrink-0" aria-hidden="true" />
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
              <h3 className="text-xl font-raleway font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="w-2 h-8 bg-slate-400 rounded-full block"></span>
                Important limitations
              </h3>
              <ul className="space-y-4">
                {[
                   "It is not a surgical enlargement procedure",
                   "Results depend heavily on age, health, and hormone levels",
                   "It cannot fix severe structural damage instantly",
                   "A medical consultation is strictly required to assess suitability",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 shrink-0 text-slate-400">
                       <FaCheckCircle className="text-slate-400" aria-hidden="true" /> 
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

          {/* Evidence & Limitations Block */}
          <div className="bg-amber-50/50 p-8 rounded-3xl border border-amber-100">
            <h3 className="text-xl font-raleway font-bold text-slate-900 mb-4 flex items-center gap-2">
              <FaExclamationTriangle className="text-amber-500" aria-hidden="true" />
              Clinical Evidence & Safety Transparency
            </h3>
            <div className="space-y-4">
              <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                <strong>Evidence and limitations:</strong> While PRP is widely used in other medical contexts, clinical evidence for PRP injections specifically for erectile dysfunction and &quot;P-Shot&quot; outcomes is currently limited, and it is considered by many professional bodies to be an experimental treatment. Results can vary significantly between patients.
              </p>
              <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                <strong>Safety profile:</strong> The procedure uses your own blood (autologous PRP) and is performed with strict sterile techniques. While downtime is minimal, short-term side effects can include temporary bruising, swelling, and localized discomfort. Results are not guaranteed. We will discuss what is known, what is uncertain, and realistic outcomes during your comprehensive consultation.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* --- PROTOCOL SECTION --- */}
      <section
        className="relative py-20 lg:py-28 bg-[#0A1128] overflow-hidden font-inter border-y border-[#1a2342]"
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
                        <IconComponent className="w-6 h-6" aria-hidden="true" />
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

            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.4 }}
               className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center text-center hover:bg-white/[0.06] transition-colors">
                   <FaRegClock className="text-[#4041d1] text-xl mb-2" aria-hidden="true" />
                   <div className="text-slate-400 text-[10px] uppercase tracking-wider font-bold mb-1">Time</div>
                   <div className="text-white font-raleway font-bold text-sm md:text-base mb-0.5">Approx. 60 Mins</div>
                   <div className="text-slate-500 text-[10px] font-medium">Includes consultation & prep</div>
              </div>
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center text-center hover:bg-white/[0.06] transition-colors">
                   <FaShieldAlt className="text-[#4041d1] text-xl mb-2" aria-hidden="true" />
                   <div className="text-slate-400 text-[10px] uppercase tracking-wider font-bold mb-1">Comfort</div>
                   <div className="text-white font-raleway font-bold text-sm md:text-base mb-0.5">Local Anaesthetic</div>
                   <div className="text-slate-500 text-[10px] font-medium">Well tolerated</div>
              </div>
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center text-center hover:bg-white/[0.06] transition-colors">
                   <FaWalking className="text-[#4041d1] text-xl mb-2" aria-hidden="true" />
                   <div className="text-slate-400 text-[10px] uppercase tracking-wider font-bold mb-1">Downtime</div>
                   <div className="text-white font-raleway font-bold text-sm md:text-base mb-0.5">Little to None</div>
                   <div className="text-slate-500 text-[10px] font-medium">Resume daily activities</div>
              </div>
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center text-center hover:bg-white/[0.06] transition-colors">
                   <FaUserMd className="text-[#4041d1] text-xl mb-2" aria-hidden="true" />
                   <div className="text-slate-400 text-[10px] uppercase tracking-wider font-bold mb-1">Treatment</div>
                   <div className="text-white font-raleway font-bold text-sm md:text-base mb-0.5">Autologous PRP</div>
                   <div className="text-slate-500 text-[10px] font-medium">Your own growth factors</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- DOCTOR & PRIVACY SECTION --- */}
      <section className="py-24 bg-slate-50 font-inter">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="inline-block px-4 py-1.5 bg-[#4041d1]/10 text-[#4041d1] rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            Patient Privacy Priority
          </div>
          <h2 className="text-3xl md:text-5xl font-raleway font-bold text-slate-900 mb-8 leading-tight">
            Discreet, Private & Professional
          </h2>

          <div className="prose prose-lg prose-slate mx-auto mb-16">
            <p className="text-slate-600 font-inter text-lg leading-relaxed mb-6">
              We understand that discussing sexual health can feel uncomfortable. 
              Our clinics provide a discreet, confidential, and judgement-free 
              medical environment, where concerns are addressed professionally 
              and with respect.
            </p>
          </div>

          {/* What Happens at Your Consultation */}
          <div className="mb-16">
            <h3 className="text-2xl font-raleway font-bold text-slate-900 mb-8">What Happens At Your Consultation?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
               <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-[#4041d1]/30 transition-colors">
                  <div className="w-10 h-10 bg-blue-50 text-[#4041d1] rounded-full flex items-center justify-center font-bold mb-4">1</div>
                  <h4 className="font-bold text-slate-900 mb-2">Medical History Review</h4>
                  <p className="text-sm text-slate-600">A confidential discussion with our GMC-registered doctor about your symptoms, lifestyle, and previous treatments.</p>
               </div>
               <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-[#4041d1]/30 transition-colors">
                  <div className="w-10 h-10 bg-blue-50 text-[#4041d1] rounded-full flex items-center justify-center font-bold mb-4">2</div>
                  <h4 className="font-bold text-slate-900 mb-2">Suitability Assessment</h4>
                  <p className="text-sm text-slate-600">We evaluate if PRP is the right pathway, or if alternatives like Shockwave Therapy or medication would be more effective.</p>
               </div>
               <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-[#4041d1]/30 transition-colors">
                  <div className="w-10 h-10 bg-blue-50 text-[#4041d1] rounded-full flex items-center justify-center font-bold mb-4">3</div>
                  <h4 className="font-bold text-slate-900 mb-2">Personalised Plan</h4>
                  <p className="text-sm text-slate-600">If suitable, we map out a transparent treatment timeline, expected outcomes, and exact costs before proceeding.</p>
               </div>
            </div>
          </div>

          {/* Localised Location Block */}
          {isBirmingham && (
            <div className="max-w-3xl mx-auto mb-16 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-left flex items-start gap-4">
               <FaMapMarkerAlt className="text-[#4041d1] text-3xl shrink-0 mt-1" aria-hidden="true" />
               <div>
                 <h3 className="font-bold font-raleway text-slate-900 mb-2 text-lg">Visiting our Edgbaston Clinic</h3>
                 <p className="text-slate-600 text-sm leading-relaxed">
                   Located at 38 Harborne Rd, Edgbaston, our Birmingham clinic offers a highly discreet environment with private consultation rooms. We provide clear directions and parking instructions prior to your appointment to ensure your arrival is stress-free and entirely confidential.
                 </p>
               </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-full">
            <button
              onClick={handleAction}
              aria-label="Speak To A Specialist"
              className="px-6 py-3 w-full md:w-max md:text-sm text-xs items-center justify-center cursor-pointer bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-lg font-inter font-bold transition-all duration-300 inline-flex gap-2 shadow-lg shadow-[#4041d1]/20 active:scale-95"
            >
              <FaEnvelope className="w-4 h-4" aria-hidden="true" /> Speak To A Specialist
            </button>
            <Link
              href={isBirmingham ? "/birmingham/faq" : "/faq"}
              className="px-6 py-3 w-full md:w-max md:text-sm text-xs items-center justify-center cursor-pointer border-2 border-slate-200 text-slate-700 hover:border-[#4041d1] hover:text-[#4041d1] bg-white rounded-lg font-inter font-bold transition-all duration-300 inline-flex gap-2"
            >
              View Clinic FAQs
            </Link>
          </div>

        </div>
      </section>

      {/* --- EXO-P SHOT SECTION --- */}
      <section className="py-24 bg-gradient-to-br from-[#f8f9ff] to-white relative overflow-hidden font-inter border-y border-slate-200">
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
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden group hover:border-[#4041d1]/20 transition-colors">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#4041d1]"></div>
                <h3 className="text-2xl font-raleway font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <FaMicroscope className="text-[#4041d1] text-2xl" aria-hidden="true" />
                  Regenerative Signalling
                </h3>
                <p className="text-slate-600 text-base leading-relaxed">
                  This approach uses your own platelet-rich plasma (PRP), enhanced with exosome-derived regenerative signalling, and is designed to support tissue repair and blood flow.
                </p>
                <div className="mt-6 flex items-center gap-2 text-xs font-bold text-[#4041d1] uppercase tracking-widest">
                  <FaMapMarkerAlt aria-hidden="true" /> Available in St Albans & Birmingham
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
                      <FaCheckCircle className="text-[#4041d1] shrink-0" aria-hidden="true" /> {item}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-500 italic mt-2">
                  * Results are not guaranteed. Individual response varies and more than one session may be recommended.
                </p>
              </div>
            </div>

            <div className="bg-slate-900 text-white p-8 md:p-10 rounded-[2.5rem] relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#4041d1]/30 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-900 to-transparent z-10"></div>

              <h3 className="text-2xl font-raleway font-bold mb-8 relative z-20">How Does it Work?</h3>
              
              <div className="space-y-8 relative z-20">
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

                <div className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center shrink-0 shadow-lg">
                      <FaVial className="text-sm" aria-hidden="true" />
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

      {/* --- PRICING PREVIEW --- */}
      <section className="py-12 bg-slate-50 font-inter border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl border border-[#4041d1]/20 p-8 md:p-12 shadow-lg shadow-[#4041d1]/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-10"></div>
            <h2 className="text-2xl md:text-3xl font-raleway font-bold text-slate-900 mb-4 relative z-10">Transparent Pricing</h2>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto relative z-10">Clear, premium pricing aligned to clinician time, safety, and aftercare. Exact plans are confirmed at consultation.</p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8 relative z-10">
               <div className="bg-slate-50 px-8 py-6 rounded-2xl border border-slate-100 w-full md:w-auto hover:border-[#4041d1]/30 transition-colors">
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-2">Standard P-Shot</div>
                  <div className="text-3xl font-bold text-[#4041d1] mb-2">From £995</div>
                  <div className="text-sm text-slate-500 font-medium bg-white px-3 py-1.5 rounded-lg border border-slate-100 inline-block">
                    Course of 3: £2,700
                  </div>
               </div>
               <div className="bg-slate-50 px-8 py-6 rounded-2xl border border-slate-100 w-full md:w-auto hover:border-[#4041d1]/30 transition-colors">
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-2">EXO P-Shot</div>
                  <div className="text-3xl font-bold text-[#4041d1] mb-2">From £1,500</div>
                  <div className="text-sm text-slate-500 font-medium bg-white px-3 py-1.5 rounded-lg border border-slate-100 inline-block">
                    Advanced regenerative protocol
                  </div>
               </div>
            </div>
            <Link aria-label="View Full Price List" href={isBirmingham ? "/birmingham/prices" : "/prices"} className="text-sm font-bold text-[#4041d1] hover:text-[#2a2bb8] inline-flex items-center gap-2 transition-colors relative z-10 group">
              View Full Price List <FaArrowRight className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* --- FAQs --- */}
      <section id="faqs" className="py-24 bg-white font-inter border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#4041d1]/10 text-[#4041d1] rounded-full text-xs font-inter font-bold uppercase tracking-wider mb-4">
              Frequently Asked Questions
            </div>
            <h2 className="text-3xl md:text-5xl font-raleway font-bold text-slate-900 mb-6">
              Common Questions
            </h2>
          </div>
          <div className="space-y-4">
            {displayedFaqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="w-full">
                  <button
                    className="w-full p-6 md:p-8 text-left flex items-center justify-between hover:bg-slate-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#4041d1] focus:ring-inset"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={openFAQIndex === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span className="font-raleway font-bold text-slate-900 pr-8 text-base md:text-lg">
                      {faq.question}
                    </span>
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${openFAQIndex === index ? 'bg-[#4041d1] text-white' : 'bg-[#4041d1]/10 text-[#4041d1]'}`}>
                      {openFAQIndex === index ? (
                        <FaMinus className="w-4 h-4" aria-hidden="true" />
                      ) : (
                        <FaPlus className="w-4 h-4" aria-hidden="true" />
                      )}
                    </div>
                  </button>
                </h3>
                <AnimatePresence>
                  {openFAQIndex === index && (
                    <motion.div
                      id={`faq-answer-${index}`}
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

          {faqs.length > 5 && (
            <div className="mt-8 text-center">
              <button
                onClick={() => setShowAllFaqs(!showAllFaqs)}
                aria-label={showAllFaqs ? "Show Less FAQs" : "View All FAQs"}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm cursor-pointer border-2 border-[#4041d1] text-[#4041d1] hover:bg-[#4041d1]/5 rounded-xl font-inter font-bold transition-all duration-300"
              >
                {showAllFaqs ? "Show Less FAQs" : "View All FAQs"}
                <FaChevronDown className={`w-3 h-3 transition-transform duration-300 ${showAllFaqs ? "rotate-180" : ""}`} aria-hidden="true" />
              </button>
            </div>
          )}

        </div>
      </section>

      {/* --- GOOGLE REVIEWS SECTION --- */}
      <div id="reviews-section">
        <TrustReviews 
          widgetUrl={
            isBirmingham 
              ? "https://cdn.trustindex.io/loader.js?e2cf4a365239367f2a3607c0513" 
              : "https://cdn.trustindex.io/loader.js?eb147a565c3c36945f26281e586"
          } 
        />
      </div>

      <ContactCTASection />
      
      <LocationSection />

      <Footer />

      {/* --- ASSESSMENT MODAL --- */}
      <OnlineAssessmentModal 
        isOpen={isAssessmentOpen} 
        onClose={() => setIsAssessmentOpen(false)} 
      />
    </>
  );
}
