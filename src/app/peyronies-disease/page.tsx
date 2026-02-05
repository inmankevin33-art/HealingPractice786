import type { Metadata } from "next";
import PeyroniesClient from "@/components/pages/PeyroniesClient";

export const metadata: Metadata = {
  title: "Peyronie's Disease Treatment Birmingham | Healing-PRP Clinics",
  description: "Expert non-surgical Peyronie's disease treatment in Birmingham (Edgbaston). Using PRP (P-Shot) and Shockwave Therapy to reduce curvature and pain.",
};

export default function Page() {
  return <PeyroniesClient />;
}
