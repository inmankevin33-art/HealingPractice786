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
        howItWorks: "A small blood sample of around 40ml is processed into high‑quality PRP (Platelet‑Rich Plasma). After numbing cream is applied, the PRP is carefully injected into precise areas to stimulate repair and regeneration. You can return to work straight away.",
        whoIsItFor: [
          "Men with mild to moderate erectile dysfunction",
          "Reduced penile sensitivity or performance anxiety",
          "Peyronie's disease (penile curvature)",
          "Restoring confidence after diabetes or circulatory problems"
        ],
        commonQuestions: [
          { question: "Is it painful?", answer: "Only mild discomfort; we apply high-strength numbing cream beforehand." },
          { question: "How soon will I see results?", answer: "Many notice improvements within weeks, with further gains over 2–3 months." }
        ]
      },
    },
    {
      name: "Exomine® P‑Shot",
      description: "Advanced PRP treatment with stronger, longer-lasting results",
      benefits: ["Stronger vascular regeneration", "Increased responsiveness", "Deeper tissue repair"],
      duration: "~60 minutes",
      course: "Up to 3 injections",
      expandedContent: {
        howItWorks: "Exomine technology processes the PRP so that growth factors are already released and active in the plasma. This means they are ready to work immediately upon injection for deeper signaling.",
        whoIsItFor: [
          "Moderate to severe erectile dysfunction",
          "Patients wanting stronger results than standard PRP",
          "Diabetes or longstanding circulatory issues",
          "Advanced Peyronie's disease cases"
        ],
        commonQuestions: [
          { question: "How is it different?", answer: "Standard PRP releases factors gradually; Exomine has them ready to act immediately." }
        ]
      },
    },
    {
      name: "Shockwave Therapy",
      description: "Non-invasive Li-ESWT for vascular and tissue restoration",
      benefits: ["Stimulates new blood vessel growth", "Improves natural blood flow", "Boosts results of PRP treatments"],
      duration: "20–30 minutes",
      course: "6+ sessions recommended",
      expandedContent: {
        howItWorks: "Low-Intensity Extracorporeal Shockwave Therapy uses sound waves to encourage 'angiogenesis' (new blood vessel growth) and remodel tissue plaques. It is often combined with the P-Shot for maximum effect.",
        whoIsItFor: [
          "Vasculogenic erectile dysfunction",
          "Men looking for needle-free treatment options",
          "Patients with Peyronie's disease plaques",
          "Anyone looking to improve blood flow responsiveness"
        ],
        commonQuestions: [
          { question: "Does it hurt?", answer: "No, it is a non-invasive procedure described as a light tapping or tingling sensation." }
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
        howItWorks: "Your own PRP is injected into precise areas to stimulate collagen and blood vessel repair. This improves sensitivity, health, and often natural lubrication.",
        whoIsItFor: [
          "Vaginal dryness or discomfort during intimacy",
          "Difficulty achieving orgasm or reduced sensitivity",
          "Stress urinary incontinence (leakage)",
          "Post-menopausal vaginal rejuvenation"
        ],
        commonQuestions: [
          { question: "Is recovery quick?", answer: "Yes, you can resume normal daily activities immediately." }
        ]
      },
    }
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white z-10" />
          <img src="/hero_img.png" alt="Sexual Rejuvenation" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 w-full">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={itemVariants} className="inline-block px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-xs font-medium mb-4">
              GMC‑registered | CE‑marked | Confidential
            </motion.div>
            <motion.h1 variants={itemVariants} className="text-3xl lg:text-5xl text-gray-800 font-bold mb-4">
              Sexual Rejuvenation in {locationName}
            </motion.h1>
            <motion.p variants={itemVariants} className="text-gray-600 max-w-2xl mb-8 leading-relaxed">
              Safe, doctor-led regenerative solutions to restore confidence, sensitivity, and intimacy. Serving {locationName} and surrounding areas.
            </motion.p>
            <motion.button onClick={handleAction} variants={itemVariants} className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all flex items-center gap-3">
              <FaEnvelope /> Book Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Internal Nav */}
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 py-4 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-center gap-8 text-sm font-medium text-gray-500">
          <a href="#understanding-ed" className="hover:text-blue-600">Understanding ED</a>
          <a href="#what-is-prp" className="hover:text-blue-600">What is PRP?</a>
          <a href="#treatments" className="hover:text-blue-600">Treatments</a>
          <a href="#comparison" className="hover:text-blue-600">Comparison</a>
        </div>
      </nav>

      {/* Explanatory Sections */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 space-y-20">
          
          <div id="understanding-ed" className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Erectile Dysfunction (ED)</h2>
              <div className="text-gray-600 space-y-4 text-sm leading-relaxed">
                <p>ED is a common condition where achieving or maintaining an erection becomes difficult. It often results from reduced blood flow, stress, diabetes, or nerve changes.</p>
                <p>At Healing-PRP Clinics, we focus on improving blood flow and tissue health using your body's own growth factors, supporting function and confidence over time.</p>
              </div>
            </div>
            <div id="what-is-prp" className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What is PRP (Platelet-Rich Plasma)?</h2>
              <p className="text-sm text-gray-600 mb-6">PRP is processed from your own blood to concentrate platelets rich in growth factors. When injected, it can:</p>
              <ul className="space-y-3">
                {["Improve blood flow and sensitivity", "Stimulate collagen and tissue growth", "Support repair of nerves and vessels", "Safe, natural, and autologous"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                    <FaCheck className="text-blue-600 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-blue-50/50 p-8 rounded-2xl border border-blue-100">
            <h3 className="text-xl font-bold text-blue-900 mb-2">Medical Note: What PRP therapy cannot do</h3>
            <p className="text-sm text-blue-800/80 leading-relaxed italic">
              PRP therapy is not a guaranteed cure and individual responses vary. It may not be effective for severe nerve damage, advanced vascular disease, or untreated hormonal imbalances. A medical consultation is required to assess suitability.
            </p>
          </div>
        </div>
      </section>

      {/* Treatments */}
      <section id="treatments" className="py-16 bg-white border-t border-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Clinical Treatments</h2>
          <div className="grid gap-12">
            {treatments.map((t, idx) => (
              <div key={idx} className="bg-slate-50 rounded-3xl p-8 lg:p-12 border border-slate-200/60 shadow-sm transition-all hover:shadow-md">
                <div className="grid lg:grid-cols-3 gap-12">
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.name}</h3>
                    <p className="text-gray-600 mb-8">{t.description}</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {t.benefits.map((b, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm text-gray-700 bg-white p-4 rounded-xl border border-gray-100">
                          <FaCheck className="text-blue-600 flex-shrink-0" /> {b}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-inner flex flex-col justify-between">
                    <div className="space-y-4 mb-8">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Duration</span>
                        <span className="font-bold text-gray-900">{t.duration}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Course</span>
                        <span className="font-bold text-gray-900">{t.course}</span>
                      </div>
                    </div>
                    <button onClick={handleAction} className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all">
                      <FaEnvelope /> Book Consultation
                    </button>
                  </div>
                </div>

                <button 
                  onClick={() => setExpandedTreatment(expandedTreatment === t.name ? null : t.name)}
                  className="mt-8 text-blue-600 font-bold flex items-center gap-2 hover:underline"
                >
                  {expandedTreatment === t.name ? "Read Less" : "Read More About This Treatment"}
                  {expandedTreatment === t.name ? <FaChevronUp /> : <FaChevronDown />}
                </button>

                <AnimatePresence>
                  {expandedTreatment === t.name && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden mt-8 pt-8 border-t border-gray-200">
                      <div className="grid md:grid-cols-2 gap-12">
                        <div>
                          <h4 className="font-bold text-gray-900 mb-4">How It Works</h4>
                          <p className="text-sm text-gray-600 leading-relaxed">{t.expandedContent.howItWorks}</p>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-4">Who Is It For?</h4>
                          <ul className="space-y-2">
                            {t.expandedContent.whoIsItFor.map((item, i) => (
                              <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0" /> {item}
                              </li>
                            ))}
                          </ul>
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

      {/* CTA Bars, FAQ & Footer */}
      <section id="comparison" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">P-Shot® vs Exomine®</h2>
          <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-gray-500 uppercase text-xs font-bold">
                <tr><th className="p-4 border-b">Feature</th><th className="p-4 border-b">Standard</th><th className="p-4 border-b">Exomine®</th></tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr><td className="p-4 font-medium">Mechanism</td><td className="p-4">Standard PRP</td><td className="p-4">Pre-activated PRP</td></tr>
                <tr><td className="p-4 font-medium">Growth Factors</td><td className="p-4">Gradual release</td><td className="p-4">Immediate acting</td></tr>
                <tr><td className="p-4 font-medium">Best For</td><td className="p-4">Mild/Moderate</td><td className="p-4">Severe/Longstanding</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-t border-gray-50">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-center gap-4">
          <Link href={locationName === "Birmingham" ? "/birmingham/prices" : "/prices"} className="px-8 py-3 bg-blue-600 text-white rounded-xl font-bold text-center">Treatment Prices</Link>
          <Link href={locationName === "Birmingham" ? "/birmingham/faq" : "/faq"} className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-xl font-bold text-center">Clinic FAQs</Link>
        </div>
      </section>

      <div id="contact-form-section"><ContactCTASection /></div>
      <Footer />
    </>
  );
}
