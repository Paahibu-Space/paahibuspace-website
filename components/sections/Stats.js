import { fetchAPI } from "@/lib/api";

export default async function Stats() {
  const stats = await fetchAPI("/api/v1/impact-stats");

  // Fallback if API fails or returns empty
  const displayStats = stats || [
    { value: "10,000+", label: "Women & Girls Impacted" },
    { value: "500+", label: "MSMEs Supported" },
    { value: "62", label: "Communities Reached" },
    { value: "450+", label: "Learning Activities" },
  ];

  return (
    <section className="w-full px-4 py-16 bg-white dark:bg-background-dark border-y border-gray-100 dark:border-gray-800">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {displayStats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center gap-2">
              <span className="text-4xl md:text-5xl font-black text-primary dark:text-white">
                {stat.value}
              </span>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
