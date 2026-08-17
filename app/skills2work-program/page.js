import Link from "next/link";
import { fetchAPI } from "@/lib/api";
import ProgramCTA from "@/components/ui/ProgramCTA";

export const metadata = {
  title: "Skills2Work",
  description:
    "Skills2Work is a 12-week hybrid freelance accelerator by Paahibu Space equipping young women with in-demand digital skills, professional capabilities and the confidence to turn those skills into freelance and digital income.",
};

const personas = [
  "An aspiring freelancer wondering where to begin",
  "A young woman looking for market-relevant digital skills",
  "A career changer exploring a new professional direction",
  "An entrepreneur looking to diversify your skills or income",
  "A returning professional preparing to re-enter the workforce",
  "A stay-at-home mother looking for more flexible ways to work",
  "A professional who wants to build an independent source of income",
  "Someone with existing knowledge or skills who wants to learn how to package and take them to market",
];

const pathway = [
  {
    phase: "Learn the Market",
    description: "Understand how the freelance economy works and where you can create value before committing to a direction.",
  },
  {
    phase: "Build a Skill",
    description: "Choose one specialised skills track and develop real capability through focused training and practical projects.",
  },
  {
    phase: "Position Yourself",
    description: "Build the professional assets needed to communicate your value clearly to clients, employers and collaborators.",
  },
  {
    phase: "Find Opportunities",
    description: "Learn how to identify prospective clients, pitch professionally and begin pursuing real freelance opportunities.",
  },
];

const foundations = [
  "Introduction to freelancing and remote work",
  "Adopting the freelancer's mindset",
  "Current trends and opportunities in the freelance market",
  "Understanding what clients are looking for",
  "Identifying your strengths and transferable skills",
  "Niche selection and positioning",
  "Packaging your skills into services",
  "Pricing your services",
  "Cold pitching and professional outreach",
  "Freelance professionalism and client communication",
];

const tracks = [
  {
    id: "va",
    number: "Track 1",
    name: "Virtual Assistance",
    tagline: "Help businesses and professionals work better.",
    description: "Learn how to provide remote administrative, operational and digital support to entrepreneurs, professionals and organisations.",
    leadIn: "You will develop practical capabilities across areas such as:",
    outcome: "By the end of the track, you should be able to define the Virtual Assistance services you can offer and demonstrate your capabilities through relevant work samples.",
    areas: [
      "Administrative and executive support",
      "Email and calendar management",
      "Online research",
      "Document and file management",
      "Meeting and travel coordination",
      "Customer and client support",
      "Digital collaboration and productivity tools",
      "AI tools for Virtual Assistants",
      "Professional communication",
      "Developing Virtual Assistant service packages",
    ],
  },
  {
    id: "video",
    number: "Track 2",
    name: "AI Video Editing & Content Production",
    tagline: "Turn ideas and raw footage into engaging digital content.",
    description: "Learn how to use contemporary video-editing and AI-enabled tools to create digital content for businesses, organisations, entrepreneurs and creators.",
    leadIn: "You will explore areas including:",
    outcome: "You will complete practical projects that can form part of your initial portfolio when approaching prospective clients.",
    areas: [
      "Video-editing fundamentals",
      "Short-form video production",
      "Editing for social media",
      "Storytelling and content structure",
      "Captions, audio and visual elements",
      "AI-assisted editing workflows",
      "Repurposing long-form content",
      "Responsible use of generative AI",
      "Working from client briefs",
      "Building a video-editing portfolio",
    ],
  },
  {
    id: "marketing",
    number: "Track 3",
    name: "Digital Marketing & Social Media",
    tagline: "Help businesses build visibility and connect with the people they want to reach.",
    description: "Learn practical approaches to supporting businesses, organisations and professionals with their digital presence.",
    leadIn: "You will develop capabilities across areas such as:",
    outcome: "The track will focus on developing services that can be offered to real businesses and organisations rather than simply learning how to use individual social platforms.",
    areas: [
      "Digital marketing fundamentals",
      "Understanding audiences and customer journeys",
      "Social media strategy",
      "Content planning",
      "Copywriting for digital platforms",
      "Content creation and repurposing",
      "Community engagement",
      "Basic social media analytics and reporting",
      "AI tools for marketing workflows",
      "Developing digital marketing service packages",
    ],
  },
];

const digitalProducts = [
  "Identifying problems people are willing to pay to solve",
  "Digital-product ideation and validation",
  "E-books and guides",
  "Templates and digital resources",
  "Educational and knowledge products",
  "Product design and packaging",
  "Using AI responsibly in product development",
  "Pricing and positioning",
  "Sales and distribution channels",
  "Marketing digital products",
];

const brandAreas = [
  {
    title: "Personal Branding",
    body: "Define what you want to be known for and learn how to communicate your expertise clearly. You will work on your professional identity, value proposition, niche positioning, online presence and professional visibility.",
  },
  {
    title: "CV & Professional Profile",
    body: "Develop a strong professional CV and learn how to tailor your experience to different opportunities. You will also receive guidance on professional bios, LinkedIn, freelance profiles, cover letters and communicating transferable skills when changing careers or returning to work.",
  },
  {
    title: "Portfolio Development",
    body: "Every participant works towards developing a portfolio relevant to her chosen track. If you have never worked with a client before, practical projects and simulated client assignments will help you develop work samples that demonstrate what you can do.",
  },
  {
    title: "Service Packaging & Pricing",
    body: "Learn how to move from saying “I know this skill” to clearly explaining what you can do for a client. Participants learn how to define services, develop packages, think about pricing, establish scope and communicate their rates professionally.",
  },
  {
    title: "Client Communication & Negotiation",
    body: "Learn how to manage the professional relationship from the first enquiry through project delivery. This includes understanding client briefs, asking the right questions, setting expectations, presenting work, managing feedback and revisions, negotiating professionally and building strong client relationships.",
  },
  {
    title: "Cold Pitching & Client Acquisition",
    body: "Participants learn practical approaches to identifying potential clients, researching prospects, communicating value and making professional pitches. The programme encourages participants to begin practising outreach rather than waiting until training has ended to start looking for opportunities.",
  },
];

const trainingSupport = [
  {
    title: "Live Classes",
    body: "Learn directly from facilitators and practitioners through interactive live sessions where you can ask questions, work through practical examples and receive guidance.",
  },
  {
    title: "Hands-On Projects",
    body: "Apply what you learn through assignments and projects that simulate real freelance work and contribute to your portfolio.",
  },
  {
    title: "Practitioner Sessions",
    body: "Hear directly from freelancers, entrepreneurs and digital professionals about finding clients, building careers, navigating setbacks and adapting to changing markets.",
  },
  {
    title: "Personal Branding Support",
    body: "Receive guidance to define your professional positioning and strengthen how you present yourself online and offline.",
  },
  {
    title: "CV & Profile Reviews",
    body: "Develop and improve the professional materials you use to pursue freelance, remote-work and other career opportunities.",
  },
  {
    title: "Portfolio Support",
    body: "Receive guidance as you develop work samples and a portfolio relevant to your chosen skills track.",
  },
  {
    title: "Mentorship & Career Guidance",
    body: "Access professionals who can provide practical guidance on positioning, professional development and navigating the transition into independent work.",
  },
  {
    title: "Client Acquisition Support",
    body: "Get support to identify prospective clients, develop pitches and begin pursuing real opportunities.",
  },
  {
    title: "Peer Learning & Community",
    body: "Learn alongside other women building digital careers, exchange ideas, practise together and develop relationships that can continue beyond the programme.",
  },
  {
    title: "Opportunity Sharing",
    body: "Access relevant freelance, remote-work, professional-development and learning opportunities shared through the Skills2Work community.",
  },
];

const leaveWith = [
  { item: "Practical capability in your chosen digital skills track", large: true },
  { item: "A clearly defined freelance niche" },
  { item: "A professional CV" },
  { item: "A stronger LinkedIn and professional profile" },
  { item: "A defined personal brand and value proposition", large: true },
  { item: "A portfolio or relevant work samples" },
  { item: "Clearly packaged freelance services" },
  { item: "An understanding of pricing and professional negotiation" },
  { item: "Experience pitching to prospective clients" },
  { item: "Greater confidence communicating with clients" },
  { item: "A practical client-acquisition plan" },
  { item: "An understanding of how to create and sell digital products" },
  { item: "A clearer pathway towards earning from your skills" },
  { item: "A community of women building digital careers alongside you", large: true },
];

const leaveWithAccents = ["bg-primary", "bg-secondary"];

const advancedTopics = [
  "Goal setting and business processes",
  "Profile and portfolio optimisation",
  "Strategic outreach",
  "Mastering Upwork",
  "Client acquisition through social media",
  "Productivity systems",
  "Managing independent work",
  "Mental wellbeing and sustainable freelance practices",
];

export default async function Skills2WorkProgram() {
  const programs = (await fetchAPI("/api/v1/programs")) || [];
  const program = programs.find((p) => p.name?.includes("Skills2Work")) || {
    id: 103,
    slug: "skills2work-program",
    name: "Skills2Work",
    is_application_open: false,
    application_status: "Coming Soon",
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-white dark:bg-background-dark border-b border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-14 md:pt-20 md:pb-16">
          <Link
            href="/our-work"
            className="inline-flex items-center gap-1.5 text-base text-secondary mb-10 hover:gap-2.5 transition-all"
          >
            <span className="material-symbols-outlined text-base">arrow_back</span>
            Our Work
          </Link>

          <div className="grid lg:grid-cols-[1fr_320px] gap-12 lg:gap-16 items-start">
            <div>

              <h1 className="font-display text-5xl md:text-8xl font-bold leading-[0.95] tracking-tight text-primary dark:text-white mb-7">
                Skills<span className="text-secondary">2</span>Work
              </h1>
              <p className="text-lg leading-[1.65] text-gray-700 dark:text-gray-200 max-w-lg mb-4">
                From Digital Skills to Digital Livelihoods
              </p>
              <p className="text-base leading-[1.75] text-gray-500 dark:text-gray-400 max-w-lg mb-4">
                Skills2Work is a 12-week hybrid freelance accelerator by Paahibu Space designed to equip
                young women with practical, in-demand digital skills and the professional capabilities,
                confidence and support needed to turn those skills into freelance and digital income
                opportunities. Because learning a digital skill is only the beginning.
              </p>
              <p className="text-base leading-[1.75] text-gray-500 dark:text-gray-400 max-w-lg mb-4">
                Skills2Work helps participants understand the freelance market, identify where their
                strengths can create value, specialise in a digital skills pathway, build their
                professional presence and portfolio, and learn how to find, approach and work with
                clients.
              </p>
              <p className="text-base leading-[1.75] text-gray-500 dark:text-gray-400 max-w-lg">
                Whether you are starting your career, changing direction, returning to work, growing a
                business or looking for greater flexibility in how you earn, Skills2Work provides a
                structured pathway for building the skills and confidence to participate in the digital
                economy.
              </p>
            </div>

            <div className="bg-primary rounded-lg px-8 py-9 text-white">
              <p className="text-xs font-bold tracking-[0.14em] uppercase text-white/50 mb-6">
                Cohort One
              </p>
              {[
                { label: "Programme Start", value: "February 2027" },
                { label: "Duration", value: "12 Weeks" },
                { label: "Format", value: "Hybrid" },
                { label: "Cohort", value: "Skills2Work Cohort One" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="border-t border-white/10 py-3.5 flex justify-between items-baseline"
                >
                  <span className="text-base text-white/55">{item.label}</span>
                  <span className="text-lg tracking-tight">{item.value}</span>
                </div>
              ))}
              <div className="border-t border-white/10 pt-6 mt-2">
                <p className="text-base text-white/55 mb-3">
                  Partial scholarships available to selected applicants.
                </p>
                <ProgramCTA
                  program={program}
                  labelOpen="Apply Now"
                  labelClosed="Apply for Skills2Work"
                  className="w-full !bg-secondary text-white font-bold text-base hover:opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Pathway */}
      <section className="bg-white dark:bg-surface-dark border-b border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <p className="text-xs font-bold tracking-[0.16em] uppercase text-gray-500 dark:text-gray-400 mb-4">
            How Skills2Work Works
          </p>
          <p className="text-base leading-[1.65] text-gray-600 dark:text-gray-300 max-w-2xl mb-12">
            Skills2Work is built around a simple pathway: Learn the Market. Build a Skill. Position
            Yourself. Find Opportunities.
          </p>
          <div className="relative">
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-gray-200 dark:bg-white/10" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-l border-gray-200 dark:border-white/10">
              {pathway.map((step, i) => (
                <div
                  key={step.phase}
                  className="relative border-r border-b lg:border-b-0 border-gray-200 dark:border-white/10 p-8 bg-background-light dark:bg-white/5"
                >
                  <span className="flex items-center justify-center leading-none w-9 h-9 rounded-full bg-primary text-white text-sm font-bold mb-6">
                    {i + 1}
                  </span>
                  <h3 className="text-xl font-bold leading-[1.2] tracking-tight text-primary dark:text-white mb-3">
                    {step.phase}
                  </h3>
                  <p className="text-base leading-[1.65] text-gray-500 dark:text-gray-400">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 max-w-2xl space-y-3">
            <p className="text-base leading-[1.6] text-gray-500 dark:text-gray-400">
              All participants begin together with the foundations of freelancing and independent work.
              You will then choose one specialised digital skills track based on your interests, strengths
              and professional goals.
            </p>
            <p className="text-base leading-[1.6] text-gray-500 dark:text-gray-400">
              Alongside your chosen track, you will develop the professional skills and assets needed to
              take your capabilities to market — from personal branding and CV development to portfolios,
              pricing, pitching and client communication.
            </p>
            <p className="text-base leading-[1.6] text-gray-500 dark:text-gray-400">
              The programme combines live classes, practical projects, practitioner sessions, peer
              learning, career support and hands-on application across 12 weeks.
            </p>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="bg-background-light dark:bg-background-dark border-b border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 grid lg:grid-cols-[280px_1fr] gap-12 lg:gap-16 items-start">
          <div>
            <p className="text-xs font-bold tracking-[0.16em] uppercase text-secondary mb-5">
              Who Is Skills2Work For?
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-[1.15] tracking-tight text-primary dark:text-white">
              Skills2Work is designed for women who want to build practical digital capabilities and
              explore new pathways to work and income.
            </h2>
            <p className="text-base text-gray-500 dark:text-gray-400 mt-5 leading-[1.65]">
              You do not need previous freelancing experience to apply.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-base font-bold text-gray-500 dark:text-gray-400">You may be:</p>
            <div className="flex flex-wrap gap-3 content-start">
              {personas.map((persona, i) => (
                <div
                  key={persona}
                  className={`text-base leading-[1.5] px-5 py-3.5 rounded-full ${
                    i % 3 === 0
                      ? "bg-secondary text-white"
                      : i % 3 === 1
                      ? "bg-primary text-white"
                      : "bg-white dark:bg-surface-dark text-gray-700 dark:text-gray-200 border border-secondary/20"
                  }`}
                >
                  {persona}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Foundations */}
      <section className="bg-white dark:bg-surface-dark border-b border-gray-200 dark:border-white/10">
        <details className="max-w-7xl mx-auto group">
          <summary className="cursor-pointer list-none flex items-center justify-between px-4 sm:px-6 lg:px-8 py-10">
            <div>
              <p className="text-xs font-bold tracking-[0.16em] uppercase text-gray-500 dark:text-gray-400 mb-3">
                Start With the Foundations
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold leading-[1.1] tracking-tight text-primary dark:text-white">
                Freelancing Foundations
              </h2>
            </div>
            <span className="material-symbols-outlined flex-shrink-0 flex items-center justify-center leading-none w-10 h-10 rounded-full bg-background-light dark:bg-white/10 text-gray-500 dark:text-gray-300 transition-transform group-open:rotate-45">
              add
            </span>
          </summary>
          <div className="px-4 sm:px-6 lg:px-8 pb-12 border-t border-gray-100 dark:border-white/5">
            <p className="text-base leading-[1.75] text-gray-600 dark:text-gray-300 max-w-2xl mt-8 mb-9">
              Before choosing a specialisation, participants develop an understanding of how the freelance
              economy works and what it takes to build an independent professional career.
            </p>
            <p className="text-base font-bold text-gray-500 dark:text-gray-400 mb-4">You will explore:</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-9">
              {foundations.map((topic) => (
                <div
                  key={topic}
                  className="px-5 py-4 bg-background-light dark:bg-white/5 border border-gray-200 dark:border-white/10 text-base text-gray-600 dark:text-gray-300 leading-snug"
                >
                  {topic}
                </div>
              ))}
            </div>
            <p className="text-base leading-[1.6] text-gray-500 dark:text-gray-400 max-w-2xl">
              The goal is to help you make informed decisions about where you want to position yourself
              before developing deeper expertise.
            </p>
          </div>
        </details>
      </section>

      {/* Three Tracks */}
      <section className="bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20">
          <p className="text-xs font-bold tracking-[0.16em] uppercase text-gray-500 dark:text-gray-400 mb-4">
            Choose Your Skills Track
          </p>
          <p className="text-base leading-[1.65] text-gray-600 dark:text-gray-300 max-w-2xl mb-12">
            Rather than learning several digital skills at surface level, Skills2Work gives participants
            the opportunity to specialise. You will choose one skills track and develop practical
            capabilities through focused training, assignments and portfolio projects.
          </p>
        </div>

        <div className="border-t border-gray-200 dark:border-white/10">
          {tracks.map((track) => (
            <details
              key={track.id}
              className="group border-b border-gray-200 dark:border-white/10"
            >
              <summary className="cursor-pointer list-none">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-9 flex justify-between items-center group-open:bg-background-light dark:group-open:bg-white/5 transition-colors">
                  <div>
                    <p className="text-xs font-bold tracking-[0.14em] uppercase mb-2 text-secondary">
                      {track.number}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-bold leading-[1.15] tracking-tight text-primary dark:text-white">
                      {track.name}
                    </h3>
                    <p className="text-base text-gray-500 dark:text-gray-400 mt-1.5">{track.tagline}</p>
                  </div>
                  <span className="material-symbols-outlined flex-shrink-0 flex items-center justify-center leading-none w-10 h-10 rounded-full bg-background-light dark:bg-white/10 text-primary dark:text-white transition-transform group-open:rotate-45">
                    add
                  </span>
                </div>
              </summary>
              <div className="bg-background-light dark:bg-white/5 border-t border-gray-200 dark:border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid lg:grid-cols-2 gap-12 lg:gap-16">
                  <div>
                    <p className="text-base leading-[1.75] text-gray-600 dark:text-gray-300 mb-6">
                      {track.description}
                    </p>
                    <p className="text-base font-bold text-gray-500 dark:text-gray-400 mb-3">{track.leadIn}</p>
                    <div className="flex flex-col">
                      {track.areas.map((area, j) => (
                        <div
                          key={area}
                          className={`py-3 text-base text-gray-600 dark:text-gray-300 ${
                            j < track.areas.length - 1 ? "border-b border-gray-900/5 dark:border-white/5" : ""
                          }`}
                        >
                          {area}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/10 rounded-md p-7 self-start">
                    <p className="text-xs font-bold tracking-[0.12em] uppercase mb-4 text-secondary">
                      Outcome
                    </p>
                    <p className="text-base leading-[1.7] text-gray-600 dark:text-gray-300">
                      {track.outcome}
                    </p>
                  </div>
                </div>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Digital Products module */}
      <section className="bg-primary border-t border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-xs font-bold tracking-[0.16em] uppercase text-white/55 mb-5">
              All Participants — Additional Module
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight text-white mb-6">
              Create &amp; Sell Digital Products
            </h2>
            <p className="text-base leading-[1.75] text-white/80 mb-2">
              Freelance services are not the only way to earn from what you know.
            </p>
            <p className="text-base leading-[1.75] text-white/80">
              All Skills2Work participants will also be introduced to digital product creation as an
              additional pathway for turning knowledge, skills and creative ideas into income. This module
              gives participants another way to think about creating value and diversifying their income
              beyond client-based freelance work.
            </p>
          </div>
          <div>
            <p className="text-xs font-bold tracking-[0.14em] uppercase text-white/55 mb-4">
              You will explore:
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {digitalProducts.map((topic) => (
                <div
                  key={topic}
                  className="bg-white/10 border border-white/15 rounded-md p-4 text-base text-white/85 leading-snug"
                >
                  {topic}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Professional Brand */}
      <section className="bg-white dark:bg-surface-dark border-b border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 grid lg:grid-cols-[320px_1fr] gap-12 lg:gap-20 items-start">
          <div>
            <p className="text-xs font-bold tracking-[0.16em] uppercase text-gray-500 dark:text-gray-400 mb-5">
              Professional Development
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-[1.1] tracking-tight text-primary dark:text-white mb-5">
              Build Your Professional Brand
            </h2>
            <p className="text-base leading-[1.7] text-gray-500 dark:text-gray-400 mb-3">
              Being good at what you do matters. Being able to communicate that value matters too.
            </p>
            <p className="text-base leading-[1.7] text-gray-500 dark:text-gray-400">
              Skills2Work helps participants build the professional assets needed to present themselves
              confidently to clients, employers and collaborators.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 border border-gray-200 dark:border-white/10">
            {brandAreas.map((area, i) => (
              <div
                key={area.title}
                className={`p-7 ${i % 3 < 2 ? "sm:border-r border-gray-200 dark:border-white/10" : ""} ${
                  i < 3 ? "border-b border-gray-200 dark:border-white/10" : ""
                }`}
              >
                <h3 className="text-lg font-bold text-primary dark:text-white mb-2.5 leading-tight">
                  {area.title}
                </h3>
                <p className="text-base leading-[1.65] text-gray-500 dark:text-gray-400">{area.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training & Support */}
      <section className="bg-white dark:bg-surface-dark border-b border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <p className="text-xs font-bold tracking-[0.16em] uppercase text-gray-500 dark:text-gray-400 mb-4">
            Training & Support
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold leading-[1.1] tracking-tight text-primary dark:text-white mb-5">
            Training &amp; Support
          </h2>
          <p className="text-base leading-[1.65] text-gray-600 dark:text-gray-300 max-w-2xl mb-12">
            Skills2Work combines skills training with practical support throughout the 12-week
            accelerator.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 border border-gray-200 dark:border-white/10">
            {trainingSupport.map((item, i) => (
              <div
                key={item.title}
                className={`p-6 ${i % 5 < 4 ? "lg:border-r border-gray-200 dark:border-white/10" : ""} ${
                  i < 5 ? "border-b border-gray-200 dark:border-white/10" : ""
                }`}
              >
                <h3 className="text-base font-bold text-primary dark:text-white mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Leave With */}
      <section className="bg-background-light dark:bg-background-dark border-b border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <p className="text-xs font-bold tracking-[0.16em] uppercase text-gray-500 dark:text-gray-400 mb-4">
            Programme Outcomes
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold leading-[1.1] tracking-tight text-primary dark:text-white mb-5">
            What You Should Leave With
          </h2>
          <p className="text-base leading-[1.65] text-gray-600 dark:text-gray-300 max-w-2xl mb-4">
            Skills2Work is designed so that completing the programme means more than receiving a
            certificate.
          </p>
          <p className="text-base font-bold text-gray-500 dark:text-gray-400 mb-8">
            By the end of the 12 weeks, you should have:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {leaveWith.map((item, i) => {
              const accent = leaveWithAccents[i % 2];
              return (
                <div
                  key={item.item}
                  className={
                    item.large
                      ? `sm:col-span-2 rounded px-7 py-8 text-white ${accent}`
                      : "rounded px-5 py-5 bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/10"
                  }
                >
                  <p
                    className={
                      item.large
                        ? "font-display text-xl font-bold leading-snug tracking-tight"
                        : "text-base leading-snug text-gray-700 dark:text-gray-200"
                    }
                  >
                    {item.item}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Beyond 12 Weeks */}
      <section className="bg-white dark:bg-surface-dark border-b border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 grid md:grid-cols-2 gap-8">
          <div className="bg-background-light dark:bg-white/5 rounded-md p-10">
            <p className="text-xs font-bold tracking-[0.16em] uppercase text-gray-500 dark:text-gray-400 mb-5">
              After the Programme
            </p>
            <h3 className="text-2xl md:text-3xl font-bold leading-[1.15] tracking-tight text-primary dark:text-white mb-4">
              Skills2Work Community
            </h3>
            <p className="text-base leading-[1.7] text-gray-600 dark:text-gray-300 mb-4">
              Completing the accelerator is not the end of the Skills2Work journey. Graduates become part
              of the Skills2Work Community, where they can continue accessing peer support, opportunities,
              professional resources, referrals and learning.
            </p>
            <p className="text-base leading-[1.7] text-gray-500 dark:text-gray-400">
              As the community grows, alumni who establish themselves professionally will also have
              opportunities to return as mentors, speakers and peer facilitators for future cohorts.
            </p>
          </div>
          <div className="bg-primary rounded-md p-10">
            <p className="text-xs font-bold tracking-[0.16em] uppercase text-white/50 mb-5">
              Next Stage
            </p>
            <h3 className="text-2xl md:text-3xl font-bold leading-[1.15] tracking-tight text-white mb-2">
              Skills2Work Advanced
            </h3>
            <p className="text-base font-semibold text-secondary mb-4">
              Ready to Take Your Freelance Career Further?
            </p>
            <p className="text-base leading-[1.7] text-white/75 mb-2">
              Skills2Work Advanced is the next-stage pathway for participants who want more intensive
              support to build and manage their freelance practice.
            </p>
            <p className="text-base leading-[1.7] text-white/75 mb-6">
              The advanced programme goes deeper into:
            </p>
            <div className="flex flex-col gap-2 mb-6">
              {advancedTopics.map((topic) => (
                <div key={topic} className="text-base text-white/70">
                  {topic}
                </div>
              ))}
            </div>
            <a
              href="mailto:programs@paahibuspace.org"
              className="inline-flex items-center gap-2 text-base font-bold text-secondary hover:gap-3 transition-all"
            >
              Learn More About Skills2Work Advanced
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA — Join Cohort One */}
      <section className="bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <p className="text-xs font-bold tracking-[0.16em] uppercase text-secondary mb-6">
            Join Cohort One
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight text-primary dark:text-white mb-6">
            Build a Skill. Build Your
            <br />
            Professional Presence. Build Your Path to Work.
          </h2>
          <p className="text-base leading-[1.65] text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-4">
            Whether you are beginning your professional journey, changing careers, returning to work,
            growing a business or looking for a more flexible way to earn, Skills2Work is designed to help
            you move from learning a skill to understanding how to take that skill to market.
          </p>
          <p className="text-base leading-[1.65] text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-10">
            Partial scholarships are available to selected applicants who require financial support to
            participate.
          </p>
          <ProgramCTA
            program={program}
            labelOpen="Apply Now"
            labelClosed="Apply for Skills2Work"
            className="!bg-secondary text-white font-bold text-base px-9 py-4 hover:opacity-90"
          />
        </div>
      </section>
    </>
  );
}
