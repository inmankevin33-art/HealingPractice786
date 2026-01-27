import type { Metadata } from "next";
import FacialAestheticsClient from "@/components/pages/FacialAestheticsClient";

export const metadata: Metadata = {
  // 1. Optimized Title: Result will be "Vampire Facial & Polynucleotides | Birmingham Clinic"
  title: "Vampire Facial & Polynucleotides", 
  
  description:
    "Doctor-led facial aesthetics in Birmingham Edgbaston. Specialist treatments including Vampire Facials, Polynucleotides, and HA Skin Boosters. Serving Solihull, Sutton Coldfield & Harborne.",
  
  alternates: {
    canonical: "https://www.healing-prp.co.uk/birmingham/facial-aesthetics",
  },
  
  // 2. Expanded Satellite Town & Treatment Keywords
  keywords: [
    "Facial Aesthetics Birmingham",
    "Vampire Facial Birmingham",
    "Polynucleotides Solihull",
    "Skin Boosters Sutton Coldfield",
    "PRP Facial West Midlands",
    "Profhilo Birmingham",
    "Seventy Hyal Harborne",
    "Aesthetics clinic Wolverhampton",
    "Exosomes treatment Dudley",
    "Skin rejuvenation Walsall",
    "Microneedling with PRP Birmingham",
    "Anti-ageing injections Halesowen"
  ],
  
  openGraph: {
    title: "Facial Aesthetics & Skin Rejuvenation | Birmingham",
    description:
      "Restore youthful skin with doctor-led aesthetics in Birmingham. Specialist in Polynucleotides and PRP. Serving Solihull & Sutton Coldfield.",
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
