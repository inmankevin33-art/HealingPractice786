"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  FaPlus,
  FaMinus,
  FaUserMd,
  FaPrescriptionBottleAlt,
  FaCommentMedical,
  FaTachometerAlt,
  FaLevelDownAlt,
  FaShippingFast,
  FaCheckCircle,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPills,
  FaExclamationTriangle,
  FaFileMedical,
  FaHistory,
  FaArrowRight,
  FaChevronDown, 
  FaGoogle,      
  FaStar,        
  FaLock,
  FaSyringe,      
  FaHourglassHalf,
  FaHeartbeat
} from "react-icons/fa";

import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/ContactCTASection";
import OnlineAssessmentModal from "@/components/OnlineAssessmentModal";
import TrustReviews from "@/components/TrustReviews"; 

// --- INTERFACE FOR DYNAMIC PROPS ---
type FaqType = {
  question: string;
  answer: string;
};

interface PersonalisedEDMedicationProps {
  locationName?: string;
  servingAreas?: string;
  faqs: FaqType[]; 
}

export default function PersonalisedEDMedicationClient({
  locationName = "St Albans",
  servingAreas = "Harpenden • Luton • Watford • Hertfordshire",
  faqs,
}: PersonalisedEDMedicationProps) {

  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);
  const [showAllFaqs, setShowAllFaqs] = useState(false); 

  const isBirmingham = locationName === "Birmingham";

  // --- DYNAMIC ROUTING PATHS ---
  const baseRoute = isBirmingham ? "/birmingham" : "";
  const edRoute = `${baseRoute}/erectile-dysfunction`;
  const peRoute = `${baseRoute}/premature-ejaculation`;
  const pshotRoute = `${baseRoute}/p-shot`;
  const rejuvenationRoute = `${baseRoute}/sexual-rejuvenation`; 
  const treatmentCostsRoute = `${baseRoute}/treatment-costs`; 

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

  const candidates = [
    {
      title: "Reduced Morning Erections",
      description: "Fewer or weaker morning erections compared with your usual pattern.",
      icon: FaCheckCircle, 
      color: "bg-amber-50 text-amber-600",
    },
    {
      title: "Difficulty Maintaining Erections",
      description: "Erection starts but fades quickly or is hard to maintain during sex",
      icon: FaTachometerAlt, 
      color: "bg-indigo-50 text-indigo-600",
    },
    {
      title: "Low Sexual Confidence",
      description: "Worry, performance anxiety or reduced confidence affecting intimacy.",
      icon: FaLevelDownAlt, 
      color: "bg-teal-50 text-teal-600",
    },
    {
      title: "Limited Response to Standard Tablets",
      description: "Inadequate or inconsistent results despite appropriate use.",
      icon: FaPills,
      color: "bg-rose-50 text-rose-600",
    },
  ]; 

  const protocolSteps = [
    {
      number: 1,
      icon: FaUserMd,
      title: "Comprehensive Assessment",
      description: "Full cardiovascular, medication and lifestyle review to determine suitability.",
    },
    {
      number: 2,
      icon: FaPrescriptionBottleAlt,
      title: "Personalised Formulation",
      description: "Custom-formulated prescription medication where clinically appropriate.",
    },
    {
      number: 3,
      icon: FaShippingFast,
      title: "Direct Dispensing",
      description: "Medication supplied directly with structured follow-up and dose refinement.",
    },
    {
      number: 4,
      icon: FaCommentMedical,
      title: "Regular Review by Dedicated Team",
      description: "Ongoing safety checks, progress tracking and dose optimisation.",
    },
  ];

  const displayedFaqs = showAllFaqs ? faqs : faqs.slice(0, 5);

  return (
    <>
      {/* --- HERO SECTION --- */}
      <div className="relative min-h-[100vh] lg:min-h-[calc(100vh-5rem)] overflow-hidden flex items-end justify-center bg-black">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-black/60 to-transparent z-10" />
          <img
            src="/personalised-meds-hero.webp"
            alt="Personalised erectile dysfunction medication consultation"
            className="absolute inset-0 w-full h-full object-cover"
            fetchPriority="high"
            onError={(e) => {
               e.currentTarget.src = "/ed-doctor-consultation.webp";
            }}
          />
        </div>

        <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-40 pb-20 md:pb-24">

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="text-3xl md:text-5xl lg:text-6xl font-bold font-raleway text-white leading-tight mb-4 tracking-tight"
          >
            Personalised ED Medication <br className="hidden md:block" /> 
            <span className="text-2xl md:text-4xl lg:text-5xl text-blue-100">for Male Performance in {locationName}</span>
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="mt-4 text-sm md:text-lg text-blue-50/90 font-inter leading-relaxed max-w-2xl mx-auto mb-8 font-medium"
          >
            Advanced, doctor-led formulation for men who have not achieved satisfactory results or experienced side effects with standard tablets.
          </motion.p>

          <motion.div 
            custom={3} 
            initial="hidden" 
            animate="visible" 
            variants={fadeUpVariants} 
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button 
              onClick={() => setIsAssessmentOpen(true)}
              className="px-6 py-3 flex items-center justify-center text-sm cursor-pointer bg-white text-[#4041d1] hover:bg-blue-50 rounded-xl font-bold transition-all duration-300 gap-2 shadow-xl shadow-white/10 active:scale-95 font-inter border-2 border-white"
            >
               Take Free Online Assessment
            </button>

            <button 
              onClick={handleAction}
              className="px-6 py-3 flex items-center justify-center text-sm cursor-pointer bg-[#4041d1]/80 hover:bg-[#4041d1] backdrop-blur-md text-white border border-white/20 rounded-xl font-bold transition-all duration-300 gap-2 shadow-xl active:scale-95 font-inter"
            >
              <FaEnvelope className="w-4 h-4" /> Book Directly
            </button>
          </motion.div>

          <motion.div 
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="inline-flex items-center justify-center gap-2 px-6 py-2 bg-[#4041d1]/10 text-white rounded-full text-[10px] md:text-xs mt-8 font-bold uppercase tracking-widest font-inter shadow-lg border border-white/10 backdrop-blur-sm"
          >
             <FaMapMarkerAlt className="text-white/80 mb-0.5" /> 
             <span>Serving: {servingAreas}</span>
          </motion.div>
        </div>

        {/* --- HERO TRUST BADGES --- */}
        <div className={`md:block absolute hidden bottom-0 left-0 right-0 bg-[#0f172a]/90 backdrop-blur-md border-t border-white/10 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} z-30`}>
          <div className="px-2 py-4 max-w-7xl mx-auto">
            <div className="grid grid-cols-4 gap-2 divide-x divide-white/10">
              <a href="#reviews" onClick={(e) => {
                e.preventDefault();
                document.getElementById('reviews-section')?.scrollIntoView({ behavior: 'smooth' });
              }} className="flex justify-center items-center group cursor-pointer px-2">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#4285F4] group-hover:scale-110 transition-transform shadow-md">
                    <FaGoogle className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col items-start">
                    <div className="flex text-amber-400 text-[10px] mb-0.5">
                      <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
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
                    <FaLock className="w-3.5 h-3.5" />
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

     {/* --- NEW: DARK PREMIUM AUTHORITY SECTION --- */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {/* Card 1: The Clinical & Psychological Impact */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-b from-[#0f172a] to-black rounded-[2rem] p-8 md:p-12 shadow-2xl flex flex-col items-start relative overflow-hidden group border border-slate-800"
            >
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="w-16 h-16 bg-blue-900/30 border border-blue-500/30 rounded-2xl flex items-center justify-center mb-8 shadow-inner">
                <FaHeartbeat className="text-3xl text-blue-400" />
              </div>
              <h3 className="text-2xl md:text-3xl font-raleway font-bold text-white mb-6">
                The Clinical & Psychological Impact
              </h3>
              <p className="text-base md:text-lg font-inter text-slate-300 leading-relaxed mb-10 flex-grow">
                Experiencing reduced sexual performance or inconsistent erections is an incredibly common medical issue, yet the psychological toll it takes is often overlooked. We understand that struggling with erectile dysfunction can have a profound, cascading impact on your overall well-being, relationship dynamics, and daily stress levels.
              </p>
              <button
                onClick={() => setIsAssessmentOpen(true)}
                className="inline-flex items-center gap-2 text-blue-400 font-bold text-sm md:text-base hover:text-blue-300 transition-colors group-hover:translate-x-1 duration-300 bg-transparent p-0 border-none cursor-pointer"
              >
                Take Free Online Assessment <FaArrowRight className="w-4 h-4" />
              </button>
            </motion.div>

            {/* Card 2: A Doctor-Led Approach */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-b from-[#0f172a] to-black rounded-[2rem] p-8 md:p-12 shadow-2xl flex flex-col items-start relative overflow-hidden group border border-slate-800"
            >
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="w-16 h-16 bg-blue-900/30 border border-blue-500/30 rounded-2xl flex items-center justify-center mb-8 shadow-inner">
                <FaUserMd className="text-3xl text-blue-400" />
              </div>
              <h3 className="text-2xl md:text-3xl font-raleway font-bold text-white mb-6">
                A Doctor-Led Approach
              </h3>
              <p className="text-base md:text-lg font-inter text-slate-300 leading-relaxed mb-10 flex-grow">
                As GMC-registered doctors specialising in male sexual health, we do not just treat the physical symptom; we treat the patient. Having successfully guided countless men through bespoke treatment plans, we have seen firsthand how restoring reliable sexual performance provides a life-changing boost to overall confidence and quality of life. Our goal is to build a mutual management plan that actually works for your unique physiology.
              </p>
              <button
                onClick={handleAction}
                className="inline-flex items-center gap-2 text-blue-400 font-bold text-sm md:text-base hover:text-blue-300 transition-colors group-hover:translate-x-1 duration-300 bg-transparent p-0 border-none cursor-pointer"
              >
                Book Your Consultation <FaArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- WHO THIS IS FOR --- */}
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

      {/* --- OUR TREATMENTS (HUB GRID) --- */}
      <section className="py-24 bg-slate-50 font-inter border-t border-slate-100 relative z-30 overflow-visible">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#4041d1] font-bold tracking-widest text-xs uppercase mb-2 block">Our Treatments</span>
            <h2 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-6">
              Explore our range of bespoke treatments to enhance male performance.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-10 pt-10 pb-10">
            
            {/* CARD 1: Erectile Dysfunction */}
            <Link href={edRoute} className="group relative block rounded-[2rem] overflow-visible shadow-xl hover:shadow-2xl hover:shadow-[#4041d1]/20 transition-all duration-500 min-h-[400px] bg-slate-900 mt-8 md:mt-0">
              <div className="absolute inset-0 rounded-[2rem] overflow-hidden">
                <img src="/ed-doctor-consultation.webp" alt="Erectile Dysfunction" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#0A1128]/60 to-transparent"></div>
              </div>
              <div className="relative h-full flex flex-col justify-center items-center p-8 text-center z-10">
                <h3 className="text-3xl font-raleway font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">Erectile Dysfunction</h3>
                <div className="text-white/80 text-sm font-medium tracking-wider mb-6">Treatment Details</div>
                <p className="text-slate-300 text-sm leading-relaxed font-medium max-w-[250px]">
                  Tailored PDE5 inhibitors and bespoke daily medication plans designed for optimal response and minimal side effects.
                </p>
              </div>
              <img 
                src="/ed-bottle.webp"  
                alt="ED Medication" 
                className="absolute -bottom-12 -left-6 w-32 md:w-40 h-auto object-contain drop-shadow-2xl transform group-hover:-translate-y-3 transition-all duration-500 z-20"
              />
            </Link>

            {/* CARD 2: Premature Ejaculation */}
            <Link href={peRoute} className="group relative block rounded-[2rem] overflow-visible shadow-xl hover:shadow-2xl hover:shadow-[#4041d1]/20 transition-all duration-500 min-h-[400px] bg-slate-900 mt-8 md:mt-0">
              <div className="absolute inset-0 rounded-[2rem] overflow-hidden">
                <img 
                  src="/pe-lifestyle.webp" 
                  alt="Premature Ejaculation Treatment" 
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#0A1128]/60 to-transparent"></div>
              </div>
              <div className="relative h-full flex flex-col justify-center items-center p-8 text-center z-10">
                <h3 className="text-3xl font-raleway font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">Premature Ejaculation</h3>
                <div className="text-white/80 text-sm font-medium tracking-wider mb-6">Treatment Details</div>
                <p className="text-slate-300 text-sm leading-relaxed font-medium max-w-[250px]">
                  Discreet, doctor-prescribed solutions designed to improve stamina, control, and restore sexual confidence.
                </p>
              </div>
              <img 
                src="/pe-bottle.webp" 
                alt="PE Medication" 
                className="absolute -bottom-12 -left-6 w-32 md:w-40 h-auto object-contain drop-shadow-2xl transform group-hover:-translate-y-3 transition-all duration-500 z-20"
              />
            </Link>

            {/* CARD 3: P-Shot */}
            <Link href={pshotRoute} className="group relative block rounded-[2rem] overflow-visible shadow-xl hover:shadow-2xl hover:shadow-[#4041d1]/20 transition-all duration-500 min-h-[400px] bg-slate-900 mt-8 md:mt-0">
              <div className="absolute inset-0 rounded-[2rem] overflow-hidden">
                <img src="/p-shot-consultation.webp" alt="P-Shot Regenerative Therapy" onError={(e) => e.currentTarget.style.display = 'none'} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#0A1128]/60 to-transparent"></div>
              </div>
              <div className="relative h-full flex flex-col justify-center items-center p-8 text-center z-10">
                <h3 className="text-3xl font-raleway font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">The P-Shot®</h3>
                <div className="text-white/80 text-sm font-medium tracking-wider mb-6">Treatment Details</div>
                <p className="text-slate-300 text-sm leading-relaxed font-medium max-w-[250px]">
                  Combine your tailored medication protocol with autologous PRP for maximum tissue restoration and vascular health.
                </p>
              </div>
              <img 
                src="/pshot-vial.webp" 
                alt="P-Shot Vial" 
                className="absolute -bottom-12 -left-6 w-32 md:w-40 h-auto object-contain drop-shadow-2xl transform group-hover:-translate-y-3 transition-all duration-500 z-20"
              />
            </Link>

          </div>

          {/* --- NEW: TREATMENT COSTS BUTTON UNDER TREATMENTS GRID --- */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Link 
              href={treatmentCostsRoute}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-xl font-bold transition-all duration-300 shadow-xl shadow-[#4041d1]/20 active:scale-95 font-inter group"
            >
              View Treatment Prices <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

        </div>
      </section>

      {/* --- PROTOCOL SECTION --- */}
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

            <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative mb-20" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
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

            {/* --- MID-PAGE CTA BANNER (Now a sleeker, smaller rectangle) --- */}
            <motion.div 
              className="bg-white/5 border border-white/10 rounded-[2rem] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-raleway font-bold text-white mb-2">
                  Ready to explore bespoke options?
                </h3>
                <p className="text-slate-300 font-inter text-sm max-w-xl">
                  Discover how our tailored formulations can work for your specific physiology, and see transparent pricing for your personalised plan.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link 
                  href={treatmentCostsRoute}
                  className="px-6 py-3.5 flex items-center justify-center text-sm cursor-pointer bg-white text-[#0A1128] hover:bg-slate-100 rounded-xl font-bold transition-all duration-300 gap-2 shadow-xl active:scale-95 font-inter"
                >
                   View Treatment Prices
                </Link>
                <button 
                  onClick={() => setIsAssessmentOpen(true)}
                  className="px-6 py-3.5 flex items-center justify-center text-sm cursor-pointer bg-transparent border-2 border-white/20 text-white hover:bg-white/10 rounded-xl font-bold transition-all duration-300 gap-2 active:scale-95 font-inter"
                >
                   Take Assessment
                </button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- EXPLORE SEXUAL REJUVENATION BANNER (Moved beneath Protocol) --- */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] rounded-3xl p-8 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl border border-slate-800 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#4041d1]/20 rounded-full blur-3xl -z-10"></div>
            
            <div className="relative z-10 text-center lg:text-left max-w-2xl">
              <h4 className="text-2xl font-raleway font-bold text-white mb-2">Looking for a holistic approach?</h4>
              <p className="text-slate-300 text-sm md:text-base font-inter">
                Discover our comprehensive male intimate wellness and sexual rejuvenation programmes, focusing on long-term tissue health and aesthetic restoration.
              </p>
            </div>
            
            <div className="relative z-10 flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto justify-center">
              <Link 
                href={edRoute}
                className="px-6 py-3.5 border-2 border-[#4041d1] text-blue-100 hover:bg-[#4041d1]/30 rounded-xl font-bold transition-all duration-300 text-sm flex items-center justify-center gap-2 group active:scale-95 font-inter w-full sm:w-auto"
              >
                Explore ED Treatments
                <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href={rejuvenationRoute}
                className="px-6 py-3.5 bg-white text-[#0f172a] hover:bg-slate-100 rounded-xl font-bold transition-all duration-300 text-sm flex items-center justify-center gap-2 group shadow-lg active:scale-95 font-inter w-full sm:w-auto"
              >
                Sexual Rejuvenation
                <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

     {/* --- FAQ & ACTION BUTTONS --- */}
      <section className="py-24 bg-white font-inter">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-24 flex flex-col md:flex-row justify-center items-center gap-4 w-full">
            <button
              onClick={handleAction}
              className="px-6 py-3 w-full md:w-max md:text-sm text-xs items-center justify-center cursor-pointer bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-lg font-inter font-bold transition-all duration-300 inline-flex gap-2 shadow-lg shadow-[#4041d1]/20 active:scale-95"
            >
              <FaEnvelope className="w-4 h-4" /> Speak To A Specialist
            </button>
            <Link
              href={treatmentCostsRoute} 
              className="px-6 py-3 w-full md:w-max md:text-sm text-xs items-center justify-center cursor-pointer bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-lg font-inter font-bold transition-all duration-300 inline-flex gap-2 shadow-lg"
            >
              View Treatment Prices
            </Link>
            <Link
              href={isBirmingham ? "/birmingham/faq" : "/faq"}
              className="px-6 py-3 w-full md:w-max md:text-sm text-xs items-center justify-center cursor-pointer border-2 border-[#4041d1] text-[#4041d1] hover:bg-blue-50 bg-white rounded-lg font-inter font-bold transition-all duration-300 inline-flex gap-2"
            >
              View Clinic FAQs
            </Link>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-raleway font-bold text-slate-900 mb-6">
              Common Questions
            </h2>
          </div>
          
          <div className="space-y-4">
            {displayedFaqs.map((faq, index) => (
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

          {faqs.length > 5 && (
            <div className="mt-8 text-center">
              <button
                onClick={() => setShowAllFaqs(!showAllFaqs)}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm cursor-pointer border-2 border-[#4041d1] text-[#4041d1] hover:bg-[#4041d1]/5 rounded-xl font-inter font-bold transition-all duration-300"
              >
                {showAllFaqs ? "Show Less FAQs" : "View All FAQs"}
                <FaChevronDown className={`w-3 h-3 transition-transform duration-300 ${showAllFaqs ? "rotate-180" : ""}`} />
              </button>
            </div>
          )}

        </div>
      </section>

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

      <OnlineAssessmentModal 
        isOpen={isAssessmentOpen} 
        onClose={() => setIsAssessmentOpen(false)} 
      />
    </>
  );
}
