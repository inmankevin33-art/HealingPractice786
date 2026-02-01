import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Contact & Appointments",
    template: "%s | Birmingham Clinic",
  },
  description:
    "Book your private consultation at our Edgbaston clinic. Specialist medical protocols for Erectile Dysfunction (ED), P-Shot, and Hair Restoration in Birmingham.",
  alternates: {
    canonical: "https://healing-prp.co.uk/birmingham/contact",
  },
};

export default function BirminghamContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="birmingham-contact-wrapper">
      {children}
    </div>
  );
}
