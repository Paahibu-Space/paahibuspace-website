import Link from "next/link";

export const metadata = {
  title: "Donate",
  description:
    "Help expand access to opportunities, resources and spaces where women, girls and young people can learn, build and participate.",
};

const focusAreas = [
  {
    icon: "smart_toy",
    title: "Digital Skills, AI & Online Safety",
    body: (
      <>
        Support women, girls and young people to develop practical digital
        capabilities, understand emerging technologies, navigate online
        spaces safely and participate more critically and productively in an
        increasingly AI-driven world.
      </>
    ),
    footnote: (
      <>
        Through programmes such as{" "}
        <Link
          href="/digital-walansi-program"
          className="text-primary dark:text-secondary underline underline-offset-4 decoration-1 hover:decoration-2"
        >
          Digital Walansi
        </Link>
        , support can contribute to training, school-based learning, Digital
        Walansi Clubs, learning resources and the development of responsible
        technology.
      </>
    ),
  },
  {
    icon: "storefront",
    title: "Women's Entrepreneurship & Livelihoods",
    body: (
      <>
        Help women strengthen businesses, access relevant entrepreneurial
        knowledge and technology, and pursue more resilient livelihood
        opportunities.
      </>
    ),
    footnote: (
      <>
        Your support can contribute to initiatives such as{" "}
        <Link
          href="/ndiara"
          className="text-primary dark:text-secondary underline underline-offset-4 decoration-1 hover:decoration-2"
        >
          Ndiara
        </Link>
        ,{" "}
        <Link
          href="/grow-program"
          className="text-primary dark:text-secondary underline underline-offset-4 decoration-1 hover:decoration-2"
        >
          GROW the Baabuh Enterprise Fund
        </Link>{" "}
        and{" "}
        <Link
          href="/skills2work-program"
          className="text-primary dark:text-secondary underline underline-offset-4 decoration-1 hover:decoration-2"
        >
          Skills2Work
        </Link>
        , as well as enterprise training, business-development support and
        access to economic opportunities.
      </>
    ),
  },
  {
    icon: "school",
    title: "Education & Learning Opportunities",
    body: (
      <>
        Help make practical learning opportunities more accessible to women,
        girls and young people who may otherwise face financial, geographic
        or social barriers to participation.
      </>
    ),
    footnote: (
      <>
        Support can contribute to learning materials, training, mentorship,
        connectivity and other resources required for meaningful
        participation in STEM education.
      </>
    ),
  },
  {
    icon: "campaign",
    title: "Voice, Leadership & Participation",
    body: (
      <>
        Support opportunities for women, girls and young people to develop
        their leadership, generate evidence from their communities and
        participate meaningfully in conversations and decisions that affect
        their lives.
      </>
    ),
  },
  {
    icon: "diversity_3",
    title: "Community-Led Solutions",
    body: (
      <>
        Support Paahibu Space to listen, research, test ideas and develop
        programmes and technologies with communities.
      </>
    ),
  },
];

const givingChoices = [
  {
    icon: "spa",
    title: "Support Where It Is Needed Most",
    body: "Unrestricted contributions give Paahibu Space the flexibility to direct resources towards areas of greatest need, respond to emerging opportunities and meet essential costs that make our programmes possible.",
    action: { label: "Support Paahibu Space", href: "/contact" },
  },
  {
    icon: "target",
    title: "Support a Programme",
    body: "Prefer to contribute to a particular area of our work? You can direct your contribution towards one of our programmes or priority areas.",
    action: { label: "Explore Our Programmes", href: "/contact" },
  },
  {
    icon: "redeem",
    title: "Sponsor an Opportunity",
    body: "Your contribution can help remove a specific barrier preventing someone from participating in an opportunity. This may include supporting training fees, learning materials, internet connectivity, transportation or other participation costs.",
    action: { label: "Sponsor an Opportunity", href: "/contact" },
  },
];

const inKindWays = [
  "Equipment and technology",
  "Software and digital tools",
  "Internet and connectivity support",
  "Learning and training resources",
  "Professional expertise",
  "Mentorship",
  "Venue and training-space support",
  "Pro bono professional services",
  "Opportunities for programme participants and alumni",
];

export default function DonatePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full bg-primary dark:bg-background-dark py-28 md:py-36 px-6 md:px-12 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-display text-white text-5xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight max-w-3xl">
            Support Our Work
          </h1>
          <p className="mt-8 text-gray-200 text-lg md:text-xl leading-relaxed max-w-2xl">
            Help expand access to opportunities, resources and spaces where
            women, girls and young people can learn, build and participate.
          </p>
          <p className="mt-6 text-gray-300 leading-relaxed max-w-2xl">
            Paahibu Space works with women, girls, and hard-to-reach and
            at-risk youth to increase their agency, strengthen their voice
            and resilience, and contribute to sustained improvements in their
            lives and communities.
          </p>
          <p className="mt-4 text-gray-300 leading-relaxed max-w-2xl">
            Your contribution helps us turn this work into practical
            opportunities, from digital education and safer technology use to
            entrepreneurship, livelihoods, community-led research, leadership
            and participation.
          </p>
          <a
            href="#give"
            className="mt-10 inline-flex items-center gap-2 text-white text-lg font-bold group"
          >
            Donate Now
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
              arrow_forward
            </span>
          </a>
        </div>
      </section>

      {/* What Your Support Makes Possible */}
      <section className="bg-white dark:bg-background-dark py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mb-16">
            <h2 className="font-display text-neutral-dark dark:text-white text-4xl md:text-5xl tracking-tight">
              What Your Support Makes Possible
            </h2>
            <p className="mt-5 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              Your contribution can support work across Paahibu Space&apos;s
              programmes and communities.
            </p>
          </div>

          <div>
            {focusAreas.map((area) => (
              <div
                key={area.title}
                className="grid md:grid-cols-[minmax(0,220px)_1fr] gap-6 md:gap-12 py-10 border-t border-gray-100 dark:border-gray-800"
              >
                <div className="flex md:flex-col items-center md:items-start gap-4">
                  <span className="material-symbols-outlined text-secondary" style={{ fontSize: "40px" }}>
                    {area.icon}
                  </span>
                  <h3 className="text-neutral-dark dark:text-white text-xl md:text-2xl leading-snug">
                    {area.title}
                  </h3>
                </div>
                <div className="text-gray-600 dark:text-gray-400 leading-relaxed space-y-3 max-w-2xl">
                  <p>{area.body}</p>
                  {area.footnote && <p>{area.footnote}</p>}
                </div>
              </div>
            ))}
            <div className="border-t border-gray-100 dark:border-gray-800" />
          </div>
        </div>
      </section>

      {/* Choose How You Give */}
      <section className="bg-background-light dark:bg-[#1a141e] py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-neutral-dark dark:text-white text-4xl md:text-5xl tracking-tight mb-16">
            Choose How You Give
          </h2>

          <div className="flex flex-col gap-16 md:gap-20">
            {givingChoices.map((choice, i) => (
              <div
                key={choice.title}
                className={`flex flex-col ${
                  i % 2 === 1 ? "md:items-end md:text-right" : "md:items-start"
                }`}
              >
                <div className={`max-w-xl flex flex-col gap-4 ${i % 2 === 1 ? "md:items-end" : "md:items-start"}`}>
                  <span className="material-symbols-outlined text-primary dark:text-secondary" style={{ fontSize: "44px" }}>
                    {choice.icon}
                  </span>
                  <h3 className="text-neutral-dark dark:text-white text-2xl md:text-3xl">
                    {choice.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                    {choice.body}
                  </p>
                  <Link
                    href={choice.action.href}
                    className="mt-2 inline-flex items-center gap-2 text-primary dark:text-secondary font-bold group"
                  >
                    {choice.action.label}
                    <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Ways to Support */}
      <section className="bg-white dark:bg-background-dark py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-16">
          <div>
            <h2 className="font-display text-neutral-dark dark:text-white text-4xl md:text-5xl tracking-tight">
              Other Ways to Support
            </h2>
            <p className="mt-5 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              Financial contributions are not the only way to contribute.
              Organisations and individuals can also support Paahibu Space
              through:
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 text-primary dark:text-secondary font-bold group"
            >
              Discuss an In-Kind Contribution
              <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </Link>
          </div>
          <ul className="flex flex-wrap content-start gap-3">
            {inKindWays.map((item) => (
              <li
                key={item}
                className="text-neutral-dark dark:text-gray-200 text-base leading-snug px-5 py-3 bg-background-light dark:bg-[#251d29]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Institutional Giving */}
      <section className="bg-primary py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block h-[3px] w-16 bg-secondary mb-8" aria-hidden="true" />
          <h2 className="font-display text-white text-4xl md:text-5xl tracking-tight">
            Fund or Partner With Our Work
          </h2>
          <p className="mt-6 text-gray-200 text-lg leading-relaxed">
            We welcome conversations with foundations, companies, development
            organisations and other institutions interested in supporting
            locally led work across technology, education, women&apos;s
            economic participation, entrepreneurship, responsible AI, digital
            safety, leadership, policy advocacy and community development.
          </p>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Support may include programme grants, scholarships, technology
            and equipment, technical assistance, research partnerships or
            multi-year institutional support.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 text-white text-lg font-bold group"
          >
            Partner With Paahibu Space
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
              arrow_forward
            </span>
          </Link>
        </div>
      </section>

      {/* Accountability */}
      <section className="bg-background-light dark:bg-[#1a141e] py-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-neutral-dark dark:text-white text-2xl md:text-3xl">
            Accountability Matters
          </h2>
          <p className="mt-5 text-gray-600 dark:text-gray-400 leading-relaxed">
            Every contribution is a responsibility. We are committed to using
            resources carefully, documenting how funds are used and
            strengthening the systems that support transparent and
            accountable programme delivery.
          </p>
          <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
            As our work grows, we remain committed to ensuring that resources
            entrusted to Paahibu Space contribute meaningfully to the people
            and communities our programmes are designed with and for.
          </p>
        </div>
      </section>

      {/* Give to Paahibu Space */}
      <section id="give" className="bg-white dark:bg-background-dark py-24 px-6 md:px-12 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-neutral-dark dark:text-white text-4xl md:text-5xl tracking-tight">
            Give to Paahibu Space
          </h2>
          <p className="mt-5 text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-2xl">
            Choose the giving option that works best for you.
          </p>

          <div className="mt-14 divide-y divide-gray-100 dark:divide-gray-800 border-t border-gray-100 dark:border-gray-800">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 py-8">
              <div className="flex items-center gap-4 sm:w-56 shrink-0">
                <span className="material-symbols-outlined text-secondary" style={{ fontSize: "32px" }}>
                  smartphone
                </span>
                <span className="text-neutral-dark dark:text-white text-lg">Mobile Money</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-lg tracking-wide">0556410924</p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 py-8">
              <div className="flex items-center gap-4 sm:w-56 shrink-0">
                <span className="material-symbols-outlined text-secondary" style={{ fontSize: "32px" }}>
                  account_balance
                </span>
                <span className="text-neutral-dark dark:text-white text-lg">Bank Transfer</span>
              </div>
              <p className="text-gray-500 dark:text-gray-500 italic">
                Official organisational bank account details to be added.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 py-8">
              <div className="flex items-center gap-4 sm:w-56 shrink-0">
                <span className="material-symbols-outlined text-secondary" style={{ fontSize: "32px" }}>
                  credit_card
                </span>
                <span className="text-neutral-dark dark:text-white text-lg">Online Giving</span>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-primary dark:text-secondary font-bold group"
              >
                Donate Securely
                <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>

          <p className="mt-10 text-gray-600 dark:text-gray-400">
            For institutional giving, in-kind contributions or other
            enquiries:{" "}
            <a
              href="mailto:partnerships@paahibuspace.org"
              className="text-primary dark:text-secondary underline underline-offset-4 decoration-1 hover:decoration-2"
            >
              partnerships@paahibuspace.org
            </a>
          </p>
        </div>
      </section>

      {/* Thank You */}
      <section className="bg-primary py-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-white text-4xl md:text-5xl tracking-tight">
            Thank You
          </h2>
          <p className="mt-6 text-gray-200 text-lg leading-relaxed">
            When you support Paahibu Space, you help create more
            opportunities for women, girls and young people to access
            resources, develop capabilities, build livelihoods, exercise
            their voice and participate in shaping what comes next.
          </p>
          <a
            href="#give"
            className="mt-10 inline-flex items-center gap-2 text-white text-lg font-bold group"
          >
            Donate Now
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
              arrow_forward
            </span>
          </a>
        </div>
      </section>
    </>
  );
}
