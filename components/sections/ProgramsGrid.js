import Link from "next/link";

const programs = [
  {
    title: "TechsiStars Mentorship",
    description:
      "Our flagship mentorship bootcamp connecting aspiring girls with established female tech experts. We focus on coding, career guidance, and confidence building.",
    icon: "star",
    color: "accent",
    location: "Wa, Upper West",
    timing: "Quarterly Cohorts",
    link: "/techsistars-program",
  },
  {
    title: "GROW Program",
    description:
      "A premier accelerator tailored for women-led startups. We combine rigorous training, mentorship, and access to capital to accelerate professional journeys.",
    icon: "rocket_launch",
    color: "green-500",
    location: "National",
    link: "/grow-program",
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
    icon: "analytics",
    color: "yellow-500",
    link: "/widib-program",
  },
  {
    title: "Community Ambassadors",
    description:
      "A network of leaders championing digital literacy in their local communities. Ambassadors drive grassroots change and expand our reach.",
    icon: "public",
    color: "blue-500",
    link: "/community-ambassadors-program",
  },
  {
    title: "Digital Walansi",
    description:
      "Training young women as Digital Walansi Fellows to carry digital safety, media literacy, and civic rights education into schools and communities across the Upper West Region.",
    icon: "shield_person",
    color: "red-500",
    location: "Upper West Region",
    timing: "3-Month Deployment",
    link: "/digital-walansi-program",
  },
];

export default function ProgramsGrid() {
  return (
    <section className="py-12 pb-24 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto px-4 text-center mb-16">
          <span className="text-secondary-dark dark:text-secondary font-semibold tracking-wider uppercase text-sm mb-2 block">
            Our Impact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark dark:text-white mb-6">
            Pathways to Opportunity
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
             At Paahibu Space, we believe that access is the cornerstone of empowerment. Through our six core initiatives, we provide the mentorship, digital tools, and community support needed to thrive in the modern economy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <article
              key={index}
              className={`group bg-white dark:bg-gray-800 transition-all duration-300 overflow-hidden border-t-4 flex flex-col h-full shadow-sm hover:shadow-md`}
              style={{ borderColor: `var(--color-${program.color === 'accent' ? 'secondary' : program.color})` }}
            >
              <div className="p-8 flex-1">
                <div
                  className={`w-14 h-14 bg-gray-50 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <span className={`material-symbols-outlined text-3xl`} style={{ color: program.color === 'accent' ? '#f6871f' : '' }}>{program.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-neutral-dark dark:text-white mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed">
                  {program.description}
                </p>
                {program.location && (
                  <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                    <span className="material-symbols-outlined text-sm">location_on</span>
                    <span>{program.location}</span>
                  </div>
                )}
                {program.timing && (
                  <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                    <span className="material-symbols-outlined text-sm">calendar_month</span>
                    <span>{program.timing}</span>
                  </div>
                )}
              </div>
              <div className="p-6 pt-0 mt-auto">
                <Link
                  href={program.link}
                  className="inline-flex items-center text-primary dark:text-white font-semibold hover:text-secondary dark:hover:text-secondary transition-colors"
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
