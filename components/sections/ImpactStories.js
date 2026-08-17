import Link from "next/link";

export default function ImpactStories() {
  const stories = [
    {
      title: "Rose: Leading Change",
      category: "Leadership",
      description:
        "As a team lead in our mentorship program, Rose is now paying it forward, guiding 50 new students through their first lines of code.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAD3I90nuTJX8INtl8DWSSXR3BHrqEK6byqC_HW1q7XPE5bXwfwVguR5K7N9DJjYYhU0Cm0kjVViwRBGmtPjV_KcZsmrfAURMpoNTQ9wEd6QKoW8LXXBL9LhLrtGICn4CYywI4RXn2cDqxCmG8vNDZT464ZvgiIXNP_RUmOxOO9YqSWe_vbmANGa7njzRCHhogq62fzohB7KmFAMenZ21UO1C-lCv4_ZGy3ht0V2TpGOe58y0_dMnkoHq_IB7QeKrpTO7iS6EQ2IR8H",
      link: "#",
      color: "green",
    },
    {
      title: "Mckeown's Tech Career",
      category: "Career Success",
      description:
        "Landing a role at a major telecom firm, Mckeown proves that with the right access and determination, the sky is the limit.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCF1oju_9Qeef6-5SvW0NcLh6LIm0ODI-eZzRviJ733zOgUHfL28NpSn6CywaTbe65ad6es92XWEiQr4fk9IX0PrrpFuSC62D_S7LuJ1LuBil28axJD956TvNEwfSKfIW8PGmh9N-3PuUMRCTzh9VRT19BEbiXnWMQjCua7x1en9WpbX3rpshzSEOPFUYX6OSRZWy4DYsPllb8o9p5U5RTlgwYp1CrAfLOSOpbinxl98GFFy1h5iuIPPut2ishWsaFy2MhjXBrqGtrF",
      link: "#",
      color: "orange",
    },
  ];

  return (
    <section className="py-20 bg-background-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center md:text-left mb-12">
            <h2 className="text-3xl text-neutral-dark mb-4">Success Stories</h2>
            <p className="text-gray-600 max-w-2xl">Real stories from the women and girls whose lives have been transformed by our programs.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div
              key={index}
              className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100"
            >
              <div className="h-64 overflow-hidden relative">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url("${story.image}")` }}
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="mb-3">
                  <span
                    className={`bg-${story.color}-100 text-${story.color}-600 text-xs font-bold px-2 py-1 rounded`}
                  >
                    {story.category}
                  </span>
                </div>
                <h3 className="text-xl text-neutral-dark mb-3">
                  {story.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                  {story.description}
                </p>
                <Link
                  href={story.link}
                  className="inline-flex items-center text-primary font-bold text-sm hover:underline"
                >
                  Read Story{" "}
                  <span className="material-symbols-outlined text-sm ml-1">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          ))}

          {/* Program Extension Card */}
          <div className="group flex flex-col bg-primary rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-primary relative">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <span className="material-symbols-outlined text-9xl text-white">
                extension
              </span>
            </div>
            <div className="p-8 flex flex-col flex-1 justify-center z-10">
              <div className="mb-4">
                <span className="bg-white/20 text-white text-xs font-bold px-2 py-1 rounded backdrop-blur-sm">
                  Expansion
                </span>
              </div>
              <h3 className="text-2xl text-white mb-4">
                Program Extensions
              </h3>
              <p className="text-white/80 text-base leading-relaxed mb-8">
                We are expanding our reach beyond the classroom. Learn about our
                new satellite hubs and mobile learning units reaching remote
                villages.
              </p>
              <button className="w-full bg-white text-primary font-bold py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                Explore Extensions
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
