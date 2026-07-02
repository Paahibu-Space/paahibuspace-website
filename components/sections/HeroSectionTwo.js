import Link from "next/link";
import Image from "next/image";

export default function HeroSectionTwo() {
  return (
    <section className="hero-slider-2 flex flex-col lg:flex-row max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 lg:py-16 gap-12 lg:gap-8 items-center overflow-hidden">
      <div className="w-full lg:w-3/5 flex flex-col gap-8 lg:pr-12 z-10">
        <div className="flex flex-col gap-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-primary dark:text-blue-300 text-xs font-bold uppercase tracking-wider w-fit">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            New Cohort Open
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.1] text-neutral-dark dark:text-white tracking-tight">
            Hey Sis,<br />
            <span className="text-primary dark:text-blue-400">You Belong in Tech Too</span>
          </h1>
          <h2 className="text-base sm:text-lg text-gray-600 dark:text-gray-300 font-normal leading-relaxed max-w-xl">
            Empowering African women with the skills, mentorship, and community needed to thrive in the global
            technology ecosystem. We&apos;re building the future, one line of code at a time.
          </h2>
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
            className="flex items-center justify-center h-12 px-8 rounded-lg bg-primary hover:bg-blue-900 text-white font-bold transition-all shadow-md hover:shadow-lg group">
            <span>Explore Our Programs</span>
            <span className="material-symbols-outlined ml-2 text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
          <Link href="/stories"
            className="flex items-center justify-center h-12 px-8 rounded-lg border-2 border-primary dark:border-blue-400 hover:bg-primary hover:text-white text-primary dark:text-blue-400 dark:hover:text-white dark:hover:bg-blue-900/30 font-bold transition-all bg-transparent">
            <span>Read Impact Stories</span>
            <span className="material-symbols-outlined ml-2 text-lg">favorite</span>
          </Link>
        </div>
      </div>
      <div className="w-full lg:w-2/5 relative h-[400px] lg:h-[600px] flex items-center justify-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-100/50 to-pink-100/50 dark:from-blue-900/20 dark:to-pink-900/20 rounded-full blur-3xl -z-10">
        </div>
        <div className="relative w-full h-full max-w-md mx-auto">
          <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-2xl shadow-xl transform rotate-3 scale-95 opacity-60 z-0">
          </div>
          <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-2xl shadow-xl transform -rotate-2 scale-95 opacity-80 z-10">
          </div>
          <div className="absolute inset-0 z-20 overflow-hidden rounded-2xl shadow-2xl bg-gray-200 dark:bg-gray-800 group">
            <Image
              alt="African woman smiling confidently in a modern tech office environment holding a tablet"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMasD0an8yjMTCkUfdGhSXODn84RCXXCPyPfUpxpRhx_aMqPUHtlY-lvMnZIAR9HiiW7bO_4-6ID8PhvAoIb-5ofFJYHMKqj1rScYxWrRt1KQrN-5magg0zueMTD9okG58_j6jxrQGQbzXgTRGSGizEdRCOquIXJrmUgu4gLJPa3v7slQR7qsZ7cujdU9DyZkChWVeB-xhy_nkC6tyJFkxjbi_jMVGJSsPRVAPGUn_1V3TXl8ZKD35aOjP9Iwhe7e0fmOKTkA5l74"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 sm:p-8 text-white w-full">
              <div className="flex gap-2 mb-2">
                <span className="px-2 py-1 text-xs font-bold bg-white/20 backdrop-blur-md rounded text-white border border-white/10">Tech Summit 2023</span>
              </div>
              <p className="text-xl sm:text-2xl font-bold font-heading leading-tight mb-2">Building the Future Together</p>
              <div className="flex items-center gap-2 text-sm text-gray-200">
                <span className="material-symbols-outlined text-base">location_on</span>
                <span>Lagos, Nigeria</span>
              </div>
            </div>
            <div className="absolute top-1/2 -right-4 translate-x-0 sm:translate-x-1/2 -translate-y-1/2 z-30 hidden sm:flex flex-col gap-2">
              <button
                aria-label="View next impact photo"
                className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center text-primary dark:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <span className="material-symbols-outlined">arrow_forward_ios</span>
              </button>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 z-30 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
              <span className="material-symbols-outlined">code</span>
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Daily Coding Challenges</p>
              <p className="text-sm font-bold text-neutral-dark dark:text-white">Active Now</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
