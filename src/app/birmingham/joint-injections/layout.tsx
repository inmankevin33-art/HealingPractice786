import React from "react";

/**
 * Layout for the Birmingham Joint Injections section.
 * This structural wrapper isolates joint treatment pages.
 * It inherits the " | Birmingham Clinic" title template from the parent.
 */
export default function BirminghamJointInjectionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="birmingham-joint-injections-container">
      {/* This wrapper allows for section-specific styling 
          or local Edgbaston medical quarter badges 
          without affecting the Aesthetics or Hair pages.
      */}
      {children}
    </section>
  );
}
