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
// This prevents the modal's code from loading until the user clicks the button
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
// Moved outside the component so they are only allocated in memory once
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
    tags: ["Pain-free", "~30 min sessions", "No downtime"]
  },
  { 
    icon: FaSyringe, 
    title: "Advanced ED Treatment Options", 
    description: "A doctor-prepared treatment option using a concentrated sample from your own blood. It may be considered as part of a personalised ED care plan after consultation.",
    tags: ["Minimal discomfort", "Takes ~30 mins", "No downtime"]
  },
  { 
    icon: FaTint, 
    title: "Vascular Assessment", 
    description: "Where appropriate, assessment of penile blood flow may be arranged, including Doppler ultrasound, to help identify vascular causes and guide treatment planning.",
    tags: ["Non-invasive", "Ultrasound Assessment", "Immediate insights"]
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
    title: "Free Confidential Assessment",
    description: "Tell us about your symptoms, medical history, and previous treatments in a private setting.",
    icon: FaFileAlt,
  },
  {
    title: "Doctor-Led Consultation",
    description: "We review possible causes and discuss suitable treatment options.",
    icon: FaUserMd,
  },
  {
    title: "Tailored Plan Where Appropriate",
    description: "This may include shockwave therapy, advanced ED treatment options, health review, or a combined approach depending on suitability.",
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
  heroDescription = <>Start with a <strong>free confidential consultation</strong> to understand the possible cause and explore suitable options.</>,
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
      } else {
        setTimeout(() => {
          const delayedSection = document.getElementById("contact-form-section");
          if (delayedSection) {
            const elementPosition = delayedSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
          }
        }, 150); 
      }
    });
  };
  
  return (
    <>
      {/* --- MAGIC TRICK TO HIDE THE GLOBAL HEADER JUST ON THIS PAGE --- */}
      <style dangerouslySetInnerHTML={{ __html: `
        header, nav, .header, .navbar, #header { display: none !important; }
      `}} />

      {/* --- HERO SECTION --- */}
      <div className="relative min-h-[82vh] md:min-h-[80vh] overflow-hidden flex items-center justify-center bg-[#0A1128]">
        
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1e293b] via-[#0A1128] to-black" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[600px] bg-[radial-gradient(ellipse_at_center,_rgba(64,65,209,0.25)_0%,_transparent_70%)] pointer-events-none" />
        </div>
        
        <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10 pb-44 md:pb-24">
          
          <div className="inline-block px-5 py-2 mb-6 border border-white/20 rounded-full bg-[#1e293b]/50 backdrop-blur-md shadow-lg">
            <span className="text-blue-100 text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase font-inter">Doctor-Led Private Clinic</span>
          </div>

          <h1 className="md:text-6xl text-4xl font-bold font-raleway text-white leading-tight mb-4 tracking-tight drop-shadow-lg">
            Erectile Dysfunction <br className="hidden sm:block"/> Treatment in {locationName}
          </h1>

          <p className="text-base md:text-lg text-blue-50/90 font-inter leading-relaxed max-w-2xl mx-auto mb-5 font-medium drop-shadow-md">
            Doctor led non surgical advanced treatments for erection difficulties, reduced firmness, and confidence concerns.
          </p>
          
          <p className="text-sm md:text-base text-white/95 font-inter leading-relaxed max-w-xl mx-auto mb-6 drop-shadow-md">
            {heroDescription}
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {["Takes ~30 Mins", "No Planned Downtime", "Minimal Discomfort"].map((chip) => (
              <span
                key={chip}
                className="px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-[10px] md:text-xs font-bold uppercase tracking-wider backdrop-blur-sm"
              >
                {chip}
              </span>
            ))}
          </div>

          <motion.div 
            custom={3} initial="hidden" animate="visible" variants={fadeUpVariants}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center"
          >
            <button 
              onClick={handleAction}
              className="px-8 py-4 w-full sm:w-auto flex items-center justify-center text-sm cursor-pointer bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-xl font-bold transition-all duration-300 gap-2 shadow-[0_0_20px_rgba(64,65,209,0.3)] hover:shadow-[0_0_25px_rgba(64,65,209,0.5)] active:scale-95 font-inter"
            >
              <FaEnvelope className="w-4 h-4" /> Book Free ED Consultation
            </button>
            <button 
              onClick={() => setIsAssessmentOpen(true)}
              className="px-8 py-3.5 w-full sm:w-auto flex items-center justify-center text-sm cursor-pointer bg-white/95 text-[#4041d1] hover:bg-white rounded-xl font-bold transition-all duration-300 gap-2 shadow-md active:scale-95 font-inter"
            >
              Start Online Assessment
            </button>
          </motion.div>

          <motion.div 
            custom={4} initial="hidden" animate="visible" variants={fadeUpVariants}
            className="flex flex-wrap justify-center gap-2 mt-8"
          >
            {["No GP Referral Required", "Free Initial Consultation", "Fast Access Clinic"].map((chip) => (
              <div key={chip} className="flex items-center gap-1.5 px-3 py-1.5 bg-black/25 border border-white/20 rounded-full text-[9px] md:text-xs font-bold text-white uppercase tracking-wider backdrop-blur-sm">
                <FaCheckCircle className="text-blue-400 shrink-0" /> {chip}
              </div>
            ))}
          </motion.div>

          <motion.div 
            custom={5} initial="hidden" animate="visible" variants={fadeUpVariants}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 text-white/65 rounded-full text-[9px] md:text-xs mt-5 font-bold uppercase tracking-widest font-inter"
          >
             <FaMapMarkerAlt className="mb-0.5 shrink-0" /> 
             <span>Serving: {servingAreas}</span>
          </motion.div>
        </div>

        {/* --- HERO TRUST BADGES --- */}
        <div className={`absolute bottom-0 left-0 w-full z-30 bg-[#0A1128]/95 backdrop-blur-xl border-t border-white/10 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="px-2 py-4 max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-2 divide-none md:divide-x divide-white/10">
              <a href="#reviews" onClick={(e) => {
                e.preventDefault();
                document.getElementById('reviews-section')?.scrollIntoView({ behavior: 'smooth' });
              }} className="flex justify-center items-center group cursor-pointer px-2">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#4285F4] group-hover:scale-110 transition-transform shadow-md"><FaGoogle className="w-4 h-4" /></div>
                  <div className="flex flex-col items-start">
                    <div className="flex text-amber-400 text-[10px] mb-0.5"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                    <span className="text-white text-[9px] font-bold tracking-widest uppercase opacity-90 group-hover:opacity-100 font-inter">5.0 Patient Rating</span>
                  </div>
                </div>
              </a>
              <div className="flex justify-center items-center px-2 opacity-90 hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-[#4041d1] rounded-full flex items-center justify-center text-white font-bold text-[12px] shadow-md border border-white/10">10+</div>
                  <div className="flex flex-col items-start font-inter">
                    <span className="text-white text-[9px] font-bold uppercase tracking-widest leading-tight">Years Experience</span>
                    <span className="text-blue-400 text-[9px] font-semibold tracking-wider uppercase leading-tight mt-0.5">Doctor-Led Care</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center px-2 opacity-90 hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-3 font-inter">
                  <div className="w-9 h-9 bg-[#1f3a68] rounded-full flex items-center justify-center text-white font-bold text-[11px] shadow-md border border-white/10">GMC</div>
                  <div className="flex flex-col items-start">
                    <span className="text-white text-[9px] font-bold uppercase tracking-widest leading-tight">Dr Syed Abdi</span>
                    <span className="text-blue-400 text-[9px] font-semibold tracking-wider uppercase leading-tight mt-0.5">GMC Registered</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center px-2 opacity-90 hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-3 font-inter">
                  <div className="w-9 h-9 bg-slate-800 rounded-full flex items-center justify-center text-slate-300 shadow-md border border-white/10"><FaLock className="w-3.5 h-3.5" /></div>
                  <div className="flex flex-col items-start">
                    <span className="text-white text-[9px] font-bold uppercase tracking-widest leading-tight">Strictly 1:1</span>
                    <span className="text-blue-400 text-[9px] font-semibold tracking-wider uppercase leading-tight mt-0.5">Discreet Care</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- SECTION 1: TREATMENT OPTIONS --- */}
      <section className="relative py-20 lg:py-24 bg-slate-50 overflow-hidden font-inter border-b border-slate-200">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-[#4041d1] font-bold tracking-widest text-sm md:text-base uppercase mb-2 block">Available Treatments</span>
            <h2 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-6 tracking-tight">Available Erectile Dysfunction Treatment Options</h2>
            <p className="text-slate-600 text-lg">
              Treatment is not one-size-fits-all. After a doctor-led assessment, suitable non-surgical options may include:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative mt-12">
            {treatmentOptions.map((step, index) => (
                <div key={index} className="p-8 rounded-[2rem] border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:border-[#4041d1]/30 transition-all duration-300 flex flex-col group">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-blue-50 text-[#4041d1] group-hover:scale-110 transition-transform">
                    <step.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-raleway font-bold mb-3 text-xl text-slate-900">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600 font-inter mb-6 flex-grow">{step.description}</p>
                  
                  {step.tags && (
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {step.tags.map((tag, i) => (
                        <span key={i} className="px-2.5 py-1 bg-slate-50 border border-slate-100 rounded-md text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-slate-600 font-medium italic">
              The most appropriate approach depends on your symptoms, medical history, and treatment goals.
            </p>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: DOCTOR-LED APPROACH --- */}
      <section className="py-24 bg-white font-inter border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative">
               <div className="absolute inset-0 bg-[#4041d1] rounded-3xl transform translate-x-4 translate-y-4 opacity-10"></div>
               <div className="bg-slate-50 p-10 rounded-3xl border border-slate-200 relative z-10">
                 <h4 className="text-xl font-raleway font-bold text-slate-900 mb-6 border-b border-slate-200 pb-4">Your consultation focuses on:</h4>
                 <ul className="space-y-5">
                  {[
                    "Your symptoms and concerns",
                    "Previous treatments and response so far",
                    "Medical history and current medication",
                    "Possible contributing factors such as circulation, diabetes, hormonal changes, or stress",
                    "Based on this, suitable treatment options such as shockwave therapy, Advanced ED Treatments, or further assessment may be discussed where appropriate"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <FaStethoscope className="text-[#4041d1] mt-1 shrink-0 text-lg" />
                      <span className="text-slate-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
               </div>
            </div>

            <div className="order-1 md:order-2">
                <span className="text-[#4041d1] font-bold tracking-widest text-xs uppercase mb-3 block">Medical Expertise</span>
                <h3 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-6">
                  A Doctor-Led, Personalised Approach
                </h3>
                <div className="text-slate-600 text-lg leading-relaxed space-y-6 mb-8">
                  <p>
                    At Healing-PRP Clinics, consultations and treatments are carried out by <strong className="text-[#4041d1] font-bold">Dr Syed Abdi (GMC No: 6083294)</strong>.
                  </p>
                  <p>
                    <strong>This is not a one-size-fits-all service or an online-only approach.</strong>
                  </p>
                  <p>
                    The aim is to identify the likely underlying cause and guide you toward suitable treatment options, with no pressure to proceed.
                  </p>
                </div>

                <button 
                  onClick={handleAction}
                  className="w-full sm:w-max px-8 py-4 bg-[#4041d1] text-white rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 group shadow-xl shadow-[#4041d1]/20 active:scale-95 mt-4"
                >
                  Book Free Confidential Consultation
                  <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- LOCAL DIFFERENTIATION SECTION --- */}
      <section className="py-20 md:py-24 bg-slate-50 relative z-10 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-6">
            Why choose our {locationName} clinic?
          </h2>
          <p className="text-slate-600 font-inter text-lg leading-relaxed max-w-2xl mx-auto">
            {whyChooseText}
          </p>
        </div>
      </section>

      {/* --- SECTION 3: WHO THIS SERVICE MAY HELP --- */}
      <section className="py-24 bg-white font-inter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-6">Who This Service May Help</h2>
            <p className="text-slate-600 text-lg">
              This service may be suitable for men who want a confidential, doctor-led discussion about erection difficulties and possible treatment options. You may benefit from a consultation if you are experiencing:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            {symptoms.map((symptom, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-slate-50 rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group ${index === 4 ? "lg:col-start-2" : ""}`}
              >
                <div className={`w-14 h-14 rounded-2xl ${symptom.color} flex items-center justify-center mb-6 text-2xl transition-transform group-hover:scale-110`}><symptom.icon /></div>
                <h3 className="text-xl font-raleway font-bold text-slate-900 mb-3 group-hover:text-[#4041d1] transition-colors">{symptom.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{symptom.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center max-w-3xl mx-auto">
             <p className="text-slate-600 font-medium">
               Erectile dysfunction is common, particularly with age, stress, or medical conditions. A structured medical approach can help identify the cause and guide the next step.
             </p>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: HOW THE PROCESS WORKS --- */}
      <section className="py-24 bg-slate-50 font-inter border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-4">How the Process Works</h2>
            <p className="text-slate-600 text-lg">The aim is to make the process clear, discreet, and medically guided from the start.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickSteps.map((step, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm relative group hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 text-[#4041d1] text-2xl shadow-sm group-hover:scale-110 transition-transform">
                  <step.icon />
                </div>
                <h3 className="text-xl font-bold mb-3 font-raleway">Step {idx + 1}: {step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-8 bg-blue-600 rounded-2xl text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-blue-900/20">
            <p className="text-lg font-medium max-w-2xl">
              There is no pressure to proceed. The purpose of the consultation is to help you understand the likely cause and which treatment options may be suitable.
            </p>
            <button 
              onClick={handleAction}
              className="px-8 py-4 bg-white text-[#4041d1] rounded-xl font-bold whitespace-nowrap hover:bg-slate-100 transition-colors shadow-lg active:scale-95"
            >
              Book Free Confidential Consultation
            </button>
          </div>
        </div>
      </section>

      {/* --- SECTION 5: WHY THE CAUSE MATTERS --- */}
      <section className="py-24 bg-white font-inter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="p-4 md:p-10">
              <h3 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-6">The Right Treatment Depends on the Cause</h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Erectile dysfunction can be linked to several factors, including circulation, diabetes, testosterone levels, stress, medication, and wider metabolic health.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8 font-semibold text-[#4041d1]">
                That is why a doctor-led review is important before recommending treatment.
              </p>
              <p className="text-slate-600 italic">
                A personalised approach helps avoid generic treatment and supports better clinical decision-making.
              </p>
            </div>

            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-200 shadow-sm">
                <span className="text-[#4041d1] font-bold tracking-widest text-xs uppercase mb-3 block">Your Assessment May Consider:</span>
                <ul className="space-y-5 mt-6">
                  {[
                    "Erection quality and firmness",
                    "Previous treatments and response so far",
                    "Circulation and vascular factors",
                    "Hormonal and metabolic health",
                    "Medication and wider health factors",
                    "Confidence and relationship impact",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-slate-700 font-medium">
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 border border-slate-100">
                        <FaCheckCircle className="text-[#4041d1]" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
            </div>
          </div>
        </div>
      </section>

     {/* --- SECTION 6: WHAT TREATMENTS MAY SUPPORT --- */}
      <section className="py-24 bg-slate-50 border-t border-slate-200 font-inter">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-6">What Doctor-Led Treatments Can — and Cannot — Do</h3>
            <p className="text-slate-600 text-lg mb-8">
              Advanced non-surgical options may support healthy function in selected patients, particularly where blood flow, tissue health, or wider health factors are part of the picture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-blue-50/50 p-10 rounded-3xl border border-blue-100">
              <h4 className="text-2xl font-raleway font-bold text-slate-900 mb-8 flex items-center gap-3">
                <span className="w-2 h-8 bg-[#4041d1] rounded-full block"></span> What treatment may support:
              </h4>
              <ul className="space-y-5">
                {[
                  "Penile blood flow in selected patients",
                  "Local tissue health and responsiveness",
                  "Gradual improvement over time",
                  "A broader doctor-led treatment plan",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <FaCheckCircle className="text-[#4041d1] mt-1 shrink-0 text-lg" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm">
              <h4 className="text-2xl font-raleway font-bold text-slate-900 mb-8 flex items-center gap-3">
                <span className="w-2 h-8 bg-slate-400 rounded-full block"></span> Important limitations:
              </h4>
              <ul className="space-y-5">
                {[
                  "Results vary between individuals",
                  "Improvement is usually gradual, not instant",
                  "Suitability depends on the underlying cause",
                  "A medical consultation is needed before treatment is recommended",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-slate-500">
                    <FaCheckCircle className="mt-1 shrink-0 text-lg" />
                    <span className="text-base font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 7: BLOOD TESTS AND HORMONE REVIEW --- */}
      <section className="py-24 bg-[#0A1128] font-inter relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 w-96 h-96 bg-[#4041d1] rounded-full blur-[120px] opacity-30 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
          <div className="mb-10 w-24 h-24 bg-[#151e32] rounded-full flex items-center justify-center border border-white/10 shadow-2xl mx-auto"><FaVial className="text-[#8ea3ff] text-4xl" /></div>
          <span className="text-[#8ea3ff] font-bold tracking-widest text-xs uppercase mb-4 block">Looking at the Bigger Picture</span>
          <h3 className="text-3xl md:text-5xl font-raleway font-bold text-white mb-6 leading-tight">In some cases, erection difficulties may be linked to wider health factors.</h3>
          <p className="text-slate-300 text-base md:text-lg mb-10 max-w-2xl mx-auto">Where appropriate, your doctor may discuss blood tests or further health review. This can be especially relevant if symptoms are worsening, previous treatments are less effective, or you also notice low energy, reduced libido, or changes in general health.</p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {['Testosterone Levels', 'Diabetes & HbA1c', 'Cardiovascular Risk', 'Metabolic Health'].map((tag, i) => (
              <span key={i} className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-slate-300 text-sm font-medium">{tag}</span>
            ))}
          </div>
        </div>
      </section>
      
      {/* --- SECTION 8: PRIVACY & DISCREET CARE --- */}
      <section className="py-24 bg-white font-inter border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-1.5 bg-blue-50 text-[#4041d1] rounded-full text-xs font-bold uppercase tracking-wider mb-6">100% Confidential & Private</div>
          <h3 className="text-3xl md:text-5xl font-raleway font-bold text-slate-900 mb-8">Discreet, Private and Professional</h3>
          <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto mb-12">
            We understand that discussing intimate health can feel sensitive. Healing-PRP Clinics provide a private, respectful, and judgement-free environment where your concerns are taken seriously.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12 text-left">
            {["Private 1:1 consultations", "GMC doctor-led care", "No GP referral required", "Personalised treatment planning", "Discreet communication & booking"].map((item, i) => (
              <div key={i} className={`bg-slate-50 p-5 rounded-2xl border border-slate-100 flex flex-col gap-3 justify-center text-center ${i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}`}>
                <FaCheckCircle className="text-[#4041d1] text-2xl mx-auto" /> 
                <span className="text-slate-800 font-medium text-sm leading-tight">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-20 bg-slate-50 font-inter border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h3 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-6">Take the First Step with a Free Confidential Consultation</h3>
           <p className="text-slate-600 text-lg leading-relaxed mb-10">
             If you are experiencing erection difficulties, reduced firmness, or changes in confidence, a doctor-led consultation can help clarify the possible cause and discuss suitable treatment options.
           </p>
           <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={handleAction}
              className="px-8 py-4 w-full sm:w-auto bg-[#4041d1] text-white rounded-xl font-bold text-lg hover:bg-[#2a2bb8] transition-all shadow-xl shadow-blue-900/20 active:scale-95"
            >
              Book Free Confidential ED Consultation
            </button>
            <button 
              onClick={() => setIsAssessmentOpen(true)}
              className="px-8 py-4 w-full sm:w-auto border-2 border-[#4041d1] text-[#4041d1] rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:bg-white active:scale-95"
            >
              Start Free Online Assessment
            </button>
          </div>
        </div>
      </section>
      
      {/* --- FAQs --- */}
      {faqs.length > 0 && (
        <section id="faqs" className="py-24 bg-white font-inter border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16"><h2 className="text-3xl md:text-5xl font-raleway font-bold text-slate-900 mb-6">Common Questions About Treatment</h2></div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <button className="w-full p-6 text-left flex items-center justify-between" onClick={() => toggleFAQ(index)}>
                    <h3 className="font-raleway font-bold text-slate-900 pr-8 text-base md:text-lg">{faq.question}</h3>
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all ${openFAQIndex === index ? 'bg-[#4041d1] text-white' : 'bg-[#4041d1]/10 text-[#4041d1]'}`}>
                      {openFAQIndex === index ? <FaMinus /> : <FaPlus />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {openFAQIndex === index && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                        <div className="px-6 pb-8 border-t border-slate-200 pt-6"><p className="text-slate-600 leading-relaxed">{faq.answer}</p></div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

     <div id="reviews-section">
        <TrustReviews widgetUrl={isBirmingham ? "https://cdn.trustindex.io/loader.js?e2cf4a365239367f2a3607c0513" : "https://cdn.trustindex.io/loader.js?eb147a565c3c36945f26281e586"} />
      </div>
      <ContactCTASection />
      <LocationSection /> 
      
      {/* --- MINIMAL AD FOOTER --- */}
      <footer className="bg-[#0A1128] pt-8 pb-28 border-t border-white/10 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-slate-400 text-sm font-inter">
            &copy; {new Date().getFullYear()} Healing-PRP Clinics. All rights reserved.
          </p>
          <div className="flex justify-center gap-4 mt-4 text-xs text-slate-500 font-inter">
            
            <button 
              onClick={() => setIsPrivacyModalOpen(true)} 
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            
            <span>|</span>
            
            <button 
              onClick={() => setIsTermsModalOpen(true)} 
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
            
          </div>
        </div>
      </footer>

      {/* --- PRIVACY POLICY MODAL --- */}
      {isPrivacyModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={() => setIsPrivacyModalOpen(false)}>
          <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[80vh] flex flex-col relative shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="p-4 md:p-6 border-b flex justify-between items-center sticky top-0 bg-white rounded-t-2xl z-10">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-raleway">Privacy Policy</h2>
              <button onClick={() => setIsPrivacyModalOpen(false)} className="text-slate-400 hover:text-red-500 transition-colors font-bold text-2xl px-2">✕</button>
            </div>
            <div className="p-4 md:p-6 overflow-y-auto text-slate-600 space-y-4 font-inter text-sm leading-relaxed">
              
              {/* PASTE YOUR PRIVACY POLICY TEXT BELOW HERE */}
              <div className="space-y-4">
                <p><strong>Last updated:</strong> 29 April 2026</p>
                <p>This Privacy Policy explains how AKY Medical Ltd (trading as Healing PRP Clinics) collects, uses, and protects your personal information across our website (healing-prp.co.uk) and clinics.</p>
                
                <h3 className="font-bold text-slate-800 mt-4">1. Information We Collect</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Contact Details:</strong> Name, DOB, email, phone, address, and GP details.</li>
                  <li><strong>Medical Information:</strong> Medical history, medications, allergies, treatment records, and clinical photographs. Intimate health data is treated as highly sensitive.</li>
                  <li><strong>Booking & Technical Data:</strong> Enquiry forms, payment status (securely processed via 3rd parties), and basic website analytics (IP address, cookies).</li>
                </ul>

                <h3 className="font-bold text-slate-800 mt-4">2. How & Why We Use Your Data</h3>
                <p>We process your data to respond to enquiries, provide safe healthcare and treatments, manage bookings, and meet our legal and regulatory obligations. Our lawful bases for processing include fulfilling a contract, legal obligation, legitimate interests, and your explicit consent.</p>

                <h3 className="font-bold text-slate-800 mt-4">3. Sharing & Storing Your Information</h3>
                <p>We only share data when necessary with treating clinicians, secure IT/booking systems, payment processors, or your GP (with your consent or if clinically necessary). We do not sell your personal information. Adult clinical records are legally kept for at least 8 years after your last contact.</p>

                <h3 className="font-bold text-slate-800 mt-4">4. Your Data Rights</h3>
                <p>You have the right to access, correct, or request deletion of your data, and to opt-out of marketing communications at any time. To exercise these rights, email us at <strong>info@healing-prp.co.uk</strong>.</p>
              </div>
              
            </div>
          </div>
        </div>
      )}

      {/* --- TERMS & CONDITIONS MODAL --- */}
      {isTermsModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={() => setIsTermsModalOpen(false)}>
          <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[80vh] flex flex-col relative shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="p-4 md:p-6 border-b flex justify-between items-center sticky top-0 bg-white rounded-t-2xl z-10">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-raleway">Booking Terms & Conditions</h2>
              <button onClick={() => setIsTermsModalOpen(false)} className="text-slate-400 hover:text-red-500 transition-colors font-bold text-2xl px-2">✕</button>
            </div>
            <div className="p-4 md:p-6 overflow-y-auto text-slate-600 space-y-4 font-inter text-sm leading-relaxed">
              
              {/* PASTE YOUR TERMS & CONDITIONS TEXT BELOW HERE */}
              <div className="space-y-4">
                <p><strong>Last updated:</strong> 29 April 2026</p>
                <p>By booking an appointment, submitting an enquiry, or proceeding with treatment at Healing PRP Clinics, you agree to the following terms.</p>

                <h3 className="font-bold text-slate-800 mt-4">1. Medical Disclaimer & Eligibility</h3>
                <p>Website information does not replace personalised medical advice. You must be at least 18 years old and provide accurate, complete medical history. We reserve the right to decline treatment if it is deemed clinically inappropriate or unsafe.</p>

                <h3 className="font-bold text-slate-800 mt-4">2. Consultations & Outcomes</h3>
                <p>All treatments are subject to a doctor-led assessment. &quot;Free consultations&quot; refer to an initial screening and do not include diagnostic tests, treatments, or extended medical reviews. Because individual biology varies, we cannot guarantee specific treatment outcomes.</p>

                <h3 className="font-bold text-slate-800 mt-4">3. Payments, Cancellations & Refunds</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Cancellations:</strong> We require at least 48 hours’ notice to cancel or reschedule. Late cancellations or no-shows may result in the loss of your deposit or a cancellation fee.</li>
                  <li><strong>Refunds:</strong> Completed consultations and treatments are non-refundable. If a treatment package is stopped early, refunds are calculated by deducting used sessions at the standard single-session price.</li>
                </ul>

                <h3 className="font-bold text-slate-800 mt-4">4. Patient Responsibilities & Aftercare</h3>
                <p>You agree to follow all pre-treatment and aftercare advice provided. Failure to adhere to aftercare instructions may increase the risk of complications or poor outcomes. Please arrive on time; late arrivals may result in a shortened or cancelled appointment.</p>

                <h3 className="font-bold text-slate-800 mt-4">5. Liability & Governing Law</h3>
                <p>Healing PRP Clinics is not liable for issues arising from undisclosed medical history, failure to follow aftercare, or unrealistic expectations. These terms are governed by the laws of England and Wales. For any questions, contact <strong>info@healing-prp.co.uk</strong>.</p>
              </div>
              
            </div>
          </div>
        </div>
      )}

      {/* Only loaded when isAssessmentOpen becomes true */}
      {isAssessmentOpen && (
        <OnlineAssessmentModal isOpen={isAssessmentOpen} onClose={() => setIsAssessmentOpen(false)} />
      )}
    </>
  );
}
