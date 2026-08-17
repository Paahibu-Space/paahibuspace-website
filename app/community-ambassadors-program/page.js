import Link from "next/link";
import Image from "next/image";
import { fetchAPI } from "@/lib/api";
import ProgramCTA from "@/components/ui/ProgramCTA";
import AmbassadorStories from "@/components/sections/AmbassadorStories";

export const metadata = {
  title: "Community Ambassadors Program",
  description: "Become a Paahibu Space Community Ambassador and lead digital empowerment initiatives for women and girls in your own community.",
};

export default async function CommunityAmbassadorsProgramPage() {
  const programs = await fetchAPI("/api/v1/programs") || [];
  const ambassadorsProgram = programs.find(p => p.name.includes("Community Ambassador")) || { 
      id: 104, 
      name: "Community Ambassadors Program",
      is_application_open: true 
  };

  const team = await fetchAPI("/api/v1/team") || [];
  const getCategory = (member) => {
    if (typeof member.category === 'object' && member.category !== null) {
      return member.category.name || "";
    }
    return member.category || "";
  };
  const ambassadorsMembers = team.filter(m => getCategory(m) === 'Ambassadors');

  const allStories = await fetchAPI("/api/v1/stories") || [];
  // Filter for stories that are about the ambassadors program
  const programStories = allStories.filter(s => 
    s.type?.includes('Community Ambassador') || 
    s.program?.includes('Community Ambassador') ||
    s.category === 'Community Ambassadors'
  );

  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-white dark:bg-background-dark border-b border-gray-100 dark:border-white/10 relative z-20">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
             <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                 <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
                 <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                 <Link href="/programs" className="hover:text-secondary transition-colors">Programs</Link>
                 <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                 <span className="font-semibold text-secondary">Community Ambassadors</span>
             </div>
         </div>
     </div>

     {/* Hero Section */}
     <section className="relative bg-[#0b1120] overflow-hidden pt-20 pb-32">
         {/* Background Pattern */}
         <div className="absolute inset-0 opacity-20" 
             style={{backgroundImage: 'radial-gradient(#f6861e 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
         
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
             <div className="grid lg:grid-cols-2 gap-12 items-center">
                 <div>
                     <div className="inline-flex items-center gap-2 bg-orange-900/30 border border-orange-500/30 rounded-full px-4 py-1 text-orange-400 font-bold text-sm tracking-wide uppercase mb-6">
                         Community Leadership
                     </div>
                     <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                         Leading Change <span className="text-secondary">From Within</span>
                     </h1>
                     <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                         Our Community Ambassadors are the heartbeat of Paahibu Space. They are local leaders who
                         drive digital adoption and advocate for women&apos;s digital rights in their own communities.
                     </p>
                     <div className="flex flex-wrap gap-4">
                         <ProgramCTA 
                            program={ambassadorsProgram}
                            labelOpen="Apply to Join"
                            labelClosed="Join Waitlist"
                            className="bg-secondary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-600 shadow-lg shadow-orange-900/20"
                         />
                         <button className="flex items-center gap-2 text-white font-bold px-6 py-4 rounded-xl hover:bg-white/5 transition-colors">
                             <span className="material-symbols-outlined">play_circle</span>
                             Watch Their Stories
                         </button>
                     </div>
                 </div>
                 <div className="relative">
                     <div className="relative z-10 grid grid-cols-2 gap-4">
                         <div className="relative w-full h-64">
                             <Image src="/assets/images/programs/ca-hero1.png" className="rounded-2xl shadow-2xl object-cover transform translate-y-8" alt="Community Ambassador 1" fill sizes="(max-width: 768px) 100vw, 50vw" />
                         </div>
                         <div className="relative w-full h-64">
                             <Image src="/assets/images/programs/ca-hero2.png" className="rounded-2xl shadow-2xl object-cover" alt="Community Ambassador 2" fill sizes="(max-width: 768px) 100vw, 50vw" />
                         </div>
                     </div>
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-secondary/10 blur-[100px] rounded-full pointer-events-none"></div>
                 </div>
             </div>
         </div>
     </section>

     {/* Stats Grid */}
     <section className="bg-[#0b1120] py-12">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
                 <div>
                     <p className="text-4xl font-black mb-1">50+</p>
                     <p className="font-bold text-sm uppercase tracking-wide opacity-80">Active Community Ambassadors</p>
                 </div>
                 <div>
                     <p className="text-4xl font-black mb-1">10</p>
                     <p className="font-bold text-sm uppercase tracking-wide opacity-80">Regions Covered</p>
                 </div>
                 <div>
                     <p className="text-4xl font-black mb-1">5k+</p>
                     <p className="font-bold text-sm uppercase tracking-wide opacity-80">Community Members</p>
                 </div>
                 <div>
                     <p className="text-4xl font-black mb-1">100%</p>
                     <p className="font-bold text-sm uppercase tracking-wide opacity-80">Woman Led</p>
                 </div>
             </div>
         </div>
     </section>

     {/* What Community Ambassadors Do */}
     <section className="py-24 bg-white dark:bg-background-dark">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-16">
                 <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Role of a Community Ambassador</h2>
                 <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                     Community Ambassadors bridge the gap between Paahibu Space and grassroots communities.
                 </p>
             </div>
             <div className="grid md:grid-cols-2 gap-8">
                 {[
                     { title: "Digital Training", desc: "Organize and facilitate local digital literacy workshops using our provided curriculum.", icon: "school" },
                     { title: "Community Outreach", desc: "Identify women who need support and onboard them into our programs (WiDEI, WiDiB).", icon: "groups" },
                     { title: "Feedback Loop", desc: "Collect data and stories from the ground to help us improve our interventions.", icon: "rate_review" },
                     { title: "Advocacy", desc: "Represent Paahibu Space at local forums and advocate for women&apos;s digital inclusion.", icon: "campaign" }
                 ].map((role, i) => (
                     <div key={i} className="flex gap-6 p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-white/5 hover:border-secondary/30 transition-colors group">
                         <div className="w-16 h-16 rounded-full bg-white dark:bg-white/10 flex items-center justify-center text-secondary shadow-sm shrink-0 group-hover:bg-secondary group-hover:text-white transition-colors">
                             <span className="material-symbols-outlined text-3xl">{role.icon}</span>
                         </div>
                         <div>
                             <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{role.title}</h3>
                             <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{role.desc}</p>
                         </div>
                     </div>
                 ))}
             </div>
         </div>
     </section>

      {/* SECTION 4: MEET OUR AMBASSADORS */}
      <section className="py-20 bg-white dark:bg-background-dark/50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                    <div>
                        <h2 className="text-[#0b1120] dark:text-white text-3xl sm:text-4xl font-bold">Meet Our Community Ambassadors</h2>
                        <p className="text-gray-600 dark:text-gray-400 mt-2 text-lg">Leading change across Africa.</p>
                    </div>
                    <Link className="text-secondary font-bold flex items-center gap-1 hover:underline" href="/team">
                        View all profiles <span className="material-symbols-outlined">arrow_right_alt</span>
                    </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {ambassadorsMembers.length > 0 ? ambassadorsMembers.slice(0, 3).map((ambassador, idx) => (
                      <div key={idx} className="relative group overflow-hidden rounded-xl">
                          <div className="aspect-[3/4] w-full bg-gray-200 dark:bg-gray-700 relative">
                              <Image alt={ambassador.name}
                                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                                  src={ambassador.image_url} 
                                  fill
                                  sizes="(max-width: 768px) 100vw, 25vw"
                              />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120]/90 via-[#0b1120]/40 to-transparent p-6 flex flex-col justify-end">
                              <div className="flex items-center gap-2 mb-2">
                                  <span className="bg-secondary text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">{ambassador.location || 'Community Ambassador'}</span>
                              </div>
                              <h3 className="text-white text-xl font-bold">{ambassador.name}</h3>
                              <p className="text-gray-200 text-sm mt-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 transform translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 line-clamp-2">
                                  {ambassador.bio_short || ambassador.role}
                              </p>
                          </div>
                      </div>
                    )) : (
                      <>
                        <p className="text-gray-500">Loading ambassadors...</p>
                      </>
                    )}
                    
                    {/* Join the Network Card */}
                    <div className="relative group overflow-hidden rounded-xl bg-[#0b1120] flex flex-col items-center justify-center p-6 text-center border border-white/10">
                        <div className="absolute inset-0 opacity-10"
                            style={{backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "20px 20px"}}>
                        </div>
                        <span className="material-symbols-outlined text-secondary text-6xl mb-4">public</span>
                        <h3 className="text-white text-xl font-bold z-10">Join the Network</h3>
                        <p className="text-gray-300 text-sm mt-2 z-10 mb-6">
                            Represent your community on the map.
                        </p>
                        <ProgramCTA 
                            program={ambassadorsProgram}
                            labelOpen="Apply Now"
                            labelClosed="Join Waitlist"
                            className="z-10 bg-white text-[#0d0e1b] dark:text-secondary font-bold py-2 px-6 rounded-lg text-sm hover:bg-gray-100 transition-colors"
                        />
                    </div>
                </div>
            </div>
      </section>

      {/* SECTION 5: AMBASSADOR STORIES / IMPACT */}
      {/* <AmbassadorStories stories={programStories} /> */}

        {/* Benefits / Why Join Section */}
        <div className="w-full flex justify-center py-16 px-4 sm:px-10 lg:px-40">
            <div className="flex flex-col md:flex-row max-w-[960px] flex-1 gap-12 items-center">
                <div className="flex-1 space-y-8">
                    <div>
                        <h2 className="text-[#0d0e1b] dark:text-white text-[32px] font-bold leading-tight mb-4">Why Join the Movement?</h2>
                        <p className="text-slate-600 dark:text-slate-400 text-lg">Beyond making an impact, you&apos;ll grow your career and network.</p>
                    </div>
                    <div className="space-y-4">
                        <div className="flex gap-4 items-start">
                            <div className="mt-1 min-w-[24px] text-green-500">
                                <span className="material-symbols-outlined">check_circle</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-[#0d0e1b] dark:text-white">Global Certification</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400">Receive a recognized certificate of leadership upon program completion.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="mt-1 min-w-[24px] text-green-500">
                                <span className="material-symbols-outlined">check_circle</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-[#0d0e1b] dark:text-white">Exclusive Mentorship</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400">Get paired with industry leaders in technology and social entrepreneurship.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="mt-1 min-w-[24px] text-green-500">
                                <span className="material-symbols-outlined">check_circle</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-[#0d0e1b] dark:text-white">Resource Kit &amp; Swag</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400">Access to presentation decks, branding materials, and official Paahibu merchandise.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="mt-1 min-w-[24px] text-green-500">
                                <span className="material-symbols-outlined">check_circle</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-[#0d0e1b] dark:text-white">Annual Summit Invite</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400">An all-expenses-paid trip to our annual leadership summit for top performers.</p>
                            </div>
                        </div>
                    </div>
                    <div className="pt-4">
                        <ProgramCTA 
                           program={ambassadorsProgram}
                           labelOpen="Apply to be a Community Ambassador"
                           labelClosed="Join Waitlist"
                           className="flex w-fit cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-secondary text-[#f8f8fc] text-base font-bold leading-normal tracking-[0.015em] hover:bg-orange-700 transition-colors shadow-lg shadow-orange-500/30"
                        />
                    </div>
                </div>
                <div className="flex-1 w-full md:h-auto min-h-[400px]">
                    <div className="relative w-full h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                        <Image 
                            src="/assets/images/join-movement.png"
                            alt="Join Movement"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120]/80 to-transparent flex items-end p-8">
                            <p className="text-white font-bold text-xl">&quot;Paahibu gave us the tools to build our own future.&quot;</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}
