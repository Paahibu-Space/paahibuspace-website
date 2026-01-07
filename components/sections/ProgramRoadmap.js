export default function ProgramRoadmap({ steps }) {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-display font-bold text-primary dark:text-white">
            Program Roadmap
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            A structured journey of intensive learning and growth.
          </p>
        </div>
        <div className="relative border-l-2 border-gray-200 dark:border-gray-700 ml-6 md:ml-10 space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="relative pl-10 md:pl-16">
              <span className="absolute -left-[9px] top-0 w-5 h-5 rounded-full bg-secondary border-4 border-white dark:border-gray-800"></span>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-primary dark:text-white">
                  {step.title}
                </h3>
                {step.tag && (
                  <span className="text-sm font-semibold text-secondary uppercase tracking-wider">
                    {step.tag}
                  </span>
                )}
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-2xl">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
