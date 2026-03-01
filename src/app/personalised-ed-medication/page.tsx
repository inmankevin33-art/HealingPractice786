import type { Metadata } from "next";
import PersonalisedEDMedicationClient from "@/components/pages/PersonalisedEDMedicationClient";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    // UK-Wide & Premium intent: Targets users looking for bespoke, non-standard options online
    absolute: "Bespoke ED Medication Online UK | Alternative to Standard Pills"
  },
  description:
    "Doctor-led online clinic providing bespoke ED medication across the UK. Custom prescriptions, direct delivery, and tailored dosages for men who need more than standard generic tablets.",
  alternates: {
    canonical: "https://www.healing-prp.co.uk/personalised-ed-medication",
  },
  keywords: [
    // Premium National Terms (Avoiding cheap "buy ED pills" competition)
    "Bespoke ED medication UK",
    "Custom compounded ED treatment online",
    "Alternative to generic ED pills",
    "Online male performance clinic UK",
    "ED treatment for men who failed Viagra",
    "Tailored ED dosage prescription UK",
    "Private online doctor erectile dysfunction",
    "Direct delivery ED medication UK",
    "GMC doctor online ED consultation"
  ],
  openGraph: {
    title: "Bespoke ED Medication Online UK | Alternative to Standard Pills",
    description:
      "Advanced, doctor-led formulation for male performance. Bespoke ED prescriptions tailored to your profile. 100% online consultation with discreet UK-wide delivery.",
    url: "https://www.healing-prp.co.uk/personalised-ed-medication",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
  },
};

// --- SEO RICH FAQS (UK-Wide & Online Consultation Focus) ---
const faqs = [
  {
    question: "What is personalised ED medication and how do I get it online?",
    answer: "Personalised ED medication involves custom-formulated prescriptions tailored to your specific cardiovascular and metabolic profile. Our GMC-registered doctors provide comprehensive online assessments to prescribe bespoke treatments when standard tablets like Viagra or Cialis are ineffective or cause side effects. It is then shipped directly to your door anywhere in the UK.",
  },
  {
    question: "Why choose bespoke ED treatments over standard off-the-shelf pills?",
    answer: "Standard pills offer fixed dosages that may lead to dose-limiting side effects (like headaches or flushing) or yield inconsistent results. Our bespoke ED treatments are calibrated precisely for your body, ensuring optimal efficacy and safety.",
  },
  {
    question: "Do I need to visit a physical clinic to get my custom ED medication?",
    answer: "No. We offer a strictly 1:1 private medical consultation completely online. Our doctors review your medical history digitally to ensure a custom ED prescription is safe for you. Once prescribed, the medication is dispatched via tracked, discreet nationwide delivery.",
  },
  {
    question: "Is this treatment safe if I have diabetes or take other medications?",
    answer: "Suitability depends on a complete review of your cardiovascular risk and current medication profile. Our doctor-led online clinic specialises in assessing men with complex medical profiles to ensure any personalised ED formulation prescribed is safe.",
  },
  {
    question: "How is a bespoke online prescription different from generic pill subscriptions?",
    answer: "Many online pharmacies simply ship standard, generic ED pills. We operate as a specialist medical clinic. If standard pills have failed you, we compound tailored formulas (such as unique dosages or combinations) specifically for your unique physiology.",
  },
  {
    question: "Do I need a GP referral to use this online ED service?",
    answer: "No GP referral is necessary. You can complete our secure online assessment immediately to discuss your tailored ED dosage and bespoke treatment options directly with our UK medical team.",
  },
];

// --- JSON-LD SCHEMA: Medical Clinic & Medical Therapy (National) ---
const customMedSchema = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Healing-PRP Clinics (Online Services)",
    "description": "UK-wide online doctor-led clinic providing bespoke, personalised erectile dysfunction (ED) medication and advanced male sexual health treatments.",
    // The "Power Move" for National Telehealth SEO:
    "areaServed": {
      "@type": "Country",
      "name": "United Kingdom"
    },
    "medicalSpecialty": ["Urology", "Men's Health"]
  },
  {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    "name": "Personalised Erectile Dysfunction Medication Online",
    "alternateName": ["Bespoke ED Prescription UK", "Custom Compounded ED Treatment", "Tailored ED Medication Online"],
    "description": "Custom-formulated prescription medication for erectile dysfunction, tailored to individual patient profiles following a comprehensive online clinical assessment.",
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
        id="custom-med-schema-uk"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(customMedSchema) }}
      />

      {/* 2. Inject FAQ Schema */}
      <Script
        id="custom-med-faq-schema-uk"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 3. Render Client Component with National Props */}
      <PersonalisedEDMedicationClient 
        locationName="the UK" // Changes text to: "for Male Performance in the UK"
        servingAreas="Nationwide • Direct Delivery • Online Consultations"
        faqs={faqs} 
      />
    </main>
  );
}
