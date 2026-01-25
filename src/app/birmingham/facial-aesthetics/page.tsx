import type { Metadata } from "next";
import FacialAestheticsClient from "@/components/pages/FacialAestheticsClient";

export const metadata: Metadata = {
  title: "Facial Aesthetics in Birmingham | Healing-PRP Clinics",
  description:
    "Doctor-led facial aesthetics in Birmingham. Treatments include Vampire Facials, Botox, Polynucleotides, and Skin Boosters.",
};

export default function BirminghamFacialPage() {
  return (
    // We pass "Birmingham" explicitly here
    <FacialAestheticsClient locationName="Birmingham" />
  );
}
