import Link from "next/link";
import Image from "next/image";
import { fetchAPI } from "@/lib/api";
import ProgramCTA from "@/components/ui/ProgramCTA";

export default async function WideiProgramPage() {
  const programs = await fetchAPI("/api/v1/programs") || [];
  const wideiProgram = programs.find(p => p.name.includes("WiDEI")) || { 
      id: 100, 
      name: "WiDEI",
      is_application_open: false
  };

  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-background-light dark:bg-background-dark border-b border-gray-100 dark:border-white/10 relative z-20">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
             <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                 <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                 <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                 <Link href="/programs" className="hover:text-primary transition-colors">Programs</Link>
                 <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                 <span className="font-semibold text-primary">WiDEI</span>
             </div>
         </div>
     </div>

     {/* Hero Section */}
     <header className="relative w-full min-h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
         style={{backgroundImage: 'linear-gradient(to right, rgba(16, 34, 22, 0.85) 0%, rgba(16, 34, 22, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCn4Br8YOkzYhaMOEC6q8h2Ordjvn9ZERZ-Yv9y-aShetxLo8M4_affGun19w8q-qt7tPtIWBvbVZxLMsecKw9HRa6PZimE3jZmJHUzRVF29C8ZvgxL7PhpECG6RpLBc1m7F7kgKcTebzHXCUZw7ssXXZIL3jxFVq3U_dl0WkAs-x57AL9h2ndFi6DrEW7nNzK_LpylFLz3i7apDoUrSKNmjZ14Fcmpepqy4ARyB1wEHDHPGIy8bFvtsKzGl2MpHPA6CXu6JO_UlD-f")'}}>
         <div className="max-w-7xl w-full px-4 md:px-10 py-20 flex flex-col md:flex-row items-center gap-10">
             <div className="flex-1 flex flex-col gap-6 text-center md:text-left">
                 <div className="inline-flex items-center justify-center md:justify-start gap-2 text-secondary font-bold tracking-wide uppercase text-xs">
                     <span className="w-8 h-[2px] bg-secondary"></span>
                     Women in Digital Economy Initiative
                 </div>
                 <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight">
                     Bridging the Tradition <span className="text-secondary">Digital Gap</span>
                 </h1>
                 <p className="text-gray-200 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto md:mx-0 font-light">
                     Empowering women-led businesses in the informal sector with digital tools for economic independence.
                     Connecting tradition with modernity through practical tech education.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center md:justify-start">
                     <ProgramCTA
                        program={wideiProgram}
                        labelOpen="Join the Initiative"
                        labelClosed="Join Waitlist"
                        className="flex items-center justify-center rounded-lg h-12 px-8 bg-secondary text-[#0d1b12] text-base font-bold hover:bg-secondary/80 transition-colors shadow-lg shadow-primary/20"
                     />
                 </div>
             </div>
             {/* Floating Stat Card */}
             <div className="hidden lg:block w-80 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                 <div className="flex items-center gap-4 mb-4">
                     <div className="bg-primary/20 p-3 rounded-full text-primary">
                         <span className="material-symbols-outlined">storefront</span>
                     </div>
                     <div>
                         <p className="text-white/60 text-xs uppercase font-semibold">Active Businesses</p>
                         <p className="text-white font-bold text-xl">Digitizing Markets</p>
                     </div>
                 </div>
                 <p className="text-white/80 text-sm leading-relaxed">
                     &quot;Since joining WiDEI, I’ve acquired new customers and
significantly improved my business branding,
marketing, and operations. Thanks to Paahibu
Space and the WiDiB Initiative&quot;
                 </p>
                 <div className="mt-4 flex items-center gap-2">
                     <div className="w-8 h-8 rounded-full bg-gray-300 bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBraoJmlypejhJl3cB4iOoCKR8sSYP7t3PxD8PQEZbDdQPbQ8reiW7zDPIsAhzwva56eLhaZ3XIRqkc8ECZlCW9URiSAO-2cI_Sy_LAOn_apCDeIo8SSjdepb-DPW-Cpc3WiTDEVwqorQ6bUj9gI9dcGm2rs6F1kEHuZ2XKSnXmtTMge2jkShOTYkNwLfEd3ZP6tfVn3fUb2sFgsQKP6xm_BdvFQocRFdqak1Uxr6HgT4jOybviowx8T0JOK1Tn5yquJ-jYelPLLys-')"}}></div>
                     <span className="text-white text-xs font-bold">Sherifa Fuseini, CEO - Sheady Enterprise</span>
                 </div>
             </div>
         </div>
     </header>

     {/* Mission & Stats Section */}
     <section className="py-16 md:py-24 px-4 md:px-10 bg-background-light dark:bg-background-dark">
         <div className="max-w-4xl mx-auto text-center mb-12">
             <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-neutral-dark dark:text-white">Digitizing the Informal Sector</h2>
             <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                 We focus on women-led businesses in rural and underrepresented communities. By equipping them with
                 skills to digitize traditional practices—like weaving, pottery, and trading—we strengthen their economic
                 future and preserve cultural heritage through modern channels.
             </p>
         </div>
         <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
             {/* Stat 1 */}
             <div className="group bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 p-8 rounded-xl shadow-sm hover:shadow-md dark:shadow-md transition-all text-center">
                 <div className="mb-4 inline-flex p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-dark:bg-primary group-hover:text-white group-dark:text-white transition-colors">
                     <span className="material-symbols-outlined text-3xl">school</span>
                 </div>
                 <p className="text-4xl font-black text-neutral-dark dark:text-white mb-2">500+</p>
                 <p className="text-gray-500 dark:text-gray-400 font-medium">Women Trained</p>
             </div>
             {/* Stat 2 */}
             <div className="group bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 p-8 rounded-xl shadow-sm hover:shadow-md transition-all text-center">
                 <div className="mb-4 inline-flex p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-dark:bg-primary group-hover:text-white group-dark:text-white transition-colors">
                     <span className="material-symbols-outlined text-3xl">public</span>
                 </div>
                 <p className="text-4xl font-black text-neutral-dark dark:text-white mb-2">30</p>
                 <p className="text-gray-500 dark:text-gray-400 font-medium">Communities Reached</p>
             </div>
             {/* Stat 3 */}
             <div className="group bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 p-8 rounded-xl shadow-sm hover:shadow-md transition-all text-center">
                 <div className="mb-4 inline-flex p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-dark:bg-primary group-hover:text-white group-dark:text-white transition-colors">
                     <span className="material-symbols-outlined text-3xl">trending_up</span>
                 </div>
                 <p className="text-4xl font-black text-neutral-dark dark:text-white mb-2">40%</p>
                 <p className="text-gray-500 dark:text-gray-400 font-medium">Avg. Business Growth</p>
             </div>
         </div>
     </section>

     {/* Our Methodology */}
     <section className="py-20 bg-white dark:bg-[#0a160e] px-4 md:px-10">
         <div className="max-w-7xl mx-auto">
             <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                 <div>
                     <h2 className="text-primary font-bold uppercase tracking-wider text-sm mb-2 dark:text-white">Our Methodology</h2>
                     <h3 className="text-3xl md:text-4xl font-bold text-neutral-dark dark:text-white">Tradition Meets Tech</h3>
                 </div>
                  <p className="max-w-md text-gray-600 dark:text-gray-400 text-sm md:text-base text-right md:text-left">
                      We don&apos;t just teach code; we integrate digital tools into the daily fabric of market life.
                  </p>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                 {[
                     {
                         title: "Market Clinics",
                         desc: "On-site workshops right in the heart of local markets, minimizing disruption to daily trade while maximizing attendance.",
                         icon: "groups",
                         img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJw5ISheLw-aR26Jh8B3lrrKTrUeUIlg3ji-U7V_4MA5P9-3To4Uh2nOinZUyM1LXVFVlYZ7TOnofwu1huirXKyExsJsTL5Zc8ldPjedrv9GdKPgQvqUX-_POqW1RIPaRDWA-Xe6uVJ0-1LrMRbyxC_jApcwC19uH9B8Xd1dFpiKn9JjjfZyMPQpHeqaJhdYk47-2PvvHOB0oDAbA-6ncsyteoPgzIk5S73VxIupEAsdQA-B430E6xBl0-Q9V1DboEXld5cLXqwX9y"
                     },
                     {
                         title: "WhatsApp Shops",
                         desc: "Converting the most popular messaging app into a powerful storefront. Catalogues, quick replies, and status updates.",
                         icon: "chat",
                         img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCh6devtBIVCmwOR-RHmNW761e3OQKY-XlHJEorZnyg8uvlsbUtnt1qg0vUP499xutF0wQnn2VX9PfmBFhOnupK_TI4a44Vo_cibse2fiodHJV_HUpIEuzT6Je_MfqrZ5jtIIp387UD_2OdHlFuduFVQRMZ2LhavRwU_U7lx8vwD5SQfxAMTzhkhJ-x8H0LY-kzvr_oNypec1ncqs4KYSRYrVnBN5hpVKx3Nm3XBxM8Aol9ECzJu20QhQuP8Rfonl7Q6fw6-wBCnkT5"
                     },
                     {
                         title: "Trade Incubation",
                         desc: "Specialized digital inventory tracking for artisans. Preserving traditional crafts by accessing global digital markets.",
                         icon: "inventory_2",
                         img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBErKZtXs74uxckFhhSYnP6JFc0-I4MMZJVda_4sFf5A-WgBOgjCHSA9rLeb4taVf-7UbWMGwzWiYG7rcB1HI64IMrHMd0zSCoM_vudlofys16Al44qf8a5-gJwB0YP-H13t7t_IBdqAzCb6mrmZXflFj3McfvQ1ZZoe-0msrlHaZtNspUS8RCdz0CEtEB_7pWHVlUL0pv120N4zua693qvs2yfYFhMAfMkHy5ep2A9Nlf51ULDm1r2B7GnpZZsm9qPWYdEXFa0C6uM"
                     },
                     {
                         title: "Local Context",
                         desc: "Breaking down complex digital concepts using local dialects and culturally resonant analogies for true understanding.",
                         icon: "translate",
                         img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKGfNt1DIMfI3f8FF6rXBeZfVYzROzmu8x1GZJM_ryAWAOVEm3ZPFbe2nIPQZkZ0DPyJSglrhfe1SRqpb7OSkjSis8zFfzVUWxZm5vq4_dlN8kvBNgeKYwHJAkg-2wr9i76x0uyKKGTQtIymTgjMB0uVybGfNTbk3YapJck27wVoHYIEF-H5ftmkXGSv-SsVpxgC1gBoDrXZIgjh8pWN5CTbXRXgwR7mOECFo-bUHSLYm3QM-PKbjVOAZ2vRRmxOxHW5KJCAz3_-BX"
                     }
                 ].map((item, i) => (
                     <div key={i} className="bg-background-light dark:bg-white/5 rounded-xl overflow-hidden group hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-white/10">
                         <div className="h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                             style={{backgroundImage: `url('${item.img}')`}}></div>
                         <div className="p-6">
                             <div className="w-10 h-10 rounded-full bg-white dark:bg-white/10 flex items-center justify-center shadow-sm -mt-12 relative z-10 mb-4 text-primary">
                                 <span className="material-symbols-outlined">{item.icon}</span>
                             </div>
                             <h4 className="text-xl font-bold mb-2 text-neutral-dark dark:text-white">{item.title}</h4>
                             <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                         </div>
                     </div>
                 ))}
             </div>
         </div>
     </section>

     {/* Roadmap */}
     <section className="py-20 bg-background-light dark:bg-background-dark px-4 md:px-10">
         <div className="max-w-5xl mx-auto">
             <h2 className="text-center text-3xl font-bold mb-16 text-neutral-dark dark:text-white">The Journey to Independence</h2>
             <div className="relative">
                 {/* Vertical Line */}
                 <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-white/10 md:-ml-[1px]"></div>
                 
                 {/* Step 1 */}
                 <div className="relative flex flex-col md:flex-row items-center gap-8 mb-16 group">
                     <div className="md:w-1/2 flex md:justify-end">
                         <div className="bg-white dark:bg-white/5 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-white/10 md:text-right w-full md:w-auto md:max-w-md">
                             <h4 className="text-xl font-bold text-primary dark:text-white mb-2">Community Entry</h4>
                             <p className="text-gray-600 dark:text-gray-300 text-sm">We engage community leaders and trade unions to build trust and understand specific local needs before any training begins.</p>
                         </div>
                     </div>
                     <div className="absolute left-8 md:left-1/2 -ml-4 w-8 h-8 rounded-full bg-primary border-4 border-white dark:border-background-dark flex items-center justify-center z-10">
                         <span className="material-symbols-outlined text-[#0d1b12] text-sm font-bold">counter_1</span>
                     </div>
                     <div className="md:w-1/2 pl-16 md:pl-0"></div>
                 </div>

                 {/* Step 2 */}
                 <div className="relative flex flex-col md:flex-row items-center gap-8 mb-16 group">
                     <div className="hidden md:block md:w-1/2"></div>
                     <div className="absolute left-8 md:left-1/2 -ml-4 w-8 h-8 rounded-full bg-primary border-4 border-white dark:border-background-dark flex items-center justify-center z-10">
                         <span className="material-symbols-outlined text-[#0d1b12] text-sm font-bold">counter_2</span>
                     </div>
                     <div className="w-full md:w-1/2 pl-16 md:pl-0">
                         <div className="bg-white dark:bg-white/5 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-white/10 w-full md:max-w-md">
                             <h4 className="text-xl font-bold text-primary dark:text-white mb-2">Skills Transfer</h4>
                             <p className="text-gray-600 dark:text-gray-300 text-sm">Conducting practical, trade-based workshops. Women learn to create digital catalogues, manage customer contacts, and process digital payments.</p>
                         </div>
                     </div>
                 </div>

                 {/* Step 3 */}
                 <div className="relative flex flex-col md:flex-row items-center gap-8 group">
                     <div className="md:w-1/2 flex md:justify-end">
                         <div className="bg-white dark:bg-white/5 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-white/10 md:text-right w-full md:w-auto md:max-w-md">
                             <h4 className="text-xl font-bold text-primary dark:text-white mb-2">Sustainable Growth</h4>
                              <p className="text-gray-600 dark:text-gray-300 text-sm">Long-term mentorship and access to a network of women entrepreneurs ensuring businesses don&apos;t just survive, but thrive online.</p>
                         </div>
                     </div>
                     <div className="absolute left-8 md:left-1/2 -ml-4 w-8 h-8 rounded-full bg-primary border-4 border-white dark:border-background-dark flex items-center justify-center z-10">
                         <span className="material-symbols-outlined text-[#0d1b12] text-sm font-bold">counter_3</span>
                     </div>
                     <div className="md:w-1/2 pl-16 md:pl-0"></div>
                 </div>
             </div>
         </div>
     </section>

     {/* Impact Story */}
     <section className="py-20 bg-white dark:bg-[#0a160e] overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 md:px-10">
             <div className="bg-background-light dark:bg-white/5 rounded-3xl p-8 md:p-12 border border-gray-100 dark:border-white/10">
                 <div className="flex flex-col lg:flex-row gap-12 items-center">
                     <div className="w-full lg:w-1/2 relative">
                         <div className="absolute inset-0 bg-primary/20 rounded-2xl transform translate-x-4 translate-y-4"></div>
                         <div className="relative rounded-2xl shadow-xl w-full h-[400px] overflow-hidden">
                             <Image src="/images/stories/vivian_ackon.png" 
                                 alt="Vivian Ackon" className="object-cover" fill sizes="(max-width: 1024px) 100vw, 50vw" />
                         </div>
                         <div className="absolute bottom-6 left-6 right-6 bg-black/70 backdrop-blur-md p-4 rounded-xl border border-white/10">
                              <p className="text-secondary font-bold text-xs uppercase mb-1">Impact Spotlight</p>
                              <p className="text-white font-medium">&quot;The training helped me to create a business plan that guides our operations.&quot;</p>
                              <p className="text-gray-300 text-xs mt-1">- Vivian Ackon, CEO Divine Apparel</p>
                          </div>
                     </div>
                     <div className="w-full lg:w-1/2">
                         <div className="flex items-center gap-2 mb-4">
                             <span className="h-px w-10 bg-primary dark:bg-secondary"></span>
                             <span className="text-primary font-bold uppercase tracking-wider text-sm dark:text-secondary">Meet Vivian Ackon - CEO, Divine Apparel</span>
                         </div>
                         <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-dark dark:text-white leading-tight">
                             From Concept to Branded Reality
                         </h2>
                          <div className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed space-y-4">
                              <p>
                                  &quot;Divine Apparel specializes in quality men&apos;s wears. It was borne during my participation in the WiDiB & WiDEI programs. The training helped me to create a business plan that guides our operations.&quot;
                              </p>
                              <p>
                                  &quot;With Paahibu Space&apos;s support, we branded, including a new logo, and gained digital marketing, storytelling, branding and customer engagement skills which have helped transformed how we connect with clients.&quot;
                              </p>
                              <p>
                                  &quot;We&apos;ve since enhanced our online presence and now offer personalized engravings on items like belts, watches, and wallets, adding a special touch for our customers.&quot;
                              </p>
                          </div>
                          <Link className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all dark:text-secondary" href="/stories">
                              Read more stories
                              <span className="material-symbols-outlined text-sm">arrow_forward</span>
                          </Link>
                     </div>
                 </div>
             </div>
         </div>
     </section>

     {/* Activity Gallery */}
     <section className="py-20 px-4 md:px-10 bg-background-light dark:bg-background-dark">
         <div className="max-w-7xl mx-auto">
             <h2 className="text-3xl font-bold mb-10 text-center text-neutral-dark dark:text-white">Program in Action</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
                 {/* Large Item */}
                 <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-xl">
                     <Image className="object-cover group-hover:scale-105 transition-transform duration-700" 
                         src="/assets/images/programs/widei-action1.png" alt="Training" fill sizes="(max-width: 768px) 100vw, 66vw" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
                     <div className="absolute bottom-0 left-0 p-6">
                         <span className="bg-primary text-[#0d1b12] text-xs font-bold px-2 py-1 rounded mb-2 inline-block">Training</span>
                         <h3 className="text-white text-xl font-bold">Outdoor Digital Literacy Class</h3>
                     </div>
                 </div>
                 {/* Small Item */}
                 <div className="relative group overflow-hidden rounded-xl">
                     <Image className="object-cover group-hover:scale-105 transition-transform duration-700" 
                         src="/assets/images/programs/widei-action3.png" alt="Mobile tools" fill sizes="(max-width: 768px) 100vw, 33vw" />
                     <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/60 w-full">
                         <h3 className="text-white text-sm font-bold">Mobile Money Tools</h3>
                     </div>
                 </div>
                 {/* Small Item */}
                 <div className="relative group overflow-hidden rounded-xl">
                     <Image className="object-cover group-hover:scale-105 transition-transform duration-700" 
                         src="/assets/images/programs/widei-action2.png" alt="Empowerment" fill sizes="(max-width: 768px) 100vw, 33vw" />
                     <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/60 w-full">
                         <h3 className="text-white text-sm font-bold">Empowerment</h3>
                     </div>
                 </div>
                 {/* Wide Item */}
                 <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-xl">
                     <Image className="object-cover group-hover:scale-105 transition-transform duration-700" 
                         src="/assets/images/programs/widei-action4.png" alt="Peer Mentorship" fill sizes="(max-width: 768px) 100vw, 33vw" />
                     <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/60 w-full">
                         <h3 className="text-white text-sm font-bold">Peer Mentorship</h3>
                     </div>
                 </div>
             </div>
         </div>
     </section>
    </>
  );
}
