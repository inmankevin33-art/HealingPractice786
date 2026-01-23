import type { Metadata } from "next";
import Script from "next/script";
import {
  Geist,
  Geist_Mono,
  Playfair_Display,
  Inter,
  DM_Sans,
  Raleway,
  Merriweather,
  Manrope,
} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import MobileMotionProvider from "@/components/MobileMotionProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Natural Regeneration Treatment with PRP | Healing-PRP Clinics",
    template: "%s | Healing-PRP Clinics",
  },
  description:
    "Doctor-led natural regeneration treatments using PRP (Platelet-Rich Plasma). Evidence-based, non-surgical care for skin, hair, joints and sexual wellbeing in St Albans and Birmingham.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} ${inter.variable} ${dmSans.variable} ${raleway.variable} ${merriweather.variable} ${manrope.variable} antialiased`}
      >
        <MobileMotionProvider>
          <Header />
          {children}
        </MobileMotionProvider>

        {/* Chatbase Chatbot */}
        <Script
          id="chatbase-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
(function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="n3slRY64tFnc_StlJzVba";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();
            `,
          }}
        />
      </body>
    </html>
  );
}
