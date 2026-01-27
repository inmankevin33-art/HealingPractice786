import type { Metadata } from "next";
import SexualRejuvenationClient from "@/components/pages/SexualRejuvenationClient";

export const metadata: Metadata = {
  // 1. Short Clean Title: Template will add "| Birmingham Clinic"
  title: "Erectile Dysfunction & P-Shot",
  
  description:
    "Confidential, doctor-led Erectile Dysfunction (ED) treatments in Birmingham Edgbaston. Specialist P-Shot® and O-Shot® PRP therapy for patients in Solihull, Sutton Coldfield, and the West Midlands.",
  
  alternates: {
    canonical: "https://www.healing-prp.co.uk/birmingham/sexual-rejuvenation",
  },

  // 2. High-Density ED & Local West Midlands Keywords
  keywords: [
    "Erectile Dysfunction treatment Birmingham",
    "ED clinic Birmingham",
    "P-Shot Birmingham",
    "O-Shot West Midlands",
    "Private ED doctor Edgbaston",
    "Help for erectile dysfunction Solihull",
    "PRP for ED Birmingham",
    "Priapus Shot Sutton Coldfield",
    "Male enhancement clinic Harborne",
    "Sexual wellness clinic Wolverhampton",
    "ED specialist Halesowen",
    "Confidential ED help Dudley",
    "Shockwave therapy alternative West Midlands",
    "P-Shot cost Stourbridge",
    "Vaginal rejuvenation Birmingham"
  ],

  openGraph: {
    title: "Erectile Dysfunction & P-Shot Clinic | Birmingham",
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
