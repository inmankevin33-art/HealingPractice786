import type { Metadata } from "next";
import PersonalisedEDMedicationClient from "@/components/pages/PersonalisedEDMedicationClient";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    // Added "Male Performance" to the Title tag
    absolute: "Personalised ED Medication & Male Performance St Albans | Healing-PRP Clinics"
  },
  description:
    // Added "male performance" to the meta description
    "Doctor-led male performance and personalised erectile dysfunction medication clinic in St Albans. Bespoke ED prescriptions for men who need more than standard tablets.",
  alternates: {
    canonical: "https://www.healing-prp.co.uk/personalised-ed-medication",
  },
  keywords: [
    // High-Priority Local Terms
    "Personalised ED medication St Albans",
    "Bespoke erectile dysfunction treatment Hertfordshire",
    "Private ED prescription Harpenden",
    "Custom ED pills Watford",
    "Men's health doctor St Albans",
    
    // --- NEW: Male Performance Terms ---
    "Male performance clinic St Albans",
    "Enhance male performance Hertfordshire",
    "Male sexual performance medication",
    "Performance anxiety medication St Albans",
    "Male enhancement doctor UK",

    // Clinical / Intent Terms
    "Alternative to Viagra St Albans",
    "Custom compounded ED medication UK",
    "ED treatment side effects clinic",
    "Private doctor for erectile dysfunction Herts",
    "Tailored ED dosage treatment"
  ],
  openGraph: {
    title: "Personalised ED Medication & Male Performance | St Albans",
    description:
      "Advanced, doctor-led formulation for male performance. Bespoke ED prescriptions tailored to your profile. Serving St Albans, Harpenden, and Hertfordshire.",
    url: "https://www.healing-prp.co.uk/personalised-ed-medication",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
  },
};

// ... (rest of your file starting with the const faqs = [ ... ])
// --- SEO RICH FAQS (St Albans & Hertfordshire Focus) ---
const faqs = [
  {
    question: "What is personalised ED medication and how do I get it in St Albans?",
    answer: "Personalised ED medication involves custom-formulated prescriptions tailored to your specific cardiovascular and metabolic profile. At our St Albans clinic, our GMC-registered doctors provide comprehensive assessments to prescribe bespoke treatments when standard tablets like Viagra or Cialis are ineffective or cause side effects.",
  },
  {
    question: "Why choose bespoke ED treatments over standard off-the-shelf pills?",
    answer: "Standard pills offer fixed dosages that may lead to dose-limiting side effects (like headaches or flushing) or yield inconsistent results. Our bespoke ED treatments in Hertfordshire are calibrated precisely for your body, ensuring optimal efficacy and safety.",
  },
  {
    question: "Do I need to visit the St Albans clinic to get my custom ED medication?",
    answer: "Yes, a thorough, strictly 1:1 private medical consultation is required to review your medical history and ensure a custom ED prescription is safe for you. Once prescribed, the medication is dispensed directly with structured clinical follow-ups.",
  },
  {
    question: "Is this treatment safe if I have diabetes or take other medications?",
    answer: "Suitability depends on a complete review of your cardiovascular risk and current medication profile. Our doctor-led clinic in St Albans specialises in assessing men with complex medical profiles to ensure any personalised ED formulation prescribed is safe.",
  },
  {
    question: "How is the personalised ED formulation different from the P-Shot or Shockwave Therapy?",
    answer: "While the P-Shot and Shockwave Therapy focus on structural tissue repair and vascular regeneration over time, personalised medication offers precision pharmacological support. Often, our Hertfordshire patients combine regenerative therapies with a bespoke medication plan for the best possible outcome.",
  },
  {
    question: "Do I need a GP referral to access this private ED clinic in Hertfordshire?",
    answer: "No GP referral is necessary. You can book a direct, confidential consultation with our medical team serving St Albans, Harpenden, and Watford to discuss your tailored ED dosage and bespoke treatment options immediately.",
  },
];

// --- JSON-LD SCHEMA: Medical Clinic & Medical Therapy ---
const customMedSchema = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Healing-PRP Clinics St Albans",
    "description": "Doctor-led clinic in St Albans providing bespoke, personalised erectile dysfunction (ED) medication and advanced male sexual health treatments.",
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
    "name": "Personalised Erectile Dysfunction Medication",
    "alternateName": ["Bespoke ED Prescription", "Custom Compounded ED Treatment", "Tailored ED Medication"],
    "description": "Custom-formulated prescription medication for erectile dysfunction, tailored to individual patient profiles following a comprehensive clinical assessment in St Albans.",
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
        id="custom-med-schema-stalbans"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(customMedSchema) }}
      />

      {/* 2. Inject FAQ Schema */}
      <Script
        id="custom-med-faq-schema-stalbans"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 3. Render Client Component */}
      <PersonalisedEDMedicationClient 
        locationName="St Albans"
        servingAreas="St Albans • Harpenden • Watford • Hertfordshire"
        faqs={faqs} // <--- Pass the FAQs here!
      />
    </main>
  );
}
