import type { Metadata } from "next";
import PrematureEjaculationClient from "@/components/pages/PrematureEjaculationClient";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    // Strong, location-first title for Google ranking
    absolute: "Premature Ejaculation (PE) Treatment Birmingham | Healing-PRP",
  },
  
  description:
    "Private Premature Ejaculation (PE) treatment in Birmingham (Edgbaston). Expert doctor-led care offering customised medication and behavioural strategies for better control.",

  alternates: {
    canonical: "https://www.healing-prp.co.uk/birmingham/premature-ejaculation",
  },

  keywords: [
    // High-Priority Location Terms
    "Premature ejaculation treatment Birmingham",
    "PE clinic Edgbaston",
    "Stop premature ejaculation West Midlands",
    "PE doctor Solihull",
    "Private PE treatment Sutton Coldfield",
    "Ejaculation control help Birmingham",
    
    // Core Clinical Terms
    "Male sexual health Birmingham",
    "Private PE specialist Midlands",
    "Last longer in bed medical help",
    "PE medication Birmingham",
    "Premature ejaculation numbing cream UK",
    "Behavioural therapy for PE"
  ],

  openGraph: {
    title: "Premature Ejaculation Treatment | Birmingham (Edgbaston)",
    description:
      "Confidential medical treatment for Premature Ejaculation in Birmingham. Doctor-led clinic offering proven solutions.",
    url: "https://www.healing-prp.co.uk/birmingham/premature-ejaculation",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
  },
};

// --- SEO RICH FAQS (Birmingham & West Midlands Focus) ---
const faqs = [
  {
    question: "What is the most effective treatment for premature ejaculation?",
    answer: "At our private Edgbaston clinic, we find that a combination approach works best. We utilise bespoke medical therapies—such as customised topical creams or oral medications—alongside behavioural coaching and pelvic floor programmes to give you long-term control.",
  },
  {
    question: "Do you use the P-Shot (PRP) to treat Premature Ejaculation?",
    answer: "No. While the P-Shot is an excellent treatment for erectile dysfunction and tissue rejuvenation available at our Birmingham clinic, it is not an effective treatment for premature ejaculation. PE is best addressed through our dedicated behavioural and pharmacological protocols.",
  },
  {
    question: "Are the topical numbing creams safe for my partner?",
    answer: "Yes. The custom formulations we prescribe are specifically designed to remain stable in the vaginal environment, ensuring fast onset for you without transferring unwanted numbness to your partner.",
  },
  {
    question: "How quickly will I see results from the PE treatment?",
    answer: "Many men notice a significant improvement in their ejaculatory control within the first few weeks of consistently following their personalised medical and behavioural plan.",
  },
  {
    question: "Is a face-to-face consultation required in Birmingham?",
    answer: "Yes, we provide highly discreet, strictly 1:1 doctor-led consultations at our Edgbaston clinic. This allows us to accurately assess the multifactorial causes of your PE, which can include sensitivity, anxiety, or neurochemical factors.",
  },
  {
    question: "Can my partner attend the consultation with me?",
    answer: "Absolutely. While it is completely optional, partner-inclusive guidance often improves outcomes, communication, and mutual sexual confidence.",
  },
];

// --- JSON-LD SCHEMA: Medical Clinic & Medical Therapy (Birmingham) ---
const peSchemaBirmingham = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Healing-PRP Clinics Birmingham",
    "description": "Doctor-led private clinic in Edgbaston, Birmingham specialising in male sexual health and the treatment of Premature Ejaculation (PE).",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Birmingham",
      "addressRegion": "West Midlands",
      "addressCountry": "UK"
    },
    // The "Power Move" for Local SEO:
    "areaServed": {
      "@type": "City",
      "name": "Birmingham"
    },
    "medicalSpecialty": ["Urology", "Men's Health"]
  },
  {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    "name": "Premature Ejaculation (PE) Treatment",
    "alternateName": ["PE Medical Therapy", "Ejaculatory Control Programme"],
    "description": "A comprehensive treatment programme for premature ejaculation in Birmingham combining custom topical formulations, oral medications, and behavioural coaching.",
    "relevantSpecialty": {
      "@type": "MedicalSpecialty",
      "name": "Urology"
    }
  }
];

export default function BirminghamPEPage() {
  // --- GENERATE JSON-LD SCHEMA FOR FAQS ---
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main>
      {/* 1. Inject Medical Entity Schema */}
      <Script
        id="pe-schema-birmingham"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(peSchemaBirmingham) }}
      />

      {/* 2. Inject FAQ Schema */}
      <Script
        id="pe-faq-schema-birmingham"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* 3. Render Client Component */}
      <PrematureEjaculationClient 
        locationName="Birmingham"
        servingAreas="Edgbaston • Solihull • Sutton Coldfield • West Midlands"
        faqs={faqs} // <--- Pass the local FAQs here!
      />
    </main>
  );
}
