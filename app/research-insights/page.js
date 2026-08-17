import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Research, Evidence & Insights",
  description:
    "Research and evidence are integral to how we work. Explore how Paahibu Space learns from communities to improve programmes, inform technology, and strengthen policy advocacy.",
};

const learningMethods = [
  {
    icon: "groups",
    title: "Community-Based Research",
    description:
      "Working alongside women, girls and young people to explore their realities on their own terms, not just as subjects of study.",
    color: "orange",
  },
  {
    icon: "monitoring",
    title: "Programme Data",
    description:
      "Tracking outcomes across our programmes to understand what is working, for whom, and where we need to adapt.",
    color: "blue",
  },
  {
    icon: "forum",
    title: "Surveys & Listening",
    description:
      "Structured surveys paired with open listening sessions that surface the experiences numbers alone can miss.",
    color: "green",
  },
  {
    icon: "diversity_3",
    title: "Direct Engagement",
    description:
      "Sitting with communities and the systems around them to understand the barriers and opportunities that shape their lives.",
    color: "pink",
  },
];

const outcomes = [
  {
    icon: "trending_up",
    title: "Improve Programmes",
    description:
      "Evidence feeds directly back into how our programmes are designed, delivered and adapted over time.",
  },
  {
    icon: "memory",
    title: "Inform the Technologies We Build",
    description:
      "Insight from the field shapes the digital tools and platforms we develop for the communities we serve.",
  },
  {
    icon: "campaign",
    title: "Strengthen Policy Advocacy",
    description:
      "Grounded evidence gives weight and credibility to the advocacy we bring to policymakers and partners.",
  },
];

const categories = [
  {
    icon: "description",
    title: "Research Reports",
    description: "In-depth studies examining the experiences and outcomes of the communities we work with.",
    color: "orange",
  },
  {
    icon: "gavel",
    title: "Policy Briefs",
    description: "Concise, evidence-based briefings written to inform policymakers and advocacy partners.",
    color: "blue",
  },
  {
    icon: "school",
    title: "Programme Learning",
    description: "Honest reflections on what our programmes are teaching us, including what didn't work.",
    color: "green",
  },
  {
    icon: "construction",
    title: "Toolkits & Practical Resources",
    description: "Practical guides and tools designed to be adapted and reused by other practitioners.",
    color: "pink",
  },
  {
    icon: "bar_chart",
    title: "Data & Insights",
    description: "Key figures and trends drawn from our programme data and community research.",
    color: "purple",
  },
  {
    icon: "edit_note",
    title: "Field Notes & Reflections",
    description: "First-hand reflections from our team and community members on the ground.",
    color: "teal",
  },
];

const colorClasses = {
  orange: {
    bg: "bg-orange-50 dark:bg-orange-900/20",
    border: "border-orange-100 dark:border-orange-900/30",
    icon: "text-primary",
  },
  blue: {
    bg: "bg-blue-50 dark:bg-blue-900/20",
    border: "border-blue-100 dark:border-blue-900/30",
    icon: "text-blue-600 dark:text-blue-400",
  },
  green: {
    bg: "bg-green-50 dark:bg-green-900/20",
    border: "border-green-100 dark:border-green-900/30",
    icon: "text-green-600 dark:text-green-400",
  },
  pink: {
    bg: "bg-pink-50 dark:bg-pink-900/20",
    border: "border-pink-100 dark:border-pink-900/30",
    icon: "text-pink-500 dark:text-pink-400",
  },
  purple: {
    bg: "bg-purple-50 dark:bg-purple-900/20",
    border: "border-purple-100 dark:border-purple-900/30",
    icon: "text-purple-600 dark:text-purple-400",
  },
  teal: {
    bg: "bg-teal-50 dark:bg-teal-900/20",
    border: "border-teal-100 dark:border-teal-900/30",
    icon: "text-teal-600 dark:text-teal-400",
  },
};

export default function ResearchInsightsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full min-h-[560px] flex items-center bg-primary overflow-hidden py-24 px-4 md:px-0">
        <div className="absolute inset-0">
          <Image
            alt="Women gathered together during a community listening session"
            src="/assets/images/women-empowerment.png"
            fill
            priority
            className="object-cover opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/70" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="max-w-2xl space-y-6">

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Research, Evidence &amp; Insights
            </h1>
            <p className="text-blue-100 text-lg md:text-xl leading-relaxed max-w-xl">
              Learning from Communities.
              Research and evidence are integral to how we work. They keep us honest about
              what is really happening in the communities we serve — and accountable to it.
            </p>
          </div>
        </div>
      </section>

      {/* Why Research Matters */}
      <section className="py-20 px-6 md:px-12 bg-white dark:bg-background-dark">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-secondary font-bold text-sm uppercase tracking-widest">
              Why It Matters
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary dark:text-white leading-tight">
              Understanding the experiences and systems that shape everyday life
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              Through community-based research, programme data, surveys, listening and direct
              engagement, we seek to understand the experiences of women, girls and young
              people, and the systems affecting their lives.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              We use what we learn to improve our programmes, inform the technologies we
              develop, and strengthen our policy advocacy. Where appropriate, we also
              translate these insights into resources that can contribute to wider learning
              and decision-making.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 relative">
              <Image
                alt="Students collaborating on research and coursework together"
                src="/assets/images/collab-impact.png"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-secondary p-5 rounded-xl shadow-lg hidden lg:flex items-center gap-3">
              <p className="text-white text-sm font-bold max-w-[140px] leading-snug">
                Rooted in lived community experience
              </p>
            </div>
          </div>
        </div>
      </section>


    </>
  );
}
