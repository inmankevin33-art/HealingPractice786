import type { Metadata } from "next";
import React from "react";

/**
 * Layout for the Birmingham Pricing section.
 * Using a Metadata Template to ensure consistent Birmingham branding.
 */
export const metadata: Metadata = {
  title: {
    // Fallback if the page title is missing
    default: "Treatment Prices & Packages",
    
    // Automatically appends location to child page titles
    // Result: "PRP & Aesthetics Prices | Birmingham Clinic"
    template: "%s | Birmingham Clinic",
  },
  description: 
    "Transparent pricing for PRP Hair Restoration, Joint Injections, and Sexual Rejuvenation in Birmingham Edgbaston. View our latest treatment costs and packages.",
  alternates: {
    canonical: "https://www.healing-prp.co.uk/birmingham/prices",
  },
};

export default function BirminghamPricesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="birmingham-prices-wrapper">
      {/* This structural element isolates pricing styles for the Birmingham branch */}
      {children}
    </main>
  );
}
