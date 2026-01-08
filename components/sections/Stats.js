export default function Stats() {
  return (
    <section className="w-full px-4 py-16 bg-white dark:bg-background-dark border-y border-gray-100 dark:border-gray-800">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center gap-2">
            <span className="text-4xl md:text-5xl font-black text-primary dark:text-white">
              5,000+
            </span>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide">
              Women & Girls Impacted
            </span>
          </div>
          <div className="flex flex-col items-center text-center gap-2">
            <span className="text-4xl md:text-5xl font-black text-primary dark:text-white">
              70%
            </span>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide">
              Job Placement Rate
            </span>
          </div>
          <div className="flex flex-col items-center text-center gap-2">
            <span className="text-4xl md:text-5xl font-black text-primary dark:text-white">
              $1.5M
            </span>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide">
              Funding Raised
            </span>
          </div>
          <div className="flex flex-col items-center text-center gap-2">
            <span className="text-4xl md:text-5xl font-black text-primary dark:text-white">
              4+
            </span>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide">
              Years of Excellence
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
