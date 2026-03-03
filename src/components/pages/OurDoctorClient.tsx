"use client";

import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  FaUserMd,
  FaAward,
  FaShieldAlt,
  FaStethoscope,
  FaCheckCircle,
  FaEnvelope,
  FaDna,
  FaNotesMedical,
  FaRegIdCard
} from "react-icons/fa";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/ContactCTASection";
import Script from "next/script";

export default function AboutClient() {
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
    hidden: { opacity: 0, y: 15 },
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
    "name": "Dr [Full Name]",
    "medicalSpecialty": "Sexual Health & Regenerative Medicine",
    "identifier": [
      {
        "@type": "PropertyValue",
        "propertyID": "GMC Registration Number",
        "value": "[GMC Number]"
      }
    ],
    "worksFor": {
      "@type": "MedicalClinic",
      "name": "Healing-PRP Clinics",
      "url": "https://www.healing-prp.co.uk"
    },
    "knowsAbout": ["Erectile Dysfunction", "Premature Ejaculation", "Peyronie's Disease", "PRP Therapy", "Shockwave Therapy"]
  };

  const expertiseList = [
    "Erectile Dysfunction (vascular and neurogenic contributors)",
    "Premature Ejaculation and sensitivity disorders",
    "Peyronie’s Disease and plaque-related curvature",
    "PRP (Platelet-Rich Plasma) therapy",
    "P-Shot® and O-Shot® regenerative treatments",
    "Shockwave therapy for vascular improvement",
    "Bespoke, compounded medication protocols"
  ];

  return (
    <>
      <Script
        id="doctor-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(doctorSchema) }}
      />

      {/* --- HERO SECTION --- */}
      <div className="relative md:h-[65vh] pb-5 md:pb-0 lg:h-[70vh] overflow-hidden flex items-center justify-center bg-[#0A1128]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10" /> 
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1128]/90 via-transparent to-[#0A1128]/95 z-10" />
          {/* Replace with a professional clinic/doctor image if available */}
          <div className="absolute inset-0 w-full h-full bg-slate-900 opacity-90" />
        </div>

        <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24">
          <motion.div 
            custom={0} initial="hidden" animate={isLoaded ? "visible" : "hidden"} variants={fadeUpVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 border border-blue-400/30 rounded-full bg-blue-900/20 backdrop-blur-sm"
          >
            <FaUserMd className="text-blue-300" />
            <span className="text-blue-200 text-xs font-bold tracking-widest uppercase font-inter">Meet Your Doctor</span>
          </motion.div>

          <motion.h1 
            custom={1} initial="hidden" animate={isLoaded ? "visible" : "hidden"} variants={fadeUpVariants}
            className="md:text-6xl text-4xl font-bold font-raleway text-white leading-tight mb-6 tracking-tight"
          >
            Doctor-Led Sexual Health <br className="hidden md:block" /> & Regenerative Medicine
          </motion.h1>

          <motion.p 
            custom={2} initial="hidden" animate={isLoaded ? "visible" : "hidden"} variants={fadeUpVariants}
            className="mt-2 text-base md:text-xl text-blue-50/90 font-inter leading-relaxed max-w-3xl mx-auto mb-10 font-medium"
          >
            At Healing-PRP Clinics, your care is delivered exclusively by a qualified medical doctor. We are not a volume-based prescribing service, nor a nurse-led injection clinic.
          </motion.p>
        </div>
      </div>

      {/* --- CREDENTIALS & PHILOSOPHY --- */}
      <section className="py-20 bg-slate-50 font-inter -mt-10 relative z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Col: Credentials Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="lg:col-span-5 bg-white rounded-[2rem] p-8 border border-slate-200 shadow-xl shadow-slate-200/50 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-[#4041d1]"></div>
              <div className="w-16 h-16 bg-blue-50 text-[#4041d1] rounded-2xl flex items-center justify-center text-3xl mb-6">
                <FaRegIdCard />
              </div>
              <h2 className="text-2xl font-raleway font-bold text-slate-900 mb-2">Dr [Full Name]</h2>
              <p className="text-[#4041d1] font-bold text-sm tracking-widest uppercase mb-6">Medical Director</p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-[#4041d1] mt-1 shrink-0" />
                  <span className="text-slate-700 text-sm font-medium"><strong>GMC No:</strong> [GMC Number]</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-[#4041d1] mt-1 shrink-0" />
                  <span className="text-slate-700 text-sm font-medium">Fully registered medical practitioner in the UK</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-[#4041d1] mt-1 shrink-0" />
                  <span className="text-slate-700 text-sm font-medium">Officially licensed & trained by the Cellular Medicine Association (CMA)</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-[#4041d1] mt-1 shrink-0" />
                  <span className="text-slate-700 text-sm font-medium">Specialist interest in regenerative therapies</span>
                </li>
              </ul>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Dr [Surname] practises in accordance with GMC standards for safe prescribing, ethical practice, and patient-centred care. All treatments are delivered within UK regulatory frameworks.
                </p>
              </div>
            </motion.div>

            {/* Right Col: The Copy */}
            <div className="lg:col-span-7 space-y-12">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h3 className="text-3xl font-raleway font-bold text-slate-900 mb-6">Clinical Focus & Specialist Interest</h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Sexual health concerns require discretion, medical insight, and careful evaluation. Our model is intentionally structured around private, one-to-one care, providing a level of clinical continuity rarely found in corporate treatment centres.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  {expertiseList.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                      <FaAward className="text-[#4041d1] mt-0.5 shrink-0" />
                      <span className="text-slate-700 text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                 <p className="text-slate-600 text-lg leading-relaxed">
                  Rather than treating symptoms in isolation, Dr [Surname] conducts a structured medical evaluation to identify underlying causes—including cardiovascular risk factors, hormonal imbalance, psychological contributors, and medication interactions. This comprehensive approach ensures treatment is both appropriate and medically sound.
                </p>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* --- APPROACH SECTION --- */}
      <section className="py-24 bg-white font-inter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="bg-blue-50/50 p-10 rounded-[2rem] border border-blue-100"
            >
              <div className="w-14 h-14 bg-white text-[#4041d1] rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-sm">
                <FaDna />
              </div>
              <h3 className="text-2xl font-raleway font-bold text-slate-900 mb-4">Regenerative Medicine Expertise</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Regenerative therapies such as PRP require anatomical precision, clinical judgement, and appropriate patient selection. These are not cosmetic enhancements—they are biologically driven interventions designed to stimulate tissue repair and improved functional performance.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Treatments are performed using medical-grade equipment, following established sterile techniques. The objective is not temporary symptom masking, but measurable physiological improvement.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="bg-slate-50 p-10 rounded-[2rem] border border-slate-200"
            >
              <div className="w-14 h-14 bg-white text-[#4041d1] rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-sm">
                <FaNotesMedical />
              </div>
              <h3 className="text-2xl font-raleway font-bold text-slate-900 mb-4">Responsible Prescribing</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Online prescribing platforms frequently rely on automated questionnaires. In contrast, Dr [Surname] conducts a detailed consultation to allow for individualised dosage planning, monitoring of systemic risk, and avoidance of unnecessary medication.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Each prescription is tailored specifically to your physiology and treatment goals—prioritising safety, efficacy, and long-term sustainability.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- A STRICTLY DOCTOR-LED MODEL --- */}
      <section className="py-24 bg-[#0A1128] text-center font-inter px-4">
        <div className="max-w-4xl mx-auto">
          <FaShieldAlt className="text-[#4041d1] text-5xl mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl md:text-5xl font-raleway font-bold text-white mb-8">A Strictly Doctor-Led Model</h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
            Many high-volume clinics separate consultation, prescribing, and treatment delivery across multiple staff members. At Healing-PRP Clinics, your care remains under the direct supervision of a doctor throughout. There are no sales consultations and no delegated treatment pathways.
          </p>
          <button 
            onClick={handleAction}
            className="px-8 py-4 bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-xl font-bold transition-all duration-300 gap-2 shadow-xl shadow-[#4041d1]/20 active:scale-95 font-inter inline-flex items-center"
          >
            <FaEnvelope className="w-4 h-4" /> Book a Private Consultation
          </button>
        </div>
      </section>

      <div id="contact-form-section">
        <ContactCTASection />
      </div>
      <LocationSection /> 
      <Footer />
    </>
  );
}
