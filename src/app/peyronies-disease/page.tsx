import type { Metadata } from "next";
import PeyroniesClient from "@/components/pages/PeyroniesClient";

export const metadata: Metadata = {
  // 1. Optimized Title: The layout adds " | St Albans Clinic"
  title: "Peyronie's Disease Treatment & Correction",

  description:
    "Doctor-led Peyronie's disease treatment in St Albans. Non-surgical correction using P-Shot® (PRP) and Shockwave Therapy to reduce curvature and pain. Serving Hertfordshire & London.",

  alternates: {
    canonical: "https://www.healing-prp.co.uk/peyronies-disease",
  },

  // 2. Expanded Local & Clinical Keywords (Herts/Beds/London)
  keywords: [
    // Core Clinical Terms
    "Peyronies disease treatment St Albans",
    "Non-surgical Peyronies correction",
    "P-Shot for Peyronies Hertfordshire",
    "Shockwave therapy for Peyronies",
    "Penile curvature treatment Watford",
    "Bent penis correction Harpenden",
    "Peyronies specialist Welwyn Garden City",
    "Xiapex alternative St Albans",
    "Peyronies plaque treatment",
    "Erectile dysfunction curvature",
    
    // Wider Area Reach (Luton/London)
    "Peyronies clinic Luton",
    "Peyronies treatment North London",
    "Private Peyronies doctor Hertfordshire",
    "Edgbaston health clinic (Reference for standard)", 
    "Male sexual health St Albans"
  ],

  openGraph: {
    title: "Peyronie's Disease Treatment | St Albans & Hertfordshire",
    description:
      "Non-surgical correction for penile curvature and pain. Doctor-led PRP & Shockwave therapy in St Albans.",
    url: "https://www.healing-prp.co.uk/peyronies-disease",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
  },
};

export default function Page() {
  return <PeyroniesClient />;
}
