import type { Metadata } from "next";
import SexualRejuvenationClient from "@/components/pages/SexualRejuvenationClient";

export const metadata: Metadata = {
  // Clean title targeting high-intent local keywords
  title: "P-Shot, O-Shot & Sexual Rejuvenation St Albans",
  
  description:
    "Doctor-led sexual rejuvenation in St Albans. Specialist P-Shot® (Erectile Dysfunction) & O-Shot® treatments using advanced PRP therapy. Confidential & non-surgical.",
  
  keywords: [
    "P-Shot St Albans",
    "O-Shot St Albans",
    "PRP for ED St Albans",
    "Erectile Dysfunction treatment Hertfordshire",
    "Sexual rejuvenation St Albans",
    "Vaginal rejuvenation Hertfordshire",
    "Priapus Shot St Albans",
  ],

  openGraph: {
    title: "P-Shot & Sexual Rejuvenation Clinic in St Albans",
    description:
      "Doctor-led PRP treatments for sexual wellness. Non-surgical solutions for ED and intimacy.",
    url: "https://www.healing-prp.co.uk/sexual-rejuvenation",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
  },
};

export default function SexualRejuvenationPage() {
  return (
    // We pass "St Albans" explicitly here
    <SexualRejuvenationClient locationName="St Albans" />
  );
}
