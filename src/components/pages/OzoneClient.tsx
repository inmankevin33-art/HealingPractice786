"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  FaPlus,
  FaMinus,
  FaCheck,
  FaCheckCircle,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGoogle,
  FaStar,
  FaLock,
  FaShieldAlt,
  FaUserMd,
  FaVial,
  FaNotesMedical,
  FaHeartbeat,
  FaArrowRight
} from "react-icons/fa";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/ContactCTASection";
import TrustReviews from "@/components/TrustReviews";

type FaqType = {
  question: string;
  answer: string;
};

interface OzoneProps {
  locationName?: string;
  servingAreas?: string;
  faqs: FaqType[]; 
}

export default function OzoneClient({
  locationName = "Hampstead, London",
  servingAreas = "North London • Belsize Park • West Hampstead • Highgate",
  faqs, 
}: OzoneProps) {
  
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // --- LOCATION LOGIC ---
  const isBirmingham = locationName.includes("Birmingham");
  const isHampstead = locationName.includes("Hampstead");

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

  return (
    <>
      {/* --- HERO SECTION --- */}
      <div className="relative min-h-[100vh] md:min-h-[calc(100vh-4rem)] overflow-hidden flex items-center justify-center bg-[#0A1128]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0A1128]/80 z-10" /> 
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1128]/70 via-transparent to-[#0A1128] z-10" />
          <img 
            src="/hero_img.png" 
            alt="Medical Ozone Therapy Consultation" 
            className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
        </div>

        {/* pb-48 pushes content higher on mobile to clear the trust badges */}
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
            Medical Ozone Therapy <br className="hidden sm:block"/> in {locationName}
          </motion.h1>

         <motion.p 
            custom={2} initial="hidden" animate={isLoaded ? "visible" : "hidden"} variants={fadeUpVariants}
            className="text-base md:text-lg text-blue-50/90 font-inter leading-relaxed max-w-2xl mx-auto mb-10 font-medium drop-shadow-md"
          >
            Medical ozone therapy is an emerging treatment utilising a carefully controlled mixture of pure oxygen and medical-grade ozone. At Healing-PRP Clinics, every treatment plan begins with a thorough medical assessment to determine if ozone therapy has a suitable, evidence-aware role in your care.
          </motion.p>

          <motion.div 
            custom={3} initial="hidden" animate={isLoaded ? "visible" : "hidden"} variants={fadeUpVariants}
            className="flex justify-center items-center"
          >
            <button 
              onClick={handleAction}
              className="px-10 py-5 w-full sm:w-auto flex items-center justify-center text-sm cursor-pointer bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-xl font-bold transition-all duration-300 gap-2 shadow-[0_0_20px_rgba(64,65,209,0.3)] active:scale-95 font-inter"
            >
              <FaEnvelope className="w-4 h-4" /> Book an Ozone Therapy Consultation
            </button>
          </motion.div>

          {/* AD BENEFIT CHIPS */}
          <motion.div 
            custom={4} initial="hidden" animate={isLoaded ? "visible" : "hidden"} variants={fadeUpVariants}
            className="flex flex-wrap justify-center gap-3 mt-10"
          >
            {["Strict Clinical Protocols", "Multiple Admin Routes", "Free Initial Discussion", "Doctor-Led Care"].map((chip) => (
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

        {/* --- HERO TRUST BADGES (Mobile Fixed) --- */}
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

      {/* --- WHAT IS MEDICAL OZONE --- */}
      <section className="py-20 bg-white font-inter">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-[#4041d1] font-bold tracking-widest text-sm md:text-base uppercase mb-2 block">Clinical Approach</span>
            <h2 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-6">
              What is Medical Ozone Therapy?
            </h2>
            <div className="text-slate-600 text-lg leading-relaxed space-y-6">
              <p>
                Medical ozone therapy involves the use of a precisely controlled oxygen-ozone mixture, administered using highly specialised medical equipment. Rather than a "one-size-fits-all" approach, ozone therapy can be administered through several distinct routes, depending entirely on your unique clinical circumstances.
              </p>
              <p>
                The method of administration varies significantly depending on the purpose of the treatment and the condition being assessed. It is an adjunctive therapy designed to work alongside, rather than replace, standard medical care. At Healing-PRP Clinics, we focus on evidence-aware applications of medical ozone, ensuring that every protocol is delivered safely and appropriately for your specific needs.
              </p>
            </div>
            <div className="w-24 h-1 bg-[#4041d1] mx-auto mt-10 rounded-full"></div>
        </div>
      </section>

      {/* --- HOW WE PROVIDE IT (ROUTES) --- */}
      <section className="py-24 bg-slate-50 font-inter border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-raleway font-bold text-slate-900 mb-6">How We Provide Ozone Therapy</h2>
            <p className="text-slate-600 text-lg">
              We currently offer four distinct routes of administration. The appropriate method is always determined following a thorough clinical assessment by Dr Abdi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-[2rem] p-8 lg:p-10 border border-slate-100 shadow-sm flex flex-col">
              <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <FaVial className="text-[#4041d1] text-2xl" />
              </div>
              <h3 className="text-2xl font-raleway font-bold text-slate-900 mb-4">Major Ozone Autohaemotherapy (MAH)</h3>
              <p className="text-slate-600 leading-relaxed">
                A measured amount of your blood is safely withdrawn into a sterile, closed medical system. It is then exposed to a precisely controlled oxygen-ozone mixture before being gently returned to your body. Treatment protocols and the number of sessions vary according to the clinical indication.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white rounded-[2rem] p-8 lg:p-10 border border-slate-100 shadow-sm flex flex-col">
              <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <FaNotesMedical className="text-[#4041d1] text-2xl" />
              </div>
              <h3 className="text-2xl font-raleway font-bold text-slate-900 mb-4">Rectal Ozone Insufflation</h3>
              <p className="text-slate-600 leading-relaxed">
                A controlled volume of medical ozone gas is administered rectally using appropriate, comfortable medical equipment. This is a common and well-tolerated route investigated for both systemic and local applications.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-[2rem] p-8 lg:p-10 border border-slate-100 shadow-sm flex flex-col">
              <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <FaHeartbeat className="text-[#4041d1] text-2xl" />
              </div>
              <h3 className="text-2xl font-raleway font-bold text-slate-900 mb-4">Vaginal Ozone Therapy</h3>
              <p className="text-slate-600 leading-relaxed">
                Controlled local ozone administration may be considered for selected gynaecological indications. This is a targeted approach discussed and carefully planned following a comprehensive clinical assessment.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white rounded-[2rem] p-8 lg:p-10 border border-slate-100 shadow-sm flex flex-col">
              <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <FaUserMd className="text-[#4041d1] text-2xl" />
              </div>
              <h3 className="text-2xl font-raleway font-bold text-slate-900 mb-4">Nasal / Sinus Ozone Therapy</h3>
              <p className="text-slate-600 leading-relaxed">
                Specialist local ozone techniques may be considered for selected sinus conditions. Medical ozone is never inhaled directly into the lungs; this treatment requires a highly specific clinical delivery protocol to ensure safety.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- WHICH TREATMENT / ASSESSMENT FOCUS --- */}
      <section className="py-20 bg-white font-inter">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-6">
              Which Ozone Treatment Is Right for Me?
            </h2>
            <div className="text-slate-600 text-lg leading-relaxed space-y-6">
              <p>
                There isn&apos;t one single type of ozone therapy. The route we consider depends entirely on why you are seeking treatment, your medical history, and the available clinical evidence.
              </p>
              <p>
                Because Healing-PRP Clinics is a doctor-led facility, you will first have a comprehensive medical consultation. During this time, we will determine whether ozone therapy is appropriate for you, and if so, which specific route of administration should be considered.
              </p>
            </div>
        </div>
      </section>

      {/* --- CONDITIONS HUB (CARDS) --- */}
      <section className="py-24 bg-slate-50 font-inter border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-raleway font-bold text-slate-900 mb-6">Conditions We Are Investigating</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Ozone therapy has been investigated for a number of medical conditions. The quality and amount of evidence varies considerably depending on both the condition and the route of administration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-raleway font-bold text-slate-900 mb-2">Long COVID & Post-Viral Symptoms</h3>
              <span className="inline-block px-3 py-1 bg-blue-50 text-[#4041d1] text-xs font-bold uppercase rounded-md mb-4">Route: MAH</span>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                Emerging evidence suggests Major Ozone Autohaemotherapy may have a potential adjunctive role in managing persistent post-viral fatigue and related symptoms.
              </p>
              <Link href="/ozone-therapy/long-covid" className="text-[#4041d1] font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                Learn more about Ozone Therapy and Long COVID <FaArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-raleway font-bold text-slate-900 mb-2">Ulcerative Colitis</h3>
              <span className="inline-block px-3 py-1 bg-blue-50 text-[#4041d1] text-xs font-bold uppercase rounded-md mb-4">Route: Rectal Ozone</span>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                Ozone has been investigated as an adjunctive approach for mucosal healing. It is not intended to replace gastroenterology care or prescribed IBD medication.
              </p>
              <Link href="/ozone-therapy/ulcerative-colitis" className="text-[#4041d1] font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                Learn more about Rectal Ozone Therapy and Colitis <FaArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-raleway font-bold text-slate-900 mb-2">Recurrent Bacterial Vaginosis (BV)</h3>
              <span className="inline-block px-3 py-1 bg-blue-50 text-[#4041d1] text-xs font-bold uppercase rounded-md mb-4">Route: Vaginal Ozone</span>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                Local ozone approaches have been investigated in women&apos;s health for recurrent imbalances, though clinical evidence remains developing.
              </p>
              <Link href="/ozone-therapy/recurrent-bv" className="text-[#4041d1] font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                Learn more about Ozone Therapy and Recurrent BV <FaArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-raleway font-bold text-slate-900 mb-2">Chronic Sinusitis</h3>
              <span className="inline-block px-3 py-1 bg-blue-50 text-[#4041d1] text-xs font-bold uppercase rounded-md mb-4">Route: Local Nasal/Sinus</span>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                Local ozone techniques have been investigated for chronic sinus disease, but evidence and established protocols vary.
              </p>
              <Link href="/ozone-therapy/chronic-sinusitis" className="text-[#4041d1] font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                Learn more about Ozone Therapy and Sinusitis <FaArrowRight className="w-3 h-3" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* --- RESEARCH & DOCTOR-LED COMBINED SECTION --- */}
      <section className="py-24 bg-white font-inter">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-slate-50 rounded-3xl p-8 lg:p-10 border border-slate-200 mb-12 shadow-sm relative overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-10 relative z-10">
              
              {/* Left Content Area: Research */}
              <div className="lg:w-1/2 flex flex-col justify-center">
                <span className="text-[#4041d1] font-bold tracking-widest text-xs uppercase mb-3 block">Evidence & Research</span>
                <h3 className="text-3xl font-raleway font-bold text-slate-900 mb-4">
                  What Does the Research Say?
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  There is published clinical research into medical ozone therapy, including human studies. However, the quality and quantity of evidence varies substantially between conditions. Some applications have promising early clinical evidence, while others remain experimental or require further high-quality research.
                </p>
                <p className="text-slate-600 leading-relaxed font-medium">
                  We believe patients should understand both the potential role of a treatment and the limitations of the current evidence. Evidence for one route of administration (such as rectal ozone) does not automatically prove efficacy for another route (such as autohaemotherapy) for the same condition.
                </p>
              </div>

              {/* Right Area: Doctor Led */}
              <div className="lg:w-1/2 bg-white rounded-2xl p-6 lg:p-8 border border-slate-100 shadow-sm flex flex-col justify-center">
                <h4 className="font-bold text-slate-900 mb-4 font-raleway flex items-center gap-2 text-xl">
                  <FaUserMd className="text-[#4041d1]" /> A Doctor-Led Approach
                </h4>
                <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                  Healing-PRP Clinics is a private, doctor-led medical facility. Ozone therapy is not provided simply because a patient requests a session. Dr Syed Abdi conducts a comprehensive evaluation to ensure treatment is safe and clinically justifiable.
                </p>
                <p className="text-slate-600 leading-relaxed text-sm font-medium">Your assessment will carefully account for:</p>
                <ul className="space-y-2 mt-3 mb-6">
                  {["Symptoms and medical history", "Current medications & previous treatments", "Potential contraindications", "The most appropriate treatment route"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                      <FaCheck className="text-green-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* --- CONSULTATION & SAFETY --- */}
      <section className="py-24 bg-slate-50 font-inter border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            <div>
              <h3 className="text-3xl font-raleway font-bold text-slate-900 mb-6">What Happens at Your Consultation?</h3>
              <p className="text-slate-600 mb-6">Your consultation is a practical, patient-focused discussion. During your appointment, we will:</p>
              <ul className="space-y-4 mb-8">
                  {[
                    "Discuss your condition and current symptoms.", 
                    "Review your medical history and existing treatment plans.", 
                    "Discuss whether medical ozone therapy has a reasonable role in your care.", 
                    "Explain the most appropriate route of administration.",
                    "Outline the expected number of sessions, costs, potential risks, and alternatives."
                  ].map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700">
                      <FaCheckCircle className="text-[#4041d1] shrink-0 mt-1" />
                      <span>{benefit}</span>
                    </li>
                  ))}
              </ul>
              <p className="text-sm text-slate-500 italic">Following this discussion, you decide whether you wish to proceed. A consultation does not automatically mean treatment will be recommended or provided.</p>
            </div>

            <div>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <FaShieldAlt className="text-[#4041d1] text-3xl" />
                  <h3 className="text-2xl font-raleway font-bold text-slate-900">Safety Information</h3>
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                  Medical ozone must be administered using specialist medical equipment capable of producing precise, controlled concentrations. Treatment requires appropriate patient selection, strict clinical protocols, and highly trained medical personnel.
                </p>
                <div className="bg-red-50 text-red-800 p-4 rounded-xl border border-red-100 font-medium text-sm mb-6">
                  <strong>Important:</strong> Ozone gas should never be inhaled into the lungs. 
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Comprehensive safety information and contraindications will be discussed in detail during your consultation and provided within your consent documentation.
                </p>
              </div>
            </div>

          </div>

          <div className="mt-16 text-center">
             <button
              onClick={handleAction}
              className="px-10 py-5 w-full md:w-auto bg-[#4041d1] text-white rounded-xl font-bold text-lg hover:bg-[#2a2bb8] transition-all shadow-xl active:scale-95"
            >
              Book an Ozone Therapy Consultation
            </button>
          </div>
        </div>
      </section>

      {/* --- FAQs Section --- */}
      <section id="faqs" className="py-20 lg:py-24 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-raleway font-bold text-slate-900 leading-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-100 transition-colors duration-300"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="font-raleway font-bold text-slate-900 pr-4 leading-relaxed text-sm md:text-base">
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all ${openFAQIndex === index ? 'bg-[#4041d1] text-white' : 'bg-[#4041d1]/10 text-[#4041d1]'}`}>
                    {openFAQIndex === index ? <FaMinus /> : <FaPlus />}
                  </div>
                </button>

                <AnimatePresence>
                  {openFAQIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div className="border-t border-slate-200 pt-4">
                          <p className="font-inter text-sm md:text-base text-slate-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
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
    </>
  );
}
