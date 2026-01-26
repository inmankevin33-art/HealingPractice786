import type { Metadata } from "next";
import JointInjectionsClient from "@/components/pages/JointInjectionsClient";

export const metadata: Metadata = {
  // 1. Optimized Title: Result will be "PRP & Steroid Joint Injections | Birmingham Clinic"
  title: "PRP & Steroid Joint Injections",
  
  description:
    "Doctor-led joint injections in Birmingham. Specialist PRP therapy and Corticosteroid injections for arthritis, sports injuries, and joint pain.",
  
  alternates: {
    canonical: "https://www.healing-prp.co.uk/birmingham/joint-injections",
  },
  
  keywords: [
    "Joint injections Birmingham",
    "PRP knee injection Birmingham",
    "Private steroid injection Birmingham",
    "Arthritis pain relief Birmingham",
    "Sports injury clinic Birmingham",
    "Frozen shoulder injection Birmingham",
  ],
  
  openGraph: {
    title: "Joint Pain Relief Clinic | Birmingham",
    description:
      "Doctor-led PRP and Steroid injections for arthritis and pain relief. Book a consultation in Birmingham.",
    url: "https://www.healing-prp.co.uk/birmingham/joint-injections",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
  },
};

export default function BirminghamJointInjectionsPage() {
  return <JointInjectionsClient locationName="Birmingham" />;
}
