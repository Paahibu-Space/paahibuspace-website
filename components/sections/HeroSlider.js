"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const totalSlides = 2;

  useEffect(() => {
    if (isVideoOpen) return; // Pause auto-slide when video is open

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 6000); // Auto slide every 6 seconds

    return () => clearInterval(timer);
  }, [isVideoOpen]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="relative overflow-hidden w-full bg-white dark:bg-background-dark transition-colors duration-300">
      <div 
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {/* Slide 1 - From HeroSectionOne.js */}
        <section className="w-full shrink-0 flex items-center pt-12 pb-20 lg:pt-24 lg:pb-32 relative">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
              <div className="flex flex-col gap-6 max-w-2xl">
                <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 dark:bg-primary/20 px-3 py-1 text-xs font-semibold text-primary dark:text-blue-300">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  Accepting New Cohort Applications
                </div>
                <h1 className="text-5xl font-black leading-[1.1] tracking-tight text-neutral-dark dark:text-white sm:text-6xl lg:text-7xl">
                  Hey sis, you belong in tech too.
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
                    onClick={() => setIsVideoOpen(true)}
                    className="flex items-center gap-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-6 py-3.5 text-base font-semibold text-neutral-dark dark:text-white hover:border-primary/30 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all">
                    <span className="material-symbols-outlined text-accent filled">play_circle</span>
                    Watch Our Story
                  </button>
                </div>
              </div>
              <div className="relative lg:h-full w-full flex items-center justify-center">
                <div className="relative w-full aspect-[4/3] lg:aspect-square overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/assets/images/hero/hiqmat-in-action.webp')" }}>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60">
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur p-4 rounded-xl shadow-lg border border-white/20">
                    <div className="flex items-center gap-4">
                      <div className="bg-accent/10 p-2 rounded-full text-accent">
                        <span className="material-symbols-outlined filled">code</span>
                      </div>
                      <div>
                        <p className="text-xs text-neutral-gray font-medium uppercase tracking-wider">Featured Program</p>
                        <p className="text-sm font-bold text-primary">GROW in Action</p>
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



        {/* Slide 2 - From HeroSectionTwo.js */}
        <section className="w-full shrink-0 flex items-center py-8 lg:py-16 relative">
             <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12 lg:gap-8 items-center">
              <div className="w-full lg:w-3/5 flex flex-col gap-8 lg:pr-12 z-10">
                <div className="flex flex-col gap-4">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-primary dark:text-blue-300 text-xs font-bold uppercase tracking-wider w-fit">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    New Cohort Open
                  </span>
                  <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.1] text-neutral-dark dark:text-white tracking-tight">
                    Hey Sis,<br />
                    You Belong in Tech Too
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
                    <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: "url('https://updates.paahibuspace.org/assets/frontend/images/female-in-tech.png')" }}>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6 sm:p-8 text-white w-full">
                      <div className="flex gap-2 mb-2">
                        <span className="px-2 py-1 text-xs font-bold bg-white/20 backdrop-blur-md rounded text-white border border-white/10">Creatives Meetup</span>
                      </div>
                      <p className="text-xl sm:text-2xl font-bold font-heading leading-tight mb-2">Building the Future Together</p>
                      <div className="flex items-center gap-2 text-sm text-gray-200">
                        <span className="material-symbols-outlined text-base">location_on</span>
                        <span>Wa, UWR-Ghana</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 z-30 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <span className="material-symbols-outlined">code</span>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Creatives Meetup</p>
                      <p className="text-sm font-bold text-neutral-dark dark:text-white">Active Now</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>
      </div>

       {/* Slider Controls */}
       <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-primary dark:text-white shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all z-40 hidden md:flex"
      >
        <span className="material-symbols-outlined">chevron_left</span>
      </button>

      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-primary dark:text-white shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all z-40 hidden md:flex"
      >
        <span className="material-symbols-outlined">chevron_right</span>
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-40">
        {[...Array(totalSlides)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={cn(
              "w-2.5 h-2.5 rounded-full transition-all",
              currentSlide === i ? "bg-primary w-8" : "bg-gray-300 dark:bg-gray-600 hover:bg-primary/50"
            )}
          />
        ))}
      </div>


      
      {/* Video Modal - Placed outside the slider transform container */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl aspect-video">
            <button 
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black/50 rounded-full p-2 transition-colors"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/TXlUCuEc6Qw?autoplay=1" 
              title="Paahibu Space Story" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
