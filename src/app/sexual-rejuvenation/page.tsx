import type { Metadata } from "next";
import SexualHealthClient from "@/components/pages/SexualHealthClient";

export const metadata: Metadata = {
  title: "Sexual Rejuvenation & Natural Regeneration Treatments in St Albans | Healing-PRP Clinics",
  description:
    "Patient-centred, non-surgical solutions to support confidence, sensitivity and intimacy — delivered by a fully insured, GMC-registered doctor.",
};

export default function SexualRejuvenationPage() {
  return (
    // We pass "St Albans" explicitly here
    <SexualHealthClient locationName="St Albans" />
  );
}
