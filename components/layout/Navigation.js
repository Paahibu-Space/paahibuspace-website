"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const pathname = usePathname();
  const [theme, setTheme] = useState("light");
  
  const isActive = (path) => pathname === path;

  useEffect(() => {
    // Check local storage or system preference
    if (
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="flex items-center gap-6 lg:gap-8">
      <Link
        href="/"
        className={cn(
          "text-sm font-medium transition-colors hover:text-secondary",
          isActive("/") ? "text-secondary font-bold" : "text-neutral-dark dark:text-white"
        )}
      >
        Home
      </Link>
      {/* Programs Mega Menu */}
      <div className="group relative">
        <button className={cn(
          "flex items-center gap-1 text-sm font-medium transition-colors py-6 hover:text-secondary",
           isActive("/programs") || isActive("/techsistars-program") || isActive("/grow-program") ? "text-secondary font-bold" : "text-neutral-dark dark:text-white"
        )}>
          Programs
          <span className="material-symbols-outlined text-lg">expand_more</span>
        </button>
        <div className="mega-menu absolute left-1/2 -translate-x-1/2 top-full w-screen max-w-4xl opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 ease-out bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 p-6 z-50">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-8 grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
                  Learning Paths
                </h3>
                <Link
                  href="/programs"
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group/item"
                >
                  <div className="bg-blue-50 dark:bg-blue-900/20 text-primary dark:text-blue-400 p-2 rounded-lg group-hover/item:bg-primary group-hover/item:text-white dark:group-hover/item:text-white transition-colors">
                    <span className="material-symbols-outlined">code</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-neutral-dark dark:text-white group-hover/item:text-primary dark:group-hover/item:text-white transition-colors">
                      Web Development
                    </div>
                    <div className="text-xs text-neutral-gray dark:text-gray-400 mt-1">
                      Full-stack bootcamp for beginners
                    </div>
                  </div>
                </Link>
                <Link
                  href="/programs"
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group/item"
                >
                  <div className="bg-orange-50 dark:bg-orange-900/20 text-secondary dark:text-orange-400 p-2 rounded-lg group-hover/item:bg-secondary group-hover/item:text-white transition-colors">
                    <span className="material-symbols-outlined">data_usage</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-neutral-dark dark:text-white">
                      Data Science
                    </div>
                    <div className="text-xs text-neutral-gray dark:text-gray-400 mt-1">
                      Analytics and visualization skills
                    </div>
                  </div>
                </Link>
                 <Link
                  href="/widei-program"
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group/item"
                >
                  <div className="bg-pink-50 dark:bg-pink-900/20 text-pink-500 dark:text-pink-400 p-2 rounded-lg group-hover/item:bg-pink-500 group-hover/item:text-white transition-colors">
                    <span className="material-symbols-outlined">groups_3</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-neutral-dark dark:text-white">
                      WiDEI
                    </div>
                    <div className="text-xs text-neutral-gray dark:text-gray-400 mt-1">
                     Digital Entrepreneurship
                    </div>
                  </div>
                </Link>
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
                  Growth & Support
                </h3>
                <Link
                  href="/techsistars-program"
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group/item"
                >
                  <div className="bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 p-2 rounded-lg group-hover/item:bg-purple-600 group-hover/item:text-white transition-colors">
                    <span className="material-symbols-outlined">
                      supervisor_account
                    </span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-neutral-dark dark:text-white">
                      Mentorship
                    </div>
                    <div className="text-xs text-neutral-gray dark:text-gray-400 mt-1">
                      TechsiStars Mentorship Program
                    </div>
                  </div>
                </Link>
                <Link
                  href="/grow-program"
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group/item"
                >
                  <div className="bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 p-2 rounded-lg group-hover/item:bg-green-600 group-hover/item:text-white transition-colors">
                    <span className="material-symbols-outlined">
                      rocket_launch
                    </span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-neutral-dark dark:text-white">
                      Founder's Lab
                    </div>
                    <div className="text-xs text-neutral-gray dark:text-gray-400 mt-1">
                      GROW Incubator
                    </div>
                  </div>
                </Link>
                 <Link
                  href="/widib-program"
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group/item"
                >
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 p-2 rounded-lg group-hover/item:bg-yellow-600 group-hover/item:text-white transition-colors">
                    <span className="material-symbols-outlined">
                      analytics
                    </span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-neutral-dark dark:text-white">
                      WIBID
                    </div>
                    <div className="text-xs text-neutral-gray dark:text-gray-400 mt-1">
                      Business Development
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-span-4 bg-primary/5 dark:bg-gray-800 rounded-xl p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-primary dark:text-white mb-2">
                  Next Cohort
                </h3>
                <p className="text-sm text-neutral-gray dark:text-gray-400 mb-4">
                  Applications are open for the Summer 2024 Web Dev intake.
                </p>
              </div>
              <Link href="/involve" className="w-full text-center rounded-lg bg-primary py-2.5 text-sm font-bold text-white shadow-sm hover:bg-blue-900 transition-all cursor-pointer">
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* About Mega Menu */}
      <div className="group relative">
        <button className={cn(
          "flex items-center gap-1 text-sm font-medium transition-colors py-6 hover:text-secondary",
           isActive("/about") || isActive("/mission") || isActive("/team") || isActive("/philosophy") ? "text-secondary font-bold" : "text-neutral-dark dark:text-white"
        )}>
          About
          <span className="material-symbols-outlined text-lg">expand_more</span>
        </button>
        <div className="mega-menu absolute left-1/2 -translate-x-1/2 top-full w-64 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 ease-out bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-100 dark:border-gray-800 p-2 z-50">
          <Link
            href="/about"
            className="block px-4 py-2 text-sm text-neutral-dark dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary rounded-lg"
          >
            Overview
          </Link>
          <Link
            href="/mission"
            className="block px-4 py-2 text-sm text-neutral-dark dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary rounded-lg"
          >
            Our Mission
          </Link>
          <Link
            href="/team"
            className="block px-4 py-2 text-sm text-neutral-dark dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary rounded-lg"
          >
            Leadership Team
          </Link>
          <Link
            href="/philosophy"
            className="block px-4 py-2 text-sm text-neutral-dark dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary rounded-lg"
          >
            Philosophy
          </Link>
        </div>
      </div>
      <Link
        href="/impact"
         className={cn(
          "text-sm font-medium transition-colors hover:text-secondary",
          isActive("/impact") ? "text-secondary font-bold" : "text-neutral-dark dark:text-white"
        )}>
        Impact
      </Link>
      <Link
        href="/stories"
         className={cn(
          "text-sm font-medium transition-colors hover:text-secondary",
          isActive("/stories") ? "text-secondary font-bold" : "text-neutral-dark dark:text-white"
        )}>
        Stories
      </Link>
      
      <div className="ml-4 flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-neutral-dark dark:text-white transition-colors"
          aria-label="Toggle theme"
        >
          {theme === "light" ? (
             <span className="material-symbols-outlined text-2xl">dark_mode</span>
          ) : (
             <span className="material-symbols-outlined text-2xl">light_mode</span>
          )}
        </button>
        <Link href="/involve" className="rounded-full bg-secondary px-6 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-secondary/80 hover:shadow transition-all cursor-pointer">
          Get Involved
        </Link>
      </div>
    </div>
  );
}
