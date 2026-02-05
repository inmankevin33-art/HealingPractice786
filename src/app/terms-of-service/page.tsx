"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import Footer from "@/components/Footer";

export default function TermsOfService() {
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
              Terms of Service
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
              Welcome to Healing-PRP Clinics. By accessing or using this website
              (healing-prp.co.uk), you agree to be bound by these Terms of Service.
              If you do not agree with these terms, please do not use the site.
            </p>
          </motion.div>

          {/* Section 1 */}
          <motion.section variants={itemVariants} className="mb-8">
            <h2 className="text-2xl font-raleway font-semibold text-slate-900 mb-4">
              1. About Us
            </h2>
            <p className="text-slate-700 mb-4">
              Healing-PRP Clinics provides information about aesthetic and
              regenerative medical treatments offered by qualified healthcare
              professionals.
            </p>
            <div className="space-y-2 text-slate-700">
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:info@healing-prp.co.uk"
                  // BRAND COLOR LOCK: #4041d1
                  className="text-[#4041d1] hover:text-[#2a2bb8] underline transition-colors"
                >
                  info@healing-prp.co.uk
                </a>
              </p>
              <p>
                <strong>Website:</strong>{" "}
                <a
                  href="https://healing-prp.co.uk"
                  className="text-[#4041d1] hover:text-[#2a2bb8] underline transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://healing-prp.co.uk
                </a>
              </p>
              <p>
                <strong>Location:</strong> 21 Victoria Street, St Albans, AL1 3JJ
              </p>
            </div>
          </motion.section>

          {/* Section 2 */}
          <motion.section variants={itemVariants} className="mb-8">
            <h2 className="text-2xl font-raleway font-semibold text-slate-900 mb-4">
              2. Medical Disclaimer
            </h2>
            <p className="text-slate-700 mb-4">
              All information on this website is for general informational purposes
              only and does not constitute medical advice. No diagnosis or treatment
              is provided through the website.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>
                Treatment suitability is determined only after a face-to-face
                consultation with a clinician.
              </li>
              <li>Individual results vary; no guarantees of outcomes are made.</li>
              <li>
                You should consult a qualified medical professional for personalised
                advice.
              </li>
            </ul>
          </motion.section>

          {/* Section 3 */}
          <motion.section variants={itemVariants} className="mb-8">
            <h2 className="text-2xl font-raleway font-semibold text-slate-900 mb-4">
              3. Eligibility for Treatment
            </h2>
            <p className="text-slate-700 mb-4">
              By booking an appointment, you confirm that:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>You are at least 18 years old.</li>
              <li>
                You will provide accurate, complete medical history and
                information.
              </li>
              <li>
                The clinician may refuse, postpone, or cancel treatment if it is
                considered unsafe or inappropriate.
              </li>
            </ul>
          </motion.section>

          {/* Section 4 */}
          <motion.section variants={itemVariants} className="mb-8">
            <h2 className="text-2xl font-raleway font-semibold text-slate-900 mb-4">
              4. Booking, Payments & Cancellations
            </h2>

            <h3 className="text-xl font-raleway font-medium text-slate-800 mb-3 mt-6">
              4.1 Bookings
            </h3>
            <p className="text-slate-700 leading-relaxed">
              Appointments are confirmed only when you receive an official
              confirmation (for example by email or SMS). Some treatments may
              require a deposit to secure the booking.
            </p>

            <h3 className="text-xl font-raleway font-medium text-slate-800 mb-3 mt-6">
              4.2 Payments
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>
                Prices listed on the website are indicative and may change without
                prior notice.
              </li>
              <li>
                Full payment is usually required before or on the day of treatment.
              </li>
              <li>
                Payments may be taken by card or other methods as advised by the
                clinic.
              </li>
            </ul>

            <h3 className="text-xl font-raleway font-medium text-slate-800 mb-3 mt-6">
              4.3 Cancellations & No-Shows
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>
                We require at least 48 hours&apos; notice to cancel or reschedule an
                appointment.
              </li>
              <li>
                Late cancellations or failure to attend (no-shows) may result in loss
                of deposit or a cancellation fee.
              </li>
              <li>
                If you are deemed unsuitable for treatment following consultation, a
                consultation fee may still apply.
              </li>
            </ul>
          </motion.section>

          {/* Section 5 */}
          <motion.section variants={itemVariants} className="mb-8">
            <h2 className="text-2xl font-raleway font-semibold text-slate-900 mb-4">
              5. Refund Policy
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>
                No refunds are offered for completed treatments where the service has
                been carried out as agreed.
              </li>
              <li>
                Deposits may be non-refundable except where required by law.
              </li>
              <li>
                Refunds for prepaid treatment courses or packages apply only to
                unused sessions and are considered at the clinician&apos;s discretion,
                usually based on the full, non-discounted price of sessions already
                used.
              </li>
            </ul>
          </motion.section>

          {/* Section 6 */}
          <motion.section variants={itemVariants} className="mb-8">
            <h2 className="text-2xl font-raleway font-semibold text-slate-900 mb-4">
              6. Website Use
            </h2>
            <p className="text-slate-700 mb-4">
              By using this website, you agree that you will not:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>
                Misuse the website or attempt unauthorised access to any part of it.
              </li>
              <li>
                Copy, reproduce, or distribute website content without permission.
              </li>
              <li>Submit false, misleading, or harmful information.</li>
              <li>
                Use the website in any way that could damage our reputation or impair
                its function.
              </li>
            </ul>
          </motion.section>

          {/* Section 7 */}
          <motion.section variants={itemVariants} className="mb-8">
            <h2 className="text-2xl font-raleway font-semibold text-slate-900 mb-4">
              7. Intellectual Property
            </h2>
            <p className="text-slate-700 leading-relaxed">
              All branding, logos, images, text, and other content on this site are
              the property of Healing-PRP Clinics or used with permission. They may
              not be reproduced, copied, or distributed without our prior written
              consent.
            </p>
          </motion.section>

          {/* Section 8 */}
          <motion.section variants={itemVariants} className="mb-8">
            <h2 className="text-2xl font-raleway font-semibold text-slate-900 mb-4">
              8. Privacy & Data Protection
            </h2>
            <p className="text-slate-700 leading-relaxed">
              We comply with UK GDPR and the Data Protection Act 2018. Your personal
              and medical information is processed according to our{" "}
              <Link
                href="/privacy-policy"
                className="text-[#4041d1] hover:text-[#2a2bb8] underline transition-colors"
              >
                Privacy Policy
              </Link>
              . By submitting forms or booking appointments, you consent to our
              processing of your data as described there.
            </p>
          </motion.section>

          {/* Section 9 */}
          <motion.section variants={itemVariants} className="mb-8">
            <h2 className="text-2xl font-raleway font-semibold text-slate-900 mb-4">
              9. Third-Party Links
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Our website may contain links to third-party websites or resources.
              These are provided for your convenience only. We are not responsible for
              the content, accuracy, or privacy practices of these external sites.
            </p>
          </motion.section>

          {/* Section 10 */}
          <motion.section variants={itemVariants} className="mb-8">
            <h2 className="text-2xl font-raleway font-semibold text-slate-900 mb-4">
              10. Liability
            </h2>
            <p className="text-slate-700 mb-4">
              To the maximum extent permitted by UK law:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>
                We exclude all warranties, expressed or implied, regarding the
                accuracy, completeness, or suitability of the information on this
                website.
              </li>
              <li>
                We are not liable for any loss or damage arising from your use of, or
                reliance on, the website or its content.
              </li>
              <li>
                Nothing in these terms limits or excludes liability for death or
                personal injury caused by negligence, fraud, or other liability which
                cannot be excluded under UK law.
              </li>
            </ul>
          </motion.section>

          {/* Section 11 */}
          <motion.section variants={itemVariants} className="mb-8">
            <h2 className="text-2xl font-raleway font-semibold text-slate-900 mb-4">
              11. Changes to These Terms
            </h2>
            <p className="text-slate-700 leading-relaxed">
              We may update these Terms of Service from time to time. Any changes
              will be posted on this page with an updated &quot;Last updated&quot; date.
              Continued use of the website after changes are posted constitutes
              acceptance of the revised terms.
            </p>
          </motion.section>

          {/* Section 12 */}
          <motion.section variants={itemVariants} className="mb-8">
            <h2 className="text-2xl font-raleway font-semibold text-slate-900 mb-4">
              12. Governing Law
            </h2>
            <p className="text-slate-700 leading-relaxed">
              These Terms of Service are governed by and construed in accordance
              with the laws of England and Wales. Any disputes arising out of or in
              connection with these terms shall be subject to the exclusive
              jurisdiction of the courts of England and Wales.
            </p>
          </motion.section>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
