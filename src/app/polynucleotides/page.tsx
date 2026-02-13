import type { Metadata } from "next";
import PolynucleotidesClient from "@/components/pages/PolynucleotidesClient";

export const metadata: Metadata = {
  title: {
    absolute: "Polynucleotides St Albans | DNA Glow Skin Treatment | Healing-PRP",
  },
  description:
    "Official Polynucleotide skin treatment in St Albans. Regenerative 'DNA Glow' therapy for dark circles, fine lines & skin quality. GMC-registered doctor.",
  keywords: [
    "Polynucleotides St Albans",
    "DNA Glow treatment Hertfordshire",
    "Ameela eyes St Albans",
    "Nucleofill treatment Luton",
    "PhilArt eyes Hertfordshire",
    "Salmon DNA facial",
    "Under eye rejuvenation St Albans",
    "Skin boosters Hertfordshire",
  ],
  alternates: {
    canonical: "https://www.healing-prp.co.uk/polynucleotides",
  },
};

export default function PolynucleotidesPage() {
  return (
    <PolynucleotidesClient 
      locationName="St Albans"
      servingAreas="Harpenden • Luton • Watford • Hertfordshire"
    />
  );
}
