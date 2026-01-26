import React from "react";

/**
 * Layout for the Birmingham Hair Restoration section.
 * Next.js automatically inherits the root layout and applies this
 * specific wrapper to all pages within the /birmingham/hair-restoration folder.
 */
export default function BirminghamHairRestorationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="birmingham-hair-restoration-section">
      {/* If you want a Birmingham-specific banner or "Book at Edgbaston" 
          sticky button for all hair pages, you would add it here.
      */}
      {children}
    </div>
  );
}
