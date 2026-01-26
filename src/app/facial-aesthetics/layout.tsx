import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Facial Aesthetics & Skin Treatments - Healing-PRP Clinics | St Albans",
  description:
    "Professional facial aesthetics treatments in St Albans including polynucleotides and HA skin boosters. Safe, natural, and effective treatments by a GMC-registered doctor to restore youthful skin and reduce fine lines.",
  // ADDED CANONICAL TAG HERE
  alternates: {
    canonical: "https://healing-prp.co.uk/treatments/facial-aesthetics",
  },
};

export default function FacialAestheticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
