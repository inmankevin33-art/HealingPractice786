import type { Metadata } from "next";
import PShotClient from "@/components/pages/PShotClient";

export const metadata: Metadata = {
  // The layout adds " | St Albans Clinic" automatically
  title: "P-Shot® (Priapus Shot) Male Rejuvenation",

  description:
    "Official P-Shot® provider serving Luton, St Albans & Hertfordshire. Advanced PRP therapy to enhance sensitivity, erection quality, and performance. Book your private consultation.",

  alternates: {
    canonical: "https://www.healing-prp.co.uk/p-shot",
  },

  keywords: [
    // High-Priority Location Terms (Luton Focus)
    "P-Shot treatment Luton",
    "Male sexual rejuvenation Luton",
    "PRP injection for penis Luton",
    "Male enhancement clinic Luton",
    "Priapus Shot Bedfordshire",

    // Core Clinical Terms (St Albans/Herts Base)
    "P-Shot treatment St Albans",
    "Priapus Shot Hertfordshire",
    "Penile sensitivity treatment",
    "Male enhancement St Albans",
    "Sexual performance therapy Watford",
    
    // Specific Conditions & Cost
    "P-Shot cost UK",
    "Lichen Sclerosus male treatment",
    "Natural male enhancement Harpenden",
    "Sexual wellness clinic North London", 
    "St Albans aesthetic medicine"
  ],

  openGraph: {
    title: "P-Shot® Male Rejuvenation | Luton & St Albans",
    description:
      "Enhance sensitivity and performance with the P-Shot®. Doctor-led PRP therapy serving patients from Luton and St Albans.",
    url: "https://www.healing-prp.co.uk/p-shot",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
  },
};

export default function Page() {
  return (
    <PShotClient 
      locationName="St Albans"
      servingAreas="Harpenden • Luton • Watford • Hertfordshire"
    />
  );
}
