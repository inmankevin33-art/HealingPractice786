import type { Metadata } from "next";
import BirminghamHomeClient from "@/components/pages/BirminghamHomeClient";

export const metadata: Metadata = {
  title: "Healing-PRP Clinics Birmingham | Private Doctor-Led Clinic",
  description:
    "Leading private clinic in Birmingham for PRP Hair Restoration, Joint Injections & Sexual Rejuvenation. Doctor-led, CQC-compliant & non-surgical.",
  keywords: [
    "PRP Clinic Birmingham",
    "Private Doctor Birmingham",
    "Regenerative Medicine Birmingham",
    "Hair Loss Treatment Birmingham",
    "Joint Pain Clinic Birmingham",
    "P-Shot Birmingham",
  ],
  openGraph: {
    title: "Healing-PRP Clinics | Birmingham Location",
    description:
      "Doctor-led regenerative treatments in Birmingham. Hair, Skin, Joints & Sexual Health.",
    url: "https://www.healing-prp.co.uk/birmingham",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
  },
};

export default function BirminghamPage() {
  return <BirminghamHomeClient />;
}
