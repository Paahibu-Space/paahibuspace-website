import Link from "next/link";
import Button from "@/components/ui/Button";

export default function WidibProgramPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-white dark:bg-background-dark border-b border-gray-100 dark:border-white/10 relative z-20">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
             <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                 <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
                 <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                 <Link href="/programs" className="hover:text-blue-600 transition-colors">Programs</Link>
                 <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                 <span className="font-semibold text-blue-600">WiDiB</span>
             </div>
         </div>
     </div>

     {/* Hero Section */}
     <section className="relative bg-primary dark:bg-primary/5 overflow-hidden pt-20 pb-32 lg:pt-32 lg:pb-48">
         <div className="absolute inset-0">
             <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKGfNt1DIMfI3f8FF6rXBeZfVYzROzmu8x1GZJM_ryAWAOVEm3ZPFbe2nIPQZkZ0DPyJSglrhfe1SRqpb7OSkjSis8zFfzVUWxZm5vq4_dlN8kvBNgeKYwHJAkg-2wr9i76x0uyKKGTQtIymTgjMB0uVybGfNTbk3YapJck27wVoHYIEF-H5ftmkXGSv-SsVpxgC1gBoDrXZIgjh8pWN5CTbXRXgwR7mOECFo-bUHSLYm3QM-PKbjVOAZ2vRRmxOxHW5KJCAz3_-BX" 
                 alt="Women Business Owners" className="w-full h-full object-cover opacity-20" />
             <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80"></div>
         </div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
             <div className="inline-flex items-center gap-2 bg-blue-500/30 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-1 text-blue-100 font-bold text-sm tracking-wide uppercase mb-6">
                 <span className="material-symbols-outlined text-sm">rocket_launch</span>
                 For Early-Stage Entrepreneurs
             </div>
             <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
                 Level Up Your <span className="text-blue-200">Side Hustle</span>
             </h1>
             <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                 Turn your passion project into a profitable digital business in just 5 weeks.
                 Practical social media marketing and financial literacy.
             </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <button className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors shadow-xl">
                     Join the Waitlist
                 </button>
                 <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors">
                     Download Syllabus
                 </button>
             </div>
         </div>
     </section>

     {/* Stats Bar */}
     <div className="relative z-20 -mt-16 max-w-6xl mx-auto px-4">
         <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-white/10 p-8 grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100 dark:divide-white/10">
             <div>
                 <p className="text-primary dark:text-white font-bold text-lg mb-1 flex items-center justify-center gap-2">
                     <span className="material-symbols-outlined">store</span>
                     Business Ready
                 </p>
                 <p className="text-gray-600 dark:text-gray-300 text-sm">Launch your online store by Week 3</p>
             </div>
             <div>
                 <p className="text-primary dark:text-white font-bold text-lg mb-1 flex items-center justify-center gap-2">
                     <span className="material-symbols-outlined">calendar_month</span>
                     5 Weeks
                 </p>
                 <p className="text-gray-600 dark:text-gray-300 text-sm">Intensive, practical evening sessions</p>
             </div>
             <div>
                 <p className="text-primary dark:text-white font-bold text-lg mb-1 flex items-center justify-center gap-2">
                     <span className="material-symbols-outlined">verified</span>
                     Certification
                 </p>
                 <p className="text-gray-600 dark:text-gray-300 text-sm">Recognized by industry partners</p>
             </div>
         </div>
     </div>

     {/* Features Grid */}
     <section className="py-24 bg-white dark:bg-background-dark">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-16">
                 <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Why WiDiB?</h2>
                 <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                     We strip away the theory and focus on what actually makes money online.
                     Designed for busy women managing homes and jobs.
                 </p>
             </div>
             <div className="grid md:grid-cols-3 gap-8">
                 {[
                     {
                         title: "Social Media Marketing",
                         desc: "Master Instagram and TikTok algorithms. Learn how to create content that converts viewers into buyers without paying for ads.",
                         icon: "campaign",
                         bg: "bg-blue-50 dark:bg-blue-900/20",
                         text: "text-blue-600"
                     },
                     {
                         title: "Financial Literacy",
                         desc: "Separate your business money from personal money. Learn basic bookkeeping, pricing strategies, and profit margin calculation.",
                         icon: "payments",
                         bg: "bg-green-50 dark:bg-green-900/20",
                         text: "text-green-600"
                     },
                     {
                         title: "Content Creation",
                         desc: "You don't need a fancy camera. Learn to shoot, edit, and post professional product photos using just your smartphone.",
                         icon: "photo_camera",
                         bg: "bg-purple-50 dark:bg-purple-900/20",
                         text: "text-purple-600"
                     }
                 ].map((item, i) => (
                     <div key={i} className="p-8 rounded-2xl border border-gray-100 dark:border-white/10 hover:shadow-xl transition-shadow group bg-white dark:bg-gray-800">
                         <div className={`w-14 h-14 rounded-xl ${item.bg} ${item.text} flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform`}>
                             <span className="material-symbols-outlined">{item.icon}</span>
                         </div>
                         <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{item.title}</h3>
                         <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                     </div>
                 ))}
             </div>
         </div>
     </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white dark:bg-gray-900/50">
            <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">The Curriculum</span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-neutral-dark dark:text-white">5 Weeks to Transformation</h2>
                </div>
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 -translate-x-1/2"></div>
                    <div className="space-y-12 relative z-10">
                        {/* Week 1 */}
                        <div className="flex flex-col md:flex-row gap-8 items-start group">
                            <div className="md:w-1/2 md:text-right md:pr-12 pl-16 md:pl-0 order-2 md:order-1">
                                <h3 className="text-xl font-bold text-neutral-dark dark:text-white group-hover:text-primary transition-colors">
                                    Digital Foundations &amp; Branding</h3>
                                <p className="text-gray-600 dark:text-gray-400 mt-2">Setting up your digital presence
                                    and defining your unique brand voice.</p>
                            </div>
                            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white dark:bg-gray-800 border-4 border-primary flex items-center justify-center shadow-lg z-20">
                                <span className="text-xs font-bold text-neutral-dark dark:text-white">W1</span>
                            </div>
                            <div className="md:w-1/2 md:pl-12 pl-16 order-3 md:order-2 hidden md:block">
                                <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-lg text-xs font-medium text-gray-500">Kickoff</span>
                            </div>
                        </div>
                        {/* Week 2 */}
                        <div className="flex flex-col md:flex-row gap-8 items-start group">
                            <div className="md:w-1/2 md:text-right md:pr-12 pl-16 md:pl-0 order-2 md:order-1 hidden md:block">
                                <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-lg text-xs font-medium text-gray-500">Creative Lab</span>
                            </div>
                            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white dark:bg-gray-800 border-4 border-primary flex items-center justify-center shadow-lg z-20">
                                <span className="text-xs font-bold text-neutral-dark dark:text-white">W2</span>
                            </div>
                            <div className="md:w-1/2 md:pl-12 pl-16 order-3 md:order-2">
                                <h3 className="text-xl font-bold text-neutral-dark dark:text-white group-hover:text-primary transition-colors">
                                    Content Creation &amp; Social Media</h3>
                                <p className="text-gray-600 dark:text-gray-400 mt-2">Hands-on workshops for Reels,
                                    TikTok, and copywriting that converts.</p>
                            </div>
                        </div>
                        {/* Week 3 */}
                        <div className="flex flex-col md:flex-row gap-8 items-start group">
                            <div className="md:w-1/2 md:text-right md:pr-12 pl-16 md:pl-0 order-2 md:order-1">
                                <h3 className="text-xl font-bold text-neutral-dark dark:text-white group-hover:text-primary transition-colors">
                                    E-commerce &amp; Sales Tools</h3>
                                <p className="text-gray-600 dark:text-gray-400 mt-2">Setting up shops, payment
                                    gateways, and managing customer relationships.</p>
                            </div>
                            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white dark:bg-gray-800 border-4 border-primary flex items-center justify-center shadow-lg z-20">
                                <span className="text-xs font-bold text-neutral-dark dark:text-white">W3</span>
                            </div>
                            <div className="md:w-1/2 md:pl-12 pl-16 order-3 md:order-2 hidden md:block">
                                <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-lg text-xs font-medium text-gray-500">Sales Focus</span>
                            </div>
                        </div>
                        {/* Week 4 */}
                        <div className="flex flex-col md:flex-row gap-8 items-start group">
                            <div className="md:w-1/2 md:text-right md:pr-12 pl-16 md:pl-0 order-2 md:order-1 hidden md:block">
                                <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-lg text-xs font-medium text-gray-500">Management</span>
                            </div>
                            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white dark:bg-gray-800 border-4 border-primary flex items-center justify-center shadow-lg z-20">
                                <span className="text-xs font-bold text-neutral-dark dark:text-white">W4</span>
                            </div>
                            <div className="md:w-1/2 md:pl-12 pl-16 order-3 md:order-2">
                                <h3 className="text-xl font-bold text-neutral-dark dark:text-white group-hover:text-primary transition-colors">
                                    Business Finance &amp; Strategy</h3>
                                <p className="text-gray-600 dark:text-gray-400 mt-2">Pricing models, bookkeeping
                                    basics, and sustainable growth planning.</p>
                            </div>
                        </div>
                        {/* Week 5 */}
                        <div className="flex flex-col md:flex-row gap-8 items-start group">
                            <div className="md:w-1/2 md:text-right md:pr-12 pl-16 md:pl-0 order-2 md:order-1">
                                <h3 className="text-xl font-bold text-neutral-dark dark:text-white group-hover:text-primary transition-colors">
                                    Pitching &amp; Launch Day</h3>
                                <p className="text-gray-600 dark:text-gray-400 mt-2">Final presentations, feedback
                                    sessions, and graduation ceremony.</p>
                            </div>
                            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-white border-4 border-primary flex items-center justify-center shadow-lg z-20">
                                <span className="material-symbols-outlined text-[20px]">flag</span>
                            </div>
                            <div className="md:w-1/2 md:pl-12 pl-16 order-3 md:order-2 hidden md:block">
                                <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-lg text-xs font-medium text-gray-500">Finale</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </section>

      {/* Community & Wellbeing Section */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10"
                style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ffffff\\' fill-opacity=\\'1\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}>
            </div>
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 mb-6">
                            <span className="material-symbols-outlined text-[18px]">favorite</span>
                            <span className="text-xs font-bold uppercase tracking-wider">Community First</span>
                        </div>
                        <h2 className="text-3xl sm:text-5xl font-black mb-6 leading-tight">More Than Just a Course, It's a <span className="text-secondary/80">Sisterhood</span>.</h2>
                        <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                            We believe that entrepreneurship can be lonely, but it doesn't have to be. Our program
                            includes dedicated well-being sessions, peer support circles, and mental health resources to
                            ensure you thrive personally as your business grows.
                        </p>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-secondary/80">check_circle</span>
                                <span className="font-medium">Weekly mental wellness check-ins</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-secondary/80">check_circle</span>
                                <span className="font-medium">Supportive peer accountability groups</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-secondary/80">check_circle</span>
                                <span className="font-medium">Lifetime access to the WiDiB Alumni network</span>
                            </li>
                        </ul>
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <div className="grid grid-cols-2 gap-4">
                            <img alt="Two women having a conversation and laughing"
                                className="rounded-2xl w-full h-64 object-cover transform translate-y-8 shadow-xl"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAElga9w3Xm2qKK3-TQtQUIx-jsVFqqcc70W-ghQd3bQaCF0n-I2d5IGnXIW7rJIP_L7pA2mpWlwF09W6_OH_LaeWlvu8wXFAuCz-GTsga6e159Y89Ig2T4hdgGTVYAw0-PLEijOMlEhZUQ2mRllDZqEOJVuEjYyQ89qQj8M8QxWIS6VpB4KZWekORwPl2kpVX8aHMm1SojmDbOXDAvK-wz7p83lOEDyibkJHIDKvhJJnb6gxVGNdqUqiT8FDaHASUqqj6ysc3un6oX" />
                            <img alt="Group of women cheering" className="rounded-2xl w-full h-64 object-cover shadow-xl"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCf64SvXKxHXUQO3ZjjOJeovxiAWN1wJlkVp8bd19i9soPsrzhKQPZyXIC46ewXfIKlHvJ6FMg5iYRHP3YAG4KQFX7lHXzNV4_qEw06jHOysE9ebfPcO6gMEvQM0uJES675DDbeJ4pMRj7Hol4FRiFLY5tOtFTJh6Vzjein3HQ4UGaXx3oOqHlHJOM8fGJrQ9L-ZPncJcWDukMae1gBe173NWj937bA3KmiW-AW0AvnLRW4h7FUj6OE8qMH76QVmUM4J6Fc_-ZCa5wJ" />
                        </div>
                    </div>
                </div>
            </div>
      </section>

     {/* Footer CTA */}
     <section className="py-20 bg-primary text-white text-center"
     
     style={{
          background: "linear-gradient(135deg, #1e215d 0%, #262973 100%)",
        }}>
         <div className="max-w-3xl mx-auto px-4">
             <h2 className="text-4xl font-bold mb-6">Ready to Grow Your Business?</h2>
             <p className="text-xl text-blue-100 mb-10">
                 Join 200+ women who have transformed their side hustles into thriving brands.
             </p>
             <button className="bg-white text-blue-900 px-10 py-5 rounded-xl font-bold text-xl hover:bg-gray-100 transition-colors shadow-2xl">
                 Apply for Next Cohort
             </button>
             <p className="mt-4 text-sm text-blue-200">Limited spots available for October Session.</p>
         </div>
     </section>
    </>
  );
}
