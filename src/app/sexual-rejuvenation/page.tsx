import type { Metadata } from "next";
// FIX: Update the import to match your new filename
import SexualRejuvenationClient from "@/components/pages/SexualRejuvenationClient";

export const metadata: Metadata = {
  title: "Sexual Rejuvenation in St Albans | Healing-PRP Clinics",
  description:
    "Patient-centred, non-surgical solutions to support confidence, sensitivity and intimacy — delivered by a fully insured, GMC-registered doctor in St Albans.",
};

export default function SexualRejuvenationPage() {
  return (
    // FIX: Update the component name here too
    <SexualRejuvenationClient locationName="St Albans" />
  );
}
