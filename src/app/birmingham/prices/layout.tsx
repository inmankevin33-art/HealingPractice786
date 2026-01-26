import React from "react";

/**
 * Layout for the Birmingham Pricing section.
 * This wrapper ensures the pricing table renders within a consistent
 * container without interfering with the page-level SEO metadata.
 */
export default function BirminghamPricesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="birmingham-prices-wrapper">
      {/* This structural element can be used for CSS scoping 
          if the Birmingham price list requires specific styling 
          different from the St Albans branch.
      */}
      {children}
    </main>
  );
}
