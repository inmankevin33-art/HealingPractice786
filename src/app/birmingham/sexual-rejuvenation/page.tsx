import type { Metadata } from "next";
import SexualRejuvenationClient from "@/components/pages/SexualRejuvenationClient";

export const metadata: Metadata = {
  title: "P-Shot, O-Shot & Sexual Rejuvenation Birmingham",
  
  description:
    "Doctor-led sexual rejuvenation in Birmingham. Specialist P-Shot® (Erectile Dysfunction) & O-Shot® treatments using advanced PRP therapy. Confidential & non-surgical.",
  
  // ADDED CANONICAL TAG HERE
  alternates: {
    canonical: "https://www.healing-prp.co.uk/birmingham/sexual-rejuvenation",
  },

  keywords: [
    "P-Shot Birmingham",
    "O-Shot Birmingham",
    "PRP for ED Birmingham",
    "Erectile Dysfunction treatment Birmingham",
    "Sexual rejuvenation Birmingham",
    "Vaginal rejuvenation Birmingham",
    "Priapus Shot Birmingham",
  ],

  openGraph: {
    title: "P-Shot & Sexual Rejuvenation Clinic in Birmingham",
    description:
      "Doctor-led PRP treatments for sexual wellness. Non-surgical solutions for ED and intimacy.",
    url: "https://www.healing-prp.co.uk/birmingham/sexual-rejuvenation",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
  },
};

export default function BirminghamSexualRejuvenationPage() {
  return (
    <SexualRejuvenationClient locationName="Birmingham" />
  );
}
