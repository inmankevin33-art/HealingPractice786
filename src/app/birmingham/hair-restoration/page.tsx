import type { Metadata } from "next";
import HairRestorationClient from "@/components/pages/HairRestorationClient";

export const metadata: Metadata = {
  // 1. Optimized Title: Result will be "PRP Hair Loss & Regrowth | Birmingham Clinic"
  title: "PRP Hair Loss & Regrowth", 
  
  description:
    "Doctor-led PRP and Exosome hair restoration in Birmingham. Non-surgical treatment for hair thinning and regrowth. Book a consultation.",
  
  // 2. SEO Best Practice: Fixed canonical to prevent duplicate content
  alternates: {
    canonical: "https://www.healing-prp.co.uk/birmingham/hair-restoration",
  },
  
  keywords: [
    "PRP hair treatment Birmingham",
    "Hair loss treatment Birmingham",
    "Hair restoration Birmingham",
    "Exosome hair treatment Birmingham",
    "Male pattern baldness Birmingham",
    "Female hair thinning treatment Birmingham",
  ],
  
  openGraph: {
    // We keep 'Birmingham' here as OG titles don't use the layout template
    title: "PRP Hair Restoration Clinic | Birmingham",
    description:
      "Effective, non-surgical hair regrowth treatments using PRP and Exosomes. Doctor-led clinic in Birmingham.",
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
