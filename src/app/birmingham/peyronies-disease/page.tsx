import type { Metadata } from "next";
import PeyroniesClient from "@/components/pages/PeyroniesClient";

export const metadata: Metadata = {
  // 1. Optimized Title: The layout adds " | Birmingham Clinic"
  title: "Peyronie's Disease Treatment & Correction",

  description:
    "Expert Peyronie's disease treatment in Birmingham (Edgbaston). Non-surgical P-Shot® and Shockwave therapy to improve curvature, pain, and function. Private doctor-led care.",

  alternates: {
    canonical: "https://www.healing-prp.co.uk/birmingham/peyronies-disease",
  },

  // 2. Expanded Local & Clinical Keywords (West Midlands)
  keywords: [
    // Core Clinical Terms
    "Peyronies disease treatment Birmingham",
    "Peyronies correction Edgbaston",
    "P-Shot for Peyronies West Midlands",
    "Shockwave therapy for Peyronies Birmingham",
    "Penile curvature clinic Solihull",
    "Bent penis treatment Sutton Coldfield",
    "Peyronies specialist Walsall",
    "Non-surgical Peyronies help",
    "Peyronies plaque reduction Birmingham",
    "Male sexual health clinic Edgbaston",
    
    // Broader Midlands Reach
    "Peyronies doctor Wolverhampton",
    "Private Peyronies clinic Midlands",
    "Erectile curvature treatment Birmingham"
  ],

  openGraph: {
    title: "Peyronie's Disease Treatment | Birmingham (Edgbaston)",
    description:
      "Specialist non-surgical care for Peyronie's disease. PRP and Shockwave therapy at our private Birmingham clinic.",
    url: "https://www.healing-prp.co.uk/birmingham/peyronies-disease",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
  },
};

export default function Page() {
  return <PeyroniesClient />;
}
