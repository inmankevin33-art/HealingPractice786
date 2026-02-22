import type { Metadata } from "next";
import SexualRejuvenationClient from "@/components/pages/SexualRejuvenationClient";

export const metadata: Metadata = {
  // 1. Optimized Title: The layout template will add " | St Albans Clinic"
  title: "P-Shot, O-Shot & ED Treatments",
  
  description:
    "Doctor-led sexual rejuvenation in St Albans. Specialist P-Shot® (Erectile Dysfunction) & O-Shot® treatments using advanced PRP therapy. Confidential & non-surgical care serving Hertfordshire.",
  
  alternates: {
    canonical: "https://www.healing-prp.co.uk/sexual-rejuvenation",
  },

  // 2. Expanded Local & Clinical Keywords
  keywords: [
    // Core Clinical Terms
    "P-Shot St Albans",
    "O-Shot St Albans",
    "PRP for ED Hertfordshire",
    "Erectile Dysfunction treatment Watford",
    "ED clinic Hemel Hempstead",
    "Erectile dysfunction help Harpenden",
    "P-Shot doctor Radlett",
    "ED specialist Welwyn Garden City",
    "Erectile dysfunction clinic Berkhamsted",
    "PRP for ED Borehamwood",
    "Sexual wellness clinic Hatfield",
    "Private ED treatment North London",
    "Shockwave therapy alternative St Albans",
    "P-Shot cost Hertfordshire",
    "Confidential ED clinic Potters Bar",
    "GMC registered ED doctor Bushey",
    
    // Luton Additions (Bedfordshire Reach)
    "Erectile Dysfunction treatment Luton",
    "P-Shot clinic Luton",
    "Private ED doctor Bedfordshire"
  ],
  
  openGraph: {
    title: "P-Shot & Sexual Rejuvenation Clinic | St Albans",
    description:
      "Doctor-led PRP treatments for sexual wellness and ED. Confidential, non-surgical solutions in St Albans.",
    url: "https://www.healing-prp.co.uk/sexual-rejuvenation",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
  },
};

// --- SEO RICH FAQS ---
const faqs = [
  {
    question: "Are PRP and regenerative sexual treatments safe?",
    answer: "Yes. PRP, shockwave therapy, the P-Shot and O-Shot are considered safe. PRP uses your own blood, reducing allergy risk, and all procedures are performed by trained clinicians."
  },
  {
    question: "Will my consultation be strictly confidential?",
    answer: "Yes. All consultations are private, one-to-one, and conducted discreetly by a doctor. No information is ever shared without your consent."
  },
  {
    question: "How long do regenerative sexual treatments take to work?",
    answer: "Some patients notice early changes within weeks, but optimal results develop over 8–12 weeks as blood flow, nerves and tissue naturally regenerate."
  },
  {
    question: "Do I need a GP referral?",
    answer: "No. You may book directly for assessment and treatment of ED, premature ejaculation, Peyronie’s disease or vaginal rejuvenation without needing a referral."
  },
  {
    question: "Who can benefit from PRP treatment?",
    answer: "Men and women with reduced sensitivity, erectile issues, vaginal dryness, pelvic trauma or age-related tissue decline may benefit, as PRP supports natural healing and function."
  },
  {
    question: "What is PRP sexual rejuvenation?",
    answer: "PRP sexual rejuvenation uses concentrated growth factors from your own blood to improve blood flow, sensitivity, lubrication and natural sexual performance."
  },
  {
    question: "Is PRP safe for sexual rejuvenation?",
    answer: "Yes. PRP is very safe because it is autologous, meaning it comes from your own blood. Side effects are mild and short-lived."
  },
  {
    question: "What are the benefits of the P-Shot?",
    answer: "The P-Shot may enhance erection strength, sensitivity and circulation by delivering PRP into penile tissue to support natural erectile function."
  },
  {
    question: "Are there any P-Shot side effects?",
    answer: "Side effects are mild, such as temporary swelling or tenderness. Allergic reactions are extremely rare because PRP comes from your own blood."
  },
  {
    question: "How long does the O-Shot last?",
    answer: "Many women notice benefits for 12–18 months, including improved lubrication, sensitivity and sexual comfort. Duration varies between individuals."
  },
  {
    question: "What is vaginal rejuvenation without surgery?",
    answer: "Non-surgical vaginal rejuvenation uses PRP or energy-based treatments to improve lubrication, sensitivity, tissue health and comfort without downtime or invasive procedures."
  },
  {
    question: "What is a natural treatment for erectile dysfunction?",
    answer: "PRP and shockwave therapy are natural ED treatments that stimulate blood-flow regeneration and tissue repair, addressing the root causes rather than relying on tablets."
  },
  {
    question: "Is shockwave therapy effective for erectile dysfunction?",
    answer: "Shockwave therapy promotes new blood vessel growth in erectile tissue and can improve circulation. Many patients see benefits after a structured treatment course."
  },
  {
    question: "What are natural alternatives to Viagra or Cialis?",
    answer: "PRP and shockwave therapy offer non-medication alternatives by improving vascular health and supporting spontaneous erections without reliance on tablets."
  },
  {
    question: "Can premature ejaculation be treated naturally?",
    answer: "Yes. Techniques, topical therapies and PRP to support nerve balance can help improve timing, sensitivity control and confidence."
  },
  {
    question: "What is a non-surgical treatment for Peyronie’s disease?",
    answer: "PRP and shockwave therapy may help soften plaque, reduce discomfort and support curvature improvement without requiring invasive surgery."
  },
  {
    question: "Is this a private sexual health clinic?",
    answer: "Yes. We operate as a discreet, doctor-led private clinic offering confidential assessments and personalised regenerative treatment plans."
  }
];

export default function SexualRejuvenationPage() {
  // --- GENERATE JSON-LD SCHEMA ---
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Pass the faqs array as a prop to the client component */}
      <SexualRejuvenationClient locationName="St Albans" faqs={faqs} />
    </>
  );
}
