import Image from "next/image";
import { LinkedInIcon } from "@/components/ui/Icons";

export default function LeadershipTeam({ members = [] }) {
  // Use passed members or default to empty.
  const leaders = members;

  return (
    <section className="px-6 md:px-12 bg-background-light dark:bg-background-dark/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-4">
            Leadership Team
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
            Our executive team brings decades of experience in technology,
            education, and social entrepreneurship to guide Paahibu Space.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.length > 0 ? leaders.map((leader, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl aspect-[3/4] bg-gray-200 dark:bg-gray-700"
            >
              <Image
                alt={leader.name}
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                src={leader.image_url}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div
                className="absolute inset-0 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 pb-4 sm:pb-6"
                style={{
                  background:
                    "linear-gradient(to top, rgba(39, 41, 116, 0.95) 0%, rgba(39, 41, 116, 0.4) 50%, transparent 100%)",
                }}
              >
                <h3 className="text-white text-xl font-bold translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-300">
                  {leader.name}
                </h3>
                <p className="text-secondary dark:text-secondary font-medium text-sm translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {leader.role}
                </p>
                <div className="flex gap-3 mt-4 translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  <a
                    className="text-white hover:text-secondary dark:hover:text-secondary"
                    href={leader.linkedin_url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${leader.name}'s LinkedIn profile`}
                  >
                    <LinkedInIcon className="w-5 h-5" />
                  </a>
                  <a
                    className="text-white hover:text-secondary dark:hover:text-secondary"
                    href={`mailto:${leader.email || ""}`}
                    aria-label={`Email ${leader.name}`}
                  >
                    <span className="material-symbols-outlined text-sm">mail</span>
                  </a>
                </div>
              </div>
            </div>
          )) : (
            <p className="text-gray-500 text-center col-span-full">No leadership team members found.</p>
          )}
        </div>
      </div>
    </section>
  );
}
