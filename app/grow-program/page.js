import PageHero from "@/components/sections/PageHero";
import Testimonials from "@/components/sections/Testimonials";
import Link from "next/link";
import ProgramCTA from "@/components/ui/ProgramCTA";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { fetchAPI } from "@/lib/api";

export const metadata = {
  title: "GROW Incubator Program",
  description: "The GROW Incubator equips aspiring African women founders with the mentorship, funding pathways, and business skills to launch and scale their ventures.",
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
          backgroundImage: `linear-gradient(to right, rgba(0, 25, 76, 0.9) 0%, rgba(0, 25, 76, 0.4) 100%), url("/assets/images/programs/grow-team.webp")`,
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
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
            <div className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-2xl shadow-sm border border-navy/5 dark:border-white/10 relative">
              <span className="absolute top-8 left-8 text-primary/20 transform -translate-x-2 -translate-y-2">
                <span className="material-symbols-outlined text-[80px]">
                  format_quote
                </span>
              </span>
              <blockquote className="relative z-10">
                <p className="text-xl md:text-2xl font-medium text-navy dark:text-white italic leading-relaxed">
                  &quot;When women support each other, incredible things happen.
                  GROW isn&apos;t just a program; it&apos;s a movement
                  redefining the future of African tech.&quot;
                </p>
                <footer className="mt-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                    <Image
                      alt="Sarah M."
                      className="object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8lsGQQ4HHJvX1MDQBkb_qWrJOSBtT3xqsuyVIl0ZU188uxes7UrJyLbPETJg-HwuWgcbA_HTTgwM_T9JxciRDzbJ8Nc-31VDOsFldmSnuyL6srvLt867p007c_gDsjjjgT7UuapV_pHUkmLY1Hl30E2YVKXiMTPKzSGRyMcm1uRRVLHT0zKX3AY9Fe1Oy6zevQ9WGfh58_RTo1b0ZbcaU1cZQv2rDh24grcym1sEOr2Sym-oPC8yXp3Mrx3UJeSEhlDU6P_UN2_c"
                      width={48}
                      height={48}
                    />
                  </div>
                  <div>
                    <cite className="not-italic font-bold text-navy dark:text-white block">
                      Sarah M.
                    </cite>
                    <span className="text-sm text-primary font-medium">
                      Program Director
                    </span>
                  </div>
                </footer>
              </blockquote>
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
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group p-8 rounded-2xl bg-background-light dark:bg-gray-800 border border-navy/5 dark:border-white/10 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5">
              <div className="w-14 h-14 rounded-xl bg-secondary/5 dark:bg-white/5 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-3xl">
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
            {/* Card 2 */}
            <div className="group p-8 rounded-2xl bg-background-light dark:bg-gray-800 border border-navy/5 dark:border-white/10 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5">
              <div className="w-14 h-14 rounded-xl bg-secondary/5 dark:bg-white/5 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-3xl">
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
            {/* Card 3 */}
            <div className="group p-8 rounded-2xl bg-background-light dark:bg-gray-800 border border-navy/5 dark:border-white/10 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5">
              <div className="w-14 h-14 rounded-xl bg-secondary/5 dark:bg-white/5 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-3xl">
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

      <div className="py-20 bg-primary text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute -top-[100px] -left-[100px] w-[400px] h-[400px] bg-primary rounded-full blur-[100px]"></div>
          <div className="absolute top-[20%] right-[10%] w-[200px] h-[200px] bg-blue-400 rounded-full blur-[80px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-white font-heading text-3xl md:text-4xl font-bold">
              Our Impact So Far
            </h2>
            <p className="text-white/70 mt-4 max-w-2xl mx-auto">
              Measuring the change we bring to the ecosystem through data and
              stories.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
            <div className="p-6">
              <div className="text-5xl md:text-6xl font-black text-white mb-2">
                500+
              </div>
              <div className="text-xl font-medium text-white">
                Active Members
              </div>
              <p className="text-white/60 text-sm mt-2">
                Across 12 different regions
              </p>
            </div>
            <div className="p-6">
              <div className="text-5xl md:text-6xl font-black text-white mb-2">
                85%
              </div>
              <div className="text-xl font-medium text-white">
                Business Growth
              </div>
              <p className="text-white/60 text-sm mt-2">
                Reported by participants within 1 year
              </p>
            </div>
            <div className="p-6">
              <div className="text-5xl md:text-6xl font-black text-white mb-2">
                20+
              </div>
              <div className="text-xl font-medium text-white">
                Policy Engagements
              </div>
              <p className="text-white/60 text-sm mt-2">
                Advocating for digital inclusion
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="py-20 bg-white dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <h2 className="text-navy dark:text-white font-display text-3xl md:text-4xl font-bold text-center mb-16">
            Voices of GROW
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-background-light dark:bg-gray-800 p-8 rounded-2xl relative">
              <span className="material-symbols-outlined text-primary text-4xl absolute top-6 right-6 opacity-30">
                format_quote
              </span>
              <div className="flex items-center gap-4 mb-6">
                <Image
                  alt="Amina K."
                  className="rounded-full object-cover border-2 border-primary"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHU5x5r74aRsO-M90yUoArKZDOlyRqcK8WZZ-JB1kgAhzB7ixi5Ry6ywv30_QQPQ970tM9ZB-xdUAdre8Bz4T_OQRE-EJjqehIpeXkglCOTUizJyw_qLrB-UzpT7luvMKS6_I8GpzjxKDsoY8JkfXJn3Wj_zhRPFa7_JgaMD3SoHaVDydoG72i68AT875B6EavFNXXEAEBMhg6BmWu2Bvtih-ktUmGAL-viItERjsQo_lBAdnNOjBSX9l9G-MCPuYXekQKs8FtCbA"
                  width={56}
                  height={56}
                />
                <div>
                  <div className="font-bold text-navy dark:text-white">
                    Amina K.
                  </div>
                  <div className="text-xs text-primary font-bold uppercase tracking-wide">
                    Tech Founder
                  </div>
                </div>
              </div>
              <p className="text-navy/70 dark:text-gray-300 leading-relaxed text-sm">
                &quot;The mentorship I received helped me pivot my startup
                during a critical time. The community here is unmatched—truly
                sisters in tech.&quot;
              </p>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-background-light dark:bg-gray-800 p-8 rounded-2xl relative shadow-lg shadow-navy/5 transform md:-translate-y-4 border border-primary/20">
              <span className="material-symbols-outlined text-primary text-4xl absolute top-6 right-6 opacity-30">
                format_quote
              </span>
              <div className="flex items-center gap-4 mb-6">
                <Image
                  alt="Chioma O."
                  className="rounded-full object-cover border-2 border-primary"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgSfLhkS24XlmdkGHqXsyT6gwD4oJpQLSSY4QztPQppCSIQmRSd3eylvnUA0EWlOzzH-0nknexjtwrLS6wH73oIXLDhH_zJeBeZKsBGM-oWcg2WxKQdNzFzdi6HJKJ9wTCoIlyyK7HjHO6F-XdlarsB_dC9G5OZFyNIUfF5MlCeBrXqe2iP7GUj0Gvk7IPw9GrR5pqFUB-RPo36HWEdFMwfMTb_2jz6Obe9F6UDnzXoVBXdDAde0vH_M2yLYSRfivhbIjuAVpcMSg"
                  width={56}
                  height={56}
                />
                <div>
                  <div className="font-bold text-navy dark:text-white">
                    Chioma O.
                  </div>
                  <div className="text-xs text-primary font-bold uppercase tracking-wide">
                    Freelance Designer
                  </div>
                </div>
              </div>
              <p className="text-navy/70 dark:text-gray-300 leading-relaxed text-sm">
                &quot;I found my first major international client through a GROW
                networking event. This program gave me the confidence to charge
                what I&apos;m worth.&quot;
              </p>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-background-light dark:bg-gray-800 p-8 rounded-2xl relative">
              <span className="material-symbols-outlined text-primary text-4xl absolute top-6 right-6 opacity-30">
                format_quote
              </span>
              <div className="flex items-center gap-4 mb-6">
                <Image
                  alt="Zainab A."
                  className="rounded-full object-cover border-2 border-primary"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAO_w_MMQ48gJ3q3rNx2zN3W3J_YKZZfS1XlCUJH-wIFM-5rQUbPM2Wg1GojKgOMRT-lKGQTfdQZbWq4R96EPSTpP1McI_UTw97nQelRJwG79q-xaaIx17weXl_9QoXNU2QOgXlDP7-uwppDO_SQgvL8KSSgdaNJpPST3tRe929luj49IICYz7iV0hLQDYMJQZxCn6ITblugcY2HuhmjUTJVN_VSmhYqyq-Qq22_V3AJNO5CSl6LLPYVi3KS9YqsCjougr7-Rycb4Q"
                  width={56}
                  height={56}
                />
                <div>
                  <div className="font-bold text-navy dark:text-white">
                    Zainab A.
                  </div>
                  <div className="text-xs text-primary font-bold uppercase tracking-wide">
                    Policy Analyst
                  </div>
                </div>
              </div>
              <p className="text-navy/70 dark:text-gray-300 leading-relaxed text-sm">
                &quot;Advocating for digital rights is tough, but doing it with
                the backing of the GROW network makes our voice so much stronger
                in policy circles.&quot;
              </p>
            </div>
          </div>
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
            <Button
              variant="outline"
              size="lg"
              className="hover:bg-primary hover:text-white border-primary text-primary dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-primary"
            >
              Learn More About Impact
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
