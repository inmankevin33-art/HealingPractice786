"use client";

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
  FaUserMd
} from "react-icons/fa";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/ContactCTASection";
import TrustReviews from "@/components/TrustReviews";
import OnlineAssessmentModal from "@/components/OnlineAssessmentModal";

// --- INTERFACE FOR DYNAMIC PROPS ---
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

  const isBirmingham = locationName === "Birmingham";
  const basePath = isBirmingham ? "/birmingham" : "";

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoaded(true);
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  // --- UNIFIED ACTION HANDLER (Contact Drawer) ---
  const handleAction = (e: React.MouseEvent) => {
    e.preventDefault();

    // --- GA4 CONVERSION TRACKING ---
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
    setTimeout(() => {
      const section = document.getElementById("contact-form-section");
      if (section) {
        const headerOffset = 100;
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  // --- ANIMATION VARIANTS ---
  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.15,
        ease: "easeOut",
      },
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

  // --- DATA SECTIONS (UPDATED 6-CARD GRID) ---
  const symptoms = [
    {
      title: "Struggling to get an erection",
      description: "You may find it harder than before to achieve an erection when you want one, even when desire is still there.",
      icon: FaBatteryQuarter,
      color: "bg-rose-50 text-rose-600",
    },
    {
      title: "Losing it during intimacy",
      description: "An erection may start but become softer or harder to maintain during sex, which can feel frustrating and unsettling.",
      icon: FaHourglassEnd,
      color: "bg-indigo-50 text-indigo-600",
    },
    {
      title: "Erections not as firm as before",
      description: "You may notice reduced firmness, weaker response, or a change in overall sexual confidence.",
      icon: FaFeather,
      color: "bg-teal-50 text-teal-600",
    },
    {
      title: "Relying on Viagra or Cialis",
      description: "Tablets may help, but some men want to understand the underlying issue or explore a broader long-term plan.",
      icon: FaPills,
      color: "bg-[#f0f0ff] text-[#4041d1]",
    },
    {
      title: "Confidence has dropped",
      description: "ED often affects more than physical function alone. It can also impact confidence, self-esteem, and relationships.",
      icon: FaUserShield,
      color: "bg-amber-50 text-amber-600",
    },
    {
      title: "Wider health concerns",
      description: "ED can sometimes be linked to diabetes, blood pressure, circulation, hormonal changes, stress, or medication side effects.",
      icon: FaStethoscope,
      color: "bg-emerald-50 text-emerald-600",
    },
  ];

  // --- PROTOCOL SECTION (UPDATED 5-STEP PROCESS) ---
  const protocolSteps = [
    {
      number: 1,
      icon: FaWaveSquare,
      title: "Shockwave Therapy",
      description: "Low-intensity shockwave therapy may support blood vessel health and penile circulation in suitable patients.",
    },
    {
      number: 2,
      icon: FaSyringe,
      title: "PRP Treatment (P-Shot)",
      description: "PRP uses platelet-rich plasma prepared from your own blood and may support tissue repair and vascular responsiveness.",
    },
    {
      number: 3,
      icon: FaDna,
      title: "Hormone & Blood Review",
      description: "Where appropriate, we may review blood tests including testosterone to identify factors limiting progress.",
    },
    {
      number: 4,
      icon: FaPills,
      title: "Medication & Health",
      description: "Some men benefit from tailored medication support and broader optimisation of factors such as diabetes or blood pressure.",
    },
    {
      number: 5,
      icon: FaCheckCircle,
      title: "Recovery Over Time",
      description: "Where regenerative treatments are used, improvement is usually gradual. A structured follow-up plan is key.",
    },
  ];

  const displayedFaqs = showAllFaqs ? faqs : faqs.slice(0, 5);

  return (
    <>
      {/* --- HERO SECTION --- */}
      <div className="relative md:h-[calc(100vh-4rem)] pb-5 md:pb-0 lg:h-[calc(100vh-5rem)] overflow-hidden flex items-center justify-center bg-black">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" /> 
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/90 z-10" />
          <img 
            src="/ed-doctor-consultation.webp" 
            alt="Erectile dysfunction treatment consultation" 
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          />
        </div>

        <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 md:pb-24">
          
          <motion.div 
            custom={0}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeUpVariants}
            className="inline-block px-5 py-2 mb-6 border border-white/20 rounded-full bg-[#1e293b]/50 backdrop-blur-md transform-gpu shadow-lg"
          >
            <span className="text-blue-100 text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase font-inter">Doctor-Led Private Clinic</span>
          </motion.div>

          <motion.h1 
            custom={1}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeUpVariants}
            className="md:text-6xl text-4xl font-bold font-raleway text-white leading-tight mb-6 tracking-tight drop-shadow-lg"
          >
            Erectile Dysfunction <br className="hidden sm:block"/> Treatment in {locationName}
          </motion.h1>

         <motion.p 
            custom={2}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeUpVariants}
            className="text-base md:text-lg text-blue-50/90 font-inter leading-relaxed max-w-2xl mx-auto mb-10 font-medium drop-shadow-md"
          >
            Private, doctor-led care for men with erection difficulties, reduced firmness, or increasing reliance on tablets. Treatment may include <Link href={`${basePath}/shockwave-therapy-erectile-dysfunction`} className="font-bold underline decoration-white/40 hover:decoration-white hover:text-white transition-all duration-300">Shockwave Therapy</Link>, <Link href={`${basePath}/p-shot`} className="font-bold underline decoration-white/40 hover:decoration-white hover:text-white transition-all duration-300">P-Shot</Link>, and <Link href={`${basePath}/personalised-ed-medication`} className="font-bold underline decoration-white/40 hover:decoration-white hover:text-white transition-all duration-300">Tailored Medication Support</Link> where appropriate.
          </motion.p>

          <motion.div 
            custom={3}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeUpVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* Low-Friction Assessment Button (White) */}
            <button 
              onClick={() => setIsAssessmentOpen(true)}
              className="px-8 py-4 w-full sm:w-auto flex items-center justify-center text-sm cursor-pointer bg-white text-[#4041d1] hover:bg-slate-50 rounded-xl font-bold transition-all duration-300 gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] active:scale-95 font-inter"
            >
              Free Confidential Online Assessment
            </button>
            
            {/* High-Intent Contact Button (Blue) */}
            <button 
              onClick={handleAction}
              className="px-8 py-4 w-full sm:w-auto flex items-center justify-center text-sm cursor-pointer bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-xl font-bold transition-all duration-300 gap-2 shadow-[0_0_20px_rgba(64,65,209,0.3)] hover:shadow-[0_0_25px_rgba(64,65,209,0.5)] active:scale-95 font-inter"
            >
              <FaEnvelope className="w-4 h-4" /> Book a Confidential Consultation
            </button>
          </motion.div>

          <motion.div 
            custom={4}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeUpVariants}
            className="inline-flex items-center justify-center gap-2 px-6 py-2 bg-white/5 text-white rounded-full text-[10px] md:text-xs mt-12 font-bold uppercase tracking-widest font-inter border border-white/10 backdrop-blur-md shadow-sm"
          >
             <FaMapMarkerAlt className="text-white/80 mb-0.5" /> 
             <span>Serving: {servingAreas}</span>
          </motion.div>

        </div>

      {/* --- HERO TRUST BADGES --- */}
        <div className={`md:block absolute hidden bottom-0 left-0 right-0 bg-[#0A1128]/95 backdrop-blur-xl border-t border-white/10 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} shadow-[0_-10px_40px_rgba(0,0,0,0.3)]`}>
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
                    <span className="text-white text-[9px] font-bold uppercase tracking-widest leading-tight font-inter">Years Experience</span>
                    <span className="text-blue-400 text-[9px] font-semibold tracking-wider uppercase leading-tight mt-0.5 font-inter">Doctor-Led Care</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center items-center px-2 opacity-90 hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-3">
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

   {/* --- SECTION 1: INTRO / PATIENT CENTRED APPROACH --- */}
      <section className="py-20 bg-white font-inter">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-[#4041d1] font-bold tracking-widest text-sm md:text-base uppercase mb-2 block">Why Patients Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-6">
              A Personalised, Respectful Approach to Erectile Dysfunction
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              At Healing-PRP Clinics, <Link href={`${basePath}/our-doctor`} className="text-[#4041d1] font-bold hover:underline transition-all duration-300">Dr Syed Abdi</Link> takes a discreet, patient-centred approach focused on understanding the cause rather than offering a one-size-fits-all solution. Your consultation includes a review of your symptoms, medical history, and possible contributing factors, with treatment options tailored to your needs and goals.
            </p>
            <div className="w-24 h-1 bg-[#4041d1] mx-auto mt-10 rounded-full transform-gpu"></div>
        </div>
      </section>
      
      {/* --- SECTION 3 & 4: ASSESSMENT & WHAT IMPROVES --- */}
      <section className="py-24 bg-white font-inter border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            
            {/* Left Side: Assessment */}
            <div className="bg-blue-50/50 p-10 rounded-3xl border border-blue-100 h-full flex flex-col">
              <div className="flex-grow">
                <span className="text-[#4041d1] font-bold tracking-widest text-xs uppercase mb-3 block">Private ED Assessment</span>
                <h3 className="text-3xl font-raleway font-bold text-slate-900 mb-6">
                  The right treatment depends on the cause
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-4">
                  Not every case of erectile dysfunction is the same, and not every patient is suited to the same treatment.
                </p>
                <p className="text-slate-600 text-base leading-relaxed mb-4">
                  Some men are better suited to medication optimisation. Some may be more appropriate for shockwave-led treatment where circulation is a contributing factor. Some may be suitable for PRP-based options, while others may benefit most from a combined plan.
                </p>
                <p className="text-slate-600 text-base leading-relaxed mb-8">
                  A proper doctor-led assessment helps decide what may be most appropriate in your case, rather than pushing one treatment for everyone.
                </p>
              </div>

              {/* Assessment CTA Button */}
              <button 
                onClick={() => setIsAssessmentOpen(true)}
                className="w-full sm:w-max px-8 py-3.5 bg-white text-[#4041d1] border border-blue-200 hover:border-[#4041d1]/50 hover:bg-blue-50/80 rounded-xl font-bold transition-all duration-300 text-sm flex items-center justify-center gap-2 group shadow-sm active:scale-95 font-inter mt-auto"
              >
                Free Confidential Online Assessment
                <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right Side: What Improves */}
            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 h-full">
              <span className="text-slate-500 font-bold tracking-widest text-xs uppercase mb-3 block">What Treatment May Help</span>
              <h3 className="text-3xl font-raleway font-bold text-slate-900 mb-6">
                Our goal is to help you move forward with clarity
              </h3>
              <p className="text-slate-600 text-base leading-relaxed mb-6">
                Depending on the underlying cause, severity of symptoms, and your overall health, treatment may help support:
              </p>
              <ul className="space-y-4 mb-6">
                {[
                  "Improved erection quality and firmness",
                  "Better consistency during intimacy",
                  "Stronger confidence and reduced performance anxiety",
                  "A more structured plan where tablets alone are no longer enough",
                  "Clearer understanding of contributing factors like circulation or hormones"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FaCheckCircle className="text-[#4041d1] mt-1 shrink-0" />
                    <span className="text-slate-700 text-sm md:text-base font-medium leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-slate-500 text-sm italic border-t border-slate-200 pt-4">
                Not every patient is suitable for every treatment, which is why assessment matters. The most effective plan is often the one tailored properly from the start.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* --- SECTION 2: SYMPTOMS GRID --- */}
      <section className="py-24 bg-slate-50 font-inter relative z-30 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-6"
            >
              Signs You May Benefit From ED Assessment and Treatment
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-600 text-lg leading-relaxed font-inter"
            >
              If any of the following feel familiar, a confidential doctor-led assessment may help clarify the cause and the most suitable next steps.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {symptoms.map((symptom, index) => (
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
                  className={`w-14 h-14 rounded-2xl ${symptom.color} flex items-center justify-center mb-6 text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                >
                  <symptom.icon />
                </div>
                <h3 className="text-xl font-raleway font-bold text-slate-900 mb-3 group-hover:text-[#4041d1] transition-colors">
                  {symptom.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-inter">
                  {symptom.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 7: WHAT IT CAN / CANNOT DO (MOVED HERE) --- */}
      <section className="py-24 bg-white font-inter border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-6">
              What P-Shot and Shockwave Therapy Can — and Cannot — Do
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              P-Shot and low-intensity shockwave therapy are doctor-led, non-surgical options that may support vascular health, tissue repair, and erectile function in selected patients, particularly where reduced blood flow is a contributing factor.
            </p>
            <p className="text-slate-600 text-base leading-relaxed">
              For some men, these treatments form part of a broader plan aimed at improving function more naturally rather than relying only on symptom-based solutions. However, honest assessment is essential, because not every patient will respond in the same way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* COLUMN 1 */}
            <div className="bg-blue-50/50 p-8 rounded-3xl border border-blue-100">
              <h4 className="text-xl font-raleway font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="w-2 h-8 bg-[#4041d1] rounded-full block"></span>
                What these treatments may help support
              </h4>
              <ul className="space-y-4">
                {[
                  "Improved penile blood flow and vascular responsiveness over time",
                  "Healthier erectile tissue and smooth muscle support",
                  "Improved sensitivity or responsiveness in selected cases",
                  "Greater confidence and more reliable function as tissue health improves",
                  "Support for men seeking a broader plan beyond tablets alone",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FaCheckCircle className="text-[#4041d1] mt-1 shrink-0" />
                    <span className="text-slate-700 text-sm md:text-base font-medium leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUMN 2 */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
              <h4 className="text-xl font-raleway font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="w-2 h-8 bg-slate-400 rounded-full block"></span>
                Important limitations to understand
              </h4>
              <ul className="space-y-4">
                {[
                  "Results vary between individuals and depend on age, overall health, diabetes control, circulation, medications, and the underlying cause.",
                  "These treatments are not an instant fix and improvement is usually gradual.",
                  "May be less effective where there is advanced structural disease, severe nerve damage, or irreversible loss of blood supply.",
                  "Not every patient is suitable for P-Shot or shockwave therapy.",
                  "A medical consultation is important to assess suitability and identify contributing factors properly."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 shrink-0 text-slate-400">
                       <FaCheckCircle className="text-slate-400" /> 
                    </div>
                    <span className="text-slate-700 text-sm md:text-base font-medium leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="text-center max-w-3xl mx-auto mt-6 pt-6 border-t border-slate-100">
            <p className="text-sm text-slate-500 italic">
              Any regenerative treatment should be considered in the context of your wider medical history, current medication, and treatment goals. Recommendations are always based on individual assessment.
            </p>
          </div>
          
          {/* --- DEDICATED TREATMENT LINKS (SIDE-BY-SIDE) --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            
            {/* P-Shot Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm text-left flex flex-col h-full justify-between gap-6 hover:shadow-md transition-shadow duration-300">
              <div>
                <h4 className="text-lg font-raleway font-bold text-slate-900 mb-2">
                  Interested in P-Shot specifically?
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  For patients interested in P-Shot treatment specifically, further details about the procedure, process, and suitability are available on our dedicated page.
                </p>
              </div>
              <Link 
                href={pShotLink} 
                className="w-full sm:w-max px-8 py-3 bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-xl font-bold transition-all duration-300 text-sm flex items-center justify-center gap-2 group shadow-xl shadow-[#4041d1]/20 active:scale-95 font-inter"
              >
                View P-Shot Treatment
                <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Shockwave Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm text-left flex flex-col h-full justify-between gap-6 hover:shadow-md transition-shadow duration-300">
              <div>
                <h4 className="text-lg font-raleway font-bold text-slate-900 mb-2">
                  Interested in Shockwave Therapy?
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  For patients interested in low-intensity shockwave therapy, further details about the mechanism, process, and suitability are available on our dedicated page.
                </p>
              </div>
              <Link 
                href={`${basePath}/shockwave-therapy-erectile-dysfunction`} 
                className="w-full sm:w-max px-8 py-3 bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-xl font-bold transition-all duration-300 text-sm flex items-center justify-center gap-2 group shadow-xl shadow-[#4041d1]/20 active:scale-95 font-inter"
              >
                View Shockwave Treatment
                <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* --- SE{/* --- SECTION 6: PROTOCOL SECTION (MOVED ABOVE BLOOD TESTS) --- */}
      <section
        className="relative py-20 lg:py-28 bg-slate-50 overflow-hidden font-inter border-y border-slate-200"
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
              className="inline-block px-5 py-2 bg-white text-[#4041d1] rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 border border-slate-200 font-raleway shadow-sm"
              variants={itemVariants}
            >
              Our Approach
            </motion.div>
            <motion.h2
              className="text-3xl md:text-5xl font-raleway font-bold text-slate-900 leading-tight mb-8 tracking-tight"
              variants={itemVariants}
            >
              A Structured, Doctor-Led Approach to ED Treatment
            </motion.h2>
            <motion.p
              className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto font-medium font-inter"
              variants={itemVariants}
            >
              We do not believe in pushing one treatment on every patient. Erectile dysfunction can have vascular, hormonal, metabolic, medication-related, or psychological contributors, and treatment works best when these are properly considered.
            </motion.p>
          </motion.div>

          <div className="max-w-7xl mx-auto mt-12 relative">
            <div className="text-center mb-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white border border-slate-200 rounded-full shadow-md"
                >
                  <span className="flex h-3 w-3 rounded-full bg-[#4041d1] animate-pulse" />
                  <span className="text-sm font-bold text-slate-800 uppercase tracking-[0.2em] font-raleway">
                    Where appropriate: {protocolSteps[activeStep].title}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="hidden lg:block absolute top-[80px] left-0 w-full h-[1px] border-t border-dashed border-slate-300 -z-10" />
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
                      className={`p-5 rounded-[2rem] border transition-all duration-300 h-full flex flex-col ${
                        isActive
                          ? "border-[#4041d1] bg-white shadow-xl scale-105 z-20"
                          : "border-slate-200 bg-white opacity-80 hover:opacity-100 hover:border-[#4041d1]/50"
                      }`}
                    >
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                          isActive
                            ? "bg-[#4041d1] text-white shadow-md scale-110"
                            : "bg-slate-100 text-slate-400 group-hover:text-[#4041d1]"
                        }`}
                      >
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3
                        className={`font-raleway font-bold mb-2 text-base transition-colors ${
                          isActive ? "text-slate-900" : "text-slate-700"
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p
                        className={`text-xs leading-relaxed font-inter transition-colors ${
                          isActive ? "text-slate-600 font-medium" : "text-slate-500"
                        }`}
                      >
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SECTION 5: BLOOD TESTS / HORMONE REVIEW BANNER (FULLY CENTERED) --- */}
      <section className="py-24 bg-[#0A1128] font-inter relative overflow-hidden border-b border-[#1a2342]">
        {/* Subtle background decorations */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-[#4041d1] rounded-full blur-[120px] opacity-30 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-72 h-72 bg-teal-600/20 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
          
          {/* Centered Glowing Icon */}
          <div className="mb-10 relative">
            <div className="absolute inset-0 bg-[#4041d1] blur-2xl opacity-40 rounded-full animate-pulse"></div>
            <div className="w-24 h-24 bg-[#151e32] rounded-full flex items-center justify-center border border-white/10 relative z-10 shadow-2xl mx-auto">
              <FaVial className="text-[#8ea3ff] text-4xl" />
            </div>
          </div>

          {/* Text Content */}
          <span className="text-[#8ea3ff] font-bold tracking-widest text-xs md:text-sm uppercase mb-4 block">Assessing The Bigger Picture</span>
          <h3 className="text-3xl md:text-5xl font-raleway font-bold text-white mb-6 leading-tight max-w-3xl">
            Could blood tests or hormone review help?
          </h3>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            In some men, erectile dysfunction may be influenced by wider medical factors. Where appropriate, doctor-led assessment may include discussion of blood tests and hormone review. This is especially relevant if symptoms are worsening, tablets are becoming less effective, or you notice reduced energy or lower libido.
          </p>
          
          {/* Centered Health Markers Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {['Testosterone Levels', 'Cardiovascular Risk', 'Diabetes & HbA1c', 'Metabolic Health'].map((tag, i) => (
              <span key={i} className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-slate-300 text-sm font-medium tracking-wide">
                {tag}
              </span>
            ))}
          </div>

          {/* Centered Button */}
          <button 
            onClick={() => setIsAssessmentOpen(true)}
            className="px-8 py-4 bg-white hover:bg-slate-100 text-[#0A1128] rounded-xl font-bold transition-all duration-300 text-sm flex items-center justify-center gap-2 group shadow-lg active:scale-95 font-inter w-full sm:w-max mx-auto"
          >
            Free Confidential Online Assessment
            <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
      
      {/* --- SECTIONS 8 & 9: FIRST VISIT & EARLY ASSESSMENT --- */}
      <section className="py-24 bg-slate-50 font-inter border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* First Visit */}
            <div>
              <span className="text-[#4041d1] font-bold tracking-widest text-xs uppercase mb-3 block">Your First Appointment</span>
              <h3 className="text-3xl font-raleway font-bold text-slate-900 mb-6">
                What happens at your consultation?
              </h3>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                Your first visit is designed to be private, clear, and unhurried.
              </p>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                We discuss your symptoms, how long things have been changing, any relevant medical conditions, medication history, and what you are hoping to improve. We also talk through any wider factors that may be contributing, such as diabetes, blood pressure, circulation, hormonal changes, stress, or lifestyle.
              </p>
              <p className="text-slate-600 text-base leading-relaxed mb-6">
                If treatment may be appropriate, we explain the options, likely suitability, expected timelines, costs, and what realistic improvement may look like in your case.
              </p>
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
                <FaUserMd className="text-[#4041d1] text-2xl shrink-0 mt-1" />
                <p className="text-slate-700 text-sm font-medium">
                  There is no pressure to proceed. The purpose of the consultation is to give you clarity and a medically grounded plan.
                </p>
              </div>
            </div>

            {/* Early Assessment */}
            <div>
              <span className="text-slate-500 font-bold tracking-widest text-xs uppercase mb-3 block">Early Assessment Matters</span>
              <h3 className="text-3xl font-raleway font-bold text-slate-900 mb-6">
                ED is often easier to address when assessed properly and early
              </h3>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                Many men wait longer than they need to before seeking advice. Some hope the problem will simply pass. Others feel embarrassed, minimise it, or rely on tablets without understanding why symptoms have changed.
              </p>
              <p className="text-slate-600 text-base leading-relaxed mb-6">
                In reality, erectile dysfunction can sometimes be linked to wider vascular, metabolic, or hormonal issues. A proper assessment may not only help guide treatment, but also provide useful reassurance and clarity around your overall health.
              </p>
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
                <FaCheckCircle className="text-slate-400 text-2xl shrink-0 mt-1" />
                <p className="text-slate-700 text-sm font-medium">
                  Seeking help does not mean committing to treatment. It simply gives you the opportunity to understand what may be causing the issue and what options are available.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- SECTION 10 & 11: PRIVACY & DISCREET CARE --- */}
      <section className="py-24 bg-white font-inter border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="inline-block px-4 py-1.5 bg-[#4041d1]/10 text-[#4041d1] rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            Private and confidential from first enquiry
          </div>
          <h3 className="text-3xl md:text-5xl font-raleway font-bold text-slate-900 mb-8 leading-tight">
            Discreet, Private and Professional
          </h3>

          <div className="prose prose-lg prose-slate mx-auto mb-12">
            <p className="text-slate-600 font-inter text-lg leading-relaxed mb-6">
              We understand that discussing sexual health can feel uncomfortable. That is why our clinics provide a private, respectful, and judgement-free environment where concerns are taken seriously and addressed with sensitivity.
            </p>
            <p className="text-slate-600 font-inter text-lg leading-relaxed">
              Many men feel anxious before their first appointment. Our approach is designed to help you feel at ease, informed, and clear about your options. Our role is to make the conversation easier, help you feel informed, and give you clear medical guidance without embarrassment, pressure, or unrealistic promises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 text-left">
            {[
              "Direct access to GMC-registered doctors",
              "Medical assessment and treatment planning tailored to you",
              "No GP referral required. Book privately and confidentially",
              "Same-day appointments may be available",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col items-center text-center md:items-start md:text-left"
              >
                <FaCheckCircle className="text-[#4041d1] text-xl mb-3" /> 
                <span className="text-slate-800 font-medium font-inter text-sm leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Pricing Note */}
          <div className="max-w-3xl mx-auto p-6 bg-slate-50 rounded-2xl border border-slate-200 mb-10 shadow-sm text-left flex items-start gap-4">
             <div className="w-2 h-full min-h-[40px] bg-[#4041d1] rounded-full shrink-0"></div>
             <p className="text-slate-600 text-sm leading-relaxed font-medium">
               Our pricing is transparent and designed to reflect experienced doctor-led care, medical-grade treatment protocols, safety, follow-up, and aftercare. You can view current treatment prices online before booking.
             </p>
          </div>

          {/* --- ACTION BUTTONS ROW --- */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-full">
            <button
              onClick={handleAction}
              className="px-6 py-3 w-full md:w-max md:text-sm text-xs items-center justify-center cursor-pointer bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-lg font-inter font-bold transition-all duration-300 inline-flex gap-2 shadow-lg shadow-[#4041d1]/20 active:scale-95"
            >
              <FaEnvelope className="w-4 h-4" /> Book a Confidential Consultation with Dr Syed Abdi
            </button>
            <Link
              href={isBirmingham ? "/birmingham/prices" : "/prices"}
              className="px-6 py-3 w-full md:w-max md:text-sm text-xs items-center justify-center cursor-pointer border-2 border-[#4041d1] text-[#4041d1] hover:bg-blue-50 bg-white rounded-lg font-inter font-bold transition-all duration-300 inline-flex gap-2"
            >
              View Treatment Prices
            </Link>
          </div>

        </div>
      </section>
      
      {/* --- FAQs (Section 14) --- */}
      <section id="faqs" className="py-24 bg-slate-50 font-inter border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-raleway font-bold text-slate-900 mb-6">
              Common Questions About Erectile Dysfunction Treatment
            </h2>
          </div>
          <div className="space-y-4">
            {displayedFaqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <button
                  className="w-full p-6 md:p-8 text-left flex items-center justify-between hover:bg-slate-50 transition-colors duration-300"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="font-raleway font-bold text-slate-900 pr-8 text-base md:text-lg">
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${openFAQIndex === index ? 'bg-[#4041d1] text-white' : 'bg-[#4041d1]/10 text-[#4041d1]'}`}>
                    {openFAQIndex === index ? (
                      <FaMinus className="w-4 h-4" />
                    ) : (
                      <FaPlus className="w-4 h-4" />
                    )}
                  </div>
                </button>
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
                className="inline-flex items-center gap-2 px-6 py-3 text-sm cursor-pointer border-2 border-[#4041d1] text-[#4041d1] hover:bg-[#4041d1]/5 rounded-xl font-inter font-bold transition-all duration-300"
              >
                {showAllFaqs ? "Show Less FAQs" : "View All FAQs"}
                <FaChevronDown className={`w-3 h-3 transition-transform duration-300 ${showAllFaqs ? "rotate-180" : ""}`} />
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
      <OnlineAssessmentModal 
        isOpen={isAssessmentOpen} 
        onClose={() => setIsAssessmentOpen(false)} 
      />
    </>
  );
}
