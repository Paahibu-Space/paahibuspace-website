import Button from "@/components/ui/Button";

export default function ApplySteps({ steps }) {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-display font-bold text-primary dark:text-white mb-8">
              How to Apply
            </h2>
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-dark dark:text-white">
                      {step.title}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 lg:mt-0 bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-bold text-primary dark:text-white mb-4">
              Applications are Open!
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Don&apos;t miss the chance to be part of the next cohort. Space is
              limited to ensured quality mentorship for everyone.
            </p>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">Application Deadline:</span>
                <span className="font-bold text-secondary">Aug 30, 2024</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                 <span className="text-gray-500">Program Start:</span>
                 <span className="font-bold text-secondary">Sept 15, 2024</span>
              </div>
            </div>
            <Button
                size="lg"
                className="w-full mt-8 justify-center h-12"
            >
                Apply Now
            </Button>
            <p className="text-xs text-center text-gray-400 mt-4">
                Have questions? <a href="#" className="text-primary hover:underline">Contact admissions</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
