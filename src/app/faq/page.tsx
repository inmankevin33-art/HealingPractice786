import type { Metadata } from "next";
import FaqClient from "@/components/pages/FaqClient";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "PRP Treatment FAQs | St Albans & Hertfordshire | Healing-PRP", 
  description: "Expert answers on PRP Hair Restoration, Joint Injections, and Sexual Rejuvenation. Find information on parking and specialist doctor-led treatments in St Albans.",
};

export default function MainFaqPage() {
  const mainFaqs = [
    {
      question: "Are the results of the P-Shot® permanent?",
      answer: "While results are long-lasting, they are not permanent as the natural aging process continues. The P-Shot® stimulates natural tissue growth that typically lasts 12-18 months; you can learn more on our [Sexual Rejuvenation](/treatments/sexual-rejuvenation) page."
    },
    {
      question: "Is PRP better than a steroid injection for knee pain?",
      answer: "Steroids provide fast relief but can weaken tendons over time. PRP is a regenerative therapy at our St Albans clinic that promotes long-term healing. View full details on our [Joint Injections](/treatments/joint-injections) page."
    },
    {
      question: "Can I get PRP Hair Restoration in Hertfordshire?",
      answer: "Yes, we offer advanced PRP and Exosome therapy at our St Albans branch. This treatment stimulates natural follicle growth for both men and women. Read about our protocols on the [Hair Restoration](/treatments/hair-restoration) page."
    },
    {
      question: "Does PRP work for advanced 'bone-on-bone' arthritis?",
      answer: "PRP is most effective for early to moderate osteoarthritis. For advanced cases, our St Albans-based doctor will assess if regenerative therapy can still provide meaningful pain management. See our [Joint Injections](/treatments/joint-injections) section for more."
    },
    {
      question: "How long do the results of a P-Shot® or O-Shot® last?",
      answer: "Most patients enjoy improved sensitivity and performance for 12 to 18 months. To see how these treatments work, visit our [Sexual Rejuvenation](/treatments/sexual-rejuvenation) section."
    },
    {
      question: "Is there any downtime after Hair Restoration?",
      answer: "There is minimal downtime; you can return to work in St Albans immediately. We simply advise waiting 24 hours before washing your hair or performing intense exercise. Detailed recovery tips are on our [Hair Restoration](/treatments/hair-restoration) page."
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
      answer: "Yes, you can drive home to Watford, Harpenden, or surrounding Hertfordshire areas immediately. Any mild stiffness usually subsides within 24 hours. Check our [Joint Injections](/treatments/joint-injections) FAQ for post-care."
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
        "text": faq.answer,
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
