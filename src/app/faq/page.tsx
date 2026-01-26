import type { Metadata } from "next";
import FaqClient from "@/components/pages/FaqClient";
import Footer from "@/components/Footer";
import Script from "next/script";

// SEO: Title matches "Birmingham Clinic" layout suffix automatically
export const metadata: Metadata = {
  title: "Patient FAQs & Parking", 
  description: "Visiting our Birmingham clinic? Find answers about parking in Edgbaston, directions from Solihull, and treatment availability in the West Midlands.",
};

export default function BirminghamFaqPage() {
  const birminghamFaqs = [
    {
      question: "Where exactly is the Birmingham clinic located?",
      answer: "We are located in the Edgbaston Medical Quarter, easily accessible from Birmingham City Centre. Full address details are provided upon booking confirmation.",
    },
    {
      question: "Is there parking available at the Birmingham clinic?",
      answer: "Yes, we have private parking available for patients. There is also ample street parking in the surrounding Edgbaston area.",
    },
    {
      question: "Do you serve patients from outside Birmingham?",
      answer: "Yes, we frequently see patients from Solihull, Sutton Coldfield, Wolverhampton, and across the West Midlands due to our specialist regenerative treatments.",
    },
    {
      question: "Is the P-Shot® available in Birmingham?",
      answer: "Yes, we are a fully certified provider of the P-Shot® (Priapus Shot) at our Birmingham location. All treatments are performed by a GMC-registered doctor.",
    },
    {
      question: "Can I book a consultation specifically for Hair Loss?",
      answer: "Absolutely. Our Birmingham clinic specializes in PRP Hair Restoration and Exosome therapy. We can assess your hair thinning and create a tailored plan.",
    },
    {
      question: "How quickly can I get an appointment in Birmingham?",
      answer: "We offer flexible appointment times, including some evening slots. You can check current availability by clicking 'Book on WhatsApp' or contacting us directly.",
    },
    {
      question: "Is the Birmingham clinic fully private?",
      answer: "Yes, we are a private medical clinic. Your consultation and treatment are strictly confidential, and we operate with high discretion.",
    },
  ];

  // Schema: Specific to Birmingham FAQs for Google Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: birminghamFaqs.map((faq) => ({
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
      {/* Inject Structured Data */}
      <Script
        id="faq-schema-birmingham"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <FaqClient 
        title="Birmingham Clinic FAQs"
        description="Information about our Edgbaston location, parking facilities, and specific treatments available in the West Midlands."
        locationBadge="Birmingham • Edgbaston • West Midlands"
        faqs={birminghamFaqs}
      />
      <Footer />
    </>
  );
}
