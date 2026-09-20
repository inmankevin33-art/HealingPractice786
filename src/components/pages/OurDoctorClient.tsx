"use client";

import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  FaCheckCircle,
  FaEnvelope,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
  FaArrowRight,
  FaLinkedin
} from "react-icons/fa";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/ContactCTASection";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";

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

  // E-E-A-T JSON-LD Schema (Updated to factual framework)
  const doctorSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr Syed Abdi",
    "medicalSpecialty": ["General Practice", "Regenerative Medicine", "Intimate Health", "Orthopaedics"],
    "identifier": [
      {
        "@type": "PropertyValue",
        "propertyID": "GMC Registration Number",
        "value": "6083294"
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
        "name": "East & North Herts NHS Trust"
      }
    ],
    "knowsAbout": ["Erectile Dysfunction", "Peyronie's Disease", "PRP Joint Injections", "Shockwave Therapy"]
  };

  const expertiseList = [
    { title: "P-Shot / PRP Intimate Health", desc: "Doctor-led PRP treatments used within selected men’s and women’s intimate-health pathways." },
    { title: "Shockwave Therapy", desc: "Non-invasive acoustic-wave treatment used in selected erectile dysfunction and Peyronie’s disease pathways." },
    { title: "PRP Therapy", desc: "Autologous platelet-rich plasma treatments used for selected joint, hair and intimate-health indications." },
    { title: "Joint Injections", desc: "PRP and steroid joint injections following clinical musculoskeletal assessment." },
    { title: "Hair Restoration", desc: "PRP and selected regenerative treatments for hair and scalp concerns." }
  ];

  return (
    <div className="bg-white">
      <Script
        id="doctor-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(doctorSchema) }}
      />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-20 pb-24 lg:pt-28 lg:pb-32 overflow-hidden bg-[#0A1128] text-center">
        <div className="relative z-20 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.h1 
            custom={0} initial="hidden" animate={isLoaded ? "visible" : "hidden"} variants={fadeUpVariants}
            className="text-4xl md:text-6xl font-raleway font-bold text-white leading-tight mb-3 tracking-tight"
          >
            Dr Syed Abdi, MBBS MRCGP
          </motion.h1>

          <motion.p 
            custom={1} initial="hidden" animate={isLoaded ? "visible" : "hidden"} variants={fadeUpVariants}
            className="text-blue-300 text-xs md:text-sm font-bold tracking-[0.2em] uppercase font-inter mb-3"
          >
            Medical Director • Healing-PRP Clinics
          </motion.p>

          <motion.p 
            custom={2} initial="hidden" animate={isLoaded ? "visible" : "hidden"} variants={fadeUpVariants}
            className="text-slate-300 text-sm md:text-base font-medium tracking-wide font-inter mb-8"
          >
            GMC-Registered GP | Regenerative & Intimate Health
          </motion.p>

          <motion.div 
            custom={3} initial="hidden" animate={isLoaded ? "visible" : "hidden"} variants={fadeUpVariants}
            className="w-24 h-1 bg-[#4041d1] mx-auto mb-8"
          />

          <motion.p 
            custom={4} initial="hidden" animate={isLoaded ? "visible" : "hidden"} variants={fadeUpVariants}
            className="text-lg md:text-xl text-slate-300 font-inter leading-relaxed max-w-3xl mx-auto font-light"
          >
            Dr Syed Abdi is a GMC-registered GP and Medical Director of Healing-PRP Clinics. He qualified in medicine in 2003 and has worked in UK healthcare since 2005, with clinical experience spanning general practice, urgent care, emergency medicine and Trauma & Orthopaedics.
          </motion.p>
          
          <motion.p 
            custom={5} initial="hidden" animate={isLoaded ? "visible" : "hidden"} variants={fadeUpVariants}
            className="text-lg md:text-xl text-slate-300 font-inter leading-relaxed max-w-3xl mx-auto font-light mt-6"
          >
            His private clinical work focuses on men’s and women’s intimate health, regenerative medicine, joint injections, hair restoration and selected aesthetic procedures. His approach is based on careful medical assessment, realistic expectations and direct doctor-led care.
          </motion.p>
        </div>
      </section>

      {/* --- QUALIFICATIONS & CLINICAL EXPERIENCE --- */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Factual Credentials & Hospital Background */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants} custom={0}>
              <h2 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-8">Qualifications & Clinical Experience</h2>
              
              <ul className="space-y-4 mb-10 border-l-2 border-[#4041d1]/20 pl-6">
                {[
                  "MBBS – Medical Degree, 2003",
                  "MRCGP – Member of the Royal College of General Practitioners, 2014",
                  "GMC Registered with Licence to Practise",
                  "More than 10 years’ experience as a UK GP"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-slate-900 font-inter text-base font-medium">{item}</span>
                  </li>
                ))}
                <li className="flex items-center gap-3">
                  <span className="text-slate-900 font-inter text-base font-medium flex items-center gap-2">
                    GMC Number: 
                    <a href="https://www.gmc-uk.org/registrants/6083294" target="_blank" rel="noopener noreferrer" className="text-[#4041d1] hover:text-[#2a2bb8] underline flex items-center gap-1 transition-colors">
                      6083294 <FaExternalLinkAlt className="w-3 h-3" />
                    </a>
                  </span>
                </li>
                {/* --- ADDED LINKEDIN LINK --- */}
                <li className="flex items-center gap-3 pt-2">
                  <a href="https://www.linkedin.com/in/syed-abdi-056b28b9" target="_blank" rel="noopener noreferrer" className="text-[#0A66C2] hover:text-[#004182] font-inter text-base font-bold flex items-center gap-2 transition-colors">
                    <FaLinkedin className="w-5 h-5" /> Connect on LinkedIn
                  </a>
                </li>
              </ul>
              
              <p className="text-slate-600 font-inter leading-relaxed text-sm bg-slate-50 p-6 rounded-xl border border-slate-100 mb-4">
                Before completing GP training, Dr Abdi worked extensively in hospital medicine, including Emergency Medicine and Trauma & Orthopaedics. This background provided broad experience in acute assessment, musculoskeletal conditions, minor injuries and procedural medicine.
              </p>
              <p className="text-slate-600 font-inter leading-relaxed text-sm bg-slate-50 p-6 rounded-xl border border-slate-100">
                Dr Abdi has worked extensively in NHS urgent care, including Urgent Treatment Centre services within the East & North Herts NHS Trust. His current NHS work includes urgent care at Lister Hospital, Stevenage.
              </p>
            </motion.div>

            {/* Right: Portrait */}
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={fadeUpVariants} 
              custom={1} 
              className="relative h-[600px] w-full bg-slate-100 rounded-2xl overflow-hidden group shadow-xl"
            >
               <Image 
                 src="/DrAbdi.webp"
                 alt="Dr Syed Abdi - Lead Clinician"
                 fill
                 sizes="(max-width: 768px) 100vw, 50vw"
                 className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- BACKGROUND SECTIONS (High Contrast Dark Block) --- */}
      <section className="py-24 bg-[#0A1128] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants} custom={1}>
              <h2 className="text-2xl md:text-3xl font-raleway font-bold mb-6">Clinical Focus in Men’s & Women’s Intimate Health</h2>
              <div className="w-12 h-1 bg-[#4041d1] mb-8" />
              <p className="text-slate-300 font-inter leading-relaxed mb-6">
                A significant part of Dr Abdi’s private practice focuses on men’s and women’s intimate health. He regularly assesses patients with erectile dysfunction, Peyronie’s disease, premature ejaculation, vaginal dryness and other intimate health concerns. Treatment planning may include regenerative procedures such as PRP-based treatments, shockwave therapy, hyaluronic acid treatments and other clinically appropriate options following individual assessment.
              </p>
              <p className="text-slate-300 font-inter leading-relaxed">
                Dr Abdi has extensive experience in PRP-based intimate-health treatments and has undertaken specific training in P-Shot and O-Shot procedures. His approach combines careful medical assessment, procedural experience and realistic discussion of expected outcomes.
              </p>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants} custom={0}>
              <h2 className="text-2xl md:text-3xl font-raleway font-bold mb-6">NHS & Hospital Background</h2>
              <div className="w-12 h-1 bg-[#4041d1] mb-8" />
              <p className="text-slate-300 font-inter leading-relaxed mb-6">
                Before entering General Practice, Dr Abdi spent several years working in Trauma & Orthopaedics and Emergency Medicine. This experience provides a strong foundation in musculoskeletal anatomy, clinical examination, joint conditions and injection-based procedures.
              </p>
              <p className="text-white font-inter font-medium text-lg border-l-4 border-[#4041d1] pl-4">
                Today, this experience supports his work in PRP joint injections, steroid joint injections and musculoskeletal assessment.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- REGENERATIVE MEDICINE --- */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants}>
            <h2 className="text-3xl font-raleway font-bold text-slate-900 mb-6">Regenerative Medicine</h2>
            <p className="text-slate-600 font-inter leading-relaxed text-lg mb-6">
              Dr Abdi’s regenerative medicine work includes PRP-based treatments for selected musculoskeletal, hair and intimate-health concerns, alongside other emerging regenerative procedures. The strength of clinical evidence varies between treatments and conditions. Patients are given a realistic explanation of the available evidence, potential benefits, limitations and alternatives before deciding whether to proceed.
            </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- TREATMENT CARDS (Factual Grid) --- */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseList.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-lg font-raleway font-bold text-slate-900 mb-3">{item.title}</h4>
                <p className="text-slate-600 font-inter text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PRESCRIBING & PHILOSOPHY --- */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants} className="mb-20">
            <h2 className="text-3xl font-raleway font-bold text-slate-900 mb-6 text-center">Personalised Medical Assessment & Prescribing</h2>
            <p className="text-slate-600 font-inter leading-relaxed text-center text-lg max-w-3xl mx-auto">
              Where medication is clinically appropriate, prescribing follows a full medical assessment, review of current medication, relevant contraindications and appropriate follow-up. Treatment decisions are individualised rather than based on a standardised one-size-fits-all approach.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants} className="text-center border-t border-slate-200 pt-20">
            <h2 className="text-3xl font-raleway font-bold text-slate-900 mb-6">A Medical Approach Built Around Assessment</h2>
            <p className="text-slate-600 font-inter leading-relaxed text-lg mb-6">
              Dr Abdi believes private treatment should begin with understanding the patient rather than selling a procedure. Consultations focus on symptoms, medical history, previous treatments, expectations and the available clinical evidence before deciding whether an intervention is appropriate.
            </p>
            <p className="text-slate-600 font-inter leading-relaxed text-lg">
              Where treatment is unlikely to provide meaningful benefit, this is discussed openly. Where another specialist or conventional treatment is more appropriate, patients are advised accordingly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- WHERE DR ABDI CONSULTS --- */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-raleway font-bold text-slate-900 mb-4">Where Dr Abdi Consults</h2>
          <p className="text-slate-600 font-inter mb-12">Dr Syed Abdi sees private patients across Healing-PRP Clinics in:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link href="/birmingham" className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-[#4041d1] transition-all group flex flex-col items-center">
              <FaMapMarkerAlt className="text-[#4041d1] text-2xl mb-3" />
              <h3 className="font-bold text-slate-900 mb-1">Birmingham</h3>
              <p className="text-sm text-slate-500 mb-4">Edgbaston, Birmingham</p>
              <span className="text-xs font-bold text-[#4041d1] uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">Visit Birmingham Clinic <FaArrowRight /></span>
            </Link>
            
            <Link href="/hampstead" className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-[#4041d1] transition-all group flex flex-col items-center">
              <FaMapMarkerAlt className="text-[#4041d1] text-2xl mb-3" />
              <h3 className="font-bold text-slate-900 mb-1">Hampstead</h3>
              <p className="text-sm text-slate-500 mb-4">Hampstead, London</p>
              <span className="text-xs font-bold text-[#4041d1] uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">Visit Hampstead Clinic <FaArrowRight /></span>
            </Link>

            <Link href="/" className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-[#4041d1] transition-all group flex flex-col items-center">
              <FaMapMarkerAlt className="text-[#4041d1] text-2xl mb-3" />
              <h3 className="font-bold text-slate-900 mb-1">St Albans</h3>
              <p className="text-sm text-slate-500 mb-4">St Albans, Hertfordshire</p>
              <span className="text-xs font-bold text-[#4041d1] uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">Visit St Albans Clinic <FaArrowRight /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA: A STRICTLY DOCTOR-LED MODEL --- */}
      <section className="py-24 bg-slate-100 text-center font-inter px-4 border-t border-slate-200">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl md:text-5xl font-raleway font-bold text-slate-900 mb-8">Direct Doctor-Led Care</h3>
          <p className="text-slate-600 text-lg leading-relaxed mb-10">
            Patients are assessed and treated within a doctor-led clinical pathway. Dr Abdi is directly involved in consultation, treatment planning and clinical follow-up where appropriate.
          </p>
          <button 
            onClick={handleAction}
            className="px-8 py-4 bg-[#0A1128] hover:bg-slate-800 text-white rounded-xl font-bold transition-all duration-300 gap-2 shadow-xl shadow-slate-900/20 active:scale-95 font-inter inline-flex items-center"
          >
            <FaEnvelope className="w-4 h-4 mr-2" /> Book a Consultation with Dr Syed Abdi
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
