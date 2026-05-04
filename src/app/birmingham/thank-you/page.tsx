import ThankYouClient from "@/components/pages/ThankYouClient"; // Added /pages/

export const metadata = {
  title: "Request Received | Healing PRP Clinic Birmingham",
  robots: { index: false, follow: false },
};

export default function BirminghamThankYouPage() {
  return (
    <ThankYouClient 
      locationName="Birmingham"
      links={{
        pricing: "/birmingham/prices",
        edOverview: "/birmingham/erectile-dysfunction",
        pShot: "/birmingham/p-shot",
        shockwave: "/birmingham/shockwave-therapy-erectile-dysfunction"
      }}
    />
  );
}
