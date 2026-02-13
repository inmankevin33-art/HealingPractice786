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
              href={
