import type { Metadata } from "next";
import PricesClient from "@/components/pages/PricesClient";

// Helper recommended pattern: sanitize JSON-LD to mitigate XSS vectors.
const safeJsonLd = (obj: unknown) => JSON.stringify(obj).replace(/</g, "\\u003c");

export const metadata: Metadata = {
  title: {
    absolute: "Treatment Prices Birmingham | Doctor-Led Clinic Edgbaston",
  },
  description: "Transparent, doctor-led pricing for PRP Hair Restoration, Joint Pain Injections, and Sexual Rejuvenation in Birmingham. No hidden costs. Serving the West Midlands.",
  alternates: {
    canonical: "https://www.healing-prp.co.uk/birmingham/prices",
  },
  openGraph: {
    title: "Healing-PRP Clinics | Birmingham Price List",
    description: "View our full price list for regenerative medical treatments. Specialist care by GMC-registered doctors in Edgbaston and the West Midlands.",
    url: "https://www.healing-prp.co.uk/birmingham/prices",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/hero_img.png",
        width: 1200,
        height: 630,
        alt: "Doctor-Led Treatment Prices Birmingham",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Healing-PRP Clinics | Birmingham Price List",
    description: "View our full price list for regenerative medical treatments in Edgbaston, Birmingham.",
    images: ["/hero_img.png"],
  },
};

// --- UPGRADED JSON-LD SCHEMA: Medical Clinic & Local Pricing ---
const priceSchemaBirmingham = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "@id": "https://www.healing-prp.co.uk/birmingham/prices#clinic",
      "name": "Healing-PRP Clinics Birmingham",
      "url": "https://www.healing-prp.co.uk/birmingham/prices",
      "description": "Doctor-led regenerative medicine prices for Edgbaston and the West Midlands.",
      "telephone": "+447990364147",
      "image": "https://www.healing-prp.co.uk/Logo2.png",
      "priceRange": "£150 - £4000",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "38 Harborne Rd",
        "addressLocality": "Birmingham",
        "addressRegion": "West Midlands",
        "postalCode": "B15 3EB",
        "addressCountry": "GB"
      },
      "areaServed": [
        { "@type": "City", "name": "Birmingham" },
        { "@type": "City", "name": "Edgbaston" },
        { "@type": "AdministrativeArea", "name": "West Midlands" }
      ],
      "employee": [
        { 
          "@type": "Person",
          "name": "Dr Syed Abdi",
          "jobTitle": "Medical Director",
          "url": "https://www.healing-prp.co.uk/our-doctor"
        }
      ]
    }
  ]
};

// --- BREADCRUMB SCHEMA ---
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.healing-prp.co.uk/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Birmingham Clinic",
      "item": "https://www.healing-prp.co.uk/birmingham"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Treatment Prices",
      "item": "https://www.healing-prp.co.uk/birmingham/prices"
    }
  ]
};

export default function BirminghamPricesPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(priceSchemaBirmingham) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }}
      />
      <PricesClient isBirmingham={true} isHampstead={false} />
    </main>
  );
}
