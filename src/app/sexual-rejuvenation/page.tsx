import type { Metadata } from "next";
// FIX: Update the import to match your new filename
import SexualRejuvenationClient from "@/components/pages/SexualRejuvenationClient";

export const metadata: Metadata = {
  title: "Sexual Rejuvenation in St Albans | Healing-PRP Clinics",
  description:
    "Doctor-led P-Shot and O-Shot treatments in St Albans. Non-surgical solutions for erectile dysfunction and sexual wellness.",
};

export default function SexualRejuvenationPage() {
  return (
    // FIX: Update the component name here too
    <SexualRejuvenationClient locationName="St Albans" />
  );
}
