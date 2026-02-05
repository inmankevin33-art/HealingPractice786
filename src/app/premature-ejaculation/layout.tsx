import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | St Albans Clinic",
    default: "Premature Ejaculation Treatment | St Albans Clinic",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
