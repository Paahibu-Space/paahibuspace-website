import Link from "next/link";
import Image from "next/image";
import { fetchAPI } from "@/lib/api";
import ProgramCTA from "@/components/ui/ProgramCTA";
import ComponentsAccordion from "./components/ComponentsAccordion";
import PartnersTabs from "./components/PartnersTabs";

export const metadata = {
  title: "Digital Walansi",
  description:
    "Digital Walansi is a youth-led digital education and safety programme equipping young women, secondary-school students, and teachers in underserved communities to participate safely, critically, and productively in an increasingly AI-driven digital world.",
};

const stats = [
  { value: "30", label: "Digital Walansi Fellows" },
  { value: "4", label: "Core Training Areas" },
  { value: "3", label: "Kontonbile Platform Functions" },
  { value: "Ghana", label: "Selected Regions Deployment" },
];

const kontonbileFunctions = [
  {
    icon: "school",
    title: "Learning",
    body: "Students and teachers explore AI-supported learning, ask questions, access educational information, and verify information. The platform is designed to build critical engagement with information and AI-generated content, and to encourage responsible AI use, privacy, and critical thinking.",
    img: "/assets/images/programs/walansi/walansi_learning.webp",
    imgAlt: "A Digital Walansi Fellow and a student reviewing AI, deepfakes, and verification training material together",
  },
  {
    icon: "shield",
    title: "Safety & Anonymous Reporting",
    body: "Students can anonymously report concerns relating to TFGBV and other digital-safety experiences. This creates an additional pathway for young people who may not feel comfortable immediately disclosing an experience face-to-face, while connecting serious concerns to appropriate safeguarding and referral processes.",
    img: "/assets/images/programs/walansi/walansi_anonymous.webp",
    imgAlt: "Students holding signs advocating for online safety and digital rights",
  },
  {
    icon: "forum",
    title: "Ask Me Anything & Professional Support",
    body: "Students can privately seek information or raise questions around mental wellbeing, identity, relationships, health, and safety. Where appropriate, they are connected to a network of vetted professional volunteers, psychologists, healthcare professionals, and lawyers for specialised human support and referrals.",
    img: "/assets/images/programs/walansi/ask_me_anything.png",
    imgAlt: "Walansi Kontonbile's Ask Me Anything interface, connecting a student to a vetted professional volunteer",
  },
];

const principles = [
  {
    title: "Youth-led by design",
    body: "Thirty young women are trained as Digital Walansi Fellows and deployed into the secondary schools where they facilitate learning directly with students and teachers, carrying the programme forward from within the school community.",
  },
  {
    title: "Learning, safety, and support — together",
    body: "Walansi Kontonbile brings together three functions usually treated separately in education technology: AI-supported learning, anonymous digital-safety reporting, and access to trusted professional support, in a single responsible platform.",
  },
  {
    title: "AI that supports, not replaces",
    body: "Where a student needs specialised human care, Kontonbile connects them to vetted professional volunteers. AI helps make trusted information and pathways to human support more accessible — it does not stand in for that care.",
  },
  {
    title: "Co-developed, not delivered",
    body: "Walansi Kontonbile is co-developed with the young people and schools expected to use it, and the Digital Walansi Clubs it supports provide sustained spaces for peer learning, digital leadership, and responsible technology use.",
  },
  {
    title: "Evidence-generating",
    body: "The programme generates evidence on how young people are using AI and digital technologies in Ghanaian secondary schools — the opportunities and risks they encounter, the support they need, and how responsible AI can be integrated into education responsibly.",
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
            src="/assets/images/inclusive-growth.webp"
            alt="Young women and secondary-school students engaging with digital learning"
            fill
            priority
            className="object-cover mix-blend-luminosity"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/85 to-primary" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  lg:pt-28 lg:pb-20">

          <h1 className="text-5xl md:text-7xl text-white leading-[1.05] tracking-tight mb-6">
            Digital <span className="text-secondary">Walansi</span>
          </h1>

          <div className="max-w-2xl mb-10">
            <p className="text-base md:text-lg text-white/70 leading-relaxed">
              A youth-led digital education and safety programme that equips young women, secondary-school
              students, and teachers in underserved communities to participate safely, critically, and
              productively in an <span className="text-secondary font-semibold">increasingly AI-driven</span>{" "}
              digital world.
            </p>
          </div>

          <div className="">
            <ProgramCTA
              program={program}
              labelOpen="Apply Now"
              labelClosed="Join Waitlist"
              className="bg-secondary text-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 shadow-lg"
            />
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
              <h2 className="text-4xl md:text-5xl text-white leading-tight mb-8">
                The gap between aspiration and <span className="text-secondary">safety</span>
              </h2>

              <div className="space-y-6 mb-8">
                <div className="border-l-2 border-secondary pl-6">
                  <p className="text-lg font-bold text-secondary mb-2">
                    Young people want to participate
                  </p>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Students and teachers in underserved communities want to learn, explore, and engage safely,
                    critically, and productively in an increasingly AI-driven digital world.
                  </p>
                </div>
                <div className="border-l-2 border-white/20 pl-6">
                  <p className="text-lg font-bold text-white mb-2">
                    Underserved communities lack the tools to do so safely
                  </p>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Limited digital skills, AI literacy, and media and information literacy leave students exposed
                    to Technology-Facilitated Gender-Based Violence (TFGBV) and other digital-safety risks, with
                    few trusted pathways to support.
                  </p>
                </div>
              </div>

              <p className="text-xs tracking-widest uppercase text-white/40 italic">
                — the gap Digital Walansi is designed to close
              </p>
            </div>

            <div className="space-y-6">
              <div className="p-8 bg-white/5 border border-white/10">
                <span className="material-symbols-outlined text-3xl text-secondary mb-4 block">format_quote</span>
                <p className="text-white/80 leading-relaxed text-base">
                  Technology-Facilitated Gender-Based Violence and other digital-safety harms are a real risk for
                  young people navigating an increasingly AI-driven digital world — particularly in underserved
                  communities with limited access to digital safety education and trusted reporting pathways.
                </p>
              </div>
              <p className="text-white/60 leading-relaxed text-sm">
                In these communities, the gap is compounded by limited AI literacy, few trusted adults equipped to
                guide safe technology use, and a lack of platforms designed specifically for young people to learn,
                report concerns, and access support.
              </p>
              <p className="text-white/80 leading-relaxed text-sm">
                Digital Walansi responds to both the aspiration and the risk. It does not frame young people
                primarily as vulnerable to digital harm. It equips them — and the teachers and Fellows around
                them — with the skills, the platform, and the trusted pathways to participate in the digital world
                safely, critically, and productively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fellows: training & deployment */}
      <section className="py-20 md:py-28 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <span className="text-xs tracking-[0.25em] uppercase text-secondary font-bold block mb-4">
                Training & Deployment
              </span>
              <h2 className="text-4xl md:text-5xl text-primary dark:text-white leading-tight mb-6">
                Thirty Fellows, carrying skills into <span className="text-secondary">schools</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                The programme trains 30 young women as Digital Walansi Fellows in digital skills and safety, AI
                literacy, Media and Information Literacy (MIL), and the prevention of and response to
                Technology-Facilitated Gender-Based Violence (TFGBV).
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Fellows are deployed to secondary schools across selected regions in Ghana, where they facilitate
                learning with students and teachers, and support Digital Walansi Clubs that provide sustained
                spaces for peer learning, digital leadership, and responsible technology use.
              </p>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/assets/images/programs/walansi/walansi_teach.webp"
                alt="A Digital Walansi Fellow facilitating a workshop with secondary-school students"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <ComponentsAccordion />
        </div>
      </section>

      {/* Walansi Kontonbile Platform */}
      <section className="py-20 md:py-28 bg-white dark:bg-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <span className="text-xs tracking-[0.25em] uppercase text-secondary font-bold block mb-4">
                The Technology Component
              </span>
              <h2 className="text-4xl md:text-5xl text-primary dark:text-white leading-tight mb-6">
                Walansi <span className="text-secondary">Kontonbile</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                At the centre of the programme&apos;s technology component is Walansi Kontonbile, a responsible AI
                learning and student-support platform developed with participating schools and Digital Walansi
                Clubs. <em>Kontonbile</em> means artificial intelligence in the the Waale local language.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Walansi Kontonbile brings together three functions that are usually treated separately in
                education technology: learning, digital safety, and access to trusted support.
              </p>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/assets/images/empower-wint.webp"
                alt="Digital Walansi Fellows and students exploring Walansi Kontonbile together on a phone"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-gray-200 dark:bg-white/10">
            {kontonbileFunctions.map((f) => (
              <div key={f.title} className="bg-white dark:bg-surface-dark p-8">

                <h3 className="text-lg text-primary dark:text-white mb-3">{f.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6">{f.body}</p>
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src={f.img}
                    alt={f.imgAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Co-development pull quote */}
      <section className="relative py-24 md:py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="/assets/images/collab-impact.png"
            alt="Students and schools co-developing the Walansi Kontonbile platform"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <p className="text-3xl md:text-4xl font-black text-white leading-snug">
              Walansi Kontonbile is{" "}
              <span className="text-secondary">co-developed</span> with the young people and schools expected to
              use it.
            </p>
            <p className="mt-4 text-xs tracking-widest uppercase text-white/50 font-bold">
              — Digital Walansi Programme Principle
            </p>
          </div>
        </div>
      </section>

      {/* Evidence & Research */}
      <section className="py-20 md:py-28 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs tracking-[0.25em] uppercase text-secondary font-bold block mb-4">
                Evidence & Research
              </span>
              <h2 className="text-4xl md:text-5xl text-primary dark:text-white leading-tight mb-6">
                Learning as we <span className="text-secondary">go</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Digital Walansi generates evidence on how young people are using AI and digital technologies in
                Ghanaian secondary schools — the opportunities and risks they encounter, the support they need,
                and how responsible AI can be integrated into education while protecting young people&apos;s
                rights, safety, and wellbeing.
              </p>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/assets/images/programs/walansi/research.webp"
                alt="Facilitators reviewing Digital Walansi programme findings together"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 md:py-28 bg-white dark:bg-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-xs tracking-[0.25em] uppercase text-secondary font-bold block mb-4">
              What Distinguishes This Programme
            </span>
            <h2 className="text-4xl md:text-5xl text-primary dark:text-white leading-tight">
              Principles that <span className="text-secondary">define the work</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 dark:bg-white/10">
            {principles.map((p) => (
              <div
                key={p.title}
                className="bg-white dark:bg-surface-dark p-8 hover:bg-background-light dark:hover:bg-white/5 transition-colors group"
              >
                <h3 className="text-xl text-primary dark:text-white mb-4 leading-tight group-hover:text-secondary transition-colors">
                  {p.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
            <div className="relative overflow-hidden bg-primary min-h-[280px]">
              <Image
                src="/assets/images/programs/walansi/principles.webp"
                alt="Young women leading digital safety and AI literacy sessions in their own communities"
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
              <h2 className="text-4xl md:text-5xl text-primary dark:text-white leading-tight">
                Cohort 1 <span className="text-secondary">Walansi Fellows</span>
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Thirty young women trained in digital skills and safety, AI literacy, MIL, and TFGBV prevention and
              response — now deployed to secondary schools to facilitate learning with students and teachers.
            </p>
          </div>

          {fellows.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-gray-200 dark:bg-white/10 mb-12">
              {fellows.map((f) => (
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
              <h2 className="text-4xl md:text-5xl text-white leading-tight">
                Partner with <span className="text-secondary">Digital Walansi</span>
              </h2>
            </div>
            <p className="text-white/60 leading-relaxed">
              Organisations that engage with the programme — whether as facilitators, development session
              contributors, community partners, or co-funders — gain access to a set of resources, relationships,
              and opportunities, and to the evidence the programme generates on how young people are using AI and
              digital technologies in Ghanaian secondary schools.
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
