"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaWhatsapp, FaPlus, FaMinus, FaEnvelope, FaTimes } from "react-icons/fa";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/ContactCTASection";
import Link from "next/link";

export default function FAQPage() {
  const [openFAQIndex, setOpenFAQIndex] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const toggleFAQ = (key: string) => {
    setOpenFAQIndex(openFAQIndex === key ? null : key);
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
  {
    question: "Is PRP better than medication?",
    answer:
      "PRP is not a replacement for medication. It works differently by stimulating the body’s natural healing processes rather than altering body chemistry. Whether PRP is appropriate depends on the condition being treated, overall health, and previous response to other therapies. This is discussed during consultation.",
  },
  {
    question: "What happens if PRP doesn’t work?",
    answer:
      "Not everyone responds to PRP. If improvement is limited, we will review contributing factors such as medical conditions, medications, lifestyle, or hormonal issues, and discuss alternative or adjunct treatment options where appropriate.",
  },
  {
    question: "Can PRP be repeated safely?",
    answer:
      "Yes. PRP can be repeated safely in suitable individuals because it uses your own blood. Treatment frequency and suitability are assessed by a doctor on an individual basis.",
  },
  {
    question: "Who should not have PRP or P-Shot®?",
    answer:
      "PRP and P-Shot® may not be suitable for people with certain blood disorders, active infections, cancers affecting blood cells, or those on specific medications. A full medical assessment is always carried out before treatment.",
  },
  {
    question: "Where can I get PRP treatment in St Albans?",
    answer:
      "PRP treatments are available at Healing-PRP Clinics in St Albans. We also see patients from surrounding areas including Harpenden, Watford, Luton, and Hertford.",
  },
  {
    question: "Do you offer P-Shot® in Birmingham?",
    answer:
      "Yes. P-Shot® treatments are available in Birmingham by appointment. Please contact us to confirm availability and arrange a consultation.",
  },
  {
    question: "PRP vs shockwave therapy — what’s the difference?",
    answer:
      "PRP uses growth factors from your own blood to stimulate tissue repair, while shockwave therapy uses sound waves to improve blood flow and tissue response. In some cases, the two treatments may be combined for enhanced outcomes.",
  },
  {
    question: "PRP vs fillers or Botox — which is right for me?",
    answer:
      "PRP focuses on natural regeneration and tissue repair, while fillers and Botox address volume loss and muscle movement. The most suitable option depends on your goals, anatomy, and expectations, which will be discussed during consultation.",
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

  // ✅ Motion variants (required for the Hero animations)
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
      {/* ✅ FAQ Structured Data (SEO) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* Hero Section */}
       <section className="relative min-h-[55vh] md:min-h-[65vh] flex items-center justify-center overflow-hidden">
   {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white z-10" />
    <img
      src="/hero_img.png"
      alt="Projects background"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Hero Content */}
  <div className="relative w-full z-20 flex h-full">
    <div className="w-full max-w-7xl mt-10 md:mt-0 mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
      <div className="text-white">
        <motion.div initial="hidden" animate="visible" variants={containerVariants}>
          <motion.div
            className="inline-block px-4 py-2 bg-[var(--brand-blue-100)] text-[var(--brand-blue-700)] rounded-full text-xs font-inter font-medium mb-4"
            variants={itemVariants}
          >
            GMC-registered | CE-marked | Natural Results
          </motion.div>

          <motion.h1
            className="text-2xl lg:text-4xl text-gray-700 font-raleway leading-tight mb-2"
            variants={itemVariants}
          >
            Frequently Asked Questions | Healing-PRP Clinics
          </motion.h1>

          <motion.p
            className="text-sm font-inter text-gray-500 leading-relaxed max-w-3xl"
            variants={itemVariants}
          >
            Clear answers about consultations, treatments, downtime, and what to expect at Healing-PRP Clinics.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mt-6">
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
          </motion.div>
        </motion.div>
      </div>
    </div>
  </div>
</section>

      {/* FAQs */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 space-y-4">
          {faqs.map((faq, index) => {
           const key = `faq-${index}`;
           return (
            <div
              key={key}
              className="bg-white rounded-xl border overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 flex justify-between text-left"
              >
                <span className="font-raleway text-slate-900">
                  {faq.question}
                </span>
                {openFAQKey === key ? <FaMinus /> : <FaPlus />}
              </button>

              <AnimatePresence>
                {openFAQIndex === key && (
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
            );
          })}
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
