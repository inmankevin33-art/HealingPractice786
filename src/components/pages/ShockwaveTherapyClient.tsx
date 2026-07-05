"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  FaCheck,
  FaPlus,
  FaMinus,
  FaEnvelope,
  FaArrowRight,
  FaChevronDown,
  FaMapMarkerAlt,
  FaGoogle,
  FaStar,
  FaLock,
  FaUserShield,
  FaUserMd,
  FaLink,
  FaBolt,
  FaHeartbeat,
  FaSyringe,
  FaStethoscope,
  FaWalking,
  FaCompressAlt
} from "react-icons/fa";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/ContactCTASection";
import LocationSection from "@/components/LocationSection";
import TrustReviews from "@/components/TrustReviews";
import Link from "next/link";

// --- INTERFACE FOR DYNAMIC PROPS ---
type FaqType = {
  question: string;
  answer: string;
};

interface ShockwaveTherapyProps {
  locationName?: string;
  servingAreas?: string;
  faqs?: FaqType[];
}

export default function ShockwaveTherapyClient({
  locationName = "St Albans",
  servingAreas = "Harpenden • Luton • Watford • Hertfordshire",
  faqs = [],
}: ShockwaveTherapyProps) {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  // --- LOCATION LOGIC ---
  const isBirmingham = locationName === "Birmingham";
  const isHampstead = locationName === "Hampstead";
  
  const treatmentCostsRoute = isBirmingham ? "/birmingham/treatment-costs" : isHampstead ? "/hampstead/prices" : "/treatment-costs";

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // --- GA4 CONVERSION TRACKING ---
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
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  // FASTER ANIMATIONS
  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
    }),
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const displayedFaqs = showAllFaqs ? faqs : faqs.slice(0, 5);

  return (
    <>
    {/* --- HERO SECTION --- */}
      <div className="relative min-h-[100vh] md:min-h-[calc(100vh-4rem)] overflow-hidden flex items-center justify-center bg-black">
        
        {/* Background Section */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" /> 
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80 z-10" />
          <Image  
            src="/ed-doctor-consultation.webp" 
            alt="Shockwave Therapy Consultation" 
            fill
            sizes="100vw"
            className="object-cover"
            priority
            fetchPriority="high"
          />
        </div>

        {/* Main Content */}
        <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 pb-48 md:pb-24">
          
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="inline-block px-4 py-1.5 mb-6 border border-blue-400/30 rounded-full bg-blue-900/20 backdrop-blur-sm transform-gpu"
          >
            <span className="text-blue-200 text-xs font-bold tracking-widest uppercase font-inter">Advanced Regenerative Care</span>
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-raleway text-white leading-tight mb-4 tracking-tight"
          >
            Shockwave Therapy for ED & Peyronie&apos;s <br />
            <span className="text-xl md:text-3xl lg:text-4xl text-blue-100 mt-2 inline-block">
              Clinic in {isHampstead ? "Hampstead, London" : locationName}
            </span>
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="mt-4 text-sm md:text-base text-blue-50/90 font-inter leading-relaxed max-w-2xl mx-auto mb-8 font-medium"
          >
            Advanced, doctor-led Low-Intensity Shockwave Therapy (Li-ESWT) to support natural blood flow and plaque reduction—without surgery or downtime.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={handleAction}
              className="px-6 py-3 flex items-center justify-center text-sm cursor-pointer bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-xl font-bold transition-all duration-300 gap-2 shadow-xl shadow-[#4041d1]/20 active:scale-95 font-inter"
            >
              <FaEnvelope className="w-4 h-4" /> Book Medical Assessment
            </button>
          </motion.div>

          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="inline-flex items-center justify-center gap-2 px-6 py-2 bg-[#4041d1]/10 text-white rounded-full text-[10px] md:text-xs mt-10 font-bold uppercase tracking-widest font-inter shadow-lg border border-white/10 backdrop-blur-sm"
          >
             <FaMapMarkerAlt className="text-white/80 mb-0.5" />
             <span>Serving: {servingAreas}</span>
          </motion.div>
        </div>
        
        {/* --- HERO TRUST BADGES (Fixed for Mobile) --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute bottom-0 left-0 w-full bg-[#0f172a]/90 backdrop-blur-md border-t border-white/10 z-30"
        >
          <div className="px-2 py-4 max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-2 divide-none md:divide-x divide-white/10">
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
                    <span className="text-white text-[9px] font-bold uppercase tracking-widest leading-tight font-inter">Years</span>
                    <span className="text-blue-400 text-[9px] font-semibold tracking-wider uppercase leading-tight mt-0.5 font-inter">Experience</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center px-2 opacity-90 hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-[#1f3a68] rounded-full flex items-center justify-center text-white font-bold text-[11px] shadow-md border border-white/10">
                    GMC
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-white text-[9px] font-bold uppercase tracking-widest leading-tight font-inter">Registered</span>
                    <span className="text-blue-400 text-[9px] font-semibold tracking-wider uppercase leading-tight mt-0.5 font-inter">Doctor</span>
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
        </motion.div>
      </div>

      {/* Navigation */}
      <section className="py-8 border-b border-t shadow-xs border-slate-100 relative bg-white">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {[
              { label: "Understanding Li-ESWT", href: "#understanding" },
              { label: "Our Technology", href: "#technology" },
              { label: "Our Approach", href: "#approach" },
              { label: "Who Is It For", href: "#who-is-it-for" },
              { label: "Treatment Process", href: "#treatment-components" },
              { label: "FAQs", href: "#faqs" },
            ].map((link, idx) => (
              <motion.a
                key={idx}
                href={link.href}
                className="px-4 py-2 text-sm border border-slate-100 shadow-xs bg-white text-[#4041d1] rounded-lg font-inter font-bold hover:bg-[#4041d1]/5 transition-colors duration-300"
                variants={itemVariants}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 1. Understanding Shockwave Therapy Section */}
      <section id="understanding" className="py-20 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="mb-4">
              <span className="text-[#4041d1] font-bold tracking-widest uppercase text-sm font-inter">The Science</span>
            </motion.div>
            <motion.h2
              className="text-3xl lg:text-4xl font-raleway font-bold text-slate-900 mb-8"
              variants={itemVariants}
            >
              Understanding Shockwave Therapy (Li-ESWT)
            </motion.h2>

            <motion.div 
              variants={itemVariants}
              className="bg-blue-50/50 border border-blue-100 rounded-3xl p-8 md:p-12 shadow-sm text-left relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-[#4041d1]"></div>
              
              <div className="space-y-6">
                <p className="text-base md:text-lg font-inter text-slate-700 leading-relaxed font-medium">
                  Low-Intensity Extracorporeal Shockwave Therapy (Li-ESWT) addresses the root physiological causes of vascular Erectile Dysfunction and Peyronie&apos;s Disease, rather than simply masking symptoms with temporary medication. By delivering targeted acoustic waves into the penile tissue, it triggers the body&apos;s natural healing response.
                </p>
                
                <div className="bg-white p-6 md:p-8 rounded-2xl border border-blue-100/50 shadow-sm">
                  <h4 className="text-lg md:text-xl font-bold font-raleway text-[#4041d1] mb-3 flex items-center gap-3">
                    <FaBolt className="text-[#4041d1]" /> The Difference: Focused vs. Radial Shockwaves
                  </h4>
                  <p className="text-sm md:text-base font-inter text-slate-600 leading-relaxed mb-5">
                    Many high-street men&apos;s clinics use &quot;Radial&quot; shockwave devices, which are essentially acoustic massage guns designed for superficial physiotherapy. At Healing-PRP, our GMC-registered doctors use <strong>Medical-Grade Focused Shockwaves</strong>. These penetrate deeply and precisely into the corpus cavernosum to stimulate <em>angiogenesis</em> (the growth of new blood vessels) and actively break down the fibrous scar tissue associated with Peyronie&apos;s disease.
                  </p>
                  
                  <Link 
                    href={isBirmingham ? "/birmingham/p-shot" : isHampstead ? "/hampstead/p-shot" : "/p-shot"}
                    className="inline-flex items-center gap-2 text-[#4041d1] font-bold text-sm md:text-base hover:text-[#2a2bb8] transition-colors group"
                  >
                    Combine with the P-Shot for maximum regenerative synergy 
                    <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 1.5. NEW: Our Technology (Storz Medical) Section */}
      <section id="technology" className="py-20 lg:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
            >
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 bg-[#4041d1]/10 text-[#4041d1] rounded-full text-xs font-inter font-bold uppercase tracking-wider mb-6">
                 Global Gold Standard
              </motion.div>
              <motion.h2 variants={itemVariants} className="text-3xl lg:text-4xl font-raleway font-bold text-slate-900 mb-6">
                Powered by STORZ MEDICAL DUOLITH®
              </motion.h2>
              <motion.p variants={itemVariants} className="text-slate-600 text-base md:text-lg font-inter leading-relaxed mb-8">
                Dr. Syed Abdi exclusively utilizes the <strong>DUOLITH SD1 T-TOP ULTRA</strong>—widely recognised as the most advanced focused shockwave system on the market. Decades of Swiss-engineered research ensure you receive genuine, medical-grade Li-ESWT under expert doctor supervision, not superficial physiotherapy.
              </motion.p>
              
              <motion.ul variants={containerVariants} className="space-y-5">
                <motion.li variants={itemVariants} className="flex items-start gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                  <div className="mt-1 bg-blue-50 rounded-full p-2 shrink-0">
                    <FaCheck className="w-3 h-3 text-[#4041d1]" />
                  </div>
                  <div>
                    <strong className="text-slate-900 font-inter text-sm md:text-base">Up to 125mm Penetration Depth</strong>
                    <p className="text-slate-600 text-sm font-inter mt-1 leading-relaxed">Reaches deep into the corpus cavernosum to safely target root vascular issues and fibrous plaque, far beyond the reach of standard radial devices.</p>
                  </div>
                </motion.li>
                
                <motion.li variants={itemVariants} className="flex items-start gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                  <div className="mt-1 bg-blue-50 rounded-full p-2 shrink-0">
                    <FaCheck className="w-3 h-3 text-[#4041d1]" />
                  </div>
                  <div>
                    <strong className="text-slate-900 font-inter text-sm md:text-base">High Energy Flux Density</strong>
                    <p className="text-slate-600 text-sm font-inter mt-1 leading-relaxed">Delivers pinpoint treatment accuracy and powerful regenerative stimulation, providing highly effective treatment in fewer sessions.</p>
                  </div>
                </motion.li>
                
                <motion.li variants={itemVariants} className="flex items-start gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                  <div className="mt-1 bg-blue-50 rounded-full p-2 shrink-0">
                    <FaCheck className="w-3 h-3 text-[#4041d1]" />
                  </div>
                  <div>
                    <strong className="text-slate-900 font-inter text-sm md:text-base">Maximum Patient Comfort</strong>
                    <p className="text-slate-600 text-sm font-inter mt-1 leading-relaxed">Ergonomic design and precise targeting mean a virtually painless experience with zero downtime required.</p>
                  </div>
                </motion.li>
              </motion.ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative lg:ml-8"
            >
              {/* Tilted background accent to give it a premium 3D feel */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#4041d1]/20 to-blue-50 rounded-[2rem] transform rotate-3 scale-105 -z-10"></div>
              
              {/* Removed the white box and padding. Added overflow-hidden so the image corners curve perfectly. */}
              <div className="rounded-[2rem] shadow-xl border border-slate-200/60 overflow-hidden flex items-center justify-center bg-[#f2f2f2]">
                <img 
                  src="/storz-duolith.webp" 
                  alt="STORZ MEDICAL DUOLITH SD1 T-TOP ULTRA" 
                  className="w-full h-auto object-cover mix-blend-multiply"
                  onError={(e) => {
                    e.currentTarget.src = 'https://placehold.co/600x400/f8fafc/4041d1?text=STORZ+DUOLITH+Machine';
                  }}
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. Doctor-Led, Patient-Centred Approach */}
      <section id="approach" className="py-20 lg:py-24 bg-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="w-16 h-16 bg-[#4041d1]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-[#4041d1]/20">
              <FaStethoscope className="text-2xl text-[#4041d1]" />
            </motion.div>

            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-8">
              A Clinician-Led, Evidence-Based Assessment
            </motion.h2>

            <motion.div 
              variants={itemVariants}
              className="bg-blue-50/50 border border-blue-100 rounded-3xl p-8 md:p-12 shadow-sm text-left relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-[#4041d1]"></div>
              
              <div className="space-y-6">
                <div className="text-base md:text-lg font-inter text-slate-700 leading-relaxed font-medium space-y-4">
                  <p>
                    Because Li-ESWT is a powerful medical treatment, it requires a robust clinical assessment. We are a doctor-led practice; we do not offer blind &quot;walk-in&quot; treatments without understanding your unique medical profile.
                  </p>
                  <p>
                    During your confidential, 1:1 consultation, our doctor will evaluate your vascular health, symptom history, and any existing plaque formation (for Peyronie&apos;s patients). This ensures you are a suitable candidate and allows us to formulate an evidence-led treatment protocol tailored strictly to your physiology.
                  </p>
                </div>
                
                {/* Internal Link Box */}
                <div className="bg-white p-6 md:p-8 rounded-2xl border border-blue-100/50 shadow-sm mt-6">
                  <h4 className="text-lg md:text-xl font-bold font-raleway text-[#4041d1] mb-3">
                    Require immediate support?
                  </h4>
                  <p className="text-sm md:text-base font-inter text-slate-600 leading-relaxed mb-5">
                    Regenerative treatments take time as the body grows new vessels. We offer bespoke, doctor-prescribed ED medication to provide support while your shockwave therapy results develop. 
                  </p>
                  <Link 
                    href={isBirmingham ? "/birmingham/personalised-ed-medication" : isHampstead ? "/hampstead/personalised-ed-medication" : "/personalised-ed-medication"}
                    className="inline-flex items-center gap-2 text-[#4041d1] font-bold text-sm md:text-base hover:text-[#2a2bb8] transition-colors group"
                  >
                    Explore Personalised ED Medication →
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. Who Is It For Section */}
      <section id="who-is-it-for" className="py-20 lg:py-24 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <div className="text-center mb-12">
              <motion.div variants={itemVariants} className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-sm mb-6 border border-slate-200">
                <FaUserShield className="text-2xl text-[#4041d1]" />
              </motion.div>
              <motion.h2
                className="text-3xl lg:text-4xl font-raleway font-bold text-slate-900 mb-6"
                variants={itemVariants}
              >
                Who Is It For?
              </motion.h2>
            </div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto"
              variants={containerVariants}
            >
              {/* Card 1 */}
              <motion.div className="flex items-start gap-4 p-6 bg-white border border-slate-200 shadow-sm rounded-2xl hover:shadow-md transition-shadow" variants={itemVariants}>
                <div className="mt-1 bg-blue-50 rounded-full p-2 shrink-0">
                  <FaCheck className="w-3 h-3 text-[#4041d1]" />
                </div>
                <span className="text-sm md:text-base font-inter text-slate-700 leading-relaxed font-medium">
                  Men whose standard ED tablets (like Viagra or Cialis) have lost effectiveness or cause undesirable side effects.
                </span>
              </motion.div>

              {/* Card 2 */}
              <motion.div className="flex items-start gap-4 p-6 bg-white border border-slate-200 shadow-sm rounded-2xl hover:shadow-md transition-shadow" variants={itemVariants}>
                <div className="mt-1 bg-blue-50 rounded-full p-2 shrink-0">
                  <FaCheck className="w-3 h-3 text-[#4041d1]" />
                </div>
                <span className="text-sm md:text-base font-inter text-slate-700 leading-relaxed font-medium">
                  Men suffering from Peyronie&apos;s Disease, experiencing painful curvature, or palpable penile plaque.
                </span>
              </motion.div>

              {/* Card 3 */}
              <motion.div className="flex items-start gap-4 p-6 bg-white border border-slate-200 shadow-sm rounded-2xl hover:shadow-md transition-shadow" variants={itemVariants}>
                <div className="mt-1 bg-blue-50 rounded-full p-2 shrink-0">
                  <FaCheck className="w-3 h-3 text-[#4041d1]" />
                </div>
                <span className="text-sm md:text-base font-inter text-slate-700 leading-relaxed font-medium">
                  Individuals who wish to restore spontaneous intimacy without having to plan around taking medication.
                </span>
              </motion.div>

              {/* Card 4 */}
              <motion.div className="flex items-start gap-4 p-6 bg-white border border-slate-200 shadow-sm rounded-2xl hover:shadow-md transition-shadow" variants={itemVariants}>
                <div className="mt-1 bg-blue-50 rounded-full p-2 shrink-0">
                  <FaCheck className="w-3 h-3 text-[#4041d1]" />
                </div>
                <span className="text-sm md:text-base font-inter text-slate-700 leading-relaxed font-medium">
                  Those seeking a completely non-invasive, surgery-free regenerative solution with zero downtime.
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. Treatment Process (The 6-Card Grid) */}
      <section id="treatment-components" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.h2
                className="text-3xl lg:text-4xl font-raleway font-bold text-slate-900 mb-6"
                variants={itemVariants}
              >
                The Treatment Process
              </motion.h2>
              <motion.p
                className="text-slate-600 text-lg leading-relaxed font-inter"
                variants={itemVariants}
              >
                Our clinical protocols are designed to maximise vascular regeneration and tissue repair safely and comfortably.
              </motion.p>
            </div>

            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12" variants={containerVariants}>
              
              {/* Card 1: Assessment */}
              <motion.div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col items-start hover:shadow-md hover:border-[#4041d1]/30 transition-all group" variants={itemVariants}>
                <div className="w-14 h-14 bg-blue-50 text-[#4041d1] rounded-2xl flex items-center justify-center mb-6 text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <FaStethoscope />
                </div>
                <h3 className="text-xl font-raleway font-bold text-slate-900 mb-3 group-hover:text-[#4041d1] transition-colors">
                  1. Clinical Assessment
                </h3>
                <p className="text-sm font-inter text-slate-600 leading-relaxed">
                  A private, doctor-led evaluation of your vascular health and symptoms to confirm your suitability for focused shockwave therapy.
                </p>
              </motion.div>

              {/* Card 2: Focused Waves */}
              <motion.div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col items-start hover:shadow-md hover:border-[#4041d1]/30 transition-all group" variants={itemVariants}>
                <div className="w-14 h-14 bg-blue-50 text-[#4041d1] rounded-2xl flex items-center justify-center mb-6 text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <FaBolt />
                </div>
                <h3 className="text-xl font-raleway font-bold text-slate-900 mb-3 group-hover:text-[#4041d1] transition-colors">
                  2. Targeted Delivery
                </h3>
                <p className="text-sm font-inter text-slate-600 leading-relaxed">
                  Painless application of focused acoustic waves to the penile shaft and crura, typically lasting 15–20 minutes per session.
                </p>
              </motion.div>

              {/* Card 3: Angiogenesis */}
              <motion.div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col items-start hover:shadow-md hover:border-[#4041d1]/30 transition-all group" variants={itemVariants}>
                <div className="w-14 h-14 bg-blue-50 text-[#4041d1] rounded-2xl flex items-center justify-center mb-6 text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <FaHeartbeat />
                </div>
                <h3 className="text-xl font-raleway font-bold text-slate-900 mb-3 group-hover:text-[#4041d1] transition-colors">
                  3. Angiogenesis
                </h3>
                <p className="text-sm font-inter text-slate-600 leading-relaxed">
                  The deep energy stimulates the release of growth factors, encouraging the body to build new, healthy blood vessels over the coming weeks.
                </p>
              </motion.div>

              {/* Card 4: Plaque Remodelling (PD) */}
              <motion.div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col items-start hover:shadow-md hover:border-[#4041d1]/30 transition-all group" variants={itemVariants}>
                <div className="w-14 h-14 bg-blue-50 text-[#4041d1] rounded-2xl flex items-center justify-center mb-6 text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <FaCompressAlt />
                </div>
                <h3 className="text-xl font-raleway font-bold text-slate-900 mb-3 group-hover:text-[#4041d1] transition-colors">
                  4. Plaque Remodelling
                </h3>
                <p className="text-sm font-inter text-slate-600 leading-relaxed">
                  For Peyronie&apos;s patients, the waves create micro-traumas in the hardened scar tissue, softening the plaque and potentially reducing curvature.
                </p>
              </motion.div>

              {/* Card 5: PRP Synergy */}
              <motion.div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col items-start hover:shadow-md hover:border-[#4041d1]/30 transition-all group" variants={itemVariants}>
                <div className="w-14 h-14 bg-blue-50 text-[#4041d1] rounded-2xl flex items-center justify-center mb-6 text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <FaSyringe />
                </div>
                <h3 className="text-xl font-raleway font-bold text-slate-900 mb-3 group-hover:text-[#4041d1] transition-colors">
                  5. Regenerative Synergy
                </h3>
                <p className="text-sm font-inter text-slate-600 leading-relaxed mb-4">
                  Combining Shockwave Therapy with the platelet-rich plasma of the P-Shot® provides the ultimate environment for tissue healing.
                </p>
                <div className="mt-auto">
                  <Link 
                    href={isBirmingham ? "/birmingham/p-shot" : isHampstead ? "/hampstead/p-shot" : "/p-shot"}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#4041d1] hover:text-[#2a2bb8] transition-colors"
                  >
                    Learn about the P-Shot <FaArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </motion.div>

              {/* Card 6: Zero Downtime */}
              <motion.div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col items-start hover:shadow-md hover:border-[#4041d1]/30 transition-all group" variants={itemVariants}>
                <div className="w-14 h-14 bg-blue-50 text-[#4041d1] rounded-2xl flex items-center justify-center mb-6 text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <FaWalking />
                </div>
                <h3 className="text-xl font-raleway font-bold text-slate-900 mb-3 group-hover:text-[#4041d1] transition-colors">
                  6. Zero Downtime
                </h3>
                <p className="text-sm font-inter text-slate-600 leading-relaxed">
                  A walk-in, walk-out procedure requiring no anesthesia. You can safely resume all normal daily activities immediately after your session.
                </p>
              </motion.div>

            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <div className="inline-flex items-center gap-2 bg-slate-50 px-6 py-3 rounded-full border border-slate-200 text-sm font-inter text-slate-600 font-bold shadow-sm">
                <FaLock className="text-slate-400" />
                Your privacy is paramount. All sessions are strictly 1:1 in our private clinical rooms.
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 5. Intimate Wellness Banner */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 md:p-12 flex flex-col items-center justify-center text-center gap-6 shadow-sm border border-slate-200 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-10"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-10"></div>
              
              <div className="relative z-10 max-w-2xl">
                <h4 className="text-2xl md:text-3xl font-raleway font-bold text-slate-900 mb-4">Looking for comprehensive intimate wellness?</h4>
                <p className="text-slate-600 text-sm md:text-base font-inter">
                  Explore our holistic treatments designed to restore confidence, performance, and overall male sexual health.
                </p>
              </div>
              
              <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center mt-4">
                <Link 
                  href={isBirmingham ? "/birmingham/erectile-dysfunction" : isHampstead ? "/hampstead/erectile-dysfunction" : "/erectile-dysfunction"}
                  className="px-8 py-3.5 bg-white border-2 border-[#4041d1] text-[#4041d1] hover:bg-[#4041d1]/5 rounded-xl font-bold transition-all duration-300 text-sm flex items-center justify-center gap-2 group shadow-sm active:scale-95 font-inter"
                >
                  Explore ED Treatments
                  <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link 
                  href={isBirmingham ? "/birmingham/p-shot" : isHampstead ? "/hampstead/p-shot" : "/p-shot"}
                  className="px-8 py-3.5 bg-[#4041d1] text-white hover:bg-[#2a2bb8] rounded-xl font-bold transition-all duration-300 text-sm flex items-center justify-center gap-2 group shadow-md active:scale-95 font-inter"
                >
                  Explore the P-Shot
                  <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
        </div>
      </section>

      {/* 6. Action Bar & FAQs */}
      <section id="faqs" className="py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Action Bar (Pre-FAQ) */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-16 border-b border-slate-100 pb-12">
            <button
              onClick={handleAction}
              className="w-full md:w-auto px-6 py-3 flex items-center justify-center text-sm cursor-pointer bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-lg font-inter font-bold transition-all duration-300 shadow-md active:scale-95"
            >
              Book Consultation
            </button>
            <Link
              href={treatmentCostsRoute}
              className="w-full md:w-auto px-6 py-3 flex items-center justify-center text-sm cursor-pointer border-2 border-[#4041d1] text-[#4041d1] hover:bg-blue-50 bg-white rounded-lg font-inter font-bold transition-all duration-300"
            >
              View Treatment Prices
            </Link>
            <Link
              href={isBirmingham ? "/birmingham/faq" : isHampstead ? "/hampstead/faq" : "/faq"}
              className="w-full md:w-auto px-6 py-3 flex items-center justify-center text-sm cursor-pointer border-2 border-slate-200 text-slate-700 hover:border-[#4041d1] hover:text-[#4041d1] bg-white rounded-lg font-inter font-bold transition-all duration-300"
            >
              View Clinic FAQs
            </Link>
          </div>

          {/* FAQ Accordions */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            <motion.div className="flex justify-center mb-2" variants={itemVariants}>
              <div className="inline-block px-4 py-2 bg-[#4041d1]/10 text-[#4041d1] rounded-full text-xs font-inter font-bold uppercase tracking-wider">
                Frequently Asked Questions
              </div>
            </motion.div>
            <motion.h2
              className="text-2xl lg:text-4xl font-raleway font-bold text-slate-700 leading-tight text-center mb-4"
              variants={itemVariants}
            >
              Common Questions
            </motion.h2>

            <motion.div className="space-y-4 mt-8" variants={containerVariants}>
              {displayedFaqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  variants={itemVariants}
                >
                  <button
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors duration-300"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="font-raleway font-bold text-slate-900 pr-4 leading-relaxed text-sm md:text-base">
                      {faq.question}
                    </h3>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center relative transition-colors ${openFAQIndex === index ? 'bg-[#4041d1] text-white' : 'bg-[#4041d1]/10 text-[#4041d1]'}`}>
                       {openFAQIndex === index ? <FaMinus className="w-3 h-3" /> : <FaPlus className="w-3 h-3" />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {openFAQIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 border-t border-slate-100 pt-4">
                          <p className="font-inter text-sm text-slate-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>

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
          </motion.div>
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
    </>
  );
}
