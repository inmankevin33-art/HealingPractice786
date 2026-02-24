import type { Metadata } from "next";
import PolynucleotidesClient from "@/components/pages/PolynucleotidesClient";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    absolute: "Polynucleotides St Albans | DNA Glow Skin Treatment | Healing-PRP",
  },
  description:
    "Polynucleotides in Birmingham. Doctor-led regenerative DNA Glow therapy for under-eye rejuvenation and skin quality improvement in Edgbaston.",
  keywords: [
    // Core Service
    "Polynucleotides St Albans",
    "DNA Glow treatment Hertfordshire",
    "Salmon DNA facial",
    "Under eye rejuvenation St Albans",
    
    // Brand Names (High Intent)
    "Ameela eyes St Albans",
    "Nucleofill treatment Luton",
    "PhilArt eyes Hertfordshire",
    "Plinest polynucleotides St Albans", 
    "Neauvia skin rejuvenation UK",      
    
    // Problem/Solution (Long Tail)
    "Tear trough treatment without filler",
    "Dark circle treatment Hertfordshire",
    "Skin boosters St Albans",
    "Crepey skin treatment UK",
    "Biostimulator injections St Albans"
  ],
  alternates: {
    canonical: "https://www.healing-prp.co.uk/polynucleotides",
  },
  openGraph: {
    title: "Polynucleotides 'DNA Glow' | St Albans Clinic",
    description: "Doctor-led regenerative skin treatment. Restore elasticity and hydration naturally without dermal fillers.",
    url: "https://www.healing-prp.co.uk/polynucleotides",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/polynucleotides-hero.webp",
        width: 1200,
        height: 630,
        alt: "Polynucleotide Treatment St Albans - DNA Glow Therapy",
      },
    ],
  },
};

// --- SEO RICH FAQS ---
const faqs = [
  {
    question: "Is polynucleotide treatment available at your St Albans clinic?",
    answer: "Yes. Polynucleotide treatment is available at our St Albans clinic as part of our structured DNA Glow Concept™ protocol. A medical consultation is required to assess suitability and treatment goals."
  },
  {
    question: "What are polynucleotides used for in skin treatment?",
    answer: "Polynucleotides are purified DNA fragments used in regenerative aesthetics to support collagen stimulation and tissue repair. They are commonly used to improve under-eye skin quality, hydration, and early textural changes."
  },
  {
    question: "Can polynucleotides help with dark circles under the eyes?",
    answer: "Polynucleotides are frequently used for delicate under-eye areas where concerns include dark circles, crepey skin, or thinning. They focus on improving skin quality rather than adding structural volume."
  },
  {
    question: "How many polynucleotide sessions are recommended?",
    answer: "A course of three treatments spaced approximately 2–4 weeks apart is commonly advised to support optimal regenerative response. Maintenance sessions may be considered depending on individual skin condition."
  },
  {
    question: "Is there downtime after polynucleotide treatment in St Albans?",
    answer: "Downtime is usually minimal. Mild redness or small injection-site papules may occur and typically settle within 24–48 hours. Most patients return to normal activities shortly after treatment."
  },
  {
    question: "Are polynucleotides the same as dermal fillers?",
    answer: "No. Dermal fillers are designed to add volume and reshape facial contours, whereas polynucleotides are biostimulators that aim to improve skin quality, elasticity, and hydration without altering natural facial structure."
  },
];

// --- JSON-LD SCHEMA: Medical Clinic & Medical Therapy (Polynucleotides) ---
const polynucleotidesSchema = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Healing-PRP Clinics St Albans",
    "description": "Specialist clinic in St Albans providing regenerative aesthetic medicine, including Polynucleotide skin treatments.",
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
    "medicalSpecialty": ["Dermatology", "Aesthetic Medicine"]
  },
  {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    "name": "Polynucleotide Treatment (DNA Glow)",
    // Added Plinest and Neauvia right into the schema array!
    "alternateName": ["Ameela", "Nucleofill", "PhilArt", "Plinest", "Neauvia", "Salmon DNA Facial", "Biostimulator Therapy"],
    "description": "An advanced regenerative biostimulator treatment using polymerized polynucleotides to stimulate fibroblasts, increase collagen production, and naturally rejuvenate skin, particularly around the tear troughs and eyes.",
    "relevantSpecialty": {
      "@type": "MedicalSpecialty",
      "name": "Dermatology"
    }
  }
];

export default function PolynucleotidesPage() {
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
        id="polynucleotides-schema-stalbans"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(polynucleotidesSchema) }}
      />
      
      {/* FAQ Schema */}
      <Script
        id="polynucleotides-faq-stalbans"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Client Component with props */}
      <PolynucleotidesClient 
        locationName="St Albans"
        servingAreas="Harpenden • Luton • Watford • Hertfordshire"
        faqs={faqs} 
      />
    </main>
  );
}
