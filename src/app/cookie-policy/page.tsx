"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import Footer from "@/components/Footer";

export default function CookiePolicy() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-[#4041d1] transition-colors duration-300 group"
          >
            <FaArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium font-inter">Back to Home</span>
          </Link>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="prose prose-slate max-w-none font-inter"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-8">
            <h1 className="text-4xl font-raleway font-bold text-slate-900 mb-2">
              Cookie Policy
            </h1>
            <p className="text-slate-600 text-sm mb-2 font-inter">
              Healing-PRP Clinics – healing-prp.co.uk
            </p>
            <p className="text-slate-600 text-sm font-inter">
              Last updated: {new Date().toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </motion.div>

          {/* Introduction */}
          <motion.div variants={itemVariants} className="mb-8">
            <p className="text-slate-700 leading-relaxed">
              This Cookie Policy explains how Healing-PRP Clinics (&quot;we&quot;,
              &quot;us&quot;, &quot;our&quot;) uses cookies and similar technologies on our
              website healing-prp.co.uk.
            </p>
          </motion.div>

          {/* Section 1 */}
          <motion.section variants={itemVariants} className="mb-8">
            <h2 className="text-2xl font-raleway font-semibold text-slate-900 mb-4">
              1. What Are Cookies?
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Cookies are small text files that are placed on your device when you
              visit a website. They are widely used to make websites work, improve
              user experience, and provide information to site owners.
            </p>
          </motion.section>

          {/* Section 2 */}
          <motion.section variants={itemVariants} className="mb-8">
            <h2 className="text-2xl font-raleway font-semibold text-slate-900 mb-4">
              2. Types of Cookies We Use
            </h2>

            <h3 className="text-xl font-raleway font-medium text-slate-800 mb-3 mt-6">
              2.1 Strictly Necessary Cookies
            </h3>
            <p className="text-slate-700 leading-relaxed">
              These cookies are essential for the website to function properly. They
              enable basic features such as page navigation and access to secure
              areas of the site. You cannot opt out of these cookies through our
              cookie banner.
            </p>

            <h3 className="text-xl font-raleway font-medium text-slate-800 mb-3 mt-6">
              2.2 Performance and Analytics Cookies
            </h3>
            <p className="text-slate-700 leading-relaxed">
              These cookies help us understand how visitors use our website (for
              example, which pages are visited most often) so we can improve our
              content and user experience. Where used, these cookies may be provided
              by trusted third-party analytics providers.
            </p>

            <h3 className="text-xl font-raleway font-medium text-slate-800 mb-3 mt-6">
              2.3 Functionality Cookies
            </h3>
            <p className="text-slate-700 leading-relaxed">
              These cookies allow the website to remember choices you make (such as
              preferred language or region) and provide enhanced features.
            </p>

            <h3 className="text-xl font-raleway font-medium text-slate-800 mb-3 mt-6">
              2.4 Marketing Cookies (if used)
            </h3>
            <p className="text-slate-700 leading-relaxed">
              If we use marketing or advertising cookies, they help us show relevant
              adverts or track the performance of our campaigns. These cookies will
              only be used where you have given consent.
            </p>
          </motion.section>

          {/* Section 3 */}
          <motion.section variants={itemVariants} className="mb-8">
            <h2 className="text-2xl font-raleway font-semibold text-slate-900 mb-4">
              3. Cookies and Consent
            </h2>
            <p className="text-slate-700 leading-relaxed">
              When you first visit our website, you may see a cookie banner that
              allows you to accept or manage non-essential cookies. You can change
              your cookie preferences at any time via your browser settings or,
              where available, via our on-site cookie preferences tool.
            </p>
          </motion.section>

          {/* Section 4 */}
          <motion.section variants={itemVariants} className="mb-8">
            <h2 className="text-2xl font-raleway font-semibold text-slate-900 mb-4">
              4. Managing Cookies in Your Browser
            </h2>
            <p className="text-slate-700 mb-4">
              Most web browsers allow you to control cookies through their
              settings. You can usually:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
              <li>View which cookies are set on your device</li>
              <li>Delete existing cookies</li>
              <li>Block all cookies or restrict them to certain sites</li>
            </ul>
            <p className="text-slate-700 leading-relaxed">
              Please note that blocking or deleting cookies may affect how well our
              website functions for you.
            </p>
          </motion.section>

          {/* Section 5 */}
          <motion.section variants={itemVariants} className="mb-8">
            <h2 className="text-2xl font-raleway font-semibold text-slate-900 mb-4">
              5. Third-Party Cookies
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Some cookies may be set by third parties (for example, analytics
              providers or embedded content from other sites). We do not control
              these cookies. You should check the relevant third party&apos;s own
              cookie and privacy policies for more information.
            </p>
          </motion.section>

          {/* Section 6 */}
          <motion.section variants={itemVariants} className="mb-8">
            <h2 className="text-2xl font-raleway font-semibold text-slate-900 mb-4">
              6. Changes to This Cookie Policy
            </h2>
            <p className="text-slate-700 leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes
              in law, technology, or how we use cookies. Any changes will be posted
              on this page with an updated &quot;Last updated&quot; date.
            </p>
          </motion.section>

          {/* Section 7 */}
          <motion.section variants={itemVariants} className="mb-8">
            <h2 className="text-2xl font-raleway font-semibold text-slate-900 mb-4">
              7. Contact Us
            </h2>
            <p className="text-slate-700 leading-relaxed">
              If you have any questions about this Cookie Policy, please contact us
              at{" "}
              <a
                href="mailto:info@healing-prp.co.uk"
                // BRAND COLOR LOCK: #4041d1
                className="text-[#4041d1] hover:text-[#2a2bb8] underline transition-colors"
              >
                info@healing-prp.co.uk
              </a>
              .
            </p>
          </motion.section>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
