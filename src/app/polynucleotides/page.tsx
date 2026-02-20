import type { Metadata } from "next";
import PolynucleotidesClient from "@/components/pages/PolynucleotidesClient";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    absolute: "Polynucleotides St Albans | DNA Glow Skin Treatment | Healing-PRP",
  },
  description:
    "Official Polynucleotide clinic in St Albans. Regenerative 'DNA Glow' therapy for dark circles, fine lines & crepey skin by a GMC-registered doctor.",
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
    "Plinest polynucleotides St Albans", // <-- NEW
    "Neauvia skin rejuvenation UK",      // <-- NEW
    
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
  return (
    <>
      <Script
        id="polynucleotides-schema-stalbans"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(polynucleotidesSchema) }}
      />
      <PolynucleotidesClient 
        locationName="St Albans"
        servingAreas="Harpenden • Luton • Watford • Hertfordshire"
      />
    </>
  );
}
