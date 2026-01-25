import type { Metadata } from "next";
import SexualRejuvenationClient from "@/components/pages/SexualRejuvenationClient";

export const metadata: Metadata = {
  title: "Sexual Rejuvenation in Birmingham | Healing-PRP Clinics",
  description:
    "Doctor-led P-Shot and O-Shot treatments in Birmingham. Non-surgical solutions for erectile dysfunction and sexual wellness.",
};

export default function BirminghamSexualRejuvenationPage() {
  return (
    // We pass "Birmingham" explicitly here
    <SexualRejuvenationClient locationName="Birmingham" />
  );
}
