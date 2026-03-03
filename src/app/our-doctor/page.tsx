import { Metadata } from "next";
import OurDoctorClient from "@/components/pages/OurDoctorClient"; 

export const metadata: Metadata = {
  // ... (keep the metadata I sent earlier)
};

export default function OurDoctorPage() {
  return <OurDoctorClient />;
}
