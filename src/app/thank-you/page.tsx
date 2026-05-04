import ThankYouClient from "@/components/ThankYouClient";

export const metadata = {
  title: "Request Received | Healing PRP Clinic St Albans",
  robots: {
    index: false,
    follow: false, // Prevents Google from ranking the thank you page
  },
};

export default function StAlbansThankYouPage() {
  return (
    <ThankYouClient 
      locationName="St Albans"
      links={{
        pricing: "/pricing",
        edOverview: "/treatments/erectile-dysfunction",
        pShot: "/treatments/p-shot",
        shockwave: "/treatments/shockwave"
      }}
    />
  );
}
