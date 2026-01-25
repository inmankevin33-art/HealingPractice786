import type { Metadata } from "next";
import JointInjectionsClient from "@/components/pages/JointInjectionsClient";

export const metadata: Metadata = {
  // Targeting high-value keywords for your specific treatments
  title: "Private PRP & Steroid Joint Injections St Albans",
  description:
    "Doctor-led joint injections in St Albans. Specialist PRP therapy and Corticosteroid injections for arthritis, sports injuries, and joint pain.",
  keywords: [
    "Joint injections St Albans",
    "PRP knee injection Hertfordshire",
    "Private steroid injection St Albans",
    "Arthritis pain relief St Albans",
    "Sports injury clinic Hertfordshire",
    "Frozen shoulder injection St Albans",
  ],
  openGraph: {
    title: "Joint Pain Relief Clinic | St Albans",
    description:
      "Doctor-led PRP and Steroid injections for arthritis and pain relief. Book a consultation in St Albans.",
    url: "https://www.healing-prp.co.uk/joint-injections",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
  },
};

export default function JointInjectionsPage() {
  return <JointInjectionsClient locationName="St Albans" />;
}
