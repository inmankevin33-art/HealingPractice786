import type { Metadata } from "next";
import ContactClient from "@/components/pages/ContactClient";

// Helper recommended pattern: sanitize JSON-LD to mitigate XSS vectors.
const safeJsonLd = (obj: unknown) => JSON.stringify(obj).replace(/</g, "\\u003c");

export const metadata: Metadata = {
  title: {
    absolute: "Contact Our Hampstead Clinic | Healing-PRP London",
  },
  description: "Get in touch with our Hampstead clinic in North West London for doctor-led PRP, Joint Injections, and Sexual Rejuvenation. Book your private consultation today.",
  alternates: {
    canonical: "https://www.healing-prp.co.uk/hampstead/contact",
  },
  openGraph: {
    title: "Contact Healing-PRP Clinics | Hampstead",
    description: "Book a consultation at our Hampstead clinic for specialist, doctor-led regenerative medicine in London.",
    url: "https://www.healing-prp.co.uk/hampstead/contact",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact Healing-PRP Clinics | Hampstead",
    description: "Book a consultation at our Hampstead clinic for specialist, doctor-led regenerative medicine.",
  },
};

// --- UPGRADED JSON-LD SCHEMA: Contact Page & Medical Clinic ---
const contactSchemaHampstead = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://www.healing-prp.co.uk/hampstead/contact#webpage",
      "url": "https://www.healing-prp.co.uk/hampstead/contact",
      "name": "Contact Healing-PRP Clinics Hampstead",
      "description": "Contact page for Healing-PRP Clinics in Hampstead, London."
    },
    {
      "@type": "MedicalClinic",
      "@id": "https://www.healing-prp.co.uk/hampstead/contact#clinic",
      "name": "Healing-PRP Clinics Hampstead",
      "url": "https://www.healing-prp.co.uk/hampstead",
      "telephone": "+447990364147",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2 Hampstead High St",
        "addressLocality": "London",
        "addressRegion": "Greater London",
        "postalCode": "NW3 1PR",
        "addressCountry": "GB"
      },
      "areaServed": [
        { "@type": "City", "name": "London" },
        { "@type": "City", "name": "Hampstead" },
        { "@type": "City", "name": "North West London" },
        { "@type": "City", "name": "Belsize Park" }
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+447990364147",
        "contactType": "customer service",
        "areaServed": "GB",
        "availableLanguage": "English"
      }
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
      "name": "Hampstead Clinic",
      "item": "https://www.healing-prp.co.uk/hampstead"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Contact Us",
      "item": "https://www.healing-prp.co.uk/hampstead/contact"
    }
  ]
};

export default function HampsteadContactPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(contactSchemaHampstead) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }}
      />
      <ContactClient locationName="Hampstead" />
    </main>
  );
}
