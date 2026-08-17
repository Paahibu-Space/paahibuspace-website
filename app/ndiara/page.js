import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Ndiara",
  description:
    "Ndiara is Paahibu Space's digital business platform designed with women entrepreneurs in Ghana's informal sector — bringing together tools to sell, manage, learn and connect.",
};

const pillars = [
  {
    word: "Sell",
    description: "Sell and reach customers through digital channels.",
  },
  {
    word: "Manage",
    description: "Manage different aspects of their businesses using accessible business tools.",
  },
  {
    word: "Learn",
    description:
      "Learn through digital entrepreneurial education grounded in African expertise, experiences and business realities.",
  },
  {
    word: "Connect",
    description:
      "Connect with other entrepreneurs to exchange knowledge, experiences, opportunities and support.",
  },
];

const researchMethods = ["Surveys", "Focus Group Discussions", "Community Engagement", "Product Feedback"];

const academy = [
  {
    heading: "Learn",
    body: "Access practical entrepreneurial education grounded in African expertise and business realities — not imported frameworks.",
  },
  {
    heading: "Share",
    body: "Sign up as a peer facilitator and create practical learning content based on your own knowledge and experience.",
  },
  {
    heading: "Grow Together",
    body: "Build visibility around what you know. Create opportunities for your peers. Strengthen the ecosystem of knowledge and support.",
  },
];

const bePart = [
  {
    audience: "Are You a Woman Entrepreneur?",
    description:
      "Join Ndiara to access digital business tools, entrepreneurial learning and a community of women building businesses.",
    cta: "Join Ndiara",
    href: "/contact",
  },
  {
    audience: "Share What You Know",
    description:
      "Are you an entrepreneur using Ndiara with knowledge and experience that could help another business owner? Apply to become a Ndiara Academy Peer Facilitator and create practical learning content for fellow entrepreneurs.",
    cta: "Become a Peer Facilitator",
    href: "/contact",
  },
  {
    audience: "Partner With Ndiara",
    description:
      "We welcome partnerships with organisations, businesses, financial institutions, researchers and funders interested in women's entrepreneurship, digital and financial inclusion, locally relevant technology and economic opportunity.",
    cta: "Partner With Ndiara",
    href: "/contact",
  },
];

export default function NdiaraPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white dark:bg-background-dark border-b border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-14 md:pt-20 md:pb-16">
          <Link
            href="/our-work"
            className="inline-flex items-center gap-1.5 text-base text-secondary mb-10 hover:gap-2.5 transition-all"
          >
            <span className="material-symbols-outlined text-base">arrow_back</span>
            Our Work
          </Link>

          <div className="grid lg:grid-cols-[1fr_360px] gap-12 lg:gap-20 items-end">
            <div>
              <p className="text-xs font-bold tracking-[0.16em] uppercase text-secondary mb-5">
                Digital Business Platform for Women Entrepreneurs
              </p>
              <h1 className="font-display text-6xl md:text-9xl font-bold leading-[0.95] tracking-tight text-primary dark:text-white mb-6">
                Ndiara
              </h1>
              <p className="italic font-light text-xl md:text-2xl leading-[1.4] text-gray-500 dark:text-gray-400 max-w-lg">
                Built for the Way African Women Do Business
              </p>
            </div>
            <div className="border-l-2 border-secondary/20 pl-8 pb-2">
              <p className="text-base leading-[1.75] text-gray-600 dark:text-gray-300 mb-4">
                Ndiara is Paahibu Space&apos;s digital business platform designed with women entrepreneurs
                in Ghana&apos;s informal sector.
              </p>
              <p className="text-base leading-[1.75] text-gray-600 dark:text-gray-300">
                Women across Ghana are building businesses in trade, agriculture, food, fashion, beauty,
                retail and services. Yet many digital business tools and learning resources are
                fragmented, inaccessible or developed around business environments that do not reflect
                how they operate.
              </p>
              <p className="text-base leading-[1.75] text-gray-600 dark:text-gray-300 mt-4">
                Ndiara responds by building technology and entrepreneurial learning around the realities
                of African women entrepreneurs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform image + intro */}
      <section>
        <div className="grid lg:grid-cols-[560px_1fr] min-h-[320px] lg:min-h-[400px]">
          <div className="relative min-h-[280px] lg:min-h-full bg-primary">
            <Image
              src="/assets/images/programs/women-trained.png"
              alt="Women entrepreneurs in conversation"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 560px"
            />
            <div className="absolute inset-0 bg-primary/25 mix-blend-multiply" />
          </div>
          <div className="bg-primary px-6 py-14 md:px-14 md:py-16 flex flex-col justify-center">
            <p className="text-xs font-bold tracking-[0.16em] uppercase text-white/50 mb-6">
              What Ndiara Does
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-[1.2] tracking-tight text-white mb-6">
              Supporting Different Parts of Running a Business
            </h2>
            <p className="text-base leading-[1.75] text-white/75 max-w-md">
              Ndiara brings together practical tools that help women entrepreneurs:
            </p>
          </div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="bg-white dark:bg-surface-dark border-t border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-l border-t border-gray-200 dark:border-white/10">
            {pillars.map((pillar) => (
              <div
                key={pillar.word}
                className="border-r border-b border-gray-200 dark:border-white/10 p-7 pb-12"
              >
                <h3 className="text-4xl font-bold tracking-tight mb-5 leading-none text-primary dark:text-white">
                  {pillar.word}
                </h3>
                <p className="text-base leading-[1.7] text-gray-600 dark:text-gray-300">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Designed With Women Entrepreneurs */}
      <section className="border-y border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-xs font-bold tracking-[0.16em] uppercase text-gray-500 dark:text-gray-400 mb-5">
              Co-Design &amp; Research
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight text-primary dark:text-white mb-6">
              Designed With Women Entrepreneurs
            </h2>
            <p className="text-base leading-[1.75] text-gray-600 dark:text-gray-300 mb-4">
              Ndiara has been shaped through direct engagement with women entrepreneurs.
            </p>
            <p className="text-base leading-[1.7] text-gray-500 dark:text-gray-400 mb-4">
              Surveys, focus group discussions, community engagement and product feedback have helped us
              understand the challenges women encounter in accessing finance, acquiring customers,
              managing businesses, using digital tools and finding relevant entrepreneurial education.
            </p>
            <p className="text-base leading-[1.7] text-gray-500 dark:text-gray-400">
              Their experiences continue to inform what we build and how Ndiara evolves.
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {researchMethods.map((method) => (
              <span
                key={method}
                className="text-base px-4 py-2 rounded-full border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300"
              >
                {method}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Ndiara Academy */}
      <section className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <p className="text-xs font-bold tracking-[0.16em] uppercase text-white/50 mb-5">
              Learning &amp; Knowledge Sharing
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight text-white mb-6">
              Ndiara Academy
            </h2>
            <p className="text-base leading-[1.75] text-white/80 mb-4">
              Ndiara Academy creates access to practical entrepreneurial learning rooted in African
              expertise and the realities of doing business within our communities.
            </p>
            <p className="text-base leading-[1.75] text-white/65 mb-4">
              It is also designed to recognise that entrepreneurs themselves hold valuable knowledge.
              Women entrepreneurs using Ndiara can sign up as peer facilitators, creating relevant
              learning content based on their knowledge and experience for other entrepreneurs on the
              platform.
            </p>
            <p className="text-base leading-[1.75] text-white/65">
              This creates opportunities for entrepreneurs not only to learn, but also to share
              expertise, contribute to the growth of their peers and build visibility around what they
              know.
            </p>
          </div>
          <div className="flex flex-col gap-4 justify-center">
            {academy.map((item) => (
              <div
                key={item.heading}
                className="bg-white/5 border border-white/10 rounded-lg px-7 py-6 flex gap-5 items-start"
              >
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                    {item.heading}
                  </h3>
                  <p className="text-base leading-[1.65] text-white/65">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support note */}
      <section className="bg-background-light dark:bg-white/5 border-y border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
          <span className="text-xs font-bold tracking-[0.14em] uppercase text-secondary flex-shrink-0">
            Support
          </span>
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            The development of Ndiara has received support through the{" "}
            <strong className="text-gray-700 dark:text-gray-200 font-medium">
              EU Youth Empowerment Fund
            </strong>
            , enabling Paahibu Space to research, co-design and develop the platform alongside women
            entrepreneurs.
          </p>
        </div>
      </section>

      {/* Three CTAs */}
      <section className="bg-white dark:bg-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <p className="text-xs font-bold tracking-[0.16em] uppercase text-gray-500 dark:text-gray-400 mb-12">
            Be Part of Ndiara
          </p>
          <div className="grid md:grid-cols-3 border border-gray-200 dark:border-white/10">
            {bePart.map((item, i) => (
              <div
                key={item.audience}
                className={`p-9 flex flex-col gap-5 ${
                  i < 2 ? "border-b md:border-b-0 md:border-r border-gray-200 dark:border-white/10" : ""
                }`}
              >
                <h3 className="text-xl font-bold leading-[1.2] tracking-tight text-primary dark:text-white mb-4">
                  {item.audience}
                </h3>
                <p className="text-base leading-[1.7] text-gray-500 dark:text-gray-400 mb-6 flex-1">
                  {item.description}
                </p>
                <a
                  href={item.href}
                  className="inline-flex items-center gap-1.5 text-base font-medium border border-gray-300 dark:border-white/20 text-primary dark:text-white rounded px-5 py-2.5 transition-colors hover:bg-primary hover:text-white hover:border-primary dark:hover:bg-white dark:hover:text-primary self-start"
                >
                  {item.cta}
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
