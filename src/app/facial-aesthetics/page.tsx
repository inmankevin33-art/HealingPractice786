import type { Metadata } from "next";
import FacialAestheticsClient from "@/components/pages/FacialAestheticsClient";

export const metadata: Metadata = {
  // 1. Optimized Title: Result will be "Polynucleotides & Skin Boosters | St Albans Clinic"
  // (Assuming your layout template in this folder is set to "| St Albans Clinic")
  title: "Polynucleotides & Skin Boosters", 
  
  description:
    "Doctor-led facial aesthetics in St Albans. Specialist treatments including Polynucleotides, Vampire Facials, and Skin Boosters. Serving Harpenden, Watford & Radlett.",
  
  alternates: {
    canonical: "https://www.healing-prp.co.uk/facial-aesthetics",
  },
  
  // 2. Expanded Hertfordshire & North London Keywords
  keywords: [
    "Facial Aesthetics St Albans",
    "Polynucleotides Hertfordshire",
    "Vampire Facial St Albans",
    "Skin Boosters Harpenden",
    "PRP Facial Radlett",
    "Botox Watford",
    "Aesthetics clinic Hemel Hempstead",
    "Skin rejuvenation Welwyn Garden City",
    "Dermal fillers Berkhamsted",
    "Profhilo St Albans",
    "Exosomes treatment Hertfordshire",
  ],
  
  openGraph: {
    title: "Facial Aesthetics & Skin Rejuvenation | St Albans",
    description:
      "Restore youthful skin with doctor-led aesthetics in St Albans. Specialist in Polynucleotides and PRP. Serving Hertfordshire & North London.",
    url: "https://www.healing-prp.co.uk/facial-aesthetics",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
  },
};

export default function StAlbansFacialPage() {
  return (
    <FacialAestheticsClient locationName="St Albans" />
  );
}
