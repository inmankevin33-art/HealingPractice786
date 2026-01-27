import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });

// --- GLOBAL SEO DEFAULTS ---
export const metadata: Metadata = {
  metadataBase: new URL("https://www.healing-prp.co.uk"),
  title: {
    // This is the default title if a page doesn't have one
    default: "Healing-PRP Clinics | Doctor-Led Regenerative Medicine",
    // General brand template for top-level pages (Home, About, Contact)
    template: "%s | Healing-PRP Clinics", 
  },
  description: "Specialist private clinic in St Albans & Birmingham. PRP Hair Restoration, Joint Injections, P-Shot & O-Shot treatments by GMC-registered doctors.",
  keywords: [
    "PRP Clinic UK",
    "Private Doctor St Albans",
    "Private Doctor Birmingham",
    "Regenerative Medicine",
    "Erectile Dysfunction Treatment",
    "Hair Loss Clinic",
    "Joint Pain Injections"
  ],
  icons: {
    icon: "/Logo2.png", 
    shortcut: "/Logo2.png",
    apple: "/Logo2.png", 
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.healing-prp.co.uk",
    siteName: "Healing-PRP Clinics",
    title: "Healing-PRP Clinics | Specialist Regenerative Medicine",
    description: "Doctor-led PRP treatments in St Albans and Birmingham for hair, joints, and sexual wellness.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${raleway.variable} font-sans antialiased bg-slate-50 text-slate-900`}>
        {/* Header appears on ALL pages */}
        <Header /> 
        
        {/* Main Content Area */}
        <main>
          {children}
        </main>
        
        {/* Footer is typically called within page.tsx to allow for 
            location-specific footer details, but can be added here 
            if you want a universal one. */}
      </body>
    </html>
  );
}
