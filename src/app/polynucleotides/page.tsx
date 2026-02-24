import type { Metadata } from "next";
import PolynucleotidesClient from "@/components/pages/PolynucleotidesClient";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    absolute: "Polynucleotides St Albans | DNA Glow Skin Treatment | Healing-PRP Clinics",
  },
  description:
    "Polynucleotides in St Albans. Doctor-led regenerative DNA Glow therapy for under-eye rejuvenation and skin quality improvement in Hertfordshire.",
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
    answer: "Yes. Doctor-led polynucleotide treatment is available at our St Albans clinic as part of our structured DNA Glow Concept™ protocol. A medical consultation is required to assess suitability and your specific skin goals."
  },
  {
    question: "What are polynucleotides used for in skin treatment?",
    answer: "Polynucleotides are purified DNA fragments used in regenerative aesthetics to support collagen stimulation and tissue repair. At our Hertfordshire clinic, they are commonly used to improve under-eye skin quality, hydration, and early textural changes."
  },
  {
    question: "Can polynucleotides help with dark circles under the eyes?",
    answer: "Polynucleotides are frequently used by our St Albans patients for the delicate under-eye areas where concerns include dark circles, crepey skin, or thinning. They focus on naturally improving skin quality rather than adding structural volume."
  },
  {
    question: "How many polynucleotide sessions are recommended?",
    answer: "For patients visiting our St Albans skin clinic, a course of three treatments spaced approximately 2–4 weeks apart is commonly advised to support an optimal regenerative response. Maintenance sessions may be considered depending on individual skin condition."
  },
  {
    question: "Is there downtime after polynucleotide treatment in St Albans?",
    answer: "Downtime is usually minimal. Mild redness or small injection-site papules may occur and typically settle within 24–48 hours. Most patients return to their normal daily activities in Hertfordshire shortly after treatment."
  },
  {
    question: "Are polynucleotides the same as dermal fillers?",
    answer: "No. Dermal fillers are designed to add volume and reshape facial contours, whereas polynucleotides are biostimulators that aim to improve skin quality, elasticity, and hydration without altering your natural facial structure."
  },
  {
    question: "What is non-cross-linked hyaluronic acid (HA) and how is it different from filler?",
    answer: "Non-cross-linked hyaluronic acid is a ‘skin booster’ designed for hydration and skin quality rather than volume. Unlike dermal fillers (which are cross-linked to hold shape), non-cross-linked HA spreads more evenly within the skin to support hydration, texture and elasticity without changing facial contours."
  },
  {
    question: "What does non-cross-linked HA help with?",
    answer: "Non-cross-linked HA is commonly used for dehydrated or dull skin, fine lines, and overall skin texture. It is a popular choice at our St Albans clinic when the goal is smoother, more luminous skin without adding structural volume."
  },
  {
    question: "Can polynucleotides or non-cross-linked hyaluronic acid help with acne scars?",
    answer: "They may help in selected cases, particularly where acne scarring is mild and the main issue is uneven texture. Polynucleotides support regenerative signalling over time, while HA improves hydration. Deep, tethered acne scars usually need scar-focused treatments following a personalised skin assessment with our St Albans doctor."
  },
  {
    question: "What is PDRN in aesthetics?",
    answer: "PDRN (polydeoxyribonucleotide) is a DNA-derived regenerative ingredient used in medical aesthetics to support skin repair and recovery. It is often used in protocols focused on improving skin texture, resilience and overall skin quality."
  },
  {
    question: "What is the difference between PDRN and PN (polynucleotides) for skin?",
    answer: "Both are used in regenerative aesthetics, but protocols may differ depending on the product and the target concern. In practice, the choice is based on factors such as skin quality, sensitivity, the treatment area (for example under-eye), and whether the goal is collagen support, hydration, or recovery."
  },
  {
    question: "What is PRP microneedling?",
    answer: "PRP microneedling, offered alongside our DNA Glow Concept in St Albans, combines microneedling with Platelet-Rich Plasma (PRP) prepared from a small sample of your blood. PRP contains growth factors involved in normal tissue repair which may support collagen signalling."
  },
  {
    question: "What concerns can PRP microneedling help improve?",
    answer: "PRP microneedling is commonly used by our Hertfordshire patients for uneven skin texture, post-acne scarring, enlarged pores, fine lines and dullness. Results tend to develop gradually as collagen remodelling occurs."
  },
  {
    question: "How soon do you see results from PRP microneedling?",
    answer: "Some people notice a short-term glow within a week as the skin recovers. More meaningful changes in texture and firmness typically develop over several weeks as collagen remodelling progresses. Individual results vary."
  },
  {
    question: "Is there downtime after PRP microneedling?",
    answer: "Downtime is usually mild. Redness can last 24–48 hours, and some people experience light dryness or flaking as the skin heals before returning to their normal routine. Post-treatment skincare advice helps support recovery."
  },
  {
    question: "What is niacinamide and why is it used in skincare protocols?",
    answer: "Niacinamide (vitamin B3) is a well-studied skincare ingredient that supports the skin barrier, helps reduce redness, and can improve uneven tone and the appearance of pores. It is often recommended as part of a maintenance routine alongside regenerative treatments."
  },
  {
    question: "Can you combine polynucleotides with non-cross-linked HA and microneedling?",
    answer: "Yes, this is exactly what our signature DNA Glow Concept™ at Healing-PRP St Albans is designed to do. Combination protocols address multiple layers of skin health—dermal support, hydration and surface texture."
  },
  {
    question: "Is a consultation needed before PDRN, polynucleotides, or PRP microneedling?",
    answer: "Yes. Every patient at our St Albans clinic receives a private medical consultation to confirm suitability, discuss expected outcomes, and ensure treatments are appropriate for your medical history, skin type, and goals."
  }
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
