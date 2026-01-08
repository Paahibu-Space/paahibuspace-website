import Link from "next/link";

export default function TechsiStarsProgram() {
  return (
    <>
        {/* Breadcrumbs */}
        <div className="bg-white dark:bg-background-dark border-b border-gray-100 dark:border-white/10 relative z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                    <Link href="/programs" className="hover:text-primary transition-colors">Programs</Link>
                    <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                    <span className="font-semibold text-primary">TechsiStars</span>
                </div>
            </div>
        </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#fbf9fd] dark:bg-gray-900 pt-12 pb-20 lg:pt-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                <div className="max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-secondary/80 text-primary-700 dark:text-primary-300 border border-purple-200 dark:border-purple-800 mb-6">
                        <span className="material-symbols-outlined text-[18px]">verified</span>
                        <span className="text-xs font-bold uppercase tracking-wider">Aspiring Women in Tech</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white leading-[1.1] mb-6 tracking-tight">
                        TechsiStars <span className="text-primary dark:text-secondary">Mentorship Bootcamp</span>
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                        Bridging the gap for entry-level women in tech through intensive mentorship, hands-on projects,
                        and career readiness training.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button className="bg-secondary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-700 transition-all shadow-lg shadow-purple-200 dark:shadow-none flex items-center gap-2">
                            <span>Apply for Cohort 4</span>
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </button>
                        <button className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all flex items-center gap-2">
                            <span className="material-symbols-outlined">download</span>
                            <span>Download Brochure</span>
                        </button>
                    </div>
                </div>
                <div className="relative lg:h-[600px] w-full hidden lg:block">
                    <div className="absolute top-10 right-0 w-[80%] h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-[6px] border-white dark:border-gray-800 z-10 transform rotate-2 hover:rotate-0 transition-all duration-500">
                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQ8huE0b3gF2l_kMqcHDKKCk_uES7HEJBVXxnw7w362MbZy7JR_a1wS1_KSjnkTR9sdO4pKE0hHsXrC2Et9e2bhUjNxjM6Dq0UGruyCwbnBkO8fEIOSv6FiVQLYNVl3Z1ni1AMSkpIo5LCsJOH5miJmb4K5sXCi8fs7sx3ZNiydk96xfcsE5K2ZPC7fJP-aN6fWuH9RF-QaOLk77GWV9qBiAdWSv4bS8IYdUcWlM9BInT0PtR36mGx7BRBxhgPh-dFBP84Pqnk2l82" 
                             alt="Women in Tech" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent"></div>
                        <div className="absolute bottom-8 left-8 text-white">
                            <p className="font-bold text-lg">Batch 3 Graduation</p>
                            <p className="text-primary-200 text-sm">Nairobi, Kenya</p>
                        </div>
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-[20%] w-24 h-24 bg-yellow-400 rounded-full blur-2xl opacity-60 animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary rounded-full blur-3xl opacity-40"></div>
                </div>
            </div>
        </div>
      </section>

      {/* Problem / Solution Section */}
      <section className="py-20 bg-white dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12">
                <div className="lg:col-span-5">
                    <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2 block">Why We Need This</span>
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">The Digital Divide is Real</h2>
                    <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed">
                        Despite the tech boom in Africa, women remain vastly underrepresented in technical roles. The
                        gap isn't just about coding skills—it's about access to networks, mentorship, and confidence.
                    </p>
                    <div className="grid gap-6">
                        <div className="bg-purple-50 dark:bg-purple-900/10 p-6 rounded-xl border border-purple-100 dark:border-purple-500/20">
                            <h3 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">block</span>
                                Limited Access to Mentorship
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Many young women lack role models who look like them
                                in senior tech positions.</p>
                        </div>
                        <div className="bg-purple-50 dark:bg-purple-900/10 p-6 rounded-xl border border-purple-100 dark:border-purple-500/20">
                            <h3 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">psychology_alt</span>
                                The "Skills Gap" Myth
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">It's often not a lack of ability, but a lack of
                                structured guidance on how to navigate the industry.</p>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-7">
                    <div className="bg-gray-900 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary rounded-full blur-[80px] opacity-50"></div>
                        <h3 className="text-2xl font-bold mb-10 relative z-10">Representation Matters</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
                            <div>
                                <p className="text-5xl font-black text-primary-400 mb-2">24%</p>
                                <p className="text-gray-400 font-medium">Women in Tech Leadership</p>
                            </div>
                            <div>
                                <p className="text-5xl font-black text-primary-400 mb-2">&lt; 30%</p>
                                <p className="text-gray-400 font-medium">Women in STEM fields in Sub-Saharan Africa</p>
                            </div>
                            <div className="sm:col-span-2 pt-8 border-t border-white/10 mt-4">
                                <p className="text-xl font-medium">At TechsiStars, we are changing these stats.</p>
                                <p className="text-primary-300 mt-2 font-bold text-3xl">500+ Women Upskilled</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Program Goals */}
      <section className="py-20 bg-[#fbf9fd] dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Core Objectives</h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg">We focus on holistic development to ensure our graduates are
                    industry-ready.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { title: "Foster Mentorship", icon: "diversity_3", desc: "Connecting mentees with experienced women in tech." },
                    { title: "Skill Development", icon: "code", desc: "Practical workshops on coding, design, and data." },
                    { title: "Career Exposure", icon: "work", desc: "Internship placements and CV review sessions." },
                    { title: "Community Building", icon: "forum", desc: "A safe space for peer learning and support." }
                ].map((item, i) => (
                    <div key={i} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-purple-100 dark:border-purple-500/10">
                        <div className="w-12 h-12 bg-purple-100 dark:bg-secondary/80 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
                            <span className="material-symbols-outlined">{item.icon}</span>
                        </div>
                        <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">{item.title}</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* What You Will Gain */}
      <section className="py-20 bg-white dark:bg-background-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="w-full lg:w-1/2 relative group">
                    <div className="absolute inset-0 bg-secondary rounded-3xl transform rotate-3 transition-transform group-hover:rotate-6"></div>
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoKYpieAcvktKt6Zf9xVFHy9EMgaWQx-NAM7FRiT2bD9lHyfS-zQii-vjYAuI6CDlHofv7yRWC9mIuXJTBapIYxTGNR72VFVYZsEm6TUFr8iwe3mY0qQ3TwZnFA7zqwBo8ZLMQTYH6kXOmAZwhfEFZSWfd0K10GAORrspZ2nZa5yB7ftwjYRYqiFe3t7QFvRfRzSBr80ZbyWcz7ZDazv_HNfCV9BWRjrvCNMsDY0HrtfFBIYMKwHSb1bOaR3s-1hAPUE8tzgrd2RVN" 
                         alt="Coding workshop" 
                         className="relative rounded-3xl shadow-2xl w-full object-cover h-[500px] bg-gray-200" />
                </div>
                <div className="w-full lg:w-1/2">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">What You Will Gain</h2>
                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-secondary/80 text-primary flex items-center justify-center shrink-0">
                                <span className="material-symbols-outlined">supervisor_account</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Experienced Female Mentors</h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    Get paired with a senior professional tailored to your career path. Bi-weekly 1:1 sessions
                                    to guide your growth.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-secondary/80 text-primary flex items-center justify-center shrink-0">
                                <span className="material-symbols-outlined">rocket_launch</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Tech Career Exposure</h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    Exclusive webinars with tech giants, office tours (virtual/physical), and direct job
                                    application channels.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-secondary/80 text-primary flex items-center justify-center shrink-0">
                                <span className="material-symbols-outlined">construction</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Hands-on Capacity Building</h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    Don't just learn theory. Build a real-world project in a team of 4, presenting it to a
                                    panel of judges at graduation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Roadmap */}
    <section className="py-20 bg-background-light dark:bg-background-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-display font-bold text-primary dark:text-white">Program Roadmap</h2>
                <p className="text-gray-600 dark:text-gray-300 mt-2">A 6-week journey of intensive learning and growth.</p>
            </div>
            <div className="relative border-l-2 border-gray-200 dark:border-gray-700 ml-6 md:ml-10 space-y-12">
                <div className="relative pl-10 md:pl-16">
                    <span className="absolute -left-[9px] top-0 w-5 h-5 rounded-full bg-secondary border-4 border-white dark:border-background-dark"></span>
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-primary dark:text-white">Weeks 1-2: Foundations</h3>
                        <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Virtual</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">Introduction to tech ecosystems, digital literacy,
                        and goal setting with mentors.</p>
                    <div className="flex gap-2 flex-wrap">
                        <span className="px-3 py-1 bg-white dark:bg-gray-800 rounded-md text-xs font-medium text-gray-500 dark:text-gray-300 border border-gray-200 dark:border-gray-700">6 Hours/Week</span>
                        <span className="px-3 py-1 bg-white dark:bg-gray-800 rounded-md text-xs font-medium text-gray-500 dark:text-gray-300 border border-gray-200 dark:border-gray-700">Workshop</span>
                    </div>
                </div>
                <div className="relative pl-10 md:pl-16">
                    <span className="absolute -left-[9px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-white dark:border-background-dark"></span>
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-primary dark:text-white">Weeks 3-4: Deep Dive</h3>
                        <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Hybrid</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">specialized tracks: choose between Coding, Design,
                        or Data. Hands-on projects begin.</p>
                    <div className="flex gap-2 flex-wrap">
                        <span className="px-3 py-1 bg-white dark:bg-gray-800 rounded-md text-xs font-medium text-gray-500 dark:text-gray-300 border border-gray-200 dark:border-gray-700">10 Hours/Week</span>
                        <span className="px-3 py-1 bg-white dark:bg-gray-800 rounded-md text-xs font-medium text-gray-500 dark:text-gray-300 border border-gray-200 dark:border-gray-700">Project Work</span>
                    </div>
                </div>
                <div className="relative pl-10 md:pl-16">
                    <span className="absolute -left-[9px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-white dark:border-background-dark"></span>
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-primary dark:text-white">Weeks 5-6: Capstone &amp; Launch</h3>
                        <span className="text-sm font-semibold text-secondary uppercase tracking-wider">In-Person</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">Final project presentation, career fair, and
                        graduation ceremony.</p>
                    <div className="flex gap-2 flex-wrap">
                        <span className="px-3 py-1 bg-white dark:bg-gray-800 rounded-md text-xs font-medium text-gray-500 dark:text-gray-300 border border-gray-200 dark:border-gray-700">Intensive</span>
                        <span className="px-3 py-1 bg-white dark:bg-gray-800 rounded-md text-xs font-medium text-gray-500 dark:text-gray-300 border border-gray-200 dark:border-gray-700">Demo Day</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

      {/* Mentors */}
    <section className="py-20 px-10 bg-white dark:bg-background-dark">
        <div className="max-w-[1440px] mx-auto">
            <div className="flex justify-between items-end mb-12">
                <div>
                    <h2 className="text-secondary text-4xl font-heading font-bold mb-4">Meet Our Mentors</h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl">Industry leaders from top tech companies dedicating their
                        time to guide the next generation.</p>
                </div>
                <Link className="hidden md:flex items-center gap-2 text-primary dark:text-white font-bold hover:underline" href="#">
                    Become a Mentor <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="flex flex-col gap-4">
                    <div className="aspect-square rounded-lg overflow-hidden bg-gray-200">
                        <img alt="Portrait of Sarah K., Software Engineer"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQkTogd_J8B_fbNXZ2o_BigwuSxdlZ3FFmxaypAtiO7xQAPt-KNT1LQSHC8DKNJJZ-wAjWkq212SNpITVZy7X8KPDdr5U_2OeU7VtObFgDykZMtF9F60CeEZVYa2T0igwIw1UHWUxwJ-GI5YGq5MIgHsgSRc-nro4XbdfMUAMkmMRAVVvx7C-RFVPg2UczRTIs8YGtOw_CA4B-TsHN1DAkwTQqlj55ONiRscjZZIhziimJ07zNDwMXTbwk9UA-D5oiwnZp4SFbJ0w" />
                    </div>
                    <div>
                        <h4 className="text-secondary font-bold text-lg">Sarah K.</h4>
                        <p className="text-primary dark:text-gray-200 font-medium text-sm mb-2">Software Engineer at TechCorp</p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2">"I believe in lifting as we climb. Mentorship is
                            the bridge to opportunity."</p>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="aspect-square rounded-lg overflow-hidden bg-gray-200">
                        <img alt="Portrait of Amina D., Data Scientist"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-barLttpklVc17_IrFNu7Mlw9FiUua0GwNToEPDc0GE9f_KrfKYDqPhh6u1sE_wVRm8kCtFZhIy7mMtFmtIs6910wqnAud-86rV9LM4Ym-1OJ4L-vJAkzJqjLrPAHIdLHfuzg140ofv7UQi9NQUojLeMql_25qcUnzB6iNuB_mTZ_59bnLr2GvRZfIUsZOVfHsFB9MkrlGOyd8d9NliwcSSAevKV7qvAeX0qsNSE0vmWy4dYX0Fj-7nGbxvdOcy0U_2SUHhvNy0Q" />
                    </div>
                    <div>
                        <h4 className="text-secondary font-bold text-lg">Amina D.</h4>
                        <p className="text-primary dark:text-gray-200 font-medium text-sm mb-2">Data Scientist at DataFlow</p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2">"Data tells a story, and I want to help young
                            women write their own."</p>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="aspect-square rounded-lg overflow-hidden bg-gray-200">
                        <img alt="Portrait of David M., Startup Founder"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmNf0sXuvW68GH5xcNB3UhBlczGWHsVKq2Y9uNgPeFEZx_94Wxyo9OzkCsOXs8y2FjlPKFDbEHU5ed_SV2t5M9wfQnzhwZlv-nRvqcWZ1sVMuGAg0qZYefmSIAMNykPcRDMRxdX0BPEYTu7m_6XQ4HOaz4RoN7y37oQi0-mTsYtl4maAEojxfA03ePvYoiXLLhchVneFDSVwDtgn7VC-jb1ybqWF0MAbnYmv0LrCUi6t8VdMdJLvCVunY7FAPIQzWNkoR2DC4gZXA" />
                    </div>
                    <div>
                        <h4 className="text-secondary font-bold text-lg">David M.</h4>
                        <p className="text-primary dark:text-gray-200 font-medium text-sm mb-2">Founder at AgriTech Solutions</p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2">"Innovation starts with a curious mind. I'm here
                            to fuel that curiosity."</p>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="aspect-square rounded-lg overflow-hidden bg-gray-200">
                        <img alt="Portrait of Grace O., Product Manager"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-q36ijlZbwR7Wsi_XNFI8u8WkuYe_aCapxpopCg7hP1dHlDutzDYpKcudMwgYR7qMSmWBIojZdmdFgZgBzDG6ZAD3Qtllkj6W-5ybikF1xdYNt9v77cSEKsm0XfsFuQJnizLJl5pDmS9jsgkrtlTVJoU20wHuoPz5IbP0w-n0jGJ8EJbyPyPvHHhsVxbJa9Ws1QpHGLU-tbJIYr4P4MwW6tfCz9_G8TAIRkDbIntuoRIijVS5SWk2zt2LuLKyCctENP65TyUSzAk" />
                    </div>
                    <div>
                        <h4 className="text-secondary font-bold text-lg">Grace O.</h4>
                        <p className="text-primary dark:text-gray-200 font-medium text-sm mb-2">Product Manager at FinServe</p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2">"Building products that solve real problems is my
                            passion."</p>
                    </div>
                </div>
            </div>
            <div className="mt-8 md:hidden text-center">
                <Link className="inline-flex items-center gap-2 text-primary dark:text-white font-bold hover:underline" href="#">
                    Become a Mentor <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
            </div>
        </div>
    </section>

      {/* Testimonials */}
    <section className="py-20 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-display font-bold text-center text-primary dark:text-white mb-12">Voices of Change
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-surface-dark p-8 rounded-2xl relative">
                    <span
                        className="material-symbols-outlined text-6xl text-gray-200 dark:text-gray-700 absolute top-4 right-4">format_quote</span>
                    <div className="flex items-center gap-4 mb-6 relative z-10">
                        <img alt="Portrait of Amina"
                            className="w-16 h-16 rounded-full object-cover border-2 border-secondary"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqpYuLax1etq3JMXeQwKzi7ecenS_oNwL-NPhRdLpK5A_eNXhbYB49ujSl3jHyAIQwj6dvNpSZdXmK-DPYeKt21S3aHAidh-iqJscMGme1aVEkjQIY0y-AEw2CG9nfPrQ3ZpViSs2QO3gdUH-W6Mc8a-WDtu5Bn43golXevqX5Qy8-AAKYfTVFVZescEtspJgLfBee6bmZiWXDmVHdolBzqSNC5pOcIxMsaDwWnVKpuQ8F9RZ3KGSXpJyy2cmS3KZzTjvfOVIkvRc" />
                        <div>
                            <h4 className="font-bold text-primary dark:text-white">Amina K.</h4>
                            <p className="text-sm text-secondary">Frontend Developer</p>
                        </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 italic relative z-10">
                        "The mentorship I received during TechsiStars was life-changing. My mentor didn't just teach me
                        to code; she taught me how to navigate the industry as a woman."
                    </p>
                </div>
                <div className="bg-white dark:bg-surface-dark p-8 rounded-2xl relative">
                    <span
                        className="material-symbols-outlined text-6xl text-gray-200 dark:text-gray-700 absolute top-4 right-4">format_quote</span>
                    <div className="flex items-center gap-4 mb-6 relative z-10">
                        <img alt="Portrait of Sarah"
                            className="w-16 h-16 rounded-full object-cover border-2 border-secondary"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9K9kTZh73nJx_sKfNEWg8RaN3LM9bwOeSsLWSNcwA9cgBhmuQ9s6Hv4MBOwEYjWB3ghars_1zi_Whq9EPNKbXdiphJTXALw1OY6YVL6LkPW3FO0-W2kiZhJeCSGaF6lWNAAOScvYLOje0fCdX9SVal4sDYdC65Dp1MzV_glzF-VJrWlUvHcKO_pjmjzcdTmLLQbrzZpq4_mWGSlPNn6evm5so2yEg8w2oDiz8DItZi79Y08qh5WmxJmjUJI9CYGmuT-y_C9WkVNM" />
                        <div>
                            <h4 className="font-bold text-primary dark:text-white">Sarah M.</h4>
                            <p className="text-sm text-secondary">Product Designer</p>
                        </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 italic relative z-10">
                        "Before this program, I thought tech wasn't for me. Now, I'm leading design sprints at a fintech
                        startup. The confidence I gained is my biggest asset."
                    </p>
                </div>
            </div>
        </div>
    </section>

      {/* How to Apply */}
      <section className="py-20 bg-white dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12">
                <div className="lg:col-span-8">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">How to Apply</h2>
                    <div className="space-y-8">
                        {[
                            { step: "01", title: "Submit Application", desc: "Fill out the online form telling us about your background and motivation." },
                            { step: "02", title: "Interview", desc: "Selected candidates will be invited for a virtual interview with our team." },
                            { step: "03", title: "Onboarding", desc: "Successful applicants receive their admission letter and prep materials." }
                        ].map((s, i) => (
                            <div key={i} className="flex gap-6">
                                <span className="text-4xl font-black text-primary-200">{s.step}</span>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{s.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400">{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="lg:col-span-4">
                    <div className="bg-primary text-white p-8 rounded-2xl shadow-2xl sticky top-8">
                        <h3 className="text-2xl font-bold mb-6">Ready to Start?</h3>
                        <div className="space-y-4 mb-8">
                            <div className="flex justify-between border-b border-purple-500 pb-2">
                                <span className="opacity-80">Next Cohort:</span>
                                <span className="font-bold">Oct 15th</span>
                            </div>
                            <div className="flex justify-between border-b border-purple-500 pb-2">
                                <span className="opacity-80">Format:</span>
                                <span className="font-bold">Hybrid</span>
                            </div>
                            <div className="flex justify-between border-b border-purple-500 pb-2">
                                <span className="opacity-80">Cost:</span>
                                <span className="font-bold">Scholarship</span>
                            </div>
                        </div>
                        <button className="w-full bg-secondary text-primary-700 font-bold py-4 rounded-xl hover:bg-secondary/80 transition-colors shadow-lg">
                            Apply Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="py-20 bg-[#fbf9fd] dark:bg-gray-800/30">
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {[
                    { q: "Do I need to know how to code?", a: "No, we have tracks for beginners. However, basic computer literacy is required." },
                    { q: "Is the program free?", a: "Yes, thanks to our partners, all selected participants receive a full scholarship." },
                    { q: "What is the time commitment?", a: "Expect to dedicate at least 10 hours per week for sessions and project work." }
                ].map((faq, i) => (
                    <details key={i} className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-white/10 open:ring-2 open:ring-purple-100 dark:open:ring-purple-900 cursor-pointer">
                        <summary className="font-bold text-gray-900 dark:text-white flex justify-between items-center list-none">
                            {faq.q}
                            <span className="material-symbols-outlined text-primary">expand_more</span>
                        </summary>
                        <p className="mt-4 text-gray-600 dark:text-gray-400">{faq.a}</p>
                    </details>
                ))}
            </div>
        </div>
      </section>
      
      {/* Footer CTA */}
      <div className="bg-white dark:bg-background-dark py-12 text-center border-t border-gray-100 dark:border-white/10">
         <p className="text-gray-900 dark:text-white font-bold mb-4">Questions? Reach out to us.</p>
         <a href="mailto:programs@paahibuspace.org" className="text-primary font-bold hover:underline">programs@techsistars.org</a>
      </div>
    </>
  );
}
