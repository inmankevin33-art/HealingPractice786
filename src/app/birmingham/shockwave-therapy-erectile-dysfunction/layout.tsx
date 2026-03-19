import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Birmingham Clinic",
    // Added "Doctor-Led" to establish immediate clinical trust
    default: "Doctor-Led Shockwave Therapy for ED | Birmingham Clinic",
  },
  // Fallback description utilizing compliant, evidence-based terminology
  description: 
    "Specialist, doctor-led Low-Intensity Shockwave Therapy (Li-ESWT) for Erectile Dysfunction and Peyronie's disease in Birmingham. Non-surgical, evidence-based care.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
