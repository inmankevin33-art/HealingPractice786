import Link from "next/link";

type ClinicalArticle = {
  category: string;
  title: string;
  description: string;
  href: string;
};

// Birmingham-only, curated articles. Use confirmed published URLs.
// Update this list when you want to feature a different article.
const articles: ClinicalArticle[] = [
  {
    category: "Penile filler · Clinical observations",
    title: "Will Penile Filler Look and Feel Natural?",
    description:
      "Dr Abdi explains how anatomy, HA filler selection, volume planning and aftercare can influence appearance and feel, drawing on clinical observations.",
    href: "/blog/does-penile-filler-feel-natural-birmingham",
  },
  {
    category: "Erectile dysfunction · Medical assessment",
    title: "Diabetes and Erectile Dysfunction in Birmingham",
    description:
      "How diabetes can affect erections, why assessment matters and which treatment options may be appropriate.",
    href: "/blog/diabetes-erectile-dysfunction-birmingham",
  },
  {
    category: "Peyronie's disease · Emerging evidence",
    title: "Hyaluronic Acid Injections for Peyronie's Disease",
    description:
      "A balanced look at developing research, treatment limitations and early observations from clinical practice.",
    href: "/blog/hyaluronic-acid-injections-peyronies-disease",
  },
  {
    category: "Penile filler · Patient education",
    title: "Penile Filler Before & After: What to Expect",
    description:
      "Understand realistic girth-enhancement expectations, what photographs can show and why technique and aftercare matter.",
    href: "/blog/penile-filler-before-after-birmingham",
  },
  {
    category: "P-Shot · Clinical insights",
    title: "P-Shot for Erectile Dysfunction: Can It Help?",
    description:
      "An explanation of PRP, clinical suitability, patient-reported experiences and the limits of current evidence.",
    href: "/blog/p-shot-erectile-dysfunction-birmingham",
  },
  {
    category: "Women's intimate health · Treatment options",
    title: "Vaginal Dryness: Understanding Treatment Options",
    description:
      "Established and emerging options for vaginal dryness, including local oestrogen, hyaluronic acid and the O-Shot.",
    href: "/blog/vaginal-dryness-treatment-options",
  },
];

export default function BirminghamClinicalInsights() {
  return (
    <section
      id="clinical-insights"
      aria-labelledby="clinical-insights-heading"
      className="relative overflow-hidden bg-[#0A1128] py-16 font-inter md:py-24"
    >
      {/* Matches the original premium PRP section without animations or extra JS. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 8%, rgba(64,65,209,0.22), transparent 42%), radial-gradient(circle at 90% 90%, rgba(64,65,209,0.1), transparent 38%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
          <span className="inline-flex rounded-full border border-[#4041d1]/35 bg-[#4041d1]/20 px-4 py-2 font-raleway text-[11px] font-bold uppercase tracking-[0.18em] text-[#AAB9FF]">
            Doctor-led insights · Research · Patient education
          </span>
          <h2
            id="clinical-insights-heading"
            className="mt-5 font-raleway text-3xl font-bold tracking-tight text-white md:text-4xl"
          >
            Clinical Insights &amp; Evidence
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
            Explore practical treatment guidance, published evidence and clinical
            observations from Dr Syed Abdi. Understand the questions that matter
            before deciding whether a treatment may be suitable for you.
          </p>
        </div>

        {/* Mobile-only swipe hint */}
        <div className="mb-3 flex items-center justify-end md:hidden">
          <span className="text-xs font-semibold tracking-wide text-[#AAB9FF]">
            Swipe to explore <span aria-hidden="true">→</span>
          </span>
        </div>

        {/* Horizontal scroll-snap on mobile; standard 2/3-col grid on md+ */}
        <div className="-mx-4 flex snap-x snap-mandatory scroll-pl-4 gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-6 sm:scroll-pl-6 sm:px-6 md:mx-0 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3 lg:gap-6">
          {articles.map((article) => (
            <article
              key={article.href}
              className="group flex w-[84%] max-w-[340px] shrink-0 snap-start flex-col rounded-3xl border border-white/15 bg-white/[0.06] p-6 transition-colors duration-200 hover:border-[#889BFF]/50 hover:bg-white/[0.09] md:h-full md:w-auto md:max-w-none"
            >
              <p className="font-raleway text-[11px] font-bold uppercase tracking-[0.15em] text-[#AAB9FF]">
                {article.category}
              </p>
              <h3 className="mt-4 font-raleway text-xl font-bold leading-snug text-white">
                {article.title}
              </h3>
              <p className="mb-6 mt-3 flex-1 text-sm leading-relaxed text-slate-300">
                {article.description}
              </p>
              <Link
                href={article.href}
                className="inline-flex w-fit items-center gap-2 rounded-md font-inter text-sm font-bold text-[#BAC7FF] underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#BAC7FF]"
                aria-label={`Read article: ${article.title}`}
              >
                Read article <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 text-center md:flex-row md:text-left">
          <p className="max-w-2xl text-xs leading-relaxed text-slate-400">
            Clinical observations are not the same as controlled research.
            Evidence, suitability and outcomes vary by treatment and individual.
          </p>
          <Link
            href="/blog"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-[#8F9EFF]/40 bg-[#4041d1] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#3435bb] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            View all clinical articles <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
