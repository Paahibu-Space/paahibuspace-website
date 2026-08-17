"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

const values = [
  {
    id: "01",
    title: "Why We Continue to Stand Out",
    content:
      "What makes Paahibu Space unique is our people-first approach. We go beyond providing digital and entrepreneurial skills — we create an ecosystem of inclusivity, innovation, and support. By combining knowledge, mentorship, and community, we empower women, girls, and youth not only to thrive in today's digital world but to become leaders who shape the future.",
    tags: ["#PeopleFirst", "#Innovation"],
    image:
      "/assets/images/why-we-stand-out.webp",
    caption: "Community First",
    desc: "Building a stronger future together through shared knowledge.",
  },
  {
    id: "02",
    title: "Building Relationships",
    content:
      "We believe that strong relationships are the foundation of success. Our mentors and learners form bonds that extend beyond the classroom, creating a lifetime network of support.",
    image:
      "/assets/images/building-relationships.webp",
    caption: "Stronger Together",
    desc: "Connecting minds, creating opportunities.",
  },
  {
    id: "03",
    title: "One Big Family",
    content:
      "Inclusion is at our heart. We create a safe space where everyone belongs, regardless of their background. When you join Paahibu, you join a family.",
    image:
      "/assets/images/big-family.png",
    caption: "Inclusive Growth",
    desc: "A safe space for everyone to thrive.",
  },
  {
    id: "04",
    title: "Relationship Commitment",
    content:
      "Our commitment to our community is unwavering. We support each member's journey for the long haul, celebrating every milestone along the way.",
    image:
      "/assets/images/commitment.png",
    caption: "Long-term Impact",
    desc: "Supporting you every step of the way.",
  },
];

export default function PhilosophyValues() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeValue = values[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % values.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + values.length) % values.length);
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] md:text-[15rem] font-black text-gray-200/50 dark:text-gray-700/20 select-none z-0 pointer-events-none">
            Values
        </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-white mb-4">
            Our Philosophy
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Image Section */}
          <div className="lg:col-span-5 relative group">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={activeValue.image}
                alt={activeValue.caption}
                className="object-cover transition-opacity duration-500"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full text-white">
                <h3 className="font-bold text-2xl mb-2">
                  {activeValue.caption}
                </h3>
                <p className="text-sm text-blue-100 opacity-90">
                  {activeValue.desc}
                </p>
              </div>
            </div>
            
            <button
                onClick={handlePrev}
                className="absolute top-1/2 -left-4 md:-left-8 -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors z-20"
            >
                <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button
                onClick={handleNext}
                className="absolute top-1/2 -right-4 md:-right-8 -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors z-20"
            >
                <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>

          {/* Accordion Section */}
          <div className="lg:col-span-7 space-y-6">
            {values.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700 overflow-hidden transition-all duration-300",
                  activeIndex === index ? "shadow-md ring-1 ring-primary/20" : "hover:shadow-md"
                )}
              >
                <div
                  className="p-6 cursor-pointer flex justify-between items-center"
                  onClick={() => setActiveIndex(index)}
                >
                  <h3 className="font-bold text-xl text-primary dark:text-white flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-primary text-sm font-bold">
                      {item.id}
                    </span>
                    {item.title}
                  </h3>
                  <span
                    className={cn(
                      "material-symbols-outlined text-gray-400 transform transition-transform duration-300",
                      activeIndex === index ? "rotate-180 text-primary" : ""
                    )}
                  >
                    expand_more
                  </span>
                </div>
                <div
                  className={cn(
                    "px-6 grid transition-all duration-300 ease-in-out",
                     activeIndex === index ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] pb-0 opacity-0"
                  )}
                >
                    <div className="overflow-hidden">
                        <div className="pl-11">
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                            {item.content}
                            </p>
                            {item.tags && (
                            <div className="flex gap-4 mt-4">
                                {item.tags.map((tag, i) => (
                                <div
                                    key={i}
                                    className="px-4 py-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg text-sm font-medium text-primary dark:text-blue-200 border border-gray-100 dark:border-gray-600"
                                >
                                    {tag}
                                </div>
                                ))}
                            </div>
                            )}
                        </div>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
