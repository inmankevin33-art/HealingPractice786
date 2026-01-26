"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaWhatsapp, FaPlus, FaMinus, FaEnvelope, FaTimes } from "react-icons/fa";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/ContactCTASection";
import Link from "next/link";

export default function FAQPage() {
  const [openFAQKey, setOpenFAQKey] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const toggleFAQ = (key: string) => {
    setOpenFAQKey(openFAQKey === key ? null : key);
  };

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    if (isDesktop) {
      e.preventDefault();
      setIsModalOpen(true);
    }
  };

  const faqs = [
    {
      question: "Do you offer a consultation before treatment?",
      answer: "Yes — every client receives a personal consultation with our GMC-registered doctor to tailor a safe, effective plan.",
    },
    {
      question: "Can treatments be combined?",
      answer: "Yes. Many regenerative treatments can be safely combined or staged to suit your goals and individual needs.",
    },
    {
      question: "Is there any downtime after treatment?",
      answer: "Most treatments involve minimal downtime, with mild redness or injection marks settling within 24–48 hours.",
    },
    {
      question: "How many sessions will I need?",
      answer: "This depends on the treatment and your skin condition. Some treatments are one-off, others work best as a short course.",
    },
    {
      question: "Are your products safe and approved?",
      answer: "We use high-quality products and follow strict medical hygiene and sterility protocols.",
    },
    {
      question: "Where are you based?",
      answer: "We offer appointments in St Albans and other locations depending on the service.",
    },
    {
      question: "Is PRP better than medication?",
      answer: "PRP is not a replacement for medication. It works differently by stimulating the body’s natural healing processes rather than altering body chemistry. Whether PRP is appropriate depends on the condition being treated, overall health, and previous response to other therapies. This is discussed during consultation.",
    },
    {
      question: "What happens if PRP doesn’t work?",
      answer: "Not everyone responds to PRP. If improvement is limited, we will review contributing factors such as medical conditions, medications, lifestyle, or hormonal issues, and discuss alternative or adjunct treatment options where appropriate.",
    },
    {
      question: "Can PRP be repeated safely?",
      answer: "Yes. PRP can be repeated safely in suitable individuals because it uses your own blood. Treatment frequency and suitability are assessed by a doctor on an individual basis.",
    },
    {
      question: "Who should not have PRP or P-Shot®?",
      answer: "PRP and P-Shot® may not be suitable for people with certain blood disorders, active infections, cancers affecting blood cells, or those on specific medications. A full medical assessment is always carried out before treatment.",
    },
    {
      question: "Where can I get PRP treatment in St Albans?",
      answer: "PRP treatments are available at Healing-PRP Clinics in St Albans. We also see patients from surrounding areas including Harpenden, Watford, Luton, and Hertford.",
    },
    {
      question: "Do you offer P-Shot® in Birmingham?",
      answer: "Yes. P-Shot® treatments are available in Birmingham by appointment. Please contact us to confirm availability and arrange a consultation.",
    },
    {
      question: "PRP vs shockwave therapy — what’s the difference?",
      answer: "PRP uses growth factors from your own blood to stimulate tissue repair, while shockwave therapy uses sound waves to improve blood flow and tissue response. In some cases, the two treatments may be combined for enhanced outcomes.",
    },
    {
      question: "PRP vs fillers or Botox — which is right for me?",
      answer: "PRP focuses on natural regeneration and tissue repair, while fillers and Botox address volume loss and muscle movement. The most suitable option depends on your goals, anatomy, and expectations, which will be discussed during consultation.",
    },
  ];

  // Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  };

  return (
    <>
      {/* FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/10 z-10" />
          <img
            src="/hero_img.png"
            alt="FAQ background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Hero Content */}
        <div className="relative w-full z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-3xl">
              <motion.div initial="hidden" animate="visible" variants={containerVariants}>
                <motion.div
                  className="inline-block px-4 py-2 bg-blue-600/90 backdrop-blur-md text-white rounded-full text-xs font-medium mb-6 uppercase tracking-wider"
                  variants={itemVariants}
                >
                  GMC-registered | CE-marked
                </motion.div>

                <motion.h1
                  className="text-4xl md:text-6xl font-raleway font-bold text-white mb-6 leading-tight"
                  variants={itemVariants}
                >
                  Frequently Asked Questions
                </motion.h1>

                <motion.p
                  className="text-lg text-gray-100 leading-relaxed max-w-2xl font-inter mb-8"
                  variants={itemVariants}
                >
                  Clear answers about consultations, treatments, downtime, and what to expect at Healing-PRP Clinics.
                </motion.p>

                <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                  {isDesktop ? (
                    <button
                      onClick={handleWhatsAppClick}
                      className="px-8 py-3 bg-[var(--brand-blue)] hover:bg-blue-700 text-white rounded-lg font-semibold flex gap-2 items-center transition-colors"
                    >
                      <FaWhatsapp className="w-5 h-5" /> Book on WhatsApp
                    </button>
                  ) : (
                    <a
                      href="https://wa.me/447990364147"
                      className="px-8 py-3 bg-[var(--brand-blue)] hover:bg-blue-700 text-white rounded-lg font-semibold flex gap-2 items-center transition-colors"
                    >
                      <FaWhatsapp className="w-5 h-5" /> Book on WhatsApp
                    </a>
                  )}

                  <Link
                    href="/contact"
                    className="px-8 py-3 bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20 rounded-lg font-semibold flex gap-2 items-center transition-colors"
                  >
                    <FaEnvelope className="w-4 h-4" /> Contact Us
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs List */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {faqs.map((faq, index) => {
            const key = `faq-${index}`;
            return (
              <div
                key={key}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => toggleFAQ(key)}
                  className="w-full p-6 flex justify-between items-center text-left"
                >
                  <span className="font-raleway font-semibold text-lg text-slate-900 pr-8">
                    {faq.question}
                  </span>

                  <motion.span
                    animate={{ rotate: openFAQKey === key ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 text-[var(--brand-blue)]"
                  >
                    {openFAQKey === key ? <FaMinus /> : <FaPlus />}
                  </motion.span>
                </button>

                <AnimatePresence>
                  {openFAQKey === key && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-slate-600 leading-relaxed font-inter border-t border-slate-100 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      <ContactCTASection />
      <Footer />

      {/* WhatsApp Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white p-8 rounded-2xl shadow-2xl relative max-w-sm w-full text-center">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-full transition-colors"
                >
                  <FaTimes className="text-slate-500" />
                </button>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Scan to Chat</h3>
                <p className="text-slate-600 mb-6 text-sm">Use your phone camera to scan the QR code</p>
                <div className="bg-white p-4 rounded-xl border-2 border-slate-100 inline-block">
                   <img src="/qrcode.png" alt="WhatsApp QR" className="w-48 h-48" />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
