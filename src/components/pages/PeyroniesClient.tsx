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
  FaArrowRight,
  FaGoogle,
  FaStar,
  FaLock,
  FaShieldAlt,
  FaHourglassEnd,
  FaUserMd,
  FaFileAlt,
  FaSyringe,
  FaWaveSquare
} from "react-icons/fa";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/ContactCTASection";
import TrustReviews from "@/components/TrustReviews";
import PDOnlineAssessmentModal from "@/components/PDOnlineAssessmentModal";

type FaqType = {
  question: string;
  answer: string;
};

interface PeyroniesProps {
  locationName?: string;
  servingAreas?: string;
  pShotLink?: string;
  faqs: FaqType[]; 
}

export default function PeyroniesClient({
  locationName = "St Albans",
  servingAreas = "Harpenden • Luton • Watford • Hertfordshire",
  pShotLink = "/p-shot",
  faqs, 
}: PeyroniesProps) {
  
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);

  // --- LOCATION LOGIC ---
  const isBirmingham = locationName === "Birmingham";
  const isHampstead = locationName === "Hampstead";
  
  const basePath = isBirmingham ? "/birmingham" : isHampstead ? "/hampstead" : "";
  const shockwaveLink = `${basePath}/shockwave-therapy-erectile-dysfunction`; 
  const localPShotLink = isHampstead ? "/hampstead/p-shot" : pShotLink;

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

  const symptoms = [
    {
      title: "Curvature or Indentation",
      description: "A noticeable bend or hourglass shape in the penis during an erection.",
    },
    {
      title: "Penile Pain",
      description: "Discomfort or pain during erections, particularly in the early (active) phase of the condition.",
    },
    {
      title: "Loss of Length or Girth",
      description: "Perceived shortening or a loss of elasticity and thickness.",
    },
    {
      title: "Erectile Difficulties",
      description: "Trouble getting or maintaining firmness, often linked to the plaque or reduced blood flow.",
    },
    {
      title: "Palpable Lumps",
      description: "Feeling hard tissue or plaques beneath the skin of the penis.",
    },
    {
      title: "Loss of Confidence",
      description: "Anxiety and stress impacting intimacy and your relationship.",
    }
  ];

  return (
    <>
      {/* --- HERO SECTION --- */}
      <div className="relative min-h-[100vh] md:min-h-[calc(100vh-4rem)] overflow-hidden flex items-center justify-center bg-black">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" /> 
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/90 z-10" />
          <img 
            src="/ed-doctor-consultation.webp" 
            alt="Peyronie's Disease Treatment Consultation" 
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          />
        </div>

        {/* pb-48 pushes content higher on mobile to clear the 2x2 trust badges */}
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
            Peyronie&apos;s Disease <br className="hidden sm:block"/> Treatment in {isHampstead ? "Hampstead, London" : locationName}
          </motion.h1>

         <motion.p 
            custom={2} initial="hidden" animate={isLoaded ? "visible" : "hidden"} variants={fadeUpVariants}
            className="text-base md:text-lg text-blue-50/90 font-inter leading-relaxed max-w-2xl mx-auto mb-10 font-medium drop-shadow-md"
          >
            Private, doctor-led care for men experiencing penile curvature, pain, or reduced elasticity. Start with a <strong>free confidential consultation</strong> to assess the condition and discuss tailored non-surgical options like P-Shot or Shockwave therapy.
          </motion.p>

          <motion.div 
            custom={3} initial="hidden" animate={isLoaded ? "visible" : "hidden"} variants={fadeUpVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button 
              onClick={handleAction}
              className="px-8 py-4 w-full sm:w-auto flex items-center justify-center text-sm cursor-pointer bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-xl font-bold transition-all duration-300 gap-2 shadow-[0_0_20px_rgba(64,65,209,0.3)] active:scale-95 font-inter"
            >
              <FaEnvelope className="w-4 h-4" /> Book Free Confidential Consultation
            </button>
            <button 
              onClick={() => setIsAssessmentOpen(true)}
              className="px-8 py-4 w-full sm:w-auto flex items-center justify-center text-sm cursor-pointer bg-white text-[#4041d1] hover:bg-slate-50 rounded-xl font-bold transition-all duration-300 gap-2 shadow-xl active:scale-95 font-inter"
            >
              Start Free Online Assessment
            </button>
          </motion.div>

          {/* AD BENEFIT CHIPS */}
          <motion.div 
            custom={4} initial="hidden" animate={isLoaded ? "visible" : "hidden"} variants={fadeUpVariants}
            className="flex flex-wrap justify-center gap-3 mt-10"
          >
            {["Curvature & Pain Relief", "Non-Surgical Options", "Free Confidential Consultation", "Discreet Private Care"].map((chip) => (
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

      {/* --- UNDERSTANDING PD --- */}
      <section className="py-20 bg-white font-inter">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-[#4041d1] font-bold tracking-widest text-sm md:text-base uppercase mb-2 block">Doctor-Led Assessment</span>
            <h2 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-6">
              Understanding Peyronie&apos;s Disease
            </h2>
            <div className="text-slate-600 text-lg leading-relaxed space-y-6">
              <p>
                Peyronie&apos;s Disease occurs when fibrous scar tissue (plaques) forms in the tunica albuginea, causing penile curvature, indentation, pain, and sometimes shortening. It often follows micro‑trauma, though in many cases, the cause is unclear. 
              </p>
              <p>
                Your journey starts with a <strong>free confidential consultation</strong>. <Link href={`${basePath}/our-doctor`} className="text-[#4041d1] font-bold hover:underline transition-all duration-300">Dr Syed Abdi</Link> will review your symptoms, medical history, and the active or stable phase of your condition to determine the safest, most effective approach.
              </p>
            </div>
            <div className="w-24 h-1 bg-[#4041d1] mx-auto mt-10 rounded-full"></div>
        </div>
      </section>

      {/* --- SYMPTOMS GRID --- */}
      <section className="py-24 bg-slate-50 font-inter border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-6">Common Symptoms & Who This Is For</h2>
            <p className="text-slate-600 text-lg">
              This service is for men seeking non-surgical options who recognise any of the following and want a <strong>free, confidential first discussion</strong>:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {symptoms.map((symptom, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm flex flex-col h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center mb-6 text-xl text-indigo-600"><FaCheckCircle /></div>
                <h3 className="text-xl font-raleway font-bold text-slate-900 mb-3">{symptom.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{symptom.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button 
              onClick={handleAction}
              className="px-8 py-4 w-full sm:w-auto bg-[#4041d1] text-white rounded-xl font-bold transition-all duration-300 shadow-lg active:scale-95 text-sm md:text-base"
            >
              Schedule Free Confidential Consultation
            </button>
            <button
              onClick={() => setIsAssessmentOpen(true)}
              className="px-8 py-4 w-full sm:w-auto border-2 border-slate-200 text-slate-600 bg-white rounded-xl font-bold text-sm md:text-base hover:bg-slate-50 transition-all"
            >
              Start Free Online Assessment
            </button>
          </div>
        </div>
      </section>

      {/* --- TREATMENT APPROACH (METRICS + DETAILS) --- */}
      <section className="py-24 bg-white font-inter">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#4041d1] font-bold tracking-widest text-xs uppercase mb-3 block">Non-Surgical Solutions</span>
            <h2 className="text-3xl md:text-5xl font-raleway font-bold text-slate-900 mb-6">Our Treatment Approach</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              We combine regenerative therapies to encourage plaque remodelling and vascular regeneration. Depending on your assessment, treatment may include one or both of the following options.
            </p>

            {/* --- TIME & SAFETY METRICS BAR --- */}
            <div className="inline-flex flex-wrap justify-center items-center gap-4 md:gap-8 px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl">
              <div className="flex items-center gap-2.5">
                 <FaShieldAlt className="text-[#4041d1] w-5 h-5" />
                 <span className="text-slate-800 font-bold text-xs md:text-sm uppercase tracking-wide">100% Non-Surgical</span>
              </div>
              <div className="hidden md:block w-1.5 h-1.5 bg-slate-300 rounded-full"></div>
              <div className="flex items-center gap-2.5">
                 <FaCheckCircle className="text-[#4041d1] w-5 h-5" />
                 <span className="text-slate-800 font-bold text-xs md:text-sm uppercase tracking-wide">Zero Downtime</span>
              </div>
              <div className="hidden md:block w-1.5 h-1.5 bg-slate-300 rounded-full"></div>
              <div className="flex items-center gap-2.5">
                 <FaHourglassEnd className="text-[#4041d1] w-5 h-5" />
                 <span className="text-slate-800 font-bold text-xs md:text-sm uppercase tracking-wide">Fast Clinic Visits</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* P-Shot Card */}
            <div className="bg-slate-50 rounded-3xl p-8 lg:p-10 border border-slate-200 flex flex-col">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <FaSyringe className="text-[#4041d1] text-2xl" />
              </div>
              <h3 className="text-2xl font-raleway font-bold text-slate-900 mb-4">Platelet‑Rich Plasma (P‑Shot)</h3>
              <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                Concentrated growth factors from your own blood support tissue repair and elasticity. Targeted PRP may help soften plaques, improve curvature over time, and enhance overall erectile quality.
              </p>
              
              <ul className="space-y-3 mb-8 bg-white p-4 rounded-xl border border-slate-100">
                <li className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                  <FaHourglassEnd className="text-[#4041d1] shrink-0" /> Takes approx. 30 Minutes
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                  <FaCheckCircle className="text-[#4041d1] shrink-0" /> Zero downtime
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-3">
                <button onClick={handleAction} className="w-full text-center px-6 py-3 bg-[#4041d1] text-white font-bold rounded-xl text-sm transition-all hover:bg-[#2a2bb8]">
                  Arrange Free Confidential Consult
                </button>
                <Link href={localPShotLink} className="w-full text-center px-6 py-3 bg-white text-[#4041d1] font-bold rounded-xl text-sm border border-slate-200 transition-all hover:bg-slate-100">
                  More info about P-Shot
                </Link>
              </div>
            </div>

            {/* Shockwave Card */}
            <div className="bg-slate-50 rounded-3xl p-8 lg:p-10 border border-slate-200 flex flex-col">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <FaWaveSquare className="text-[#4041d1] text-2xl" />
              </div>
              <h3 className="text-2xl font-raleway font-bold text-slate-900 mb-4">Low‑Intensity Shockwave</h3>
              <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                Acoustic waves stimulate angiogenesis and collagen remodelling. In combination with PRP, it can further reduce plaque stiffness. Typically a course of 6 sessions is advised, adjusted to your specific curvature.
              </p>
              
              <ul className="space-y-3 mb-8 bg-white p-4 rounded-xl border border-slate-100">
                <li className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                  <FaHourglassEnd className="text-[#4041d1] shrink-0" /> Takes approx. 20 Minutes
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                  <FaCheckCircle className="text-[#4041d1] shrink-0" /> Pain-free & Zero downtime
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-3">
                <button onClick={handleAction} className="w-full text-center px-6 py-3 bg-[#4041d1] text-white font-bold rounded-xl text-sm transition-all hover:bg-[#2a2bb8]">
                  Arrange Free Confidential Consult
                </button>
                <Link href={shockwaveLink} className="w-full text-center px-6 py-3 bg-white text-[#4041d1] font-bold rounded-xl text-sm border border-slate-200 transition-all hover:bg-slate-100">
                  More info about Shockwave
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- PRIVACY & REASSURANCE --- */}
      <section className="py-24 bg-white font-inter border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-1.5 bg-blue-50 text-[#4041d1] rounded-full text-xs font-bold uppercase tracking-wider mb-6">100% Confidential & Private</div>
          <h3 className="text-3xl md:text-5xl font-raleway font-bold text-slate-900 mb-8">No-Obligation Doctor-Led Review</h3>
          <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto mb-12">
            We understand that discussing Peyronie&apos;s Disease can feel uncomfortable. Our clinics provide a private, respectful, and judgement-free environment where concerns are taken seriously and addressed with sensitivity.
          </p>

          {/* Localised Location Blocks */}
          {isBirmingham && (
            <div className="max-w-3xl mx-auto mb-16 bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm text-left flex items-start gap-4">
               <FaMapMarkerAlt className="text-[#4041d1] text-3xl shrink-0 mt-1" aria-hidden="true" />
               <div>
                 <h3 className="font-bold font-raleway text-slate-900 mb-2 text-lg">Visiting our Edgbaston Clinic</h3>
                 <p className="text-slate-600 text-sm leading-relaxed">
                   Located at 38 Harborne Rd, Edgbaston, our Birmingham clinic offers a highly discreet environment with private consultation rooms. We provide clear directions and parking instructions prior to your appointment to ensure your arrival is stress-free and entirely confidential.
                 </p>
               </div>
            </div>
          )}

          {isHampstead && (
            <div className="max-w-3xl mx-auto mb-16 bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm text-left flex items-start gap-4">
               <FaMapMarkerAlt className="text-[#4041d1] text-3xl shrink-0 mt-1" aria-hidden="true" />
               <div>
                 <h3 className="font-bold font-raleway text-slate-900 mb-2 text-lg">Visiting our Hampstead Clinic</h3>
                 <p className="text-slate-600 text-sm leading-relaxed">
                   Located at <strong>2 Hampstead High St, London NW3 1PR</strong>, our Hampstead clinic provides a highly private, professional medical environment for intimate regenerative health consultations. Conveniently located for patients across North West London, including Belsize Park, West Hampstead, and Highgate.
                 </p>
               </div>
            </div>
          )}

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
              className="px-10 py-5 w-full md:w-auto bg-[#4041d1] text-white rounded-xl font-bold text-lg hover:bg-[#2a2bb8] transition-all shadow-xl active:scale-95"
            >
              Request Free Confidential Consultation
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

      {/* --- FAQs Section --- */}
      <section id="faqs" className="py-20 lg:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-raleway font-bold text-slate-900 leading-tight">
              Common Questions About PD Treatment
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors duration-300"
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
                        <div className="border-t border-slate-100 pt-4">
                          <p className="font-inter text-sm md:text-base text-slate-600 leading-relaxed italic">
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
      <PDOnlineAssessmentModal isOpen={isAssessmentOpen} onClose={() => setIsAssessmentOpen(false)} />
    </>
  );
}
