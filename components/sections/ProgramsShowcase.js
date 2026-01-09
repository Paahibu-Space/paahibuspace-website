"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ProgramCTA, { isApplicationAccessible } from "@/components/ui/ProgramCTA";

export default function ProgramsShowcase() {
  // State to hold programs fetched from API
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPrograms() {
      try {
        const res = await fetch('/api/v1/programs');
        if (res.ok) {
            const json = await res.json();
            setPrograms(json.data || []);
        }
      } catch (e) {
        console.error("Failed to fetch programs", e);
      } finally {
        setLoading(false);
      }
    }
    fetchPrograms();
  }, []);

  // Find specific programs by ID or Name logic (since we want specific layouts)
  const growProgram = programs.find(p => p.name.includes('GROW')) || {
      id: 99,
      name: "GROW Program",
      is_application_open: false // Fallback default
  };

  const wideiProgram = programs.find(p => p.name.includes('WiDEI')) || { id: 100, name: "WiDEI", is_application_open: false };
  const techstarProgram = programs.find(p => p.name.includes('TechsiStars')) || { id: 101, name: "TechsiStars", is_application_open: false };
  const skillsProgram = programs.find(p => p.name.includes('Skills2Work')) || { id: 102, name: "Skills2Work", is_application_open: false };


  return (
    <section className="py-20 lg:py-28 bg-[#f9f9fb] dark:bg-background-dark/50 transition-colors">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-secondary font-bold tracking-wider uppercase text-sm">Programs</span>
          <h2 className="font-display font-bold text-4xl lg:text-[48px] text-primary dark:text-white mt-2 mb-4">What We Do</h2>
          <p className="max-w-2xl text-gray-600 dark:text-gray-300 text-lg">At Paahibu Space, we empower women, girls, and youth with the tools, skills, and networks they need to transform their lives.</p>
        </div>

        {/* Featured Program: GROW */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden mb-12 flex flex-col lg:flex-row">
          <div className="lg:w-2/5 h-64 lg:h-auto relative">
            <img alt="Professional women in a meeting" className="w-full h-full object-cover"
              src="https://updates.paahibuspace.org/assets/frontend/images/grow-network.webp" />
            <div className="absolute inset-0 bg-primary/10"></div>
          </div>
          <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
            <div className="bg-secondary/10 dark:bg-secondary/20 text-secondary font-bold text-xs px-3 py-1 rounded-full w-fit mb-4">Featured Program</div>
            <h3 className="font-display font-bold text-3xl text-primary dark:text-white mb-2">{growProgram.name}</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6 font-medium">Growing Real Opportunities for Women</p>
            <div className="text-gray-600 dark:text-gray-300 mb-8 space-y-4">
              <p>A comprehensive accelerator designed to help women-led startups scale.</p>
               {/* List items... */}
            </div>
            <div className="flex gap-4">
              <ProgramCTA 
                  program={growProgram}
                  labelOpen="Apply Now"
                  labelClosed={<>Join Waitlist <span className="material-symbols-outlined text-sm ml-2">notifications</span></>}
                  className="bg-secondary hover:bg-orange-600 text-white px-6 py-3"
              />
              <Link href="/grow-program" className="border border-primary dark:border-white text-primary dark:text-white hover:bg-primary hover:text-white dark:hover:bg-white dark:hover:text-primary px-6 py-3 rounded-lg font-semibold transition-colors">Learn More</Link>
            </div>
          </div>
        </div>

        {/* Grid of Other Programs */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* WiDEI */}
          <ProgramCard 
            program={wideiProgram} 
            title="WiDEI" 
            sub="Digital Inclusion"
            desc="Women in Digital Entrepreneurship & Innovation. Bridging the digital divide."
            icon="computer"
            link="/widei-program"
          />

          {/* TechsiStars */}
          <ProgramCard 
            program={techstarProgram} 
            title="TechsiStars" 
            sub="Coding Bootcamp"
            desc="An intensive coding bootcamp for young women aspiring to become software developers."
            icon="code"
            link="/techsistars-program"
          />

          {/* Skills2Work */}
          <ProgramCard 
            program={skillsProgram} 
            title="Skills2Work" 
            sub="Employability"
            desc="Soft skills and career readiness training to prepare graduates for the modern workplace."
            icon="work"
            link="#" // No page yet
          />

        </div>
        
        {/* Upcoming Programs Section */}
        <div className="mt-20 pt-16 border-t border-gray-200 dark:border-gray-700">
          <div className="mb-12">
            <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block">Upcoming Opportunities</span>
            <h3 className="text-3xl font-black text-primary dark:text-white sm:text-4xl">Open Programs & Cohorts</h3>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
              Applications are currently open for these programs. Apply now to secure your spot!
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
             {(() => {
                const openPrograms = programs.filter(program => isApplicationAccessible(program));
                
                if (openPrograms.length === 0) {
                  return <p className="col-span-full text-center text-gray-500 italic py-8">No programs currently accepting applications. Check back soon!</p>;
                }
                
                return openPrograms.map((program) => {
                  const startDate = program.application_start_date ? new Date(program.application_start_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : "TBA";

                  return (
                    <div key={program.id} className="group flex flex-col justify-between overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-sm border border-gray-200 dark:border-gray-700 transition-all hover:shadow-md">
                      <div>
                        <div className="flex items-center justify-between mb-6">
                          <span className="inline-flex items-center rounded-full px-3 py-0.5 text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                              Applications Open
                          </span>
                          <div className="text-gray-400 dark:text-gray-500">
                            <span className="material-symbols-outlined">rocket_launch</span>
                          </div>
                        </div>
                        <h4 className="text-2xl font-bold text-primary dark:text-white mb-3">{program.name}</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-2">
                           {program.description || "Join our comprehensive program designed to empower the next generation of tech leaders."}
                        </p>
                        <div className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300 mb-8">
                          <span className="material-symbols-outlined text-secondary text-lg">calendar_today</span>
                            Starts: {startDate}
                        </div>
                      </div>
                      
                      <ProgramCTA 
                          program={program}
                          labelOpen="Apply Now"
                          labelClosed="Notify Me"
                          className="w-full bg-secondary hover:bg-orange-600 text-white shadow-sm"
                      />
                    </div>
                  );
                });
             })()}
          </div>
        </div>

      </div>
    </section>
  );
}

// Subcomponent for grid cards to reduce repetition
function ProgramCard({ program, title, sub, desc, icon, link }) {
    const open = isApplicationAccessible(program);

    return (
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg hover:border-secondary hover:scale-[1.02] transition-all duration-300 flex flex-col h-full">
            <div className="w-14 h-14 bg-orange-50 dark:bg-orange-900/20 rounded-lg flex items-center justify-center text-secondary mb-6">
              <span className="material-symbols-outlined text-3xl">{icon}</span>
            </div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-display font-bold text-xl text-primary dark:text-white">{title}</h4>
              <span className={`text-xs px-2 py-1 rounded border ${open ? 'bg-green-50 text-green-600 border-green-200' : 'bg-gray-100 text-gray-500 border-gray-200'}`}>
                  {open ? 'Open' : 'Closed'}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-3">
              {desc}
            </p>
            <div className="mt-auto flex items-center justify-between gap-4">
                <Link className="text-secondary text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all"
                  href={link}>Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
                
                {/* Mini Action Button */}
                <ProgramCTA 
                    program={program}
                    labelOpen="Apply"
                    labelClosed="Waitlist"
                    className={`!px-3 !py-2 text-xs font-bold ${open ? 
                        "!bg-primary !text-white hover:!bg-primary/90" : 
                        "!bg-white border border-primary !text-primary hover:!bg-gray-50"}`}
                />
            </div>
          </div>
    )
}
