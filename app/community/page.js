import Image from "next/image";
import PageHero from "@/components/sections/PageHero";

export const metadata = {
  title: "Community",
  description: "Communities that continue beyond programmes — the GROW Network, Paahibu Space Community, and Digital Walansi Network.",
};

const networks = [
  {
    id: "grow-network",
    label: "For Women Entrepreneurs",
    title: "GROW Network",
    image: "/assets/images/impact-stories.png",
    alt: "Women entrepreneurs from the GROW Network collaborating",
    paragraphs: [
      "The GROW Network brings together women entrepreneurs connected through Paahibu Space's entrepreneurship and business-development work.",
      "Members continue learning from one another, accessing relevant opportunities and resources, building relationships and strengthening their enterprises.",
    ],
    cta: "Explore the GROW Network",
    href: "/grow-program",
  },
  {
    id: "paahibu-space-community",
    label: "For Everyone in Our Ecosystem",
    title: "Paahibu Space Community",
    image: "/assets/images/join-movement.png",
    alt: "Women, girls and young people connected across Paahibu Space programmes",
    paragraphs: [
      "The Paahibu Space Community connects women, girls and young people across our programmes and wider ecosystem.",
      "It creates opportunities for continued learning, collaboration, volunteering, leadership and access to opportunities beyond individual projects.",
    ],
    
    cta: "Join the Paahibu Space Community",
    href: "https://whatsapp.com/channel/0029VaJvEH6HwXbKRSOk783K",
  },
  {
    id: "digital-walansi-network",
    label: "For Digital Walansi Fellows",
    title: "Digital Walansi Network",
    image: "/assets/images/programs/walansi/walansi_teamwork.webp",
    alt: "Digital Walansi Fellows collaborating in their community network",
    paragraphs: [
      "The Digital Walansi Network connects Digital Walansi Fellows and supports continued learning, collaboration, advocacy and digital leadership beyond the programme.",
      "It creates a pathway for Fellows to continue contributing to safer, more informed and inclusive digital communities.",
    ],
    cta: "Explore the Digital Walansi Network",
    href: "/digital-walansi-program",
  },
];

export default function CommunityPage() {
  return (
    <>
      <PageHero
        title={
          <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-[-0.033em]">
            Communities That Continue <br className="hidden md:block" />
            Beyond Programmes
          </h1>
        }
        description="A programme may have an end date. The relationships, knowledge and networks built through it can continue. We build and support communities where people can continue learning, exchange opportunities, collaborate, exercise leadership and contribute beyond individual projects."
        backgroundImage="/assets/images/bg/team-with-grow.webp"
      />

      {/* Networks — alternating showcase rows connected by a network line */}
      <section className="relative py-4 md:py-8 bg-background-light dark:bg-background-dark/50 transition-colors overflow-hidden">
        {/* Connector line running through the network cards, echoing the "network" theme */}
        <div
          className="hidden lg:block absolute left-1/2 top-24 bottom-24 w-px bg-gradient-to-b from-transparent via-primary/20 dark:via-white/10 to-transparent -translate-x-1/2"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          {networks.map((network, index) => (
            <div
              key={network.id}
              className={`relative flex flex-col md:flex-row gap-10 lg:gap-16 items-center py-16 md:py-20 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Node marker on the connector line */}
              <div
                className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-secondary z-10"
                aria-hidden="true"
              />

              <div className="w-full md:w-1/2">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    alt={network.alt}
                    src={network.image}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              <div className="w-full md:w-1/2 flex flex-col gap-5">
                <div>
                  <span className="text-secondary font-bold tracking-wider text-sm uppercase">
                    {network.label}
                  </span>
                  <h2 className="text-neutral-dark dark:text-white text-3xl md:text-4xl font-black leading-tight mt-2">
                    {network.title}
                  </h2>
                </div>
                <div className="space-y-4">
                  {network.paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <a
                  href={network.href}
                  className="inline-flex items-center gap-2 text-primary dark:text-secondary font-bold hover:gap-3 transition-all w-fit"
                >
                  {network.cta} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
