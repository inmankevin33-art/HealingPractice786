import React from "react";

/**
 * Layout for the Hair Restoration section.
 * Next.js will automatically merge the metadata from the page.tsx file
 * into this layout when the route is loaded.
 */
export default function HairRestorationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="hair-restoration-wrapper">
      {/* You can add section-specific navigation or banners here 
          if you ever want them to persist across all hair pages.
      */}
      {children}
    </div>
  );
}
