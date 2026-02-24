import type { Metadata } from "next";
import ErectileDysfunctionClient from "@/components/pages/ErectileDysfunctionClient";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    absolute: "Erectile Dysfunction Treatment St Albans | Healing-PRP Clinics",
  },

  description:
    "Doctor-led Erectile Dysfunction (ED) clinic serving Luton & St Albans. We restore natural function using Shockwave Therapy and PRP (P-Shot®). Private, non-pharmaceutical ED solutions.",

  alternates: {
    canonical: "https://www.healing-prp.co.uk/erectile-dysfunction",
  },

  keywords: [
    // --- HIGH PRIORITY LOCAL TERMS (Luton Focus) ---
    "Erectile dysfunction treatment Luton",
    "Private ED clinic Luton",
    "Men's health clinic near Luton",
    "Impotence treatment Bedfordshire",
    
    // --- CORE CLINICAL TERMS (St Albans/Herts Focus) ---
    "Erectile dysfunction treatment St Albans",
    "Shockwave therapy Hertfordshire",
    "Vascular ED treatment St Albans",
    "Non-surgical impotence cure",
    
    // --- SPECIFIC TREATMENTS & COMPARISONS ---
    "P-Shot for erectile dysfunction",
    "Viagra alternative Luton",
    "Low intensity shockwave therapy London",
    "Restorative sexual medicine",
    
    // --- HIGH-INTENT / COST QUERIES ---
    "Private ED doctor Harpenden",
    "Male performance clinic Watford",
    "Erectile dysfunction clinic consultation cost"
  ],

  openGraph: {
    title: "Erectile Dysfunction Treatment | Luton & St Albans",
    description:
      "Restore spontaneity and confidence. Doctor-led Shockwave & PRP therapy for ED. Conveniently serving Luton, St Albans, and Hertfordshire.",
    url: "https://www.healing-prp.co.uk/erectile-dysfunction",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
  },
};

// --- SEO RICH FAQS (St Albans & Hertfordshire Focus) ---
const faqs = [
  {
    question: "What are the main treatments for Erectile Dysfunction at your St Albans clinic?",
    answer: "At our St Albans clinic, we offer a comprehensive, doctor-led approach to ED. This includes advanced regenerative options like Low-Intensity Shockwave Therapy and the P-Shot (PRP), as well as prescribing personalised medication for ED treatment tailored to your specific cardiovascular and metabolic profile.",
  },
  {
    question: "Is Shockwave Therapy painful?",
    answer: "Most men visiting our Hertfordshire clinic find Shockwave Therapy very tolerable. You may feel a mild tapping sensation, but anaesthetic is not usually required. There is no downtime, allowing you to drive home to Harpenden, Luton, or St Albans immediately after your session.",
  },
  {
    question: "How is this different from standard Viagra or Cialis?",
    answer: "Standard tablets only provide a temporary, symptom-based increase in blood flow. While we do prescribe personalised medication for ED treatment when appropriate, our core focus is on restorative therapies like Shockwave and PRP that aim to support long-term vascular function and tissue health.",
  },
  {
    question: "How quickly will I see results from ED treatments?",
    answer: "Tissue healing and vascular regeneration take time. While some men notice changes after just a few sessions, optimal improvements usually develop gradually in the weeks following your complete treatment course at our St Albans clinic.",
  },
  {
    question: "Can I treat ED if I have diabetes or high blood pressure?",
    answer: "Yes. Erectile dysfunction related to diabetes or vascular issues is incredibly common. During your private consultation at our Hertfordshire clinic, our doctor will thoroughly assess your cardiovascular health and may recommend a combination of regenerative therapy alongside personalised medication for ED treatment.",
  },
  {
    question: "Do I need a GP referral to visit your St Albans ED clinic?",
    answer: "No GP referral is required. We offer direct access to discreet, strictly 1:1 private consultations with our GMC-registered doctors for men across St Albans, Luton, and the wider Bedfordshire and Hertfordshire area.",
  },
  {
    question: "Is this treatment suitable for everyone?",
    answer: "Suitability highly depends on the root cause of your erectile dysfunction, your overall health, and current medications. A thorough medical assessment at our clinic ensures we recommend the safest and most effective protocol for your specific needs.",
  },
];

// --- JSON-LD SCHEMA: Medical Clinic & Medical Therapy ---
const edSchema = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Healing-PRP Clinics St Albans & Luton",
    "description": "Doctor-led Erectile Dysfunction (ED) clinic offering Shockwave Therapy, PRP, and personalised medication for ED treatment.",
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
    "medicalSpecialty": "Urology"
  },
  {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    "name": "Erectile Dysfunction Treatment",
    "alternateName": ["Shockwave Therapy for ED", "P-Shot®", "PRP for ED", "Personalised ED Medication"],
    "description": "Non-surgical, restorative treatments for erectile dysfunction including Low-Intensity Extracorporeal Shockwave Therapy (Li-ESWT), Platelet-Rich Plasma (P-Shot), and bespoke medication protocols.",
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
        id="ed-schema-stalbans"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(edSchema) }}
      />

      {/* 2. Inject FAQ Schema */}
      <Script
        id="ed-faq-schema-stalbans"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* 3. Render Client Component */}
      <ErectileDysfunctionClient 
        // HEADLINE: "Healing-PRP Clinics, St Albans"
        locationName="St Albans"
        
        // BADGE: Local catchment areas
        servingAreas="St Albans • Luton • Harpenden • Hertfordshire"
        
        // LINK: Points to your main P-Shot page
        pShotLink="/p-shot"

        // FAQS: Passed down for the dropdown functionality
        faqs={faqs}
      />
    </main>
  );
}
