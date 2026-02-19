import type { Metadata } from "next";
import FaqClient from "@/components/pages/FaqClient";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  // 1. Optimized Title: Result will be "Treatment & Clinic FAQs | St Albans Clinic" 
  title: "Treatment & Clinic FAQs", 
  description: "Expert answers on PRP Hair Restoration, Joint Injections, and Sexual Rejuvenation. Find information on parking and specialist doctor-led treatments in St Albans.",
  alternates: {
    canonical: "https://www.healing-prp.co.uk/faq",
  },
  // 2. Comprehensive Local & Treatment Keywords
  keywords: [
    "PRP treatment FAQ St Albans",
    "Is PRP therapy safe",
    "P-Shot results Hertfordshire",
    "O-Shot recovery time",
    "PRP for hair loss Watford",
    "Joint injection specialist Harpenden",
    "Vampire Facial downtime St Albans",
    "Regenerative medicine North London",
    "GMC registered doctor PRP",
    "Exosome therapy Hertfordshire",
    "Private medical clinic St Albans parking",
  ],
  openGraph: {
    title: "PRP & Regenerative Medicine FAQs | St Albans",
    description: "Doctor-led answers for Hair, Joints, and Sexual Wellness treatments in St Albans and Hertfordshire.",
    url: "https://www.healing-prp.co.uk/faq",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
  },
};

export default function MainFaqPage() {
  const mainFaqs = [
    {
      question: "Are the results of the P-Shot® permanent?",
      answer: "While results are long-lasting, they are not permanent as the natural aging process continues. The P-Shot® stimulates natural tissue growth typically lasting 12-18 months; details are on our [Sexual Rejuvenation](/sexual-rejuvenation) page."
    },
    {
      question: "Is PRP better than a steroid injection for knee pain?",
      answer: "Steroids provide fast relief but can weaken tendons over time. PRP is a regenerative therapy at our St Albans clinic that promotes long-term healing. View details on our [Joint Injections](/joint-injections) page."
    },
    {
      question: "Can I get PRP Hair Restoration in Hertfordshire?",
      answer: "Yes, we offer advanced PRP and Exosome therapy at our St Albans branch. This treatment stimulates natural follicle growth. Read about our protocols on the [Hair Restoration](/hair-restoration) page."
    },
    {
      question: "Does PRP work for advanced 'bone-on-bone' arthritis?",
      answer: "PRP is most effective for early to moderate osteoarthritis. For advanced cases, our St Albans-based doctor will assess if regenerative therapy can still provide relief. See our [Joint Injections](/joint-injections) section for more."
    },
    {
      question: "How long do the results of a P-Shot® or O-Shot® last?",
      answer: "Most patients enjoy improved sensitivity and performance for 12 to 18 months. To see how these treatments work, visit our [Sexual Rejuvenation](/sexual-rejuvenation) section."
    },
    {
      question: "Is there any downtime after Hair Restoration?",
      answer: "There is minimal downtime; you can return to work in St Albans immediately. We advise waiting 24 hours before washing hair. Recovery tips are on our [Hair Restoration](/hair-restoration) page."
    },
    {
      question: "Do you offer a consultation before treatment?",
      answer: "Yes — every client receives a personal consultation with our GMC-registered doctor in St Albans to tailor a safe, effective plan."
    },
    {
      question: "Are your products safe and approved?",
      answer: "We use only high-quality, CE-marked products and follow strict medical sterility protocols under the direct supervision of a GMC-registered doctor."
    },
    {
      question: "Can I drive home after a PRP joint injection?",
      answer: "Yes, you can drive home to Watford, Harpenden, or surrounding Hertfordshire areas immediately. Check our [Joint Injections](/joint-injections) FAQ for post-care."
    },
    {
      question: "Where exactly is the St Albans clinic located?",
      answer: "Our main clinic is located in St Albans, Hertfordshire. We are perfectly positioned for patients traveling from Harpenden, Watford, Luton, and North London."
    },
    {
      question: "Is there parking available at the St Albans location?",
      answer: "Yes, there is convenient parking available for patients. We provide specific parking directions via WhatsApp once your appointment is confirmed."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": mainFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        // This regex perfectly strips out the markdown links, feeding Google pure, clean text
        "text": faq.answer.replace(/\[(.*?)\]\((.*?)\)/g, '$1'),
      },
    })),
  };

  return (
    <>
      <Script
        id="faq-schema-main"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <FaqClient 
        title="Frequently Asked Questions"
        description="Clear answers about consultations, treatments, and what to expect at our St Albans clinic."
        locationBadge="GMC-Registered | CE-Marked | St Albans & Hertfordshire"
        faqs={mainFaqs}
      />
      <Footer />
    </>
  );
}
