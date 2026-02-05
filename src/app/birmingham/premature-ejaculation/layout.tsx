import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Birmingham Clinic",
    default: "Premature Ejaculation Treatment | Birmingham Clinic",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
