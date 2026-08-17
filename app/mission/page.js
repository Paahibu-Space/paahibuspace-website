import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Our Mission",
  description: "We are a youth-led, women-centered non-profit committed to bridging the gender gap in digital access, economic empowerment, and leadership across Africa.",
};

export default function MissionPage() {
  return (
    <>
      <section className="relative overflow-hidden py-16 lg:py-24 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6 text-center lg:text-left order-2 lg:order-1">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight text-neutral-dark dark:text-white leading-[1.1]">
                  Empowering African <span className="text-primary">Women in Tech</span>
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  We are a youth-led, women-centered non-profit committed to bridging the gender gap in digital access, economic empowerment, and leadership.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                <Link
                  href="/involve"
                  className="flex items-center justify-center h-12 px-8 rounded-lg bg-primary hover:bg-primary/90 text-white text-base font-bold shadow-lg shadow-primary/20 transition-all hover:scale-105"
                >
                  Join the Community
                </Link>
                <Link
                  href="/programs"
                  className="flex items-center justify-center h-12 px-8 rounded-lg bg-white dark:bg-transparent border border-gray-200 dark:border-gray-700 hover:border-primary/50 dark:hover:border-secondary hover:text-primary dark:hover:text-secondary text-neutral-dark dark:text-white text-base font-semibold shadow-sm transition-all"
                >
                  View Programs
                </Link>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gray-100 dark:bg-gray-800 group">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-teal-500/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
                <Image 
                  src="/assets/images/programs/widib.webp" 
                  alt="Group of diverse women working together on laptops"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-[#1f1823] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block">
              Our Purpose
            </span>
            <h2 className="text-3xl md:text-4xl text-neutral-dark dark:text-white mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              We are dedicated to bridging the gap and fostering excellence through three core pillars
              designed to uplift every member of our community.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="group hover:-translate-y-1 transition-transform duration-300 bg-background-light dark:bg-background-dark rounded-xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm h-full flex flex-col">
              <div className="mb-6 text-secondary group-hover:scale-110 transition-transform duration-300 origin-left">
                <span className="material-symbols-outlined text-[80px]" style={{ fontSize: "80px" }}>
                  door_open
                </span>
              </div>
              <h3 className="text-2xl text-primary dark:text-white mb-3">
                Access
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed flex-grow">
                Bridging the digital divide by providing essential resources to those who need them most. We
                ensure no talent is left behind due to lack of opportunity.
              </p>
              <div className="bg-white dark:bg-[#251d29] rounded-lg p-4 mt-auto">
                <p className="text-xs font-bold text-neutral-dark dark:text-gray-200 uppercase tracking-wider mb-3">
                  Key Initiatives
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <span>TechSistars Program</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <span>Women in Digital Business (WiDiB)</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <span>Digital Literacy & Safety</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="group hover:-translate-y-1 transition-transform duration-300 bg-background-light dark:bg-background-dark rounded-xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm h-full flex flex-col">
              <div className="mb-6 text-secondary group-hover:scale-110 transition-transform duration-300 origin-left">
                <span className="material-symbols-outlined text-[80px]" style={{ fontSize: "80px" }}>
                  lightbulb
                </span>
              </div>
              <h3 className="text-2xl text-primary dark:text-white mb-3">
                Innovate
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed flex-grow">
                Fostering creativity and technical excellence through hands-on experimentation. We create
                safe spaces for bold ideas and cutting-edge development.
              </p>
              <div className="bg-white dark:bg-[#251d29] rounded-lg p-4 mt-auto">
                <p className="text-xs font-bold text-neutral-dark dark:text-gray-200 uppercase tracking-wider mb-3">
                  Key Initiatives
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <span>Women in Code & Hardware</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <span>Entrepreneurship Incubators</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <span>Green Tech Solutions</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="group hover:-translate-y-1 transition-transform duration-300 bg-background-light dark:bg-background-dark rounded-xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm h-full flex flex-col">
              <div className="mb-6 text-secondary group-hover:scale-110 transition-transform duration-300 origin-left">
                <span className="material-symbols-outlined text-[80px]" style={{ fontSize: "80px" }}>
                  trending_up
                </span>
              </div>
              <h3 className="text-2xl text-primary dark:text-white mb-3">
                Transform
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed flex-grow">
                Changing career trajectories and leadership landscapes permanently. We don&apos;t just teach
                code; we build the next generation of industry leaders.
              </p>
              <div className="bg-white dark:bg-[#251d29] rounded-lg p-4 mt-auto">
                <p className="text-xs font-bold text-neutral-dark dark:text-gray-200 uppercase tracking-wider mb-3">
                  Key Initiatives
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <span>Community Ambassadors</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <span>Policy Advocacy</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <span>Leadership & Mentorship</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <Link
              href="/involve"
              className="flex items-center gap-2 h-14 px-10 rounded-full bg-primary hover:bg-primary/90 text-white text-lg font-bold shadow-lg shadow-primary/25 transition-all hover:-translate-y-1"
            >
              <span>Join the Mission</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#faf9fb] dark:bg-[#1a141e] py-10">
        <div className="container mx-auto px-6 max-w-[960px] text-center">
          <h2 className="text-[#161019] dark:text-white text-3xl md:text-4xl leading-tight tracking-tight mb-4">
            Why Join Hands With Us?
          </h2>
          <p className="text-[#555] dark:text-[#bbb] text-lg max-w-2xl mx-auto">
            We are more than just a network. We are a movement designed to uplift, connect, and propel you forward.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#faf9fb] dark:bg-[#1a141e] pb-24">
        <div className="container mx-auto px-6 max-w-[1080px] flex flex-col gap-20">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 group">
            <div className="w-full md:w-1/2 aspect-[4/3] rounded-lg overflow-hidden shadow-md relative">
              <Image
                alt="Two women colleagues discussing work on a laptop"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                src="/assets/images/collab-impact.png"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="w-full md:w-1/2 dark:bg-[#251d2b] p-10 rounded-lg flex flex-col gap-4 justify-center h-fit">
              <h3 className="text-2xl text-[#161019] dark:text-white">
                Collaborative Impact
              </h3>
              <p className="text-[#555] dark:text-[#bbb] leading-relaxed">
                We drive gender-responsive innovation through strategic alliances. Working with partners like Plan International, Mastercard Foundation, EU Global Youth Mobilization, and the Internet Society Ghana, we influence policy and scale our initiatives globally.
              </p>
              <Link
                href="/impact"
                className="mt-2 text-primary font-bold text-sm hover:underline flex items-center gap-1"
              >
                Our Partners & Network <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12 group">
            <div className="w-full md:w-1/2 aspect-[4/3] rounded-lg overflow-hidden shadow-md relative">
              <Image
                alt="Group of diverse friends laughing together outdoors"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                src="/assets/images/longterm-sus.png"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="w-full md:w-1/2 dark:bg-[#251d2b] p-10 rounded-lg flex flex-col gap-4 justify-center h-fit">
              <h3 className="text-2xl text-[#161019] dark:text-white">
                Long-Term Sustainability
              </h3>
              <p className="text-[#555] dark:text-[#bbb] leading-relaxed">
                Our model integrates diverse funding—from grants to revenue-generating services—ensuring financial resilience. We focus on community ownership, leadership succession, and adaptive programming to empower women beyond short-term cycles.
              </p>
              <Link
                href="/grow-program"
                className="mt-2 text-primary font-bold text-sm hover:underline flex items-center gap-1"
              >
                Read Our Sustainability Plan <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 group">
            <div className="w-full md:w-1/2 aspect-[4/3] rounded-lg overflow-hidden shadow-md relative">
              <Image
                alt="Confident woman leading a presentation in an office"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                src="/assets/images/leadership.png"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="w-full md:w-1/2 dark:bg-[#251d2b] p-10 rounded-lg flex flex-col gap-4 justify-center h-fit">
              <h3 className="text-2xl text-[#161019] dark:text-white">
                Governance & Leadership
              </h3>
              <p className="text-[#555] dark:text-[#bbb] leading-relaxed">
                Structured decision-making lies at our core. From our Senior Leadership Team driving operations to programmatic decisions informed by MERLI feedback, we ensure transparency, accountability, and strategic growth.
              </p>
              <Link
                href="/team"
                className="mt-2 text-primary font-bold text-sm hover:underline flex items-center gap-1"
              >
                Our Governance Structure <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
