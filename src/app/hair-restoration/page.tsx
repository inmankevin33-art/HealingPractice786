import type { Metadata } from "next";
import HairRestorationClient from "@/components/pages/HairRestorationClient";

export const metadata: Metadata = {
  // 1. Optimized Title: Result will be "PRP Hair Loss & Regrowth | St Albans Clinic"
  title: "PRP Hair Loss & Regrowth", 
  
  description:
    "Doctor-led PRP and Exosome hair restoration in St Albans. Non-surgical treatment for hair thinning and regrowth. Serving Harpenden, Radlett, and Hertfordshire.",
  
  alternates: {
    canonical: "https://www.healing-prp.co.uk/hair-restoration",
  },
  
  // 2. Expanded Local & Clinical Keywords
  keywords: [
    "PRP hair treatment St Albans",
    "Hair loss treatment Hertfordshire",
    "Hair restoration Harpenden",
    "Exosome hair therapy Radlett",
    "Male pattern baldness St Albans",
    "Female hair thinning treatment Watford",
    "PRP hair clinic Hemel Hempstead",
    "Non-surgical hair transplant alternative",
    "Thinning hair specialist Berkhamsted",
    "PRP scalp treatment North London"
  ],
  
  openGraph: {
    title: "PRP Hair Restoration Clinic | St Albans",
    description:
      "Effective, non-surgical hair regrowth treatments using PRP and Exosomes. Doctor-led clinic in St Albans.",
    url: "https://www.healing-prp.co.uk/hair-restoration",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
  },
};

export default function HairRestorationPage() {
  return (
    <HairRestorationClient locationName="St Albans" />
  );
}
