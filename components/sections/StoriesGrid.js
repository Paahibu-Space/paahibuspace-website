"use client";
import React, { useState } from "react";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function StoriesGrid({ initialStories = [] }) {
  const [filter, setFilter] = useState("All");

  // Helper to get safe type string from either nested object (API) or string (Mock)
  const getStoryType = (story) => {
    return story.story_type?.name || story.type || "";
  };

  // Filter logic
  const filteredStories = initialStories.filter(story => {
    if (filter === "All") return true;
    const type = getStoryType(story);
    const tag = story.tag || "";
    
    return type.toLowerCase().includes(filter.toLowerCase()) || 
           tag.toLowerCase().includes(filter.toLowerCase());
  });

  // Extract unique types for the filter tabs
  const availableTypes = ["All", ...new Set(initialStories.map(s => getStoryType(s)).filter(Boolean))];
  // If no dynamic types found, fallback to defaults
  const filterTabs = availableTypes.length > 1 ? availableTypes : ["All", "Alumnae", "MSME"];

  return (
    <section className="py-16 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Tabs */}
        <div className="flex overflow-x-auto pb-4 mb-10 gap-2 border-b border-gray-100 dark:border-gray-800 hide-scrollbar">
          {filterTabs.map((f) => (
             <Button 
                key={f}
                variant={filter === f ? "secondary" : "ghost"} 
                size="sm" 
                className="rounded-full text-sm"
                onClick={() => setFilter(f)}
             >
            {f === "All" ? "All Stories" : f}
          </Button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStories.map((story, index) => {
            const displayType = getStoryType(story);
            
            return (
              <article
                key={index}
                className="group flex flex-col bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-gray-700">
                  <div className="absolute inset-0 bg-accent/10 group-hover:bg-transparent transition-colors z-10"></div>
                  <img
                    alt={story.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={story.image_url || story.image}
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur text-xs font-bold text-primary rounded-full uppercase tracking-wider">
                      {displayType}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col flex-grow p-6">
                  <div className="flex items-center gap-2 text-xs font-medium text-gray-400 dark:text-gray-500 mb-3">
                    <span className="material-symbols-outlined text-[16px]">
                      calendar_today
                    </span>
                    <span>{story.program}</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary dark:text-white mb-3 leading-snug group-hover:text-primary dark:group-hover:text-secondary transition-colors">
                    {story.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {story.quote}
                  </p>
                  <div className="mt-auto">
                    <Link
                      href={`/stories/${story.slug}`}
                      className="inline-flex items-center text-primary dark:text-white font-semibold text-sm hover:gap-2 transition-all group-hover/link"
                    >
                      Read Story{" "}
                      <span className="material-symbols-outlined text-[18px] ml-1">
                        arrow_forward
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
