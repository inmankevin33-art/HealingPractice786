"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaWhatsapp, FaPlus, FaMinus, FaEnvelope, FaTimes } from "react-icons/fa";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/ContactCTASection";
import Link from "next/link";

export default function FAQPage() {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
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
      const scrollY = window.scrollY;
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.paddingRight = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
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
      answer:
        "Yes — every client receives a personal consultation with our GMC-registered doctor to tailor a safe, effective plan.",
    },
    {
      question: "Can treatments be combined?",
      answer:
        "Yes. Many regenerative treatments can be safely combined or staged to suit your goals and individual needs.",
    },
    {
      question: "Is there any downtime after treatment?",
      answer:
        "Most treatments involve minimal downtime, with mild redness or injection marks settling within 24–48 hours.",
    },
    {
      question: "How many sessions will I need?",
      answer:
        "This depends on the treatment and your skin condition. Some treatments are one-off, others work best as a short course.",
    },
    {
      question: "Are your products safe and approved?",
      answer:
        "We use high-quality products and follow strict medical hygiene and sterility protocols.",
    },
    {
      question: "Where are you based?",
      answer:
        "We offer appointments in St Albans and other locations depending on the service.",
    },
  ];

  // ✅ JSON-LD MUST be an object inside JS — NOT raw JSON
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

  return (
    <>
      {/* ✅ FAQ Structured Data (SEO) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* Hero */}
      <section className="relative min-h-[55vh] md:min-h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white z-10" />
          <img
            src="/hero_img.png"
            alt="Healing PRP Clinics"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-3xl lg:text-4xl font-raleway text-gray-700 mb-3">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-500 max-w-2xl">
            Clear answers about consultations, treatments, downtime, and what to
            expect at Healing-PRP Clinics.
          </p>

          <div className="flex flex-wrap gap-4 mt-6">
            {isDesktop ? (
              <button
                onClick={handleWhatsAppClick}
                className="px-6 py-3 bg-[var(--brand-blue)] text-white rounded-lg flex gap-2 items-center"
              >
                <FaWhatsapp /> Book on WhatsApp
              </button>
            ) : (
              <a
                href="https://wa.me/447990364147"
                className="px-6 py-3 bg-[var(--brand-blue)] text-white rounded-lg flex gap-2 items-center"
              >
                <FaWhatsapp /> Book on WhatsApp
              </a>
            )}

            <Link
              href="/contact"
              className="px-6 py-3 border-2 border-[var(--brand-blue)] text-[var(--brand-blue)] rounded-lg flex gap-2 items-center bg-white"
            >
              <FaEnvelope /> Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 flex justify-between text-left"
              >
                <span className="font-raleway text-slate-900">
                  {faq.question}
                </span>
                {openFAQIndex === index ? <FaMinus /> : <FaPlus />}
              </button>

              <AnimatePresence>
                {openFAQIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <div className="px-6 pb-6 text-slate-600 text-sm">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      <ContactCTASection />
      <Footer />

      {/* WhatsApp Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-xl relative">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4"
              >
                <FaTimes />
              </button>
              <img src="/qrcode.png" alt="WhatsApp QR" className="w-64 h-64" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
