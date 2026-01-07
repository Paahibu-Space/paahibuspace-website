export default function MentorsGrid({ mentors }) {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block">
              Mentorship
            </span>
            <h2 className="text-3xl font-display font-bold text-primary dark:text-white">
              Meet Our Mentors
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-xl">
              Learn from women who have walked the path before you.
            </p>
          </div>
          <div className="hidden md:block">
            <a
              className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
              href="#"
            >
              Become a Mentor{" "}
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {mentors.map((mentor, index) => (
            <div key={index} className="flex flex-col gap-4">
              <div className="aspect-square rounded-lg overflow-hidden bg-gray-200">
                <img
                  alt={mentor.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  src={mentor.image}
                />
              </div>
              <div>
                <h4 className="text-secondary font-bold text-lg">
                  {mentor.name}
                </h4>
                <p className="text-primary font-medium text-sm mb-2">
                  {mentor.role}
                </p>
                <p className="text-gray-500 text-sm line-clamp-2">
                  "{mentor.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
