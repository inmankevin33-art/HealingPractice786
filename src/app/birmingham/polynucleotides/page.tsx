import type { Metadata } from "next";
import PolynucleotidesClient from "@/components/pages/PolynucleotidesClient";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    absolute: "Polynucleotides Birmingham | DNA Glow Skin Treatment | Healing-PRP",
  },
  
  // TRIMMED: Exactly 143 characters to guarantee no cut-offs on Google search results
  description:
    "Polynucleotides in Birmingham. Doctor-led regenerative DNA Glow therapy for under-eye rejuvenation and skin quality improvement in Edgbaston.",
  
  keywords: [
    // --- Core Service ---
    "Polynucleotides Birmingham",
    "DNA Glow treatment West Midlands",
    "Salmon DNA facial Birmingham",
    "Under eye rejuvenation West Midlands",
    
    // --- Brand Names (High Intent) ---
    "Ameela eyes Birmingham",
    "Nucleofill treatment Edgbaston",
    "PhilArt eyes Solihull",
    "Plinest polynucleotides Birmingham",
    "Neauvia skin rejuvenation West Midlands",
    
    // --- Problem/Solution (Long Tail) ---
    "Tear trough treatment Birmingham",
    "Skin boosters Sutton Coldfield",
    "Tear trough treatment without filler Edgbaston",
    "Crepey skin treatment Birmingham",
    "Biostimulator injections West Midlands"
  ],
  
  alternates: {
    canonical: "https://www.healing-prp.co.uk/birmingham/polynucleotides",
  },
  
  openGraph: {
    title: "Polynucleotides 'DNA Glow' | Birmingham Clinic",
    description: "Doctor-led regenerative skin treatment in Edgbaston. Restore elasticity and hydration naturally without dermal fillers.",
    url: "https://www.healing-prp.co.uk/birmingham/polynucleotides",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/polynucleotides-hero.webp", 
        width: 1200,
        height: 630,
        alt: "Polynucleotide Treatment Birmingham - DNA Glow Therapy",
      },
    ],
  },
};

// --- SEO RICH FAQS ---
const faqs = [
  {
    question: "What exactly are Polynucleotides?",
    answer: "Polynucleotides are highly purified DNA fragments used in regenerative aesthetics to support collagen stimulation and tissue repair. They act as biostimulators, encouraging the skin’s natural regenerative processes.",
  },
  {
    question: "What makes the DNA Glow Concept™ different?",
    answer: "Unlike standard treatments that use a single product, our concept combines three powerful modalities: Polynucleotides for deep repair, Non-Cross-Linked HA for hydration, and Microneedling for surface texture. This creates a multi-layered result.",
  },
  {
    question: "Are polynucleotides better than filler?",
    answer: "They serve different purposes. Fillers add structural volume to change the shape of your face. Polynucleotides improve the quality of the skin itself—making it thicker, hydrated, and more elastic without changing your natural features or causing puffiness.",
  },
  {
    question: "Can polynucleotides be used under the eyes?",
    answer: "Yes, polynucleotide treatments like Ameela, PhilArt, and Plinest are exceptional for the delicate under-eye area. They help thicken crepey skin and reduce dark circles without the risk of the 'puffy' look sometimes associated with traditional tear trough fillers.",
  },
  {
    question: "How many sessions do I need?",
    answer: "We typically recommend a course of 3 treatments spaced 2–4 weeks apart to achieve the full clinical effect. Maintenance is usually recommended as one single session every 6–9 months.",
  },
  {
    question: "How soon will I see results from the DNA Glow treatment?",
    answer: "While you will notice an initial glow and hydration within the first week due to the HA component, the true regenerative effects of polynucleotides take about 3 to 4 weeks to become visible as your body naturally produces new collagen.",
  },
  {
    question: "Is there downtime?",
    answer: "Downtime is minimal. Because we treat multiple layers of the skin, you may have some redness or small bumps (papules) at the injection sites for 24–48 hours. This is completely normal and a sign the product is working.",
  },
  {
    question: "Does the polynucleotide treatment hurt?",
    answer: "We apply a highly effective, prescription-strength numbing cream before the procedure begins. Because we use ultra-fine needles and careful microneedling techniques, most patients report only very mild discomfort.",
  },
  {
    question: "Who is a good candidate for this treatment?",
    answer: "Anyone noticing early signs of skin laxity, dullness, dark circles, or crepey skin is a great candidate. It is highly effective for both preventative anti-ageing in your 30s and restorative care in your 40s, 50s, and beyond.",
  },
];

// --- JSON-LD SCHEMA: Medical Clinic & Medical Therapy (Birmingham) ---
const polynucleotidesSchemaBirmingham = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Healing-PRP Clinics Birmingham",
    "description": "Specialist clinic in Edgbaston, Birmingham providing regenerative aesthetic medicine, including Polynucleotide skin treatments.",
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
    "medicalSpecialty": ["Dermatology", "Aesthetic Medicine"]
  },
  {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    "name": "Polynucleotide Treatment (DNA Glow)",
    "alternateName": ["Ameela", "Nucleofill", "PhilArt", "Plinest", "Neauvia", "Salmon DNA Facial", "Biostimulator Therapy"],
    "description": "An advanced regenerative biostimulator treatment in Birmingham using polymerized polynucleotides to stimulate fibroblasts, increase collagen production, and naturally rejuvenate skin, particularly around the tear troughs and eyes.",
    "relevantSpecialty": {
      "@type": "MedicalSpecialty",
      "name": "Dermatology"
    }
  }
];

export default function BirminghamPolynucleotidesPage() {
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
        id="polynucleotides-birmingham-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(polynucleotidesSchemaBirmingham) }}
      />

      {/* FAQ Schema */}
      <Script
        id="polynucleotides-faq-birmingham"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* Client Component with props */}
      <PolynucleotidesClient 
        locationName="Birmingham"
        servingAreas="Edgbaston • Solihull • Sutton Coldfield • West Midlands"
        faqs={faqs}
      />
    </main>
  );
}
