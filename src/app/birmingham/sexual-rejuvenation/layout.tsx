import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    // This is the broad category name
    default: "Sexual Rejuvenation & Wellness",
    
    // This template allows the individual pages to get specific
    // Result 1: "Erectile Dysfunction (P-Shot) | Birmingham Clinic"
    // Result 2: "Female Sexual Wellness (O-Shot) | Birmingham Clinic"
    template: "%s | Birmingham Clinic",
  },
  description:
    "Confidential, doctor-led sexual rejuvenation in Birmingham. Specialist P-Shot and O-Shot PRP treatments for ED and wellness in the Edgbaston Medical Quarter.",

  // ADDED CANONICAL:
  alternates: {
    canonical: "https://www.healing-prp.co.uk/birmingham/sexual-rejuvenation",
  },
};

export default function BirminghamSexualLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
