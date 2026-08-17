export default function ProgramCTA({ title, description, primaryAction, secondaryAction }) {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700">
      <div className="max-w-4xl mx-auto px-5 text-center">
        <h2 className="text-neutral-dark dark:text-white font-display text-4xl md:text-5xl mb-6">
          {title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-xl mb-10 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {primaryAction && (
             <button className="bg-primary hover:bg-primary/90 text-white text-lg font-bold px-8 py-4 rounded-lg transition-all shadow-lg w-full sm:w-auto">
                {primaryAction.label}
             </button>
          )}
          {secondaryAction && (
             <button className="bg-transparent border-2 border-primary text-primary hover:bg-primary/5 text-lg font-bold px-8 py-4 rounded-lg transition-all w-full sm:w-auto">
                {secondaryAction.label}
             </button>
          )}
        </div>
      </div>
    </section>
  );
}
