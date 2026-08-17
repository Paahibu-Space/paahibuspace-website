import Link from "next/link";
import Image from "next/image";

export default function HeroSectionOne() {
  return (
    <section className="hero-slider-1 relative bg-white dark:bg-background-dark pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="flex flex-col gap-6 max-w-2xl animate-fade-up">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 dark:bg-primary/20 px-3 py-1 text-xs font-semibold text-primary dark:text-blue-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Accepting New Cohort Applications
            </div>
            <h1 className="text-5xl leading-[1.1] tracking-tight text-neutral-dark dark:text-white sm:text-6xl lg:text-7xl">
              Hey sis, you belong in <span className="text-primary dark:text-blue-400">tech</span> too.
            </h1>
            <p className="text-lg leading-relaxed text-neutral-gray dark:text-gray-300 max-w-lg">
              Empowering African women and youth through technology and entrepreneurship. We are bridging the gender gap by providing safe spaces, education, and mentorship.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link href="/programs"
                className="rounded-full bg-primary px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-primary/25 hover:bg-blue-900 hover:-translate-y-0.5 transition-all">
                Explore Programs
              </Link>
              <button
                aria-label="Watch our story video"
                className="flex items-center gap-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-6 py-3.5 text-base font-semibold text-neutral-dark dark:text-white hover:border-primary/30 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all">
                <span className="material-symbols-outlined text-accent filled">play_circle</span>
                Watch Our Story
              </button>
            </div>
          </div>
          <div className="relative lg:h-full w-full flex items-center justify-center">
            <div className="relative w-full aspect-[4/3] lg:aspect-square overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
              <Image
                alt="Three African women working together on laptops in a modern office, smiling"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYAU-ZRtsAe7wVWjjajAni93uPswYWbHGI5Jz4TdS7ZxVOHx2jmE6Q3-HmOTNjIV4TobcpBDHl1faK7q6gYOwfIreiM7UiHQ_fois1FpDxRm21Yn8vHMbGZqHObS-M0TvXVXqQnSLyRme2GhCbFiNoKC9So1crqiTWMVSQtp3rTZ-LRDvQ4Jnue3siRNvHThLsIolrg-dGVCuO8XeGt898STszDbubmHyKhP1X-xzN-sQhmdtfsZyy840nZ6Ke2HMF9V5bwvt06DJJ"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60">
              </div>
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-gray-900/95 backdrop-blur p-4 rounded-xl shadow-lg border border-white/20 dark:border-gray-700">
                <div className="flex items-center gap-4">
                  <div className="bg-accent/10 p-2 rounded-full text-accent">
                    <span className="material-symbols-outlined filled">code</span>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-gray dark:text-gray-400 font-medium uppercase tracking-wider">Current Cohort</p>
                    <p className="text-sm font-bold text-primary dark:text-blue-400">Web Development Bootcamp</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-12 -right-12 h-64 w-64 rounded-full bg-accent/10 blur-3xl -z-10"></div>
            <div className="absolute -bottom-12 -left-12 h-64 w-64 rounded-full bg-primary/10 blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
