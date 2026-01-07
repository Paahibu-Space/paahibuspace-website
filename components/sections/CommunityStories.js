"use client";

import Link from "next/link";

export default function CommunityStories() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="mb-10 lg:mb-16">
          <span className="text-primary font-bold text-sm tracking-widest uppercase mb-2 block">Community Stories</span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-900 dark:text-white leading-tight">
            Voices of Paahibu
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
            Real stories from African women in technology who are redefining their careers and shaping the future.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-8 flex flex-col">
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden group">
              <div className="absolute top-8 left-8 md:top-12 md:left-12 opacity-10 pointer-events-none">
                <span className="material-symbols-outlined text-[120px] md:text-[180px] text-primary leading-none">format_quote</span>
              </div>
              <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-10 items-center md:items-start text-center md:text-left">
                <div className="shrink-0">
                  <div className="size-[120px] rounded-full p-1 bg-gradient-to-br from-primary/30 to-transparent">
                    <div className="w-full h-full rounded-full bg-cover bg-center border-4 border-white dark:border-gray-800 shadow-lg"
                      data-alt="Portrait of Amara smiling confidently in professional attire"
                      style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBrK3773tjMZJZ_Orhlfbj9cFyPiYZFyqW-cAkip3sBJdwIwwgigry63r7RF2rVJiSBUIOOXgGq2Km9wmwbxGRe5rT3A5SA4YnoekB9NCAZmZkb7VZ2VXBJ6ljI2AKZPtCuZCFNT-JRoo8eQjLBHioIs0EAvNBdm3Qya1XiAkTYPHlKKWEkkMJyOyuAhOczoshVWUucc-ke1kQ3yKXCyC9W1uXH24skUfeZ8m1NvhKmkqsKwrJ5ANoBSQqpRx__a0w7TvmDdMyK474')" }}>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="mb-6">
                    <span className="material-symbols-outlined text-4xl text-primary mb-4 block md:hidden">format_quote</span>
                    <blockquote className="text-xl md:text-2xl lg:text-3xl font-display italic text-gray-800 dark:text-gray-100 leading-relaxed">
                      "Joining Paahibu Space was the turning point in my career. The mentorship provided me with the confidence to step into a senior engineering role."
                    </blockquote>
                  </div>
                  <div>
                    <div className="text-gray-900 dark:text-white font-bold text-lg">Amara N.</div>
                    <div className="text-primary font-medium text-sm mb-0.5">Senior Analyst at TechCorp</div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm">Data Science Cohort '23</div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-100 dark:bg-gray-800">
                <div className="h-full bg-primary transition-all duration-[5000ms] ease-linear w-full origin-left">
                </div>
              </div>
            </div>
            <div className="flex lg:hidden justify-between items-center mt-6 px-2">
              <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 transition-colors">
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>
              </div>
              <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 transition-colors">
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
          <div className="hidden lg:flex lg:col-span-4 flex-col h-full">
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm p-2">
              <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
                <h3 className="font-heading font-bold text-gray-900 dark:text-white">More Stories</h3>
                <div className="flex gap-1">
                  <span className="material-symbols-outlined text-gray-400 text-sm">pause_circle</span>
                </div>
              </div>
              <div className="flex flex-col gap-1 mt-2">
                <button className="flex items-center gap-4 p-3 rounded-lg bg-primary/5 border border-primary/20 transition-all cursor-default text-left relative overflow-hidden group">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
                  <div className="shrink-0">
                    <div className="size-12 rounded-full bg-cover bg-center border-2 border-white dark:border-gray-700"
                      data-alt="Thumbnail of Amara"
                      style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBKvQV9E0dmmsc-pbcQFwtNvbzeXjPFc7yxhWpwMka8sz6Iq4qe6JSK82GnC315pVVcW6zQkvgErfC6_2z_oAE081cto_Ds3NLQQcVHFl4uy9clh1rKSNoOnMwQ7eA7JPNsm1fWZNXtmitqUZMxSFqKyU3NXkjnNjTjtNwW5ujiHFMK_z0BeftIeFex1Wvoo2JpbW2h1UmlD3p_p93XOLyI3g8G-3xTzFbQM1CAQ5LgzN4J7eWTerERwZMT5GlnrJ8EoQCS3d89Pwg')" }}>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-gray-900 dark:text-white font-bold text-sm">Amara N.</p>
                    <p className="text-primary text-xs font-medium">Data Science Cohort</p>
                  </div>
                  <div className="ml-auto opacity-100 transition-opacity">
                    <span className="material-symbols-outlined text-primary">play_arrow</span>
                  </div>
                </button>
                <button className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 border border-transparent transition-all cursor-pointer text-left group">
                  <div className="shrink-0">
                    <div className="size-12 rounded-full bg-cover bg-center border border-gray-200 dark:border-gray-700 grayscale group-hover:grayscale-0 transition-all"
                      data-alt="Thumbnail of Chioma"
                      style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCRXuExch5G8OozHz2YsgN9XBoUshNxnL8eVCl14EXIV1Z1AA-wbbHTl63h8YfiTMcE6cIkZeBDLMMP4tt04by148ZqGX0qOgXjaiMoV5g1V_iB8J5HfD9St0BHgdk2b5WVxSk_r0yhUpho949euNhMQjQ3InwiwUoqeB5etmFQKKfHYm340PouHQRjhBjLuqARLurXN7d-XLV0gRYQeHNIYVYd2bu_Naw12MKYq29cwuaVLqVp-Edn1CbOM1U8rxk2ycOOcYFkFjk')" }}>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-gray-700 dark:text-gray-300 font-medium text-sm group-hover:text-primary transition-colors">Chioma O.</p>
                    <p className="text-gray-500 dark:text-gray-500 text-xs">UX Design Cohort</p>
                  </div>
                </button>
                <button className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 border border-transparent transition-all cursor-pointer text-left group">
                  <div className="shrink-0">
                    <div className="size-12 rounded-full bg-cover bg-center border border-gray-200 dark:border-gray-700 grayscale group-hover:grayscale-0 transition-all"
                      data-alt="Thumbnail of Zainab"
                      style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBpV-QpspJrSuIThCdEVyr2zERnnr4giMhy7g47Y79hi--EcODsK_xfCy9TgNJgf9fnWIpzeH1oWpJKcWkCoS7tdabnJI8L4hytyvCcR9ARcV-fByUoCz33tWeykfyMNj7tpQe1L-g0bGIypQRGCZ6whfMCH7uXo393CTz5I1BprYjT7sI5wYypTMxu-OjNODQfXvK3_tQ4YKKuIn1Jf6iQpxkDW3P5kx5VHtQmkxuJ9VEeX2ZnZA1qMBXY4sFLJ2lNsVkUnG45AEc')" }}>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-gray-700 dark:text-gray-300 font-medium text-sm group-hover:text-primary transition-colors">Zainab A.</p>
                    <p className="text-gray-500 dark:text-gray-500 text-xs">Web Dev Cohort</p>
                  </div>
                </button>
                <button className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 border border-transparent transition-all cursor-pointer text-left group">
                  <div className="shrink-0">
                    <div className="size-12 rounded-full bg-cover bg-center border border-gray-200 dark:border-gray-700 grayscale group-hover:grayscale-0 transition-all"
                      data-alt="Thumbnail of Nneka"
                      style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAjYva6u7KEle4Mj8LtwO5JCE6REQWu13ytMV4o2uRK8dsjy0c9VPyTC2oXHmzHZStfqY3NBB2TFxsuw3p4GiUGPKadSsMtxZbemzdkXlcQGzMI9n8q3rMWwqxdhLPdt302OByyNg9R31LMYQJiFBt5nSkCkPLWH_rzPkcBqTAvYIwh_fY0w_0YO9qG-4QGlgyVDxVb3keo5wROIXOWOhAYghB7y9oQRMFqmbdgKfJN-iktJLTz8JVpKdeBFxCNkjYL3ZmntdkDWHE')" }}>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-gray-700 dark:text-gray-300 font-medium text-sm group-hover:text-primary transition-colors">Nneka E.</p>
                    <p className="text-gray-500 dark:text-gray-500 text-xs">Product Management</p>
                  </div>
                </button>
              </div>
              <div className="p-3 mt-2 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between text-xs text-gray-500">
                <span>Next story in <span className="font-mono text-primary font-bold">04s</span></span>
                <div className="flex gap-1 h-1 w-20 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[60%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
