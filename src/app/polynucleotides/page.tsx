import type { Metadata } from "next";
import PolynucleotidesClient from "@/components/pages/PolynucleotidesClient";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    absolute: "Polynucleotides St Albans | DNA Glow Skin Treatment | Healing-PRP",
  },
  description:
    "Official Polynucleotide skin treatment in St Albans & Hertfordshire. Regenerative 'DNA Glow' therapy for dark circles, fine lines & crepey skin. GMC-registered doctor.",
  keywords: [
    "Polynucleotides St Albans",
    "DNA Glow treatment Hertfordshire",
    "Ameela eyes St Albans",
    "Nucleofill treatment Luton",
    "PhilArt eyes Hertfordshire",
    "Salmon DNA facial",
    "Under eye rejuvenation St Albans",
    "Skin boosters Hertfordshire",
    "Tear trough treatment without filler",
  ],
  alternates: {
    canonical: "https://www.healing-prp.co.uk/polynucleotides",
  },
  openGraph: {
    title: "Polynucleotides 'DNA Glow' | St Albans Clinic",
    description: "Doctor-led regenerative skin treatment. Restore elasticity and hydration naturally.",
    url: "https://www.healing-prp.co.uk/polynucleotides",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/polynucleotides-hero.webp",
        width: 1200,
        height: 630,
        alt: "Polynucleotide Treatment St Albans",
      },
    ],
  },
};

// JSON-LD Structured Data for Local SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "name": "Healing-PRP Clinics St Albans",
  "description": "Specialist clinic for regenerative medicine and polynucleotide skin treatments.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "St Albans",
    "addressRegion": "Hertfordshire",
    "addressCountry": "UK"
  },
  "medicalSpecialty": "Dermatology",
  "availableService": {
    "@type": "MedicalTherapy",
    "name": "Polynucleotide Treatment (DNA Glow)",
    "description": "Regenerative biostimulator treatment using salmon DNA to improve skin quality and dark circles."
  }
};

export default function PolynucleotidesPage() {
  return (
    <>
      <Script
        id="polynucleotides-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PolynucleotidesClient 
        locationName="St Albans"
        servingAreas="Harpenden • Luton • Watford • Hertfordshire"
      />
    </>
  );
}
