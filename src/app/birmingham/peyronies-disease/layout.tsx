import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Birmingham Clinic",
    default: "Peyronie's Disease Treatment | Birmingham Clinic",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
