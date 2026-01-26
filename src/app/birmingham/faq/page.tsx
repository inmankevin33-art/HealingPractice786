import type { Metadata } from "next";
import FaqClient from "@/components/pages/FaqClient";
import Footer from "@/components/Footer";
import Script from "next/script";

// SEO: This will show as "Patient FAQs & Parking | Birmingham Clinic"
export const metadata: Metadata = {
  title: "Patient FAQs & Parking", 
  description: "Visiting our Birmingham clinic? Find answers about parking in Edgbaston, directions from Solihull, and specialist PRP treatments in the West Midlands.",
};

export default function BirminghamFaqPage() {
  const birminghamFaqs = [
    {
      question: "Where exactly is the Birmingham clinic located?",
      answer: "Our Birmingham clinic is situated in the prestigious Edgbaston Medical Quarter. It is easily accessible for patients traveling from the City Centre, Solihull, and Sutton Coldfield.",
    },
    {
      question: "Is there parking available at the Birmingham location?",
      answer: "Yes, we have dedicated parking facilities for our patients. There is also ample, low-cost street parking available in the immediate vicinity of the Edgbaston clinic.",
    },
    {
      question: "Do you offer the P-Shot® and O-Shot® in Birmingham?",
      answer: "Yes, our Birmingham location is a certified center for both P-Shot® and O-Shot® treatments. All procedures are carried out by our experienced, GMC-registered doctor.",
    },
    {
      question: "Can I get PRP Hair Restoration in the West Midlands?",
      answer: "Absolutely. We provide advanced PRP and Exosome therapy for hair restoration at our Birmingham branch, specifically tailored for both men and women.",
    },
    {
      question: "How do I book an appointment for the Birmingham clinic?",
      answer: "You can book by clicking the 'Book on WhatsApp' button on this page to chat with our team, or by filling out the contact form. We offer flexible scheduling to suit your needs.",
    },
    {
      question: "Are your doctors GMC-registered?",
      answer: "Yes, all treatments at Healing-PRP Clinics are delivered by a GMC-registered doctor with over 10 years of medical experience, ensuring the highest standards of safety.",
    },
    {
      question: "Is the Birmingham clinic discreet?",
      answer: "We understand the sensitive nature of our treatments. Our Birmingham clinic offers a private, professional, and highly discreet environment for all consultations and procedures.",
    },
  ];

  // Schema: Tells Google this content belongs to the Birmingham entity
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
      <Script
        id="faq-schema-birmingham"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <FaqClient 
        title="Birmingham Clinic FAQs"
        description="Specific information about our Edgbaston location, parking, and specialist regenerative treatments available in Birmingham."
        locationBadge="Birmingham • Edgbaston • West Midlands"
        faqs={birminghamFaqs}
      />
      <Footer />
    </>
  );
}
