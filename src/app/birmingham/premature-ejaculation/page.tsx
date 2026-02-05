import type { Metadata } from "next";
import PrematureEjaculationClient from "@/components/pages/PrematureEjaculationClient";

export const metadata: Metadata = {
  // Layout adds " | Birmingham Clinic"
  title: "Premature Ejaculation (PE) Treatment",

  description:
    "Private Premature Ejaculation (PE) treatment in Birmingham (Edgbaston). Expert doctor-led care offering medication and behavioural strategies for better control.",

  alternates: {
    canonical: "https://www.healing-prp.co.uk/birmingham/premature-ejaculation",
  },

  keywords: [
    "Premature ejaculation treatment Birmingham",
    "PE clinic Edgbaston",
    "Stop premature ejaculation West Midlands",
    "Male sexual health Birmingham",
    "PE doctor Solihull",
    "Private PE treatment Sutton Coldfield",
    "Ejaculation control help Birmingham"
  ],

  openGraph: {
    title: "Premature Ejaculation Treatment | Birmingham (Edgbaston)",
    description:
      "Confidential medical treatment for Premature Ejaculation in Birmingham. Doctor-led clinic offering proven solutions.",
    url: "https://www.healing-prp.co.uk/birmingham/premature-ejaculation",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
  },
};

export default function Page() {
  return <PrematureEjaculationClient />;
}
