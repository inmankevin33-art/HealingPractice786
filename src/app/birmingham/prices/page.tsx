import type { Metadata } from "next";

// Re-export the UI component from your main prices page so you don't have to duplicate code
export { default } from "@/app/prices/page";

// Define the unique metadata for the Birmingham location
export const metadata: Metadata = {
  title: "Treatment Prices in Birmingham | Healing-PRP Clinics",
  description:
    "Transparent pricing for doctor-led regenerative and aesthetic treatments in Birmingham.",
};
