export default function Testimonials({ testimonials }) {
  return (
    <section className="py-20 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-display font-bold text-center text-primary dark:text-white mb-12">
          Voices of Change
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-surface-dark p-8 rounded-2xl relative shadow-sm"
            >
              <span className="material-symbols-outlined text-6xl text-gray-200 dark:text-gray-700 absolute top-4 right-4">
                format_quote
              </span>
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <img
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full object-cover border-2 border-secondary"
                  src={testimonial.image}
                />
                <div>
                  <h4 className="font-bold text-primary dark:text-white">
                    {testimonial.author}
                  </h4>
                  <p className="text-sm text-secondary">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic relative z-10">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
