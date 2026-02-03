"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  FaCheck,
  FaChevronDown,
  FaChevronUp,
  FaPlus,
  FaMinus,
  FaEnvelope,
} from "react-icons/fa";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/ContactCTASection";
import Link from "next/link";
import { BookOpen } from "lucide-react";

type SexualHealthClientProps = {
  locationName?: string;
};

export default function SexualHealthClient({
  locationName = "St Albans",
}: SexualHealthClientProps) {
  const [expandedTreatment, setExpandedTreatment] = useState<string | null>(null);
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

  const nearbyAreas =
    locationName === "Birmingham"
      ? "Solihull, Edgbaston, Sutton Coldfield, and the West Midlands"
      : "Harpenden, Watford, Welwyn Garden City, Hitchin, Luton, Hertford, and London";

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  const handleAction = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("open-contact-drawer"));
    const section = document.getElementById("contact-form-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const treatments = [
    {
      name: "P‑Shot®",
      description: "Standard PRP treatment for mild to moderate erectile dysfunction",
      benefits: [
        "Improve erection firmness and duration",
        "Enhance sensitivity and confidence",
        "Support blood flow and repair",
      ],
      duration: "30–45 minutes",
      course: "Up to 3 injections",
      expandedContent: {
        howItWorks: "A small blood sample is processed into PRP and carefully injected into precise areas to stimulate tissue regeneration.",
        whoIsItFor: ["Men with mild to moderate ED", "Those wanting improved performance", "Peyronie's disease sufferers"],
        commonQuestions: [
          { question: "Is it painful?", answer: "Only mild discomfort; we apply high-strength numbing cream beforehand." }
        ]
      },
    },
    {
      name: "Exomine® P‑Shot",
      description: "Advanced PRP treatment with stronger, longer-lasting results",
      benefits: ["Stronger vascular regeneration", "Increased sensitivity", "Deeper tissue repair"],
      duration: "~60 minutes",
      course: "Up to 3 injections",
      expandedContent: {
        howItWorks: "Exomine technology releases growth factors immediately into the plasma for faster acting results.",
        whoIsItFor: ["Moderate to severe ED", "Diabetes-related circulatory issues", "Poor response to standard PRP"],
        commonQuestions: [
          { question: "Is it longer lasting?", answer: "Often yes, due to the concentrated growth factor release." }
        ]
      },
    },
    {
      name: "O‑Shot®",
      description: "Female rejuvenation for improved sensitivity and vaginal health",
      benefits: ["Enhances sensation", "Supports natural lubrication", "Treats stress urinary incontinence"],
      duration: "30–45 minutes",
      course: "Up to 3 injections",
      expandedContent: {
        howItWorks: "PRP is injected into precise areas to stimulate collagen and blood vessel repair, improving sensitivity and health.",
        whoIsItFor: ["Dryness or discomfort", "Difficulty achieving orgasm", "Stress incontinence issues"],
        commonQuestions: [
          { question: "Is recovery quick?", answer: "Yes, you can return to normal daily activities immediately." }
        ]
      },
    },
  ];

  const faqs = [
    {
      question: "How soon will I see results?",
      answer: "Improvements are often noticed within weeks, with continued gains over 2–3 months. Individual results vary.",
    },
    {
      question: "Is this a natural treatment?",
      answer: "Yes. Both P-Shot and O-Shot use your own Platelet-Rich Plasma, making it a natural, autologous procedure.",
    },
    {
      question: "Is there downtime?",
      answer: "Minimal. Most patients resume daily activities immediately after the procedure.",
    },
    {
      question: `Do you offer this near ${locationName}?`,
      answer: `Yes, our clinic in ${locationName} serves patients from ${nearbyAreas}.`,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[55vh] md:min-h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white z-10" />
          <img src="/hero_img.png" alt="Sexual Rejuvenation" className="w-full h-full object-cover" />
        </div>
        <div className="relative w-full z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={containerVariants}>
            <motion.div className="inline-block px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-xs font-medium mb-4" variants={itemVariants}>
              GMC‑registered | CE‑marked | Confidential Care
            </motion.div>
            <motion.h1 className="text-2xl lg:text-4xl text-gray-700 font-semibold mb-2" variants={itemVariants}>
              Sexual Rejuvenation in {locationName}
              <span className="block mt-1">Healing-PRP Clinics</span>
            </motion.h1>
            <motion.p className="text-sm text-gray-500 leading-relaxed max-w-3xl mb-6" variants={itemVariants}>
              Safe, non-surgical solutions to support confidence, sensitivity, and intimacy delivered by a GMC-registered doctor.
            </motion.p>
            <motion.div variants={itemVariants} className="flex gap-4">
              <button onClick={handleAction} className="px-10 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-xl gap-2 flex items-center group active:scale-95">
                <FaEnvelope className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                Book Consultation
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-8 border-b border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {treatments.map((t, i) => (
              <a key={i} href={`#${t.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}`} className="px-4 py-2 text-sm border bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                {t.name}
              </a>
            ))}
            <a href="#comparison" className="px-4 py-2 text-sm border bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">Comparison</a>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section id="treatments" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {treatments.map((treatment, index) => (
              <motion.div key={index} id={treatment.name.toLowerCase().replace(/[^a-z0-9]/g, "-")} className="bg-slate-50 rounded-2xl p-8 lg:p-12" variants={itemVariants}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{treatment.name}</h3>
                    <p className="text-sm text-slate-600 mb-6">{treatment.description}</p>
                    <ul className="space-y-3">
                      {treatment.benefits.map((b, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                          <FaCheck className="text-blue-600 mt-1" /> {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                    <h4 className="font-bold mb-4">Details</h4>
                    <div className="text-sm space-y-2 mb-6">
                      <p><span className="font-semibold">Duration:</span> {treatment.duration}</p>
                      <p><span className="font-semibold">Course:</span> {treatment.course}</p>
                    </div>
                    <button onClick={handleAction} className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 group active:scale-95">
                      <FaEnvelope className="group-hover:rotate-12 transition-transform" />
                      Book Consultation
                    </button>
                  </div>
                </div>
                
                <div className="mt-6">
                  <button onClick={() => setExpandedTreatment(expandedTreatment === treatment.name ? null : treatment.name)} className="text-blue-600 text-sm font-semibold flex items-center gap-2">
                    {expandedTreatment === treatment.name ? <>Show Less <FaChevronUp /></> : <>Learn More <FaChevronDown /></>}
                  </button>
                </div>

                <AnimatePresence>
                  {expandedTreatment === treatment.name && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden mt-6 border-t pt-6">
                      <p className="text-sm text-slate-600">{treatment.expandedContent.howItWorks}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="comparison" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Treatment Comparison</h2>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-200">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-slate-50">
                  <tr className="text-left">
                    <th className="p-4 font-semibold">Feature</th>
                    <th className="p-4 font-semibold">P-Shot®</th>
                    <th className="p-4 font-semibold">Exomine® P-Shot</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="p-4 font-medium">Type</td>
                    <td className="p-4">Standard PRP</td>
                    <td className="p-4">Stressed PRP (Higher Growth Factors)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Best For</td>
                    <td className="p-4">Mild-Moderate ED</td>
                    <td className="p-4">Longstanding or Severe ED</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Standardized CTA Bar */}
      <section className="py-12 bg-white border-t border-slate-50">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-4">
          <Link href={locationName === "Birmingham" ? "/birmingham/prices" : "/prices"} className="px-8 py-3.5 w-full md:w-max flex items-center justify-center text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-lg active:scale-95 gap-2">
            View Treatment Prices
          </Link>
          <Link href={locationName === "Birmingham" ? "/birmingham/faq" : "/faq"} className="px-8 py-3.5 w-full md:w-max flex items-center justify-center text-sm border-2 border-blue-600 text-blue-600 hover:bg-blue-50 bg-white rounded-xl font-bold transition-all active:scale-95 gap-2">
            View Clinic FAQs
          </Link>
        </div>
      </section>

      {/* Standardized FAQ Section */}
      <section id="faqs" className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-xs font-medium mb-4">FAQs</div>
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                <button onClick={() => toggleFAQ(index)} className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors">
                  <h3 className="font-semibold text-slate-900 pr-4">{faq.question}</h3>
                  <div className="text-blue-600">{openFAQIndex === index ? <FaMinus /> : <FaPlus />}</div>
                </button>
                <AnimatePresence>
                  {openFAQIndex === index && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <div className="px-6 pb-6 pt-2 border-t border-slate-50 text-sm text-slate-600 leading-relaxed">
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

      <div id="contact-form-section">
        <ContactCTASection />
      </div>
      <Footer />
    </>
  );
}
