"use client";

import Link from "next/link";

export default function HeroSlider() {
  return (
    <div className="relative overflow-hidden w-full bg-white dark:bg-background-dark transition-colors duration-300">
      <div className="flex h-full">
        {/* Slide 1 */}
        <section className="w-full shrink-0 flex items-center pt-12 pb-20 lg:pt-24 lg:pb-32 relative">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
              <div className="flex flex-col gap-6 max-w-2xl animate-fade-up">
                <h1 className="text-3xl leading-[1.15] tracking-tight text-neutral-dark dark:text-white sm:text-4xl lg:text-5xl">
                  Increasing Agency. Amplifying Voice. Building Resilience.
                </h1>
                <p className="text-lg leading-relaxed text-neutral-gray dark:text-gray-300 max-w-lg">
                  Paahibu Space is a youth-led organisation working with women, girls, and hard-to-reach and at-risk youth to increase their agency, strengthen their voice and resilience, and contribute to sustained improvements in their lives and communities.
                </p>
                <p className="text-lg leading-relaxed text-neutral-gray dark:text-gray-300 max-w-lg">
                  We work across technology, education, entrepreneurship, policy advocacy and community development to expand access to opportunities, develop locally relevant solutions and strengthen participation in the decisions that shape people&apos;s lives.
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <Link href="/our-work"
                    className="rounded-full bg-primary px-8 py-3.5 text-base font-bold text-white hover:bg-blue-900 hover:-translate-y-0.5 transition-all">
                    Explore Our Work
                  </Link>
                  <Link href="/partners"
                    className="flex items-center gap-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-6 py-3.5 text-base font-semibold text-neutral-dark dark:text-white hover:border-primary/30 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all">
                    Partner With Us
                  </Link>
                </div>
              </div>
              <div className="relative lg:h-full w-full flex items-center justify-center">
                <div className="relative w-full aspect-[4/3] lg:aspect-square overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="absolute inset-0 bg-cover bg-center"
                    role="img"
                    aria-label="Hiqmat leading a hands-on tech training session"
                    style={{ backgroundImage: "url('/assets/images/hero/grow-hero2.webp')" }}>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60">
                  </div>

                </div>
                <div className="absolute -top-12 -right-12 h-64 w-64 rounded-full bg-accent/10 blur-3xl -z-10"></div>
                <div className="absolute -bottom-12 -left-12 h-64 w-64 rounded-full bg-primary/10 blur-3xl -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 2 - commented out, kept for reference
        <section className="w-full shrink-0 flex items-center py-8 lg:py-16 relative">
             <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12 lg:gap-8 items-center">
              <div className="w-full lg:w-3/5 flex flex-col gap-8 lg:pr-12 z-10">
                <div className="flex flex-col gap-4">
                  <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.1] text-neutral-dark dark:text-white tracking-tight">
                    Hey Sis,<br />
                    You Belong in Tech Too
                  </h1>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 font-normal leading-relaxed max-w-xl">
                    Increasing the agency of the next generation of African women with the skills, mentorship, and community needed to thrive in the global
                    technology ecosystem. We're building the future, one line of code at a time.
                  </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 py-4 border-y border-gray-100 dark:border-gray-800">
                  <div className="flex flex-col gap-1">
                    <p className="text-3xl font-bold text-primary dark:text-blue-400 font-heading">5,000+</p>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Community Members</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-3xl font-bold text-primary dark:text-blue-400 font-heading">150+</p>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Expert Mentors</p>
                  </div>
                  <div className="flex flex-col gap-1 col-span-2 sm:col-span-1">
                    <p className="text-3xl font-bold text-primary dark:text-blue-400 font-heading">95%</p>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Job Placement Rate</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Link href="/programs"
                    className="flex items-center justify-center h-12 px-8 rounded-lg bg-primary hover:bg-blue-900 text-white font-bold transition-all group">
                    <span>Join the New Cohort</span>
                    <span className="material-symbols-outlined ml-2 text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </Link>
                  <Link href="/stories"
                    className="flex items-center justify-center h-12 px-8 rounded-lg border-2 border-primary dark:border-blue-400 hover:bg-primary hover:text-white text-primary dark:text-blue-400 dark:hover:text-white dark:hover:bg-blue-900/30 font-bold transition-all bg-transparent">
                    <span>Impact Stories</span>
                  </Link>
                </div>
              </div>
              <div className="w-full lg:w-2/5 relative h-[400px] lg:h-[600px] flex items-center justify-center">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-100/50 to-pink-100/50 dark:from-blue-900/20 dark:to-pink-900/20 rounded-full blur-3xl -z-10">
                </div>
                <div className="relative w-full h-full max-w-md mx-auto">
                  <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-2xl transform rotate-3 scale-95 opacity-60 z-0">
                  </div>
                  <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-2xl transform -rotate-2 scale-95 opacity-80 z-10">
                  </div>
                  <div className="absolute inset-0 z-20 overflow-hidden rounded-2xl bg-gray-200 dark:bg-gray-800 group">
                    <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      role="img"
                      aria-label="Community members at a Creatives Meetup in Wa, Upper West Region, Ghana"
                      style={{ backgroundImage: "url('/assets/images/hero/hiqmat-in-action.webp')" }}>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  </div>
                </div>
              </div>
            </div>
        </section>
        */}
      </div>
    </div>
  );
}
