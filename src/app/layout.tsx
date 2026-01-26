import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
// Footer is usually here, or inside specific pages. 
// If your Footer is not in 'page.tsx', it should be here.

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });

// --- GLOBAL SEO DEFAULTS ---
export const metadata: Metadata = {
  metadataBase: new URL("https://www.healing-prp.co.uk"), // Fixes social sharing image issues
  title: {
    default: "Healing-PRP Clinics | Doctor-Led Regenerative Medicine",
    template: "%s | Healing-PRP Clinics", // Adds your brand to every page title automatically
  },
  description: "Specialist private clinic in St Albans & Birmingham. PRP Hair Restoration, Joint Injections, P-Shot & O-Shot treatments by GMC-registered doctors.",
  icons: {
    icon: "/favicon.png", // <--- Ensures your Blue Flower shows in the browser tab
    shortcut: "/favicon.png",
    apple: "/favicon.png", // For iPhone home screen
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.healing-prp.co.uk",
    siteName: "Healing-PRP Clinics",
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
        
        {/* This renders the content of page.tsx */}
        {children}
        
        {/* Note: If you removed Footer from page.tsx to put it here, uncomment below: */}
        {/* <Footer /> */} 
      </body>
    </html>
  );
}
