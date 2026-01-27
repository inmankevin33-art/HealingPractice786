import type { Metadata } from "next";
import JointInjectionsClient from "@/components/pages/JointInjectionsClient";

export const metadata: Metadata = {
  // 1. Optimized Title: The layout will append "| St Albans Clinic" automatically
  title: "PRP & Steroid Joint Injections",
  
  description:
    "Doctor-led joint injections in St Albans. Specialist PRP therapy and Corticosteroid injections for arthritis, sports injuries, and joint pain. Serving Harpenden, Radlett & Watford.",
  
  alternates: {
    canonical: "https://www.healing-prp.co.uk/joint-injections",
  },

  // 2. Expanded Local & Condition-Specific Keywords
  keywords: [
    "Joint injections St Albans",
    "PRP knee injection Hertfordshire",
    "Private steroid injection St Albans",
    "Arthritis pain relief Harpenden",
    "Sports injury clinic Radlett",
    "Frozen shoulder injection Watford",
    "Tennis elbow treatment Hemel Hempstead",
    "Hip pain injections Berkhamsted",
    "Knee osteoarthritis treatment North London",
    "Private orthopedic doctor Hertfordshire",
    "Corticosteroid injection St Albans"
  ],
  
  openGraph: {
    title: "Joint Pain Relief Clinic | St Albans",
    description:
      "Doctor-led PRP and Steroid injections for arthritis and pain relief. Serving patients in St Albans, Harpenden, and across Hertfordshire.",
    url: "https://www.healing-prp.co.uk/joint-injections",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
  },
};

export default function JointInjectionsPage() {
  return <JointInjectionsClient locationName="St Albans" />;
}
