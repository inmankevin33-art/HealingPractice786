import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Contact & Appointments",
    template: "%s | St Albans Clinic",
  },
  description:
    "Contact our St Albans clinic for private PRP treatments. Specialist care for Erectile Dysfunction (ED) and Hair Loss serving St Albans, Luton, and Hertfordshire.",
  alternates: {
    canonical: "https://healing-prp.co.uk/contact",
  },
};

export default function StAlbansContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="stalbans-contact-wrapper">
      {children}
    </div>
  );
}
