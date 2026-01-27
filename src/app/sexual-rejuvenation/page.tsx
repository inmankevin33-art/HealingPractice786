import type { Metadata } from "next";
import SexualRejuvenationClient from "@/components/pages/SexualRejuvenationClient";

export const metadata: Metadata = {
  // 1. Optimized Title: The layout template will add " | St Albans Clinic"
  title: "P-Shot, O-Shot & ED Treatments",
  
  description:
    "Doctor-led sexual rejuvenation in St Albans. Specialist P-Shot® (Erectile Dysfunction) & O-Shot® treatments using advanced PRP therapy. Confidential & non-surgical care serving Hertfordshire.",
  
  alternates: {
    canonical: "https://www.healing-prp.co.uk/sexual-rejuvenation",
  },

  // 2. Expanded Local & Clinical Keywords
 keywords: [
    // Core Clinical Terms
    "P-Shot St Albans",
    "O-Shot St Albans",
    "PRP for ED Hertfordshire",
    "Erectile Dysfunction treatment Watford",
    "ED clinic Hemel Hempstead",
    "Erectile dysfunction help Harpenden",
    "P-Shot doctor Radlett",
    "ED specialist Welwyn Garden City",
    "Erectile dysfunction clinic Berkhamsted",
    "PRP for ED Borehamwood",
    "Sexual wellness clinic Hatfield",
    "Private ED treatment North London",
    "Shockwave therapy alternative St Albans",
    "P-Shot cost Hertfordshire",
    "Confidential ED clinic Potters Bar",
    "GMC registered ED doctor Bushey",
    
    // Luton Additions (Bedfordshire Reach)
    "Erectile Dysfunction treatment Luton",
    "P-Shot clinic Luton",
    "Private ED doctor Bedfordshire"
  ],
  
  openGraph: {
    title: "P-Shot & Sexual Rejuvenation Clinic | St Albans",
    description:
      "Doctor-led PRP treatments for sexual wellness and ED. Confidential, non-surgical solutions in St Albans.",
    url: "https://www.healing-prp.co.uk/sexual-rejuvenation",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
  },
};

export default function SexualRejuvenationPage() {
  return (
    <SexualRejuvenationClient locationName="St Albans" />
  );
}
