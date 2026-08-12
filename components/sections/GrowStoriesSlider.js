"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";

const stories = [
  {
    image: "/assets/images/programs/grow-story-1.png",
    quote:
      "“Opportunities Multiply in Networks Access banking services, grants, loans, and enterprise kits through our partnerships. Being in GROW opens doors you can't open alone. Through GROW, you will join other women to influence policies that affect women's businesses and families. Together, you will make government and institutions listen to the informal sector.”",
    name: "GROW Member",
    role: "GROW Member",
  },
  {
    image: "/assets/images/programs/grow-story-2.png",
    quote:
      "“Women are Rebuilding Trust in Digital Finance Scammers once took my money on MoMo, and I lost GHS800.00 last year because of a mobile money scam call. I used to be afraid to even check mobile money messages and I stopped using it for business. But with what we learnt about fraud and safety, I am using MoMo again. It saves time, and I don't fear like before.”",
    name: "GROW Member",
    role: "GROW Member",
  },
  {
    image: "/assets/images/programs/grow-story-3.png",
    quote:
      "“Women are Gaining Voice in Policy Spaces ẠI never thought my voice could matter in government issues. I only knew about my value when it's time for voting. But through GROW, we learnt how to speak about our challenges during the policy session I shared how difficult it is to register my small shea butter business because of too many steps and costs. The officials who came to take us through business registration listened and promised to support us through simplified registration. This made me feel I was been heard for the first time”",
    name: "GROW Member",
    role: "GROW Member",
  },
  {
    image: "/assets/images/programs/grow-story-4.png",
    quote:
      "“Women Belong in Tech & We Think You Should Join GROW Too You should join GROW if you are a woman running a small business or interested in entrepreneurship because no woman should build alone. In GROW, you will find a siSTARhood that supports your business and personal growth.”",
    name: "GROW Member",
    role: "GROW Member",
  },
  {
    image: "/assets/images/programs/grow-story-5.png",
    quote:
      "“Opportunities Multiply in Networks Access banking services, grants, loans, and enterprise kits through our partnerships. Being in GROW opens doors you can't open alone. Through GROW, you will join other women to influence policies that affect women's businesses and families. Together, you will make government and institutions listen to the informal sector.”",
    name: "GROW Member",
    role: "GROW Member",
  },
];

export default function GrowStoriesSlider() {
  const [index, setIndex] = useState(0);

  const goTo = useCallback((i) => {
    setIndex((i + stories.length) % stories.length);
  }, []);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % stories.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const story = stories[index];

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="relative overflow-hidden rounded-2xl bg-background-light dark:bg-gray-800 border border-navy/5 dark:border-white/10">
        <div className="grid md:grid-cols-2 items-stretch">
          <div className="relative h-72 md:h-full min-h-[320px]">
            <Image
              key={story.image}
              alt={story.name}
              className="object-cover"
              src={story.image}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={index === 0}
            />
          </div>
          <div className="p-8 md:p-10 flex flex-col justify-center relative">
            <span className="material-symbols-outlined text-primary text-4xl absolute top-6 right-6 opacity-30">
              format_quote
            </span>
            <p className="text-navy/80 dark:text-gray-200 leading-relaxed text-lg mb-6">
              {story.quote}
            </p>
            <div>
              <div className="font-bold text-navy dark:text-white">
                {story.name}
              </div>
              <div className="text-xs text-primary font-bold uppercase tracking-wide">
                {/* {story.role} */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button
        type="button"
        onClick={prev}
        aria-label="Previous story"
        className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white dark:bg-gray-700 shadow-md flex items-center justify-center text-navy dark:text-white hover:bg-primary hover:text-white transition-colors"
      >
        <span className="material-symbols-outlined">chevron_left</span>
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next story"
        className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white dark:bg-gray-700 shadow-md flex items-center justify-center text-navy dark:text-white hover:bg-primary hover:text-white transition-colors"
      >
        <span className="material-symbols-outlined">chevron_right</span>
      </button>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {stories.map((s, i) => (
          <button
            key={s.image}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to story ${i + 1}`}
            className={`h-2.5 rounded-full transition-all ${
              i === index
                ? "w-8 bg-primary"
                : "w-2.5 bg-navy/20 dark:bg-white/20 hover:bg-primary/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
