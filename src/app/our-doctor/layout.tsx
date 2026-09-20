import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    template: "%s | Healing-PRP Clinics",
    default: "Dr Syed Abdi | GP & Medical Director | Healing-PRP Clinics",
  },
  description:
    "Meet Dr Syed Abdi, GMC-registered GP and Medical Director of Healing-PRP Clinics, with experience in urgent care, orthopaedics, regenerative medicine and intimate health.",
};

export default function OurDoctorLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
