import type { Metadata } from "next";
import PolynucleotidesClient from "@/components/pages/PolynucleotidesClient";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    absolute: "Polynucleotides Birmingham | DNA Glow Skin Treatment | Healing-PRP",
  },
  
  // TRIMMED: Exactly 143 characters to guarantee no cut-offs on Google search results
  description:
    "Official Polynucleotide clinic in Birmingham. Regenerative 'DNA Glow' therapy for dark circles & skin quality by a GMC doctor in Edgbaston.",
  
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
  return (
    <>
      <Script
        id="polynucleotides-birmingham-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(polynucleotidesSchemaBirmingham) }}
      />
      <PolynucleotidesClient 
        locationName="Birmingham"
        servingAreas="Edgbaston • Solihull • Sutton Coldfield • West Midlands"
      />
    </>
  );
}
