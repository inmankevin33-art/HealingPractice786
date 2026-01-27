import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    // Fallback if the page title is missing
    default: "Treatment Prices & Packages",
    
    // This appends the location branding to the page title
    // Result: "PRP & Aesthetics Pricing | St Albans Clinic"
    template: "%s | St Albans Clinic",
  },
  description: 
    "Transparent pricing for PRP Hair Restoration, Joint Injections, and Sexual Rejuvenation in St Albans. View our treatment packages and clinic costs.",
  alternates: {
    canonical: "https://www.healing-prp.co.uk/prices",
  },
};

export default function StAlbansPricesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="stalbans-prices-wrapper">
      {/* Structural wrapper for pricing content */}
      {children}
    </div>
  );
}
