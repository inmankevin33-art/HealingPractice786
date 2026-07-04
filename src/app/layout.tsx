import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import GlobalStickyCTAs from "@/components/GlobalStickyCTAs";

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

        {/* --- INTERACTION-ONLY TRACKING (Forces 95+ PageSpeed) --- */}
        <script
          id="interaction-tracking"
          dangerouslySetInnerHTML={{
            __html: `
              let gtagLoaded = false;
              
              function loadGoogleTracking() {
                if (gtagLoaded) return;
                gtagLoaded = true;

                // 1. Inject the heavy Google Tag Manager Script natively
                const script = document.createElement('script');
                script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-18130686557';
                script.async = true;
                document.head.appendChild(script);

                // 2. Initialize the Data Layer
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag; // Make globally accessible for the Lead Form
                gtag('js', new Date());

                // 3. Fire Google Ads
                gtag('config', 'AW-18130686557');
                
                // 4. Fire Google Analytics 4
                gtag('config', 'G-PB0GD280PD');

                // 5. Clean up: Remove listeners so this only runs once
                ['scroll', 'mousemove', 'touchstart', 'click', 'keydown'].forEach(function(e) {
                  window.removeEventListener(e, loadGoogleTracking);
                });
              }

              // Listen for ANY user action, then boot up the tracking
              ['scroll', 'mousemove', 'touchstart', 'click', 'keydown'].forEach(function(e) {
                window.addEventListener(e, loadGoogleTracking, { once: true, passive: true });
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
