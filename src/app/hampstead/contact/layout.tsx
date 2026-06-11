import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    template: "%s | Hampstead Clinic",
    default: "Contact Us | Hampstead Clinic",
  },
  description: "Get in touch with our Hampstead clinic to book a private, discreet consultation for doctor-led regenerative medicine in North West London.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
