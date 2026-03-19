import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | St Albans Clinic",
    // Added "Doctor-Led" to establish immediate clinical trust
    default: "Doctor-Led Shockwave Therapy for ED | St Albans Clinic",
  },
  // Fallback description utilizing compliant, evidence-based terminology
  description: 
    "Specialist, doctor-led Low-Intensity Shockwave Therapy (Li-ESWT) for Erectile Dysfunction and Peyronie's disease in St Albans. Non-surgical, evidence-based care.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
