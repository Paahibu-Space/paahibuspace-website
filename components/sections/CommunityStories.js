"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const defaultStories = [
  {
    name: "Adenike Owoeye",
    role: "Backend Developer",
    cohort: "TechsiStars Alumna",
    quote: "My journey as a Backend Developer started the day I joined the TechsiStars Mentorship Program. I was truly blessed with an incredible mentor whose guidance, experience, and encouragement made all the difference.",
    image: "/assets/images/team/adenike.jpg",
    thumbnail: "/assets/images/team/adenike.jpg"
  },
   {
    name: "Fauzia Katali",
    role: "UX Research Intern",
    cohort: "TechsiStars Alumna",
    quote: "From knowing nothing about design to confidently navigating Figma and creating designs, it&apos;s been a truly exciting journey. The mentorship gave me not just technical skills but also the confidence to believe I belong in this space.",
    image: "/assets/images/team/fauzia.jpg",
    thumbnail: "/assets/images/team/fauzia.jpg"
  },
  {
    name: "Julie Radol",
    role: "Tech Law Consultant",
    cohort: "TechsiStars Alumna",
    quote: "The Paahibu Space TechsiStars Mentorship Program truly supports every path. Today, I&apos;m fully practicing Tech Law and deepening my advocacy for safe online spaces, especially for women and girls.",
    image: "/assets/images/team/julie.jpg",
    thumbnail: "/assets/images/team/julie.jpg"
  },
  {
    name: "Poula Anek",
    role: "Data Entry Intern",
    cohort: "TechsiStars Alumna",
    quote: "The biggest win for me was right after the program, my mentor supported me in landing a 6-month remote data entry contract. I&apos;m now a more confident, tech-savvy advocate who&apos;s ready to drive real change.",
    image: "/assets/images/team/poula.jpg",
    thumbnail: "/assets/images/team/poula.jpg"
  }
];

export default function CommunityStories({ stories = defaultStories }) {
  // Ensure we have at least defaults if empty array passed
  const displayStories = stories && stories.length > 0 ? stories.map(s => ({
      ...s,
      thumbnail: s.thumbnail || s.image_url, 
      cohort: s.cohort || s.type || "Community Member"
  })) : defaultStories;

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
            setActiveIndex((current) => (current + 1) % displayStories.length);
            return 0;
          }
           // Calculate increment based on interval and total duration
           const increment = (INTERVAL / DURATION) * 100;
           return prev + increment;
        });
      }, INTERVAL);
    }
    return () => clearInterval(timer);
  }, [isPaused, activeIndex, displayStories.length]);
  
  // Reset progress when active index changes manually
  const handleManualChange = (index) => {
    setActiveIndex(index);
    setProgress(0);
  };
  
  const activeStory = displayStories[activeIndex];
  const timeLeft = Math.ceil((DURATION * (1 - progress / 100)) / 1000);

  if (!activeStory) return null;

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
                      style={{ backgroundImage: `url('${activeStory.image_url}')` }}>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="mb-6">
                    <span className="material-symbols-outlined text-4xl text-primary dark:text-white mb-4 block md:hidden">format_quote</span>
                    <blockquote className="text-xl md:text-2xl font-display italic text-gray-800 dark:text-gray-100 leading-relaxed">
                      &quot;{activeStory.quote}&quot;
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
                onClick={() => handleManualChange((activeIndex - 1 + displayStories.length) % displayStories.length)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 transition-colors"
                >
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
              <div className="flex gap-2">
                {displayStories.map((_, idx) => (
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
                onClick={() => handleManualChange((activeIndex + 1) % displayStories.length)}
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
                {displayStories.map((story, index) => (
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
