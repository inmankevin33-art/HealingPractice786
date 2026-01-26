import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    // Fallback title if the page title fails to load
    default: "PRP & Regenerative Treatment FAQs",
    
    // This appends the location branding to the page title
    // Result: "Treatment & Clinic FAQs | St Albans Clinic"
    template: "%s | St Albans Clinic",
  },
  description: "Expert answers on PRP Hair Restoration, Joint Injections, and Sexual Rejuvenation in St Albans. Detailed information on recovery, safety, and clinic location.",
  alternates: {
    canonical: "https://www.healing-prp.co.uk/faq",
  },
};

export default function FaqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="faq-section-wrapper">
      {/* This layout isolates the FAQ section, allowing for specific 
          schema or styling if needed later. 
      */}
      {children}
    </div>
  );
}
