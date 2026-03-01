import type { Metadata } from "next";
import PrematureEjaculationClient from "@/components/pages/PrematureEjaculationClient";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    // Strong, location-first title for Google ranking
    absolute: "Premature Ejaculation (PE) Treatment Birmingham | Healing-PRP",
  },
  
  description:
    "Private Premature Ejaculation (PE) treatment in Birmingham (Edgbaston). Expert doctor-led care offering bespoke medication and online consultations for better control.",

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
    
    // Core Clinical & High-Intent Terms
    "Male sexual health Birmingham",
    "Private PE specialist Midlands",
    "How to stop premature ejaculation medically",
    "Is premature ejaculation psychological or physical",
    "PE medication Birmingham",
    "Premature ejaculation numbing cream UK",
    "Behavioural therapy for PE",
    "Does Viagra help with premature ejaculation",
    "Private doctor for premature ejaculation"
  ],

  openGraph: {
    title: "Premature Ejaculation Treatment | Birmingham (Edgbaston)",
    description:
      "Confidential medical treatment for Premature Ejaculation in Birmingham. Doctor-led clinic offering proven solutions and secure online consultations.",
    url: "https://www.healing-prp.co.uk/birmingham/premature-ejaculation",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
  },
};

// --- SEO RICH FAQS (Incorporating High-Volume Search Queries & Hybrid Online Model) ---
const faqs = [
  {
    question: "Is premature ejaculation psychological or physical?",
    answer: "Premature ejaculation is often a combination of both. Physical factors like penile hypersensitivity or neurochemical imbalances play a role, as do psychological factors like performance anxiety. Our doctors comprehensively assess both aspects to create your bespoke treatment plan.",
  },
  {
    question: "How to stop premature ejaculation medically?",
    answer: "Medical treatment involves targeting the root cause. We prescribe tailored solutions such as custom-compounded topical numbing creams to reduce sensitivity, or specific oral delay medications, combined with behavioural pelvic floor coaching.",
  },
  {
    question: "Does Viagra help with premature ejaculation?",
    answer: "Standard Viagra (Sildenafil) is designed for Erectile Dysfunction (ED), not Premature Ejaculation (PE). However, many men experience PE secondary to ED anxiety. If you suffer from both, our Birmingham specialists can formulate a combined medication plan to improve both erection quality and ejaculatory control.",
  },
  {
    question: "Do I need a face-to-face consultation in Birmingham?",
    answer: "No, a physical visit is not strictly required. While we have a premium private clinic in Edgbaston, our GMC-registered doctors also conduct highly secure online consultations. This means you can receive bespoke PE treatment and have your medication shipped directly to your door anywhere in the West Midlands.",
  },
  {
    question: "How long does premature ejaculation treatment take to work?",
    answer: "Many of our prescribed topical treatments work immediately upon application. For oral medications and behavioural pelvic floor training, patients typically see significant improvements in ejaculatory control within the first few weeks of their tailored programme.",
  },
  {
    question: "Can premature ejaculation be cured permanently?",
    answer: "While 'cure' depends on the underlying cause, PE is highly manageable. Through a combination of medical therapies, sensitivity reduction, and learning ejaculatory control techniques, the vast majority of our patients achieve long-term, lasting confidence in their sexual performance.",
  },
  {
    question: "Do you use the P-Shot (PRP) to treat Premature Ejaculation?",
    answer: "No. The P-Shot is an excellent regenerative treatment for erectile dysfunction and tissue health, but it does not treat premature ejaculation. PE requires our dedicated pharmacological and behavioural protocols.",
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
    // The "Power Move" for Local SEO: Utilizing an array to capture the wider metro area
    "areaServed": [
      {
        "@type": "City",
        "name": "Birmingham"
      },
      {
        "@type": "AdministrativeArea",
        "name": "West Midlands"
      },
      {
        "@type": "Neighborhood",
        "name": "Edgbaston"
      }
    ],
    "medicalSpecialty": ["Urology", "Men's Health"]
  },
  {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    "name": "Premature Ejaculation (PE) Treatment",
    "alternateName": ["PE Medical Therapy", "Ejaculatory Control Programme", "Delay Medication for Men"],
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
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
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
        faqs={faqs} 
      />
    </main>
  );
}
