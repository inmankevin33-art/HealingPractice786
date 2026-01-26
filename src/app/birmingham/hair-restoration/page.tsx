import type { Metadata } from "next";
import HairRestorationClient from "@/components/pages/HairRestorationClient";

export const metadata: Metadata = {
  title: "PRP Hair Loss Treatment Birmingham | Healing-PRP Clinics",
  description:
    "Doctor-led PRP and Exosome hair restoration in Birmingham. Non-surgical treatment for hair thinning and regrowth. Book a consultation.",
  // ADDED CANONICAL TAG HERE
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
    title: "PRP Hair Restoration Clinic in Birmingham",
    description:
      "Effective, non-surgical hair regrowth treatments using PRP and Exosomes. Doctor-led clinic in Birmingham.",
    // ENSURED SYNC WITH CANONICAL
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
