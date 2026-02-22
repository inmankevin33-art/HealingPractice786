"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaCheck,
  FaPlus,
  FaMinus,
  FaEnvelope,
  FaArrowRight,
  FaGoogle,
  FaStar,
  FaLock,
  FaMapMarkerAlt,
  FaHeartbeat,
  FaDna,
  FaSyringe,
  FaShieldAlt,
  FaCheckCircle,
  FaUserMd,
  FaLeaf,
  FaPills,
  FaChevronDown
} from "react-icons/fa";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/ContactCTASection";
import LocationSection from "@/components/LocationSection";
import TrustReviews from "@/components/TrustReviews";
import Link from "next/link";
import Image from "next/image";

type FaqType = {
  question: string;
  answer: string;
};

type SexualHealthClientProps = {
  locationName?: string;
  faqs: FaqType[]; // <--- Now expecting FAQs as a prop
};

export default function SexualHealthClient({
  locationName = "St Albans",
  faqs,
}: SexualHealthClientProps) {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  // --- DYNAMIC LINKS BASED ON LOCATION ---
  const isBirmingham = locationName === "Birmingham";
  
  const pShotUrl = isBirmingham ? "/birmingham/p-shot" : "/p-shot";
  const edUrl = isBirmingham ? "/birmingham/erectile-dysfunction" : "/erectile-dysfunction";
  const peUrl = isBirmingham ? "/birmingham/premature-ejaculation" : "/premature-ejaculation";
  const peyroniesUrl = isBirmingham ? "/birmingham/peyronies-disease" : "/peyronies-disease";
  const oShotUrl = isBirmingham ? "/birmingham/o-shot" : "/o-shot"; 
  const medsUrl = isBirmingham ? "/birmingham/personalised-ed-medication" : "/personalised-ed-medication";
  const pricesUrl = isBirmingham ? "/birmingham/prices" : "/prices";
  const faqUrl = isBirmingham ? "/birmingham/faq" : "/faq";

  // Determine nearby areas text based on location
  const nearbyAreas = isBirmingham
    ? "Solihull, Edgbaston, Sutton Coldfield, and the West Midlands"
    : "Harpenden, Watford, Welwyn Garden City, Hitchin, Luton, Hertford, and London";

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoaded(true);
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };
  
  // --- ANIMATION VARIANTS ---
  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i * 0.15, ease: "easeOut" },
    }),
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // --- TREATMENT CARDS DATA ---
  const treatmentCards = [
    {
      title: "Erectile Dysfunction",
      category: "Men's Health",
      description: "A comprehensive, doctor-led approach focusing on vascular restoration and long-term tissue health rather than temporary medication.",
      bullets: [
        "In-depth medical and lifestyle assessment",
        "Low-Intensity Shockwave Therapy (LiSWT)",
        "Focuses on natural vascular regeneration"
      ],
      link: edUrl,
      icon: FaHeartbeat
    },
    {
      title: "The P-Shot® (Priapus Shot)",
      category: "Men's Health",
      description: "Advanced Platelet-Rich Plasma (PRP) therapy designed to rejuvenate penile tissue, support firmness, and enhance sensitivity.",
      bullets: [
        "Uses your own body's natural growth factors",
        "Aims to improve erection strength & stamina",
        "Exomine® (Advanced Exosome) options available"
      ],
      link: pShotUrl,
      icon: FaSyringe
    },
    {
      title: "Premature Ejaculation",
      category: "Men's Health",
      description: "Medical management for hypersensitivity and climax control, helping you regain confidence and extend intimacy.",
      bullets: [
        "Custom topical treatments & medication",
        "Neurochemical and sensitivity balancing",
        "Behavioural technique guidance"
      ],
      link: peUrl,
      icon: FaShieldAlt
    },
    {
      title: "Peyronie's Disease",
      category: "Men's Health",
      description: "Targeted regenerative treatments aiming to support plaque remodelling, reduce curvature, and relieve discomfort.",
      bullets: [
        "Combined PRP and Shockwave protocols",
        "Supports breakdown of fibrous scar tissue",
        "Non-surgical intervention"
      ],
      link: peyroniesUrl,
      icon: FaDna
    },
    {
      title: "The O-Shot®",
      category: "Female Rejuvenation",
      description: "A natural, PRP-based treatment to support vaginal health, improve natural lubrication, and enhance sexual sensation.",
      bullets: [
        "Highly effective for post-menopausal dryness",
        "Helps reduce stress urinary incontinence",
        "Enhances overall sensitivity and comfort"
      ],
      link: oShotUrl,
      icon: FaSyringe
    },
    {
      title: "Personalised Medications",
      category: "Men's Health",
      description: "Custom-tailored prescription treatments designed to address your specific symptoms, from climax control to performance enhancement.",
      bullets: [
        "Doctor-prescribed custom formulations",
        "Targeted symptom management",
        "Discreet consultation and guidance"
      ],
      link: medsUrl,
      icon: FaPills
    }
  ];

  // Slice FAQs based on state
  const displayedFaqs = showAllFaqs ? faqs : faqs.slice(0, 5);

  // --- UNIFIED ACTION HANDLER ---
  const handleAction = (e: React.MouseEvent) => {
    e.preventDefault();
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

  return (
    <>
      {/* --- HERO SECTION (Dark Premium) --- */}
      <div className="relative md:h-[calc(100vh-4rem)] pb-5 md:pb-0 lg:h-[calc(100vh-5rem)] overflow-hidden flex items-center justify-center bg-black">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10" /> 
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90 z-10" />
          <Image
            src="/personalised-meds-hero.webp"
            alt="Sexual Rejuvenation Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative z-20 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 md:pt-48 pb-16">
          <motion.h1 
            custom={1}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeUpVariants}
            className="md:text-[2.75rem] lg:text-5xl text-3xl font-bold font-raleway text-white leading-tight mb-6 tracking-tight drop-shadow-lg"
          >
            <span className="md:whitespace-nowrap">Sexual Rejuvenation & Natural Regeneration</span> <br className="hidden md:block" />
            in {locationName}
          </motion.h1>

          <motion.p 
            custom={2}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeUpVariants}
            className="mt-6 text-sm md:text-base text-white/90 font-inter leading-relaxed max-w-3xl mx-auto mb-8 drop-shadow"
          >
            Patient-centred, non-surgical solutions to support confidence,
            sensitivity and intimacy — delivered by a fully insured,
            GMC-registered doctor in {locationName}.
          </motion.p>

          <motion.div 
            custom={3}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeUpVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button 
              onClick={handleAction}
              className="px-10 py-3.5 flex items-center justify-center text-sm cursor-pointer bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-xl font-bold transition-all duration-300 gap-2 shadow-xl shadow-[#4041d1]/20 active:scale-95 font-inter group"
            >
              <FaEnvelope className="w-4 h-4 group-hover:rotate-12 transition-transform" /> 
              Book Consultation
            </button>
          </motion.div>

          <motion.div 
            custom={4}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeUpVariants}
            className="inline-flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 px-6 py-3 bg-[#4041d1] text-white rounded-2xl sm:rounded-full text-[10px] md:text-xs mt-8 font-bold uppercase tracking-widest font-inter shadow-lg border border-white/10 max-w-[90%] mx-auto text-center"
          >
             <div className="flex items-center gap-1.5 text-white/80">
               <FaMapMarkerAlt className="w-3 h-3" /> 
               <span>Serving:</span>
             </div>
             <span className="leading-relaxed">{nearbyAreas}</span>
          </motion.div>
        </div>

        {/* --- HERO TRUST BADGES (LOWER BORDER) --- */}
        <div className={`md:block absolute hidden bottom-0 left-0 right-0 bg-[#0f172a]/90 backdrop-blur-md border-t border-white/10 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
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
                    <span className="text-blue-400 text-[9px] font-semibold tracking-wider uppercase leading-tight mt-0.5 font-inter">Doctors</span>
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

      {/* --- EDUCATION: DYNAMIC GRAPHIC CARDS --- */}
      <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="text-center mb-16 max-w-4xl mx-auto"
          >
            <motion.div className="inline-block px-4 py-1.5 bg-[#4041d1]/10 text-[#4041d1] rounded-full text-xs font-bold uppercase tracking-wider mb-6" variants={itemVariants}>
              Education & Philosophy
            </motion.div>
            <motion.h2
              className="text-3xl lg:text-5xl font-raleway font-bold text-slate-900 mb-8 leading-tight tracking-tight"
              variants={itemVariants}
            >
              A Medical Approach to Intimacy & Wellbeing
            </motion.h2>
          </motion.div>

          <div className="space-y-8">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants} 
              className="bg-[#0A1128] text-white p-8 md:p-12 rounded-[2rem] border border-white/10 relative overflow-hidden shadow-xl"
            >
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#4041d1]/20 rounded-full blur-3xl pointer-events-none" />
              <FaHeartbeat className="absolute -bottom-10 -right-10 text-[15rem] text-white opacity-5 pointer-events-none transform -rotate-12" />
              
              <h3 className="text-2xl md:text-3xl font-raleway font-bold mb-6 flex items-center justify-center gap-4 relative z-10 text-white">
                <div className="p-3 bg-[#4041d1]/20 rounded-xl border border-[#4041d1]/30">
                  <FaHeartbeat className="text-[#4041d1] text-xl" />
                </div> 
                What is sexual rejuvenation?
              </h3>
              <p className="text-base md:text-lg font-inter text-slate-100 leading-relaxed text-center relative z-10 max-w-4xl mx-auto">
                Sexual rejuvenation refers to a range of evidence-based, regenerative treatments that support the natural function of sexual tissues. These therapies focus on improving blood flow, nerve signalling, sensitivity, lubrication, and overall performance — not through artificial stimulation, but by promoting the body’s own healing and repair processes.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants} 
                className="bg-[#0f172a] text-white p-8 md:p-10 rounded-[2rem] border border-white/5 shadow-lg relative overflow-hidden group hover:border-white/10 transition-colors flex flex-col justify-center"
              >
                <FaLeaf className="absolute -top-8 -right-8 text-[10rem] text-white opacity-[0.03] pointer-events-none group-hover:scale-110 transition-transform duration-700" />
                <h3 className="text-xl font-raleway font-bold text-white mb-4 flex items-center justify-center gap-3 relative z-10">
                  <div className="w-2 h-2 rounded-full bg-[#4041d1]" /> Why it matters
                </h3>
                <p className="text-sm md:text-base font-inter text-slate-100 leading-relaxed text-center relative z-10">
                  Changes in sexual function are extremely common and can occur due to ageing, hormonal shifts, vascular decline, childbirth, stress, illness, medication, or lifestyle factors. While many people feel embarrassed to speak about these issues, they have a significant impact on confidence, emotional wellbeing, relationships, and overall quality of life. Addressing these concerns early helps prevent long-term decline and supports healthier ageing.
                </p>
              </motion.div>

              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants} 
                className="bg-[#0f172a] text-white p-8 md:p-10 rounded-[2rem] border border-white/5 shadow-lg relative overflow-hidden group hover:border-white/10 transition-colors flex flex-col justify-center"
              >
                <FaDna className="absolute -bottom-8 -right-8 text-[10rem] text-white opacity-[0.03] pointer-events-none group-hover:scale-110 transition-transform duration-700" />
                <h3 className="text-xl font-raleway font-bold text-white mb-4 flex items-center justify-center gap-3 relative z-10">
                  <div className="w-2 h-2 rounded-full bg-[#4041d1]" /> The role of a healthy sexual life
                </h3>
                <p className="text-sm md:text-base font-inter text-slate-100 leading-relaxed text-center relative z-10">
                  A fulfilling sexual life is medically linked to lower stress levels, improved cardiovascular health, hormone balance, immune function, better sleep quality, and stronger emotional connection with partners. For many, rejuvenation can restore not only physical function but also self-esteem and psychological wellbeing.
                </p>
              </motion.div>
            </div>

            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants} 
              className="bg-[#0A1128] text-white p-8 md:p-12 rounded-[2rem] border border-[#4041d1]/30 shadow-[0_0_40px_rgba(64,65,209,0.1)] relative overflow-hidden flex flex-col justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#4041d1]/10 to-transparent pointer-events-none" />
              <FaUserMd className="absolute top-10 right-10 text-[8rem] text-white opacity-5 pointer-events-none" />
              <h3 className="text-2xl md:text-3xl font-raleway font-bold mb-4 relative z-10 flex items-center justify-center gap-3 text-white">
                <FaCheckCircle className="text-[#4041d1] text-xl" /> Our clinic’s patient-centred approach
              </h3>
              <p className="text-base md:text-lg font-inter text-slate-100 leading-relaxed text-center relative z-10 max-w-4xl mx-auto">
                At Healing-PRP Clinics, we take a comprehensive, non-judgemental approach to sexual wellness. Every patient receives a private, 1:1 medical consultation to understand the underlying causes of their symptoms. We focus on long-term regenerative improvement — not temporary quick fixes — using advanced PRP, Exosome, and shockwave technologies to encourage real tissue repair, vascular restoration, and improved natural performance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- BIG CARDS: TREATMENT PATHWAYS (Dark Theme) --- */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-6">
              Our Treatment Pathways
            </h3>
            <p className="text-slate-600 text-lg font-inter">
              Doctor-led, evidence-based treatments tailored to your specific needs. Select a pathway below to learn more about the procedure, benefits, and pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {treatmentCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="bg-[#0f172a] rounded-[2rem] p-8 md:p-10 border border-slate-800 shadow-xl hover:shadow-2xl hover:border-[#4041d1]/50 transition-all duration-300 flex flex-col h-full group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#4041d1]/0 via-transparent to-[#4041d1]/0 group-hover:from-[#4041d1]/10 transition-colors duration-500 pointer-events-none"></div>

                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className="w-14 h-14 bg-[#4041d1]/20 text-[#4041d1] rounded-2xl flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <card.icon />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#4041d1] block mb-1">
                      {card.category}
                    </span>
                    <h4 className="text-2xl font-raleway font-bold text-white">
                      {card.title}
                    </h4>
                  </div>
                </div>

                <p className="text-slate-200 font-inter text-sm md:text-base leading-relaxed mb-8 relative z-10">
                  {card.description}
                </p>

                <ul className="space-y-4 mb-10 flex-grow relative z-10">
                  {card.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3">
                      <FaCheckCircle className="text-[#4041d1] mt-1 shrink-0" />
                      <span className="text-slate-100 text-sm font-medium">{bullet}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={card.link}
                  className="w-full py-4 px-6 bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-xl font-inter font-bold text-center transition-all duration-300 flex items-center justify-center gap-2 relative z-10 group/btn shadow-lg shadow-[#4041d1]/20"
                >
                  Explore Treatment <FaArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* --- THE SCIENCE: HOW REGENERATION WORKS --- */}
      <section className="py-20 lg:py-28 bg-[#0A1128] text-white relative overflow-hidden border-t border-white/5">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none transform-gpu" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-raleway font-bold mb-6">
              The Science of Regeneration
            </h2>
            <p className="text-slate-200 text-lg leading-relaxed max-w-3xl mx-auto font-inter">
              We utilise advanced Platelet-Rich Plasma (PRP) and Exosome therapies to target the root causes of sexual dysfunction—not just mask the symptoms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center text-blue-400 text-2xl mb-6">
                <FaSyringe />
              </div>
              <h4 className="text-xl font-bold font-raleway mb-3">1. Autologous Healing</h4>
              <p className="text-slate-200 text-sm leading-relaxed font-inter">
                We draw a small sample of your own blood, eliminating the risk of allergic reactions or rejection.
              </p>
            </div>
            
            <div className="p-6 border-t md:border-t-0 md:border-l border-white/10">
              <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center text-blue-400 text-2xl mb-6">
                <FaDna />
              </div>
              <h4 className="text-xl font-bold font-raleway mb-3">2. Concentration</h4>
              <p className="text-slate-200 text-sm leading-relaxed font-inter">
                Using a medical centrifuge, we isolate the platelets, which contain hundreds of powerful growth factors and signaling proteins.
              </p>
            </div>

            <div className="p-6 border-t md:border-t-0 md:border-l border-white/10">
              <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center text-blue-400 text-2xl mb-6">
                <FaHeartbeat />
              </div>
              <h4 className="text-xl font-bold font-raleway mb-3">3. Angiogenesis</h4>
              <p className="text-slate-200 text-sm leading-relaxed font-inter">
                When injected into target areas, these factors stimulate the creation of new blood vessels (angiogenesis) and rejuvenate nerve pathways.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQs Section --- */}
      <section id="faqs" className="py-20 lg:py-28 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-full mb-16">
            <button
              onClick={handleAction}
              className="px-6 py-3 w-full md:w-max md:text-sm text-xs items-center justify-center cursor-pointer bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-lg font-inter font-bold transition-all duration-300 inline-flex gap-2 shadow-lg shadow-[#4041d1]/20 active:scale-95"
            >
              <FaEnvelope className="w-4 h-4" /> Book Consultation
            </button>

            <Link
              href={pricesUrl}
              className="px-6 py-3 w-full md:w-max md:text-sm text-xs items-center justify-center cursor-pointer bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-lg font-inter font-bold transition-all duration-300 inline-flex gap-2 shadow-lg shadow-[#4041d1]/20"
            >
              View Treatment Prices
            </Link>
            
            <Link
              href={faqUrl}
              className="px-6 py-3 w-full md:w-max md:text-sm text-xs items-center justify-center cursor-pointer border-2 border-[#4041d1] text-[#4041d1] hover:bg-blue-50 bg-white rounded-lg font-inter font-bold transition-all duration-300 inline-flex gap-2"
            >
              View Clinic FAQs
            </Link>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-6">
              Common Questions
            </h2>
            <p className="text-slate-600 font-inter">Find answers regarding safety, discretion, and our general clinical approach.</p>
          </div>
          
          <div className="space-y-4">
            {displayedFaqs.map((faq, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-100 transition-colors duration-300"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="font-raleway font-bold text-slate-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openFAQIndex === index ? 'bg-[#4041d1] text-white' : 'bg-[#4041d1]/10 text-[#4041d1]'}`}>
                    {openFAQIndex === index ? <FaMinus className="w-3 h-3" /> : <FaPlus className="w-3 h-3" />}
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
                      <div className="px-6 pb-6 pt-2 border-t border-slate-200/60 mt-2">
                        <p className="font-inter text-sm text-slate-600 leading-relaxed font-medium">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Toggle All FAQs Button */}
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

      {/* Contact Section */}
      <div id="contact-form-section" className="contain-layout">
        <ContactCTASection />
        <LocationSection />
      </div>

      <Footer />
    </>
  );
}
