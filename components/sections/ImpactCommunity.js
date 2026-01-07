import Link from "next/link";

export default function ImpactCommunity() {
  const features = [
    {
      title: "Skill Workshops",
      description:
        "Technical and soft-skill workshops led by industry experts to keep you ahead of the curve.",
      icon: "school",
      color: "primary",
    },
    {
      title: "Networking Events",
      description:
        "Regular meetups and conferences to connect with peers, recruiters, and potential partners.",
      icon: "diversity_3",
      color: "accent",
    },
    {
      title: "Innovation Labs",
      description:
        "Collaborative spaces to work on real-world projects and build your portfolio.",
      icon: "lightbulb",
      color: "yellow-600",
    },
    {
      title: "Community Support",
      description:
        "A safe space for questions, advice, and emotional support throughout your career.",
      icon: "volunteer_activism",
      color: "pink-600",
    },
  ];

  return (
    <section className="w-full bg-background-light py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="flex flex-col gap-6 lg:w-1/3 sticky top-24">
            <h2 className="text-neutral-dark text-3xl lg:text-4xl font-black leading-tight">
              Impact &amp; Community
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our programs are designed to create lasting change through
              structured learning and meaningful connections.
            </p>
            <Link
              className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all"
              href="/programs"
            >
              View all programs{" "}
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:w-2/3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className={`size-12 rounded-lg bg-${feature.color === 'yellow-600' ? 'yellow-500' : feature.color === 'pink-600' ? 'pink-500' : feature.color}/10 flex items-center justify-center text-${feature.color}`}
                >
                  <span className="material-symbols-outlined text-[24px]">
                    {feature.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-neutral-dark">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
