"use client";

import { useEffect, useState } from "react";
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
} from "react-icons/fa";
import LocationSection from "@/components/LocationSection";
import ContactCTASection from "@/components/ContactCTASection";
import TrustReviews from "@/components/TrustReviews";

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

const treatmentOptions = [
  { 
    icon: FaWaveSquare, 
    title: "Shockwave Therapy", 
    description: "Low-intensity acoustic wave therapy that may support penile blood flow in selected patients.",
    tags: ["Usually well tolerated", "~30 min sessions", "No downtime"] // Updated per CRO
  },
  { 
    icon: FaSyringe, 
    title: "Advanced ED Options", 
    description: "A doctor-prepared treatment option using a concentrated sample from your own blood.",
    tags: ["Minimal discomfort", "Takes ~30 mins", "No downtime"]
  },
  { 
    icon: FaTint, 
    title: "Vascular Assessment", 
    description: "Assessment of penile blood flow, including Doppler ultrasound, to identify vascular causes.",
    tags: ["Non-invasive", "Ultrasound", "Direct insights"]
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
  locationName = "St Albans",
  servingAreas = "Harpenden • Luton • Watford • Hertfordshire",
  heroDescription = <>Doctor-led assessment for erection difficulties, reduced firmness and ED symptoms.</>, // Updated per CRO
  whyChooseText = "Patients choose our clinic for accessible, doctor-led care and a structured approach to erectile dysfunction assessment and treatment.",
  faqs = [], 
}: ErectileDysfunctionProps) {
  
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

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
  
  return (
    <>
      {/* --- CSS OVERRIDES --- */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* Hide global header */
        header, nav, .header, .navbar, #header { display: none !important; }
        
        /* Hide global floating buttons to prevent overlap with our new sticky bar */
        .floating-whatsapp, .whatsapp-float, #whatsapp-button, .floating-contact { display: none !important; }
        
        /* Safe padding for iOS devices */
        .pb-safe { padding-bottom: max(12px, env(safe-area-inset-bottom)); }
      `}} />

      {/* --- HERO SECTION (More Compact) --- */}
      <div className="relative overflow-hidden flex items-center justify-center bg-[#0A1128] pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1e293b] via-[#0A1128] to-black" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[600px] bg-[radial-gradient(ellipse_at_center,_rgba(64,65,209,0.25)_0%,_transparent_70%)] pointer-events-none" />
        </div>
        
        <div className="relative z-20 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border border-white/20 rounded-full bg-[#1e293b]/50 backdrop-blur-md shadow-lg">
            <FaStethoscope className="text-blue-400 w-3 h-3" />
            <span className="text-blue-100 text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase font-inter">Doctor-Led Private Clinic</span>
          </div>

          <h1 className="md:text-6xl text-4xl font-bold font-raleway text-white leading-tight mb-5 tracking-tight drop-shadow-lg">
            Erectile Dysfunction <br className="hidden sm:block"/> Treatment in {locationName}
          </h1>
          
          <p className="text-sm md:text-base text-white/90 font-inter leading-relaxed max-w-2xl mx-auto mb-8 drop-shadow-md">
            {heroDescription}
          </p>

          <motion.div 
            custom={1} initial="hidden" animate="visible" variants={fadeUpVariants}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-xl mx-auto"
          >
            <button 
              onClick={handleAction}
              className="px-8 py-4 w-full sm:w-auto flex items-center justify-center text-sm cursor-pointer bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-xl font-bold transition-all duration-300 gap-2 shadow-[0_0_20px_rgba(64,65,209,0.3)] hover:shadow-[0_0_25px_rgba(64,65,209,0.5)] active:scale-95 font-inter"
            >
              Book Private ED Consultation
            </button>
            <button 
              onClick={() => setIsAssessmentOpen(true)}
              className="px-8 py-3.5 w-full sm:w-auto flex items-center justify-center text-sm cursor-pointer bg-white/10 border border-white/20 text-white hover:bg-white hover:text-[#4041d1] rounded-xl font-bold transition-all duration-300 gap-2 active:scale-95 font-inter"
            >
              Check Treatment Suitability
            </button>
          </motion.div>

          <motion.p 
            custom={2} initial="hidden" animate="visible" variants={fadeUpVariants}
            className="mt-4 text-[11px] md:text-xs text-slate-400 font-inter max-w-sm mx-auto"
          >
            Free initial consultation available. Private treatment fees apply if you proceed.
          </motion.p>

          {/* Compact Hero Trust Badges */}
          <motion.div 
            custom={3} initial="hidden" animate="visible" variants={fadeUpVariants}
            className="flex flex-wrap justify-center gap-x-6 gap-y-3 mt-8 pt-8 border-t border-white/10"
          >
            <div className="flex items-center gap-2 text-[11px] md:text-xs font-bold text-slate-300 uppercase tracking-wider font-inter">
              <FaStar className="text-amber-400 w-3 h-3" /> 5.0 Patient Rating
            </div>
            <div className="flex items-center gap-2 text-[11px] md:text-xs font-bold text-slate-300 uppercase tracking-wider font-inter">
              <FaLock className="text-blue-400 w-3 h-3" /> 1:1 Discreet Care
            </div>
            <div className="flex items-center gap-2 text-[11px] md:text-xs font-bold text-slate-300 uppercase tracking-wider font-inter">
              <FaUserMd className="text-teal-400 w-3 h-3" /> GMC Registered
            </div>
          </motion.div>
        </div>
      </div>

      {/* --- MOVED UP: DOCTOR-LED APPROACH --- */}
      <section className="py-16 md:py-20 bg-slate-50 font-inter border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
               <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative z-10">
                 <h4 className="text-lg font-raleway font-bold text-slate-900 mb-5 border-b border-slate-100 pb-4">Your consultation focuses on:</h4>
                 <ul className="space-y-4">
                  {[
                    "Your symptoms and concerns",
                    "Previous treatments and response so far",
                    "Medical history and current medication",
                    "Possible contributing factors (circulation, hormones, stress)",
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

      {/* --- NEW CRO SECTION: FEES & QUALIFICATION --- */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm">
             <h3 className="font-raleway font-bold text-slate-900 text-xl mb-3 flex items-center justify-center gap-2">
               Private ED Clinic Fees
             </h3>
             <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-3xl mx-auto font-inter">
               Your initial consultation is free. If treatment is suitable, fees are explained clearly before you decide. Shockwave therapy, Advanced ED options, blood tests or Doppler assessments are charged separately depending on your personalised treatment plan.
             </p>
           </div>
        </div>
      </section>

      {/* --- SECTION: TREATMENT OPTIONS (Compact Design) --- */}
      <section className="relative py-16 lg:py-20 bg-white overflow-hidden font-inter border-b border-slate-200">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-4 tracking-tight">ED Treatment Options</h2>
            <p className="text-slate-600 text-base">
              After a doctor-led assessment, suitable options may include:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            {treatmentOptions.map((step, index) => (
                <div key={index} className="p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white shadow-sm hover:shadow-lg hover:border-[#4041d1]/30 transition-all duration-300 flex flex-col group">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-blue-100 text-[#4041d1] group-hover:scale-110 transition-transform">
                    <step.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-raleway font-bold mb-2 text-lg text-slate-900">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600 font-inter mb-4 flex-grow">{step.description}</p>
                  
                  {step.tags && (
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {step.tags.map((tag, i) => (
                        <span key={i} className="px-2 py-0.5 bg-white border border-slate-200 rounded text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
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

      {/* --- LOCAL DIFFERENTIATION SECTION --- */}
      <section className="py-16 bg-slate-50 relative z-10 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-raleway font-bold text-slate-900 mb-4">
            Why choose our {locationName} clinic?
          </h2>
          <p className="text-slate-600 font-inter text-base leading-relaxed max-w-2xl mx-auto">
            {whyChooseText}
          </p>
        </div>
      </section>

      {/* --- SECTION: WHO THIS SERVICE MAY HELP --- */}
      <section className="py-16 bg-white font-inter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-4">Is this suitable for you?</h2>
            <p className="text-slate-600 text-base">
              This service may be suitable for men experiencing:
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
      <section className="py-16 bg-slate-50 font-inter border-y border-slate-200">
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

      <div id="reviews-section">
        <TrustReviews widgetUrl={isBirmingham ? "https://cdn.trustindex.io/loader.js?e2cf4a365239367f2a3607c0513" : "https://cdn.trustindex.io/loader.js?eb147a565c3c36945f26281e586"} />
      </div>
      
      <ContactCTASection />
      <LocationSection /> 
      
      {/* --- MINIMAL AD FOOTER --- */}
      {/* Added extra padding bottom (pb-32) so the sticky bar doesn't cover footer links */}
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
