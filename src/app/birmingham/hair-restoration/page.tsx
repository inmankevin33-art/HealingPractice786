import type { Metadata } from "next";
import HairRestorationClient from "@/components/pages/HairRestorationClient";

export const metadata: Metadata = {
  // 1. Optimized Title: The layout template will append "| Birmingham Clinic" automatically
  title: "PRP Hair Loss & Regrowth", 
  
  description:
    "Doctor-led PRP and Exosome hair restoration in Birmingham. Advanced non-surgical treatments for hair thinning. Serving Solihull, Sutton Coldfield, and the West Midlands.",
  
  alternates: {
    canonical: "https://www.healing-prp.co.uk/birmingham/hair-restoration",
  },
  
  // 2. Expanded Regional & Treatment Keywords
  keywords: [
    "PRP hair treatment Birmingham",
    "Hair loss treatment Solihull",
    "Hair restoration Sutton Coldfield",
    "Exosome hair therapy West Midlands",
    "Male pattern baldness Wolverhampton",
    "Female hair thinning treatment Dudley",
    "PRP hair clinic Edgbaston",
    "Non-surgical hair transplant alternative Birmingham",
    "Thinning hair specialist Stourbridge",
    "Scalp PRP treatment Halesowen"
  ],
  
  openGraph: {
    title: "PRP Hair Restoration Clinic | Birmingham",
    description:
      "Effective, non-surgical hair regrowth treatments using PRP and Exosomes. Doctor-led clinic in Birmingham Edgbaston.",
    url: "https://www.healing-prp.co.uk/birmingham/hair-restoration",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
  },
};

export default function BirminghamHairRestorationPage() {
  return (
    <HairRestorationClient locationName="Birmingham" />
  );
}
