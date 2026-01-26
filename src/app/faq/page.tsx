import type { Metadata } from "next";
import FaqClient from "@/components/FaqClient";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  // SEO TWEAK: More descriptive title for search engines
  title: "PRP & Treatment FAQs", 
  description: "Common questions about PRP, Hair Restoration, and Joint Injections at Healing-PRP Clinics St Albans. Pricing, safety, and treatment details.",
};

export default function MainFaqPage() {
  const mainFaqs = [
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
      answer: "We offer appointments in St Albans (Hertfordshire) and Birmingham (West Midlands).",
    },
    {
      question: "Is PRP better than medication?",
      answer: "PRP is not a replacement for medication but works differently by stimulating natural healing. We discuss whether it is appropriate for you during consultation.",
    },
    {
      question: "What happens if PRP doesn’t work?",
      answer: "Not everyone responds to PRP. If improvement is limited, we review factors like health and lifestyle and discuss alternative options.",
    },
    {
      question: "Where can I get PRP treatment in St Albans?",
      answer: "PRP treatments are available at Healing-PRP Clinics in St Albans. We also see patients from surrounding areas including Harpenden, Watford, Luton, and Hertford.",
    },
    {
      question: "Do you offer P-Shot® in Birmingham?",
      answer: "Yes. P-Shot® treatments are available in Birmingham by appointment. Please contact us to confirm availability.",
    },
  ];

  // Schema for Main FAQs
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: mainFaqs.map((faq) => ({
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
      <Script
        id="faq-schema-main"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <FaqClient 
        title="Frequently Asked Questions"
        description="Clear answers about consultations, treatments, and what to expect at our St Albans & Birmingham clinics."
        locationBadge="GMC-Registered | CE-Marked | St Albans & Birmingham"
        faqs={mainFaqs}
      />
      <Footer />
    </>
  );
}
