"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  FaPlus,
  FaMinus,
  FaDna,
  FaSyringe,
  FaRegLightbulb,
  FaShieldAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaArrowRight,
  FaRegClock,
  FaWalking,
  FaUserMd,
  FaTint,
  FaLayerGroup
} from "react-icons/fa";
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

  // --- DATA: Benefits ---
  const benefits = [
    {
      title: "Dark Circle Correction",
      description: "Thickens the skin under the eyes to reduce transparency and dark shadows naturally.",
      icon: FaRegLightbulb,
      color: "bg-amber-50 text-amber-600",
    },
    {
      title: "Elasticity & Firmness",
      description: "Boosts collagen and elastin production for firmer, more resilient skin texture.",
      icon: FaShieldAlt,
      color: "bg-teal-50 text-teal-600",
    },
    {
      title: "Acne Scarring",
      description: "Promotes deep tissue repair to smooth out uneven skin texture and scarring.",
      icon: FaLayerGroup,
      color: "bg-rose-50 text-rose-600",
    },
    {
      title: "Natural Radiance",
      description: "Restores the skin's biological capability to hold moisture and reflect light.",
      icon: FaTint,
      color: "bg-blue-50 text-blue-600",
    },
  ];

  const faqs = [
    {
      question: "What makes the DNA Glow Concept™ different?",
      answer: "Unlike standard treatments that use a single product, our concept combines three powerful modalities: Polynucleotides for deep repair, Non-Cross-Linked HA for hydration, and Microneedling for surface texture. This creates a multi-layered result.",
    },
    {
      question: "Is this the same as Dermal Filler?",
      answer: "No. Fillers add structural volume to change the shape of your face. The DNA Glow Concept™ improves the quality of the skin itself—making it thicker, hydrated, and more elastic without changing your natural features.",
    },
    {
      question: "How many sessions do I need?",
      answer: "We typically recommend a course of 3 treatments spaced 2–4 weeks apart to achieve the full 'DNA Glow' effect. Maintenance is usually one session every 6–9 months.",
    },
    {
      question: "Is there downtime?",
      answer: "Minimal. Because we treat multiple layers of the skin, you may have some redness or small bumps (papules) for 24–48 hours. This is a sign the product is working.",
    },
    {
      question: "Can it treat under-eye bags?",
      answer: "Yes, it is excellent for the tear trough area. Because it doesn't attract water like some fillers, it reduces the risk of puffiness while thickening the skin to hide dark circles.",
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
            className="inline-block px-4 py-1.5 mb-4 border border-blue-400/30 rounded-full bg-blue-900/20 backdrop-blur-sm"
          >
            <span className="text-blue-200 text-xs font-bold tracking-widest uppercase font-inter">Regenerative Aesthetics</span>
          </motion.div>

          <motion.h1 
            custom={1}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeUpVariants}
            className="md:text-5xl text-3xl font-bold font-raleway text-white leading-tight mb-4 tracking-tight"
          >
            Polynucleotides: The &quot;DNA Glow&quot;<br />
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-purple-200">
              Healing-PRP Clinics, {locationName}
            </span>
          </motion.h1>

          <motion.p 
            custom={2}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeUpVariants}
            className="mt-4 text-sm md:text-lg text-white/90 font-inter leading-relaxed max-w-2xl mx-auto mb-8"
          >
            A revolutionary, multi-layered treatment that uses filtered DNA fractions to 
            repair skin cells, boost hydration, and restore a natural, youthful glow 
            from within.
          </motion.p>

          <motion.div 
            custom={3}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeUpVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button 
              onClick={handleAction}
              className="px-8 py-4 flex items-center justify-center text-sm cursor-pointer bg-white text-slate-900 hover:bg-blue-50 rounded-xl font-bold transition-all duration-300 gap-2 shadow-xl active:scale-95 font-inter"
            >
              <FaEnvelope className="w-4 h-4" /> Book Consultation
            </button>
            <Link
              href={pricesUrl}
              className="px-8 py-4 flex items-center justify-center text-sm cursor-pointer bg-transparent border border-white/30 text-white hover:bg-white/10 rounded-xl font-bold transition-all duration-300 gap-2 backdrop-blur-sm font-inter"
            >
              View Prices
            </Link>
          </motion.div>
          
          <motion.div 
            custom={4}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeUpVariants}
            className="inline-flex items-center justify-center gap-2 px-6 py-2 bg-[#4041d1] text-white rounded-full text-[10px] md:text-xs mt-8 font-bold uppercase tracking-widest font-inter shadow-lg border border-white/10"
          >
             <FaMapMarkerAlt className="text-white/80 mb-0.5" /> 
             <span>Serving: {servingAreas}</span>
          </motion.div>
        </div>
      </div>

      {/* --- NEW SECTION: The DNA Glow Concept™ --- */}
      <section className="py-20 bg-white font-inter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <span className="text-[#4041d1] font-bold tracking-widest text-xs uppercase mb-2 block">Our Signature Protocol</span>
                <h2 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900">
                    What Makes DNA Glow Concept™ Different?
                </h2>
                <div className="w-24 h-1 bg-[#4041d1] mx-auto mt-6 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Block 1: Deep Repair */}
                <div className="relative group p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
                    <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                        <FaDna className="w-24 h-24 text-blue-600" />
                    </div>
                    <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-2xl mb-6 shadow-sm">
                        <FaDna />
                    </div>
                    <h3 className="text-xl font-raleway font-bold text-slate-900 mb-3">1. Deep Repair</h3>
                    <p className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-3">Polynucleotides</p>
                    <p className="text-slate-600 leading-relaxed text-sm">
                        Supports cellular repair processes and collagen stimulation within the deep dermis, rebuilding the skin's foundation.
                    </p>
                </div>

                {/* Block 2: Internal Hydration */}
                <div className="relative group p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-cyan-100 hover:shadow-xl hover:shadow-cyan-900/5 transition-all duration-300">
                    <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                        <FaTint className="w-24 h-24 text-cyan-500" />
                    </div>
                    <div className="w-14 h-14 rounded-2xl bg-cyan-100 text-cyan-600 flex items-center justify-center text-2xl mb-6 shadow-sm">
                        <FaTint />
                    </div>
                    <h3 className="text-xl font-raleway font-bold text-slate-900 mb-3">2. Internal Hydration</h3>
                    <p className="text-sm font-bold text-cyan-600 uppercase tracking-wider mb-3">Non-Cross-Linked HA</p>
                    <p className="text-slate-600 leading-relaxed text-sm">
                        Delivers evenly distributed dermal hydration (glow) without adding artificial structural volume or puffiness.
                    </p>
                </div>

                {/* Block 3: Surface Optimisation */}
                <div className="relative group p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-purple-100 hover:shadow-xl hover:shadow-purple-900/5 transition-all duration-300">
                    <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                        <FaLayerGroup className="w-24 h-24 text-purple-600" />
                    </div>
                    <div className="w-14 h-14 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center text-2xl mb-6 shadow-sm">
                        <FaLayerGroup />
                    </div>
                    <h3 className="text-xl font-raleway font-bold text-slate-900 mb-3">3. Surface Optimisation</h3>
                    <p className="text-sm font-bold text-purple-600 uppercase tracking-wider mb-3">Microneedling</p>
                    <p className="text-slate-600 leading-relaxed text-sm">
                        Enhances product distribution and refines skin texture, pores, and surface irregularities for a polished finish.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* --- BENEFITS SECTION --- */}
      <section className="py-24 bg-slate-50 font-inter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-6">
              Targeted Results
            </h2>
            <p className="text-slate-600 text-lg">
              Because the DNA Glow Concept™ works on three levels, it can address complex skin concerns that single treatments cannot.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl ${benefit.color} flex items-center justify-center mb-6 text-xl`}>
                  <benefit.icon />
                </div>
                <h3 className="text-xl font-raleway font-bold text-slate-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROTOCOL SECTION (Dark Blue) --- */}
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
              A straightforward in-clinic procedure designed to minimise discomfort and downtime while maximising skin regeneration.
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
                   <div className="text-white font-raleway font-bold text-sm md:text-base mb-0.5">30-45 Mins</div>
                   <div className="text-slate-500 text-[10px] font-medium">Inc. numbing time</div>
              </div>

              {/* Card 2: Comfort */}
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center text-center hover:bg-white/[0.06] transition-colors">
                   <FaShieldAlt className="text-[#4041d1] text-xl mb-2" />
                   <div className="text-slate-400 text-[10px] uppercase tracking-wider font-bold mb-1">Comfort</div>
                   <div className="text-white font-raleway font-bold text-sm md:text-base mb-0.5">Minimal Pain</div>
                   <div className="text-slate-500 text-[10px] font-medium">Numbing cream used</div>
              </div>

              {/* Card 3: Downtime */}
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center text-center hover:bg-white/[0.06] transition-colors">
                   <FaWalking className="text-[#4041d1] text-xl mb-2" />
                   <div className="text-slate-400 text-[10px] uppercase tracking-wider font-bold mb-1">Downtime</div>
                   <div className="text-white font-raleway font-bold text-sm md:text-base mb-0.5">~24 Hours</div>
                   <div className="text-slate-500 text-[10px] font-medium">For papules to settle</div>
              </div>

              {/* Card 4: Method */}
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center text-center hover:bg-white/[0.06] transition-colors">
                   <FaDna className="text-[#4041d1] text-xl mb-2" />
                   <div className="text-slate-400 text-[10px] uppercase tracking-wider font-bold mb-1">Course</div>
                   <div className="text-white font-raleway font-bold text-sm md:text-base mb-0.5">3 Sessions</div>
                   <div className="text-slate-500 text-[10px] font-medium">For optimal results</div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS / SCIENCE --- */}
      <section className="py-24 bg-white font-inter border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Text */}
            <div>
              <div className="inline-block px-4 py-1.5 bg-purple-50 text-purple-600 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                Science of Skin
              </div>
              <h2 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-6 leading-tight">
                Not a Filler. <br/>A <span className="text-purple-600">Bio-Stimulator.</span>
              </h2>
              <div className="prose prose-lg text-slate-600 mb-8">
                <p>
                  For years, the aesthetic industry focused on &quot;filling&quot; wrinkles. 
                  Polynucleotides represent a shift towards &quot;healing&quot; them.
                </p>
                <p>
                  Derived from highly purified salmon DNA, these molecules mirror human DNA. 
                  When injected, they create an optimal environment for fibroblasts—the 
                  cells responsible for producing collagen.
                </p>
                <p>
                  This process, known as &quot;bio-restructuring,&quot; thickens the epidermis and 
                  improves hydration at a cellular level for a result that looks and feels 
                  completely natural.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {["100% Natural Origin", "Fully Absorbable", "Scientifically Proven", "GMC Doctor Led"].map((item, i) => (
                   <div key={i} className="flex items-center gap-2">
                      <FaCheckCircle className="text-purple-600 shrink-0" />
                      <span className="text-sm font-bold text-slate-800">{item}</span>
                   </div>
                ))}
              </div>
            </div>

            {/* Right: Visual Box */}
            <div className="bg-slate-900 text-white p-10 rounded-[2.5rem] relative overflow-hidden">
               {/* Background Glow */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -ml-16 -mb-16"></div>

               <h3 className="text-2xl font-raleway font-bold mb-6 relative z-10">Treatment Areas</h3>
               <ul className="space-y-6 relative z-10">
                 <li className="flex gap-4">
                    <span className="text-2xl font-bold text-purple-400">01</span>
                    <div>
                       <h4 className="font-bold text-lg">Under Eyes (Tear Troughs)</h4>
                       <p className="text-sm text-slate-300 mt-1">Reduces dark circles and creepsy skin without puffiness.</p>
                    </div>
                 </li>
                 <li className="flex gap-4">
                    <span className="text-2xl font-bold text-purple-400">02</span>
                    <div>
                       <h4 className="font-bold text-lg">Face & Cheeks</h4>
                       <p className="text-sm text-slate-300 mt-1">General glow, tightening, and acne scar reduction.</p>
                    </div>
                 </li>
                 <li className="flex gap-4">
                    <span className="text-2xl font-bold text-purple-400">03</span>
                    <div>
                       <h4 className="font-bold text-lg">Neck & Décolletage</h4>
                       <p className="text-sm text-slate-300 mt-1">Smooths horizontal lines and improves texture.</p>
                    </div>
                 </li>
               </ul>

               <button 
                 onClick={handleAction}
                 className="mt-10 w-full py-4 bg-white text-slate-900 rounded-xl font-bold hover:bg-slate-200 transition-colors"
               >
                 Book Your Assessment
               </button>
            </div>

          </div>
        </div>
      </section>

      {/* --- FAQs --- */}
      <section className="py-24 bg-slate-50 font-inter">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-raleway font-bold text-slate-900">Common Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
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

      {/* --- CTA BAR --- */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
           <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <Link href={pricesUrl} className="text-blue-600 font-bold hover:underline flex items-center gap-2">
                 View Treatment Prices <FaArrowRight className="w-3 h-3"/>
              </Link>
              <span className="hidden md:block text-slate-300">|</span>
              <Link href={faqUrl} className="text-blue-600 font-bold hover:underline flex items-center gap-2">
                 Read Full FAQs <FaArrowRight className="w-3 h-3"/>
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
