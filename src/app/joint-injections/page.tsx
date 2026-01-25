import type { Metadata } from "next";
import JointInjectionsClient from "@/components/pages/JointInjectionsClient";

export const metadata: Metadata = {
  title: "Joint Injections in St Albans | Healing-PRP Clinics",
  description:
    "Doctor-led joint injection treatments (PRP, Steroid, Hyaluronic Acid) in St Albans, Hertfordshire. CQC-compliant clinic.",
};

export default function JointInjectionsPage() {
  return (
    // We pass "St Albans" here explicitly, or let it default
    <JointInjectionsClient locationName="St Albans" />
  );
}
