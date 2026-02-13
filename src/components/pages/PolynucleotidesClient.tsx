"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  FaPlus,
  FaMinus,
  FaDna,
  FaSyringe,
  FaRegLightbulb,
  FaShieldAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/ContactCTASection";
import LocationSection from "@/components/LocationSection";
import Image from "next/image";

interface PolynucleotidesProps {
  locationName?: string;
  servingAreas?: string;
}

export default function PolynucleotidesClient({
  locationName = "St Albans",
  servingAreas = "Harpenden • Luton • Watford • Hertfordshire",
}: PolynucleotidesProps) {
  
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Dynamic Links
  const isBirmingham = locationName === "Birmingham";
  const pricesUrl = isBirmingham ? "/birmingham/prices" : "/prices";
  const faqUrl = isBirmingham ? "/birmingham/faq" : "/faq";

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoaded(true);
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  const handleAction = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("open-contact-drawer"));
    setTimeout(() => {
      const section = document.getElementById("contact-form-section");
      if (section) section.scrollIntoView({ behavior: "smooth" });
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

  const benefits = [
    {
      title: "Deep Bio-Stimulation",
      description: "Unlike fillers that just add volume, this stimulates your own cells to repair and regenerate.",
      icon: FaDna,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Dark Circle Correction",
      description: "Thickens the skin under the eyes to reduce transparency and dark shadows naturally.",
      icon: FaRegLightbulb,
      color: "bg-amber-50 text-amber-600",
    },
    {
      title: "Elasticity & Firmness",
      description: "Boosts collagen and elastin production for firmer, more resilient skin texture.",
      icon: FaShieldAlt,
      color: "bg-teal-50 text-teal-600",
    },
    {
      title: "Hydration from Within",
      description: "Attracts water molecules to the cellular level for a lasting, dewy glow.",
      icon: FaSyringe,
      color: "bg-purple-50 text-purple-600",
    },
  ];

  const faqs = [
    {
      question: "What are Polynucleotides?",
      answer: "Polynucleotides are filtered, ultra-pure DNA fractions derived from salmon or trout. When injected, they act as a 'biostimulator,' signaling your skin cells (fibroblasts) to regenerate, repair tissue, and produce new collagen.",
    },
    {
      question: "Is this the same as Dermal Filler?",
      answer: "No. Fillers (Hyaluronic Acid) are designed to add volume and change shape. Polynucleotides are designed to improve skin quality, hydration, and health without artificially changing your features.",
    },
    {
      question: "How many sessions do I need?",
      answer: "We typically recommend a course of 3 treatments spaced 2–4 weeks apart to achieve the full 'DNA Glow' effect. Maintenance is usually one session every 6–9 months.",
    },
    {
      question: "Can it treat under-eye bags?",
      answer: "Yes, it is excellent for the tear trough area. Because it doesn't attract water like some fillers, it reduces the risk of puffiness while thickening the skin to hide dark circles.",
    },
    {
      question: "Is there downtime?",
      answer: "Minimal. You may have small bumps (papules) at the injection points, which usually settle within 24 hours. Mild bruising is possible but rare.",
    },
  ];

  return (
    <>
      {/* --- HERO SECTION --- */}
      <div className="relative md:h-[calc(100vh-4rem)] pb-5 md:pb-0 lg:h-[calc(100vh-5rem)] overflow-hidden flex items-center justify-center bg-black">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10" /> 
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-10" />
          <Image 
            src="/polynucleotides-hero.webp" 
            alt="Polynucleotides Skin Treatment" 
            fill
            className="object-cover opacity-90"
            priority
            onError={(e) => {
               e.currentTarget.style.display = 'none';
            }}
          />
        </div>

        <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
          <motion.div 
            custom={0}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeUpVariants}
            className="inline-block px-4 py-1.5 mb-4 border border-blue-400/30 rounded-full bg-blue-900/20 backdrop-blur-sm"
          >
            <span className="text-blue-200 text-xs font-bold tracking-widest uppercase font-inter">Regenerative Aesthetics</span>
          </motion.div>

          <motion.h1 
            custom={1}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeUpVariants}
            className="md:text-5xl text-3xl font-bold font-raleway text-white leading-tight mb-4 tracking-tight"
          >
            Polynucleotides: The &quot;DNA Glow&quot;<br />
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-purple-200">
              Healing-PRP Clinics, {locationName}
            </span>
          </motion.h1>

          <motion.p 
            custom={2}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeUpVariants}
            className="mt-4 text-sm md:text-lg text-white/90 font-inter leading-relaxed max-w-2xl mx-auto mb-8"
          >
            A revolutionary, non-surgical treatment that uses filtered DNA fractions to 
            repair skin cells, boost hydration, and restore a natural, youthful glow 
            from within.
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
              className="px-8 py-4 flex items-center justify-center text-sm cursor-pointer bg-white text-slate-900 hover:bg-blue-50 rounded-xl font-bold transition-all duration-300 gap-2 shadow-xl active:scale-95 font-inter"
            >
              <FaEnvelope className="w-4 h-4" /> Book Consultation
            </button>
            <Link
              href={pricesUrl}
              className="px-8 py-4 flex items-center justify-center text-sm cursor-pointer bg-transparent border border-white/30 text-white hover:bg-white/10 rounded-xl font-bold transition-all duration-300 gap-2 backdrop-blur-sm font-inter"
            >
              View Prices
            </Link>
          </motion.div>
          
          <motion.div 
            custom={4}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeUpVariants}
            className="inline-flex items-center justify-center gap-2 px-6 py-2 bg-[#4041d1] text-white rounded-full text-[10px] md:text-xs mt-8 font-bold uppercase tracking-widest font-inter shadow-lg border border-white/10"
          >
             <FaMapMarkerAlt className="text-white/80 mb-0.5" /> 
             <span>Serving: {servingAreas}</span>
          </motion.div>
        </div>
      </div>

      {/* --- BENEFITS SECTION --- */}
      <section className="py-24 bg-slate-50 font-inter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-6">
              True Regeneration, Not Just Correction
            </h2>
            <p className="text-slate-600 text-lg">
              Polynucleotides (PN) work differently from other injectables. Instead of 
              just filling lines, they communicate with your cells to trigger natural repair.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl ${benefit.color} flex items-center justify-center mb-6 text-xl`}>
                  <benefit.icon />
                </div>
                <h3 className="text-xl font-raleway font-bold text-slate-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS / SCIENCE --- */}
      <section className="py-24 bg-white font-inter border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Text */}
            <div>
              <div className="inline-block px-4 py-1.5 bg-purple-50 text-purple-600 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                Science of Skin
              </div>
              <h2 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-6 leading-tight">
                Not a Filler. <br/>A <span className="text-purple-600">Bio-Stimulator.</span>
              </h2>
              <div className="prose prose-lg text-slate-600 mb-8">
                <p>
                  For years, the aesthetic industry focused on &quot;filling&quot; wrinkles. 
                  Polynucleotides represent a shift towards &quot;healing&quot; them.
                </p>
                <p>
                  Derived from highly purified salmon DNA, these molecules mirror human DNA. 
                  When injected, they create an optimal environment for fibroblasts—the 
                  cells responsible for producing collagen.
                </p>
                <p>
                  This process, known as &quot;bio-restructuring,&quot; thickens the epidermis and 
                  improves hydration at a cellular level for a result that looks and feels 
                  completely natural.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {["100% Natural Origin", "Fully Absorbable", "Scientifically Proven", "GMC Doctor Led"].map((item, i) => (
                   <div key={i} className="flex items-center gap-2">
                      <FaCheckCircle className="text-purple-600 shrink-0" />
                      <span className="text-sm font-bold text-slate-800">{item}</span>
                   </div>
                ))}
              </div>
            </div>

            {/* Right: Visual Box */}
            <div className="bg-slate-900 text-white p-10 rounded-[2.5rem] relative overflow-hidden">
               {/* Background Glow */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -ml-16 -mb-16"></div>

               <h3 className="text-2xl font-raleway font-bold mb-6 relative z-10">Treatment Areas</h3>
               <ul className="space-y-6 relative z-10">
                 <li className="flex gap-4">
                    <span className="text-2xl font-bold text-purple-400">01</span>
                    <div>
                       <h4 className="font-bold text-lg">Under Eyes (Tear Troughs)</h4>
                       <p className="text-sm text-slate-300 mt-1">Reduces dark circles and creepsy skin without puffiness.</p>
                    </div>
                 </li>
                 <li className="flex gap-4">
                    <span className="text-2xl font-bold text-purple-400">02</span>
                    <div>
                       <h4 className="font-bold text-lg">Face & Cheeks</h4>
                       <p className="text-sm text-slate-300 mt-1">General glow, tightening, and acne scar reduction.</p>
                    </div>
                 </li>
                 <li className="flex gap-4">
                    <span className="text-2xl font-bold text-purple-400">03</span>
                    <div>
                       <h4 className="font-bold text-lg">Neck & Décolletage</h4>
                       <p className="text-sm text-slate-300 mt-1">Smooths horizontal lines and improves texture.</p>
                    </div>
                 </li>
               </ul>

               <button 
                 onClick={handleAction}
                 className="mt-10 w-full py-4 bg-white text-slate-900 rounded-xl font-bold hover:bg-slate-200 transition-colors"
               >
                 Book Your Assessment
               </button>
            </div>

          </div>
        </div>
      </section>

      {/* --- FAQs --- */}
      <section className="py-24 bg-slate-50 font-inter">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-raleway font-bold text-slate-900">Common Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                <button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-bold text-slate-900 pr-8 text-sm md:text-base">{faq.question}</span>
                  {openFAQIndex === index ? <FaMinus className="text-blue-600 shrink-0" /> : <FaPlus className="text-slate-400 shrink-0" />}
                </button>
                <AnimatePresence>
                  {openFAQIndex === index && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-100 mt-2">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA BAR --- */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
           <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <Link href={pricesUrl} className="text-blue-600 font-bold hover:underline flex items-center gap-2">
                 View Treatment Prices <FaArrowRight className="w-3 h-3"/>
              </Link>
              <span className="hidden md:block text-slate-300">|</span>
              <Link href={faqUrl} className="text-blue-600 font-bold hover:underline flex items-center gap-2">
                 Read Full FAQs <FaArrowRight className="w-3 h-3"/>
              </Link>
           </div>
        </div>
      </section>

      <ContactCTASection />
      <LocationSection />
      <Footer />
    </>
  );
}
