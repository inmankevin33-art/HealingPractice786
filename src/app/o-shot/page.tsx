import type { Metadata } from "next";
import OShotClient from "@/components/pages/OShotClient";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    absolute: "O-Shot® (Orgasm Shot) Female Rejuvenation St Albans | Healing-PRP",
  },

  description:
    "Official O-Shot® provider serving Luton, St Albans & Hertfordshire. Advanced PRP therapy to enhance sensitivity, natural lubrication, and intimate wellness. Book your private consultation.",

  alternates: {
    canonical: "https://www.healing-prp.co.uk/o-shot",
  },

  keywords: [
    // High-Priority Location Terms (Luton Focus)
    "O-Shot treatment Luton",
    "Female sexual rejuvenation Luton",
    "Vaginal PRP injection Luton",
    "Women's intimate wellness clinic Luton",
    "Orgasm Shot Bedfordshire",

    // Core Clinical Terms (St Albans/Herts Base)
    "O-Shot treatment St Albans",
    "Orgasm Shot Hertfordshire",
    "Female sensitivity treatment",
    "Vaginal rejuvenation St Albans",
    "Female sexual wellness Watford",
    
    // Specific Conditions & Cost
    "O-Shot cost UK",
    "O-Shot consultation Hertfordshire", 
    "Stress urinary incontinence treatment St Albans",
    "Natural vaginal dryness treatment Harpenden",
    "Women's health clinic North London", 
    "St Albans aesthetic medicine"
  ],

  openGraph: {
    title: "O-Shot® Female Rejuvenation | Luton & St Albans",
    description:
      "Enhance intimate wellness, sensitivity, and comfort with the O-Shot®. Doctor-led PRP therapy serving patients from Luton and St Albans.",
    url: "https://www.healing-prp.co.uk/o-shot",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
  },
};

// --- SEO RICH FAQS (St Albans & Hertfordshire Focus) ---
const faqs = [
  {
    question: "What is the O-Shot (Orgasm Shot) and how does it work?",
    answer: "The O-Shot, available at our St Albans clinic, is a doctor-led regenerative treatment for women. It uses your body's own Platelet-Rich Plasma (PRP) to stimulate tissue repair, increase blood flow, and support enhanced sensitivity and natural lubrication in the vaginal and clitoral areas.",
  },
  {
    question: "Is the O-Shot painful?",
    answer: "We prioritise patient comfort at our Hertfordshire clinic. A highly effective local anaesthetic cream is applied to the intimate area before the procedure, meaning most women find the O-Shot virtually painless and very tolerable.",
  },
  {
    question: "How long does the O-Shot procedure take?",
    answer: "The entire appointment takes approximately 45 to 60 minutes. This includes a private medical consultation, blood draw, PRP preparation, and the treatment itself. You can return to your normal daily activities in Harpenden, Luton, or Watford immediately.",
  },
  {
    question: "When will I notice the effects of the O-Shot?",
    answer: "Because the O-Shot relies on natural tissue regeneration, results develop gradually. Some women report initial improvements in sensitivity and natural moisture within a few weeks, with optimal benefits typically appearing 8 to 12 weeks after treatment.",
  },
  {
    question: "Can the O-Shot help with urinary incontinence?",
    answer: "Yes, the regenerative properties of PRP can provide structural support to the anterior vaginal wall, which frequently helps alleviate symptoms of mild stress urinary incontinence. Our GMC-registered doctors provide comprehensive assessments in St Albans to determine if the O-Shot is right for you.",
  },
  {
    question: "How long do the results of the O-Shot last?",
    answer: "Results vary depending on your age, baseline hormonal health, and lifestyle. Many women experience sustained improvements in sensation, lubrication, and urinary control for up to 12 to 18 months. We often discuss maintenance protocols during your review.",
  },
  {
    question: "Is a consultation required before getting the O-Shot?",
    answer: "Yes. We require a thorough, discreet medical consultation at our St Albans clinic to review your medical history, discuss your specific wellness goals, and ensure the O-Shot is a safe and suitable therapy for you.",
  },
];

// --- JSON-LD SCHEMA: Medical Clinic & Medical Therapy ---
const oShotSchema = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Healing-PRP Clinics St Albans",
    "description": "Doctor-led clinic providing the official O-Shot® (Orgasm Shot) and female intimate wellness therapies.",
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
    "medicalSpecialty": ["Women's Health", "Gynecology", "Aesthetic Medicine"]
  },
  {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    "name": "O-Shot® (Orgasm Shot)",
    "alternateName": ["Platelet-Rich Plasma (PRP) Female Rejuvenation", "Vaginal PRP Injection"],
    "description": "An autologous Platelet-Rich Plasma (PRP) injection therapy designed to improve female intimate health, natural lubrication, urinary control, and sexual sensitivity.",
    "relevantSpecialty": {
      "@type": "MedicalSpecialty",
      "name": "Women's Health"
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
        id="oshot-schema-stalbans"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(oShotSchema) }}
      />

      {/* 2. Inject FAQ Schema */}
      <Script
        id="oshot-faq-schema-stalbans"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* 3. Render Client Component */}
      <OShotClient 
        locationName="St Albans"
        servingAreas="Harpenden • Luton • Watford • Hertfordshire"
        faqs={faqs} 
      />
    </main>
  );
}
