import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Joint Injections in St Albans | Healing-PRP Clinics",
    template: "%s | Healing-PRP Clinics",
  },
  description:
    "PRP and steroid joint injections in St Albans by a GMC-registered doctor. Natural treatment for joint pain, arthritis, and sports injuries. Evidence-based regenerative medicine for knees, shoulders, and more.",
};

export default function JointInjectionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
