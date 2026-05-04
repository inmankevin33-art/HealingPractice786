import ThankYouClient from "@/components/pages/ThankYouClient"; // Added /pages/

export const metadata = {
  title: "Request Received | Healing PRP Clinic St Albans",
  robots: { index: false, follow: false },
};

export default function StAlbansThankYouPage() {
  return (
    < ThankYouClient 
      locationName="St Albans"
      links={{
        pricing: "/prices",
        edOverview: "/erectile-dysfunction",
        pShot: "/p-shot",
        shockwave: "/shockwave-therapy-erectile-dysfunction"
      }}
    />
  );
}
