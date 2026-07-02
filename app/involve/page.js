import Link from "next/link";

export const metadata = {
  title: "Get Involved",
  description: "Join the Paahibu Space community as a mentor, volunteer, partner, or ambassador and help expand access to tech opportunities for African women.",
};

export default function InvolvePage() {
  return (
    <>
      <div className="w-full bg-background-light dark:bg-background-dark py-10 lg:py-16">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-16 items-center">
            <div className="flex flex-col gap-6 flex-1 text-center lg:text-left">
              <h1 className="text-[#161019] dark:text-white text-4xl lg:text-6xl font-black leading-tight tracking-tight">
                Empowering African Women in Technology
              </h1>
              <h2 className="text-[#161019] dark:text-gray-300 text-lg lg:text-xl font-normal leading-relaxed opacity-80 max-w-2xl mx-auto lg:mx-0">
                Join the Paahibu Space community to access mentorship, resources,
                and career growth opportunities tailored for you.
              </h2>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
                <button className="flex items-center justify-center rounded-lg h-12 px-8 bg-primary text-white text-base font-bold shadow-md hover:bg-primary/90 transition-all">
                  Get Involved
                </button>
                <button className="flex items-center justify-center rounded-lg h-12 px-8 bg-[#eee9f1] dark:bg-gray-800 text-[#161019] dark:text-white text-base font-bold hover:bg-[#e0dbe5] dark:hover:bg-gray-700 transition-all">
                  Learn More
                </button>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center">
              <div
                className="w-full aspect-video rounded-xl bg-center bg-cover bg-no-repeat shadow-xl relative overflow-hidden"
                data-alt="Group of diverse women working together on laptops in a modern office"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAUizkvBL88qvx2-SVMlaw9vP608baCzBii3T7ktEDATdunD9-F8GusvbJPIWkmGarAWeshkm1UbkTjAHIAAU2v2iCPtWzLhoPoqAH_GMY5e8kqXMFUOYv6R755d_325vAr2luZWn3YoDBUnANldcihdwfwOOgFCvRGUAtOIGvpzAO8mol0Apw_5oKupGoN8tk77b0IZj2RtHcxeFj1_c34RxQeHaceAom3uXIQekEYrNlt84AEQelSTXvl-9kfrW8y0e5cPeOXuN0")',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-multiply"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white dark:bg-background-dark py-12">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <h2 className="text-[#161019] dark:text-white text-3xl font-bold leading-tight tracking-tight mb-2">
            Choose Your Path
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Whether you are starting your journey or looking to give back, we have
            a place for you.
          </p>
        </div>
      </div>
      <section className="flex flex-col lg:flex-row w-full min-h-[600px]">
        <div className="flex-1 bg-primary flex flex-col items-center justify-center p-12 lg:p-[60px] text-center gap-8 group transition-all duration-300">
          <div className="p-4 rounded-full bg-white/10 mb-2">
            <span
              className="material-symbols-outlined text-white text-[80px] lg:text-[100px]"
              style={{ fontSize: "80px" }}
            >
              handshake
            </span>
          </div>
          <div className="flex flex-col gap-4 max-w-md">
            <h2 className="text-white font-display font-bold text-3xl lg:text-4xl tracking-tight">
              Become a Mentor
            </h2>
            <p className="text-white/90 font-display text-lg leading-relaxed">
              Share your expertise to empower the next generation of African women
              in tech. Your guidance can shape careers and build the future.
            </p>
          </div>
          <button className="mt-4 border-2 border-white bg-transparent text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
            Apply to Mentor
          </button>
        </div>
        <div className="flex-1 bg-accent flex flex-col items-center justify-center p-12 lg:p-[60px] text-center gap-8 group transition-all duration-300">
          <div className="p-4 rounded-full bg-white/10 mb-2">
            <span
              className="material-symbols-outlined text-white text-[80px] lg:text-[100px]"
              style={{ fontSize: "80px" }}
            >
              local_florist
            </span>
          </div>
          <div className="flex flex-col gap-4 max-w-md">
            <h2 className="text-white font-display font-bold text-3xl lg:text-4xl tracking-tight">
              Join GROW Program
            </h2>
            <p className="text-white/90 font-display text-lg leading-relaxed">
              Join a community dedicated to your professional growth. Access
              exclusive resources, workshops, and peer support to accelerate your
              journey.
            </p>
          </div>
          <Link href="/grow-program">
            <button className="mt-4 border-2 border-white bg-white text-secondary px-10 py-4 rounded-lg font-bold text-lg hover:bg-transparent hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
              Join GROW
            </button>
          </Link>
        </div>
      </section>
      <div className="w-full bg-background-light dark:bg-background-dark py-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex flex-col gap-6 lg:w-1/3 sticky top-24">
              <h2 className="text-[#161019] dark:text-white text-3xl lg:text-4xl font-black leading-tight">
                Impact &amp; Community
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                Our programs are designed to create lasting change through
                structured learning and meaningful connections.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:w-2/3">
              <div className="flex flex-col gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl border border-[#eee9f1] dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
                <div className="size-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary dark:text-white">
                  <span className="material-symbols-outlined text-[24px]">
                    school
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#161019] dark:text-white">
                  Skill Workshops
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Technical and soft-skill workshops led by industry experts to
                  keep you ahead of the curve.
                </p>
              </div>
              <div className="flex flex-col gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl border border-[#eee9f1] dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
                <div className="size-12 rounded-lg bg-accent/10 dark:bg-accent/20 flex items-center justify-center text-accent">
                  <span className="material-symbols-outlined text-[24px]">
                    diversity_3
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#161019] dark:text-white">
                  Networking Events
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Regular meetups and conferences to connect with peers,
                  recruiters, and potential partners.
                </p>
              </div>
              <div className="flex flex-col gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl border border-[#eee9f1] dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
                <div className="size-12 rounded-lg bg-yellow-500/10 dark:bg-yellow-500/20 flex items-center justify-center text-yellow-600 dark:text-yellow-400">
                  <span className="material-symbols-outlined text-[24px]">
                    lightbulb
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#161019] dark:text-white">
                  Innovation Labs
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Collaborative spaces to work on real-world projects and build
                  your portfolio.
                </p>
              </div>
              <div className="flex flex-col gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl border border-[#eee9f1] dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
                <div className="size-12 rounded-lg bg-pink-500/10 dark:bg-pink-500/20 flex items-center justify-center text-pink-600 dark:text-pink-400">
                  <span className="material-symbols-outlined text-[24px]">
                    volunteer_activism
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#161019] dark:text-white">
                  Community Support
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  A safe space for questions, advice, and emotional support
                  throughout your career.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
