import type { Metadata } from "next";
import FacialAestheticsClient from "@/components/pages/FacialAestheticsClient";

export const metadata: Metadata = {
  // 1. Optimized Title: Result will be "Vampire Facial & Polynucleotides | Birmingham Clinic"
  title: "Vampire Facial & Polynucleotides", 
  
  description:
    "Doctor-led facial aesthetics in Birmingham Edgbaston. Specialist treatments including Vampire Facials, Botox, Polynucleotides, and Skin Boosters.",
  
  alternates: {
    canonical: "https://www.healing-prp.co.uk/birmingham/facial-aesthetics",
  },
  
  keywords: [
    "Facial Aesthetics Birmingham",
    "Vampire Facial Birmingham",
    "Polynucleotides Birmingham",
    "Exosomes Birmingham",
    "Skin Boosters Birmingham",
    "PRP Facial West Midlands",
  ],
  
  openGraph: {
    title: "Facial Aesthetics & Skin Rejuvenation | Birmingham",
    description:
      "Restore youthful skin with doctor-led aesthetics in Birmingham. Specialist in Polynucleotides and PRP.",
    url: "https://www.healing-prp.co.uk/birmingham/facial-aesthetics",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
  },
};

export default function BirminghamFacialPage() {
  return (
    <FacialAestheticsClient locationName="Birmingham" />
  );
}
