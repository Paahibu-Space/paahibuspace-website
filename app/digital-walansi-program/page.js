import Link from "next/link";
import Image from "next/image";
import { fetchAPI } from "@/lib/api";
import ProgramCTA from "@/components/ui/ProgramCTA";
import ComponentsAccordion from "./components/ComponentsAccordion";
import PartnersTabs from "./components/PartnersTabs";

export const metadata = {
  title: "Digital Walansi",
  description:
    "The Digital Walansi Project trains young women as Digital Walansi Fellows, carrying digital safety, media literacy, and civic rights education into schools and communities across the Upper West Region of Ghana.",
};

const stats = [
  { value: "30", label: "Digital Walansi Fellows" },
  { value: "5", label: "Partner Schools" },
  { value: "2,000+", label: "Girls & Young Women Reached" },
  { value: "3 months", label: "School Deployment Period" },
];

const principles = [
  {
    title: "Community-first by design",
    body: "Fellows are recruited from the communities they serve. They speak the languages, know the people, and carry the cultural knowledge that external facilitators cannot replicate.",
  },
  {
    title: "Evidence-based",
    body: "The 87% and 79% figures that shaped the programme's design are primary data generated from Paahibu Space's own community research in the Upper West Region.",
  },
  {
    title: "Harm and aspiration together",
    body: "The programme addresses digital exclusion and TFGBV alongside girls' aspirations for civic participation, storytelling, and professional growth.",
  },
  {
    title: "Built to outlast the programme",
    body: "The Club Constitution, the Corner infrastructure, Teacher Focal Point orientation, and end-of-programme continuity review are all designed to persist after the funded cycle ends.",
  },
  {
    title: "Rooted in northern Ghana",
    body: "The programme is delivered in the Upper West Region — consistently underserved by digital safety programming concentrated in Accra and the south — and led by an organisation and founder from that region.",
  },
];

function initials(name) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default async function DigitalWalansiProgram() {
  const program = (await fetchAPI("/api/v1/programs/digital-walansi")) || {
    id: null,
    slug: "digital-walansi",
    name: "Digital Walansi",
    is_application_open: false,
    application_status: "Closed",
    application_link: null,
    fellows: [],
    partners: [],
  };

  const fellows = program.fellows || [];
  const partners = program.partners || [];

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
            <span className="font-semibold text-primary dark:text-secondary">Digital Walansi</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/women-empowerment.png"
            alt="Digital Walansi Fellow leading a community session in northern Ghana"
            fill
            priority
            className="object-cover mix-blend-luminosity"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/85 to-primary" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 lg:pt-28 lg:pb-20">

          <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6">
            Digital <span className="text-secondary">Walansi</span>
          </h1>

          <div className="max-w-2xl mb-10">
            <p className="text-base md:text-lg text-white/70 leading-relaxed">
              <span className="text-secondary font-semibold">Walansi</span> — a Waali word meaning{" "}
              <em>&quot;voice with a message&quot;</em> or <em>&quot;having an opinion,&quot;</em> spoken in the
              communities of northern Ghana where this programme is rooted. A Digital Walansi Fellow is a young
              woman trained to carry that voice — on digital safety, media literacy, and civic rights — into the
              schools and communities she already belongs to.
            </p>
          </div>

          <div className="mb-12">
            <ProgramCTA
              program={program}
              labelOpen="Apply Now"
              labelClosed="Join Waitlist"
              className="bg-secondary text-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 shadow-lg"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
            {stats.map((s) => (
              <div key={s.label} className="bg-black/20 backdrop-blur-sm px-6 py-5">
                <div className="text-3xl md:text-4xl font-black text-white mb-1">{s.value}</div>
                <div className="text-xs text-white/50 tracking-wider uppercase font-bold">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-xs tracking-[0.25em] uppercase text-white/50 font-bold block mb-6">
                The Problem We Are Addressing
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-8">
                The gap between aspiration and <span className="text-secondary">safety</span>
              </h2>

              <div className="space-y-6 mb-8">
                <div className="border-l-2 border-secondary pl-6">
                  <div className="text-5xl font-black text-secondary mb-2">87%</div>
                  <p className="text-white/70 text-sm leading-relaxed">
                    of girls surveyed want to be active in digital spaces — to learn, share stories, and engage in
                    civic life.
                  </p>
                </div>
                <div className="border-l-2 border-white/20 pl-6">
                  <div className="text-5xl font-black text-white mb-2">79%</div>
                  <p className="text-white/70 text-sm leading-relaxed">
                    say fear of harassment, abuse, and technology-facilitated gender-based violence prevents them
                    from doing so.
                  </p>
                </div>
              </div>

              <p className="text-xs tracking-widest uppercase text-white/40 italic">
                — from Paahibu Space&apos;s community research, Upper West Region
              </p>
            </div>

            <div className="space-y-6">
              <div className="p-8 bg-white/5 border border-white/10 rounded-xl">
                <span className="material-symbols-outlined text-3xl text-secondary mb-4 block">format_quote</span>
                <p className="text-white/80 leading-relaxed text-base">
                  Technology-facilitated gender-based violence is rising rapidly across Ghana and West Africa —
                  from non-consensual sharing of images and digital financial abuse, to coordinated harassment
                  that silences women in civic and public life.
                </p>
              </div>
              <p className="text-white/60 leading-relaxed text-sm">
                In the Upper West Region, these harms are compounded by limited access to reporting services,
                deeply internalized cultural norms, and a significant gap in community-level digital safety
                programming designed specifically for girls in this context.
              </p>
              <p className="text-white/80 leading-relaxed text-sm">
                The Digital Walansi responds to both the harm and the aspiration. It does not frame girls
                primarily as victims of digital exclusion. It frames them as young people with voices, skills, and
                stories who deserve the safety infrastructure, the knowledge, and the platforms to participate in
                digital public life on their own terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programme Components */}
      <section className="py-20 md:py-28 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 mb-16 items-end">
            <div>
              <span className="text-xs tracking-[0.25em] uppercase text-secondary font-bold block mb-4">
                Programme Components
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-primary dark:text-white leading-tight">
                Pillars of The <span className="text-secondary">Community-led</span> Model
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              The programme is designed around a foundational conviction that the most effective intervention in
              girls&apos; digital lives is one led by young women who belong to the same communities, speak the same
              languages, and carry the same cultural knowledge as the girls they are working with.
            </p>
          </div>

          <ComponentsAccordion />
        </div>
      </section>

      {/* Pull quote break */}
      <section className="relative py-24 md:py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="/assets/images/collab-impact.png"
            alt="Workshop session with students in northern Ghana"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <p className="text-3xl md:text-4xl font-black text-white leading-snug">
              &quot;The most effective intervention is one led by women who{" "}
              <span className="text-secondary">already belong</span> to the community.&quot;
            </p>
            <p className="mt-4 text-xs tracking-widest uppercase text-white/50 font-bold">
              — Digital Walansi Programme Principle
            </p>
          </div>
        </div>
      </section>

      {/* Distinguishes / Principles */}
      <section className="py-20 md:py-28 bg-white dark:bg-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-xs tracking-[0.25em] uppercase text-secondary font-bold block mb-4">
              What Distinguishes This Programme
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-primary dark:text-white leading-tight">
              Principles that <span className="text-secondary">define the work</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 dark:bg-white/10">
            {principles.map((p, i) => (
              <div
                key={p.title}
                className="bg-white dark:bg-surface-dark p-8 hover:bg-background-light dark:hover:bg-white/5 transition-colors group"
              >
                <h3 className="text-xl font-bold text-primary dark:text-white mb-4 leading-tight group-hover:text-secondary transition-colors">
                  {p.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
            <div className="relative overflow-hidden bg-primary min-h-[280px]">
              <Image
                src="/assets/images/youthled.png"
                alt="Young women leading digital safety sessions in their own communities"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Fellows */}
      <section className="py-20 md:py-28 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 mb-16 items-end">
            <div>
              <span className="text-xs tracking-[0.25em] uppercase text-secondary font-bold block mb-4">
                The Fellows
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-primary dark:text-white leading-tight">
                Cohor 1 <span className="text-secondary">Walansi Fellows</span>
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Each fellow is a young woman from the Upper West Region, recruited from the communities she serves.
              She carries the language, the relationships, and the cultural knowledge that makes this programme
              work.
            </p>
          </div>

          {fellows.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-gray-200 dark:bg-white/10 mb-12">
              {fellows.map((f, i) => (
                <div key={f.id} className="bg-white dark:bg-surface-dark group relative overflow-hidden">
                  <div className="relative h-64 bg-primary overflow-hidden">
                    {f.image_url ? (
                      <Image
                        src={f.image_url}
                        alt={f.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-4xl font-black text-white/30">{initials(f.name)}</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="font-bold text-white text-base leading-tight">{f.name}</div>
                    </div>
                  </div>
                  <div className="p-4 border-t border-gray-100 dark:border-white/10">
                    {f.role && <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{f.role}</p>}
                    {f.quote && (
                      <p className="text-xs text-primary dark:text-secondary mt-1 italic line-clamp-2">
                        &quot;{f.quote}&quot;
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-16 text-center bg-white dark:bg-surface-dark rounded-2xl border border-dashed border-gray-200 dark:border-white/10 mb-12">
              <p className="text-gray-500 dark:text-gray-400 font-medium">
                Fellow profiles will appear here once published.
              </p>
            </div>
          )}

          <div className="flex items-center gap-6">
            <div className="h-px flex-1 bg-gray-200 dark:bg-white/10" />
            <p className="text-xs text-gray-500 dark:text-gray-400 tracking-wider uppercase text-center font-bold">
              Cohort profiles updated each programme cycle
            </p>
            <div className="h-px flex-1 bg-gray-200 dark:bg-white/10" />
          </div>
        </div>
      </section>

      {/* Partners & Funders */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 mb-16 items-end">
            <div>
              <span className="text-xs tracking-[0.25em] uppercase text-white/40 font-bold block mb-4">
                Partners & Funders
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                Partner with <span className="text-secondary">Digital Walansi</span>
              </h2>
            </div>
            <p className="text-white/60 leading-relaxed">
              Organisations that engage with the programme — whether as facilitators, development session
              contributors, community partners, or co-funders — gain access to a set of resources, relationships,
              and opportunities rooted in the Upper West Region.
            </p>
          </div>

          <PartnersTabs partners={partners} />
        </div>
      </section>

      {/* Footer CTA */}
      <div className="bg-white dark:bg-background-dark py-12 text-center border-t border-gray-100 dark:border-white/10">
        <p className="text-gray-900 dark:text-white font-bold mb-4">Questions? Reach out to us.</p>
        <a href="mailto:programs@paahibuspace.org" className="text-primary dark:text-secondary font-bold hover:underline">
          programs@paahibuspace.org
        </a>
      </div>
    </>
  );
}
