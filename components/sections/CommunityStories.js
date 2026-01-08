"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const stories = [
  {
    name: "Amara N.",
    role: "Senior Analyst at TechCorp",
    cohort: "Data Science Cohort '23",
    quote: "Joining Paahibu Space was the turning point in my career. The mentorship provided me with the confidence to step into a senior engineering role.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrK3773tjMZJZ_Orhlfbj9cFyPiYZFyqW-cAkip3sBJdwIwwgigry63r7RF2rVJiSBUIOOXgGq2Km9wmwbxGRe5rT3A5SA4YnoekB9NCAZmZkb7VZ2VXBJ6ljI2AKZPtCuZCFNT-JRoo8eQjLBHioIs0EAvNBdm3Qya1XiAkTYPHlKKWEkkMJyOyuAhOczoshVWUucc-ke1kQ3yKXCyC9W1uXH24skUfeZ8m1NvhKmkqsKwrJ5ANoBSQqpRx__a0w7TvmDdMyK474",
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKvQV9E0dmmsc-pbcQFwtNvbzeXjPFc7yxhWpwMka8sz6Iq4qe6JSK82GnC315pVVcW6zQkvgErfC6_2z_oAE081cto_Ds3NLQQcVHFl4uy9clh1rKSNoOnMwQ7eA7JPNsm1fWZNXtmitqUZMxSFqKyU3NXkjnNjTjtNwW5ujiHFMK_z0BeftIeFex1Wvoo2JpbW2h1UmlD3p_p93XOLyI3g8G-3xTzFbQM1CAQ5LgzN4J7eWTerERwZMT5GlnrJ8EoQCS3d89Pwg"
  },
  {
    name: "Chioma O.",
    role: "UX Researcher at FinTech",
    cohort: "UX Design Cohort",
    quote: "I found my voice through Paahibu. The community support helped me navigate the challenges of being a woman in tech.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRXuExch5G8OozHz2YsgN9XBoUshNxnL8eVCl14EXIV1Z1AA-wbbHTl63h8YfiTMcE6cIkZeBDLMMP4tt04by148ZqGX0qOgXjaiMoV5g1V_iB8J5HfD9St0BHgdk2b5WVxSk_r0yhUpho949euNhMQjQ3InwiwUoqeB5etmFQKKfHYm340PouHQRjhBjLuqARLurXN7d-XLV0gRYQeHNIYVYd2bu_Naw12MKYq29cwuaVLqVp-Edn1CbOM1U8rxk2ycOOcYFkFjk",
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRXuExch5G8OozHz2YsgN9XBoUshNxnL8eVCl14EXIV1Z1AA-wbbHTl63h8YfiTMcE6cIkZeBDLMMP4tt04by148ZqGX0qOgXjaiMoV5g1V_iB8J5HfD9St0BHgdk2b5WVxSk_r0yhUpho949euNhMQjQ3InwiwUoqeB5etmFQKKfHYm340PouHQRjhBjLuqARLurXN7d-XLV0gRYQeHNIYVYd2bu_Naw12MKYq29cwuaVLqVp-Edn1CbOM1U8rxk2ycOOcYFkFjk"
  },
  {
    name: "Zainab A.",
    role: "Frontend Developer",
    cohort: "Web Dev Cohort",
    quote: "The hands-on projects were exactly what I needed. I went from knowing nothing to building full-stack apps in weeks.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpV-QpspJrSuIThCdEVyr2zERnnr4giMhy7g47Y79hi--EcODsK_xfCy9TgNJgf9fnWIpzeH1oWpJKcWkCoS7tdabnJI8L4hytyvCcR9ARcV-fByUoCz33tWeykfyMNj7tpQe1L-g0bGIypQRGCZ6whfMCH7uXo393CTz5I1BprYjT7sI5wYypTMxu-OjNODQfXvK3_tQ4YKKuIn1Jf6iQpxkDW3P5kx5VHtQmkxuJ9VEeX2ZnZA1qMBXY4sFLJ2lNsVkUnG45AEc",
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpV-QpspJrSuIThCdEVyr2zERnnr4giMhy7g47Y79hi--EcODsK_xfCy9TgNJgf9fnWIpzeH1oWpJKcWkCoS7tdabnJI8L4hytyvCcR9ARcV-fByUoCz33tWeykfyMNj7tpQe1L-g0bGIypQRGCZ6whfMCH7uXo393CTz5I1BprYjT7sI5wYypTMxu-OjNODQfXvK3_tQ4YKKuIn1Jf6iQpxkDW3P5kx5VHtQmkxuJ9VEeX2ZnZA1qMBXY4sFLJ2lNsVkUnG45AEc"
  },
  {
    name: "Nneka E.",
    role: "Product Manager",
    cohort: "Product Management",
    quote: "Paahibu taught me that leadership is about service. I'm now mentoring others to follow in my footsteps.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjYva6u7KEle4Mj8LtwO5JCE6REQWu13ytMV4o2uRK8dsjy0c9VPyTC2oXHmzHZStfqY3NBB2TFxsuw3p4GiUGPKadSsMtxZbemzdkXlcQGzMI9n8q3rMWwqxdhLPdt302OByyNg9R31LMYQJiFBt5nSkCkPLWH_rzPkcBqTAvYIwh_fY0w_0YO9qG-4QGlgyVDxVb3keo5wROIXOWOhAYghB7y9oQRMFqmbdgKfJN-iktJLTz8JVpKdeBFxCNkjYL3ZmntdkDWHE",
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjYva6u7KEle4Mj8LtwO5JCE6REQWu13ytMV4o2uRK8dsjy0c9VPyTC2oXHmzHZStfqY3NBB2TFxsuw3p4GiUGPKadSsMtxZbemzdkXlcQGzMI9n8q3rMWwqxdhLPdt302OByyNg9R31LMYQJiFBt5nSkCkPLWH_rzPkcBqTAvYIwh_fY0w_0YO9qG-4QGlgyVDxVb3keo5wROIXOWOhAYghB7y9oQRMFqmbdgKfJN-iktJLTz8JVpKdeBFxCNkjYL3ZmntdkDWHE"
  }
];

export default function CommunityStories() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const DURATION = 5000; // 5 seconds
  const INTERVAL = 50; // Update every 50ms

  useEffect(() => {
    let timer;
    if (!isPaused) {
      timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setActiveIndex((current) => (current + 1) % stories.length);
            return 0;
          }
           // Calculate increment based on interval and total duration
           const increment = (INTERVAL / DURATION) * 100;
           return prev + increment;
        });
      }, INTERVAL);
    }
    return () => clearInterval(timer);
  }, [isPaused, activeIndex]);
  
  // Reset progress when active index changes manually
  const handleManualChange = (index) => {
    setActiveIndex(index);
    setProgress(0);
  };
  
  const activeStory = stories[activeIndex];
  const timeLeft = Math.ceil((DURATION * (1 - progress / 100)) / 1000);


  return (
    <section className="py-24 bg-background-light dark:bg-background-dark/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="mb-10 lg:mb-16">
          <span className="text-primary dark:text-gray-200 font-bold text-sm tracking-widest uppercase mb-2 block">Community Stories</span>
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
                <span className="material-symbols-outlined text-[120px] md:text-[180px] text-primary dark:text-gray-600 leading-none">format_quote</span>
              </div>
              <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-10 items-center md:items-start text-center md:text-left transition-opacity duration-500 ease-in-out">
                <div className="shrink-0">
                  <div className="size-[120px] rounded-full p-1 bg-gradient-to-br from-primary/30 to-transparent">
                    <div className="w-full h-full rounded-full bg-cover bg-center border-4 border-white dark:border-gray-800 shadow-lg"
                      data-alt={`Portrait of ${activeStory.name}`}
                      style={{ backgroundImage: `url('${activeStory.image}')` }}>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="mb-6">
                    <span className="material-symbols-outlined text-4xl text-primary dark:text-white mb-4 block md:hidden">format_quote</span>
                    <blockquote className="text-xl md:text-2xl font-display italic text-gray-800 dark:text-gray-100 leading-relaxed">
                      "{activeStory.quote}"
                    </blockquote>
                  </div>
                  <div>
                    <div className="text-gray-900 dark:text-white font-bold text-lg">{activeStory.name}</div>
                    <div className="text-primary dark:text-gray-300 font-medium text-sm mb-0.5">{activeStory.role}</div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm">{activeStory.cohort}</div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-100 dark:bg-gray-800">
                <div 
                    className="h-full bg-primary dark:bg-white/50 transition-all duration-75 ease-linear"
                    style={{ width: `${progress}%` }}
                >
                </div>
              </div>
            </div>
            <div className="flex lg:hidden justify-between items-center mt-6 px-2">
              <button 
                onClick={() => handleManualChange((activeIndex - 1 + stories.length) % stories.length)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 transition-colors"
                >
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
              <div className="flex gap-2">
                {stories.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => handleManualChange(idx)}
                        className={cn(
                        "w-2 h-2 rounded-full transition-colors",
                         activeIndex === idx ? "bg-primary dark:bg-white" : "bg-gray-300 dark:bg-gray-700"
                        )}
                    />
                ))}
              </div>
              <button 
                onClick={() => handleManualChange((activeIndex + 1) % stories.length)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 transition-colors"
               >
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
          <div className="hidden lg:flex lg:col-span-4 flex-col h-full">
            <div 
                className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm p-4"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
              <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center">
                <h3 className="font-heading font-bold text-gray-900 dark:text-white">More Stories</h3>
                <button 
                    onClick={() => setIsPaused(!isPaused)}
                    className="flex gap-1 hover:text-primary dark:hover:text-white transition-colors"
                >
                  <span className="material-symbols-outlined text-gray-400 dark:text-gray-500 text-sm">
                      {isPaused ? 'play_circle' : 'pause_circle'}
                  </span>
                </button>
              </div>
              <div className="flex flex-col gap-1 mt-4">
                {stories.map((story, index) => (
                     <button 
                        key={index}
                        onClick={() => handleManualChange(index)}
                        className={cn(
                            "flex items-center gap-4 p-3 rounded-lg border transition-all cursor-pointer text-left relative overflow-hidden group",
                            activeIndex === index 
                                ? "bg-primary/5 dark:bg-white/5 border-primary/20 dark:border-white/20" 
                                : "hover:bg-gray-50 dark:hover:bg-gray-700/50 border-transparent"
                        )}
                    >
                        {activeIndex === index && (
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary dark:bg-white"></div>
                        )}
                        <div className="shrink-0">
                            <div className={cn(
                                "size-12 rounded-full bg-cover bg-center border border-gray-200 dark:border-gray-700 transition-all",
                                activeIndex !== index && "grayscale group-hover:grayscale-0",
                                activeIndex === index && "border-primary dark:border-white"
                            )}
                            data-alt={`Thumbnail of ${story.name}`}
                            style={{ backgroundImage: `url('${story.thumbnail}')` }}>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <p className={cn(
                                "font-bold text-sm transition-colors",
                                activeIndex === index ? "text-gray-900 dark:text-white" : "text-gray-700 dark:text-gray-300 group-hover:text-primary dark:group-hover:text-white"
                            )}>
                                {story.name}
                            </p>
                            <p className={cn(
                                "text-xs transition-colors",
                                activeIndex === index ? "text-primary dark:text-gray-300 font-medium" : "text-gray-500 dark:text-gray-500"
                            )}>{story.cohort}</p>
                        </div>
                        {activeIndex === index && (
                            <div className="ml-auto opacity-100 transition-opacity">
                                <span className="material-symbols-outlined text-primary dark:text-white">play_arrow</span>
                            </div>
                        )}
                    </button>
                ))}
              </div>
              <div className="p-3 mt-4 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                <span>Next story in <span className="font-mono text-primary dark:text-white font-bold">0{timeLeft}s</span></span>
                <div className="flex gap-1 h-1 w-20 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-primary dark:bg-white transition-all duration-75 ease-linear" style={{ width: `${progress}%` }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
