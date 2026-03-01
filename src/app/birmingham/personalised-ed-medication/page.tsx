import type { Metadata } from "next";
import PersonalisedEDMedicationClient from "@/components/pages/PersonalisedEDMedicationClient";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    // Added "Male Performance" to the Title tag for higher search volume
    absolute: "Personalised ED Medication & Male Performance Birmingham | Healing-PRP Clinics",
  },
  description:
    "Doctor-led male performance and personalised erectile dysfunction medication clinic in Birmingham. Bespoke ED prescriptions and private, tailored online treatments serving Edgbaston.",
  alternates: {
    canonical: "https://www.healing-prp.co.uk/birmingham/personalised-ed-medication",
  },
  keywords: [
    // High-Priority Local Terms
    "Personalised ED medication Birmingham",
    "Bespoke erectile dysfunction treatment West Midlands",
    "Private ED prescription Edgbaston",
    "Custom ED pills Solihull",
    "Men's health doctor Birmingham",
    "Erectile dysfunction clinic Sutton Coldfield",
    
    // --- Male Performance Terms ---
    "Male performance clinic Birmingham",
    "Enhance male performance West Midlands",
    "Male sexual performance medication",
    "Performance anxiety medication Birmingham",
    "Male enhancement doctor Edgbaston",

    // Clinical / Intent Terms
    "Alternative to Viagra Birmingham",
    "Private doctor for erectile dysfunction West Midlands",
    "Custom compounded ED medication Birmingham",
    "Tailored ED dosage treatment"
  ],
  openGraph: {
    title: "Personalised ED Medication & Male Performance | Birmingham",
    description:
      "Advanced, doctor-led formulation for male performance. Bespoke ED prescriptions tailored to your profile. Serving Birmingham, Edgbaston, and the West Midlands.",
    url: "https://www.healing-prp.co.uk/birmingham/personalised-ed-medication",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
  },
};

// --- SEO RICH FAQS (Birmingham & West Midlands Focus) ---
const faqs = [
  {
    question: "What is personalised ED medication and how do I get it in Birmingham?",
    answer: "Personalised ED medication involves custom-formulated prescriptions tailored to your specific cardiovascular and metabolic profile. At our private Birmingham clinic in Edgbaston, our GMC-registered doctors provide comprehensive online and in-person assessments to prescribe bespoke treatments when standard tablets like Viagra or Cialis are ineffective or cause side effects.",
  },
  {
    question: "Why choose bespoke treatments for male performance over standard pills?",
    answer: "Standard pills offer fixed dosages that may lead to dose-limiting side effects (like headaches or flushing) or yield inconsistent results. Our bespoke performance and ED treatments in the West Midlands are calibrated precisely for your body, ensuring optimal efficacy and safety.",
  },
  {
    question: "Do I need to visit the Birmingham clinic to get my custom ED medication?",
    answer: "No physical visit is strictly required. While we operate a private clinic in Edgbaston, our GMC-registered doctors also conduct secure online consultations. This allows you to receive expert, local medical care and bespoke prescriptions dispatched directly to your door without disrupting your schedule.",
  },
  {
    question: "Is this treatment safe if I have diabetes or take other medications?",
    answer: "Suitability depends on a complete review of your cardiovascular risk and current medication profile. Our doctor-led clinic in Birmingham specialises in assessing men with complex medical profiles to ensure any personalised ED formulation prescribed is safe.",
  },
  {
    question: "How is the personalised formulation different from the P-Shot or Shockwave Therapy?",
    answer: "While the P-Shot and Shockwave Therapy focus on structural tissue repair and vascular regeneration over time, personalised medication offers precision pharmacological support. Often, our Birmingham patients combine regenerative therapies with a bespoke medication plan for the best possible outcome.",
  },
  {
    question: "Do I need a GP referral to access this private ED clinic in Birmingham?",
    answer: "No GP referral is necessary. You can book a direct, confidential online consultation with our medical team serving Birmingham, Solihull, and Sutton Coldfield to discuss your tailored ED dosage and bespoke treatment options immediately.",
  },
];

// --- JSON-LD SCHEMA: Medical Clinic & Medical Therapy (Birmingham) ---
const customMedSchemaBirmingham = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Healing-PRP Clinics Birmingham",
    "description": "Doctor-led clinic in Edgbaston, Birmingham providing bespoke, personalised erectile dysfunction (ED) medication and advanced male performance treatments.",
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
    "name": "Personalised Erectile Dysfunction Medication & Male Performance",
    "alternateName": ["Bespoke ED Prescription", "Custom Compounded ED Treatment", "Tailored ED Medication", "Male Performance Medication"],
    "description": "Custom-formulated prescription medication for erectile dysfunction and male performance, tailored to individual patient profiles following a comprehensive clinical assessment in Birmingham.",
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
        id="custom-med-schema-birmingham"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(customMedSchemaBirmingham) }}
      />

      {/* 2. Inject FAQ Schema */}
      <Script
        id="custom-med-faq-schema-birmingham"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 3. Render Client Component */}
      <PersonalisedEDMedicationClient 
        locationName="Birmingham"
        servingAreas="Edgbaston • Solihull • Sutton Coldfield • West Midlands"
        faqs={faqs} // <--- Pass the FAQs here!
      />
    </main>
  );
}
