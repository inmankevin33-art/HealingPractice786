import type { Metadata } from "next";
import FaqClient from "@/components/pages/FaqClient";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Patient FAQs & Parking",
  description: "Visiting our Birmingham clinic? Find answers about parking in Edgbaston, directions from Solihull, and specialist PRP treatments in the West Midlands.",
};

export default function BirminghamFaqPage() {
  const birminghamFaqs = [
    {
      question: "Are the results of the P-Shot® permanent?",
      answer: "While many of our Birmingham patients report sustained improvements for months, results are not permanent as the natural aging process continues. Individual response varies, and periodic maintenance sessions are typically recommended in some cases."
    },
    {
      question: "Is PRP better than a steroid injection for knee pain?",
      answer: "Steroids offer fast, temporary relief but can weaken tissue over time. PRP is a regenerative therapy at our Birmingham clinic that uses your own growth factors to promote long-term healing and lasting pain relief."
    },
    {
      question: "Does PRP work for advanced 'bone-on-bone' arthritis?",
      answer: "PRP is most effective for early to moderate osteoarthritis. For advanced cases, our Edgbaston-based doctor will assess your joint during a consultation to see if PRP can still provide meaningful pain management."
    },
    {
      question: "How long do the results of a P-Shot® or O-Shot® last?",
      answer: "Most patients enjoy improved sensitivity and performance for 12 to 18 months. The effects are cumulative, and many of our West Midlands patients opt for a single annual top-up to maintain optimal results."
    },
    {
      question: "Is there any downtime after Sexual Rejuvenation treatments?",
      answer: "There is virtually no downtime; you can return to work in Birmingham immediately. We simply recommend 2-3 days of pelvic rest before resuming sexual activity to ensure the injection sites heal perfectly."
    },
    {
      question: "Can I drive home after a PRP joint injection?",
      answer: "Yes, you can drive home to Solihull, Sutton Coldfield, or beyond immediately after treatment. You may feel slight stiffness for 24 hours, but it does not typically interfere with operating a vehicle."
    },
    {
      question: "Are clinical results guaranteed?",
      answer: "As with any medical procedure, results cannot be guaranteed. Regenerative medicine relies on your body’s unique healing response, and factors such as age, lifestyle, and the severity of the condition can influence the outcome. Our doctor provides a thorough assessment during your Birmingham consultation to discuss realistic expectations."
    },
    {
      question: "Where exactly is the Birmingham clinic located?",
      answer: "Our Birmingham clinic is situated in the prestigious Edgbaston Medical Quarter. It is easily accessible for patients traveling from the City Centre and surrounding West Midlands areas."
    },
    {
      question: "Is there parking available at the Birmingham location?",
      answer: "Yes, we have dedicated parking facilities for our patients. There is also ample, low-cost street parking available in the immediate vicinity of the clinic."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: birminghamFaqs.map((faq) => ({
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
      <Script
        id="faq-schema-birmingham"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <FaqClient 
        title="Birmingham Clinic FAQs"
        description="Specific information about our Edgbaston location, parking, and specialist regenerative treatments available in Birmingham."
        locationBadge="Birmingham • Edgbaston • West Midlands"
        faqs={birminghamFaqs}
      />
      <Footer />
    </>
  );
}
