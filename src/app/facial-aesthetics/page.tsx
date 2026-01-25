import type { Metadata } from "next";
import FacialAestheticsClient from "@/components/pages/FacialAestheticsClient";

export const metadata: Metadata = {
  title: "Facial Aesthetics in St Albans | Healing-PRP Clinics",
  description:
    "Doctor-led facial aesthetics in St Albans. Treatments include Vampire Facials, Botox, Polynucleotides, and Skin Boosters.",
};

export default function FacialAestheticsPage() {
  return (
    // We pass "St Albans" explicitly here
    <FacialAestheticsClient locationName="St Albans" />
  );
}
