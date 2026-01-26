import React from "react";

/**
 * Layout for the Birmingham FAQ section.
 * Next.js inherits the root layout and wraps this specific 
 * structure around the Birmingham FAQ page.
 */
export default function BirminghamFaqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="birmingham-faq-container">
      {/* This wrapper ensures that any Birmingham-specific 
          styles or future sub-routes under /faq are 
          contained within a consistent layout.
      */}
      {children}
    </div>
  );
}
