"use client";

import Link from "next/link";

export default function NewsletterSection() {
  return (
    <div className="relative flex min-h-[50vh] flex-col items-center justify-center p-4 sm:p-8">
      <div className="relative w-full max-w-[800px] overflow-hidden rounded-2xl dark:bg-gray-50 dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700 transition-colors duration-300">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-blue-100/50 dark:bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 h-64 w-64 rounded-full bg-orange-100/30 dark:bg-orange-500/10 blur-3xl"></div>
        <div className="relative flex flex-col items-center px-6 py-12 sm:px-12 sm:py-16 text-center">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-primary dark:text-blue-200 sm:text-4xl">
            Join the Movement
          </h2>
          <p className="mb-8 max-w-2xl text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
            Empowering African women in technology. Get the latest opportunities, mentorship updates, and tech news delivered directly to your inbox.
          </p>
          <div className="w-full max-w-lg">
            <form className="flex flex-col gap-3 sm:flex-row sm:items-stretch" onSubmit={(e) => e.preventDefault()}>
              <div className="relative flex-grow">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="material-symbols-outlined text-slate-400">mail</span>
                </div>
                <input aria-label="Email address"
                  className="block w-full rounded-lg border-0 bg-white dark:bg-zinc-700 py-3.5 pl-10 pr-4 text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-primary focus:ring-inset shadow-sm sm:text-sm sm:leading-6"
                  placeholder="Enter your email address" required="" type="email" />
              </div>
              <button className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3.5 text-sm font-bold text-white shadow-sm hover:bg-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-200"
                type="submit">
                Subscribe Now
              </button>
            </form>
          </div>
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px]">lock</span>
            We respect your privacy. No spam, unsubscribe anytime.
          </p>
          <div className="my-8 w-24 border-t border-slate-300 dark:border-slate-600/50"></div>
          <div className="flex flex-col items-center gap-4">
            <span className="text-sm font-semibold text-primary dark:text-blue-200 uppercase tracking-wider text-xs">Join our community</span>
            <div className="flex gap-4">
              <Link className="group flex flex-col items-center gap-1" href="#">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-zinc-700 text-slate-600 dark:text-slate-300 shadow-sm transition-transform group-hover:-translate-y-1 group-hover:text-[#0077b5]">
                  <span className="material-symbols-outlined">business_center</span>
                </div>
                <span className="text-[10px] font-medium text-slate-500 opacity-0 transition-opacity group-hover:opacity-100">LinkedIn</span>
              </Link>
              <Link className="group flex flex-col items-center gap-1" href="#">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-zinc-700 text-slate-600 dark:text-slate-300 shadow-sm transition-transform group-hover:-translate-y-1 group-hover:text-[#1DA1F2]">
                  <span className="material-symbols-outlined">campaign</span>
                </div>
                <span className="text-[10px] font-medium text-slate-500 opacity-0 transition-opacity group-hover:opacity-100">Twitter</span>
              </Link>
              <Link className="group flex flex-col items-center gap-1" href="#">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-zinc-700 text-slate-600 dark:text-slate-300 shadow-sm transition-transform group-hover:-translate-y-1 group-hover:text-[#4267B2]">
                  <span className="material-symbols-outlined">groups</span>
                </div>
                <span className="text-[10px] font-medium text-slate-500 opacity-0 transition-opacity group-hover:opacity-100">Facebook</span>
              </Link>
              <Link className="group flex flex-col items-center gap-1" href="#">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-zinc-700 text-slate-600 dark:text-slate-300 shadow-sm transition-transform group-hover:-translate-y-1 group-hover:text-[#E1306C]">
                  <span className="material-symbols-outlined">photo_camera</span>
                </div>
                <span className="text-[10px] font-medium text-slate-500 opacity-0 transition-opacity group-hover:opacity-100">Instagram</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
