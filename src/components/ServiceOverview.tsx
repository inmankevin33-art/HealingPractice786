"use client";

import Image from "next/image";
import Link from "next/link";

type FeaturedTreatment = {
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
};

type AdditionalTreatment = {
  title: string;
  description: string;
  href: string;
};

// Birmingham-only content. The original ServiceOverview.tsx remains unchanged.
// Put these image files in /public/images/treatments/.
const featuredTreatments: FeaturedTreatment[] = [
  {
    title: "Penile Filler",
    description:
      "Doctor-led HA girth enhancement, with individual volume planning and aftercare.",
    href: "/birmingham/penis-enlargement",
    image: "/images/treatments/penile-filler-thumb.webp",
    imageAlt: "Medical illustration representing hyaluronic acid filler treatment",
  },
  {
    title: "Erectile Dysfunction",
    description:
      "Private ED assessment, including contributing factors and suitable treatment options.",
    href: "/birmingham/erectile-dysfunction",
    image: "/images/treatments/ed-thumb.webp",
    imageAlt: "Medical illustration representing erectile function and circulation",
  },
  {
    title: "Peyronie's Disease",
    description:
      "Assessment of penile curvature and plaque, with individual treatment discussion.",
    href: "/birmingham/peyronies-disease",
    image: "/images/treatments/peyronies-thumb.webp",
    imageAlt: "Medical illustration representing Peyronie's disease assessment",
  },
  {
    title: "P-Shot (PRP)",
    description:
      "A consultation-led discussion of penile PRP injections, suitability and evidence limits.",
    href: "/birmingham/p-shot",
    image: "/images/treatments/p-shot-shockwave-thumb.webp",
    imageAlt: "Platelet-rich plasma preparation in a clinical setting",
  },
  {
    title: "Shockwave Therapy",
    description:
      "Focused discussion of shockwave options for ED, including risks and evidence limitations.",
    href: "/birmingham/shockwave-therapy-erectile-dysfunction",
    image: "/images/treatments/shockwave-thumb.webp",
    imageAlt: "Shockwave therapy equipment in a medical treatment room",
  },
];

const additionalTreatments: AdditionalTreatment[] = [
  {
    title: "Women's Intimate Health",
    description:
      "Private consultations for vaginal dryness and other intimate health concerns.",
    href: "/birmingham/sexual-rejuvenation",
  },
  {
    title: "Hair Restoration",
    description:
      "Hair and scalp assessment with discussion of suitable injection-based options.",
    href: "/birmingham/hair-restoration",
  },
  {
    title: "Joint Injections",
    description:
      "Assessment of joint concerns and clinically appropriate injection options.",
    href: "/birmingham/joint-injections",
  },
  {
    title: "Facial Aesthetics",
    description:
      "Individualised facial aesthetics consultations and skin treatment options.",
    href: "/birmingham/facial-aesthetics",
  },
];

export default function BirminghamServiceOverview() {
  return (
    <div className="w-full font-inter">
      {/* Five image-led featured treatments. No Framer Motion or external scripts. */}
      <section
        aria-labelledby="birmingham-featured-services-heading"
        className="bg-[#0A1128] py-16 text-white md:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-indigo-200">
              Birmingham · Edgbaston
            </p>
            <h2
              id="birmingham-featured-services-heading"
              className="font-raleway text-3xl font-bold tracking-tight md:text-4xl"
            >
              Featured Treatments in Birmingham
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-200 md:text-base">
              Private, doctor-led consultations and carefully planned treatment
              options for men’s intimate health.
            </p>
          </div>

          {/* Three equally sized cards in the first desktop row; two centred below. */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-6">
            {featuredTreatments.map((treatment, index) => (
              <article
                key={treatment.title}
                className={`min-w-0 xl:col-span-2 ${
                  index === 3 ? "xl:col-start-2" : ""
                } ${index === 4 ? "xl:col-start-4" : ""}`}
              >
                {/* One link for the whole card: image, description and CTA. */}
                <Link
                  href={treatment.href}
                  prefetch={false}
                  className="group flex h-[390px] flex-col overflow-hidden rounded-3xl bg-white text-slate-900 shadow-sm transition-colors duration-200 hover:bg-slate-50 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-indigo-300 sm:h-[410px]"
                >
                  {/* Image occupies approximately the upper two-thirds. */}
                  <div className="relative h-[245px] w-full shrink-0 overflow-hidden bg-gradient-to-br from-[#263D67] via-[#172A50] to-[#0A1128] sm:h-[260px]">
                    {/* Neat fallback if a new image has not yet been uploaded. */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 flex items-center justify-center px-4 text-center text-xs font-semibold uppercase tracking-widest text-white/60"
                    >
                      Healing PRP Clinics
                    </div>
                    <Image
                      src={treatment.image}
                      alt={treatment.imageAlt}
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                      quality={65}
                      loading="lazy"
                      className="object-cover transition-transform duration-300 motion-safe:group-hover:scale-[1.025]"
                      onError={(event) => {
                        // Avoid the browser's broken-image icon in the preview.
                        event.currentTarget.style.display = "none";
                      }}
                    />
                  </div>

                  <div className="flex min-h-0 flex-1 flex-col px-5 py-4 sm:px-6 sm:py-5">
                    <h3 className="font-raleway text-xl font-bold leading-snug text-[#0A1128]">
                      {treatment.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-5 text-slate-600">
                      {treatment.description}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-2 pt-3 text-sm font-bold text-[#4041d1] group-hover:text-[#2a2bb8]">
                      Explore treatment <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Keep other services compact, with no icons or duplicate links. */}
      <section
        aria-labelledby="birmingham-additional-services-heading"
        className="bg-white py-16 md:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2
              id="birmingham-additional-services-heading"
              className="font-raleway text-2xl font-bold text-slate-900 md:text-3xl"
            >
              More Services at Our Birmingham Clinic
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
              Individual consultations across women's intimate health, hair,
              joint and facial treatments.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {additionalTreatments.map((treatment) => (
              <article key={treatment.title}>
                <Link
                  href={treatment.href}
                  prefetch={false}
                  className="group flex h-full min-h-[190px] flex-col rounded-2xl border border-slate-200 bg-slate-50 px-6 py-6 transition-colors duration-200 hover:border-indigo-200 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4041d1]"
                >
                  <h3 className="font-raleway text-lg font-bold text-[#0A1128]">
                    {treatment.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                    {treatment.description}
                  </p>
                  <span className="mt-5 text-sm font-bold text-[#4041d1] group-hover:text-[#2a2bb8]">
                    View treatment <span aria-hidden="true">→</span>
                  </span>
                </Link>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-5 text-slate-500">
            All treatments require individual consultation and suitability
            assessment. Risks, alternatives and evidence limitations are discussed;
            results vary.
          </p>
        </div>
      </section>
    </div>
  );
}
