import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Our Work",
  description:
    "Our programmes and platforms emerge from challenges, opportunities and ideas identified through our work with women, girls, young people, schools, entrepreneurs and communities — from Digital Walansi and Ndiara to the Baabuh Enterprise Fund.",
};

const walansiTags = ["AI Literacy", "Digital Safety", "MIL", "TFGBV Prevention", "Peer Learning"];

const skillsMeta = [
  { label: "Programme Start", value: "February 2027" },
  { label: "Duration", value: "12 Weeks" },
  { label: "Format", value: "Hybrid" },
  { label: "Cohort", value: "Skills2Work Cohort One" },
];

export default function OurWorkPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-white dark:bg-background-dark border-b border-gray-100 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="material-symbols-outlined text-base">chevron_right</span>
            <span className="font-semibold text-primary dark:text-secondary">Our Work</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-white dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 md:pt-20 md:pb-20">

          <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight text-primary dark:text-white max-w-3xl mb-10">
            Turning Community Priorities Into Action
          </h1>
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 max-w-3xl">
            <p className="text-base leading-[1.7] text-gray-600 dark:text-gray-300">
              Our programmes and platforms emerge from challenges, opportunities and ideas identified
              through our work with women, girls, young people, schools, entrepreneurs and communities.
            </p>
            <p className="text-base leading-[1.7] text-gray-600 dark:text-gray-300">
              They combine different elements of our work, from technology and education to enterprise
              development, evidence generation, leadership and community participation.
            </p>
          </div>
        </div>
      </section>

      {/* Evidence & Advocacy */}
      <section className="bg-background-light dark:bg-white/5 border-y border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-14">
          <span className="text-xs font-bold tracking-[0.14em] uppercase text-gray-500 dark:text-gray-400 block mb-4">
            Evidence & Advocacy
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-bold leading-snug tracking-tight text-primary dark:text-white max-w-2xl mb-5">
            Using community evidence to strengthen advocacy and connect women, girls and young people to
            leadership and decision-making spaces.
          </h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-10">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              We generate evidence from our work with communities and create opportunities for young
              people and women to contribute their knowledge and experiences to decisions that affect
              them.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Research and learning also inform the programmes and technologies we develop, helping us
              understand what works, what needs to change and where new approaches are needed.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Work label */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-6">
        <p className="text-xs font-bold tracking-[0.16em] uppercase text-gray-500 dark:text-gray-400">
          Featured Work
        </p>
      </div>

      {/* Programme 1: Digital Walansi */}
      <article className="border-y border-gray-200 dark:border-white/10">
        <div className="bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <span className="text-xs font-semibold tracking-[0.14em] uppercase text-white/70">
              Digital Education, Safety &amp; Responsible AI
            </span>
          </div>
        </div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[420px_1fr] min-h-[440px]">
          <div className="relative min-h-[280px] lg:min-h-full bg-primary/90">
            <Image
              src="/assets/images/programs/walansi/walansi_teamwork.webp"
              alt="Digital Walansi Fellows working together with secondary-school students"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 420px"
            />
          </div>
          <div className="bg-white dark:bg-surface-dark px-6 py-14 md:px-16 md:py-16 flex flex-col justify-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-[1.08] tracking-tight text-primary dark:text-white mb-6">
              Digital Walansi
            </h2>
            <p className="text-base leading-[1.75] text-gray-600 dark:text-gray-300 mb-4 max-w-md">
              A youth-led digital education and safety programme that equips young women,
              secondary-school students and teachers in underserved communities to participate safely,
              critically and productively in an increasingly AI-driven digital world.
            </p>
            <p className="text-base leading-[1.7] text-gray-500 dark:text-gray-400 mb-4 max-w-md">
              The programme trains young women as Digital Walansi Fellows in digital skills and safety,
              AI literacy, Media and Information Literacy (MIL), and the prevention of and response to
              Technology-Facilitated Gender-Based Violence (TFGBV).
            </p>
            <p className="text-base leading-[1.7] text-gray-500 dark:text-gray-400 mb-8 max-w-md">
              Fellows work with secondary schools, facilitating learning with students and teachers and
              supporting Digital Walansi Clubs that provide sustained spaces for peer learning, digital
              leadership and responsible technology use.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {walansiTags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium tracking-wide px-3 py-1.5 rounded-full bg-primary/5 text-primary dark:bg-white/10 dark:text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
            <Link
              href="/digital-walansi-program"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary dark:text-white hover:gap-3 transition-all self-start"
            >
              Explore Digital Walansi
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>
        </div>
      </article>

      {/* Programme 2: Ndiara */}
      <article className="bg-background-light dark:bg-background-dark border-b border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_380px] min-h-[480px]">
            <div className="py-14 lg:py-16 lg:pr-16 flex flex-col justify-center lg:border-r border-secondary/15">
              <p className="text-xs font-bold tracking-[0.16em] uppercase text-secondary mb-5">
                Digital Business Platform for Women Entrepreneurs
              </p>
              <h2 className="font-display text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight text-primary dark:text-white mb-6">
                Ndiara
              </h2>
              <p className="text-base leading-[1.75] text-gray-600 dark:text-gray-300 mb-4 max-w-lg">
                Ndiara is a digital business platform designed with women entrepreneurs in Ghana&apos;s
                informal sector.
              </p>
              <p className="text-base leading-[1.75] text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
                It brings together practical tools that help women sell, manage their businesses, access
                entrepreneurial education grounded in African expertise and business realities, and
                connect with other entrepreneurs.
              </p>
              <Link
                href="/ndiara"
                className="inline-flex items-center gap-2 text-sm font-bold text-white bg-secondary px-6 py-3 rounded hover:opacity-90 transition-opacity self-start"
              >
                Explore Ndiara
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>
            <div className="relative min-h-[280px] lg:min-h-full">
              <Image
                src="/assets/images/programs/women-trained.png"
                alt="A woman entrepreneur selling goods at market"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 380px"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
            </div>
          </div>
        </div>
      </article>

      {/* Programme 3: Baabuh Enterprise Fund */}
      <article className="border-b border-gray-200 dark:border-white/10 bg-white dark:bg-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">
            <div>
              <p className="text-xs font-bold tracking-[0.16em] uppercase text-gray-500 dark:text-gray-400 mb-5">
                Expanding Access to Capital and Enterprise Support
              </p>
              <h2 className="font-display text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight text-primary dark:text-white">
                Baabuh Enterprise Fund
              </h2>
            </div>
            <div className="pt-1">
              <p className="text-base leading-[1.75] text-gray-600 dark:text-gray-300 mb-5">
                The Baabuh Enterprise Fund supports women entrepreneurs with access to enterprise
                financing alongside practical business-development support.
              </p>
              <p className="text-base leading-[1.7] text-gray-500 dark:text-gray-400 mb-5">
                The Fund responds to barriers that can prevent promising women-led businesses from
                growing, including limited access to appropriate capital, business systems,
                formalisation support, relevant knowledge and networks.
              </p>
              <p className="text-base leading-[1.7] text-gray-500 dark:text-gray-400 mb-8">
                The Fund&apos;s work is strengthened through support and collaboration with partners,
                including Nuvori Capital.
              </p>
              <a
                href="#baabuh-enterprise-fund"
                className="inline-flex items-center gap-2 text-sm font-bold text-primary dark:text-white hover:gap-3 transition-all"
              >
                Explore Baabuh Enterprise Fund
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* Baabuh Enterprise Fund — full detail (no dedicated page) */}
      <section id="baabuh-enterprise-fund" className="border-b border-gray-200 dark:border-white/10 bg-background-light dark:bg-background-dark scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <p className="text-xs font-bold tracking-[0.16em] uppercase text-gray-500 dark:text-gray-400 mb-5">
            Baabuh Enterprise Fund
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight text-primary dark:text-white mb-10 max-w-2xl">
            Capital and Support for Women Building Businesses
          </h2>
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            <div className="space-y-5">
              <p className="text-base leading-[1.75] text-gray-600 dark:text-gray-300">
                The Baabuh Enterprise Fund supports women entrepreneurs with access to enterprise
                financing alongside practical business-development support.
              </p>
              <p className="text-base leading-[1.75] text-gray-600 dark:text-gray-300">
                Through our work with women entrepreneurs, we have seen how businesses with viable
                products, customers and ambitions can still struggle to grow because appropriate capital
                and business support remain difficult to access. Baabuh responds to this gap.
              </p>
            </div>
            <div className="space-y-5">
              <p className="text-base leading-[1.75] text-gray-600 dark:text-gray-300">
                The Fund combines financial support with practical learning and enterprise development,
                helping women strengthen financial management, record-keeping, business formalisation,
                digital adoption and business planning.
              </p>
              <p className="text-base leading-[1.7] text-gray-500 dark:text-gray-400">
                Our goal is not simply to provide capital, but to strengthen women&apos;s ability to make
                productive investments, build more resilient enterprises and improve their livelihoods.
              </p>
              <p className="text-base leading-[1.7] text-gray-500 dark:text-gray-400">
                The Fund&apos;s work is strengthened through partnerships and collaborations with
                organisations including Nuvori Capital, helping expand the ecosystem of capital and
                enterprise support available to women entrepreneurs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills2Work teaser */}
      <section className="bg-white dark:bg-background-dark border-t border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-xs font-bold tracking-[0.16em] uppercase text-secondary mb-5">
              Freelance Accelerator
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight text-primary dark:text-white mb-5">
              Skills2Work
            </h2>
            <p className="text-base leading-[1.75] text-gray-600 dark:text-gray-300 mb-7">
              Skills2Work is a 12-week hybrid freelance accelerator by Paahibu Space designed to equip
              young women with practical, in-demand digital skills and the professional capabilities,
              confidence and support needed to turn those skills into freelance and digital income
              opportunities.
            </p>
            <Link
              href="/skills2work-program"
              className="inline-flex items-center gap-2 text-sm font-bold text-white bg-secondary rounded px-6 py-3 hover:opacity-90 transition-opacity self-start"
            >
              Explore Skills2Work
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            {skillsMeta.map((item) => (
              <div
                key={item.label}
                className="flex justify-between items-baseline pb-4 border-b border-gray-200 dark:border-white/10"
              >
                <span className="text-sm text-gray-500 dark:text-gray-400">{item.label}</span>
                <span className="text-lg text-primary dark:text-white tracking-tight">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
