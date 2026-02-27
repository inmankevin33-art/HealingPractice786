import type { Metadata } from "next";
import PrematureEjaculationClient from "@/components/pages/PrematureEjaculationClient";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    absolute: "Premature Ejaculation (PE) Treatment St Albans | Healing-PRP Clinics",
  },
  
  description:
    "Specialist Premature Ejaculation (PE) treatment in St Albans. Doctor-led, customised plans including behavioural coaching and medical options. Confidential private care.",

  alternates: {
    canonical: "https://www.healing-prp.co.uk/premature-ejaculation",
  },

  keywords: [
    // High-Priority Location Terms
    "Premature ejaculation treatment St Albans",
    "Stop PE Hertfordshire",
    "Premature ejaculation doctor Watford",
    "PE help Harpenden",
    "Ejaculation control clinic Welwyn Garden City",
    
    // Core Clinical Terms
    "Private PE specialist London",
    "Last longer in bed medical help",
    "PE medication Hertfordshire",
    "Male sexual health clinic St Albans",
    "Premature ejaculation numbing cream UK",
    "Behavioural therapy for PE"
  ],

  openGraph: {
    title: "Premature Ejaculation Treatment | St Albans & Hertfordshire",
    description:
      "Expert medical and behavioural treatment for Premature Ejaculation (PE). Confidential, doctor-led care in St Albans.",
    url: "https://www.healing-prp.co.uk/premature-ejaculation",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
  },
};

// --- SEO RICH FAQS (St Albans & Hertfordshire Focus) ---
const faqs = [
  {
    question: "What is the most effective treatment for premature ejaculation?",
    answer: "At our St Albans clinic, we find that a combination approach works best. We utilise bespoke medical therapies—such as customised topical creams or oral medications—alongside behavioural coaching and pelvic floor programmes to give you long-term control.",
  },
  {
    question: "Do you use the P-Shot (PRP) to treat Premature Ejaculation?",
    answer: "No. While the P-Shot is excellent for erectile dysfunction and tissue rejuvenation, it is not an effective treatment for premature ejaculation. PE is best addressed through our dedicated behavioural and pharmacological protocols.",
  },
  {
    question: "Are the topical numbing creams safe for my partner?",
    answer: "Yes. The custom formulations we prescribe at our Hertfordshire clinic are specifically designed to remain stable in the vaginal environment, ensuring fast onset for you without transferring unwanted numbness to your partner.",
  },
  {
    question: "How quickly will I see results from the PE treatment?",
    answer: "Many men notice a significant improvement in their ejaculatory control within the first few weeks of consistently following their personalised medical and behavioural plan.",
  },
  {
    question: "Is a face-to-face consultation required?",
    answer: "Yes, we provide highly discreet, strictly 1:1 doctor-led consultations at our St Albans clinic. This allows us to accurately assess the multifactorial causes of your PE, which can include sensitivity, anxiety, or neurochemical factors.",
  },
  {
    question: "Can my partner attend the consultation with me?",
    answer: "Absolutely. While it is completely optional, partner-inclusive guidance often improves outcomes, communication, and mutual sexual confidence.",
  },
];

// --- JSON-LD SCHEMA: Medical Clinic & Medical Therapy ---
const peSchema = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Healing-PRP Clinics St Albans",
    "description": "Doctor-led private clinic specialising in male sexual health and the treatment of Premature Ejaculation (PE).",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "St Albans",
      "addressRegion": "Hertfordshire",
      "addressCountry": "UK"
    },
    // The "Power Move" for Local SEO:
    "areaServed": {
      "@type": "City",
      "name": "St Albans"
    },
    "medicalSpecialty": ["Urology", "Men's Health"]
  },
  {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    "name": "Premature Ejaculation (PE) Treatment",
    "alternateName": ["PE Medical Therapy", "Ejaculatory Control Programme"],
    "description": "A comprehensive treatment programme for premature ejaculation combining custom topical formulations, oral medications, and behavioural coaching.",
    "relevantSpecialty": {
      "@type": "MedicalSpecialty",
      "name": "Urology"
    }
  }
];

export default function Page() {
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
        id="pe-schema-stalbans"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(peSchema) }}
      />

      {/* 2. Inject FAQ Schema */}
      <Script
        id="pe-faq-schema-stalbans"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* 3. Render Client Component */}
      <PrematureEjaculationClient 
        locationName="St Albans"
        servingAreas="Harpenden • Luton • Watford • Hertfordshire"
        faqs={faqs}
      />
    </main>
  );
}
