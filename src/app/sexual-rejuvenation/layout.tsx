import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    // Fallback title
    default: "Sexual Rejuvenation & PRP Wellness",
    
    // Automatically appends the location branding
    // Result: "P-Shot & O-Shot Treatments | St Albans Clinic"
    template: "%s | St Albans Clinic",
  },
  description:
    "Confidential sexual rejuvenation treatments with PRP (P-Shot & O-Shot) by a GMC-registered doctor in St Albans. Serving Harpenden, Radlett, and Hertfordshire.",
  alternates: {
    // Canonical points to the top-level St Albans path
    canonical: "https://www.healing-prp.co.uk/sexual-rejuvenation",
  },
};

export default function SexualRejuvenationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="stalbans-sexual-wellness-wrapper">
      {/* Structural wrapper for St Albans sexual wellness pages */}
      {children}
    </div>
  );
}
