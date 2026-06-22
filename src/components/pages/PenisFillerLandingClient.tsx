"use client";

import { useEffect, useState, useRef } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import {
  FaCheckCircle,
  FaStar,
  FaLock,
  FaStethoscope,
  FaUserShield,
  FaUserMd,
  FaFileAlt,
  FaChevronLeft,
  FaChevronRight,
  FaLayerGroup,
  FaBriefcaseMedical,
} from "react-icons/fa";
import LocationSection from "@/components/LocationSection";
import TrustReviews from "@/components/TrustReviews";
import InstaLeadForm from "@/components/InstaLeadForm";

type FaqType = {
  question: string;
  answer: string;
};

interface PenisFillerProps {
  locationName?: string;
  servingAreas?: string;
  heroDescription?: React.ReactNode; 
  whyChooseText?: string;
  faqs?: FaqType[]; 
}

// --- STATIC DATA & CONFIG ---
const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: "easeOut" },
  }),
};

// --- NEW MOBILE SLIDER CARDS FOR PENIS FILLER ---
const mobileTreatmentCards = [
  {
    title: "Increased Girth",
    text: "Hyaluronic acid dermal fillers are placed safely to add targeted volume, enhancing overall girth and proportions.",
    icon: FaLayerGroup,
  },
  {
    title: "Non-Surgical Procedure",
    text: "A minimally invasive alternative to surgery. Walk in and walk out with no planned structural downtime.",
    icon: FaCheckCircle,
  },
  {
    title: "Doctor-Led Assessment",
    text: "Every procedure is performed explicitly by Dr Abdi, ensuring individual anatomy and safety benchmarks are met.",
    icon: FaUserMd,
  },
  {
    title: "Hyaluronic Acid Filler",
    text: "Utilising premium, medical-grade HA dermal fillers that naturally integrate with tissue and can be dissolved if clinically required.",
    icon: FaBriefcaseMedical,
  },
  {
    title: "Confidential Clinic",
    text: "All consultations, assessments, and follow-ups are conducted in a strictly private, professional environment.",
    icon: FaLock,
  },
];

const symptoms = [
  {
    title: "Wanting Increased Girth",
    description: "Seeking a noticeable, natural-feeling optimization in volume and thickness.",
    icon: FaLayerGroup,
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    title: "Reduced Confidence",
    description: "Addressing self-consciousness or anxiety related to personal intimate appearance.",
    icon: FaUserShield,
    color: "bg-amber-50 text-amber-600",
  },
  {
    title: "Desire for Better Proportions",
    description: "Balancing overall visual symmetry and alignment safely without surgical intervention.",
    icon: FaStar,
    color: "bg-rose-50 text-rose-600",
  },
  {
    title: "Looking for a Non-Surgical Option",
    description: "Avoiding the significant risks, incisions, and lengthy downtimes associated with surgical implants.",
    icon: FaCheckCircle,
    color: "bg-teal-50 text-teal-600",
  },
  {
    title: "Considering a Top-Up or Revision",
    description: "Refining or building upon a previous treatment safely with a certified medical provider.",
    icon: FaBriefcaseMedical,
    color: "bg-blue-50 text-[#4041d1]",
  },
];

const quickSteps = [
  {
    title: "Confidential Consultation",
    description: "Discuss your aesthetic alignment goals, anatomical baseline, and medical health parameters in absolute privacy.",
    icon: FaFileAlt,
  },
  {
    title: "Medical Assessment & Expectations",
    description: "Dr Abdi checks your physical suitability, reviews the details of the procedure, and maps out safe, realistic outcomes.",
    icon: FaUserMd,
  },
  {
    title: "Personalised Treatment & Aftercare",
    description: "If suitable, the premium filler is placed with precision, followed by a clear, tailored clinical recovery protocol.",
    icon: FaCheckCircle,
  },
];

export default function PenisFillerLandingClient({
  locationName = "Birmingham",
  servingAreas = "Edgbaston • Solihull • Sutton Coldfield • West Midlands",
  heroDescription = <>Doctor-led non-surgical girth enhancement using hyaluronic acid filler.</>, 
  whyChooseText = "Patients choose our clinic for discreet, highly professional, doctor-led intimate aesthetic care and a structured approach to clinical assessment.",
  faqs = [], 
}: PenisFillerProps) {
  
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [showStickyBar, setShowStickyBar] = useState(false);
  
  const sliderRef = useRef<HTMLDivElement>(null);

  const isBirmingham = locationName === "Birmingham";

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoaded(true);

    // Track scroll to show sticky bar on mobile
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowStickyBar(true);
      } else {
        setShowStickyBar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // NEW: Ultimate Global Interceptor (Catches Mobile & Desktop)
  useEffect(() => {
    // 1. Function to cleanly scroll to the form
    const scrollToForm = () => {
      const formElement = document.getElementById("insta-lead-form");
      if (formElement) {
        const yOffset = -40; // 40px gap
        const y = formElement.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    };

    // 2. Catch the custom React event (often used by desktop navigations)
    const handleGlobalContactEvent = (e: Event) => {
      e.stopPropagation();
      scrollToForm();
    };

    // 3. Aggressively catch physical clicks on ANY global button
    const hijackGlobalClicks = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const clickable = target.closest("button, a");
      
      if (clickable) {
        const text = clickable.textContent?.toLowerCase() || "";
        const href = clickable.getAttribute("href") || "";
        
        // Broaden the net: Catch any button text that implies booking/contacting
        const isContactAction = 
          text.includes("book") || 
          text.includes("consult") || 
          text.includes("contact") ||
          href.includes("#contact-form-section") ||
          href.includes("/contact");
        
        if (isContactAction) {
          e.preventDefault();
          e.stopPropagation(); 
          scrollToForm();
        }
      }
    };

    // Attach BOTH listeners in the "capture" phase (true) to intercept them early
    window.addEventListener("open-contact-drawer", handleGlobalContactEvent, true);
    window.addEventListener("click", hijackGlobalClicks, true);
    
    // Cleanup when the user leaves the page
    return () => {
      window.removeEventListener("open-contact-drawer", handleGlobalContactEvent, true);
      window.removeEventListener("click", hijackGlobalClicks, true);
    };
  }, []);
  
  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -296, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 296, behavior: "smooth" });
    }
  };

  const handleAction = (e: React.MouseEvent) => {
    e.preventDefault();

    if (typeof window !== "undefined") {
      const w = window as Window & { gtag?: (...args: unknown[]) => void };
      if (w.gtag) {
        w.gtag("event", "contact_initiated", { 
          event_category: "engagement",
          event_label: "clicked_book_filler_consultation",
          page_path: window.location.pathname,
        });
      }
    }

    // Scroll to the cleanly separated form section
    const formElement = document.getElementById("insta-lead-form");
    if (formElement) {
      const yOffset = -40; // 40px gap above the form for a clean frame
      const y = formElement.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  
  return (
    <>
      {/* --- CSS OVERRIDES --- */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* Hide global header */
        header, nav, .header, .navbar, #header { display: none !important; }
        
        /* Hide global floating buttons to prevent overlap with sticky actions */
        .floating-whatsapp, .whatsapp-float, #whatsapp-button, .floating-contact { display: none !important; }
        
        /* Safe padding for iOS devices */
        .pb-safe { padding-bottom: max(12px, env(safe-area-inset-bottom)); }

        /* Hide scrollbar for mobile slider */
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

      {/* --- STICKY MOBILE CTA BAR --- */}
      <AnimatePresence>
        {showStickyBar && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-0 left-0 w-full z-[100] sm:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 p-3 shadow-[0_-10px_20px_rgba(0,0,0,0.1)] pb-safe"
          >
            <button
              onClick={handleAction}
              className="w-full bg-[#4041d1] hover:bg-[#2a2bb8] text-white font-bold font-inter py-4 rounded-xl shadow-lg active:scale-95 transition-all text-sm"
            >
              Request Callback
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- HERO SECTION --- */}
      <div className="relative overflow-hidden flex flex-col items-center justify-center bg-[#0A1128] pt-12 pb-10 md:pt-20 md:pb-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1e293b] via-[#0A1128] to-black" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[600px] bg-[radial-gradient(ellipse_at_center,_rgba(64,65,209,0.25)_0%,_transparent_70%)] pointer-events-none" />
        </div>
        
        <div className="relative z-20 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border border-white/20 rounded-full bg-[#1e293b]/50 backdrop-blur-md shadow-lg">
            <FaStethoscope className="text-blue-400 w-3 h-3" />
            <span className="text-blue-100 text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase font-inter">Led By Dr Abdi</span>
          </div>

          <h1 className="md:text-5xl lg:text-6xl text-4xl font-bold font-raleway text-white leading-tight mb-5 tracking-tight drop-shadow-lg">
            Penis Filler Consultation in {locationName}
          </h1>
          
          <p className="text-sm md:text-base text-white/90 font-inter leading-relaxed max-w-2xl mx-auto mb-5 drop-shadow-md">
            {heroDescription}
          </p>

          {/* HIGH CONVERTING QUICK SCAN PILLS */}
          <motion.div 
            custom={0} initial="hidden" animate="visible" variants={fadeUpVariants}
            className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto mb-8"
          >
            {["Girth Enhancement", "Improved Proportions", "HA Dermal Fillers", "Doctor-Led Care"].map((pill, idx) => (
              <div key={idx} className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
                <FaCheckCircle className="text-blue-400 w-3 h-3 shrink-0" />
                <span className="text-white text-[11px] md:text-xs font-semibold tracking-wide font-inter">{pill}</span>
              </div>
            ))}
          </motion.div>

          <p className="text-[11px] md:text-xs text-blue-200 font-inter max-w-2xl mx-auto mb-8 font-semibold tracking-wide">
            Face-to-face private care with Dr Syed Abdi, GMC-registered doctor. No GP referral needed. Private treatment fees apply.
          </p>

          <motion.div 
            custom={1} initial="hidden" animate="visible" variants={fadeUpVariants}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-xl mx-auto"
          >
            <button 
              onClick={handleAction}
              className="px-8 py-4 w-full sm:w-auto flex items-center justify-center text-sm cursor-pointer bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-xl font-bold transition-all duration-300 gap-2 shadow-[0_0_20px_rgba(64,65,209,0.3)] hover:shadow-[0_0_25px_rgba(64,65,209,0.5)] active:scale-95 font-inter"
            >
              Book Confidential Consultation
            </button>
            <button 
              onClick={handleAction}
              className="px-8 py-3.5 w-full sm:w-auto flex items-center justify-center text-sm cursor-pointer bg-white/10 border border-white/20 text-white hover:bg-white hover:text-[#4041d1] rounded-xl font-bold transition-all duration-300 gap-2 active:scale-95 font-inter"
            >
              Ask About Suitability
            </button>
          </motion.div>

          <motion.p 
            custom={2} initial="hidden" animate="visible" variants={fadeUpVariants}
            className="mt-4 text-[11px] md:text-xs text-slate-400 font-inter max-w-sm mx-auto"
          >
            Free initial discussion available. Private treatment fees apply if you proceed.
          </motion.p>
        </div>

        {/* --- MOBILE TREATMENT SLIDER (Perfect Centering & Floating Arrows) --- */}
        <div className="relative z-20 w-full mt-12 overflow-hidden">
          <div className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
             <h3 className="text-white font-raleway font-bold text-lg md:text-xl">Treatment parameters may include</h3>
             <p className="text-slate-400 text-[11px] md:text-xs font-inter mt-1">Suitability is checked thoroughly before any procedure plan is recommended.</p>
          </div>

          <div className="relative max-w-5xl mx-auto w-full">
             {/* Left Overlay Arrow */}
             <button 
               onClick={scrollLeft} 
               className="absolute left-2 top-[calc(50%-16px)] -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-slate-800/90 border border-slate-600 flex items-center justify-center text-white shadow-xl hover:bg-slate-700 hover:scale-105 transition-all backdrop-blur-md"
               aria-label="Scroll left"
             >
               <FaChevronLeft className="w-3.5 h-3.5 -ml-0.5" />
             </button>

             {/* Center-Aligned Carousel Track */}
             <div 
               ref={sliderRef}
               className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 gap-4 w-full px-[calc(50vw-140px)] md:px-[calc(50%-140px)]"
             >
               {mobileTreatmentCards.map((card, idx) => (
                 <div 
                   key={idx} 
                   className="snap-center shrink-0 w-[280px] bg-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 shadow-xl flex flex-col"
                 >
                   <div className="w-10 h-10 rounded-xl bg-blue-900/50 flex items-center justify-center mb-4">
                     <card.icon className="w-5 h-5 text-blue-400" />
                   </div>
                   <h4 className="text-white font-bold font-raleway text-[15px] mb-2">{card.title}</h4>
                   <p className="text-slate-400 text-xs font-inter leading-relaxed">{card.text}</p>
                 </div>
               ))}
             </div>

             {/* Right Overlay Arrow */}
             <button 
               onClick={scrollRight} 
               className="absolute right-2 top-[calc(50%-16px)] -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-slate-800/90 border border-slate-600 flex items-center justify-center text-white shadow-xl hover:bg-slate-700 hover:scale-105 transition-all backdrop-blur-md"
               aria-label="Scroll right"
             >
               <FaChevronRight className="w-3.5 h-3.5 -mr-0.5" />
             </button>
          </div>
        </div>
      </div>

       {/* --- DOCTOR-LED TRUST SECTION --- */}
      <section className="py-20 bg-white font-inter border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="shrink-0 relative">
              <img
                src="/dr-syed-abdi.webp"
                alt="Dr Syed Abdi, GMC-registered doctor at Healing-PRP Clinics"
                className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover shadow-md mx-auto md:mx-0 border-4 border-white"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-raleway font-bold text-slate-900 mb-4">
                Treatment With Dr Syed Abdi
              </h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                Your evaluation, treatment planning, and procedure are carried out exclusively by Dr Syed Abdi, a GMC-registered doctor experienced in male intimate health and advanced hyaluronic acid filler treatments. The environment is entirely discreet, private, and oriented around mapping out safe outcomes, evaluating baseline suitability, and prioritizing clinical care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- TREATMENT OVERVIEW SECTION --- */}
      <section className="py-16 bg-slate-50 font-inter border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#4041d1] font-bold tracking-widest text-xs uppercase mb-3 block">Procedure Overview</span>
          <h3 className="text-3xl font-raleway font-bold text-slate-900 mb-6">
            Clinical Girth Optimization
          </h3>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            Penis filler treatment utilizes cross-linked hyaluronic acid dermal fillers to strategically add safe volume to the penile shaft, increasing girth and improving symmetry. Treatment is performed uniquely following an in-depth clinical consultation to meticulously review individual eligibility, targeted expectations, potential risks, and aftercare protocols.
          </p>
        </div>
      </section>

      {/* --- WHAT THIS TREATMENT MAY HELP WITH --- */}
      <section className="py-16 bg-white font-inter border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-4">Who Is This Suitable For?</h2>
            <p className="text-slate-600 text-base">
              A private doctor-led assessment can clarify eligibility for men experiencing:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
            {symptoms.map((symptom, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col h-full group ${index === 4 ? "lg:col-start-2" : ""}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-xl ${symptom.color} flex items-center justify-center text-lg shrink-0`}><symptom.icon /></div>
                  <h3 className="text-lg font-raleway font-bold text-slate-900 group-hover:text-[#4041d1] transition-colors">{symptom.title}</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{symptom.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION: HOW THE PROCESS WORKS --- */}
      <section className="py-16 bg-slate-50 font-inter border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-4">How the Process Works</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickSteps.map((step, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative group hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center mb-4 text-[#4041d1] text-lg shadow-sm">
                  <step.icon />
                </div>
                <h3 className="text-lg font-bold mb-2 font-raleway">Step {idx + 1}: {step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SAFETY AND REALISTIC EXPECTATIONS SECTION --- */}
      <section className="py-16 bg-white font-inter border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-raleway font-bold text-slate-900 mb-6">Safety & Realistic Expectations</h2>
          <div className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-200 text-left max-w-3xl mx-auto">
            <ul className="space-y-4 text-slate-700 text-sm md:text-base leading-relaxed">
              <li className="flex items-start gap-2.5">
                <FaCheckCircle className="text-[#4041d1] w-4 h-4 mt-1 shrink-0" />
                <span>Aesthetic results and volume preservation vary naturally between individuals.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <FaCheckCircle className="text-[#4041d1] w-4 h-4 mt-1 shrink-0" />
                <span>Not all individuals are anatomically or medically suitable for dermal filler placement.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <FaCheckCircle className="text-[#4041d1] w-4 h-4 mt-1 shrink-0" />
                <span>All associated risks, potential limitations, and specific aftercare protocols are reviewed entirely prior to treatment.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <FaCheckCircle className="text-[#4041d1] w-4 h-4 mt-1 shrink-0" />
                <span>Hyaluronic acid is a reversible compound that can typically be dissolved with hyaluronidase if clinically required.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <FaCheckCircle className="text-[#4041d1] w-4 h-4 mt-1 shrink-0" />
                <span>There are no guaranteed size increases, absolute metrics, or permanent geometric assumptions.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

    {/* --- INSTAGRAM OPTIMIZED LEAD FORM SECTION --- */}
      {/* Placed ABOVE the dynamic iframe so scroll calculations are 100% accurate */}
      <section className="pt-16 pb-16 bg-slate-50 border-t border-slate-200 relative z-10 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <InstaLeadForm campaignName="Penis Filler / Girth Enhancement" />
        </div>
      </section>

      {/* --- REVIEWS SECTION --- */}
      {/* Moved below the form. The sticky bar will comfortably float over this as they read */}
      <section id="reviews-section" className="py-16 bg-white border-t border-slate-200 relative z-0 pb-32">
        <div className="max-w-5xl mx-auto px-4 text-center mb-10">
           <h2 className="text-2xl md:text-3xl font-raleway font-bold text-slate-900">
             Patient Experiences
           </h2>
           <p className="text-slate-500 text-sm mt-2 font-inter">
             Verified independent reviews from our clinical patients.
           </p>
        </div>
        <div className="max-w-7xl mx-auto">
          <TrustReviews widgetUrl={isBirmingham ? "https://cdn.trustindex.io/loader.js?e2cf4a365239367f2a3607c0513" : "https://cdn.trustindex.io/loader.js?eb147a565c3c36945f26281e586"} />
        </div>
      </section>

      <LocationSection /> 
      
      {/* --- MINIMAL AD FOOTER --- */}
      <footer className="bg-[#0A1128] pt-8 pb-32 md:pb-12 border-t border-white/10 text-center relative z-0">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-slate-400 text-sm font-inter">
            &copy; {new Date().getFullYear()} Healing-PRP Clinics. All rights reserved.
          </p>
          <div className="flex justify-center gap-4 mt-4 text-xs text-slate-500 font-inter">
            <button onClick={() => setIsPrivacyModalOpen(true)} className="hover:text-white transition-colors cursor-pointer">Privacy Policy</button>
            <span>|</span>
            <button onClick={() => setIsTermsModalOpen(true)} className="hover:text-white transition-colors cursor-pointer">Terms & Conditions</button>
          </div>
        </div>
      </footer>

      {/* --- MODALS --- */}
      {isPrivacyModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={() => setIsPrivacyModalOpen(false)}>
          <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[80vh] flex flex-col relative shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="p-4 md:p-6 border-b flex justify-between items-center sticky top-0 bg-white rounded-t-2xl z-10">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-raleway">Privacy Policy</h2>
              <button onClick={() => setIsPrivacyModalOpen(false)} className="text-slate-400 hover:text-red-500 transition-colors font-bold text-2xl px-2">✕</button>
            </div>
            <div className="p-4 md:p-6 overflow-y-auto text-slate-600 space-y-4 font-inter text-sm leading-relaxed">
              <div className="space-y-4">
                <p><strong>Last updated:</strong> 29 April 2026</p>
                <p>This Privacy Policy explains how AKY Medical Ltd (trading as Healing PRP Clinics) collects, uses, and protects your personal information across our website (healing-prp.co.uk) and clinics.</p>
                <h3 className="font-bold text-slate-800 mt-4">1. Information We Collect</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Contact Details:</strong> Name, DOB, email, phone, address, and GP details.</li>
                  <li><strong>Medical Information:</strong> Medical history, medications, allergies, treatment records, and clinical photographs. Intimate health data is treated as highly sensitive.</li>
                </ul>
                <h3 className="font-bold text-slate-800 mt-4">2. How & Why We Use Your Data</h3>
                <p>We process your data to respond to enquiries, provide safe healthcare and treatments, manage bookings, and meet our legal and regulatory obligations.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {isTermsModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={() => setIsTermsModalOpen(false)}>
          <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[80vh] flex flex-col relative shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="p-4 md:p-6 border-b flex justify-between items-center sticky top-0 bg-white rounded-t-2xl z-10">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-raleway">Booking Terms & Conditions</h2>
              <button onClick={() => setIsTermsModalOpen(false)} className="text-slate-400 hover:text-red-500 transition-colors font-bold text-2xl px-2">✕</button>
            </div>
            <div className="p-4 md:p-6 overflow-y-auto text-slate-600 space-y-4 font-inter text-sm leading-relaxed">
              <div className="space-y-4">
                <p><strong>Last updated:</strong> 29 April 2026</p>
                <p>By booking an appointment, submitting an enquiry, or proceeding with treatment at Healing PRP Clinics, you agree to the following terms.</p>
                <h3 className="font-bold text-slate-800 mt-4">1. Medical Disclaimer & Eligibility</h3>
                <p>Website information does not replace personalised medical advice. You must be at least 18 years old and provide accurate, complete medical history.</p>
                <h3 className="font-bold text-slate-800 mt-4">2. Consultations & Outcomes</h3>
                <p>All treatments are subject to a doctor-led assessment. &quot;Free consultations&quot; refer to an initial screening and do not include diagnostic tests, treatments, or extended medical reviews.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
