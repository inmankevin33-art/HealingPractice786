import type { Metadata } from "next";
import PersonalisedEDMedicationClient from "@/components/pages/PersonalisedEDMedicationClient";

export const metadata: Metadata = {
  title: {
    absolute: "Personalised ED Medication Birmingham | Healing-PRP",
  },
  description:
    "Doctor-led personalised erectile dysfunction medication in Birmingham. Bespoke ED prescriptions and private, tailored treatments serving Edgbaston and the West Midlands.",
  alternates: {
    canonical: "https://www.healing-prp.co.uk/birmingham/personalised-ed-medication",
  },
  keywords: [
    // High-Priority Local Terms
    "Personalised ED medication Birmingham",
    "Bespoke erectile dysfunction treatment West Midlands",
    "Private ED prescription Edgbaston",
    "Custom ED pills Solihull",
    "Men's health doctor Birmingham",
    "Erectile dysfunction clinic Sutton Coldfield",
    
    // Clinical / Intent Terms
    "Alternative to Viagra Birmingham",
    "Private doctor for erectile dysfunction West Midlands",
    "Custom compounded ED medication Birmingham",
    "Tailored ED dosage treatment"
  ],
  openGraph: {
    title: "Personalised ED Medication | Birmingham & West Midlands",
    description:
      "Advanced, doctor-led formulation for men. Bespoke ED prescriptions tailored to your profile. Serving Birmingham, Edgbaston, and the West Midlands.",
    url: "https://www.healing-prp.co.uk/birmingham/personalised-ed-medication",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
  },
};

export default function Page() {
  return (
    <PersonalisedEDMedicationClient 
      locationName="Birmingham"
      servingAreas="Edgbaston • Solihull • Sutton Coldfield • West Midlands"
    />
  );
}
