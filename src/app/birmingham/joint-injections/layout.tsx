import type { Metadata } from "next";
import React from "react";

/**
 * Layout for the Birmingham Joint Injections section.
 * Uses a Metadata Template to ensure consistent Birmingham branding.
 */
export const metadata: Metadata = {
  title: {
    // Fallback if the page title is missing
    default: "PRP & Steroid Joint Injections",
    
    // Automatically appends location to child page titles
    // Result: "Knee Pain Treatments | Birmingham Clinic"
    template: "%s | Birmingham Clinic",
  },
  description:
    "Doctor-led joint injections in Birmingham Edgbaston. Specialist PRP therapy and steroid injections for arthritis, sports injuries, and joint pain.",
  alternates: {
    canonical: "https://www.healing-prp.co.uk/birmingham/joint-injections",
  },
};

export default function BirminghamJointInjectionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="birmingham-joint-injections-container">
      {/* Structural wrapper for West Midlands joint treatments */}
      {children}
    </section>
  );
}
