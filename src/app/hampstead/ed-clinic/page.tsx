import ErectileDysfunctionInstaClient from "@/components/pages/ErectileDysfunctionInstaClient";

export const metadata = {
  title: "Private ED Clinic Hampstead | Doctor-Led Treatment",
  description: "Doctor-led erectile dysfunction assessments and advanced treatments including Shockwave Therapy in Hampstead, London.",
};

export default function EDClinicHampsteadPage() {
  return (
    <ErectileDysfunctionInstaClient 
      locationName="Hampstead"
      servingAreas="Hampstead • Belsize Park • Highgate • North West London"
    />
  );
}
