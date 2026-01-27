import type { Metadata } from "next";
import PricesClient from "@/components/pages/PricesClient";

export const metadata: Metadata = {
  // 1. Optimized Title: Result will be "Treatment Prices & Packages | Birmingham Clinic"
  title: "Treatment Prices & Packages", 
  
  description: "View competitive pricing for P-Shot, O-Shot, and PRP therapy in Birmingham. Doctor-led treatments in Edgbaston, Solihull, and the West Midlands.",
  
  alternates: {
    canonical: "https://www.healing-prp.co.uk/birmingham/prices",
  },

  // 2. Expanded Local & Intent-Based Keywords
  keywords: [
    "PRP treatment cost Birmingham",
    "P-Shot price West Midlands",
    "O-Shot cost Solihull",
    "Affordable PRP hair loss Sutton Coldfield",
    "Joint injection prices Wolverhampton",
    "Vampire Facial cost Harborne",
    "Polynucleotides price Birmingham",
    "Private clinic prices Edgbaston",
    "PRP treatment packages Birmingham", // Added: targets users looking for courses
    "Hair regrowth course price West Midlands", // Added
    "Joint pain therapy cost Dudley" // Added
  ],

  openGraph: {
    title: "Healing-PRP Clinics | Birmingham Price List",
    description: "Transparent pricing for specialist regenerative medicine in Birmingham. Serving Solihull, Sutton Coldfield & Harborne.",
    url: "https://www.healing-prp.co.uk/birmingham/prices",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
  },
};

export default function BirminghamPricesPage() {
  return <PricesClient isBirmingham={true} />;
}
