import React from "react";

/**
 * Layout for the Birmingham Joint Injections section.
 * This structural wrapper isolates joint treatment pages, 
 * allowing for location-specific targeting.
 */
export default function BirminghamJointInjectionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="birmingham-joint-injections-wrapper">
      {/* This layout can be used to wrap all joint injection content.
          It ensures the JointInjectionsClient renders within a clean,
          location-optimized container.
      */}
      {children}
    </section>
  );
}
