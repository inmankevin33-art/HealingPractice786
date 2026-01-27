import type { Metadata } from "next";
import React from "react";

/**
 * Layout for the Birmingham Hair Restoration section.
 * Uses a Metadata Template to ensure consistent local branding.
 */
export const metadata: Metadata = {
  title: {
    // Default title for the folder
    default: "PRP Hair Restoration & Regrowth",
    
    // Automatically appends location to child page titles
    // Result: "Treatment Plans | Birmingham Clinic"
    template: "%s | Birmingham Clinic",
  },
  description:
    "Specialist doctor-led hair restoration in Birmingham Edgbaston. Advanced PRP and Exosome therapy for hair loss, serving Solihull, Sutton Coldfield and the West Midlands.",
  alternates: {
    canonical: "https://www.healing-prp.co.uk/birmingham/hair-restoration",
  },
};

export default function BirminghamHairRestorationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="birmingham-hair-restoration-section">
      {/* This wrapper can be used for Birmingham-specific styling 
          or local medical quarter trust badges. */}
      {children}
    </div>
  );
}
