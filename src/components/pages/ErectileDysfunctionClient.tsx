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

  const isBirmingham = locationName === "Birmingham";
  const basePath = isBirmingham ? "/birmingham" : "";

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

  const quickSteps = [
    {
      title: "Complete a confidential assessment",
      description: "Tell us about your symptoms, medical history, and any current treatment.",
      icon: FaFileAlt,
    },
    {
      title: "Free doctor-led consultation",
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
      description: "Viagra or Cialis may still help, but the response may feel weaker, less reliable, or more dependent than before.",
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
      description: "ED often affects more than physical function alone and can begin to impact self-esteem and relationships.",
      icon: FaUserShield,
      color: "bg-amber-50 text-amber-600",
    },
    {
      title: "You want a medically guided plan",
      description: "Some men are not looking for a quick online prescription. They want proper assessment and a tailored treatment strategy.",
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
      <div className="relative md:h-[calc(100vh-4rem)] pb-5 md:pb-0 lg:h-[calc(100vh-5rem)] overflow-hidden flex items-center justify-center bg-black font-inter">
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
            custom={0} initial="hidden" animate={isLoaded ? "visible" : "hidden"} variants={fadeUpVariants}
            className="inline-block px-5 py-2 mb-6 border border-white/20 rounded-full bg-[#1e293b]/50 backdrop-blur-md shadow-lg"
          >
            <span className="text-blue-100 text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase">Doctor-Led Private Clinic</span>
          </motion.div>

          <motion.h1 
            custom={1} initial="hidden" animate={isLoaded ? "visible" : "hidden"} variants={fadeUpVariants}
            className="md:text-6xl text-4xl font-bold font-raleway text-white leading-tight mb-6 tracking-tight drop-shadow-lg"
          >
            Erectile Dysfunction <br className="hidden sm:block"/> Treatment in {locationName}
          </motion.h1>

         <motion.p 
            custom={2} initial="hidden" animate={isLoaded ? "visible" : "hidden"} variants={fadeUpVariants}
            className="text-base md:text-lg text-blue-50/90 leading-relaxed max-w-3xl mx-auto mb-10 font-medium drop-shadow-md px-4"
          >
            Private, doctor-led care for men with erection difficulties, reduced firmness, inconsistent response to tablets, or unwanted side effects. Start with a <strong>free confidential consultation</strong> to assess the likely cause and discuss the most suitable treatment plan, which may include medication support, shockwave therapy, or P-Shot treatment where appropriate.
          </motion.p>

          <motion.div 
            custom={3} initial="hidden" animate={isLoaded ? "visible" : "hidden"} variants={fadeUpVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button 
              onClick={handleAction}
              className="px-8 py-4 w-full sm:w-auto flex items-center justify-center text-sm cursor-pointer bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-xl font-bold transition-all duration-300 gap-2 shadow-[0_0_20px_rgba(64,65,209,0.3)] active:scale-95"
            >
              Book Free Confidential Consultation
            </button>
            <button 
              onClick={() => setIsAssessmentOpen(true)}
              className="px-8 py-4 w-full sm:w-auto flex items-center justify-center text-sm cursor-pointer bg-white text-[#4041d1] hover:bg-slate-50 rounded-xl font-bold transition-all duration-300 gap-2 shadow-xl active:scale-95"
            >
              Start Free Online Assessment
            </button>
          </motion.div>

          {/* REFINED CHIPS */}
          <motion.div 
            custom={4} initial="hidden" animate={isLoaded ? "visible" : "hidden"} variants={fadeUpVariants}
            className="flex flex-wrap justify-center gap-3 mt-10"
          >
            {[
              "Tablets not working as well?", 
              "Doctor-led treatment options", 
              "Free confidential consultation", 
              "Discreet private care"
            ].map((chip) => (
              <div key={chip} className="flex items-center gap-1.5 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-[10px] md:text-xs font-bold text-white uppercase tracking-wider backdrop-blur-sm">
                <FaCheckCircle className="text-blue-400" /> {chip}
              </div>
            ))}
          </motion.div>

          <motion.div 
            custom={5} initial="hidden" animate={isLoaded ? "visible" : "hidden"} variants={fadeUpVariants}
            className="inline-flex items-center justify-center gap-2 px-6 py-2 text-white/60 rounded-full text-[10px] md:text-xs mt-8 font-bold uppercase tracking-widest"
          >
             <FaMapMarkerAlt className="mb-0.5" /> 
             <span>Serving: {servingAreas}</span>
          </motion.div>
        </div>

        {/* --- HERO TRUST BADGES --- */}
        <div className={`md:block absolute hidden bottom-0 left-0 right-0 bg-[#0A1128]/95 backdrop-blur-xl border-t border-white/10 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="px-2 py-4 max-w-7xl mx-auto">
            <div className="grid grid-cols-4 gap-2 divide-x divide-white/10">
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

   {/* --- SECTION 1: PERSONALIZED APPROACH --- */}
      <section className="py-20 bg-white font-inter">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-6">
              A More Personalised Approach to ED Treatment
            </h2>
            <div className="text-slate-600 text-lg leading-relaxed space-y-6">
              <p>
                At Healing-PRP Clinics, <Link href={`${basePath}/our-doctor`} className="text-[#4041d1] font-bold hover:underline">Dr Syed Abdi</Link> offers discreet, doctor-led assessment for men experiencing erectile dysfunction, reduced firmness, or loss of sexual confidence.
              </p>
              <p>
                Your journey starts with a <strong>free initial consultation</strong>, designed to understand the wider picture rather than offer the same treatment to every patient. This includes your symptoms, medical history, current medication, and possible contributing factors such as diabetes, blood pressure, or hormonal changes.
              </p>
              <p>
                The aim is to give you clarity on what may be causing the problem and which treatment options may be most appropriate in your case.
              </p>
            </div>
            <div className="w-24 h-1 bg-[#4041d1] mx-auto mt-10 rounded-full"></div>
        </div>
      </section>

      {/* --- HOW IT WORKS (THE PROCESS) --- */}
      <section className="py-24 bg-slate-50 font-inter border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-4">How the process works</h2>
            <p className="text-slate-600 text-lg">The aim is to make things clear, discreet, and medically guided from the start.</p>
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
          
          <div className="mt-12 p-8 bg-[#4041d1] rounded-2xl text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <p className="text-lg font-medium max-w-2xl">
              There is no pressure to proceed. The purpose of the <strong>free consultation</strong> is to help you understand what may be causing the issue and which treatment options may be most appropriate.
            </p>
            <button 
              onClick={handleAction}
              className="px-8 py-4 bg-white text-[#4041d1] rounded-xl font-bold whitespace-nowrap hover:bg-slate-50 transition-colors shadow-lg active:scale-95"
            >
              Book Free Initial Discussion
            </button>
          </div>
        </div>
      </section>
      
      {/* --- SECTION 2: DIFFERENTIATION --- */}
      <section className="py-24 bg-white font-inter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="bg-blue-50/50 p-10 rounded-3xl border border-blue-100">
                <span className="text-[#4041d1] font-bold tracking-widest text-xs uppercase mb-3 block">Professional Assessment</span>
                <h3 className="text-3xl font-raleway font-bold text-slate-900 mb-6">
                  The right treatment depends on the cause
                </h3>
                <p className="text-slate-600 text-base leading-relaxed mb-6">
                  Not every case of erectile dysfunction is the same. A proper doctor-led assessment helps decide what may be most appropriate for your vascular and hormonal health.
                </p>
                <ul className="space-y-4 mb-8">
                  {["Erection quality and firmness", "Response to Viagra or Cialis", "Circulation and vascular factors", "Metabolic health concerns"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                      <FaCheckCircle className="text-[#4041d1] shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={handleAction}
                  className="w-full sm:w-max px-8 py-3.5 bg-[#4041d1] text-white rounded-xl font-bold transition-all text-sm flex items-center justify-center gap-2 shadow-lg active:scale-95"
                >
                  Book Free Confidential Consultation
                </button>
            </div>

            <div className="p-10 border-l border-slate-100">
              <h3 className="text-2xl font-raleway font-bold text-slate-900 mb-6">Why choose a doctor-led review?</h3>
              <p className="text-slate-600 text-base leading-relaxed mb-8">
                Unlike generic online ED pharmacies, we focus on the medical "why" behind your symptoms.
              </p>
              <div className="space-y-6">
                 {[
                   { t: "Medical History Review", d: "Treatment based on your specific history, not a standard algorithm." },
                   { t: "Wider Health Check", d: "We review contributing factors like diabetes, blood pressure, or hormones." },
                   { t: "Advanced Alternatives", d: "Access to options like Shockwave or P-Shot when tablets are no longer enough." },
                   { t: "Zero Pressure", d: "A no-obligation discussion focused on clarity, not a sales pitch." }
                 ].map((item, idx) => (
                   <div key={idx} className="flex gap-4">
                     <FaShieldAlt className="text-[#4041d1] text-lg mt-1 shrink-0" />
                     <div>
                       <h4 className="font-bold text-slate-900 text-sm">{item.t}</h4>
                       <p className="text-xs text-slate-600">{item.d}</p>
                     </div>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHO THIS PAGE IS FOR --- */}
      <section className="py-24 bg-slate-50 font-inter border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-6">Who this page is for</h2>
            <p className="text-slate-600 text-lg">
              This service may be appropriate for men wanting a <strong>free, confidential first discussion</strong> before deciding what to do next:
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
                <div className={`w-14 h-14 rounded-2xl ${symptom.color} flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform`}><symptom.icon /></div>
                <h3 className="text-xl font-raleway font-bold text-slate-900 mb-3 group-hover:text-[#4041d1] transition-colors">{symptom.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{symptom.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- REFINED SHOCKWAVE/PSHOT LIMITATIONS --- */}
      <section className="py-24 bg-white font-inter">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-6 italic">What P-Shot and Shockwave Therapy Can — and Cannot — Do</h3>
            <p className="text-slate-600 text-lg">Regenerative treatments are doctor-led, non-surgical options focused on vascular and tissue health.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-blue-50/50 p-8 rounded-3xl border border-blue-100">
              <h4 className="text-xl font-bold text-slate-900 mb-6 font-raleway">Treatment Goals</h4>
              <ul className="space-y-4">
                {[
                  "May support penile blood flow over time", 
                  "May support tissue health in selected patients", 
                  "Non-surgical tissue responsiveness", 
                  "Long-term vascular health focus"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FaCheckCircle className="text-[#4041d1] mt-1 shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
              <h4 className="text-xl font-bold text-slate-900 mb-6 font-raleway">Important Context</h4>
              <ul className="space-y-4">
                {[
                  "Improvement is usually gradual, not instant", 
                  "Suitability varies by underlying cause", 
                  "Not suitable for severe structural damage", 
                  "Honest medical assessment is essential"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-500">
                    <FaInfoCircle className="mt-1 shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROTOCOL SECTION --- */}
      <section className="py-20 bg-slate-50 font-inter border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-5 py-2 bg-white text-[#4041d1] rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-slate-200">Our Treatment Approach</div>
            <h2 className="text-3xl md:text-5xl font-raleway font-bold text-slate-900 tracking-tight">A Structured Doctor-Led Treatment Plan</h2>
          </div>

          <div className="max-w-7xl mx-auto mt-12 relative">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 px-8 py-4 bg-white border border-slate-200 rounded-full shadow-md">
                <span className="flex h-3 w-3 rounded-full bg-[#4041d1] animate-pulse" />
                <span className="text-sm font-bold text-slate-800 uppercase tracking-widest font-raleway italic">{protocolSteps[activeStep].title}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
              <div className="hidden lg:block absolute top-[80px] left-0 w-full h-[1px] border-t border-dashed border-slate-300 -z-10" />
              {protocolSteps.map((step, index) => (
                  <div
                    key={index}
                    className={`p-5 rounded-[2rem] border transition-all duration-300 h-full flex flex-col cursor-pointer ${activeStep === index ? "border-[#4041d1] bg-white shadow-xl scale-105 z-20" : "border-slate-200 bg-white opacity-80"}`}
                    onClick={() => setActiveStep(index)}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all ${activeStep === index ? "bg-[#4041d1] text-white" : "bg-slate-100 text-slate-400"}`}><step.icon className="w-5 h-5" /></div>
                    <h3 className="font-raleway font-bold mb-2 text-base text-slate-900">{step.title}</h3>
                    <p className="text-xs leading-relaxed text-slate-600">{step.description}</p>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- REASSURANCE --- */}
      <section className="py-24 bg-white font-inter">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-1.5 bg-blue-50 text-[#4041d1] rounded-full text-xs font-bold uppercase tracking-wider mb-6 italic">Strictly Private and Confidential</div>
          <h3 className="text-3xl md:text-5xl font-raleway font-bold text-slate-900 mb-8 leading-tight">No-Obligation Doctor-Led Review</h3>
          <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto mb-12">
            The purpose of your initial discussion is to help you feel at ease, informed, and clear about your options without embarrassment or pressure.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <button
              onClick={handleAction}
              className="px-10 py-5 w-full md:w-auto bg-[#4041d1] text-white rounded-xl font-bold text-lg hover:bg-[#2a2bb8] transition-all shadow-xl active:scale-95"
            >
              Book Free Confidential Consultation
            </button>
            <button
              onClick={() => setIsAssessmentOpen(true)}
              className="px-10 py-5 w-full md:w-auto border-2 border-slate-200 text-slate-600 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all"
            >
              Start Free Online Assessment
            </button>
          </div>
        </div>
      </section>
      
      {/* --- FAQs --- */}
      <section id="faqs" className="py-24 bg-slate-50 font-inter border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-raleway font-bold text-slate-900 mb-6">Common Questions About Erectile Dysfunction Treatment</h2>
          </div>
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
                      <div className="px-6 pb-8 border-t border-slate-100 pt-6"><p className="text-slate-600 leading-relaxed italic">{faq.answer}</p></div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
             <button onClick={handleAction} className="text-[#4041d1] font-bold text-sm underline hover:no-underline">Speak with our doctor during a free initial discussion</button>
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
