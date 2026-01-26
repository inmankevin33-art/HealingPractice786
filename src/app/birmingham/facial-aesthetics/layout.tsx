import React from "react";

/**
 * Layout for the Birmingham Facial Aesthetics section.
 * This ensures a consistent container for all skin-related 
 * treatment pages under the Birmingham route.
 */
export default function BirminghamFacialAestheticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="birmingham-aesthetics-wrapper">
      {/* This layout acts as a wrapper for the page content.
          It allows Next.js to optimize the rendering of the 
          FacialAestheticsClient component.
      */}
      {children}
    </div>
  );
}
