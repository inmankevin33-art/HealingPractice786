import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    // Fallback title
    default: "Facial Aesthetics & Skin Rejuvenation",
    // This automatically appends the location to every sub-page title
    template: "%s | St Albans Clinic",
  },
  description:
    "Professional facial aesthetics treatments in St Albans including polynucleotides and HA skin boosters. Safe, natural, and effective treatments by a GMC-registered doctor.",
  alternates: {
    // Ensure this points to the St Albans specific treatment path
    canonical: "https://www.healing-prp.co.uk/treatments/facial-aesthetics",
  },
};

export default function FacialAestheticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="stalbans-aesthetics-wrapper">
      {children}
    </div>
  );
}
