import { Metadata } from "next";

export const metadata: Metadata = {
  // Base title that pages can extend
  title: {
    default: "Contact Our Birmingham Clinic",
    template: "%s | Birmingham Clinic"
  },
  description: "Specialist medical clinic in Edgbaston, Birmingham. Contact us for private PRP treatments, Erectile Dysfunction (ED) protocols, and hair restoration.",
  alternates: {
    canonical: "https://yourdomain.com/birmingham/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}
