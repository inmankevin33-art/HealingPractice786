"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  FaPlus,
  FaMinus,
  FaBatteryQuarter,
  FaHourglassEnd,
  FaFeather,
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
  FaChevronDown,
  FaStethoscope,
  FaUserShield,
  FaVial,
  FaUserMd,
  FaFileAlt,
  FaShieldAlt,
  FaInfoCircle
} from "react-icons/fa";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/ContactCTASection";
import TrustReviews from "@/components/TrustReviews";
import OnlineAssessmentModal from "@/components/OnlineAssessmentModal";

type FaqType = {
  question: string;
  answer: string;
};

interface ErectileDysfunctionProps {
  locationName?: string;
  servingAreas?: string;
  pShotLink?: string;
  faqs: FaqType[]; 
}

export default function ErectileDysfunctionClient({
  locationName = "St Albans",
  servingAreas = "Harpenden • Luton • Watford • Hertfordshire",
  pShotLink = "/p-shot",
  faqs, 
}: ErectileDysfunctionProps) {
  
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showAllFaqs, setShowAllFaqs] = useState(false); 
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);

  // --- LOCATION LOGIC ---
  const isBirmingham = locationName === "Birmingham";
  const isHampstead = locationName === "Hampstead";
  
  const basePath = isBirmingham ? "/birmingham" : isHampstead ? "/hampstead" : "";
  const shockwaveLink = `${basePath}/shockwave-therapy-erectile-dysfunction`;

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoaded(true);
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

   const handleAction = (e: React.MouseEvent) => {
    e.preventDefault();

    // 1. TRACKING FIX: Log intent, not the final lead
    if (typeof window !== "undefined") {
      const w = window as Window & { gtag?: (...args: unknown[]) => void };
      if (w.gtag) {
        // Changed from "generate_lead" to a custom intent event.
        // This stops Google Ads from optimizing for clickers instead of form fillers.
        w.gtag("event", "contact_initiated", { 
          event_category: "engagement",
          event_label: "clicked_book_consultation",
          page_path: window.location.pathname,
        });
      }
    }

    // 2. DISPATCH EVENT
    window.dispatchEvent(new CustomEvent("open-contact-drawer"));

    // 3. SCROLLING FIX: More robust scroll handling
    // We use requestAnimationFrame to ensure the browser has painted the current frame.
    // If the section is already on the page, it scrolls immediately. 
    // We also include a safer fallback just in case the component mounts lazily.
    requestAnimationFrame(() => {
      const section = document.getElementById("contact-form-section");
      const headerOffset = 100; // Adjust this to match your sticky header height

      if (section) {
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      } else {
        // Fallback for lazily rendered elements
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
  
  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i * 0.15, ease: "easeOut" },
    }),
  };

  const quickSteps = [
    {
      title: "Complete a confidential assessment",
      description: "Tell us about your symptoms, medical history, and any current treatment.",
      icon: FaFileAlt,
    },
    {
      title: "Doctor-led consultation",
      description: "We review likely contributing factors and discuss the most suitable options.",
      icon: FaUserMd,
    },
    {
      title: "Move forward with a tailored plan",
      description: "This may include medication support, shockwave therapy, P-Shot, or a combined approach where appropriate.",
      icon: FaCheckCircle,
    },
  ];

  const symptoms = [
    {
      title: "Struggling to get an erection",
      description: "You may find it harder than before to achieve an erection even when desire is still there.",
      icon: FaBatteryQuarter,
      color: "bg-rose-50 text-rose-600",
    },
    {
      title: "Losing firmness during intimacy",
      description: "An erection may start but become softer or harder to maintain during sex.",
      icon: FaHourglassEnd,
      color: "bg-indigo-50 text-indigo-600",
    },
    {
      title: "Tablets no longer feel enough",
      description: "Viagra or Cialis may still help, but the response may feel weaker or less reliable than before.",
      icon: FaPills,
      color: "bg-[#f0f0ff] text-[#4041d1]",
    },
    {
      title: "Side effects from ED tablets",
      description: "Some men want an alternative approach because of headaches, flushing, or other unwanted effects.",
      icon: FaVial,
      color: "bg-teal-50 text-teal-600",
    },
    {
      title: "Confidence has dropped",
      description: "ED often affects more than physical function and can begin to impact self-esteem and relationships.",
      icon: FaUserShield,
      color: "bg-amber-50 text-amber-600",
    },
    {
      title: "You want a medically guided plan",
      description: "You are not looking for a quick online prescription, but a proper assessment and a tailored treatment strategy.",
      icon: FaStethoscope,
      color: "bg-emerald-50 text-emerald-600",
    },
  ];

  const protocolSteps = [
    { number: 1, icon: FaWaveSquare, title: "Shockwave Therapy", description: "Low-intensity shockwave therapy supporting blood vessel health." },
    { number: 2, icon: FaSyringe, title: "P-Shot (PRP Treatment)", description: "PRP prepared from your own blood to support tissue repair." },
    { number: 3, icon: FaDna, title: "Hormone & Blood Review", description: "Reviewing testosterone and health markers to identify limiting factors." },
    { number: 4, icon: FaPills, title: "Medication & Health", description: "Tailored medication and optimization of diabetes or blood pressure." },
    { number: 5, icon: FaCheckCircle, title: "Recovery Over Time", description: "A structured follow-up plan for gradual, natural improvement." },
  ];

  const displayedFaqs = showAllFaqs ? faqs : faqs.slice(0, 5);

  return (
    <>
      {/* --- HERO SECTION --- */}
      <div className="relative min-h-[100vh] md:min-h-[calc(100vh-4rem)] overflow-hidden flex items-center justify-center bg-black">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" /> 
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/90 z-10" />
          <Image 
            src="/ed-doctor-consultation.webp" 
            alt="Erectile dysfunction treatment consultation" 
            fill
            priority
            quality={85}
            className="object-cover opacity-90"
          />
        </div>

        {/* Added pb-48 here to ensure content doesn't get hidden behind the trust badges on mobile */}
        <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 pb-48 md:pb-24">
          <motion.div 
            custom={0} initial="hidden" animate={isLoaded ? "visible" : "hidden"} variants={fadeUpVariants}
            className="inline-block px-5 py-2 mb-6 border border-white/20 rounded-full bg-[#1e293b]/50 backdrop-blur-md shadow-lg"
          >
            <span className="text-blue-100 text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase font-inter">Doctor-Led Private Clinic</span>
          </motion.div>

          <motion.h1 
            custom={1} initial="hidden" animate={isLoaded ? "visible" : "hidden"} variants={fadeUpVariants}
            className="md:text-6xl text-4xl font-bold font-raleway text-white leading-tight mb-6 tracking-tight drop-shadow-lg"
          >
            Erectile Dysfunction <br className="hidden sm:block"/> Treatment in {isHampstead ? "Hampstead, London" : locationName}
          </motion.h1>

          {/* Shortened Hero Paragraph */}
         <motion.p 
            custom={2} initial="hidden" animate={isLoaded ? "visible" : "hidden"} variants={fadeUpVariants}
            className="text-base md:text-lg text-blue-50/90 font-inter leading-relaxed max-w-2xl mx-auto mb-10 font-medium drop-shadow-md"
          >
            Private, doctor-led care for erection difficulties, reduced firmness, or tablet side effects. Start with a <strong>free confidential consultation</strong> to assess the cause and discuss tailored options like medication, Shockwave, or P-Shot treatment.
          </motion.p>

          <motion.div 
            custom={3} initial="hidden" animate={isLoaded ? "visible" : "hidden"} variants={fadeUpVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button 
              onClick={handleAction}
              className="px-8 py-4 w-full sm:w-auto flex items-center justify-center text-sm cursor-pointer bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-xl font-bold transition-all duration-300 gap-2 shadow-[0_0_20px_rgba(64,65,209,0.3)] hover:shadow-[0_0_25px_rgba(64,65,209,0.5)] active:scale-95 font-inter"
            >
              <FaEnvelope className="w-4 h-4" /> Book Free Confidential Consultation
            </button>
            <button 
              onClick={() => setIsAssessmentOpen(true)}
              className="px-8 py-4 w-full sm:w-auto flex items-center justify-center text-sm cursor-pointer bg-white text-[#4041d1] hover:bg-slate-50 rounded-xl font-bold transition-all duration-300 gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] active:scale-95 font-inter"
            >
              Start Free Online Assessment
            </button>
          </motion.div>

          {/* AD BENEFIT CHIPS */}
          <motion.div 
            custom={4} initial="hidden" animate={isLoaded ? "visible" : "hidden"} variants={fadeUpVariants}
            className="flex flex-wrap justify-center gap-3 mt-10"
          >
            {["Tablets not working as well?", "Doctor-led treatment options", "Free confidential consultation", "Discreet private care"].map((chip) => (
              <div key={chip} className="flex items-center gap-1.5 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-[10px] md:text-xs font-bold text-white uppercase tracking-wider backdrop-blur-sm">
                <FaCheckCircle className="text-blue-400" /> {chip}
              </div>
            ))}
          </motion.div>

          <motion.div 
            custom={5} initial="hidden" animate={isLoaded ? "visible" : "hidden"} variants={fadeUpVariants}
            className="inline-flex items-center justify-center gap-2 px-6 py-2 text-white/60 rounded-full text-[10px] md:text-xs mt-6 font-bold uppercase tracking-widest font-inter"
          >
             <FaMapMarkerAlt className="mb-0.5" /> 
             <span>Serving: {servingAreas}</span>
          </motion.div>
        </div>

        {/* --- HERO TRUST BADGES (Fixed for Mobile) --- */}
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
                Your consultation and treatment are carried out by Dr Syed Abdi, a GMC-registered doctor with experience in men’s intimate health, erectile dysfunction assessment, shockwave therapy, PRP-based treatments and non-surgical intimate health procedures. The appointment is discreet, private and focused on understanding the likely cause of your symptoms, checking suitability and discussing realistic treatment options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS --- */}
      <section className="py-24 bg-slate-50 font-inter border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-4">How the process works</h2>
            <p className="text-slate-600 text-lg">The aim is to make the process clear, discreet, and medically guided from the start.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickSteps.map((step, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm relative group hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-[#4041d1] text-2xl group-hover:scale-110 transition-transform">
                  <step.icon />
                </div>
                <h3 className="text-xl font-bold mb-3 font-raleway">Step {idx + 1}: {step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-8 bg-blue-600 rounded-2xl text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-blue-900/20">
            <p className="text-lg font-medium max-w-2xl">
              There is no pressure to proceed. The purpose of the consultation is to help you understand the likely cause of the problem and which treatment options may be suitable for you.
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
      
      {/* --- SECTION 3 & 4: THE CAUSE --- */}
      <section className="py-24 bg-white font-inter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-blue-50/50 p-10 rounded-3xl border border-blue-100">
                <span className="text-[#4041d1] font-bold tracking-widest text-xs uppercase mb-3 block">Treatment Planning</span>
                <h3 className="text-3xl font-raleway font-bold text-slate-900 mb-6">
                  The right treatment depends on the cause
                </h3>
                <p className="text-slate-600 text-base leading-relaxed mb-6">
                  Not every case of erectile dysfunction is the same. Some men are better suited to medication optimisation, while others may benefit from circulation-focused treatment such as shockwave therapy or PRP-based options such as the P-Shot.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Erection quality and firmness",
                    "Response to Viagra or Cialis",
                    "Circulation and vascular factors",
                    "Hormonal and metabolic health",
                    "Medication side effects",
                    "Confidence and relationship impact",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                      <FaCheckCircle className="text-[#4041d1] shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={handleAction}
                  className="w-full sm:w-max px-8 py-3.5 bg-[#4041d1] text-white rounded-xl font-bold transition-all duration-300 text-sm flex items-center justify-center gap-2 group shadow-xl shadow-[#4041d1]/20 active:scale-95"
                >
                  Book Free Confidential Consultation
                  <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

            <div className="p-10">
              <h3 className="text-3xl font-raleway font-bold text-slate-900 mb-6">Why choose a doctor-led review?</h3>
              <p className="text-slate-600 text-base leading-relaxed mb-6">
                A proper doctor-led assessment helps identify contributing factors, review treatment suitability properly, and avoid a one-size-fits-all approach.
              </p>
              <div className="space-y-4">
                 <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <h4 className="font-bold text-slate-900 mb-1 italic">Medical assessment first</h4>
                    <p className="text-sm text-slate-600">Treatment recommendations are based on your symptoms, medical history, current medication, and wider health factors.</p>
                 </div>
                 <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <h4 className="font-bold text-slate-900 mb-1 italic">Options beyond standard tablets</h4>
                    <p className="text-sm text-slate-600">Where appropriate, your plan may include medication support, shockwave therapy, P-Shot treatment, or a combined approach.</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SYMPTOMS GRID --- */}
      <section className="py-24 bg-slate-50 font-inter border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-6">Who this page is for</h2>
            <p className="text-slate-600 text-lg">
              This service may be appropriate for men who recognise one or more of the following and want a confidential doctor-led discussion about the next step:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {symptoms.map((symptom, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
              >
                <div className={`w-14 h-14 rounded-2xl ${symptom.color} flex items-center justify-center mb-6 text-2xl transition-transform group-hover:scale-110`}><symptom.icon /></div>
                <h3 className="text-xl font-raleway font-bold text-slate-900 mb-3 group-hover:text-[#4041d1] transition-colors">{symptom.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{symptom.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     {/* --- SECTION 7: WHAT IT CAN / CANNOT DO --- */}
      <section className="py-24 bg-white font-inter">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-6">What P-Shot and Shockwave Therapy Can — and Cannot — Do</h3>
            <p className="text-slate-600 text-lg mb-8">
              These treatments may support erectile function in selected patients, particularly where reduced blood flow or tissue health is part of the picture. Honest assessment is essential, because not every patient will respond in the same way.
            </p>

            {/* --- TIME & SAFETY METRICS BAR --- */}
            <div className="inline-flex flex-wrap justify-center items-center gap-4 md:gap-8 px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl">
              <div className="flex items-center gap-2.5">
                 <FaShieldAlt className="text-[#4041d1] w-5 h-5" />
                 <span className="text-slate-800 font-bold text-xs md:text-sm uppercase tracking-wide">Non-Surgical</span>
              </div>
              <div className="hidden md:block w-1.5 h-1.5 bg-slate-300 rounded-full"></div>
              <div className="flex items-center gap-2.5">
                 <FaCheckCircle className="text-[#4041d1] w-5 h-5" />
                 <span className="text-slate-800 font-bold text-xs md:text-sm uppercase tracking-wide">No Downtime</span>
              </div>
              <div className="hidden md:block w-1.5 h-1.5 bg-slate-300 rounded-full"></div>
              <div className="flex items-center gap-2.5">
                 <FaHourglassEnd className="text-[#4041d1] w-5 h-5" />
                 <span className="text-slate-800 font-bold text-xs md:text-sm uppercase tracking-wide">Takes ~30 Mins</span>
              </div>
            </div>
            
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-blue-50/50 p-8 rounded-3xl border border-blue-100">
              <h4 className="text-xl font-raleway font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="w-2 h-8 bg-[#4041d1] rounded-full block"></span> What these support
              </h4>
              <ul className="space-y-4">
                {[
                  "May support penile blood flow in selected patients",
                  "May support tissue health and vascular responsiveness",
                  "May help improve erectile function over time",
                  "May form part of a broader doctor-led treatment plan",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FaCheckCircle className="text-[#4041d1] mt-1 shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
              <h4 className="text-xl font-raleway font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="w-2 h-8 bg-slate-400 rounded-full block"></span> Limitations
              </h4>
              <ul className="space-y-4">
                {[
                  "Results vary between individuals",
                  "Improvement is usually gradual, not instant",
                  "Suitability depends on the underlying cause",
                  "A medical review is needed before treatment is recommended",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-500">
                    <FaCheckCircle className="mt-1 shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* --- NEW INTERNAL LINKS --- */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link 
              href={pShotLink || "/p-shot"} 
              className="px-8 py-4 w-full sm:w-auto bg-[#4041d1] hover:bg-[#2a2bb8] text-white text-center rounded-xl font-bold transition-all duration-300 shadow-lg active:scale-95 text-sm md:text-base"
            >
              Learn more about P-Shot
            </Link>
            <Link 
              href={typeof shockwaveLink !== "undefined" ? shockwaveLink : "/shockwave-therapy-erectile-dysfunction"} 
              className="px-8 py-4 w-full sm:w-auto bg-[#4041d1] hover:bg-[#2a2bb8] text-white text-center rounded-xl font-bold transition-all duration-300 shadow-lg active:scale-95 text-sm md:text-base"
            >
              Learn more about Shockwave
            </Link>
          </div>

        </div>
      </section>
      
      {/* --- SECTION 6: THE PROTOCOL --- */}
      <section className="relative py-20 lg:py-28 bg-slate-50 overflow-hidden font-inter border-y border-slate-200">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-5 py-2 bg-white text-[#4041d1] rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 border border-slate-200 font-raleway shadow-sm">Our Treatment Approach</div>
            <h2 className="text-3xl md:text-5xl font-raleway font-bold text-slate-900 mb-8 tracking-tight">A Structured Doctor-Led Treatment Plan</h2>
          </div>

          <div className="max-w-7xl mx-auto mt-12 relative">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 px-8 py-4 bg-white border border-slate-200 rounded-full shadow-md">
                <span className="flex h-3 w-3 rounded-full bg-[#4041d1] animate-pulse" />
                <span className="text-sm font-bold text-slate-800 uppercase tracking-[0.2em] font-raleway">Treatment Phase: {protocolSteps[activeStep].title}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
              <div className="hidden lg:block absolute top-[80px] left-0 w-full h-[1px] border-t border-dashed border-slate-300 -z-10" />
              {protocolSteps.map((step, index) => (
                  <div
                    key={index}
                    className={`p-5 rounded-[2rem] border transition-all duration-300 h-full flex flex-col cursor-pointer ${activeStep === index ? "border-[#4041d1] bg-white shadow-xl scale-105 z-20" : "border-slate-200 bg-white opacity-80 hover:opacity-100"}`}
                    onClick={() => setActiveStep(index)}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all ${activeStep === index ? "bg-[#4041d1] text-white" : "bg-slate-100 text-slate-400"}`}><step.icon className="w-5 h-5" /></div>
                    <h3 className="font-raleway font-bold mb-2 text-base text-slate-900">{step.title}</h3>
                    <p className="text-xs leading-relaxed text-slate-600 font-inter">{step.description}</p>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 5: BLOOD TESTS --- */}
      <section className="py-24 bg-[#0A1128] font-inter relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 w-96 h-96 bg-[#4041d1] rounded-full blur-[120px] opacity-30 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
          <div className="mb-10 w-24 h-24 bg-[#151e32] rounded-full flex items-center justify-center border border-white/10 shadow-2xl mx-auto"><FaVial className="text-[#8ea3ff] text-4xl" /></div>
          <span className="text-[#8ea3ff] font-bold tracking-widest text-xs uppercase mb-4 block">Assessing The Bigger Picture</span>
          <h3 className="text-3xl md:text-5xl font-raleway font-bold text-white mb-6 leading-tight">Could blood tests or hormone review help?</h3>
          <p className="text-slate-300 text-base md:text-lg mb-10 max-w-2xl mx-auto">Where appropriate, doctor-led assessment may include discussion of blood tests. This is relevant if symptoms are worsening, tablets are becoming less effective, or you notice low energy.</p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {['Testosterone Levels', 'Cardiovascular Risk', 'Diabetes & HbA1c', 'Metabolic Health'].map((tag, i) => (
              <span key={i} className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-slate-300 text-sm font-medium">{tag}</span>
            ))}
          </div>
          <button 
            onClick={() => setIsAssessmentOpen(true)}
            className="px-8 py-4 bg-white hover:bg-slate-100 text-[#0A1128] rounded-xl font-bold transition-all text-sm flex items-center justify-center gap-2 group shadow-lg active:scale-95 font-inter"
          >
            Start Free Online Assessment
            <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
      
      {/* --- PRIVACY & DISCREET CARE (REASSURANCE SECTION) --- */}
      <section className="py-24 bg-white font-inter border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-1.5 bg-blue-50 text-[#4041d1] rounded-full text-xs font-bold uppercase tracking-wider mb-6">100% Confidential & Private</div>
          <h3 className="text-3xl md:text-5xl font-raleway font-bold text-slate-900 mb-8">Discreet, Private and Professional</h3>
          <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto mb-12">
            We understand that discussing sexual health can feel uncomfortable. That is why our clinics provide a private, respectful, and judgement-free environment where concerns are taken seriously and addressed with sensitivity.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 text-left">
            {["GMC-registered doctors", "Personalised treatment planning", "No GP referral required", "Discreet messaging & booking"].map((item, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-center gap-3">
                <FaCheckCircle className="text-[#4041d1] text-xl shrink-0" /> 
                <span className="text-slate-800 font-medium text-sm">{item}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <button
              onClick={handleAction}
              className="px-10 py-5 w-full md:w-auto bg-[#4041d1] text-white rounded-xl font-bold text-lg hover:bg-[#2a2bb8] transition-all shadow-xl shadow-blue-900/20 active:scale-95"
            >
              Book Free Confidential Consultation
            </button>
            <Link
              href={isBirmingham ? "/birmingham/prices" : isHampstead ? "/hampstead/prices" : "/prices"}
              className="px-10 py-5 w-full md:w-auto border-2 border-slate-200 text-slate-600 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all"
            >
              View Treatment Prices
            </Link>
          </div>
        </div>
      </section>
      
      {/* --- FAQs --- */}
      <section id="faqs" className="py-24 bg-slate-50 font-inter border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-5xl font-raleway font-bold text-slate-900 mb-6">Common Questions About Erectile Dysfunction Treatment</h2></div>
          <div className="space-y-4">
            {displayedFaqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <button className="w-full p-6 text-left flex items-center justify-between" onClick={() => toggleFAQ(index)}>
                  <h3 className="font-raleway font-bold text-slate-900 pr-8 text-base md:text-lg">{faq.question}</h3>
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all ${openFAQIndex === index ? 'bg-[#4041d1] text-white' : 'bg-[#4041d1]/10 text-[#4041d1]'}`}>
                    {openFAQIndex === index ? <FaMinus /> : <FaPlus />}
                  </div>
                </button>
                <AnimatePresence>
                  {openFAQIndex === index && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                      <div className="px-6 pb-8 border-t border-slate-100 pt-6"><p className="text-slate-600 leading-relaxed">{faq.answer}</p></div>
                    </motion.div>
                  )}
                </AnimatePresence>
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
      <Footer />
      <OnlineAssessmentModal isOpen={isAssessmentOpen} onClose={() => setIsAssessmentOpen(false)} />
    </>
  );
}
