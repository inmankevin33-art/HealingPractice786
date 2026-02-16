"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  FaPlus,
  FaMinus,
  FaDna,
  FaSyringe,
  FaShieldAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaRegClock,
  FaWalking,
  FaUserMd,
  FaMicroscope,
  FaChevronLeft,
  FaChevronRight
} from "react-icons/fa";
import { FaWandSparkles } from "react-icons/fa6";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/ContactCTASection";
import LocationSection from "@/components/LocationSection";
import Image from "next/image";

interface PolynucleotidesProps {
  locationName?: string;
  servingAreas?: string;
}

export default function PolynucleotidesClient({
  locationName = "St Albans",
  servingAreas = "Harpenden • Luton • Watford • Hertfordshire",
}: PolynucleotidesProps) {
  
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);
  const [activeStep, setActiveStep] = useState(0); 
  const [isLoaded, setIsLoaded] = useState(false);
  
  // State for the Before/After Slider (starts at 50%)
  const [sliderPosition, setSliderPosition] = useState(50);

  // Dynamic Links
  const isBirmingham = locationName === "Birmingham";
  const pricesUrl = isBirmingham ? "/birmingham/prices" : "/prices";
  const faqUrl = isBirmingham ? "/birmingham/faq" : "/faq";

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
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  // Animation Variants
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
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // --- DATA: The DNA Glow Concept (Benefits) ---
  const benefits = [
    {
      title: "Deep Repair – Polynucleotides",
      description: "Supports collagen stimulation and tissue repair within the dermis, improving skin quality, resilience, and overall texture over time.",
      icon: FaDna,
      color: "bg-blue-50 text-blue-600",
      hoverBorder: "hover:border-blue-100",
      hoverShadow: "hover:shadow-blue-900/5",
    },
    {
      title: "Internal Hydration – Non-Cross-Linked HA",
      description: "Delivers evenly distributed dermal hydration without adding structural volume, supporting smoother, more luminous skin.",
      icon: FaSyringe,
      color: "bg-purple-50 text-purple-600",
      hoverBorder: "hover:border-purple-100",
      hoverShadow: "hover:shadow-purple-900/5",
    },
    {
      title: "Surface Optimisation – Microneedling",
      description: "Enhances product absorption and refines skin texture and pore appearance, contributing to a more polished and even finish.",
      icon: FaMicroscope,
      color: "bg-teal-50 text-teal-600",
      hoverBorder: "hover:border-teal-100",
      hoverShadow: "hover:shadow-teal-900/5",
    },
  ];

  // --- DATA: Protocol Steps ---
  const protocolSteps = [
    {
      number: 1,
      icon: FaUserMd,
      title: "Assessment",
      description: "We assess your skin quality and target areas to ensure the DNA Glow Concept™ is the perfect match for your goals.",
    },
    {
      number: 2,
      icon: FaShieldAlt,
      title: "Preparation",
      description: "Your skin is deeply cleaned and a potent numbing cream is applied to ensure the procedure is comfortable.",
    },
    {
      number: 3,
      icon: FaSyringe,
      title: "Delivery & Texture",
      description: "We use micro-injections for depth and microneedling for surface texture to ensure even distribution.",
    },
    {
      number: 4,
      icon: FaRegClock,
      title: "Recovery",
      description: "You may see tiny bumps (papules) or redness. This is normal and usually settles within 24 hours.",
    },
  ];

  const faqs = [
    {
      question: "What exactly are Polynucleotides?",
      answer: "Polynucleotides are highly purified DNA fragments used in regenerative aesthetics to support collagen stimulation and tissue repair. They act as biostimulators, encouraging the skin\u2019s natural regenerative processes.",
    },
    {
      question: "What makes the DNA Glow Concept™ different?",
      answer: "Unlike standard treatments that use a single product, our concept combines three powerful modalities: Polynucleotides for deep repair, Non-Cross-Linked HA for hydration, and Microneedling for surface texture. This creates a multi-layered result.",
    },
    {
      question: "Are polynucleotides better than filler?",
      answer: "They serve different purposes. Fillers add structural volume to change the shape of your face. Polynucleotides improve the quality of the skin itself—making it thicker, hydrated, and more elastic without changing your natural features.",
    },
    {
      question: "How many sessions do I need?",
      answer: "We typically recommend a course of 3 treatments spaced 2–4 weeks apart to achieve the full effect. Maintenance is usually one session every 6–9 months.",
    },
    {
      question: "Is there downtime?",
      answer: "Minimal. Because we treat multiple layers of the skin, you may have some redness or small bumps (papules) for 24–48 hours. This is a sign the product is working.",
    },
  ];

  return (
    <>
      {/* --- HERO SECTION --- */}
      <div className="relative md:h-[calc(100vh-4rem)] pb-5 md:pb-0 lg:h-[calc(100vh-5rem)] overflow-hidden flex items-center justify-center bg-black">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10" /> 
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-10" />
          <Image 
            src="/polynucleotides-hero.webp" 
            alt="Polynucleotides Skin Treatment" 
            fill
            className="object-cover opacity-90"
            priority
            onError={(e) => {
               e.currentTarget.style.display = 'none';
            }}
          />
        </div>

        <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
          <motion.div 
            custom={0}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeUpVariants}
            className="inline-block px-4 py-1.5 mb-4 border border-blue-400/30 rounded-full bg-blue-900/20 backdrop-blur-sm transform-gpu"
          >
            <span className="text-blue-200 text-xs font-bold tracking-widest uppercase font-inter">Regenerative Aesthetics</span>
          </motion.div>

          <motion.h1 
            custom={1}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeUpVariants}
            className="text-[28px] sm:text-3xl md:text-5xl font-bold font-raleway text-white leading-tight mb-4 tracking-tight"
          >
            {/* Added a responsive line break so 'Birmingham' doesn't squish */}
            Polynucleotides in <br className="sm:hidden" /> {locationName}
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-purple-200">
              The DNA Glow Concept™
            </span>
            <span className="block text-xl sm:text-2xl md:text-3xl text-white/80 mt-2 font-medium">
              Healing-PRP Clinics
            </span>
          </motion.h1>

         <motion.p 
            custom={2}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeUpVariants}
            className="mt-4 text-sm md:text-lg text-white/90 font-inter leading-relaxed max-w-4xl mx-auto mb-8 px-2"
          >
            A doctor-led regenerative treatment combining polynucleotides, non-cross-linked
            <br className="hidden md:block" />{" "}
            hyaluronic acid, and precision microneedling to enhance skin quality, resilience, and natural luminosity
            <br className="hidden md:block" />{" "}
            through our structured three-dimensional approach.
          </motion.p>

          <motion.div 
            custom={3}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeUpVariants}
            className="flex justify-center"
          >
            {/* HERO BUTTON: Single, centered Blue Button */}
            <button 
              onClick={handleAction}
              className="px-8 py-4 flex items-center justify-center text-sm cursor-pointer bg-[#4041d1] text-white hover:bg-blue-700 rounded-xl font-bold transition duration-300 ease-out gap-2 shadow-xl hover:shadow-[0_0_20px_rgba(64,65,209,0.4)] active:scale-95 font-inter transform-gpu"
            >
              <FaEnvelope className="w-4 h-4" /> Book Consultation
            </button>
          </motion.div>
          
          <motion.div 
            custom={4}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeUpVariants}
            className="inline-flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 px-6 py-3 bg-[#4041d1] text-white rounded-2xl sm:rounded-full text-[10px] md:text-xs mt-8 font-bold uppercase tracking-widest font-inter shadow-lg border border-white/10 max-w-[90%] mx-auto text-center"
          >
             {/* Updated to text-white so it is bright and crisp! */}
             <div className="flex items-center gap-1.5 text-white">
               <FaMapMarkerAlt className="w-3 h-3" /> 
               <span>Serving:</span>
             </div>
             <span className="leading-relaxed">{servingAreas}</span>
          </motion.div>
        </div>
      </div>
      
     {/* --- LIGHT SECTION 1: What Makes Us Different & The Concept --- */}
      <section className="py-20 bg-white font-inter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-16">
                <span className="text-[#4041d1] font-bold tracking-widest text-xs uppercase mb-2 block">Our Signature Protocol</span>
                <h2 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-6">
                  What Makes Our Polynucleotide Treatment Different?
                </h2>
                <p className="text-slate-600 leading-relaxed max-w-3xl mx-auto">
                  Unlike standard single-product approaches, our doctor-led protocol is built around a
                  structured, three-dimensional concept designed to support deeper skin regeneration,
                  internal hydration, and refined surface quality. This creates a more balanced and
                  natural result that evolves gradually through the skin’s own restorative processes.
                </p>
                <div className="w-24 h-1 bg-[#4041d1] mx-auto mt-8 rounded-full transform-gpu"></div>
            </div>

            <div className="text-center mb-12">
                <h3 className="text-2xl font-raleway font-bold text-slate-900 mb-4">
                  What Are Polynucleotides?
                </h3>
                <p className="text-slate-600 leading-relaxed max-w-3xl mx-auto mb-12 text-lg font-inter">
                  Polynucleotides are highly purified DNA fragments used in regenerative medicine to
                  support collagen stimulation, hydration, and tissue repair. They work as biostimulators,
                  creating an optimal environment for the skin to renew itself naturally.
                </p>
                <h3 className="text-2xl md:text-3xl font-raleway font-bold text-slate-900 mb-2">
                  The DNA Glow Concept™
                </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className={`relative group p-8 rounded-[2rem] bg-slate-50 border border-slate-100 ${benefit.hoverBorder} ${benefit.hoverShadow} transition duration-300 transform-gpu hover:-translate-y-1`}>
                        <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                            <Icon className="w-24 h-24" />
                        </div>
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-sm ${benefit.color}`}>
                            <Icon />
                        </div>
                        <h3 className="text-xl font-raleway font-bold text-slate-900 mb-3">{benefit.title}</h3>
                        <p className="text-slate-600 leading-relaxed text-sm">
                            {benefit.description}
                        </p>
                    </div>
                  );
                })}
            </div>

        </div>
      </section>

      {/* --- LIGHT SECTION 2: What Can Polynucleotides Help Improve? (WITH SLIDER) --- */}
      <section className="py-20 bg-slate-50 font-inter border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-6 leading-tight">
                What Can Polynucleotides <span className="text-[#4041d1]">Help Improve?</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Polynucleotides are commonly used to support improvement in:
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Under-eye dark circles and crepey skin",
                  "Fine lines and early textural ageing",
                  "Dull or dehydrated skin",
                  "Mild acne scarring",
                  "Neck and décolletage skin quality"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-100 shadow-sm transform-gpu">
                    <FaCheckCircle className="text-[#4041d1] text-xl shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* --- THE BEFORE & AFTER SLIDER & BUTTON --- */}
            <div className="lg:w-1/2 relative w-full flex flex-col items-center">
                <div className="relative h-[450px] w-full bg-slate-200 rounded-[2.5rem] overflow-hidden shadow-2xl transform-gpu group select-none mb-8">
                   
                   {/* AFTER IMAGE */}
                   <div className="absolute inset-0 z-0">
                      <Image 
                        src="/polynucleotides-after.webp" 
                        alt="After Treatment"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 right-6 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-bold tracking-widest uppercase">
                        After
                      </div>
                   </div>

                   {/* BEFORE IMAGE */}
                   <div 
                      className="absolute inset-0 z-10 will-change-transform transform-gpu"
                      style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
                   >
                      <Image 
                        src="/polynucleotides-before.webp" 
                        alt="Before Treatment"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-6 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-bold tracking-widest uppercase">
                        Before
                      </div>
                   </div>

                   {/* SLIDER HANDLE */}
                   <div 
                      className="absolute inset-y-0 z-20 w-1 bg-white pointer-events-none transform-gpu"
                      style={{ left: `calc(${sliderPosition}% - 2px)` }}
                   >
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-[0_0_20px_rgba(0,0,0,0.3)] flex items-center justify-center transition-transform group-hover:scale-110">
                         <FaChevronLeft className="text-slate-600 w-3 h-3 ml-0.5" />
                         <FaChevronRight className="text-slate-600 w-3 h-3 mr-0.5" />
                      </div>
                   </div>

                   {/* INVISIBLE RANGE INPUT */}
                   <input
                      type="range"
                      min="0"
                      max="100"
                      value={sliderPosition}
                      onChange={(e) => setSliderPosition(Number(e.target.value))}
                      className="absolute inset-0 z-30 w-full h-full opacity-0 cursor-ew-resize"
                   />
                </div>
                
                {/* BLUE BUTTON UNDER SLIDER */}
                <button 
                  onClick={handleAction}
                  className="px-8 py-4 w-full sm:w-auto inline-flex items-center justify-center text-sm cursor-pointer bg-[#4041d1] text-white hover:bg-blue-700 rounded-xl font-bold transition duration-300 ease-out transform-gpu gap-2 shadow-lg hover:shadow-[0_0_20px_rgba(64,65,209,0.3)] active:scale-95 font-inter"
                >
                  <FaEnvelope className="w-4 h-4" /> Book Consultation
                </button>
            </div>

          </div>
        </div>
      </section>

      {/* --- DARK SECTION 1: THE PROCEDURE & QUICK FACTS --- */}
      <section
        className="relative py-20 lg:py-28 bg-[#0A1128] overflow-hidden font-inter border-t border-slate-800"
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
              className="inline-block px-5 py-2 bg-[#4041d1]/20 text-[#8ea3ff] rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 border border-[#4041d1]/30 font-raleway shadow-[0_0_15px_rgba(64,65,209,0.1)] transform-gpu"
              variants={itemVariants}
            >
              The Procedure
            </motion.div>
            <motion.h2
              className="text-3xl md:text-5xl font-raleway font-bold text-white leading-tight mb-8 tracking-tight"
              variants={itemVariants}
            >
              Structured Clinical Assessment
            </motion.h2>
            <motion.p
              className="text-lg text-slate-200 leading-relaxed max-w-3xl mx-auto font-medium font-inter"
              variants={itemVariants}
            >
              A straightforward, doctor-led procedure designed to minimise discomfort and downtime while maximising skin regeneration.
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
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#4041d1]/30 border border-[#4041d1]/50 rounded-full shadow-[0_0_25px_rgba(64,65,209,0.3)] transform-gpu"
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
                    onPointerDown={() => setActiveStep(index)}
                    variants={itemVariants}
                  >
                    <div
                      className={`p-6 rounded-[2.5rem] border transition duration-300 ease-out transform-gpu h-full flex flex-col ${
                        isActive
                          ? "border-[#4041d1] bg-white shadow-[0_0_40px_rgba(64,65,209,0.2)] scale-105 z-20"
                          : "border-white/10 bg-white/[0.03] opacity-80 hover:opacity-100 hover:bg-white/[0.07]"
                      }`}
                    >
                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition duration-300 ease-out transform-gpu ${
                          isActive
                            ? "bg-[#4041d1] text-white shadow-lg scale-110"
                            : "bg-white/10 text-slate-300 group-hover:text-[#4041d1] group-hover:scale-105"
                        }`}
                      >
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h3
                        className={`font-raleway font-bold mb-3 text-lg transition-colors duration-300 ${
                          isActive ? "text-slate-900" : "text-white"
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p
                        className={`text-xs leading-relaxed font-inter transition-colors duration-300 ${
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
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center text-center hover:bg-white/[0.06] transition-colors duration-300 transform-gpu">
                   <FaRegClock className="text-[#4041d1] text-xl mb-2" />
                   <div className="text-slate-400 text-[10px] uppercase tracking-wider font-bold mb-1">Time</div>
                   <div className="text-white font-raleway font-bold text-sm md:text-base mb-0.5">30-45 Mins</div>
                   <div className="text-slate-500 text-[10px] font-medium">Inc. numbing time</div>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center text-center hover:bg-white/[0.06] transition-colors duration-300 transform-gpu">
                   <FaShieldAlt className="text-[#4041d1] text-xl mb-2" />
                   <div className="text-slate-400 text-[10px] uppercase tracking-wider font-bold mb-1">Comfort</div>
                   <div className="text-white font-raleway font-bold text-sm md:text-base mb-0.5">Minimal Pain</div>
                   <div className="text-slate-500 text-[10px] font-medium">Numbing cream used</div>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center text-center hover:bg-white/[0.06] transition-colors duration-300 transform-gpu">
                   <FaWalking className="text-[#4041d1] text-xl mb-2" />
                   <div className="text-slate-400 text-[10px] uppercase tracking-wider font-bold mb-1">Downtime</div>
                   <div className="text-white font-raleway font-bold text-sm md:text-base mb-0.5">~24 Hours</div>
                   <div className="text-slate-500 text-[10px] font-medium">For papules to settle</div>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center text-center hover:bg-white/[0.06] transition-colors duration-300 transform-gpu">
                   <FaDna className="text-[#4041d1] text-xl mb-2" />
                   <div className="text-slate-400 text-[10px] uppercase tracking-wider font-bold mb-1">Course</div>
                   <div className="text-white font-raleway font-bold text-sm md:text-base mb-0.5">3 Sessions</div>
                   <div className="text-slate-500 text-[10px] font-medium">For optimal results</div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- LIGHT SECTION 3: Treatment Effect --- */}
      <section className="py-20 bg-white font-inter">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-raleway font-bold text-slate-900 mb-6">
              Treatment Effect & Recovery
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              Improvements develop gradually as part of the skin’s natural regenerative cycle. Results may be sustained for several months, depending on individual response and the recommended treatment course.
            </p>
         </div>
      </section>

      {/* --- DARK SECTION 2: DNA GLOW PLUS (The PRP Upgrade) --- */}
      <section className="py-20 lg:py-28 bg-[#0A1128] font-inter relative overflow-hidden border-t border-white/5">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none transform-gpu" />
         
         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16 bg-white/5 border border-white/10 p-10 md:p-16 lg:p-20 rounded-[3rem] backdrop-blur-xl transform-gpu shadow-2xl">
               <div className="md:w-2/3">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-200 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-purple-500/30">
                     <FaWandSparkles className="w-3 h-3" /> Premium Upgrade
                  </div>
                  <h2 className="text-3xl md:text-5xl font-raleway font-bold text-white mb-6 leading-tight">
                    DNA Glow Plus™
                  </h2>
                  <p className="text-slate-300 text-lg leading-relaxed mb-10">
                    For patients seeking enhanced regenerative support, DNA Glow Plus™ builds upon the DNA Glow Concept™ by incorporating PRP-based microneedling. 
                    <br/><br/>
                    Platelet-Rich Plasma (PRP), derived from your own blood, contains growth factors involved in natural tissue repair and may further support skin resilience and recovery.
                  </p>
                  
                  <button 
                    onClick={handleAction}
                    className="px-8 py-4 inline-flex items-center justify-center text-sm cursor-pointer bg-[#4041d1] text-white hover:bg-blue-700 rounded-xl font-bold transition duration-300 ease-out transform-gpu gap-2 shadow-lg hover:shadow-[0_0_20px_rgba(64,65,209,0.4)] active:scale-95 font-inter"
                  >
                    <FaEnvelope className="w-4 h-4" /> Book Consultation
                  </button>
               </div>
               
               <div className="md:w-1/3 flex justify-center">
                  <div className="relative w-56 h-56 lg:w-64 lg:h-64">
                     <div className="absolute inset-0 border-4 border-dashed border-purple-500/30 rounded-full animate-[spin_20s_linear_infinite] transform-gpu" />
                     <div className="absolute inset-4 border-2 border-blue-500/40 rounded-full animate-[spin_15s_linear_infinite_reverse] transform-gpu" />
                     <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full blur-sm opacity-80 transform-gpu" />
                        <span className="absolute text-white font-bold font-raleway text-2xl tracking-wider">PLUS™</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* --- LIGHT SECTION 4: FAQs --- */}
      <section className="py-24 bg-slate-50 font-inter border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-raleway font-bold text-slate-900">Common Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm transform-gpu">
                <button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-bold text-slate-900 pr-8 text-sm md:text-base">{faq.question}</span>
                  {openFAQIndex === index ? <FaMinus className="text-blue-600 shrink-0" /> : <FaPlus className="text-slate-400 shrink-0" />}
                </button>
                <AnimatePresence>
                  {openFAQIndex === index && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-100 mt-2">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MATCHING BOTTOM CTA BAR --- */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 text-center">
           
           {/* Pricing Info Box */}
           <div className="bg-white border border-slate-200 rounded-2xl p-8 mb-8 shadow-sm">
              <p className="text-slate-600 leading-relaxed text-sm md:text-base font-inter">
                 Our pricing is intentionally kept accessible compared with many London clinics, while maintaining the same medical-grade equipment, evidence-based protocols, and experienced doctor-led care.
              </p>
           </div>
           
           {/* 3-Button Layout matching ED page */}
           <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <button 
                onClick={handleAction}
                className="w-full sm:w-auto px-8 py-3.5 inline-flex items-center justify-center text-sm bg-[#4041d1] text-white hover:bg-blue-700 rounded-xl font-bold transition duration-300 ease-out transform-gpu gap-2 shadow-sm font-inter"
              >
                 <FaEnvelope className="w-4 h-4"/> Book Consultation
              </button>
              
              <Link 
                href={pricesUrl} 
                className="w-full sm:w-auto px-8 py-3.5 inline-flex items-center justify-center text-sm bg-[#4041d1] text-white hover:bg-blue-700 rounded-xl font-bold transition duration-300 ease-out transform-gpu shadow-sm font-inter"
              >
                 View Treatment Prices
              </Link>
              
              <Link 
                href={faqUrl} 
                className="w-full sm:w-auto px-8 py-3.5 inline-flex items-center justify-center text-sm bg-white border border-[#4041d1] text-[#4041d1] hover:bg-slate-50 rounded-xl font-bold transition duration-300 ease-out transform-gpu font-inter"
              >
                 View Clinic FAQs
              </Link>
           </div>

        </div>
      </section>

      <ContactCTASection />
      <LocationSection />
      <Footer />
    </>
  );
}
