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
  FaTint,
  FaShieldAlt,
  FaArrowRight,
  FaRegClock,
  FaMicroscope,
  FaVial,
  FaGoogle,
  FaStar,
  FaLock,
  FaChevronDown,
  FaInfoCircle,
  FaHeartbeat
} from "react-icons/fa";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/ContactCTASection";
import LocationSection from "@/components/LocationSection";
import TrustReviews from "@/components/TrustReviews";

// --- INTERFACE FOR DYNAMIC PROPS ---
type FaqType = {
  question: string;
  answer: string;
};

interface VaginalDrynessProps {
  locationName?: string;
  servingAreas?: string;
  faqs: FaqType[];
}

export default function VaginalDrynessClient({
  locationName = "St Albans",
  servingAreas = "Harpenden • Luton • Watford • Hertfordshire",
  faqs,
}: VaginalDrynessProps) {
  
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);
  const [activeLevel, setActiveLevel] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const isBirmingham = locationName === "Birmingham";

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

  // --- VARIANTS ---
  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i * 0.15, ease: "easeOut" },
    }),
  };

  // --- DATA: TREATMENT LEVELS ---
  const treatmentLevels = [
    {
      title: "Level 1: Rapid Hydration",
      subtitle: "Pure Non-Crosslinked HA",
      description: "A medical-grade hydration 'boost' for the intimate area. Pure Hyaluronic Acid (HA) is injected to bind water directly into the tissue layers.",
      bestFor: "Acute dryness, daily friction, and immediate comfort.",
      icon: FaTint,
      color: "bg-blue-50 text-blue-600",
      link: "/vaginal-ha"
    },
    {
      title: "Level 2: The Regenerative Hybrid",
      subtitle: "HA + Polynucleotides",
      description: "Our advanced protocol. While HA provides moisture, DNA-derived Polynucleotides trigger cellular repair and tissue thickening.",
      bestFor: "Significant tissue thinning (atrophy) and long-term structural health.",
      icon: FaDna,
      color: "bg-indigo-50 text-indigo-600",
      link: "/vaginal-ha" // Pointing to the HA/PN detail page
    },
    {
      title: "Level 3: Biological Function",
      subtitle: "The O-Shot (PRP)",
      description: "Uses your own growth factors to stimulate blood flow and sensation. Often combined with hydration levels for comprehensive wellness.",
      bestFor: "Reduced sensitivity, sexual wellness, and mild urinary incontinence.",
      icon: FaHeartbeat,
      color: "bg-rose-50 text-rose-600",
      link: "/o-shot"
    }
  ];

  const displayedFaqs = showAllFaqs ? faqs : faqs.slice(0, 5);

  return (
    <>
      {/* --- HERO SECTION --- */}
      <div className="relative min-h-[100vh] md:min-h-[calc(100vh-4rem)] overflow-hidden flex items-center justify-center bg-black">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" /> 
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80 z-10" />
          <img 
            src="/vaginal-dryness-treatment.webp" 
            alt="Intimate wellness consultation for vaginal dryness" 
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => (e.currentTarget.src = "/o-shot-consultation.webp")}
          />
        </div>

        <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 pb-48 md:pb-24">
          <motion.div 
            custom={0} initial="hidden" animate={isLoaded ? "visible" : "hidden"} variants={fadeUpVariants}
            className="inline-block px-4 py-1.5 mb-4 border border-blue-400/30 rounded-full bg-blue-900/20 backdrop-blur-sm transform-gpu"
          >
            <span className="text-blue-200 text-xs font-bold tracking-widest uppercase font-inter">Private • Doctor-Led • Confidential</span>
          </motion.div>

          <motion.h1
            custom={1} initial="hidden" animate="visible" variants={fadeUpVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-raleway text-white leading-tight mb-4 tracking-tight"
          >
            Vaginal Dryness Treatment <br />
            <span className="text-xl md:text-3xl lg:text-4xl text-blue-100 mt-2 inline-block">in {locationName}</span>
          </motion.h1>
          
          <motion.p 
            custom={2} initial="hidden" animate={isLoaded ? "visible" : "hidden"} variants={fadeUpVariants}
            className="mt-2 text-base md:text-xl text-blue-50/90 font-inter leading-relaxed max-w-2xl mx-auto mb-8 font-medium"
          >
            Advanced, non-hormonal injectable options to restore natural hydration, tissue suppleness, and intimate comfort using Hyaluronic Acid, Polynucleotides, and PRP.
          </motion.p>

          <motion.div 
            custom={3} initial="hidden" animate={isLoaded ? "visible" : "hidden"} variants={fadeUpVariants}
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
            custom={4} initial="hidden" animate={isLoaded ? "visible" : "hidden"} variants={fadeUpVariants}
            className="inline-flex items-center justify-center gap-2 px-6 py-2 bg-[#4041d1]/10 text-white rounded-full text-[10px] md:text-xs mt-8 font-bold uppercase tracking-widest font-inter shadow-lg border border-white/10 backdrop-blur-sm"
          >
             <FaMapMarkerAlt className="text-white/80 mb-0.5" /> 
             <span>Serving: {servingAreas}</span>
          </motion.div>
        </div>

        {/* --- HERO TRUST BADGES --- */}
        <div className={`absolute bottom-0 left-0 w-full z-30 bg-[#0A1128]/95 backdrop-blur-xl border-t border-white/10 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="px-2 py-4 max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-2">
              <div className="flex justify-center items-center px-2">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#4285F4] shadow-md">
                    <FaGoogle className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col items-start">
                    <div className="flex text-amber-400 text-[10px] mb-0.5"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                    <span className="text-white text-[9px] font-bold tracking-widest uppercase opacity-90 font-inter">5.0 Patient Rating</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center px-2 border-l border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-[#4041d1] rounded-full flex items-center justify-center text-white font-bold text-[12px] shadow-md">GMC</div>
                  <div className="flex flex-col items-start">
                    <span className="text-white text-[9px] font-bold uppercase tracking-widest font-inter">Registered</span>
                    <span className="text-blue-400 text-[9px] font-semibold tracking-wider uppercase font-inter">Doctor</span>
                  </div>
                </div>
              </div>
              {/* Add more badges as per O-Shot client style... */}
            </div>
          </div>
        </div>
      </div>

      {/* --- SECTION: UNDERSTANDING GSM --- */}
      <section className="py-24 bg-white font-inter">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-6">
              When Topicals Are Not Enough
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Vaginal dryness (often part of Genitourinary Syndrome of Menopause) is caused by tissue thinning and reduced blood flow. While lubricants provide temporary relief, our injectable treatments target the <strong>deeper tissue layers</strong> to restore moisture from the inside out.
            </p>
          </div>
          
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 flex flex-col md:flex-row items-center gap-8">
            <div className="w-16 h-16 bg-[#4041d1]/10 rounded-2xl flex items-center justify-center text-[#4041d1] shrink-0">
              <FaInfoCircle className="text-3xl" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-raleway text-slate-900 mb-2">A Medical-First Approach</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Vaginal dryness isn't always caused by menopause. Infection, skin conditions, and irritation must be ruled out. Every patient at our clinic undergoes a 1:1 medical assessment with <strong>Dr Syed Abdi</strong> to ensure a safe and effective plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION: TREATMENT LEVELS --- */}
      <section className="py-24 bg-slate-50 font-inter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1.5 bg-[#4041d1]/10 text-[#4041d1] rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              Our Hydration Menu
            </div>
            <h2 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-6">
              The "Good, Better, Best" of Intimate Rehydration
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {treatmentLevels.map((level, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 flex flex-col h-full"
              >
                <div className={`w-14 h-14 rounded-2xl ${level.color} flex items-center justify-center mb-6 text-2xl`}>
                  <level.icon />
                </div>
                <h3 className="text-lg font-raleway font-bold text-slate-400 mb-1">{level.title}</h3>
                <h4 className="text-xl font-raleway font-bold text-slate-900 mb-4">{level.subtitle}</h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">{level.description}</p>
                <div className="mb-8 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-2">Best For:</p>
                  <p className="text-xs font-bold text-slate-700">{level.bestFor}</p>
                </div>
                <Link 
                  href={level.link}
                  className="w-full py-3 bg-[#4041d1]/5 text-[#4041d1] rounded-xl text-center text-sm font-bold hover:bg-[#4041d1] hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Learn More <FaArrowRight className="text-xs" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- QUICK FACTS GRID (Downtime/Healing) --- */}
      <section className="py-20 bg-[#0A1128] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-raleway font-bold mb-4">Treatment Timeline</h2>
            <p className="text-slate-400">What to expect during and after your procedure.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 text-center">
              <FaRegClock className="text-[#4041d1] text-2xl mx-auto mb-3" />
              <div className="text-xs uppercase tracking-widest font-bold text-slate-500 mb-1">Procedure</div>
              <div className="text-sm font-bold">30–45 Mins</div>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 text-center">
              <FaShieldAlt className="text-[#4041d1] text-2xl mx-auto mb-3" />
              <div className="text-xs uppercase tracking-widest font-bold text-slate-500 mb-1">Comfort</div>
              <div className="text-sm font-bold">Local Numbing</div>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 text-center">
              <FaCheckCircle className="text-[#4041d1] text-2xl mx-auto mb-3" />
              <div className="text-xs uppercase tracking-widest font-bold text-slate-500 mb-1">Immediate Effect</div>
              <div className="text-sm font-bold">HA Hydration (Days)</div>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 text-center">
              <FaMicroscope className="text-[#4041d1] text-2xl mx-auto mb-3" />
              <div className="text-xs uppercase tracking-widest font-bold text-slate-500 mb-1">Repair Effect</div>
              <div className="text-sm font-bold">PN/PRP (Weeks)</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQs --- */}
      <section id="faqs" className="py-24 bg-white font-inter">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-raleway font-bold text-slate-900 mb-6">Common Questions</h2>
          </div>
          <div className="space-y-4">
            {displayedFaqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-50"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="font-raleway font-bold text-slate-900 text-base md:text-lg">{faq.question}</h3>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${openFAQIndex === index ? 'bg-[#4041d1] text-white' : 'bg-[#4041d1]/10 text-[#4041d1]'}`}>
                    {openFAQIndex === index ? <FaMinus size={12} /> : <FaPlus size={12} />}
                  </div>
                </button>
                <AnimatePresence>
                  {openFAQIndex === index && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <div className="px-6 pb-6 pt-2 text-slate-600 text-sm leading-relaxed border-t border-slate-50">{faq.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          {faqs.length > 5 && (
            <div className="mt-8 text-center">
              <button onClick={() => setShowAllFaqs(!showAllFaqs)} className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#4041d1] text-[#4041d1] rounded-xl font-bold">
                {showAllFaqs ? "Show Less" : "View All"} <FaChevronDown className={showAllFaqs ? "rotate-180" : ""} />
              </button>
            </div>
          )}
        </div>
      </section>

      <TrustReviews 
        widgetUrl={isBirmingham ? "https://cdn.trustindex.io/loader.js?e2cf4a365239367f2a3607c0513" : "https://cdn.trustindex.io/loader.js?eb147a565c3c36945f26281e586"} 
      />
      <ContactCTASection />
      <LocationSection />
      <Footer />
    </>
  );
}
