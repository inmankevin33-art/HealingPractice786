import type { Metadata } from "next";
import ShockwaveTherapyClient from "@/components/pages/ShockwaveTherapyClient";
import Script from "next/script";

export const metadata: Metadata = {
  // SEO Guideline: H1 and Title should focus on Shockwave Therapy for ED in [Location]
  title: {
    absolute: "Shockwave Therapy for ED Birmingham | Healing-PRP Clinics",
  },
  
  // SEO Guideline: Emphasize low-intensity shockwave therapy, what to expect, pricing, and clinician review
  description:
    "Learn how low-intensity focused shockwave therapy is used in ED care in Birmingham. What to expect, pricing, and whether you may be suitable after clinician review.",

  alternates: {
    canonical: "https://www.healing-prp.co.uk/birmingham/shockwave-therapy-erectile-dysfunction",
  },

  keywords: [
    // High-Priority Location Terms
    "shockwave therapy erectile dysfunction Birmingham",
    "shockwave therapy for ED cost Birmingham",
    "shockwave ED price Birmingham",
    "shockwave therapy for ED Birmingham",
    "ED clinic Solihull",
    "ED clinic Edgbaston",
    
    // Core Clinical & Differentiator Terms
    "low-intensity shockwave therapy ED",
    "does shockwave therapy work for ED",
    "focused vs radial shockwave ED",
    "shockwave ED risks",
    "shockwave ED downtime",
    "non-surgical Peyronies treatment West Midlands",
    "Li-ESWT clinic UK",
    "acoustic wave therapy ED Birmingham"
  ],

  openGraph: {
    title: "Shockwave Therapy for ED | Birmingham Clinic",
    description:
      "Doctor-led, focused shockwave therapy (Li-ESWT) for ED and Peyronie's disease in Birmingham. A non-surgical, evidence-based approach.",
    url: "https://www.healing-prp.co.uk/birmingham/shockwave-therapy-erectile-dysfunction",
    // siteName, locale, and type are inherited from layout.tsx
  },
};

// --- SEO RICH FAQS (Birmingham & Evidence-Led Focus) ---
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
    "answer": "Radial shockwave devices act like acoustic massage guns and only penetrate superficially. At our Birmingham clinic, our doctors use Medical-Grade Focused Shockwaves, which penetrate deeply into the corpus cavernosum to effectively stimulate tissue regeneration and break down plaque."
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
      "name": "Healing-PRP Clinics Birmingham",
      "description": "Doctor-led private clinic in Birmingham specialising in focused shockwave therapy (Li-ESWT) for Erectile Dysfunction and Peyronie's disease.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Birmingham",
        "addressRegion": "West Midlands",
        "addressCountry": "UK"
      },
      "areaServed": {
        "@type": "City",
        "name": "Birmingham"
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
      "description": "A clinician-led assessment and treatment course using low-intensity extracorporeal shockwave therapy to treat vascular erectile dysfunction and Peyronie's disease.",
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
        id="shockwave-schema-birmingham"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(shockwaveSchema) }}
      />

      <Script
        id="shockwave-faq-schema-birmingham"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* Dynamic Client Component Loading Birmingham Content */}
      <ShockwaveTherapyClient 
        locationName="Birmingham"
        servingAreas="Edgbaston • Solihull • Sutton Coldfield • West Midlands"
        faqs={faqs}
      />
    </main>
  );
}
