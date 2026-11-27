"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import dynamic from "next/dynamic";
import {
  FaPlus,
  FaMinus,
  FaBatteryQuarter,
  FaHourglassEnd,
  FaPills,
  FaWaveSquare,
  FaSyringe,
  FaDna,
  FaCheckCircle,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
  FaGoogle,
  FaStar,
  FaLock,
  FaStethoscope,
  FaUserShield,
  FaVial,
  FaUserMd,
  FaFileAlt,
  FaTint,
  FaHeartbeat,
  FaClipboardList,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import LocationSection from "@/components/LocationSection";
import GoogleAdsLeadForm from "@/components/GoogleAdsLeadForm";
import TrustReviews from "@/components/TrustReviews";
import EDLandingStickyCTAs from "@/components/EDLandingStickyCTAs";

// --- LAZY LOADED COMPONENTS ---
const OnlineAssessmentModal = dynamic(() => import('@/components/OnlineAssessmentModal'), { ssr: false });

type FaqType = {
  question: string;
  answer: string;
};

interface ErectileDysfunctionProps {
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

// --- NEW MOBILE SLIDER CARDS ---
const mobileTreatmentCards = [
  {
    title: "Shockwave Therapy",
    text: "A non-surgical option for selected men with erection difficulties, reduced firmness or suspected blood-flow-related ED.",
    icon: FaWaveSquare,
  },
  {
    title: "Advanced ED Treatment Options",
    text: "Additional treatment options may be discussed where suitable after doctor-led assessment, depending on your symptoms, medical history and treatment goals.",
    icon: FaSyringe,
  },
  {
    title: "Vascular Review / Doppler",
    text: "Where clinically appropriate, penile blood-flow assessment or Doppler ultrasound may be discussed or arranged to help identify vascular causes of ED.",
    icon: FaHeartbeat,
  },
  {
    title: "Blood & Hormone Review",
    text: "Checks may include diabetes, cholesterol, testosterone and other contributing factors where clinically appropriate.",
    icon: FaDna,
  },
  {
    title: "Medication Review",
    text: "Current medication, health conditions and previous treatment response are reviewed as part of your assessment.",
    icon: FaClipboardList,
  },
];

const treatmentOptions = [
  { 
    icon: FaWaveSquare, 
    title: "Shockwave Therapy", 
    description: "Low-intensity acoustic wave therapy that may support penile blood flow in selected patients.",
    tags: ["Usually well tolerated", "~30 min sessions", "No planned downtime"] 
  },
  { 
    icon: FaSyringe, 
    title: "Advanced ED Treatment Options", 
    description: "Additional treatment options may be discussed where suitable after doctor-led assessment, depending on your symptoms, medical history and treatment goals.",
    tags: ["Minimal discomfort", "Takes ~30 mins", "No planned downtime"]
  },
  { 
    icon: FaTint, 
    title: "Vascular Assessment", 
    description: "Vascular-focused assessment, with penile Doppler ultrasound discussed or arranged where clinically appropriate.",
    tags: ["Non-invasive", "Assessment", "Direct insights"]
  },
  { 
    icon: FaDna, 
    title: "Hormone & Blood Review", 
    description: "Assessment of testosterone, diabetes, cardiovascular risk, and metabolic health where appropriate.",
    tags: ["Quick blood draw", "Fast lab results", "Targeted analysis"]
  },
];
  
const quickSteps = [
  {
    title: "Confidential Assessment",
    description: "Tell us about your symptoms, medical history, and previous treatments in a private setting.",
    icon: FaFileAlt,
  },
  {
    title: "Doctor-Led Consultation",
    description: "We review possible causes and discuss suitable treatment options.",
    icon: FaUserMd,
  },
  {
    title: "Tailored Treatment Plan",
    description: "This may include shockwave therapy, advanced treatments, or a combined approach depending on suitability.",
    icon: FaCheckCircle,
  },
];

const symptoms = [
  {
    title: "Difficulty Getting or Maintaining",
    description: "Struggling to achieve or keep an erection during intimacy.",
    icon: FaBatteryQuarter,
    color: "bg-rose-50 text-rose-600",
  },
  {
    title: "Reduced Firmness",
    description: "Experiencing less firmness compared with your previous baseline.",
    icon: FaHourglassEnd,
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    title: "Less Reliable Response",
    description: "Finding that previous treatments or tablets are no longer as effective.",
    icon: FaPills,
    color: "bg-[#f0f0ff] text-[#4041d1]",
  },
  {
    title: "Concerns About Side Effects",
    description: "Dissatisfaction with current options due to headaches, flushing, or other effects.",
    icon: FaVial,
    color: "bg-teal-50 text-teal-600",
  },
  {
    title: "Reduced Confidence",
    description: "The impact of symptoms is affecting your relationships or self-esteem.",
    icon: FaUserShield,
    color: "bg-amber-50 text-amber-600",
  },
];

export default function ErectileDysfunctionTreatmentClient({
  locationName = "Birmingham",
  servingAreas = "Edgbaston • Solihull • Sutton Coldfield • West Midlands",
  heroDescription = <>Private doctor-led assessment for erectile dysfunction, impotence, erection difficulties and reduced firmness.</>, 
  whyChooseText = "Patients choose our clinic for accessible, doctor-led care and a structured approach to erectile dysfunction assessment and treatment.",
  faqs = [], 
}: ErectileDysfunctionProps) {
  
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  
  const sliderRef = useRef<HTMLDivElement>(null);

  const isBirmingham = locationName === "Birmingham";
  const isHampstead = locationName === "Hampstead";

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoaded(true);
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleAction = (e: React.MouseEvent) => {
    e.preventDefault();

    if (typeof window !== "undefined") {
      const w = window as Window & { gtag?: (...args: unknown[]) => void };
      if (w.gtag) {
        w.gtag("event", "contact_initiated", { 
          event_category: "engagement",
          event_label: "clicked_book_consultation",
          page_path: window.location.pathname,
        });
      }
    }

    window.dispatchEvent(new CustomEvent("open-contact-drawer"));

    requestAnimationFrame(() => {
      const section = document.getElementById("contact-form-section");
      const headerOffset = -40; 

      if (section) {
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    });
  };
  
  // A single form instance; placed earlier on the Birmingham Ads page only.
  // Keep the conversion label and submission component unchanged.
  const edLeadForm = (
    <div id="contact-form-section">
      <GoogleAdsLeadForm
        defaultTreatment="Erectile Dysfunction"
        defaultLocation={locationName}
        sourcePage={`${locationName} ED Google Ads Landing Page`}
        conversionLabel="AW-18-mCP"
      />
    </div>
  );

  return (
    <>
      {/* Dedicated sticky buttons for Birmingham ED Ads only */}
      <EDLandingStickyCTAs />
      {/* --- CSS OVERRIDES --- */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* Hide global header */
        header, nav, .header, .navbar, #header { display: none !important; }
        
        /* Hide global floating buttons to prevent overlap with our new sticky bar */
        .floating-whatsapp, .whatsapp-float, #whatsapp-button, .floating-contact { display: none !important; }
        
        /* Safe padding for iOS devices */
        .pb-safe { padding-bottom: max(12px, env(safe-area-inset-bottom)); }

        /* Hide scrollbar for mobile slider */
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

      {/* --- BIRMINGHAM ADS HERO: homepage-inspired, assessment-led --- */}
      {isBirmingham ? (
      <div className="relative overflow-hidden bg-[#0A1128] font-inter text-white">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#161B45] via-[#0A1128] to-[#070D1E]" />
        <div className="pointer-events-none absolute -left-24 top-16 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />

        {/* Small branded top strip; the normal site header is intentionally hidden on Ads pages. */}
        <div className="relative z-10 mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 pt-7 sm:px-8 lg:px-10">
          <div className="flex items-center gap-3">
            <span className="font-raleway text-lg font-bold tracking-tight sm:text-xl">Healing-PRP Clinics</span>
            <span className="rounded-full border border-indigo-400/40 bg-indigo-500/25 px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-indigo-100 sm:text-[10px]">
              Birmingham clinic
            </span>
          </div>
          <span className="text-xs font-medium text-indigo-200">Edgbaston Medical Quarter</span>
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-5 pb-12 pt-12 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12 lg:px-10 lg:pb-20 lg:pt-16">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-400/35 bg-indigo-500/10 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-indigo-200 sm:text-xs">
              <FaStethoscope aria-hidden="true" className="shrink-0" />
              Private doctor-led ED assessment
            </div>

            <h1 className="mb-6 font-raleway text-4xl font-bold leading-[1.09] tracking-tight sm:text-5xl lg:text-[3.6rem]">
              Erectile Dysfunction Treatment in{' '}
              <span className="text-[#A5B4FC]">Birmingham</span>
            </h1>

            <p className="mb-3 text-lg font-semibold leading-snug text-white sm:text-xl">
              ED tablets not working as well as before?
            </p>
            <p className="max-w-xl text-sm leading-7 text-slate-200 sm:text-base">
              Struggling with reduced firmness or erections that are less reliable?
              Speak with Dr Syed Abdi, a GMC-registered GP, about possible causes,
              previous treatment response and suitable next steps.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={handleAction}
                className="inline-flex min-h-13 items-center justify-center gap-3 rounded-xl bg-[#4041d1] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-indigo-900/30 transition-colors hover:bg-[#3032b8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Request Confidential Callback
                <FaArrowRight aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => setIsAssessmentOpen(true)}
                className="inline-flex min-h-13 items-center justify-center rounded-xl border border-white/30 bg-white/10 px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Start Free ED Questionnaire
              </button>
            </div>
            <p className="mt-4 max-w-xl text-xs leading-5 text-slate-300">
              No GP referral needed. Free initial discussion available; private medical
              consultation, investigation and treatment fees are explained before booking.
              The questionnaire is not a medical diagnosis.
            </p>

            <div className="mt-7 flex flex-wrap gap-2 text-xs font-semibold text-indigo-100">
              {['GMC-registered GP', 'Face-to-face appointments', 'Confidential care'].map((item) => (
                <span key={item} className="rounded-full border border-indigo-300/30 bg-indigo-500/20 px-3 py-2">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
            <div className="relative aspect-[4/4.7] overflow-hidden rounded-[28px] border border-white/15 bg-slate-800 shadow-2xl shadow-black/40">
              <Image
                src="/dr-syed-abdi.webp"
                alt="Dr Syed Abdi, GMC-registered GP and Medical Director of Healing-PRP Clinics"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 42vw"
                className="object-cover object-top"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-[#0A1128]/95 via-[#0A1128]/30 to-transparent" />
              <div className="absolute inset-x-5 bottom-5 rounded-xl border border-white/20 bg-[#0A1128]/90 px-5 py-4 backdrop-blur-md">
                <p className="font-raleway text-lg font-bold text-white">Dr Syed Abdi</p>
                <p className="mt-1 text-xs text-slate-200">GMC-registered GP · Medical Director</p>
                <p className="mt-2 text-xs font-medium text-indigo-200">Doctor-led ED assessment in Birmingham</p>
              </div>
            </div>
          </div>
        </div>

        {/* Homepage-style trust strip, without unverified ratings or outcome claims. */}
        <div className="relative z-10 border-t border-white/10 bg-white/[0.04]">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-5 gap-y-5 px-5 py-6 sm:px-8 lg:grid-cols-4 lg:px-10">
            {[
              { label: 'Patient Reviews', detail: 'Real patient experiences', Icon: FaGoogle },
              { label: '10+ Years of GP Experience', detail: 'UK clinical care', Icon: FaUserMd },
              { label: 'GMC-Registered Doctor', detail: 'Medical assessment', Icon: FaStethoscope },
              { label: 'Discreet Private Care', detail: 'Confidential appointments', Icon: FaLock },
            ].map(({ label, detail, Icon }) => (
              <div key={label} className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-500/25 text-indigo-200">
                  <Icon aria-hidden="true" className="text-sm" />
                </div>
                <div>
                  <div className="text-xs font-bold leading-5 text-white sm:text-sm">{label}</div>
                  <div className="text-[11px] leading-4 text-slate-300">{detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      ) : (
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
            {isHampstead 
              ? <>Erectile Dysfunction Clinic <br className="hidden sm:block"/> in Hampstead, London</>
              : <>Erectile Dysfunction <br className="hidden sm:block"/> Treatment in {locationName}</>
            }
          </h1>
          
          <p className="text-sm md:text-base text-white/90 font-inter leading-relaxed max-w-2xl mx-auto mb-5 drop-shadow-md">
            {heroDescription}
          </p>
          <p className="text-xs md:text-sm text-blue-200 font-inter max-w-2xl mx-auto mb-5 font-semibold">
            {isHampstead 
              ? "Private ED and impotence clinic in Hampstead, North West London."
              : `Private ED and impotence clinic in ${locationName}.`
            }
          </p>

          {/* NEW TREATMENT PILLS */}
          <motion.div 
            custom={0} initial="hidden" animate="visible" variants={fadeUpVariants}
            className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto mb-8"
          >
            {["Shockwave Therapy", "Advanced ED Options", "Impotence Assessment", "Vascular Review", "Medication Review"].map((pill, idx) => (
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
              Request Private Callback
            </button>
            <button 
              onClick={() => setIsAssessmentOpen(true)}
              className="px-8 py-3.5 w-full sm:w-auto flex items-center justify-center text-sm cursor-pointer bg-white/10 border border-white/20 text-white hover:bg-white hover:text-[#4041d1] rounded-xl font-bold transition-all duration-300 gap-2 active:scale-95 font-inter"
            >
              Check ED Treatment Suitability
            </button>
          </motion.div>

          <motion.p 
            custom={2} initial="hidden" animate="visible" variants={fadeUpVariants}
            className="mt-4 text-[11px] md:text-xs text-slate-400 font-inter max-w-sm mx-auto"
          >
            Free initial discussion available. Private treatment fees apply if you proceed.
          </motion.p>
        </div>

        {/* --- MOBILE TREATMENT SLIDER (With Functional Arrows) --- */}
        <div className="relative z-20 w-full mt-12 overflow-hidden">
          <div className="flex items-end justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
             <div>
               <h3 className="text-white font-raleway font-bold text-lg md:text-xl">Treatment options may include</h3>
               <p className="text-slate-400 text-xs font-inter mt-1">Suitability is checked before any treatment plan is recommended.</p>
             </div>
             
             {/* Nav Arrows */}
             <div className="hidden sm:flex items-center gap-2">
                <button 
                  onClick={scrollLeft} 
                  className="w-8 h-8 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 transition-colors backdrop-blur-sm"
                  aria-label="Scroll left"
                >
                  <FaChevronLeft className="w-3 h-3" />
                </button>
                <button 
                  onClick={scrollRight} 
                  className="w-8 h-8 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 transition-colors backdrop-blur-sm"
                  aria-label="Scroll right"
                >
                  <FaChevronRight className="w-3 h-3" />
                </button>
             </div>
          </div>

          <div 
            ref={sliderRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide px-4 sm:px-6 lg:px-8 pb-8 gap-4 w-full"
          >
            {mobileTreatmentCards.map((card, idx) => (
              <div 
                key={idx} 
                className="snap-start shrink-0 w-[85%] max-w-[280px] sm:w-[280px] bg-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-5 shadow-xl flex flex-col"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-900/50 flex items-center justify-center mb-3">
                  <card.icon className="w-4 h-4 text-blue-400" />
                </div>
                <h4 className="text-white font-bold font-raleway text-sm mb-2">{card.title}</h4>
                <p className="text-slate-400 text-[11px] font-inter leading-relaxed">{card.text}</p>
              </div>
            ))}
            {/* Spacer for right padding on scroll */}
            <div className="shrink-0 w-4 sm:w-8"></div>
          </div>
          
          {/* Mobile visible swipe indicator */}
          <div className="sm:hidden flex items-center justify-center gap-2 text-slate-400 text-[10px] font-bold uppercase tracking-widest -mt-4 mb-4">
             <FaChevronLeft className="w-2.5 h-2.5 opacity-50" />
             Swipe for more
             <FaChevronRight className="w-2.5 h-2.5 opacity-50" />
          </div>
        </div>
      </div>
      )}

      {/* --- PREMIUM BIRMINGHAM JOURNEY: problem → assessment → action --- */}
      {isBirmingham ? (
        <>
          {/* 1. A patient-centred explanation in a clear editorial split layout. */}
          <section className="relative overflow-hidden bg-[#F7F9FF] py-16 font-inter md:py-24">
            <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-indigo-100/60 blur-3xl" />
            <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[0.94fr_1.06fr] lg:gap-16 lg:px-10">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#4041d1] shadow-sm sm:text-xs">
                  <FaStethoscope aria-hidden="true" /> Understand the cause
                </div>
                <h2 className="max-w-xl font-raleway text-3xl font-bold leading-tight tracking-tight text-[#0A1128] sm:text-4xl lg:text-5xl">
                  When erections become <span className="text-[#4041d1]">less reliable</span>,
                  a medical review can help.
                </h2>
                <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 md:text-lg">
                  ED tablets such as sildenafil and tadalafil can help many men. If your response
                  has changed—or you have new erection difficulties—there may be several contributing
                  factors worth reviewing rather than simply changing treatment.
                </p>
                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
                  Dr Syed Abdi offers a confidential, face-to-face assessment of symptoms, previous
                  medication response, relevant health conditions and realistic next steps.
                </p>
                <button
                  type="button"
                  onClick={handleAction}
                  className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#4041d1] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-indigo-900/15 transition-colors hover:bg-[#3032b8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4041d1] sm:w-auto"
                >
                  Request a Confidential Callback
                  <FaArrowRight aria-hidden="true" />
                </button>
              </div>

              <div className="relative overflow-hidden rounded-[28px] bg-[#0A1128] p-6 text-white shadow-2xl shadow-indigo-950/20 sm:p-9 lg:p-11">
                <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-500/25 blur-3xl" />
                <div className="relative">
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-indigo-200 sm:text-xs">
                    A proper assessment considers
                  </span>
                  <h3 className="mt-3 font-raleway text-2xl font-bold leading-snug sm:text-3xl">
                    More than the prescription.
                  </h3>
                  <div className="mt-8 space-y-3">
                    {[
                      {
                        Icon: FaPills,
                        title: "Your current medication",
                        text: "How tablets are used, previous response, side effects and other medicines.",
                      },
                      {
                        Icon: FaHeartbeat,
                        title: "Circulation and general health",
                        text: "Diabetes, cardiovascular risk, blood pressure and other relevant factors.",
                      },
                      {
                        Icon: FaStethoscope,
                        title: "The wider picture",
                        text: "Hormones, lifestyle, stress and relationship factors where relevant.",
                      },
                    ].map(({ Icon, title, text }) => (
                      <div key={title} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.07] p-4 sm:p-5">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-400/20 text-indigo-200">
                          <Icon aria-hidden="true" className="text-lg" />
                        </div>
                        <div>
                          <h4 className="font-raleway text-sm font-bold text-white sm:text-base">{title}</h4>
                          <p className="mt-1 text-xs leading-6 text-slate-300 sm:text-sm">{text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="mt-6 text-xs leading-6 text-indigo-100/85">
                    Further tests, including blood tests or penile Doppler, are considered only when clinically appropriate.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 2. Clear steps and fee transparency instead of three repetitive text sections. */}
          <section className="bg-white py-16 font-inter md:py-24" aria-labelledby="ed-process-heading">
            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
              <div className="mx-auto max-w-3xl text-center">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#4041d1]">Your appointment, explained</span>
                <h2 id="ed-process-heading" className="mt-4 font-raleway text-3xl font-bold tracking-tight text-[#0A1128] sm:text-4xl">
                  A clear next step, without pressure.
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  Whether you're seeking your first ED assessment or tablets have become less effective,
                  the starting point is a conversation—not a pre-selected procedure.
                </p>
              </div>

              <div className="mt-11 grid gap-5 md:grid-cols-3">
                {[
                  {
                    number: "01",
                    title: "Tell us what's happening",
                    text: "Request a confidential callback or complete the short ED questionnaire.",
                    Icon: FaFileAlt,
                  },
                  {
                    number: "02",
                    title: "Meet your doctor",
                    text: "Discuss your history, symptoms, medication response and investigations if needed.",
                    Icon: FaUserMd,
                  },
                  {
                    number: "03",
                    title: "Understand your options",
                    text: "Receive a balanced explanation of suitability, limitations, costs and next steps.",
                    Icon: FaClipboardList,
                  },
                ].map(({ number, title, text, Icon }) => (
                  <div key={number} className="group relative rounded-3xl border border-slate-200 bg-[#F8FAFF] p-7 transition-colors hover:border-indigo-200 hover:bg-white sm:p-8">
                    <div className="flex items-center justify-between">
                      <span className="font-raleway text-4xl font-bold tracking-tight text-indigo-200">{number}</span>
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-[#4041d1]">
                        <Icon aria-hidden="true" />
                      </div>
                    </div>
                    <h3 className="mt-6 font-raleway text-xl font-bold text-[#0A1128]">{title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-9 flex flex-col gap-4 rounded-2xl border border-indigo-100 bg-indigo-50/60 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
                <div className="max-w-3xl">
                  <p className="font-bold text-[#0A1128]">Clear information about fees</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    An initial telephone discussion is available free of charge. A full medical consultation,
                    investigations and any treatment may involve fees, which are explained before booking.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsAssessmentOpen(true)}
                  className="inline-flex shrink-0 items-center justify-center rounded-xl border border-[#4041d1]/25 bg-white px-5 py-3 text-sm font-bold text-[#4041d1] transition-colors hover:bg-indigo-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4041d1]"
                >
                  Start Free ED Questionnaire
                </button>
              </div>
            </div>
          </section>

          {/* Lead form is now early in the journey; same component, ID and Ads conversion label. */}
          {edLeadForm}

          {/* 3. A single focused treatment overview replaces duplicate shockwave sales messaging. */}
          <section className="relative overflow-hidden bg-[#0A1128] py-16 font-inter text-white md:py-20">
            <div className="pointer-events-none absolute -left-20 -bottom-28 h-80 w-80 rounded-full bg-indigo-500/15 blur-3xl" />
            <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
              <div className="max-w-3xl">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-200">After your assessment</span>
                <h2 className="mt-3 font-raleway text-3xl font-bold tracking-tight sm:text-4xl">
                  Options discussed around your needs—not a one-size-fits-all treatment.
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                  What is appropriate depends on the likely causes, your preferences, previous treatment response and clinical suitability.
                </p>
              </div>
              <div className="mt-9 grid gap-4 md:grid-cols-3">
                {[
                  {
                    Icon: FaPills,
                    title: "Medication review",
                    text: "Review existing ED medication, how it is taken, effectiveness and possible alternatives.",
                  },
                  {
                    Icon: FaHeartbeat,
                    title: "Medical investigations",
                    text: "Relevant blood tests and vascular assessment may be considered when they could change care.",
                  },
                  {
                    Icon: FaWaveSquare,
                    title: "Selected non-surgical options",
                    text: "Shockwave therapy may be discussed for selected men, with uncertainty and limitations explained.",
                  },
                ].map(({ Icon, title, text }) => (
                  <div key={title} className="rounded-2xl border border-white/15 bg-white/[0.07] p-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-200">
                      <Icon aria-hidden="true" />
                    </div>
                    <h3 className="mt-5 font-raleway text-lg font-bold">{title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
                  </div>
                ))}
              </div>
              <p className="mt-7 max-w-4xl text-xs leading-6 text-indigo-100/80">
                Not every treatment is suitable for every patient. Shockwave evidence remains limited and results vary;
                no treatment outcome can be guaranteed.
              </p>
            </div>
          </section>

          {/* Display real FAQ content when FAQPage schema is supplied by page.tsx. */}
          {faqs.length > 0 && (
            <section className="bg-white py-16 font-inter md:py-20" aria-labelledby="ed-faq-heading">
              <div className="mx-auto max-w-3xl px-5 sm:px-8">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#4041d1]">Patient questions</span>
                <h2 id="ed-faq-heading" className="mt-3 font-raleway text-3xl font-bold text-[#0A1128]">Frequently asked questions</h2>
                <div className="mt-7 space-y-3">
                  {faqs.map((faq, index) => (
                    <div key={faq.question} className="overflow-hidden rounded-xl border border-slate-200 bg-[#F8FAFF]">
                      <button
                        type="button"
                        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-[#0A1128] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4041d1]"
                        aria-expanded={openFAQIndex === index}
                        onClick={() => toggleFAQ(index)}
                      >
                        <span>{faq.question}</span>
                        {openFAQIndex === index ? <FaMinus aria-hidden="true" /> : <FaPlus aria-hidden="true" />}
                      </button>
                      {openFAQIndex === index && (
                        <p className="border-t border-slate-200 px-5 py-4 text-sm leading-7 text-slate-600">{faq.answer}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}
        </>
      ) : (
        <>
      {/* --- DOCTOR-LED TRUST SECTION --- */}
      <section className="py-24 bg-white font-inter border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="shrink-0 relative">
              <Image
                src="/dr-syed-abdi.webp"
                alt="Dr Syed Abdi, GMC-registered doctor at Healing-PRP Clinics"
                width={192}
                height={192}
                className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover shadow-md mx-auto md:mx-0 border-4 border-white"
                loading="lazy"
                quality={85}
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-raleway font-bold text-slate-900 mb-4">
                Treatment With Dr Syed Abdi
              </h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                Your consultation and treatment are carried out by Dr Syed Abdi, GMC No. 6083294, a UK-trained and GMC-registered doctor with experience in men’s intimate health, erectile dysfunction assessment and impotence assessment, shockwave therapy, PRP-based treatments and non-surgical intimate health procedures. The appointment is discreet, private and focused on understanding the likely cause of your symptoms, checking suitability and discussing realistic treatment options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- DOCTOR-LED APPROACH --- */}
      <section className="py-16 md:py-20 bg-slate-50 font-inter border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
               <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative z-10">
                 <h4 className="text-lg font-raleway font-bold text-slate-900 mb-5 border-b border-slate-100 pb-4">Your consultation focuses on:</h4>
                 <ul className="space-y-4">
                  {[
                    "Your erectile dysfunction or impotence symptoms and concerns",
                    "Previous treatments and response so far",
                    "Medical history and current medication",
                    "Possible contributing factors, including circulation, hormones, stress and lifestyle",
                    "Vascular review, with penile Doppler ultrasound discussed or arranged where clinically appropriate",
                    "Suitable ED and impotence treatment options, which may include shockwave therapy, advanced ED options, blood tests, medication review or referral where appropriate",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <FaCheckCircle className="text-[#4041d1] mt-1 shrink-0 text-base" />
                      <span className="text-slate-700 text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
               </div>
            </div>

            <div className="order-1 md:order-2">
                <span className="text-[#4041d1] font-bold tracking-widest text-xs uppercase mb-3 block">Medical Expertise</span>
                <h3 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-6">
                  Not just tablets. Not an online-only service.
                </h3>
                <div className="text-slate-600 text-base leading-relaxed space-y-4 mb-8">
                  <p>
                    At Healing-PRP Clinics, consultations and treatments are carried out by <strong className="text-[#4041d1]">Dr Syed Abdi (GMC No: 6083294)</strong>.
                  </p>
                  <p>
                    The aim is to understand the likely cause of ED and recommend suitable options without pressure to proceed.
                  </p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PRIVATE ED / IMPOTENCE CLINIC SECTION --- */}
      <section className="py-16 bg-white font-inter border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#4041d1] font-bold tracking-widest text-xs uppercase mb-3 block">
            Private Men’s Health Clinic
          </span>
          <h2 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-6">
            Private ED and Impotence Clinic in {locationName}
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            Impotence is another term often used for erectile dysfunction. At Healing-PRP Clinics {locationName}, we provide discreet, doctor-led assessment for men experiencing erection difficulties, reduced firmness, less reliable erections or concerns about sexual performance. Treatment options are discussed after consultation and depend on your symptoms, medical history and suitability.
          </p>
        </div>
      </section>
    
      {/* --- NEW SHOCKWAVE FOCUS SECTION --- */}
      <section className="py-16 md:py-20 bg-white font-inter">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-6">
            Considering Shockwave Therapy for ED in {locationName}?
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-10">
            Shockwave therapy may be suitable for selected men with erection difficulties, reduced firmness or suspected blood-flow-related ED. At Healing-PRP Clinics {locationName}, treatment is offered after a doctor-led assessment so that your symptoms, medical history and suitability are reviewed before any treatment plan is recommended.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Non-surgical treatment option", "Usually well tolerated", "Suitability checked first", "Private clinic fees apply"].map((badge, idx) => (
              <span key={idx} className="bg-blue-50 text-[#4041d1] px-4 py-2 rounded-full text-sm font-bold border border-blue-100 shadow-sm">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION: FULL TREATMENT OPTIONS GRID --- */}
      <section className="relative py-16 lg:py-20 bg-slate-50 overflow-hidden font-inter border-y border-slate-200">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-4 tracking-tight">   ED and Impotence Treatment Options </h2>
            <p className="text-slate-600 text-base">
              After a doctor-led assessment, suitable options may include:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            {treatmentOptions.map((step, index) => (
                <div key={index} className="p-6 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 shadow-sm hover:shadow-lg hover:border-[#4041d1]/30 transition-all duration-300 flex flex-col group">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-blue-100 text-[#4041d1] group-hover:scale-110 transition-transform">
                    <step.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-raleway font-bold mb-2 text-lg text-slate-900">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600 font-inter mb-4 flex-grow">{step.description}</p>
                  
                  {step.tags && (
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {step.tags.map((tag, i) => (
                        <span key={i} className="px-2 py-0.5 bg-slate-50 border border-slate-200 rounded text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION: WHO THIS SERVICE MAY HELP --- */}
      <section className="py-16 bg-white font-inter border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-4">Is this suitable for you?</h2>
            <p className="text-slate-600 text-base">
              This private ED and impotence service may be suitable for men experiencing:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
            {symptoms.map((symptom, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
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

        </>
      )}

      {/* Hampstead keeps its original lower form position; Birmingham already rendered it above. */}
      {!isBirmingham && edLeadForm}

      <LocationSection /> 
      <div id="reviews-section">
        <TrustReviews widgetUrl={isBirmingham ? "https://cdn.trustindex.io/loader.js?e2cf4a365239367f2a3607c0513" : "https://cdn.trustindex.io/loader.js?eb147a565c3c36945f26281e586"} />
      </div>
      
      {/* --- MINIMAL AD FOOTER --- */}
      <footer className="bg-[#0A1128] pt-8 pb-32 border-t border-white/10 text-center">
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
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={() => setIsPrivacyModalOpen(false)}>
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
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={() => setIsTermsModalOpen(false)}>
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

      {isAssessmentOpen && (
        <OnlineAssessmentModal isOpen={isAssessmentOpen} onClose={() => setIsAssessmentOpen(false)} />
      )}
    </>
  );
}
