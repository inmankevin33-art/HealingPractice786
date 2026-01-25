import type { Metadata } from "next";
import HairRestorationClient from "@/components/pages/HairRestorationClient";

export const metadata: Metadata = {
  title: "PRP Hair Loss Treatment St Albans | Healing-PRP Clinics",
  description:
    "Doctor-led PRP and Exosome hair restoration in St Albans. Non-surgical treatment for hair thinning and regrowth. Book a consultation.",
  keywords: [
    "PRP hair treatment St Albans",
    "Hair loss treatment St Albans",
    "Hair restoration Hertfordshire",
    "Exosome hair treatment",
    "Male pattern baldness St Albans",
    "Female hair thinning treatment",
  ],
  openGraph: {
    title: "PRP Hair Restoration Clinic in St Albans",
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
