import type { Metadata } from "next";
import React from "react";

/**
 * Layout for the Birmingham Facial Aesthetics section.
 * Uses a Metadata Template to ensure consistent branding.
 */
export const metadata: Metadata = {
  title: {
    // Fallback if the page title isn't defined
    default: "Facial Aesthetics & PRP Skin Boosters",
    
    // Automatically appends location to child page titles
    // Result: "Polynucleotides | Birmingham Clinic"
    template: "%s | Birmingham Clinic",
  },
  description:
    "Doctor-led facial aesthetics in Birmingham. Specialist treatments including Polynucleotides, Vampire Facials, and HA Skin Boosters in Edgbaston.",
  alternates: {
    canonical: "https://www.healing-prp.co.uk/birmingham/facial-aesthetics",
  },
};

export default function BirminghamFacialAestheticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="birmingham-aesthetics-wrapper">
      {/* This wrapper isolates Birmingham-specific aesthetic styles 
          or local Edgbaston medical quarter badges. */}
      {children}
    </div>
  );
}
