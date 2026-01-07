export default function Mission() {
  return (
    <section className="w-full px-4 py-16 bg-background-light">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
        <div className="text-center max-w-[700px] mx-auto">
          <h2 className="text-neutral-dark text-3xl font-bold leading-tight mb-4">
            Our Mission & Vision
          </h2>
          <p className="text-gray-600 text-lg">
            We are driven by three core pillars designed to reshape the landscape
            of technology for African women.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
              <span className="material-symbols-outlined text-3xl">
                psychology
              </span>
            </div>
            <h3 className="text-neutral-dark text-xl font-bold">
              Breaking Stereotypes
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Challenging the norm in male-dominated fields by showcasing female
              excellence and leadership in tech roles across the continent.
            </p>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
              <span className="material-symbols-outlined text-3xl">school</span>
            </div>
            <h3 className="text-neutral-dark text-xl font-bold">
              Tech Education
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Providing world-class coding, design, and digital literacy skills
              through bootcamps, workshops, and mentorship programs.
            </p>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
              <span className="material-symbols-outlined text-3xl">
                lightbulb
              </span>
            </div>
            <h3 className="text-neutral-dark text-xl font-bold">
              Entrepreneurship
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Fostering business acumen alongside technical skills to empower
              women to build their own startups and solve local problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
