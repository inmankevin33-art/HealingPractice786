import type { Metadata } from "next";
import FaqClient from "@/components/pages/FaqClient";
import Footer from "@/components/Footer";

// Helper recommended pattern: sanitize JSON-LD to mitigate XSS vectors.
const safeJsonLd = (obj: unknown) => JSON.stringify(obj).replace(/</g, "\\u003c");

export const metadata: Metadata = {
  title: {
    absolute: "Treatment & Clinic FAQs | Hampstead Clinic",
  },
  description: "Expert answers on PRP Hair Restoration, Joint Injections, and Sexual Rejuvenation. Find information on specialist doctor-led treatments in Hampstead, London.",
  alternates: {
    canonical: "https://www.healing-prp.co.uk/hampstead/faq",
  },
  openGraph: {
    title: "PRP & Regenerative Medicine FAQs | Hampstead",
    description: "Doctor-led answers for Hair, Joints, and Sexual Wellness treatments in Hampstead and North West London.",
    url: "https://www.healing-prp.co.uk/hampstead/faq",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/hero_img.png",
        width: 1200,
        height: 630,
        alt: "Doctor-Led Treatment FAQs Hampstead",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PRP & Regenerative Medicine FAQs | Hampstead",
    description: "Doctor-led answers for Hair, Joints, and Sexual Wellness treatments in Hampstead.",
    images: ["/hero_img.png"],
  },
};

const mainFaqs = [
  {
    question: "Are the results of the P-Shot® permanent?",
    answer: "While results are long-lasting, they are not permanent as the natural aging process continues. The P-Shot® stimulates natural tissue growth typically lasting 12-18 months; details are on our [Sexual Rejuvenation](/hampstead/sexual-rejuvenation) page."
  },
  {
    question: "Is PRP better than a steroid injection for joint pain?",
    answer: "Steroids provide fast relief but can weaken tendons over time. PRP is a regenerative therapy at our Hampstead clinic that promotes long-term healing."
  },
  {
    question: "Can I get PRP Hair Restoration in North West London?",
    answer: "Yes, we offer advanced PRP and Exosome therapy at our Hampstead branch. This treatment stimulates natural follicle growth."
  },
  {
    question: "How long do the results of a P-Shot® or O-Shot® last?",
    answer: "Most patients enjoy improved sensitivity and performance for 12 to 18 months. To see how these treatments work, visit our [Sexual Rejuvenation](/hampstead/sexual-rejuvenation) section."
  },
  {
    question: "Is there any downtime after Hair Restoration?",
    answer: "There is minimal downtime; you can return to work or travel across London immediately. We advise waiting 24 hours before washing hair."
  },
  {
    question: "Do you offer a consultation before treatment?",
    answer: "Yes — every client receives a personal consultation with our GMC-registered doctor in Hampstead to tailor a safe, effective plan."
  },
  {
    question: "Are your products safe and approved?",
    answer: "We use only high-quality, CE-marked products and follow strict medical sterility protocols under the direct supervision of a GMC-registered doctor."
  },
  {
    question: "Can I take the tube home after a PRP procedure?",
    answer: "Yes. All of our treatments are outpatient procedures with zero general anaesthesia, meaning you can safely navigate the London Underground immediately afterwards."
  },
  {
    question: "Where exactly is the Hampstead clinic located?",
    answer: "Our clinic is located at 2 Hampstead High St, London NW3 1PR. We are perfectly positioned for patients traveling from Belsize Park, West Hampstead, and North West London."
  },
  {
    question: "How do I find the clinic?",
    answer: "We provide specific arrival directions and clinic access details via WhatsApp once your appointment is confirmed to ensure a discreet and smooth visit."
  }
];

// --- UPGRADED JSON-LD SCHEMA: Medical Clinic & FAQ ---
const faqSchemaHampstead = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "mainEntity": mainFaqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer.replace(/\[(.*?)\]\((.*?)\)/g, '$1'),
        },
      })),
    },
    {
      "@type": "MedicalClinic",
      "@id": "https://www.healing-prp.co.uk/hampstead/faq#clinic",
      "name": "Healing-PRP Clinics Hampstead",
      "url": "https://www.healing-prp.co.uk/hampstead/faq",
      "description": "Doctor-led regenerative medicine clinic serving Hampstead and North West London.",
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
      "medicalDirector": {
        "@type": "Physician",
        "name": "Dr Syed Abdi",
        "jobTitle": "GMC Registered Doctor",
        "url": "https://www.healing-prp.co.uk/our-doctor",
        "knowsAbout": ["PRP Therapy", "Regenerative Medicine", "Sexual Health"]
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
      "name": "Treatment & Clinic FAQs",
      "item": "https://www.healing-prp.co.uk/hampstead/faq"
    }
  ]
};

export default function HampsteadFaqPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(faqSchemaHampstead) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }}
      />
      <FaqClient 
        title="Frequently Asked Questions"
        description="Clear answers about consultations, treatments, and what to expect at our Hampstead clinic."
        locationBadge="GMC-Registered | CE-Marked | North West London"
        locationName="Hampstead"
        faqs={mainFaqs}
      />
      <Footer />
    </main>
  );
}
