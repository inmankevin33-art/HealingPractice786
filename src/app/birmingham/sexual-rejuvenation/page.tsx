import type { Metadata } from "next";
import SexualRejuvenationClient from "@/components/pages/SexualRejuvenationClient";

export const metadata: Metadata = {
  // 1. TITLE: Includes primary keywords (P-Shot, O-Shot) + Location
  title: "P-Shot, O-Shot & Sexual Rejuvenation Birmingham | Healing-PRP",
  
  // 2. DESCRIPTION: Action-oriented, mentions "Doctor-led" (trust factor) and specific conditions
  description:
    "Doctor-led sexual rejuvenation in Birmingham. Specialist P-Shot® (Erectile Dysfunction) & O-Shot® treatments using advanced PRP therapy. Confidential & non-surgical.",
  
  // 3. KEYWORDS: Helps with secondary search engines and semantic relevance
  keywords: [
    "P-Shot Birmingham",
    "O-Shot Birmingham",
    "PRP for ED Birmingham",
    "Erectile Dysfunction treatment Birmingham",
    "Sexual rejuvenation Birmingham",
    "Vaginal rejuvenation Birmingham",
    "Priapus Shot Birmingham",
  ],

  // 4. OPEN GRAPH: Controls how the link looks when shared on Facebook/WhatsApp/LinkedIn
  openGraph: {
    title: "P-Shot & Sexual Rejuvenation Clinic in Birmingham",
    description:
      "Doctor-led PRP treatments for sexual wellness. Non-surgical solutions for ED and intimacy.",
    url: "https://www.healing-prp.co.uk/birmingham/sexual-rejuvenation", // Ensure this matches your actual domain
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
  },
};

export default function BirminghamSexualRejuvenationPage() {
  return (
    // We pass "Birmingham" explicitly here
    <SexualRejuvenationClient locationName="Birmingham" />
  );
}
