"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import MobileMenu from "@/components/layout/MobileMenu";
import { useTheme } from "@/lib/ThemeContext";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-background-dark/95 backdrop-blur transition-colors duration-300">
      <div className="hidden lg:block border-b border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-black/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex justify-end gap-6 py-2">
          <Link href="/partners" className="text-xs font-medium text-neutral-gray dark:text-gray-400 hover:text-secondary transition-colors">
            Partners
          </Link>
          <Link href="/team" className="text-xs font-medium text-neutral-gray dark:text-gray-400 hover:text-secondary transition-colors">
            Leadership & Team
          </Link>
          <Link href="/careers" className="text-xs font-medium text-neutral-gray dark:text-gray-400 hover:text-secondary transition-colors">
            Careers
          </Link>
          <Link href="/contact" className="text-xs font-medium text-neutral-gray dark:text-gray-400 hover:text-secondary transition-colors">
            Contact
          </Link>
          <Link href="/donate" className="text-xs font-medium text-neutral-gray dark:text-gray-400 hover:text-secondary transition-colors">
            Donate
          </Link>
        </div>
      </div>
      <nav className="mx-auto h-20 flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center">
            <Image
              src={theme === "dark" ? "/logo-white.png" : "/logo-dark.png"}
              alt="Paahibu Space Logo"
              width={theme === "dark" ? 628 : 815}
              height={theme === "dark" ? 250 : 306}
              className="h-15 w-auto object-contain"
              priority
            />
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
