import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    // This is the fallback if a sub-page is missing a title
    default: "Healing-PRP Clinics | Birmingham",
    
    // This automatically formats sub-pages. 
    // e.g. "P-Shot" becomes "P-Shot | Birmingham Clinic"
    template: "%s | Birmingham Clinic",
  },
  description: "Doctor-led regenerative medicine clinic in Birmingham. Specialist treatments for Hair, Joints & Sexual Wellness in the West Midlands.",
  
  // Base metadata for all Birmingham pages
  alternates: {
    canonical: "https://www.healing-prp.co.uk/birmingham",
  },
  
  openGraph: {
    title: "Healing-PRP Clinics | Birmingham",
    description: "Expert PRP & Regenerative treatments in Edgbaston & Birmingham. Specialist care for Hair, Skin & Joints.",
    url: "https://www.healing-prp.co.uk/birmingham",
    siteName: "Healing-PRP Clinics Birmingham",
    images: [
      {
        url: "/images/og-birmingham.jpg", // Suggested: A specific Birmingham clinic photo
        width: 1200,
        height: 630,
        alt: "Healing-PRP Birmingham Clinic",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
};

export default function BirminghamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="birmingham-region-wrapper">
      {/* This layout ensures all pages in /birmingham/ inherit 
          the location-specific metadata template.
      */}
      {children}
    </div>
  );
}
