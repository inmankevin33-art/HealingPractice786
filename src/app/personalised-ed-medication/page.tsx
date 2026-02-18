import type { Metadata } from "next";
import PersonalisedEDMedicationClient from "@/components/pages/PersonalisedEDMedicationClient";

export const metadata: Metadata = {
  title: {
    absolute: "Personalised ED Medication St Albans | Healing-PRP",
  },
  description:
    "Doctor-led personalised erectile dysfunction medication clinic in St Albans. Bespoke ED prescriptions and tailored treatments for men who need more than standard tablets.",
  alternates: {
    canonical: "https://www.healing-prp.co.uk/personalised-ed-medication",
  },
  keywords: [
    // High-Priority Local Terms
    "Personalised ED medication St Albans",
    "Bespoke erectile dysfunction treatment Hertfordshire",
    "Private ED prescription Harpenden",
    "Custom ED pills Watford",
    "Men's health doctor St Albans",
    
    // Clinical / Intent Terms
    "Alternative to Viagra St Albans",
    "Custom compounded ED medication UK",
    "ED treatment side effects clinic",
    "Private doctor for erectile dysfunction Herts",
    "Tailored ED dosage treatment"
  ],
  openGraph: {
    title: "Personalised ED Medication | St Albans & Hertfordshire",
    description:
      "Advanced, doctor-led formulation for men. Bespoke ED prescriptions tailored to your profile. Serving St Albans, Harpenden, and Hertfordshire.",
    url: "https://www.healing-prp.co.uk/personalised-ed-medication",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
  },
};

export default function Page() {
  return (
    <PersonalisedEDMedicationClient 
      locationName="St Albans"
      servingAreas="St Albans • Harpenden • Watford • Hertfordshire"
    />
  );
}
