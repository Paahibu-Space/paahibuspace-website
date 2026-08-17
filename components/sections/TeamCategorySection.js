import Image from "next/image";

// Generic fallback used for any team category created in the admin CMS that
// doesn't have a bespoke section design (see CATEGORY_SECTIONS in app/team/page.js).
export default function TeamCategorySection({ title, members = [] }) {
  return (
    <section className="py-20 px-6 md:px-12 bg-background-light dark:bg-background-dark border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-primary dark:text-white">{title}</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl aspect-[3/4] bg-gray-200 dark:bg-gray-700"
            >
              <Image
                alt={member.name}
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                src={member.image_url}
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
                <h3 className="text-white text-xl font-bold">{member.name}</h3>
                <p className="text-secondary font-medium text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
