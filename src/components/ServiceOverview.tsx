"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  FaArrowRight,
  FaExpandArrowsAlt,
  FaHeart,
  FaStethoscope,
  FaSyringe,
  FaVenusMars,
  FaRunning,
  FaSmile,
  FaMapMarkerAlt,
} from "react-icons/fa";

type TreatmentLink = {
  label: string;
  href: string;
};

type Treatment = {
  title: string;
  description: string;
  href: string;
  eyebrow: string;
  icon: IconType;
  iconStyle: string;
  links: TreatmentLink[];
};

type FeaturedTreatment = Treatment & {
  image: string;
  imageAlt: string;
};

// All URLs are explicit because this component is exclusive to Birmingham.
// Images live in public/images/treatments/ and are lazy-loaded below the hero.
const featuredTreatments: FeaturedTreatment[] = [
  {
    title: "Penile Filler",
    eyebrow: "Girth enhancement",
    image: "/images/treatments/penile-filler-thumb.webp",
    imageAlt: "Illustration representing hyaluronic acid filler treatment",
    description:
      "Doctor-led hyaluronic acid (HA) penile filler with individual assessment, proportionate volume planning, careful placement and aftercare.",
    href: "/birmingham/penis-enlargement",
    icon: FaExpandArrowsAlt,
    iconStyle: "bg-blue-100 text-[#4041d1]",
    links: [
      {
        label: "Natural look & feel guide",
        href: "/blog/does-penile-filler-feel-natural-birmingham",
      },
      {
        label: "Before-and-after expectations",
        href: "/blog/penile-filler-before-after-birmingham",
      },
    ],
  },
  {
    title: "Erectile Dysfunction",
    eyebrow: "Men's intimate health",
    image: "/images/treatments/ed-thumb.webp",
    imageAlt: "Medical illustration representing erectile function and circulation",
    description:
      "Private medical assessment of erection difficulties, including possible contributing factors, medication options and other appropriate treatments.",
    href: "/birmingham/erectile-dysfunction",
    icon: FaStethoscope,
    iconStyle: "bg-indigo-100 text-indigo-700",
    links: [
      {
        label: "Shockwave therapy",
        href: "/birmingham/shockwave-therapy-erectile-dysfunction",
      },
      { label: "P-Shot", href: "/birmingham/p-shot" },
    ],
  },
  {
    title: "Peyronie's Disease",
    eyebrow: "Curvature & plaque assessment",
    image: "/images/treatments/peyronies-thumb.webp",
    imageAlt: "Illustration representing clinical assessment of Peyronie's disease",
    description:
      "Individual assessment of penile curvature, plaque and erectile function, including discussion of HA plaque injections, PRP and shockwave where appropriate, with evidence limitations explained.",
    href: "/birmingham/peyronies-disease",
    icon: FaHeart,
    iconStyle: "bg-sky-100 text-sky-700",
    links: [
      {
        label: "Explore Peyronie's care",
        href: "/birmingham/peyronies-disease",
      },
    ],
  },
  {
    title: "P-Shot & Shockwave",
    eyebrow: "Selected ED treatment options",
    image: "/images/treatments/p-shot-shockwave-thumb.webp",
    imageAlt: "Illustration of platelet-rich plasma preparation for P-Shot treatment",
    description:
      "Consultation-led discussion of PRP injections and low-intensity shockwave therapy, including suitability, potential risks and the limits of current evidence.",
    href: "/birmingham/p-shot",
    icon: FaSyringe,
    iconStyle: "bg-teal-100 text-teal-700",
    links: [
      { label: "P-Shot information", href: "/birmingham/p-shot" },
      {
        label: "Shockwave information",
        href: "/birmingham/shockwave-therapy-erectile-dysfunction",
      },
    ],
  },
];

const additionalTreatments: Treatment[] = [
  {
    title: "Women's Intimate Health",
    eyebrow: "Discreet, individual care",
    description:
      "Consultations for vaginal dryness and other intimate health concerns, with treatment options discussed according to clinical suitability.",
    href: "/birmingham/sexual-rejuvenation",
    icon: FaVenusMars,
    iconStyle: "bg-rose-50 text-rose-600",
    links: [
      { label: "O-Shot", href: "/birmingham/o-shot" },
      { label: "Vaginal dryness", href: "/birmingham/vaginal-dryness" },
    ],
  },
  {
    title: "Hair Restoration",
    eyebrow: "Hair & scalp",
    description:
      "Individual hair-loss and scalp assessment, with PRP and selected scalp-injection options discussed where appropriate.",
    href: "/birmingham/hair-restoration",
    icon: FaSyringe,
    iconStyle: "bg-teal-50 text-teal-700",
    links: [{ label: "Hair treatments", href: "/birmingham/hair-restoration" }],
  },
  {
    title: "Joint Injections",
    eyebrow: "Musculoskeletal care",
    description:
      "Assessment and selected injection options for joint pain, including PRP or corticosteroid injections when clinically appropriate.",
    href: "/birmingham/joint-injections",
    icon: FaRunning,
    iconStyle: "bg-indigo-50 text-indigo-600",
    links: [{ label: "Joint treatments", href: "/birmingham/joint-injections" }],
  },
  {
    title: "Facial Aesthetics",
    eyebrow: "Skin & appearance",
    description:
      "Personalised facial aesthetics consultations, including skin boosters, polynucleotides and selected regenerative treatments.",
    href: "/birmingham/facial-aesthetics",
    icon: FaSmile,
    iconStyle: "bg-amber-50 text-amber-700",
    links: [
      { label: "Facial treatments", href: "/birmingham/facial-aesthetics" },
    ],
  },
];

export default function BirminghamServiceOverview() {
  return (
    <section
      aria-labelledby="birmingham-services-heading"
      className="relative overflow-hidden bg-white py-20 md:py-24 font-inter"
    >
      <div className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-blue-50/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-3xl text-center md:mb-16"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#4041d1]">
            <FaMapMarkerAlt aria-hidden="true" /> Birmingham · Edgbaston
          </span>
          <h2
            id="birmingham-services-heading"
            className="mb-5 font-raleway text-3xl font-bold tracking-tight text-slate-900 md:text-5xl"
          >
            Doctor-Led Treatments in Birmingham
          </h2>
          <p className="text-base leading-relaxed text-slate-600 md:text-lg">
            Private, discreet consultations for men’s and women’s intimate health,
            alongside selected regenerative, joint and aesthetic treatments.
            Explore the options below to understand suitability, evidence and
            what to expect.
          </p>
        </motion.div>

        {/* Featured services: the main treatment pathways */}
        <div className="mb-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {featuredTreatments.map((treatment, index) => {
            const Icon = treatment.icon;
            return (
              <motion.article
                key={treatment.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -5 }}
                className={`group flex h-full flex-col rounded-[2rem] border p-7 shadow-sm transition-shadow duration-300 hover:shadow-xl md:p-9 ${
                  index === 0
                    ? "border-blue-200 bg-gradient-to-br from-blue-50 via-white to-white"
                    : "border-slate-200 bg-white"
                }`}
              >
                {/* Compact treatment thumbnail: lazy-loaded and optimised by Next.js */}
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div className="flex min-w-0 flex-col items-start gap-3">
                    <span
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl ${treatment.iconStyle}`}
                    >
                      <Icon aria-hidden="true" />
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                      {treatment.eyebrow}
                    </span>
                  </div>
                  <div className="h-24 w-36 shrink-0 overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-sm sm:h-[107px] sm:w-40">
                    <Image
                      src={treatment.image}
                      alt={treatment.imageAlt}
                      width={480}
                      height={320}
                      sizes="(max-width: 639px) 144px, 160px"
                      quality={70}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                </div>

                <h3 className="mb-3 font-raleway text-2xl font-bold text-slate-900">
                  <Link
                    href={treatment.href}
                    className="transition-colors hover:text-[#4041d1] focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4041d1]"
                  >
                    {treatment.title}
                  </Link>
                </h3>
                <p className="mb-6 flex-grow text-sm leading-7 text-slate-600 md:text-base">
                  {treatment.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {treatment.links.map((link) => (
                    <Link
                      key={`${treatment.title}-${link.href}`}
                      href={link.href}
                      className="rounded-lg border border-blue-100 bg-blue-50/60 px-3 py-2 text-xs font-semibold text-[#4041d1] transition-colors hover:border-blue-200 hover:bg-blue-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4041d1]"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                <Link
                  href={treatment.href}
                  className="inline-flex w-fit items-center gap-2 rounded-xl bg-[#4041d1] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#2a2bb8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4041d1]"
                >
                  Explore treatment
                  <FaArrowRight
                    aria-hidden="true"
                    className="text-xs transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </motion.article>
            );
          })}
        </div>

        {/* Supporting services: clearly visible without competing with the featured cards */}
        <div className="mb-8 text-center">
          <h2 className="mb-3 font-raleway text-2xl font-bold text-slate-900 md:text-3xl">
            More Services at Our Birmingham Clinic
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
            Our broader treatment range includes women’s intimate health, hair,
            joints and facial aesthetics.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {additionalTreatments.map((treatment, index) => {
            const Icon = treatment.icon;
            return (
              <motion.article
                key={treatment.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                whileHover={{ y: -4 }}
                className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-slate-50/50 p-6 shadow-sm transition-all duration-300 hover:border-blue-200 hover:bg-white hover:shadow-lg"
              >
                <span
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl text-xl ${treatment.iconStyle}`}
                >
                  <Icon aria-hidden="true" />
                </span>
                <h3 className="mb-3 font-raleway text-xl font-bold text-slate-900">
                  <Link href={treatment.href} className="hover:text-[#4041d1]">
                    {treatment.title}
                  </Link>
                </h3>
                <p className="mb-5 flex-grow text-sm leading-6 text-slate-600">
                  {treatment.description}
                </p>
                <div className="mb-5 flex flex-wrap gap-x-3 gap-y-2">
                  {treatment.links.map((link) => (
                    <Link
                      href={link.href}
                      key={`${treatment.title}-${link.href}`}
                      className="text-xs font-semibold text-[#4041d1] underline-offset-4 hover:underline"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <Link
                  href={treatment.href}
                  className="inline-flex w-fit items-center gap-2 text-sm font-bold text-[#4041d1] hover:text-[#2a2bb8]"
                >
                  View treatment <FaArrowRight aria-hidden="true" className="text-xs" />
                </Link>
              </motion.article>
            );
          })}
        </div>

        <p className="mx-auto mt-9 max-w-3xl text-center text-xs leading-relaxed text-slate-500">
          All treatments are subject to an individual consultation and suitability
          assessment. Benefits, risks, alternatives and evidence limitations are
          discussed before treatment; results vary.
        </p>
      </div>
    </section>
  );
}
