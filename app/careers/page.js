import PageHero from "@/components/sections/PageHero";

export const metadata = {
  title: "Careers",
  description: "Build meaningful work with Paahibu Space across technology, programmes, education, entrepreneurship, policy and research, communications, operations and community engagement.",
};

const opportunityTypes = [
  {
    title: "Current Vacancies",
    description: "Open roles across our technology, programmes, entrepreneurship, policy and operations teams.",
  },
  {
    title: "Internships",
    description: "Structured, hands-on experience for students and early-career professionals.",
  },
  {
    title: "Fellowships & Placements",
    description: "Longer-term opportunities to work closely with our programmes and communities.",
  },
  {
    title: "Other Structured Opportunities",
    description: "Additional ways to work with Paahibu Space as they become available.",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        title={
          <h1 className="text-4xl md:text-6xl leading-tight tracking-[-0.033em]">
            Build Meaningful Work With Us
          </h1>
        }
        description="Paahibu Space brings together people who want to apply their skills to practical challenges alongside women, girls, young people and communities. Our multidisciplinary work creates opportunities across technology, programmes, education, entrepreneurship, policy and research, communications, operations and community engagement."
        backgroundImage="/assets/images/bg/team-with-grow.webp"
      />

      <section className="py-16 md:py-20 bg-background-light dark:bg-background-dark/50 transition-colors">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {opportunityTypes.map((type) => (
              <div key={type.title} className="flex flex-col gap-3">

                <h3 className="text-lg text-neutral-dark dark:text-white">
                  {type.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {type.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://careers.paahibuspace.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-bold text-white hover:bg-blue-900 hover:-translate-y-0.5 transition-all"
            >
              View Opportunities →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
