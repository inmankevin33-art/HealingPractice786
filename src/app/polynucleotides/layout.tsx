import { ReactNode } from "react";

export default function PolynucleotidesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="polynucleotides-layout-wrapper">
      {/* Any shared UI for this specific route could go here. 
        Otherwise, it just seamlessly renders your PolynucleotidesPage! 
      */}
      {children}
    </div>
  );
}
