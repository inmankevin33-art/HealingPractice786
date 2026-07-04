import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import GlobalStickyCTAs from "@/components/GlobalStickyCTAs";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway", display: "swap" });

// --- GLOBAL SEO DEFAULTS ---
export const metadata: Metadata = {
  metadataBase: new URL("https://www.healing-prp.co.uk"),
  title: {
    default: "Doctor-Led Regenerative Medicine | Healing-PRP Clinics",
    template: "%s | Healing-PRP Clinics", 
  },
  description: "Specialist private clinic in St Albans & Birmingham. PRP Hair Restoration, Joint Injections, P-Shot & O-Shot treatments by GMC-registered doctors.",
  icons: {
    icon: "/Logo2.png", 
    shortcut: "/Logo2.png",
    apple: "/Logo2.png", 
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Healing-PRP Clinics",
  },
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
    <html lang="en-GB" className="scroll-smooth">
      <body className={`${inter.variable} ${raleway.variable} font-sans antialiased bg-slate-50 text-slate-900`}>
        <Header /> 
        <main>{children}</main>
        <GlobalStickyCTAs />

        {/* COMBINED GOOGLE ADS & GA4 SCRIPT (Forced to lazyOnload for max PageSpeed) */}
        <Script
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=AW-18130686557"
        />
        <Script
          id="google-tracking-tags"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              
              // Google Ads
              gtag('config', 'AW-18130686557');
              
              // Google Analytics 4
              gtag('config', 'G-PB0GD280PD');
            `,
          }}
        />
      </body>
    </html>
  );
}
