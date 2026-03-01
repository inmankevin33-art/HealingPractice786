import { ReactNode } from "react";

export default function PersonalisedEDMedicationLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="ed-medication-route-wrapper">
      {children}
    </div>
  );
}
