import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Clinic Price List",
    template: "%s | Healing-PRP St Albans",
  },
  description: "View our full range of regenerative treatment costs for our St Albans clinic.",
};

export default function StAlbansPricesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}
