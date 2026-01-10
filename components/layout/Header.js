"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import MobileMenu from "@/components/layout/MobileMenu";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Check local storage or system preference on mount
    const isDark =
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    if (isDark) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
        // Ensure strictly sync
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
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-background-dark/95 backdrop-blur transition-colors duration-300">
      <nav className="mx-auto h-20 flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-1.5">
            <span className="sr-only">Paahibu Space</span>
            <div className="relative h-10 w-10">
                 <Image src="/logo.png" alt="Paahibu Space Logo" fill className="object-contain" sizes="40px" priority />
            </div>
            <span className="font-bold text-xl tracking-tight text-primary dark:text-white">Paahibu Space</span>
          </Link>
        </div>
        
        <div className="flex items-center gap-4 lg:hidden">
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
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-neutral-dark dark:text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Navigation />
        </div>
      </nav>
      <MobileMenu open={mobileMenuOpen} setOpen={setMobileMenuOpen} />
    </header>
  );
}
