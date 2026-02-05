import type { Metadata } from "next";
import PrematureEjaculationClient from "@/components/pages/PrematureEjaculationClient";

export const metadata: Metadata = {
  // Layout adds " | St Albans Clinic"
  title: "Premature Ejaculation (PE) Treatment & Solutions",
  
  description:
    "Specialist Premature Ejaculation (PE) treatment in St Albans. Customised plans including behavioural coaching and medical options. Doctor-led, confidential care.",

  alternates: {
    canonical: "https://www.healing-prp.co.uk/premature-ejaculation",
  },

  keywords: [
    "Premature ejaculation treatment St Albans",
    "Stop PE Hertfordshire",
    "Premature ejaculation doctor Watford",
    "PE help Harpenden",
    "Ejaculation control clinic Welwyn Garden City",
    "Private PE specialist London",
    "Last longer in bed medical help",
    "PE medication Hertfordshire",
    "Male sexual health clinic St Albans"
  ],

  openGraph: {
    title: "Premature Ejaculation Treatment | St Albans & Hertfordshire",
    description:
      "Expert medical and behavioural treatment for Premature Ejaculation (PE). Confidential, doctor-led care in St Albans.",
    url: "https://www.healing-prp.co.uk/premature-ejaculation",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
  },
};

export default function Page() {
  return <PrematureEjaculationClient />;
}
