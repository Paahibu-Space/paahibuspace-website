"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const pillars = [
  {
    id: "technology",
    title: "Technology & Digital Futures",
    tagline:
      "Building the skills, safety and locally relevant technologies people need to participate meaningfully in an increasingly digital and AI-driven world.",
    paragraphs: [
      "We work with women, girls and young people to strengthen their ability to participate safely, critically and productively in an increasingly digital and AI-driven world.",
      "Our work includes digital skills, AI literacy, Media and Information Literacy, online safety, responsible technology and the prevention of Technology-Facilitated Gender-Based Violence.",
      "We also develop locally relevant technologies informed by the experiences and needs of the people expected to use them.",
    ],
  },
  {
    id: "education",
    title: "Education & Youth Development",
    tagline:
      "Creating accessible learning opportunities that strengthen knowledge, critical thinking, leadership and pathways to opportunity.",
    paragraphs: [
      "We create accessible learning opportunities that strengthen knowledge, critical thinking, digital capabilities, leadership and people's ability to navigate changing education, work and social environments.",
      "Our work takes place across schools, communities and digital spaces and includes peer learning, mentorship and opportunities that connect learning to real-world application.",
    ],
  },
  {
    id: "entrepreneurship",
    title: "Entrepreneurship & Economic Opportunity",
    tagline:
      "Supporting women entrepreneurs and young people with business knowledge, technology, networks, enterprise support and pathways to stronger livelihoods.",
    paragraphs: [
      "We work with women entrepreneurs and young people to strengthen businesses, increase access to appropriate business knowledge and technology, and expand pathways to livelihoods and economic participation.",
      "Our work combines entrepreneurship education, enterprise support, access to finance and networks, locally relevant digital solutions and opportunities for entrepreneurs to learn from one another.",
    ],
  },
  {
    id: "policy",
    title: "Policy Advocacy, Leadership & Participation",
    tagline: "The experiences of communities should inform the decisions that affect them.",
    paragraphs: [
      "We generate evidence through our programmes, community research and direct engagement with women, girls and young people. We use this evidence to strengthen our own work and contribute community perspectives to wider policy and development conversations.",
      "We also create and support pathways that connect women, girls and young people to decision-making spaces where they can speak for themselves, contribute their knowledge and participate in shaping policies, programmes and systems.",
      "Our work places particular emphasis on women's and girls' leadership, civic and political participation, recognising that representation is not simply about being present, but having the agency, information and opportunity to influence what happens.",
    ],
  },
  {
    id: "community",
    title: "Community Development",
    tagline:
      "We work alongside communities to identify priorities, strengthen local capacity and develop responses grounded in people's lived realities.",
    paragraphs: [
      "Rather than treating communities only as places where programmes are delivered, we recognise community members as partners, knowledge holders and contributors to the solutions being developed.",
      "Our community networks also help relationships, knowledge and opportunities continue beyond individual programme cycles.",
    ],
  },
];

export default function ProgramsShowcase() {
  const triggerRefs = useRef([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    // IntersectionObserver with a center-line rootMargin: fires only when a
    // trigger crosses the viewport's vertical middle, not on every scroll frame.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(Number(entry.target.dataset.index));
          }
        });
      },
      { threshold: 0, rootMargin: "-50% 0px -50% 0px" },
    );

    const nodes = triggerRefs.current;
    nodes.forEach((node) => node && observer.observe(node));
    return () => observer.disconnect();
  }, []);

  // Jump straight to a pillar instead of smooth-scrolling (and flipping) through every card in between.
  const goToPillar = (index) => {
    setActive(index);
    triggerRefs.current[index]?.scrollIntoView({ behavior: "instant", block: "start" });
  };

  return (
    <section className="bg-[#f9f9fb] dark:bg-background-dark/50 transition-colors">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 lg:pt-28">
        <span className="text-secondary font-bold tracking-wider uppercase text-sm">
          What We Do
        </span>
        <h2 className="font-display text-4xl lg:text-[48px] text-primary dark:text-white mt-2">
          Where We Focus Our Work
        </h2>
      </div>

      {/* Scroll track: one 100vh trigger zone per pillar, behind a single pinned stage */}
      <div className="relative" style={{ height: `${pillars.length * 100}vh` }}>
        {pillars.map((_, index) => (
          <div
            key={`trigger-${index}`}
            ref={(node) => {
              triggerRefs.current[index] = node;
            }}
            data-index={index}
            className="absolute left-0 w-px h-screen"
            style={{ top: `${index * 100}vh` }}
          />
        ))}

        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {pillars.map((pillar, index) => {
            return (
              <div
                key={pillar.id}
                aria-hidden={active !== index}
                className={cn(
                  "absolute inset-0 flex transition-transform duration-500 ease-out motion-reduce:transition-none will-change-transform",
                  index <= active
                    ? "translate-y-0 pointer-events-auto"
                    : "translate-y-full pointer-events-none",
                )}
                style={{ zIndex: index + 1 }}
              >
                <div className="relative flex-1 flex items-center justify-center overflow-y-auto bg-primary px-6 sm:px-12 lg:px-20 py-16">
                  <div className="max-w-2xl text-center lg:text-left">
                    <h3 className="text-3xl lg:text-5xl text-white mb-4">
                      {pillar.title}
                    </h3>
                    <p className="text-white/90 font-medium text-lg lg:text-xl mb-6 leading-relaxed">
                      {pillar.tagline}
                    </p>
                    <div className="space-y-4">
                      {pillar.paragraphs.map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-white/75 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="hidden md:flex">
                  {pillars.map((tabPillar, tabIndex) => {
                    const isTabActive = tabIndex === index;
                    return (
                      <button
                        key={tabPillar.id}
                        type="button"
                        aria-current={isTabActive ? "true" : undefined}
                        onClick={() => goToPillar(tabIndex)}
                        className={cn(
                          "w-16 lg:w-20 h-full flex items-center justify-center border-l border-white/15 cursor-pointer transition-colors",
                          isTabActive ? "bg-secondary" : "bg-primary hover:bg-blue-900",
                        )}
                      >
                        <span
                          className={cn(
                            "font-bold tracking-wide text-sm [writing-mode:vertical-rl] rotate-180 whitespace-nowrap",
                            isTabActive ? "text-white" : "text-white/80",
                          )}
                        >
                          {tabPillar.title}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-20 lg:pb-28 text-center">
        <Link
          href="/programs"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-bold text-white hover:bg-blue-900 hover:-translate-y-0.5 transition-all"
        >
          Explore What We Do →
        </Link>
      </div>
    </section>
  );
}
