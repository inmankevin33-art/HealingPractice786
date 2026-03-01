import { ReactNode } from "react";

export default function BirminghamEDMedicationLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="birmingham-ed-route-wrapper">
      {children}
    </div>
  );
}
