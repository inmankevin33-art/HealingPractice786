import type { Metadata } from "next";
import ShockwaveTherapyClient from "@/components/pages/ShockwaveTherapyClient";
import Script from "next/script";

export const metadata: Metadata = {
  // SEO Guideline: H1 and Title should focus on Shockwave Therapy for ED in [Location] [cite: 85]
  title: {
    absolute: "Shockwave Therapy for ED St Albans | Healing-PRP Clinics",
  },
  
  // SEO Guideline: Emphasize low-intensity shockwave therapy, what to expect, pricing, and clinician review [cite: 85]
  description:
    "Learn how low-intensity focused shockwave therapy is used in ED care in St Albans. What to expect, pricing, and whether you may be suitable after clinician review.",

  alternates: {
    canonical: "https://www.healing-prp.co.uk/shockwave-therapy-erectile-dysfunction",
  },

  keywords: [
    // High-Priority Location Terms [cite: 49]
    "shockwave therapy erectile dysfunction St Albans",
    "shockwave therapy for ED cost St Albans",
    "shockwave ED price St Albans",
    "shockwave therapy for ED St Albans",
    
    // Core Clinical & Differentiator Terms [cite: 59]
    "low-intensity shockwave therapy ED",
    "does shockwave therapy work for ED",
    "focused vs radial shockwave ED",
    "shockwave ED risks",
    "shockwave ED downtime",
    "non-surgical Peyronies treatment Hertfordshire",
    "Li-ESWT clinic UK",
    "acoustic wave therapy ED Hertfordshire"
  ],

  openGraph: {
    title: "Shockwave Therapy for ED | St Albans Clinic",
    description:
      "Doctor-led, focused shockwave therapy (Li-ESWT) for ED and Peyronie's disease in St Albans. A non-surgical, evidence-based approach.",
    url: "https://www.healing-prp.co.uk/shockwave-therapy-erectile-dysfunction",
    // siteName, locale, and type are inherited from layout.tsx
  },
};

// --- SEO RICH FAQS (St Albans & Evidence-Led Focus) [cite: 59, 285] ---
const faqs = [
  {
    "question": "What is low-intensity shockwave therapy (Li-ESWT) for ED?",
    "answer": "Li-ESWT is a non-invasive medical treatment that uses targeted acoustic waves to stimulate angiogenesis—the growth of new blood vessels—in the penile tissue. It aims to address the underlying vascular causes of erectile dysfunction rather than just treating the symptoms."
  },
  {
    "question": "Does shockwave therapy hurt?",
    "answer": "No, the treatment is generally painless. Most patients experience a light tapping or tingling sensation during the 15-20 minute session. No anesthesia is required, and there is zero downtime."
  },
  {
    "question": "What is the difference between Focused and Radial shockwave therapy?",
    "answer": "Radial shockwave devices act like acoustic massage guns and only penetrate superficially. At our St Albans clinic, our doctors use Medical-Grade Focused Shockwaves, which penetrate deeply into the corpus cavernosum to effectively stimulate tissue regeneration and break down plaque."
  },
  {
    "question": "How many shockwave sessions will I need?",
    "answer": "A standard protocol typically involves a course of 6 sessions, delivered over 3 to 6 weeks. However, the exact number depends on your individual clinical assessment and the severity of your vascular ED or Peyronie's disease."
  },
  {
    "question": "Can shockwave therapy help with Peyronie's Disease?",
    "answer": "Yes. Focused shockwave therapy can be used to create micro-traumas in the hardened fibrous plaque associated with Peyronie's disease, helping to soften the scar tissue and potentially reduce painful curvature over time."
  },
  {
    "question": "How is this different from taking Viagra or Cialis?",
    "answer": "Oral medications like Viagra temporarily increase blood flow but do not fix the underlying vascular issue. Shockwave therapy aims to restore your natural erectile mechanism by growing new, healthy blood vessels, potentially reducing or eliminating the need for tablets."
  },
  {
    "question": "Are there any side effects or downtime?",
    "answer": "Side effects are extremely rare and typically limited to temporary, mild sensitivity or slight bruising. It is a walk-in, walk-out procedure, meaning you can resume normal activities—including sexual intercourse—immediately."
  },
  {
    "question": "Is shockwave therapy guaranteed to work?",
    "answer": "No medical treatment carries a 100% guarantee. Suitability depends heavily on the underlying cause of your ED. Men with mild to moderate vascular ED generally see the best results. A full doctor-led assessment is required to determine if you are a viable candidate."
  }
];

// --- JSON-LD SCHEMA: Medical Clinic & Medical Therapy ---
const shockwaveSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "name": "Healing-PRP Clinics St Albans",
      "description": "Doctor-led private clinic specialising in focused shockwave therapy (Li-ESWT) for Erectile Dysfunction and Peyronie's disease.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "St Albans",
        "addressRegion": "Hertfordshire",
        "addressCountry": "UK"
      },
      "areaServed": {
        "@type": "City",
        "name": "St Albans"
      },
      "medicalDirector": {
        "@type": "Physician",
        "name": "Dr Syed Abdi",
        "url": "https://www.healing-prp.co.uk/our-doctor"
      },
      "medicalSpecialty": ["Urology", "Men's Health"]
    },
    {
      "@type": "MedicalTherapy",
      "name": "Shockwave Therapy for Erectile Dysfunction",
      "alternateName": ["Li-ESWT", "Focused Shockwave Therapy", "Acoustic Wave Therapy for ED"],
      "description": "A clinician-led assessment and treatment course using low-intensity extracorporeal shockwave therapy to treat vascular erectile dysfunction and Peyronie's disease. [cite: 128]",
      "relevantSpecialty": {
        "@type": "MedicalSpecialty",
        "name": "Urology"
      }
    }
  ]
};

export default function Page() {
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
      <Script
        id="shockwave-schema-stalbans"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(shockwaveSchema) }}
      />

      <Script
        id="shockwave-faq-schema-stalbans"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <ShockwaveTherapyClient 
        locationName="St Albans"
        servingAreas="Harpenden • Luton • Watford • Hertfordshire"
        faqs={faqs}
      />
    </main>
  );
}
