import Image from "next/image";

export default function AdvisoryBoard({ members = [] }) {
  const advisors = members;

  return (
    <section className="py-20 px-6 md:px-12 bg-background-light dark:bg-background-dark border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="mb-6 md:mb-0">
                <h2 className="text-3xl text-secondary dark:text-white">Advisory Board</h2>
                <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-lg">
                    Providing strategic guidance and industry insights to ensure our programs remain relevant and
                    impactful.
                </p>
            </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advisors.map((advisor, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg aspect-[3/4] bg-gray-200 dark:bg-gray-700 animate-fade-up"
            >
              <Image
                alt={advisor.name}
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                src={advisor.image_url}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div
                className="absolute inset-0 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"
                style={{
                  background:
                    "linear-gradient(to top, rgba(39, 41, 116, 0.95) 0%, rgba(39, 41, 116, 0.4) 50%, transparent 100%)",
                }}
              >
                <h3 className="text-white text-xl translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-300">
                  {advisor.name}
                </h3>
                <p className="text-secondary font-medium text-sm translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {advisor.role}
                </p>
                <div className="flex gap-3 mt-4 translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  <a
                    className="text-white hover:text-primary transition-colors"
                    href={advisor.linkedin_url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${advisor.name}'s LinkedIn profile`}
                  >
                    <span className="material-symbols-outlined text-sm" aria-hidden="true">link</span>
                  </a>
                  <a
                    className="text-white hover:text-primary transition-colors"
                    href={`mailto:${advisor.email || ""}`}
                    aria-label={`Email ${advisor.name}`}
                  >
                    <span className="material-symbols-outlined text-sm" aria-hidden="true">mail</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
