"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
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
              Privacy Policy
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
              This Privacy Policy explains how Healing-PRP Clinics (&quot;we&quot;,
              &quot;us&quot;, &quot;our&quot;) collects, uses, and protects your personal data
              when you visit our website healing-prp.co.uk or use our services in
              clinic.
            </p>
          </motion.div>

          {/* Section 1 */}
          <motion.section variants={itemVariants} className="mb-8">
            <h2 className="text-2xl font-raleway font-semibold text-slate-900 mb-4">
              1. Who We Are
            </h2>
            <div className="space-y-2 text-slate-700">
              <p>
                <strong>Data Controller:</strong> Healing-PRP Clinics
              </p>
              <p>
                <strong>Address:</strong> 21 Victoria Street, St Albans, AL1 3JJ
              </p>
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
            </div>
          </motion.section>

          {/* Section 2 */}
          <motion.section variants={itemVariants} className="mb-8">
            <h2 className="text-2xl font-raleway font-semibold text-slate-900 mb-4">
              2. What Data We Collect
            </h2>

            <h3 className="text-xl font-raleway font-medium text-slate-800 mb-3 mt-6">
              2.1 Data you provide directly
            </h3>
            <p className="text-slate-700 mb-4">
              We may collect the following information when you contact us or book
              an appointment:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-6">
              <li>Name and contact details (email address, phone number, postal address)</li>
              <li>Date of birth and basic demographic information</li>
              <li>
                Medical history, medications, allergies, and relevant health
                information
              </li>
              <li>
                Payment-related information (e.g. payment confirmations – we do not
                store full card details)
              </li>
              <li>
                Any other information you choose to provide in forms or
                correspondence
              </li>
            </ul>

            <h3 className="text-xl font-raleway font-medium text-slate-800 mb-3 mt-6">
              2.2 Data collected automatically
            </h3>
            <p className="text-slate-700 mb-4">
              When you use our website we may automatically collect:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>IP address and general location (city/region level)</li>
              <li>Device and browser type</li>
              <li>Pages visited, time spent on pages, and referring sites</li>
              <li>
                Cookie data (see our Cookie Policy for more details)
              </li>
            </ul>
          </motion.section>

          {/* Section 3 */}
          <motion.section variants={itemVariants} className="mb-8">
            <h2 className="text-2xl font-raleway font-semibold text-slate-900 mb-4">
              3. Legal Bases for Processing
            </h2>
            <p className="text-slate-700 mb-4">
              We process your personal data under the UK GDPR on the following
              legal bases:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>
                <strong>Consent</strong> – e.g. when you opt in to receive marketing
                emails.
              </li>
              <li>
                <strong>Contract</strong> – to provide consultations and treatments
                you have booked.
              </li>
              <li>
                <strong>Legal obligation</strong> – to meet regulatory or tax
                requirements.
              </li>
              <li>
                <strong>Legitimate interests</strong> – e.g. to improve our services
                and protect our clinic from fraud.
              </li>
              <li>
                <strong>Provision of healthcare</strong> – for processing health data
                as part of delivering safe medical care.
              </li>
            </ul>
          </motion.section>

          {/* Section 4 */}
          <motion.section variants={itemVariants} className="mb-8">
            <h2 className="text-2xl font-raleway font-semibold text-slate-900 mb-4">
              4. How We Use Your Data
            </h2>
            <p className="text-slate-700 mb-4">
              We use your personal data to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>Arrange and manage consultations and treatments</li>
              <li>
                Assess your suitability for treatment and maintain accurate
                clinical records
              </li>
              <li>Respond to enquiries and customer service requests</li>
              <li>Send appointment reminders and important service messages</li>
              <li>Process payments and manage accounts</li>
              <li>
                Comply with legal, regulatory, and clinical governance
                requirements
              </li>
              <li>
                Improve our website and services through anonymised analytics
              </li>
              <li>
                Send occasional marketing communications (only where you have
                consented)
              </li>
            </ul>
          </motion.section>

          {/* Section 5 */}
          <motion.section variants={itemVariants} className="mb-8">
            <h2 className="text-2xl font-raleway font-semibold text-slate-900 mb-4">
              5. Sharing Your Data
            </h2>
            <p className="text-slate-700 mb-4">
              We do not sell your data. We may share your data with:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>
                Healthcare professionals involved in your care within our clinic
              </li>
              <li>
                IT, hosting, and practice management providers who support our
                systems
              </li>
              <li>Payment processors and banks (for payment purposes)</li>
              <li>
                Regulators, insurers, or legal advisers where we are required to do
                so by law
              </li>
            </ul>
            <p className="text-slate-700 mt-4">
              Where third parties process data on our behalf, they are required to
              keep it secure and only process it according to our instructions.
            </p>
          </motion.section>

          {/* Section 6 */}
          <motion.section variants={itemVariants} className="mb-8">
            <h2 className="text-2xl font-raleway font-semibold text-slate-900 mb-4">
              6. International Transfers
            </h2>
            <p className="text-slate-700">
              If any of our service providers transfer data outside the UK, we will
              ensure that appropriate safeguards (such as UK-approved standard
              contractual clauses) are in place.
            </p>
          </motion.section>

          {/* Section 7 */}
          <motion.section variants={itemVariants} className="mb-8">
            <h2 className="text-2xl font-raleway font-semibold text-slate-900 mb-4">
              7. Data Retention
            </h2>
            <p className="text-slate-700 mb-4">
              We keep your data only for as long as necessary for the purposes
              described in this policy and in accordance with professional and legal
              requirements:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>
                Clinical records are typically retained for a minimum period
                required by medical regulators.
              </li>
              <li>
                Enquiry and non-clinical data are usually retained for a shorter
                period, unless needed for legal reasons.
              </li>
            </ul>
          </motion.section>

          {/* Section 8 */}
          <motion.section variants={itemVariants} className="mb-8">
            <h2 className="text-2xl font-raleway font-semibold text-slate-900 mb-4">
              8. Your Rights
            </h2>
            <p className="text-slate-700 mb-4">
              Under UK data protection law you have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
              <li>Access a copy of your personal data</li>
              <li>Request correction of inaccurate or incomplete data</li>
              <li>Request deletion of your data (where applicable)</li>
              <li>Restrict or object to certain types of processing</li>
              <li>Withdraw consent where processing is based on consent</li>
              <li>Data portability (where applicable)</li>
            </ul>
            <p className="text-slate-700">
              To exercise these rights, please contact us at{" "}
              <a
                href="mailto:info@healing-prp.co.uk"
                className="text-[#4041d1] hover:text-[#2a2bb8] underline transition-colors"
              >
                info@healing-prp.co.uk
              </a>
              . We may need to verify your identity before responding to your
              request.
            </p>
          </motion.section>

          {/* Section 9 */}
          <motion.section variants={itemVariants} className="mb-8">
            <h2 className="text-2xl font-raleway font-semibold text-slate-900 mb-4">
              9. Marketing Communications
            </h2>
            <p className="text-slate-700">
              If you have opted in, we may send you occasional emails or messages
              about clinic updates, new treatments, or special offers. You can
              unsubscribe at any time by using the link in the email or by
              contacting us.
            </p>
          </motion.section>

          {/* Section 10 */}
          <motion.section variants={itemVariants} className="mb-8">
            <h2 className="text-2xl font-raleway font-semibold text-slate-900 mb-4">
              10. Security
            </h2>
            <p className="text-slate-700">
              We take reasonable technical and organisational measures to protect
              your data against unauthorised access, loss, or misuse. However, no
              system is fully secure and we cannot guarantee absolute security of
              information transmitted over the internet.
            </p>
          </motion.section>

          {/* Section 11 */}
          <motion.section variants={itemVariants} className="mb-8">
            <h2 className="text-2xl font-raleway font-semibold text-slate-900 mb-4">
              11. Cookies
            </h2>
            <p className="text-slate-700">
              Our website uses cookies and similar technologies. For more
              information, please see our{" "}
              <Link
                href="/cookie-policy"
                className="text-[#4041d1] hover:text-[#2a2bb8] underline transition-colors"
              >
                Cookie Policy
              </Link>
              .
            </p>
          </motion.section>

          {/* Section 12 */}
          <motion.section variants={itemVariants} className="mb-8">
            <h2 className="text-2xl font-raleway font-semibold text-slate-900 mb-4">
              12. Contact and Complaints
            </h2>
            <p className="text-slate-700 mb-4">
              If you have any questions or concerns about this Privacy Policy or
              how we handle your data, please contact:
            </p>
            <div className="space-y-2 text-slate-700 mb-4">
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:info@healing-prp.co.uk"
                  className="text-[#4041d1] hover:text-[#2a2bb8] underline transition-colors"
                >
                  info@healing-prp.co.uk
                </a>
              </p>
              <p>
                <strong>Address:</strong> 21 Victoria Street, St Albans, AL1 3JJ
              </p>
            </div>
            <p className="text-slate-700">
              You also have the right to complain to the UK Information
              Commissioner&apos;s Office (ICO) if you are unhappy with how we use your
              data:{" "}
              <a
                href="https://ico.org.uk"
                className="text-[#4041d1] hover:text-[#2a2bb8] underline transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://ico.org.uk
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
