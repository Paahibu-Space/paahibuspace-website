export default function ProgramObjectives({ objectives }) {
  const icons = {
    mentorship: "groups",
    skill: "school",
    career: "rocket_launch",
    community: "diversity_1",
    support: "monitor_heart",
    leadership: "group_work",
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-display text-primary dark:text-white">
            Program Objectives
          </h2>
          <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full mt-4"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {objectives.map((obj, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl hover:shadow-xl transition-shadow border border-transparent hover:border-gray-100 dark:hover:border-gray-700 group"
            >
              <div className="w-14 h-14 bg-white dark:bg-gray-700 rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl text-secondary">
                  {icons[obj.iconKey] || "star"}
                </span>
              </div>
              <h3 className="text-xl text-primary dark:text-white mb-3">
                {obj.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {obj.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
