import PageHero from "@/components/sections/PageHero";
import Testimonials from "@/components/sections/Testimonials";
import Link from "next/link";
import ProgramCTA from "@/components/ui/ProgramCTA";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { fetchAPI } from "@/lib/api";
import GrowStoriesSlider from "@/components/sections/GrowStoriesSlider";

export const metadata = {
  title: "GROW Network Program",
  description: "The GROW Network equips aspiring African women founders with the mentorship, funding pathways, and business skills to launch and scale their ventures.",
};

export default async function GrowProgramPage() {
  // Fetch programs and find GROW
  const programs = (await fetchAPI("/api/v1/programs")) || [];
  const growProgram = programs.find((p) => p.name.includes("GROW")) || {
    id: 99,
    name: "GROW Program",
    is_application_open: false, // Safe fallback
  };

  return (
    <>
      {/* Breadcrumbs */}
      <div className="w-full bg-background-light dark:bg-background-dark border-b border-[#f4ede7]/50 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-4">
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <Link
              className="text-navy/60 dark:text-gray-400 hover:text-primary font-medium"
              href="/"
            >
              Home
            </Link>
            <span className="material-symbols-outlined text-navy/40 dark:text-gray-600 text-[16px]">
              chevron_right
            </span>
            <Link
              className="text-navy/60 dark:text-gray-400 hover:text-primary font-medium"
              href="/#programs"
            >
              Programs
            </Link>
            <span className="material-symbols-outlined text-navy/40 dark:text-gray-600 text-[16px]">
              chevron_right
            </span>
            <span className="text-primary font-bold">GROW</span>
          </div>
        </div>
      </div>

      <section
        className="relative w-full min-h-[600px] flex items-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 25, 76, 0.9) 0%, rgba(0, 25, 76, 0.4) 100%), url("/assets/images/programs/grow-project-hero.png")`,
        }}
      >
        <div className="max-w-7xl w-full mx-auto px-5 md:px-10 py-20">
          <div className="max-w-3xl flex flex-col gap-6 items-start text-left">
            <div className="flex flex-col gap-2">
              <h1 className="text-white font-display text-5xl md:text-7xl font-bold leading-tight tracking-tight">
                The GROW Network
              </h1>
              <h2 className="text-secondary text-xl md:text-2xl font-medium tracking-wide">
                Girls & Women Rising on the Web
              </h2>
            </div>
            <p className="text-gray-200 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              Join a transformative journey designed to empower African women
              through technology, mentorship, and community leadership.
            </p>
            {/* Dynamic CTA */}
            <ProgramCTA
              program={growProgram}
              className="mt-4"
              labelOpen="Apply Now"
              labelClosed="Join Waitlist"
            />
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="flex flex-col gap-6 max-w-3xl">
            <h2 className="text-navy dark:text-white font-display text-3xl md:text-4xl font-bold leading-tight">
              Empowering Women, Building Networks
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full"></div>
            <p className="text-navy/70 dark:text-gray-300 text-lg leading-relaxed">
              The GROW Program is a flagship initiative focused on creating a
              safe and empowering community and network for women
              entrepreneurs, freelancers, founders and young professionals.
              GROW provides personal and professional development, business
              support, and networking opportunities, fostering a culture of
              creativity and collaboration for women in Ghana.
            </p>
            <p className="text-navy/70 dark:text-gray-300 text-lg leading-relaxed">
              It also addresses systemic barriers to women&apos;s economic
              participation through research, advocacy on gender-responsive
              policies and participating in national and global policy
              discussions, campaigns on women&apos;s empowerment and safety.
            </p>
          </div>
        </div>
      </section>

      {/* Key Project Activities */}
      <section
        className="relative py-24 bg-cover bg-center bg-no-repeat bg-fixed overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 25, 76, 0.9) 0%, rgba(0, 25, 76, 0.75) 100%), url("/assets/images/team-laugh.png")`,
        }}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <h2 className="text-white font-display text-4xl md:text-6xl font-black leading-tight">
              Key Project
              <br />
              Activities
            </h2>
            <div className="space-y-10">
              {/* Item 01 */}
              <div className="relative flex items-center">
                <div className="z-10 flex-shrink-0 w-16 h-16 rounded-full bg-secondary border-4 border-white flex items-center justify-center text-white font-black text-xl -mr-8">
                  01
                </div>
                <div className="flex-1 bg-sky-50 pl-12 pr-6 py-5 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
                  <h3 className="font-bold text-navy text-lg md:w-44 flex-shrink-0">
                    Nhanga Sessions
                  </h3>
                  <p className="text-navy/80 text-sm leading-relaxed">
                    Provided a safe space for intergenerational dialogues,
                    peer mentorship & policy dialogues.
                  </p>
                </div>
              </div>
              {/* Item 02 */}
              <div className="relative flex items-center">
                <div className="z-10 flex-shrink-0 w-16 h-16 rounded-full bg-secondary border-4 border-white flex items-center justify-center text-white font-black text-xl -mr-8">
                  02
                </div>
                <div className="flex-1 bg-navy pl-12 pr-6 py-5 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
                  <h3 className="font-bold text-white text-lg md:w-44 flex-shrink-0">
                    Digital & Business Skills Training
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Provided context-relevant and income-first skills with
                    immediate impact on digital literacy & safety, investment
                    readiness & businesss management skills.
                  </p>
                </div>
              </div>
              {/* Item 03 */}
              <div className="relative flex items-center">
                <div className="z-10 flex-shrink-0 w-16 h-16 rounded-full bg-secondary border-4 border-white flex items-center justify-center text-white font-black text-xl -mr-8">
                  03
                </div>
                <div className="flex-1 bg-sky-50 pl-12 pr-6 py-5 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
                  <h3 className="font-bold text-navy text-lg md:w-44 flex-shrink-0">
                    Policy Literacy & Development
                  </h3>
                  <p className="text-navy/80 text-sm leading-relaxed">
                    Developing a knowledge management toolkit, a policy
                    brief, sustaining the impact of the voice and agency of
                    GROW Network members.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section
        className="relative py-24 bg-cover bg-center bg-no-repeat bg-fixed overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 25, 76, 0.9) 0%, rgba(0, 25, 76, 0.75) 100%), url("/assets/images/team-laugh.png")`,
        }}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <h2 className="text-white font-display text-4xl md:text-6xl font-black text-center tracking-wide mb-16">
            GROW Outcomes
          </h2>

          <div className="grid md:grid-cols-[1fr_auto_1fr] gap-x-10 gap-y-14 items-center">
            {/* Left column */}
            <div className="space-y-14 order-1">
              <div>
                <h3 className="text-white font-bold text-xl mb-3">
                  Increased Digital Literacy
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Over 100 women entrepreneurs have learnt how to turn their
                  smartphones into business tools, reframing digital literacy
                  as economic empowerment, not just technical know-how.
                </p>
              </div>
              <div>
                <h3 className="text-white font-bold text-xl mb-3">
                  Nhanga Became Structured
                </h3>
                <p className="text-white/80 leading-relaxed">
                  The GROW Network became the first structured space in
                  Northern Ghana where informal women entrepreneurs and young
                  professionals co-lead.
                </p>
              </div>
            </div>

            {/* Hexagon icon cluster */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 mx-auto order-3 md:order-2">
              {[
                { icon: "deployed_code", top: "8%", left: "50%" },
                { icon: "request_quote", top: "40%", left: "24%" },
                { icon: "computer", top: "40%", left: "76%" },
                { icon: "campaign", top: "76%", left: "10%" },
                { icon: "diversity_1", top: "80%", left: "50%" },
                { icon: "person_pin_circle", top: "76%", left: "90%" },
              ].map(({ icon, top, left }) => (
                <div
                  key={icon}
                  className="absolute w-20 h-20 sm:w-24 sm:h-24 bg-secondary flex items-center justify-center text-white -translate-x-1/2 -translate-y-1/2"
                  style={{
                    top,
                    left,
                    clipPath:
                      "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                  }}
                >
                  <span className="material-symbols-outlined text-3xl sm:text-4xl">
                    {icon}
                  </span>
                </div>
              ))}
            </div>

            {/* Right column */}
            <div className="space-y-14 order-2 md:order-3">
              <div>
                <h3 className="text-white font-bold text-xl mb-3">
                  Policy Influence & Agency Reclaimed
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Women entrepreneurs co-designed insights for a policy brief
                  on informal sector and ATVET women&apos;s needs, creating a
                  feedback loop between lived experiences and policy
                  frameworks.
                </p>
              </div>
              <div>
                <h3 className="text-white font-bold text-xl mb-3">
                  Trust Rebuilt & Community Ownership
                </h3>
                <p className="text-white/80 leading-relaxed">
                  GROW restored trust, with 97.1% of women expressing desire
                  to be part of the network long-term, through peer
                  leadership, open communication and regular feedback loops.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Focus Areas */}
      <section className="py-20 bg-white dark:bg-black/20">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-navy dark:text-white font-display text-3xl md:text-4xl font-bold mb-4">
              Key Focus Areas
            </h2>
            <p className="text-navy/60 dark:text-gray-400 text-lg">
              Our approach is holistic, targeting three pillars essential for
              sustainable growth.
            </p>
          </div>
          <div className="relative grid md:grid-cols-3 gap-14 md:gap-8">
            {/* Connecting line (desktop only) */}
            <div className="hidden md:block absolute top-8 left-[16.6667%] right-[16.6667%] h-0.5 bg-primary/15 dark:bg-white/10"></div>

            {/* Pillar 1 */}
            <div className="relative flex flex-col items-center text-center md:items-start md:text-left">
              <div className="relative z-10 w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mb-6 ring-8 ring-white dark:ring-black/20">
                <span className="material-symbols-outlined text-2xl">
                  groups
                </span>
              </div>
              <h3 className="text-xl font-bold text-navy dark:text-white mb-3">
                Community & Networking
              </h3>
              <p className="text-navy/70 dark:text-gray-300 leading-relaxed">
                Building a safe, empowering space where women entrepreneurs,
                freelancers, founders, and young professionals connect,
                collaborate, and grow together. Through curated networking
                events and a thriving peer community, GROW fosters meaningful
                relationships that open doors and create lasting opportunities
                across Ghana.
              </p>
            </div>
            {/* Pillar 2 */}
            <div className="relative flex flex-col items-center text-center md:items-start md:text-left">
              <div className="relative z-10 w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mb-6 ring-8 ring-white dark:ring-black/20">
                <span className="material-symbols-outlined text-2xl">
                  trending_up
                </span>
              </div>
              <h3 className="text-xl font-bold text-navy dark:text-white mb-3">
                Personal & Professional Development
              </h3>
              <p className="text-navy/70 dark:text-gray-300 leading-relaxed">
                Equipping women with the tools, skills and support they need to
                thrive personally and in business. From workshops and mentorship
                to business support resources, GROW nurtures creativity,
                confidence and capability at every stage of a woman&apos;s
                professional journey.
              </p>
            </div>
            {/* Pillar 3 */}
            <div className="relative flex flex-col items-center text-center md:items-start md:text-left">
              <div className="relative z-10 w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mb-6 ring-8 ring-white dark:ring-black/20">
                <span className="material-symbols-outlined text-2xl">
                  campaign
                </span>
              </div>
              <h3 className="text-xl font-bold text-navy dark:text-white mb-3">
                Advocacy & Policy Change
              </h3>
              <p className="text-navy/70 dark:text-gray-300 leading-relaxed">
                Challenging the systemic barriers that hold women back from full
                economic participation. Through research, campaigns and active
                engagement in national and global policy discussions, GROW
                champions gender-responsive policies and amplifies women&apos;s
                voices where decisions are made.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits for Members */}
      <section className="py-20 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <h2 className="text-navy dark:text-white font-display text-3xl md:text-4xl font-bold mb-6">
                Benefits for Members
              </h2>
              <p className="text-navy/70 dark:text-gray-300 text-lg mb-8">
                Joining GROW means gaining access to an ecosystem designed for
                your success. We provide the tools, you bring the ambition.
              </p>
              <div className="hidden lg:block rounded-2xl overflow-hidden h-[400px] relative">
                <Image
                  alt="Member Benefits"
                  className="object-cover"
                  src="/assets/images/programs/member-benefit.png"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>
            </div>
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="space-y-4">
                {/* Accordion Item 1 */}
                <div className="bg-white dark:bg-gray-800 rounded-xl border border-navy/10 dark:border-white/10 overflow-hidden">
                  <details className="group p-6" open>
                    <summary className="flex cursor-pointer items-center justify-between text-navy dark:text-white font-bold text-lg md:text-xl">
                      <span>Personal Development</span>
                      <span className="material-symbols-outlined text-primary transition-transform duration-300 group-open:rotate-180">
                        expand_more
                      </span>
                    </summary>
                    <div className="mt-4 text-navy/70 dark:text-gray-300 leading-relaxed border-t border-navy/5 dark:border-white/5 pt-4 animate-fadeIn">
                      Gain access to exclusive mentorship programs connecting
                      you with industry leaders. We focus on leadership skills,
                      public speaking, and confidence building to help you
                      navigate professional spaces effectively.
                    </div>
                  </details>
                </div>
                {/* Accordion Item 2 */}
                <div className="bg-white dark:bg-gray-800 rounded-xl border border-navy/10 dark:border-white/10 overflow-hidden">
                  <details className="group p-6">
                    <summary className="flex cursor-pointer items-center justify-between text-navy dark:text-white font-bold text-lg md:text-xl">
                      <span>Business Support</span>
                      <span className="material-symbols-outlined text-primary transition-transform duration-300 group-open:rotate-180">
                        expand_more
                      </span>
                    </summary>
                    <div className="mt-4 text-navy/70 dark:text-gray-300 leading-relaxed border-t border-navy/5 dark:border-white/5 pt-4">
                      Receive strategic business advice, digital toolkits, and
                      direct access to market opportunities. Our workshops cover
                      everything from financial literacy to digital marketing
                      strategies tailored for small businesses.
                    </div>
                  </details>
                </div>
                {/* Accordion Item 3 */}
                <div className="bg-white dark:bg-gray-800 rounded-xl border border-navy/10 dark:border-white/10 overflow-hidden">
                  <details className="group p-6">
                    <summary className="flex cursor-pointer items-center justify-between text-navy dark:text-white font-bold text-lg md:text-xl">
                      <span>Networking Opportunities</span>
                      <span className="material-symbols-outlined text-primary transition-transform duration-300 group-open:rotate-180">
                        expand_more
                      </span>
                    </summary>
                    <div className="mt-4 text-navy/70 dark:text-gray-300 leading-relaxed border-t border-navy/5 dark:border-white/5 pt-4">
                      Connect with peers across the continent. Participate in
                      members-only events, collaborative projects, and industry
                      meetups that open doors to partnerships and new ventures.
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="py-20 bg-white dark:bg-background-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-start justify-between mb-16">
            <div className="relative inline-block">
              <h2 className="inline-block border-2 border-dashed border-navy/60 dark:border-white/40 text-navy dark:text-white font-display text-3xl md:text-5xl font-black px-10 py-4">
                Evidence Found
              </h2>
              <div className="absolute left-0 bottom-0 translate-y-1/2 w-24 h-3 bg-secondary"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Stat 1 */}
            <div className="border-2 border-dashed border-navy/40 dark:border-white/30 p-8">
              <div className="text-5xl md:text-6xl font-black text-navy dark:text-white mb-3">
                95.7%
              </div>
              <div className="w-12 h-1 bg-secondary mb-4"></div>
              <h3 className="text-lg font-bold text-navy dark:text-white mb-3">
                Smart Phone Ownership
              </h3>
              <ul className="text-navy/70 dark:text-gray-300 text-sm leading-relaxed space-y-2 list-disc list-outside pl-4">
                <li>
                  95.7% surveyed owned smart phones, yet 70% do not know how
                  to use them beyond basic calls & messaging.
                </li>
                <li>
                  High data costs and digital platforms priced in foreign
                  currencies were cited as major barriers to digital
                  adoption.
                </li>
              </ul>
            </div>
            {/* Stat 2 */}
            <div className="border-2 border-dashed border-navy/40 dark:border-white/30 p-8">
              <div className="text-5xl md:text-6xl font-black text-navy dark:text-white mb-3">
                87%
              </div>
              <div className="w-12 h-1 bg-secondary mb-4"></div>
              <h3 className="text-lg font-bold text-navy dark:text-white mb-3">
                Business Growth Aspirations
              </h3>
              <ul className="text-navy/70 dark:text-gray-300 text-sm leading-relaxed space-y-2 list-disc list-outside pl-4">
                <li>
                  87% of women entrepreneurs in GROW operate unregistered
                  businesses. 67% expressed interest in business
                  formalization.
                </li>
                <li>
                  There is strong demand for eco-friendly packaging solutions
                  and business starter kits that are affordable and
                  accessible.
                </li>
              </ul>
            </div>
            {/* Stat 3 */}
            <div className="border-2 border-dashed border-navy/40 dark:border-white/30 p-8">
              <div className="text-5xl md:text-6xl font-black text-navy dark:text-white mb-3">
                97.1%
              </div>
              <div className="w-12 h-1 bg-secondary mb-4"></div>
              <h3 className="text-lg font-bold text-navy dark:text-white mb-3">
                Network Demand
              </h3>
              <ul className="text-navy/70 dark:text-gray-300 text-sm leading-relaxed space-y-2 list-disc list-outside pl-4">
                <li>
                  A majority, representing 97.1%, want to be part of a
                  women&apos;s group or network that combines business growth
                  support with personal connection, solidarity, and
                  trust-building.
                </li>
                <li>
                  Community-building activities, practical &
                  culturally-relevant training and follow-ups, are what will
                  strengthen the network.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section className="py-20 bg-white dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <h2 className="text-navy dark:text-white font-display text-3xl md:text-4xl font-bold text-center mb-16">
            Stories from GROW
          </h2>
          <GrowStoriesSlider />
        </div>
      </section>

      <section className="py-24 bg-background-light dark:bg-background-dark border-t border-navy/5 dark:border-white/10">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-navy dark:text-white font-display text-4xl md:text-5xl font-bold mb-6">
            Ready to GROW?
          </h2>
          <p className="text-navy/60 dark:text-gray-400 text-xl mb-10 max-w-2xl mx-auto">
            Join a community that is reshaping the narrative of African women in
            technology and business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Dynamic CTA */}
            <ProgramCTA
              program={growProgram}
              className="shadow-lg"
              labelOpen="Join GROW"
              labelClosed="Join Waitlist"
            />
          </div>
        </div>
      </section>
    </>
  );
}
