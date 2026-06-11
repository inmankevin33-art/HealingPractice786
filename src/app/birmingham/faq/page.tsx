import type { Metadata } from "next";
import FaqClient from "@/components/pages/FaqClient";
import Footer from "@/components/Footer";

// Helper recommended pattern: sanitize JSON-LD to mitigate XSS vectors.
const safeJsonLd = (obj: unknown) => JSON.stringify(obj).replace(/</g, "\\u003c");

export const metadata: Metadata = {
  title: {
    absolute: "Treatment & Clinic FAQs | Birmingham Clinic",
  },
  description: "Expert answers on PRP Hair Restoration, Joint Injections, and Sexual Rejuvenation. Find information on parking and specialist doctor-led treatments in Edgbaston.",
  alternates: {
    canonical: "https://www.healing-prp.co.uk/birmingham/faq",
  },
  openGraph: {
    title: "PRP & Regenerative Medicine FAQs | Birmingham",
    description: "Doctor-led answers for Hair, Joints, and Sexual Wellness treatments in Edgbaston and the West Midlands.",
    url: "https://www.healing-prp.co.uk/birmingham/faq",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/hero_img.png",
        width: 1200,
        height: 630,
        alt: "Doctor-Led Treatment FAQs Birmingham",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PRP & Regenerative Medicine FAQs | Birmingham",
    description: "Doctor-led answers for Hair, Joints, and Sexual Wellness treatments in Edgbaston.",
    images: ["/hero_img.png"],
  },
};

const mainFaqs = [
  {
    question: "Are the results of the P-Shot® permanent?",
    answer: "While results are long-lasting, they are not permanent as the natural aging process continues. The P-Shot® stimulates natural tissue growth typically lasting 12-18 months; details are on our [Sexual Rejuvenation](/birmingham/sexual-rejuvenation) page."
  },
  {
    question: "Is PRP better than a steroid injection for knee pain?",
    answer: "Steroids provide fast relief but can weaken tendons over time. PRP is a regenerative therapy at our Birmingham clinic that promotes long-term healing."
  },
  {
    question: "Can I get PRP Hair Restoration in the West Midlands?",
    answer: "Yes, we offer advanced PRP and Exosome therapy at our Edgbaston branch. This treatment stimulates natural follicle growth."
  },
  {
    question: "Does PRP work for advanced 'bone-on-bone' arthritis?",
    answer: "PRP is most effective for early to moderate osteoarthritis. For advanced cases, our Birmingham-based doctor will assess if regenerative therapy can still provide relief."
  },
  {
    question: "How long do the results of a P-Shot® or O-Shot® last?",
    answer: "Most patients enjoy improved sensitivity and performance for 12 to 18 months. To see how these treatments work, visit our [Sexual Rejuvenation](/birmingham/sexual-rejuvenation) section."
  },
  {
    question: "Is there any downtime after Hair Restoration?",
    answer: "There is minimal downtime; you can return to work in Birmingham immediately. We advise waiting 24 hours before washing hair."
  },
  {
    question: "Do you offer a consultation before treatment?",
    answer: "Yes — every client receives a personal consultation with our GMC-registered doctor in Edgbaston to tailor a safe, effective plan."
  },
  {
    question: "Are your products safe and approved?",
    answer: "We use only high-quality, CE-marked products and follow strict medical sterility protocols under the direct supervision of a GMC-registered doctor."
  },
  {
    question: "Can I drive home after a PRP joint injection?",
    answer: "Yes, you can drive home to Solihull, Sutton Coldfield, or surrounding West Midlands areas immediately."
  },
  {
    question: "Where exactly is the Birmingham clinic located?",
    answer: "Our clinic is located at 38 Harborne Rd, Edgbaston, Birmingham (B15 3EB). We are perfectly positioned for patients traveling across the West Midlands."
  },
  {
    question: "Is there parking available at the Edgbaston location?",
    answer: "Yes, there is convenient parking available nearby. We provide specific parking directions via WhatsApp once your appointment is confirmed."
  }
];

// --- UPGRADED JSON-LD SCHEMA: Medical Clinic & FAQ ---
const faqSchemaBirmingham = {
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
      "@id": "https://www.healing-prp.co.uk/birmingham/faq#clinic",
      "name": "Healing-PRP Clinics Birmingham",
      "url": "https://www.healing-prp.co.uk/birmingham/faq",
      "description": "Doctor-led regenerative medicine clinic serving Edgbaston and the West Midlands.",
      "telephone": "+447990364147",
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
      "name": "Birmingham Clinic",
      "item": "https://www.healing-prp.co.uk/birmingham"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Treatment & Clinic FAQs",
      "item": "https://www.healing-prp.co.uk/birmingham/faq"
    }
  ]
};

export default function BirminghamFaqPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(faqSchemaBirmingham) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }}
      />
      <FaqClient 
        title="Frequently Asked Questions"
        description="Clear answers about consultations, treatments, and what to expect at our Birmingham clinic."
        locationBadge="GMC-Registered | CE-Marked | Edgbaston & West Midlands"
        locationName="Birmingham"
        faqs={mainFaqs}
      />
      <Footer />
    </main>
  );
}
