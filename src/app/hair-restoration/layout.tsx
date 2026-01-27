import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: {
    // Fallback if the page title is missing
    default: "PRP Hair Restoration & Regrowth",
    
    // This appends the location branding to the page title
    // Result: "PRP Hair Loss & Regrowth | St Albans Clinic"
    template: "%s | St Albans Clinic",
  },
  description: "Doctor-led hair restoration in St Albans using PRP and Exosome therapy. Advanced non-surgical treatments for hair thinning and regrowth.",
  alternates: {
    canonical: "https://www.healing-prp.co.uk/hair-restoration",
  },
};

export default function HairRestorationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="hair-restoration-wrapper">
      {/* This wrapper is perfect for hair-specific CSS or 
          adding a "Results Gallery" link that shows on all hair pages.
      */}
      {children}
    </div>
  );
}
