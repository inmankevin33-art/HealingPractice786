import type { Metadata } from "next";
import ErectileDysfunctionClient from "@/components/pages/ErectileDysfunctionClient";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    // FIX: Focused on Birmingham & Midlands for browser tab
    absolute: "Erectile Dysfunction Treatment Birmingham | Healing-PRP",
  },

  description:
    "Specialist erectile dysfunction clinic in Birmingham. GMC-registered doctor offering non-surgical Shockwave Therapy & P-Shot (PRP). Confidential ED treatment in Edgbaston.",

  alternates: {
    // NOTE: Ensures Google knows this is the Birmingham specific page
    canonical: "https://www.healing-prp.co.uk/birmingham/erectile-dysfunction",
  },

  keywords: [
    // --- CORE BIRMINGHAM KEYWORDS ---
    "Erectile dysfunction treatment Birmingham",
    "ED clinic Birmingham",
    "P-Shot Birmingham",
    "Shockwave therapy Birmingham",
    
    // --- HIDDEN REACH KEYWORDS (Manchester / Midlands) ---
    "Mens health clinic Manchester",
    "ED treatment Manchester",
    "Erectile dysfunction clinic Midlands",
    "Shockwave therapy West Midlands",
    
    // --- HYPER-LOCAL KEYWORDS ---
    "Private ED clinic Edgbaston",
    "Erectile dysfunction clinic Solihull",
    "ED treatment Sutton Coldfield",
    
    // --- INTENT & COST KEYWORDS ---
    "Non-surgical impotence treatment",
    "GMC registered male health doctor",
    "Male performance clinic Birmingham",
    "Private impotence doctor West Midlands",
    "ED treatment cost Birmingham",
    "Erectile dysfunction clinic consultation West Midlands"
  ],

  openGraph: {
    title: "Erectile Dysfunction Treatment | Birmingham & Midlands",
    description:
      "Confidential, doctor-led ED treatments in Birmingham. Shockwave & PRP therapy. Conveniently serving Edgbaston, Solihull & Sutton Coldfield.",
    url: "https://www.healing-prp.co.uk/birmingham/erectile-dysfunction",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/ed-doctor-consultation.webp",
        width: 1200,
        height: 630,
        alt: "Private ED Consultation Birmingham",
      },
    ],
  },
};

// --- SEO RICH FAQS (Birmingham & Midlands Focus) ---
const faqs = [
  {
    question: "What are the main treatments for Erectile Dysfunction at your Birmingham clinic?",
    answer: "At our Birmingham clinic in Edgbaston, we offer a comprehensive, doctor-led approach to ED. This includes advanced regenerative options like Low-Intensity Shockwave Therapy and the P-Shot (PRP), as well as prescribing personalised medication for ED treatment tailored to your specific cardiovascular and metabolic profile.",
  },
  {
    question: "Is Shockwave Therapy painful?",
    answer: "Most men visiting our West Midlands clinic find Shockwave Therapy very tolerable. You may feel a mild tapping sensation, but anaesthetic is not usually required. There is no downtime, allowing you to drive home to Solihull, Sutton Coldfield, or central Birmingham immediately after your session.",
  },
  {
    question: "How is this different from standard Viagra or Cialis?",
    answer: "Standard tablets only provide a temporary, symptom-based increase in blood flow. While we do prescribe personalised medication for ED treatment when appropriate, our core focus is on restorative therapies like Shockwave and PRP that aim to support long-term vascular function and tissue health.",
  },
  {
    question: "How quickly will I see results from ED treatments?",
    answer: "Tissue healing and vascular regeneration take time. While some men notice changes after just a few sessions, optimal improvements usually develop gradually in the weeks following your complete treatment course at our Birmingham clinic.",
  },
  {
    question: "Can I treat ED if I have diabetes or high blood pressure?",
    answer: "Yes. Erectile dysfunction related to diabetes or vascular issues is incredibly common. During your private consultation at our Edgbaston clinic, our doctor will thoroughly assess your cardiovascular health and may recommend a combination of regenerative therapy alongside personalised medication for ED treatment.",
  },
  {
    question: "Do I need a GP referral to visit your Birmingham ED clinic?",
    answer: "No GP referral is required. We offer direct access to discreet, strictly 1:1 private consultations with our GMC-registered doctors for men across Birmingham, Solihull, and the wider West Midlands area.",
  },
  {
    question: "Is this treatment suitable for everyone?",
    answer: "Suitability highly depends on the root cause of your erectile dysfunction, your overall health, and current medications. A thorough medical assessment at our Birmingham clinic ensures we recommend the safest and most effective protocol for your specific needs.",
  },
];

// --- JSON-LD SCHEMA: Medical Clinic & Medical Therapy (Birmingham) ---
const edSchemaBirmingham = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Healing-PRP Clinics Birmingham",
    "description": "Specialist erectile dysfunction clinic in Birmingham offering Shockwave Therapy, PRP, and personalised medication for ED treatment.",
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
    "medicalSpecialty": "Urology"
  },
  {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    "name": "Erectile Dysfunction Treatment",
    "alternateName": ["Shockwave Therapy for ED", "P-Shot®", "PRP for ED", "Personalised ED Medication"],
    "description": "Non-surgical, restorative treatments for erectile dysfunction including Low-Intensity Extracorporeal Shockwave Therapy (Li-ESWT), Platelet-Rich Plasma (P-Shot), and bespoke medication protocols in Birmingham.",
    "relevantSpecialty": {
      "@type": "MedicalSpecialty",
      "name": "Urology"
    }
  }
];

export default function BirminghamEDPage() {
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
      {/* Clinic & Therapy Schema */}
      <Script
        id="ed-schema-birmingham"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(edSchemaBirmingham) }}
      />
      
      {/* FAQ Schema */}
      <Script
        id="ed-faq-schema-birmingham"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <ErectileDysfunctionClient 
        // 1. HEADLINE: "Healing-PRP Clinics, Birmingham"
        locationName="Birmingham"
        
        // 2. BADGE: Local catchment areas
        servingAreas="Edgbaston • Solihull • Sutton Coldfield • West Midlands"
        
        // 3. LINK: Points to your BIRMINGHAM P-Shot page (crucial for navigation)
        pShotLink="/birmingham/p-shot"

        // 4. FAQS: Passed down for dropdown functionality
        faqs={faqs}
      />
    </main>
  );
}
