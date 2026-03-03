"use client";

import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  FaCheckCircle,
  FaEnvelope,
  FaRegIdCard
} from "react-icons/fa";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/ContactCTASection";
import Script from "next/script";
import Link from "next/link";

export default function OurDoctorClient() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoaded(true);
  }, []);

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
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i * 0.15, ease: "easeOut" },
    }),
  };

  // E-E-A-T JSON-LD Schema
  const doctorSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr Syed Abdi",
    "medicalSpecialty": ["General Practice", "Sexual Health", "Regenerative Medicine"],
    "identifier": [
      {
        "@type": "PropertyValue",
        "propertyID": "GMC Registration Number",
        "value": "[Insert GMC Number]"
      }
    ],
    "worksFor": [
      {
        "@type": "MedicalClinic",
        "name": "Healing-PRP Clinics",
        "url": "https://www.healing-prp.co.uk"
      },
      {
        "@type": "Hospital",
        "name": "Royal Free Hospital"
      }
    ],
    "knowsAbout": ["Erectile Dysfunction", "P-Shot®", "O-Shot®", "Ultrasound-Guided PRP Joint Injections", "Facial Aesthetics", "Hair Restoration"]
  };

  const expertiseList = [
    { title: "Erectile Dysfunction", desc: "Vascular & performance-related" },
    { title: "Premature Ejaculation", desc: "Sensitivity & control disorders" },
    { title: "Peyronie’s Disease", desc: "Plaque-related curvature management" },
    { title: "PRP Therapy", desc: "Platelet-Rich Plasma tissue regeneration" },
    { title: "P-Shot® & O-Shot®", desc: "Advanced regenerative sexual health treatments" },
    { title: "Shockwave Therapy", desc: "Vascular restoration and angiogenesis" },
    { title: "Personalised Prescribing", desc: "Bespoke, compounded medication protocols" }
  ];

  return (
    <div className="bg-white">
      <Script
        id="doctor-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(doctorSchema) }}
      />

      {/* --- ELITE HERO SECTION (Dark & Minimalist) --- */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-[#0A1128] text-center">
        <div className="relative z-20 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p 
            custom={0} initial="hidden" animate={isLoaded ? "visible" : "hidden"} variants={fadeUpVariants}
            className="text-blue-300 text-xs md:text-sm font-bold tracking-[0.2em] uppercase font-inter mb-6"
          >
            Medical Director • Dr Syed Abdi
          </motion.p>

          <motion.h1 
            custom={1} initial="hidden" animate={isLoaded ? "visible" : "hidden"} variants={fadeUpVariants}
            className="text-4xl md:text-6xl font-raleway font-bold text-white leading-tight mb-8 tracking-tight"
          >
            Clinical Excellence in <br className="hidden md:block" /> Sexual Health & Regenerative Medicine
          </motion.h1>

          <motion.div 
            custom={2} initial="hidden" animate={isLoaded ? "visible" : "hidden"} variants={fadeUpVariants}
            className="w-24 h-1 bg-[#4041d1] mx-auto mb-8"
          />

          <motion.p 
            custom={3} initial="hidden" animate={isLoaded ? "visible" : "hidden"} variants={fadeUpVariants}
            className="text-lg md:text-xl text-slate-300 font-inter leading-relaxed max-w-3xl mx-auto font-light"
          >
            Our practice is built on a simple principle: complex medical concerns require direct doctor oversight. By combining rigorous NHS clinical standards with advanced private regenerative therapies, Dr Abdi provides structured, evidence-based treatment in a strictly one-to-one environment.
          </motion.p>
        </div>
      </section>

      {/* --- THE "EZRA" SPLIT PROFILE SECTION --- */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Elite Typography Credentials */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants} custom={0}>
              <h2 className="text-sm font-bold text-[#4041d1] uppercase tracking-widest font-inter mb-4">Medical Registration & Professional Standing</h2>
              <h3 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-8">Dr Syed Abdi</h3>
              
              <ul className="space-y-6 mb-10 border-l-2 border-slate-100 pl-6">
                {[
                  "10+ Years Clinical Experience as a General Practitioner",
                  "NHS Practice at the Royal Free Hospital",
                  "Former Senior Clinical Fellow in Orthopaedics",
                  "Certified Provider – Cellular Medicine Association (CMA)",
                  "Advanced Training in PRP & Regenerative Injection Techniques",
                  "GMC Registration Number: [Insert Number]"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-slate-900 font-inter text-base font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-slate-600 font-inter leading-relaxed text-sm bg-slate-50 p-6 rounded-xl border border-slate-100">
                Dr Abdi practises in accordance with General Medical Council standards for safe prescribing, ethical practice, and patient-centred care. All treatments are delivered within UK regulatory frameworks.
              </p>
            </motion.div>

            {/* Right: The Portrait Placement (Crucial for the Ezra look) */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants} custom={1} className="relative h-[600px] w-full bg-slate-100 rounded-2xl overflow-hidden group">
               {/* INSTRUCTION: Replace this div with a Next/Image of Dr. Abdi in a suit or scrubs. A black & white filter works beautifully here. */}
               <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 p-8 text-center border-2 border-dashed border-slate-300 rounded-2xl m-4">
                  <FaRegIdCard className="text-5xl mb-4 opacity-50" />
                  <p className="font-inter text-sm font-bold uppercase tracking-widest">Portrait Placement</p>
                  <p className="font-inter text-xs mt-2 max-w-xs">Upload a high-quality, professional headshot or clinical photograph of Dr. Abdi here to complete the aesthetic.</p>
               </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- SPECIALIST CLINICAL FOCUS (Minimalist Grid) --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-6">Specialist Clinical Focus</h2>
            <p className="text-slate-600 font-inter text-lg leading-relaxed">
              Rather than offering generic solutions, Dr Abdi conducts a structured medical assessment to identify underlying contributors — including cardiovascular risk, hormonal factors, neurological sensitivity, medication interactions, and psychological influences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertiseList.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-lg font-raleway font-bold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-slate-500 font-inter text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-slate-800 font-inter font-medium text-lg">
              This structured approach ensures treatment is medically appropriate, safe, and physiologically targeted.
            </p>
          </div>
        </div>
      </section>

      {/* --- THE ORTHOPAEDIC & AUTHORITY SECTION (High Contrast Dark Block) --- */}
      <section className="py-24 bg-[#0A1128] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants} custom={0}>
              <h2 className="text-3xl font-raleway font-bold mb-6">The Orthopaedic Precision Advantage</h2>
              <div className="w-12 h-1 bg-[#4041d1] mb-8" />
              <p className="text-slate-300 font-inter leading-relaxed mb-6">
                Unlike many aesthetic-led clinics, Dr Abdi’s background in Orthopaedics and ultrasound-guided injection therapy provides advanced anatomical precision.
              </p>
              <p className="text-slate-300 font-inter leading-relaxed mb-8">
                Experience in musculoskeletal anatomy and guided injection techniques translates directly into greater procedural accuracy, improved safety margins, and precise tissue placement.
              </p>
              <p className="text-white font-inter font-medium text-lg border-l-4 border-[#4041d1] pl-4">
                Regenerative treatments demand clinical precision. They are not cosmetic enhancements — they are biological interventions designed to stimulate measurable tissue repair.
              </p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants} custom={1}>
              <h2 className="text-3xl font-raleway font-bold mb-6">Sexual Health Authority</h2>
              <div className="w-12 h-1 bg-[#4041d1] mb-8" />
              <p className="text-slate-300 font-inter leading-relaxed mb-6">
                As a certified provider with the Cellular Medicine Association (CMA), Dr Abdi is among a limited number of UK clinicians formally trained in advanced PRP sexual rejuvenation therapies.
              </p>
              <p className="text-slate-300 font-inter leading-relaxed mb-6">
                Having performed over <strong>200 P-Shot® procedures</strong> and numerous O-Shot® treatments, he possesses detailed insight into tissue regeneration, angiogenesis (new blood vessel formation), and functional vascular improvement.
              </p>
              <p className="text-white font-inter font-medium text-lg border-l-4 border-[#4041d1] pl-4">
                These are medical interventions aimed at restoring physiology — not masking symptoms.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- PRESCRIBING & PHILOSOPHY (Clean White) --- */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants} className="mb-20">
            <h2 className="text-3xl font-raleway font-bold text-slate-900 mb-6 text-center">Responsible & Personalised Prescribing</h2>
            <p className="text-slate-600 font-inter leading-relaxed text-center text-lg mb-10">
              High-volume online services frequently rely on automated questionnaires and standardised dosing. At Healing-PRP Clinics, prescribing follows a rigorous medical protocol.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {[
                "A full 1:1 consultation",
                "Cardiovascular risk assessment",
                "Medication history review",
                "Dose tailoring based on response",
                "Ongoing monitoring when required"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-slate-50 p-4 rounded-lg">
                  <FaCheckCircle className="text-[#4041d1] shrink-0" />
                  <span className="text-slate-800 font-inter font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-slate-800 font-inter text-center mt-8 font-bold">
              Every formulation is individualised to the patient’s physiology and clinical profile — prioritising safety, efficacy, and long-term health.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants} className="text-center border-t border-slate-200 pt-20">
            <h2 className="text-3xl font-raleway font-bold text-slate-900 mb-6">Philosophy of Care</h2>
            <p className="text-slate-600 font-inter leading-relaxed text-lg mb-6">
              Sexual health is closely linked to cardiovascular function, hormonal balance, psychological wellbeing, and overall quality of life. Dr Abdi believes treatment must address the whole patient — not simply the symptom.
            </p>
            <p className="text-slate-600 font-inter leading-relaxed text-lg">
              Consultations are confidential, structured, and medically grounded. Patients receive clear explanations, realistic expectations, and transparent risk discussion. The goal is sustainable physiological improvement — delivered discreetly and responsibly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- FINAL CTA: A STRICTLY DOCTOR-LED MODEL --- */}
      <section className="py-24 bg-slate-100 text-center font-inter px-4 border-t border-slate-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-sm font-bold text-[#4041d1] uppercase tracking-widest font-inter mb-4">A Strictly Doctor-Led Model</h2>
          <h3 className="text-3xl md:text-5xl font-raleway font-bold text-slate-900 mb-8">Uncompromising Clinical Accountability</h3>
          <p className="text-slate-600 text-lg leading-relaxed mb-10">
            Many clinics separate consultation, prescribing, and treatment across multiple staff members. Here, there are no sales consultations, no delegated treatment pathways, no algorithm-based prescribing, and no nurse-led procedural substitutions. Your care remains under direct medical supervision throughout.
          </p>
          <button 
            onClick={handleAction}
            className="px-8 py-4 bg-[#0A1128] hover:bg-slate-800 text-white rounded-xl font-bold transition-all duration-300 gap-2 shadow-xl shadow-slate-900/20 active:scale-95 font-inter inline-flex items-center"
          >
            <FaEnvelope className="w-4 h-4" /> Arrange a Private Consultation
          </button>
        </div>
      </section>

      <div id="contact-form-section">
        <ContactCTASection />
      </div>
      <LocationSection /> 
      <Footer />
    </div>
  );
}
