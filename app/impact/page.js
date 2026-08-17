import Link from "next/link";
import Image from "next/image";
import { fetchAPI } from "@/lib/api";
import StoriesGrid from "@/components/sections/StoriesGrid";
import PageHero from "@/components/sections/PageHero";

export const metadata = {
  title: "Our Impact",
  description: "See the measurable impact Paahibu Space has made — women and girls trained, MSMEs supported, and communities reached across Africa.",
};

export default async function ImpactPage() {
  // Fetch stories and reports in parallel
  const [spotlights, reports] = await Promise.all([
    fetchAPI("/api/v1/stories") || [],
    fetchAPI("/api/v1/annual-reports") || []
  ]);

  // Use up to 6 stories for the grid, and others (or reuse) for carousel
  // If we have fewer than 6, we just use what we have for grid. 
  // For carousel, we'll try to use different ones, or fallback to the same if not enough.
  const gridStories = spotlights.slice(0, 6);
  const carouselStories = spotlights.length > 6 ? spotlights.slice(6, 12) : spotlights.slice(0, 4);

  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-white dark:bg-background-dark border-b border-gray-100 dark:border-gray-800 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm">
            <Link className="text-gray-500 hover:text-primary transition-colors" href="/">
              Home
            </Link>
            <span className="material-symbols-outlined text-[16px] text-gray-400">
              chevron_right
            </span>
            <span className="text-primary dark:text-white font-medium">
              Impact Stories
            </span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <PageHero
        title={
          <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-[-0.033em]">
            Transforming African Futures <br className="hidden md:block" />
            Through Technology
          </h1>
        }
        description="From rural villages to global tech hubs, meet the women and youth reshaping Africa's digital landscape through resilience, innovation, and code."
        backgroundImage="/assets/images/impact-stories.png"
      />

      {/* Stats Section with API Data */}
      <ImpactStatsSection />

      {/* Beyond the Numbers */}
      <section className="w-full py-20 bg-white dark:bg-background-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-800 dark:text-gray-200 text-xl md:text-2xl font-semibold leading-relaxed mb-6">
            These numbers tell us about reach. They do not tell the whole story.
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
            Across our work, we also look at whether people can apply what they have learned, make more informed choices, strengthen their livelihoods, participate more safely, access new opportunities, exercise leadership and contribute to decisions that affect them.
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            We are interested in changes that can continue beyond a single training or programme: greater agency, stronger voice, resilience, economic opportunity and sustained improvements in people&apos;s lives and communities.
          </p>
        </div>
      </section>

      {/* Individual Stories Grid */}
      <section className="w-full py-16 dark:bg-[#0f111a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-primary dark:text-white text-3xl md:text-4xl font-bold">
              Inspiring Journeys
            </h2>
            <Link
              className="hidden sm:flex items-center gap-2 text-primary font-bold text-sm hover:underline"
              href="/stories"
            >
              View All Stories <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>

          <StoriesGrid initialStories={gridStories} />
        </div>
      </section>

      {/* Annual Impact & Visual Carousel Section */}
      <section className="w-full py-20 bg-white dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/3">
              <h2 className="text-primary dark:text-white text-3xl font-bold leading-tight mb-4">
                Annual Impact Reports
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-10">
                Transparency and results are at our core. Download our detailed
                annual reports to see exactly how your support translates into
                changed lives.
              </p>
              
              {/* Dynamic Reports List */}
              <div className="flex flex-col gap-4">
                {reports.length > 0 ? (
                  reports.map((report, idx) => (
                    <a 
                      key={idx}
                      href={report.file_url || "#"} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-5 border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 transition-all cursor-pointer group"
                    >
                      <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg text-red-500 dark:text-red-400">
                        <span className="material-symbols-outlined">description</span>
                      </div>
                      <div>
                        <p className="font-bold text-primary dark:text-white group-hover:text-primary transition-colors">
                          {report.title || "Annual Report"}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                           {report.year} • PDF Download
                        </p>
                      </div>
                      <span className="material-symbols-outlined ml-auto text-gray-400 group-hover:text-primary transition-colors">
                        download
                      </span>
                    </a>
                  ))
                ) : (
                  <p className="text-gray-500 italic">No reports available at the moment.</p>
                )}
              </div>
            </div>

            {/* Horizontal Scroll / Carousel Visual */}
            <div className="lg:w-2/3 overflow-hidden w-full">
              {carouselStories.length > 0 ? (
                <div className="flex gap-6 overflow-x-auto pb-8 snap-x hide-scrollbar px-2">
                  {carouselStories.map((story, i) => (
                    <div key={i} className="min-w-[300px] h-[400px] snap-center rounded-2xl overflow-hidden relative shadow-md">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform hover:scale-105 duration-700"
                        style={{
                          backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8), transparent), url("${story.image_url || story.image}")`,
                        }}
                      ></div>
                      <div className="absolute bottom-0 left-0 p-8 z-10">
                         <p className="text-accent text-xs font-bold uppercase mb-1">
                           {/* Handle dynamic nested type or string type */}
                           {story.story_type?.name || story.type || "Spotlight"}
                         </p>
                        <p className="text-white font-bold text-xl mb-1">
                          {story.name}
                        </p>
                        <p className="text-white/80 text-sm line-clamp-2">
                          {story.program}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                 <div className="h-[400px] w-full flex items-center justify-center bg-surface-light dark:bg-gray-800 rounded-2xl">
                    <p className="text-gray-400">Coming Soon</p>
                 </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="bg-[#0b0c15] text-white py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">
            Be Part of the Next Story
          </h2>
          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Your contribution helps us extend our programs, reach more remote
            communities, and empower the next generation of women tech leaders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="h-14 px-10 bg-primary hover:bg-white hover:text-primary transition-all rounded-full font-bold text-white shadow-lg text-lg">
              Donate Now
            </button>
            <button className="h-14 px-10 bg-transparent border-2 border-gray-500 hover:border-white hover:bg-white/10 transition-all rounded-full font-bold text-white text-lg">
              Join the Movement
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

// Subcomponent for stats
async function ImpactStatsSection() {
    const stats = await fetchAPI("/api/v1/impact-stats") || [
        { value: "500+", label: "Girls Trained", icon: "school", color: "text-primary" },
        { value: "30+", label: "Projects Launched", icon: "rocket_launch", color: "text-blue-600" },
        { value: "450+", label: "Certificates Awarded", icon: "workspace_premium", color: "text-green-600" },
        { value: "12", label: "Communities Reached", icon: "public", color: "text-purple-600" }
    ];

    return (
      <section className="w-full bg-surface-light dark:bg-background-dark border-y border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-primary dark:text-white">
                Our Reach in Numbers
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mt-2 text-lg">
                Measuring the tangible impact of our mission across the continent.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
             {/* Card 1 */}
            <div className="flex flex-col gap-4 p-6 bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 transition-all">

              <div>
                <p className="text-4xl font-black text-primary dark:text-white tracking-tight">{stats[0]?.value || "10,000+"}</p>
                <p className="text-gray-600 dark:text-gray-400 font-medium mt-1">{stats[0]?.label || "Girls and Women trained"}</p>
              </div>
            </div>
             {/* Card 2 */}
            <div className="flex flex-col gap-4 p-6 bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 transition-all">

              <div>
                <p className="text-4xl font-black text-primary dark:text-white tracking-tight">{stats[1]?.value || "9+"}</p>
                <p className="text-gray-600 dark:text-gray-400 font-medium mt-1">{stats[1]?.label || "Projects Implemented"}</p>
              </div>
            </div>
             {/* Card 3 */}
            <div className="flex flex-col gap-4 p-6 bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 transition-all">
            
              <div>
                <p className="text-4xl font-black text-primary dark:text-white tracking-tight">{stats[2]?.value || "450+"}</p>
                <p className="text-gray-600 dark:text-gray-400 font-medium mt-1">{stats[2]?.label || "Jobs Created"}</p>
              </div>
            </div>
             {/* Card 4 */}
            <div className="flex flex-col gap-4 p-6 bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 transition-all">

              <div>
                <p className="text-4xl font-black text-primary dark:text-white tracking-tight">{stats[3]?.value || "62+"}</p>
                <p className="text-gray-600 dark:text-gray-400 font-medium mt-1">{stats[3]?.label || "Communities Reached"}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
