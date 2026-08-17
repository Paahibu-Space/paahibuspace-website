import Link from "next/link";
import Image from "next/image";

const pillars = [
  {
    id: "access",
    title: "Access",
    image: "/assets/images/programs/member-benefit.png",
    imageAlt: "A young woman accessing a laptop in a community learning space",
    paragraphs: [
      "Opportunity begins with access.",
      "We expand access to knowledge, technology, education, skills, finance, networks, opportunities and decision-making spaces, particularly for women, girls and young people who face structural, geographic or economic barriers to participation.",
      "We work to reduce the barriers that prevent women, girls and hard-to-reach and at-risk youth from accessing technology, education, economic opportunities, information, networks and spaces where decisions are made.",
      "But access alone is not enough.",
    ],
  },
  {
    id: "innovate",
    title: "Innovate",
    image: "/assets/images/programs/walansi/walansi_teamwork.webp",
    imageAlt: "Young people collaborating and prototyping solutions in a workshop setting",
    paragraphs: [
      "People should have opportunities not only to participate in existing systems, but also to imagine and build alternatives.",
      "We create opportunities for people to imagine, experiment, build and solve problems while developing programmes and locally relevant technologies with the communities expected to use them.",
    ],
  },
  {
    id: "transform",
    title: "Transform",
    image: "/assets/images/women-empowerment.png",
    imageAlt: "A woman leading and speaking confidently within her community",
    paragraphs: [
      "Our goal is sustained improvement in people's lives and communities.",
      "We are interested in what changes after access has been created: whether people can exercise greater agency, strengthen their livelihoods, participate more safely, make informed choices, lead, influence decisions and create opportunities for themselves and others.",
      "We work towards sustained improvements in people's lives and communities: stronger livelihoods, greater voice and participation, safer digital experiences, increased resilience, stronger leadership and greater ability to influence the systems and decisions that shape their opportunities.",
    ],
  },
];

export default function PhilosophySection() {
  return (
    <section className="bg-background-light dark:bg-background-dark/50 transition-colors" id="philosophy">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-24 pb-12">
        <div className="md:text-center max-w-3xl mx-auto animate-fade-up">
          <h2 className="text-secondary font-bold tracking-wide uppercase text-sm mb-2">Our Approach</h2>
          <h3 className="text-3xl font-black text-neutral-dark dark:text-white sm:text-4xl">Access. Innovate. Transform.</h3>
          <p className="mt-4 text-lg text-neutral-gray dark:text-gray-400">
            Our work is guided by a simple belief that people are better positioned to shape their lives and communities when they can access the resources and opportunities they need, have the space to imagine and develop solutions, and are able to participate in the decisions that affect them.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-16 lg:space-y-20">
        {pillars.map((pillar, index) => (
          <div
            key={pillar.id}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
              index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src={pillar.image}
                alt={pillar.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h4 className="mb-4 text-2xl lg:text-3xl font-bold text-neutral-dark dark:text-white">{pillar.title}</h4>
              <div className="space-y-4">
                {pillar.paragraphs.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-neutral-gray dark:text-gray-400 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-4 pb-24 text-center">
        <Link
          href="/about"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-bold text-white hover:bg-blue-900 hover:-translate-y-0.5 transition-all"
        >
          Learn More About Us →
        </Link>
      </div>
    </section>
  );
}
