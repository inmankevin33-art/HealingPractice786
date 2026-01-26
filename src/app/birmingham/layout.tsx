import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    // 1. The Default Title (if a page doesn't have one)
    default: "Healing-PRP Clinics | Birmingham",
    
    // 2. The Template (Automatically adds this suffix to sub-pages)
    // Example: If a page is named "Hair Restoration", it becomes:
    // "Hair Restoration | Birmingham Clinic"
    template: "%s | Birmingham Clinic",
  },
  description: "Doctor-led regenerative medicine clinic in Birmingham. Specialist treatments for Hair, Joints & Sexual Wellness in the West Midlands.",
  openGraph: {
    title: "Healing-PRP Clinics | Birmingham",
    description: "Expert PRP & Regenerative treatments in Edgbaston & Birmingham.",
    url: "https://www.healing-prp.co.uk/birmingham",
    siteName: "Healing-PRP Clinics Birmingham",
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
    <>
      {/* Since the RootLayout (src/app/layout.tsx) already has the Header and Body tags,
         we simply render the children here. 
         
         This file acts purely as an SEO Container for the Birmingham section.
      */}
      {children}
    </>
  );
}
