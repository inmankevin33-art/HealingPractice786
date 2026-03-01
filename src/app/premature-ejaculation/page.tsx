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
    "question": "What causes premature ejaculation?",
    "answer": "Premature ejaculation can be caused by heightened penile sensitivity, anxiety, stress, hormonal imbalance, or neurochemical factors. It is often a combination of physical and psychological contributors."
  },
  {
    "question": "Is premature ejaculation psychological or physical?",
    "answer": "Premature ejaculation may be psychological, physical, or both. Anxiety and performance stress can contribute, while nerve sensitivity or serotonin imbalance may also play a role."
  },
  {
    "question": "Can premature ejaculation be treated naturally?",
    "answer": "Yes. Natural treatment options may include sensitivity management, behavioural techniques, lifestyle optimisation, and regenerative approaches to support improved control."
  },
  {
    "question": "What is the best medical treatment for premature ejaculation?",
    "answer": "Medical treatment may include topical therapies, prescription medication such as SSRIs, or tailored combination protocols designed to improve control and reduce hypersensitivity."
  },
  {
    "question": "Are there prescription treatments for premature ejaculation?",
    "answer": "Yes. Doctors may prescribe specific medications to delay ejaculation by influencing serotonin levels or reducing sensitivity, depending on individual assessment."
  },
  {
    "question": "How long does premature ejaculation treatment take to work?",
    "answer": "Some treatments work immediately, such as topical options, while prescription or regenerative approaches may take several weeks to achieve optimal results."
  },
  {
    "question": "Is premature ejaculation permanent?",
    "answer": "In most cases, premature ejaculation is treatable. With proper assessment and a personalised management plan, many men achieve significant improvement."
  },
  {
    "question": "Are treatments for premature ejaculation safe?",
    "answer": "When prescribed and monitored by a qualified doctor, treatments are generally safe. Side effects depend on the chosen therapy and are discussed during consultation."
  },
  {
    "question": "Is treatment provided by a private, confidential clinic?",
    "answer": "Yes. Assessments and treatments are delivered discreetly through a private, doctor-led service with full confidentiality."
  }
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
