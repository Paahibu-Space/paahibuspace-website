"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { cn } from "@/lib/utils";

export default function MobileMenu({ open, setOpen }) {
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Initialize theme
    const isDark =
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    if (isDark) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
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

  const closeMenu = () => setOpen(false);

  return (
    <Transition show={open} as={Fragment}>
      <Dialog as="div" className="relative z-[999] lg:hidden" onClose={closeMenu}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-300"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-300"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen sm:max-w-sm">
                  <div className="flex h-full flex-col overflow-y-auto bg-white dark:bg-background-dark px-6 py-6 border-l border-gray-100 dark:border-gray-800 shadow-2xl">
                    <div className="flex items-center justify-between">
                      <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2" onClick={closeMenu}>
                        <div className="relative h-8 w-auto aspect-[3/1]">
                          <Image src="/logo.png" alt="Paahibu Space Logo" fill className="object-contain" />
                        </div>
                        <Dialog.Title as="span" className="font-bold text-lg text-primary dark:text-white">
                          Paahibu Space
                        </Dialog.Title>
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
                          onClick={closeMenu}
                          aria-label="Close menu"
                        >
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
                            onClick={closeMenu}
                          >
                            Home
                          </Link>

                          {/* Programs Submenu */}
                          <div>
                            <button
                              onClick={() => toggleSubmenu("programs")}
                              aria-expanded={activeSubmenu === "programs"}
                              className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-neutral-dark dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
                            >
                              Programs
                              <span className={`material-symbols-outlined text-lg transition-transform ${activeSubmenu === "programs" ? "rotate-180" : ""}`}>expand_more</span>
                            </button>
                            {activeSubmenu === "programs" && (
                              <div className="mt-2 space-y-2 pl-4">
                                <Link href="/techsistars-program" onClick={closeMenu} className="block rounded-lg px-3 py-2 text-sm font-semibold text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">
                                  TechsiStars
                                </Link>
                                <Link href="/widei-program" onClick={closeMenu} className="block rounded-lg px-3 py-2 text-sm font-semibold text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">
                                  WiDEI
                                </Link>
                                <Link href="/digital-walansi-program" onClick={closeMenu} className="block rounded-lg px-3 py-2 text-sm font-semibold text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">
                                  Digital Walansi
                                </Link>
                                <Link href="/grow-program" onClick={closeMenu} className="block rounded-lg px-3 py-2 text-sm font-semibold text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">
                                  GROW Program
                                </Link>
                                <Link href="/widib-program" onClick={closeMenu} className="block rounded-lg px-3 py-2 text-sm font-semibold text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">
                                  WiDiB
                                </Link>
                                <Link href="/community-ambassadors-program" onClick={closeMenu} className="block rounded-lg px-3 py-2 text-sm font-semibold text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">
                                  Community Ambassadors
                                </Link>
                              </div>
                            )}
                          </div>

                          {/* About Submenu */}
                          <div>
                            <button
                              onClick={() => toggleSubmenu("about")}
                              aria-expanded={activeSubmenu === "about"}
                              className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-neutral-dark dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
                            >
                              About
                              <span className={`material-symbols-outlined text-lg transition-transform ${activeSubmenu === "about" ? "rotate-180" : ""}`}>expand_more</span>
                            </button>
                            {activeSubmenu === "about" && (
                              <div className="mt-2 space-y-2 pl-4">
                                <Link href="/about" onClick={closeMenu} className="block rounded-lg px-3 py-2 text-sm font-semibold text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">
                                  Overview
                                </Link>
                                <Link href="/mission" onClick={closeMenu} className="block rounded-lg px-3 py-2 text-sm font-semibold text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">
                                  Our Mission
                                </Link>
                                <Link href="/team" onClick={closeMenu} className="block rounded-lg px-3 py-2 text-sm font-semibold text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">
                                  Leadership Team
                                </Link>
                                <Link href="/philosophy" onClick={closeMenu} className="block rounded-lg px-3 py-2 text-sm font-semibold text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">
                                  Philosophy
                                </Link>
                              </div>
                            )}
                          </div>

                          <Link
                            href="/impact"
                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-neutral-dark dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
                            onClick={closeMenu}
                          >
                            Impact
                          </Link>
                          <Link
                            href="/stories"
                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-neutral-dark dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
                            onClick={closeMenu}
                          >
                            Stories
                          </Link>
                          <Link
                            href="/blog"
                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-neutral-dark dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
                            onClick={closeMenu}
                          >
                            Blog
                          </Link>
                        </div>
                        <div className="py-6">
                          <Link
                            href="/involve"
                            className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-neutral-dark dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
                            onClick={closeMenu}
                          >
                            Join Us
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
