"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  FaPlus,
  FaMinus,
  FaSyringe,
  FaCheckCircle,
  FaEnvelope,
  FaMapMarkerAlt,
  FaExpandArrowsAlt,
  FaShieldAlt,
  FaArrowRight,
  FaRegClock,      
  FaWalking,  
  FaUserMd,   
  FaGoogle,
  FaStar,
  FaLock,
  FaChevronDown,
  FaHeart,
  FaHandsHelping,
  FaTimesCircle
} from "react-icons/fa";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/ContactCTASection";
import LocationSection from "@/components/LocationSection";
import TrustReviews from "@/components/TrustReviews";
import PEOnlineAssessmentModal from "@/components/PEOnlineAssessmentModal"; 

// --- INTERFACE FOR DYNAMIC PROPS ---
type FaqType = {
  question: string;
  answer: string;
};

interface PenisEnlargementProps {
  locationName?: string;
  servingAreas?: string;
  faqs: FaqType[];
}

export default function PenisEnlargementClient({
  locationName = "St Albans",
  servingAreas = "Harpenden • Luton • Watford • Hertfordshire",
  faqs,
}: PenisEnlargementProps) {
  
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
    if (typeof window !== "undefined") {
      const w = window as Window & { gtag?: (...args: unknown[]) => void };
      if (w.gtag) {
        w.gtag("event", "generate_lead", {
          event_category: "engagement",
          event_label: "opened_contact_drawer",
          page_path: window.location.pathname,
        });
      }
    }
    window.dispatchEvent(new CustomEvent("open-contact-drawer"));
    
    // Increased timeout to 300ms to allow any form/drawer animations to complete
    setTimeout(() => {
      const section = document.getElementById("contact-form-section");
      if (section) {
        // Reduced headerOffset from 100 to 20 to scroll further down the page
        // This ensures the bottom of the form clears the sticky footer bar
        const headerOffset = 20; 
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 300);
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
      title: "Immediate Visible Girth Enhancement",
      description:
        "Notice a visible increase in penis girth immediately after treatment, with results designed to look proportionate and natural.",
      icon: FaExpandArrowsAlt,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Fuller Flaccid Appearance",
      description:
        "In some men, the added volume and weight of the filler may contribute to a fuller flaccid appearance and less visible shrinkage.",
      icon: FaArrowRight,
      color: "bg-indigo-50 text-indigo-600",
    },
    {
      title: "Improved Intimate Confidence",
      description:
        "An increase in penis girth may help some men feel more confident during intimacy and more positive about their overall appearance.",
      icon: FaHeart,
      color: "bg-rose-50 text-rose-600",
    },
    {
      title: "Doctor-Led, Non-Surgical Option",
      description:
        "This doctor-led penis filler treatment offers a discreet option for men seeking visible girth enhancement without surgery.",
      icon: FaShieldAlt,
      color: "bg-teal-50 text-teal-600",
    },
  ];

 const protocolSteps = [
    {
      number: 1,
      icon: FaUserMd,
      title: "Discreet Consultation",
      description: "A private consultation to discuss your goals, assess suitability, and decide on the most appropriate filler volume for your treatment.",
    },
    {
      number: 2,
      icon: FaShieldAlt,
      title: "Topical Numbing",
      description: "A strong local anaesthetic is applied before treatment to maximise comfort throughout the procedure.",
    },
    {
      number: 3,
      icon: FaSyringe,
      title: "Precise Filler Placement",
      description: "Using a cannula technique, Dr Abdi carefully places the hyaluronic acid filler to achieve a smooth, proportionate result.",
    },
    {
      number: 4,
      icon: FaWalking,
      title: "Minimal Downtime",
      description: "The appointment usually takes under an hour. You will be given personalised aftercare advice, including massage guidance, and most patients can return to normal daily activities shortly afterwards.",
    },
  ];

  const displayedFaqs = showAllFaqs ? faqs : faqs.slice(0, 5);

  return (
    <>
    {/* --- HERO SECTION --- */}
      <div className="relative min-h-[100vh] md:min-h-[calc(100vh-4rem)] overflow-hidden flex items-center justify-center bg-black">
        
      {/* 1. Background */}
        <div className="absolute inset-0 z-0 bg-[#0A1128]">
          <div className="absolute inset-0 bg-black/60 z-10" /> 
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80 z-10" />
          <Image 
            src="/PEnlargement.webp" 
            alt="Doctor-Led Penile Filler Consultation" 
            fill
            priority
            fetchPriority="high" 
            quality={90}
            sizes="100vw"
            className="object-cover opacity-90"
          />
        </div>

        {/* 2. Main Content */}
        <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 pb-48 md:pb-24">
          
          <motion.div 
            custom={0}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeUpVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 border border-blue-400/30 rounded-full bg-blue-900/20 backdrop-blur-sm transform-gpu"
          >
            <FaUserMd className="text-blue-300 w-3 h-3" aria-hidden="true" />
            <span className="text-blue-200 text-xs font-bold tracking-widest uppercase font-inter">
              Led by Dr Syed Abdi
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-raleway text-white leading-tight mb-4 tracking-tight"
          >
            Doctor-Led Penile Filler <br />
            <span className="text-xl md:text-3xl lg:text-4xl text-blue-100 mt-2 inline-block">in {locationName}</span>
          </motion.h1>

          <motion.p 
            custom={2}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeUpVariants}
            className="mt-4 text-sm md:text-base text-blue-50/90 font-inter leading-relaxed max-w-2xl mx-auto mb-6 font-medium"
          >
           Premium hyaluronic acid (HA) filler for men seeking discreet, non-surgical penile girth enhancement in a clinical setting.
          </motion.p>

          {/* New Injected Trust Signals Above Fold */}
          <motion.div
            custom={3}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeUpVariants}
            className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-white/90 text-sm font-bold mb-8 font-inter uppercase tracking-wide"
          >
            <span className="flex items-center gap-2"><FaCheckCircle className="text-blue-400"/> GMC Registered</span>
            <span className="flex items-center gap-2"><FaCheckCircle className="text-blue-400"/> Under 1 Hour</span>
            <span className="flex items-center gap-2"><FaCheckCircle className="text-blue-400"/> From £995</span>
          </motion.div>
          
          <motion.div 
            custom={4}
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
              <FaEnvelope className="w-4 h-4" aria-hidden="true" /> Book Free Confidential Consultation
            </button>
          </motion.div>

          <motion.div 
            custom={5}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeUpVariants}
            className="inline-flex items-center justify-center gap-2 px-6 py-2 bg-[#4041d1]/10 text-white rounded-full text-[10px] md:text-xs mt-8 font-bold uppercase tracking-widest font-inter shadow-lg border border-white/10 backdrop-blur-sm"
          >
             <FaMapMarkerAlt className="text-white/80 mb-0.5" aria-hidden="true" /> 
             <span>Serving: {servingAreas}</span>
          </motion.div>
        </div>

        {/* --- HERO TRUST BADGES (Fixed for Mobile) --- */}
        <div className={`absolute bottom-0 left-0 w-full z-30 bg-[#0A1128]/95 backdrop-blur-xl border-t border-white/10 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="px-2 py-4 max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-2 divide-none md:divide-x divide-white/10">
              
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
                    HA
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-white text-[9px] font-bold uppercase tracking-widest leading-tight font-inter">Premium Fillers</span>
                    <span className="text-blue-400 text-[9px] font-semibold tracking-wider uppercase leading-tight mt-0.5 font-inter">100% Reversible</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center items-center px-2 opacity-90 hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-3 font-inter">
                  <div className="w-9 h-9 bg-[#1f3a68] rounded-full flex items-center justify-center text-white font-bold text-[11px] shadow-md border border-white/10">
                    GMC
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-white text-[9px] font-bold uppercase tracking-widest leading-tight font-inter">Dr Syed Abdi</span>
                    <span className="text-blue-400 text-[9px] font-semibold tracking-wider uppercase leading-tight mt-0.5 font-inter">GMC Registered</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center items-center px-2 opacity-90 hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-3 font-inter">
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

      {/* --- INTRODUCTION & SYNONYM BRIDGE --- */}
      <section className="py-16 md:py-24 bg-white relative z-30 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Layer 2 target strengthened with location */}
          <h2 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-6">
            Non-Surgical Penis Enlargement {locationName ? `in ${locationName}` : ''}
          </h2>
          <div className="prose prose-lg text-slate-600 mx-auto font-inter">
            {/* Layer 3 target "non-surgical penoplasty" injected seamlessly */}
            <p className="font-semibold text-slate-800 text-lg md:text-xl mb-4">
              Penis filler, also referred to as penile filler, penile dermal filler, or non-surgical penoplasty, uses premium hyaluronic acid (HA) to increase girth without the need for invasive surgery.
            </p>
            <p className="mb-8">
              While historically associated with surgical &quot;penis enlargement,&quot; modern advancements mean that achieving a proportionate, natural-looking increase in girth and a fuller flaccid appearance is now possible through a quick, minimally invasive procedure. Our treatments are administered exclusively by experienced doctors, ensuring maximum safety, discretion, and tailored volume planning.
            </p>
            <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-6 inline-block text-sm text-left shadow-sm">
              <strong className="text-slate-900">Looking to improve erectile function or blood flow?</strong><br/>
              Read about our <Link href="/p-shot" className="text-[#4041d1] hover:underline font-bold">P-Shot treatment here</Link>.
            </div>
          </div>
        </div>
      </section>

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
              Why Men Choose HA Fillers
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-600 text-lg leading-relaxed font-inter"
            >
              A fast, predictable, and non-surgical way to achieve your aesthetic goals without the risks associated with fat transfer surgery.
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

      {/* --- HA FILLERS VS SURGERY (COMPARISON) --- */}
      <section className="py-24 bg-white font-inter border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-6">
              HA Fillers vs. Surgical Fat Transfer
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              We exclusively use premium Hyaluronic Acid (HA) because it offers a safer, more predictable, and natural-feeling result compared to invasive surgical options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* COLUMN 1: HA Fillers */}
            <div className="bg-blue-50/50 p-8 md:p-10 rounded-3xl border border-[#4041d1]/20 shadow-md relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-[#4041d1]"></div>
              <h3 className="text-2xl font-raleway font-bold text-slate-900 mb-6 flex items-center gap-3">
                <FaCheckCircle className="text-[#4041d1]" />
                HA Fillers (Our Approach)
              </h3>
              <ul className="space-y-5">
                {[
                  "Safe & Bio-Compatible: Uses Hyaluronic Acid, naturally found in the body.",
                  "Zero Downtime: A walk-in, walk-out procedure taking under an hour.",
                  "Smooth Texture: Specially formulated to mimic natural tissue.",
                  "Adjustable & Reversible: Can be dissolved safely at any time if desired.",
                  "Predictable Volume: You know exactly how much volume is being added."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FaCheckCircle className="text-[#4041d1] mt-1 shrink-0" aria-hidden="true" />
                    <span className="text-slate-800 text-sm md:text-base font-medium leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUMN 2: Fat Transfer */}
            <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-200">
              <div className="absolute top-0 left-0 w-full h-2 bg-slate-300"></div>
              <h3 className="text-2xl font-raleway font-bold text-slate-900 mb-6 flex items-center gap-3 opacity-60">
                <FaTimesCircle className="text-slate-400" />
                Surgical Fat Transfer
              </h3>
              <ul className="space-y-5 opacity-70">
                {[
                  "Surgical Risks: Requires liposuction, general anaesthesia, and hospital time.",
                  "Long Downtime: Weeks of painful recovery and swelling.",
                  "High Risk of Lumps: Fat can integrate unevenly, causing a lumpy texture (fat necrosis).",
                  "Permanent & Hard to Fix: Very difficult to correct or reverse if you are unhappy with the result.",
                  "Unpredictable: The body naturally reabsorbs a random percentage of the fat."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FaTimesCircle className="mt-1 shrink-0 text-slate-400" aria-hidden="true" />
                    <span className="text-slate-600 text-sm md:text-base font-medium leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* --- TWO-PART SUCCESS (THE PARTNERSHIP) --- */}
      <section className="py-24 bg-[#0A1128] relative overflow-hidden font-inter border-y border-[#1a2342]">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay pointer-events-none"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-[#4041d1]/20 text-blue-300 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-[#4041d1]/30">
              The Clinical Partnership
            </div>
            <h2 className="text-3xl md:text-5xl font-raleway font-bold text-white mb-6 leading-tight">
              A Two-Part Success Formula
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mx-auto">
              There is no single quick fix. A smooth, natural-looking, and lasting result depends on a partnership between expert treatment and careful aftercare.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <div className="bg-white/[0.05] border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-sm flex flex-col justify-center">
              <div className="w-16 h-16 bg-[#4041d1] rounded-2xl flex items-center justify-center mb-6 text-white text-3xl shadow-lg shadow-[#4041d1]/30">
                <FaSyringe />
              </div>
              <h3 className="text-2xl font-bold font-raleway text-white mb-4">Part 1: The Precision</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Dr Abdi performs the technical medical treatment. A blunt cannula technique is used to help protect delicate structures, while premium hyaluronic acid is placed in careful layers to support a balanced, proportionate enhancement.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-slate-400 font-medium"><FaCheckCircle className="text-[#4041d1]" /> GMC-Registered Doctor</li>
                <li className="flex items-center gap-3 text-sm text-slate-400 font-medium"><FaCheckCircle className="text-[#4041d1]" /> Premium HA Fillers</li>
                <li className="flex items-center gap-3 text-sm text-slate-400 font-medium"><FaCheckCircle className="text-[#4041d1]" /> Strict Clinical Sterility</li>
              </ul>
            </div>

            <div className="bg-white/[0.05] border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-sm flex flex-col justify-center">
              <div className="w-16 h-16 bg-blue-400 rounded-2xl flex items-center justify-center mb-6 text-slate-900 text-3xl shadow-lg">
                <FaHandsHelping />
              </div>
              <h3 className="text-2xl font-bold font-raleway text-white mb-4">Part 2: The Aftercare</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                 Aftercare is a key part of treatment. Following the procedure, the filler remains mouldable for a short period. You will be advised to perform daily massage exactly as instructed and to avoid sexual activity for a temporary period, helping the filler settle smoothly and evenly.               
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-slate-400 font-medium"><FaCheckCircle className="text-blue-400" /> Daily Prescribed Massage</li>
                <li className="flex items-center gap-3 text-sm text-slate-400 font-medium"><FaCheckCircle className="text-blue-400" /> Temporary Abstinence</li>
                <li className="flex items-center gap-3 text-sm text-slate-400 font-medium"><FaCheckCircle className="text-blue-400" /> Following Clinic Guidelines</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROTOCOL SECTION --- */}
      <section className="relative py-24 bg-slate-50 font-inter border-b border-slate-200">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2
              className="text-3xl md:text-5xl font-raleway font-bold text-slate-900 leading-tight mb-8"
              variants={itemVariants}
            >
              The Procedure
            </motion.h2>
          </motion.div>

          <div className="max-w-6xl mx-auto relative">
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative mb-16"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="hidden lg:block absolute top-[100px] left-0 w-full h-[1px] border-t border-dashed border-slate-300 -z-10" />
              {protocolSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <motion.div
                    key={index}
                    className="relative group cursor-pointer"
                    onMouseEnter={() => setActiveStep(index)}
                    variants={itemVariants}
                  >
                    <div
                      className={`p-6 rounded-[2.5rem] border transition-all duration-300 h-full flex flex-col bg-white ${
                        activeStep === index
                          ? "border-[#4041d1] shadow-xl scale-105 z-20"
                          : "border-slate-200 opacity-90 hover:opacity-100 hover:shadow-md"
                      }`}
                    >
                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                          activeStep === index
                            ? "bg-[#4041d1] text-white shadow-lg scale-110"
                            : "bg-blue-50 text-[#4041d1] group-hover:bg-[#4041d1] group-hover:text-white"
                        }`}
                      >
                        <IconComponent className="w-6 h-6" aria-hidden="true" />
                      </div>
                      <h3 className="font-raleway font-bold mb-3 text-lg text-slate-900">
                        {step.title}
                      </h3>
                      <p className="text-xs leading-relaxed font-inter text-slate-600 font-medium">
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
              <div className="bg-white border border-slate-200 rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-sm">
                   <FaRegClock className="text-[#4041d1] text-xl mb-2" aria-hidden="true" />
                   <div className="text-slate-400 text-[10px] uppercase tracking-wider font-bold mb-1">Time</div>
                   <div className="text-slate-900 font-raleway font-bold text-sm md:text-base mb-0.5">Under 1 Hour</div>
                   <div className="text-slate-500 text-[10px] font-medium">Includes consultation & prep</div>
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-sm">
                   <FaShieldAlt className="text-[#4041d1] text-xl mb-2" aria-hidden="true" />
                   <div className="text-slate-400 text-[10px] uppercase tracking-wider font-bold mb-1">Comfort</div>
                   <div className="text-slate-900 font-raleway font-bold text-sm md:text-base mb-0.5">Pain-Free</div>
                   <div className="text-slate-500 text-[10px] font-medium">Strong local anaesthetic</div>
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-sm">
                   <FaWalking className="text-[#4041d1] text-xl mb-2" aria-hidden="true" />
                   <div className="text-slate-400 text-[10px] uppercase tracking-wider font-bold mb-1">Downtime</div>
                   <div className="text-slate-900 font-raleway font-bold text-sm md:text-base mb-0.5">Walk-Out</div>
                   <div className="text-slate-500 text-[10px] font-medium">Resume daily activities</div>
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-sm">
                   <FaUserMd className="text-[#4041d1] text-xl mb-2" aria-hidden="true" />
                   <div className="text-slate-400 text-[10px] uppercase tracking-wider font-bold mb-1">Longevity</div>
                   <div className="text-slate-900 font-raleway font-bold text-sm md:text-base mb-0.5">Up to 18 Months</div>
                   <div className="text-slate-500 text-[10px] font-medium">Dependent on metabolism</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- DOCTOR & PRIVACY SECTION --- */}
      <section className="py-24 bg-white font-inter">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="inline-block px-4 py-1.5 bg-[#4041d1]/10 text-[#4041d1] rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            Patient Privacy Priority
          </div>
          <h2 className="text-3xl md:text-5xl font-raleway font-bold text-slate-900 mb-8 leading-tight">
            Discreet, Private & Professional
          </h2>

          <div className="prose prose-lg prose-slate mx-auto mb-16">
            <p className="text-slate-600 font-inter text-lg leading-relaxed mb-6">
              We understand that discussing penile filler is highly personal. 
              Our clinics provide a discreet, confidential, and judgement-free 
              medical environment, where concerns are addressed professionally 
              and with absolute respect.
            </p>
          </div>

          {/* Localised Location Block */}
          {isBirmingham && (
            <div className="max-w-3xl mx-auto mb-16 bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm text-left flex items-start gap-4">
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
              className="px-6 py-4 w-full md:w-max md:text-base text-sm items-center justify-center cursor-pointer bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-xl font-inter font-bold transition-all duration-300 inline-flex gap-2 shadow-lg shadow-[#4041d1]/20 active:scale-95"
            >
              <FaEnvelope className="w-4 h-4" aria-hidden="true" /> Request Free Consultation
            </button>
            <button
              onClick={() => setIsAssessmentOpen(true)}
              className="px-6 py-4 w-full md:w-max md:text-base text-sm items-center justify-center cursor-pointer border-2 border-slate-200 text-slate-700 hover:bg-slate-50 rounded-xl font-inter font-bold transition-all duration-300 inline-flex gap-2 active:scale-95"
            >
              Start Free Online Assessment
            </button>
          </div>

        </div>
      </section>

     {/* --- PRICING SECTION --- */}
      <section className="py-24 bg-slate-50 font-inter border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1.5 bg-[#4041d1]/10 text-[#4041d1] rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              Clear & Transparent
            </div>
            <h2 className="text-3xl md:text-5xl font-raleway font-bold text-slate-900 mb-6">
              Treatment Pricing
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Because every patient’s anatomy and treatment goals are different, pricing is based on the number of millilitres (ml) of premium hyaluronic acid (HA) filler required. The most appropriate volume will be discussed during your consultation with Dr Abdi.
            </p>
          </div>
      
          {/* Pricing Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            
            {/* Tier 1 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow relative flex flex-col h-full">
              <h3 className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-2">Subtle Enhancement</h3>
              <div className="text-4xl font-raleway font-bold text-slate-900 mb-2">10ml</div>
              <div className="text-[#4041d1] font-bold text-xl mb-6">From £995</div>
              <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
                A suitable starting point for men seeking a more subtle increase in penis girth.
              </p>
              <button 
                onClick={handleAction}
                className="w-full py-3 bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-xl font-bold transition-colors text-sm shadow-lg shadow-[#4041d1]/20"
              >
                Discuss 10ml Option
              </button>
            </div>
      
            {/* Tier 2 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow relative flex flex-col h-full">
              <h3 className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-2">Standard Enhancement</h3>
              <div className="text-4xl font-raleway font-bold text-slate-900 mb-2">15ml</div>
              <div className="text-[#4041d1] font-bold text-xl mb-6">From £1,450</div>
              <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
                A popular option for men looking for a more noticeable yet proportionate increase in penis girth.
              </p>
              <button 
                onClick={handleAction}
                className="w-full py-3 bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-xl font-bold transition-colors text-sm shadow-lg shadow-[#4041d1]/20"
              >
                Discuss 15ml Option
              </button>
            </div>
      
            {/* Tier 3 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow relative flex flex-col h-full">
              <h3 className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-2">Advanced Enhancement</h3>
              <div className="text-4xl font-raleway font-bold text-slate-900 mb-2">20ml+</div>
              <div className="text-[#4041d1] font-bold text-xl mb-6">From £1,850</div>
              <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
                For men seeking greater volume in a single session, or for those returning for further enhancement.
              </p>
              <button 
                onClick={handleAction}
                className="w-full py-3 bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-xl font-bold transition-colors text-sm shadow-lg shadow-[#4041d1]/20"
              >
                Discuss 20ml+ Option
              </button>
            </div>
      
          </div>
      
          <p className="text-sm text-slate-500 italic max-w-2xl mx-auto">
            * Prices shown are indicative. Depending on your anatomy and treatment goals, Dr Abdi may recommend a different volume. All costs will be confirmed with you in writing before any procedure takes place.
          </p>
      
        </div>
      </section>
      
      {/* --- FAQs --- */}
      <section id="faqs" className="py-24 bg-slate-50 font-inter border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-raleway font-bold text-slate-900 mb-6">
              Common Questions
            </h2>
          </div>
          <div className="space-y-4">
            {displayedFaqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="w-full">
                  <button
                    className="w-full p-6 md:p-8 text-left flex items-center justify-between hover:bg-slate-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#4041d1] focus:ring-inset"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={openFAQIndex === index}
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
      <PEOnlineAssessmentModal 
        isOpen={isAssessmentOpen} 
        onClose={() => setIsAssessmentOpen(false)} 
      />
    </>
  );
}
