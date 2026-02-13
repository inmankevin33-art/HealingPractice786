import type { Metadata } from "next";
import PolynucleotidesClient from "@/components/pages/PolynucleotidesClient";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    absolute: "Polynucleotides Birmingham | DNA Glow Skin Treatment | Healing-PRP",
  },
  description:
    "Official Polynucleotide skin treatment in Birmingham & West Midlands. Regenerative 'DNA Glow' therapy for dark circles & skin quality. GMC-registered doctor in Edgbaston.",
  keywords: [
    "Polynucleotides Birmingham",
    "DNA Glow treatment West Midlands",
    "Ameela eyes Birmingham",
    "Nucleofill treatment Edgbaston",
    "PhilArt eyes Solihull",
    "Salmon DNA facial Birmingham",
    "Under eye rejuvenation West Midlands",
    "Skin boosters Sutton Coldfield",
    "Tear trough treatment Birmingham",
  ],
  alternates: {
    canonical: "https://www.healing-prp.co.uk/birmingham/polynucleotides",
  },
  openGraph: {
    title: "Polynucleotides 'DNA Glow' | Birmingham Clinic",
    description: "Doctor-led regenerative skin treatment in Edgbaston. Restore elasticity and hydration naturally.",
    url: "https://www.healing-prp.co.uk/birmingham/polynucleotides",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/polynucleotides-hero.webp", 
        width: 1200,
        height: 630,
        alt: "Polynucleotide Treatment Birmingham",
      },
    ],
  },
};

// JSON-LD Structured Data for Local SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "name": "Healing-PRP Clinics Birmingham",
  "description": "Specialist clinic for regenerative medicine and polynucleotide skin treatments in Edgbaston.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Birmingham",
    "addressRegion": "West Midlands",
    "addressCountry": "UK"
  },
  "medicalSpecialty": "Dermatology",
  "availableService": {
    "@type": "MedicalTherapy",
    "name": "Polynucleotide Treatment (DNA Glow)",
    "description": "Regenerative biostimulator treatment using salmon DNA to improve skin quality and dark circles."
  }
};

export default function BirminghamPolynucleotidesPage() {
  return (
    <>
      <Script
        id="polynucleotides-birmingham-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PolynucleotidesClient 
        locationName="Birmingham"
        servingAreas="Edgbaston • Solihull • Sutton Coldfield • West Midlands"
      />
    </>
  );
}
