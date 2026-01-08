"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";

export default function MobileMenu({ open, setOpen }) {
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    setMounted(true);
    // Initialize theme
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

  const toggleSubmenu = (menu) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu);
  };

  if (!mounted) return null;

  return createPortal(
    <div className={cn(
        "fixed inset-0 z-[999] lg:hidden transition-opacity duration-300",
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
    )}>
      {/* Backdrop */}
      <div 
        className={cn(
            "fixed inset-0 bg-black/25 backdrop-blur-sm transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0"
        )}
        onClick={() => setOpen(false)}
      />
      
      {/* Menu Panel */}
      <div className={cn(
          "fixed inset-y-0 right-0 z-[1000] w-full overflow-y-auto bg-white dark:bg-background-dark px-6 py-6 sm:max-w-sm border-l border-gray-100 dark:border-gray-800 shadow-2xl transition-transform duration-300 ease-in-out",
          open ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex items-center justify-between">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2" onClick={() => setOpen(false)}>
            <img src="/logo.png" alt="Paahibu Space Logo" className="h-8 w-auto object-contain" />
             <span className="font-bold text-lg text-primary dark:text-white">Paahibu Space</span>
          </Link>
          <div className="flex items-center gap-4">
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
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-neutral-dark dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setOpen(false)}
            >
              <span className="sr-only">Close menu</span>
               <span className="material-symbols-outlined text-2xl">close</span>
            </button>
          </div>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-700/50">
            <div className="space-y-2 py-6">
              <Link
                href="/"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-neutral-dark dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
              
               {/* Programs Submenu */}
               <div>
                  <button onClick={() => toggleSubmenu('programs')} className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-neutral-dark dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800">
                    Programs
                    <span className={`material-symbols-outlined text-lg transition-transform ${activeSubmenu === 'programs' ? 'rotate-180' : ''}`}>expand_more</span>
                  </button>
                  {activeSubmenu === 'programs' && (
                    <div className="mt-2 space-y-2 pl-4">
                      <Link href="/programs" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-sm font-semibold text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">
                        Web Development
                      </Link>
                      <Link href="/programs" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-sm font-semibold text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">
                        Data Science
                      </Link>
                      <Link href="/widei-program" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-sm font-semibold text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">
                        WiDEI
                      </Link>
                      <Link href="/techsistars-program" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-sm font-semibold text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">
                        TechsiStars
                      </Link>
                       <Link href="/grow-program" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-sm font-semibold text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">
                        GROW Program
                      </Link>
                      <Link href="/widib-program" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-sm font-semibold text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">
                        WIBID
                      </Link>
                    </div>
                  )}
               </div>

              {/* About Submenu */}
              <div>
                  <button onClick={() => toggleSubmenu('about')} className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-neutral-dark dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800">
                    About
                    <span className={`material-symbols-outlined text-lg transition-transform ${activeSubmenu === 'about' ? 'rotate-180' : ''}`}>expand_more</span>
                  </button>
                  {activeSubmenu === 'about' && (
                    <div className="mt-2 space-y-2 pl-4">
                      <Link href="/about" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-sm font-semibold text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">
                        Overview
                      </Link>
                      <Link href="/mission" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-sm font-semibold text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">
                        Our Mission
                      </Link>
                      <Link href="/team" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-sm font-semibold text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">
                        Leadership Team
                      </Link>
                      <Link href="/philosophy" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-sm font-semibold text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">
                         Philosophy
                      </Link>
                    </div>
                  )}
               </div>

              <Link
                href="/impact"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-neutral-dark dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
                onClick={() => setOpen(false)}
              >
                Impact
              </Link>
              <Link
                href="/stories"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-neutral-dark dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
                onClick={() => setOpen(false)}
              >
                Stories
              </Link>
            </div>
            <div className="py-6">
              <Link
                href="/involve"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-neutral-dark dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
                onClick={() => setOpen(false)}
              >
                Join Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
