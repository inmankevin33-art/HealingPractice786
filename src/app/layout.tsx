import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import GlobalStickyCTAs from "@/components/GlobalStickyCTAs";
// 1. ADD THIS IMPORT
import { GoogleTagManager } from '@next/third-parties/google'; 

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });

// --- GLOBAL SEO DEFAULTS ---
export const metadata: Metadata = {
  // Required for Next.js to auto-generate correct URLs for all child pages
  metadataBase: new URL("https://www.healing-prp.co.uk"),
  
  title: {
    // Moved "Doctor-Led" to the front for maximum impact
    // Length: 58 characters (Perfect sweet spot)
    default: "Doctor-Led Regenerative Medicine | Healing-PRP Clinics",
    // General brand template for top-level pages (Home, About, Contact)
    template: "%s | Healing-PRP Clinics", 
  },
  
  description: "Specialist private clinic in St Albans & Birmingham. PRP Hair Restoration, Joint Injections, P-Shot & O-Shot treatments by GMC-registered doctors.",
  
  icons: {
    icon: "/Logo2.png", 
    shortcut: "/Logo2.png",
    apple: "/Logo2.png", 
  },
  
  openGraph: {
    // Universal site-wide tags ONLY. 
    // Title, description, and URL are intentionally left out so child pages can define them!
    type: "website",
    locale: "en_GB",
    siteName: "Healing-PRP Clinics",
  },

  // Added base Twitter formatting for site-wide social sharing reliability
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Updated lang to "en-GB" for stronger local UK SEO targeting
    <html lang="en-GB" className="scroll-smooth">
      <body className={`${inter.variable} ${raleway.variable} font-sans antialiased bg-slate-50 text-slate-900`}>
        {/* Header appears on ALL pages */}
        <Header /> 
        
        {/* Main Content Area */}
        <main>
          {children}
        </main>
            
        {/* The Global Sticky Buttons */}
        <GlobalStickyCTAs />

        {/* 2. ADD THE GOOGLE TAG MANAGER HERE */}
        {/* Replace AW-XXXXXXXXXX with your actual Google Ads measurement ID */}
        <GoogleTagManager gtmId="AW-XXXXXXXXXX" />
      </body>
    </html>
  );
}
