import type { Metadata } from "next";
import JointInjectionsClient from "@/components/pages/JointInjectionsClient";

export const metadata: Metadata = {
  // 1. Optimized Title: Clean and ready for the Layout Template
  // Final Result: "PRP & Steroid Joint Injections | Birmingham Clinic"
  title: "PRP & Steroid Joint Injections",
  
  description:
    "Doctor-led joint injections in Birmingham Edgbaston. Specialist PRP therapy and Corticosteroid injections for arthritis, sports injuries, and joint pain. Serving Solihull & West Midlands.",
  
  alternates: {
    canonical: "https://www.healing-prp.co.uk/birmingham/joint-injections",
  },

  // 2. Expanded Regional & Condition Keywords
  keywords: [
    "Joint injections Birmingham",
    "PRP knee injection West Midlands",
    "Private steroid injection Birmingham",
    "Arthritis pain relief Solihull",
    "Sports injury clinic Sutton Coldfield",
    "Frozen shoulder injection Halesowen",
    "Tennis elbow treatment Dudley",
    "Hip pain injections Stourbridge",
    "Knee osteoarthritis treatment Wolverhampton",
    "Private orthopedic doctor Edgbaston",
    "Corticosteroid injection Walsall",
    "PRP therapy Bromsgrove"
  ],
  
  openGraph: {
    title: "Joint Pain Relief Clinic | Birmingham",
    description:
      "Doctor-led PRP and Steroid injections for arthritis and sports injuries. Serving patients in Birmingham, Solihull, and across the West Midlands.",
    url: "https://www.healing-prp.co.uk/birmingham/joint-injections",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
  },
};

export default function BirminghamJointInjectionsPage() {
  return <JointInjectionsClient locationName="Birmingham" />;
}
