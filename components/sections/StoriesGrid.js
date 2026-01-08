import Button from "@/components/ui/Button";
import Link from "next/link";

export default function StoriesGrid() {
  const stories = [
    {
      date: "01 Jan 25",
      title: "Celebrating a Year of Impact and Growth at Paahibu Space",
      preview:
        "Reflecting on twelve months of milestones, challenges overcome, and the incredible community we've built together.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAhTA6I-KnpDiKV7yrF2SlVMJus_N-zb4zmq0WcK2-DVmZdZ-Srz9hOQwZBnrYTg_VNBqj0fVfs6TyNjSEpQX1b-qNvsjqRkgS3mxocb7KN1XE8Wf4LBsTCNZuP8fwT2t4dEc6SzVnsG8KVmFY4EnJubXJ5TYMPaQ2SQ5GyToFnU2e7WosFbOJ-GodvaREfX_aMaW2ySKOepFPXj_uEwHArb94k6LZB8K_yWKmcRWI3GQWaTaFOsSmtJ0FGvKMn2alXSIf-MIjhpys",
      tag: "Impact",
    },
    {
      date: "19 Dec 24",
      title: "Empowering Women through Digital Literacy",
      preview:
        "How our recent bootcamp equipped 50 young women with essential coding skills to launch their tech careers.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDmlWpYrHngWoQJTXinW6f9jqP_6yRCvIEKa-dqCHlJY8Lh2-XYHOpZ7hUBgar4tKOX8mqb5oXywCgnf_74sbp2k5s4lVPJZnAOiWHAALbQSiQpGnNYQP-KcHK0jF6GzWEjqMThuGy9CFEagX5RCDG35C3kxRk6vmhIGDu3fVNVNRFz5Xeq6Z7AlMWe5b03Y78JkSuW_Nq4qySnj1Gf3DMj0I1meDM2vOZ7EOvf9T2oNRcV2JdXNpDYVE_CkM9Sm8U9JgkXP3t6gFg",
      tag: "Project",
    },
  ];

  return (
    <section className="py-16 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Tabs */}
        <div className="flex overflow-x-auto pb-4 mb-10 gap-2 border-b border-gray-100 dark:border-gray-800 hide-scrollbar">
          <Button variant="secondary" size="sm" className="rounded-full">
            All Stories
          </Button>
          <Button variant="ghost" size="sm" className="rounded-full text-primary dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">
            Impact
          </Button>
          <Button variant="ghost" size="sm" className="rounded-full text-primary dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">
            Mentorship
          </Button>
           <Button variant="ghost" size="sm" className="rounded-full text-primary dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">
            Profiles
          </Button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <article
              key={index}
              className="group flex flex-col bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-gray-700">
                <div className="absolute inset-0 bg-accent/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={story.image}
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur text-xs font-bold text-primary rounded-full uppercase tracking-wider">
                    {story.tag}
                  </span>
                </div>
              </div>
              <div className="flex flex-col flex-grow p-6">
                <div className="flex items-center gap-2 text-xs font-medium text-gray-400 dark:text-gray-500 mb-3">
                  <span className="material-symbols-outlined text-[16px]">
                    calendar_today
                  </span>
                  <span>{story.date}</span>
                </div>
                <h3 className="text-xl font-bold text-primary dark:text-white mb-3 leading-snug group-hover:text-primary dark:group-hover:text-secondary transition-colors">
                  {story.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
                  {story.preview}
                </p>
                <div className="mt-auto">
                  <Link
                    href="#"
                    className="inline-flex items-center text-primary dark:text-white font-semibold text-sm hover:gap-2 transition-all group-hover/link"
                  >
                    Read Story{" "}
                    <span className="material-symbols-outlined text-[18px] ml-1">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
