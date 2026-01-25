import type { Metadata } from "next";
import JointInjectionsClient from "@/components/pages/JointInjectionsClient";

export const metadata: Metadata = {
  title: "Joint Injections in Birmingham | Healing-PRP Clinics",
  description:
    "Doctor-led joint injection treatments in Birmingham. CQC-compliant clinic for arthritis and sports injuries.",
};

export default function BirminghamJointPage() {
  return (
    // We pass "Birmingham" to the component here
    <JointInjectionsClient locationName="Birmingham" />
  );
}
