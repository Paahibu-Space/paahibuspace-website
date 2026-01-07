import Link from "next/link";

const programs = [
  {
    title: "TechsiStars Mentorship",
    description:
      "Our flagship mentorship bootcamp connecting aspiring girls with established female tech experts. We focus on coding, career guidance, and confidence building.",
    icon: "star",
    color: "accent", // mapped to Tailwind classes in component
    location: "Wa, Upper West",
    timing: "Quarterly Cohorts",
    link: "/techsistars-program",
  },
  {
    title: "CybersiStars Initiative",
    description:
      "Empowering women with critical cybersecurity skills. This initiative aims to close the gender gap in security professions and promote online safety awareness.",
    icon: "shield_check", // Material symbol equivalent
    color: "blue-500",
    location: "Hybrid / Online",
    link: "#",
  },
  {
    title: "Skills2Work Initiative",
    description:
      "Bridging the gap between education and employment. We provide practical digital training, CV workshops, and internship placements for recent graduates.",
    icon: "work",
    color: "green-500",
    location: "Regional Hubs",
    link: "#",
  },
  {
    title: "Ndiara",
    description:
      "Focused on sustainable growth for young female entrepreneurs. Ndiara offers resources to digitize local businesses and access wider markets through technology.",
    icon: "potted_plant",
    color: "purple-500",
    location: "Wa, Ghana",
    link: "#",
  },
  {
    title: "WiDEI",
    description:
      "Women in Digital Entrepreneurship & Innovation. A collaborative platform fostering creativity, shared growth, and advocacy for digital inclusion policies.",
    icon: "groups_3",
    color: "pink-500",
    link: "/widei-program",
  },
  {
    title: "WIBID",
    description:
      "Women in Business and Institutional Development. Strengthening the operational capacity of women-led non-profits and small businesses through digital tools.",
    icon: "analytics", // Material symbol
    color: "yellow-500",
    link: "/widib-program",
  },
];

export default function ProgramsGrid() {
  return (
    <section className="py-12 pb-24 bg-background-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto px-4 text-center mb-16">
          <span className="text-secondary font-semibold tracking-wider uppercase text-sm mb-2 block">
            Our Impact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6">
            Pathways to Opportunity
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
             At Paahibu Space, we believe that access is the cornerstone of empowerment. Through our six core initiatives, we provide the mentorship, digital tools, and community support needed to thrive in the modern economy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <article
              key={index}
              className={`group bg-white transition-all duration-300 overflow-hidden border-t-4 flex flex-col h-full shadow-sm hover:shadow-md`}
              style={{ borderColor: `var(--color-${program.color === 'accent' ? 'secondary' : program.color})` }}
            >
              <div className="p-8 flex-1">
                <div
                  className={`w-14 h-14 bg-gray-50 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <span className={`material-symbols-outlined text-3xl`} style={{ color: program.color === 'accent' ? '#f6871f' : '' }}>{program.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-neutral-dark mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {program.description}
                </p>
                {program.location && (
                  <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                    <span className="material-symbols-outlined text-sm">location_on</span>
                    <span>{program.location}</span>
                  </div>
                )}
                {program.timing && (
                  <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    <span className="material-symbols-outlined text-sm">calendar_month</span>
                    <span>{program.timing}</span>
                  </div>
                )}
              </div>
              <div className="p-6 pt-0 mt-auto">
                <Link
                  href={program.link}
                  className="inline-flex items-center text-primary font-semibold hover:text-secondary transition-colors"
                >
                  View Details{" "}
                  <span className="material-symbols-outlined ml-2 text-sm">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
