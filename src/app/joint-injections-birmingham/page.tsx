import type { Metadata } from "next";
import JointInjectionsClient from "@/components/pages/JointInjectionsClient";

export const metadata: Metadata = {
  title: "Private Joint Injections in Birmingham | Healing-PRP Clinics",
  description:
    "GP-led PRP and steroid joint injections in Birmingham for arthritis, joint pain and sports injuries. Doctor-led assessment, clear pricing and CQC-compliant care.",
};

export default function Page() {
  return <JointInjectionsClient locationName="Birmingham" />;
}
