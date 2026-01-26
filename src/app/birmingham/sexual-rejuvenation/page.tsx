import type { Metadata } from "next";
import SexualRejuvenationClient from "@/components/pages/SexualRejuvenationClient";

export const metadata: Metadata = {
  // 1. Optimized Title: Result will be "P-Shot, O-Shot & ED Treatments | Birmingham Clinic"
  title: "P-Shot, O-Shot & ED Treatments",
  
  description:
    "Doctor-led sexual rejuvenation in Birmingham. Specialist P-Shot® (Erectile Dysfunction) & O-Shot® treatments using advanced PRP therapy. Serving Solihull, Sutton Coldfield & Wolverhampton.",
  
  alternates: {
    canonical: "https://www.healing-prp.co.uk/birmingham/sexual-rejuvenation",
  },

  // 2. Expanded Keywords with Clinical Terms & Local Areas
  keywords: [
    "P-Shot Birmingham",
    "O-Shot Birmingham",
    "PRP for ED Birmingham",
    "Erectile Dysfunction treatment West Midlands",
    "Sexual rejuvenation Solihull",
    "Vaginal rejuvenation Sutton Coldfield",
    "Priapus Shot Wolverhampton",
    "Shockwave therapy alternative Birmingham",
    "Male enhancement clinic Harborne",
    "P-Shot cost Stourbridge",
    "ED doctor Halesowen",
    "Confidential sexual wellness Dudley",
  ],

  openGraph: {
    title: "P-Shot & Sexual Rejuvenation Clinic | Birmingham",
    description:
      "Confidential, doctor-led PRP treatments for ED and sexual wellness. Serving patients in Birmingham, Solihull, and the West Midlands.",
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
