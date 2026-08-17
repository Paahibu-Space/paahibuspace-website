import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Get Involved",
  description: "Whether through funding, institutional partnership, professional expertise, volunteering or collaboration, your contribution can help expand access and strengthen solutions alongside the communities we work with.",
};

const paths = [
  {
    id: "donate",
    title: "Donate",
    description: "Support programmes and solutions working with women, girls and hard-to-reach and at-risk youth.",
    cta: "Donate",
    href: "/donate",
  },
  {
    id: "partner",
    title: "Partner",
    description: "Work with us across programmes, technology, research and evidence, entrepreneurship, policy advocacy or community engagement.",
    cta: "Partner With Us",
    href: "/partners",
  },
  {
    id: "volunteer",
    title: "Volunteer",
    description: "Contribute professional expertise, mentorship, training, research, technology, professional referrals or other specialist support.",
    cta: "Volunteer With Us",
    href: "/volunteer",
  },
  {
    id: "contact",
    title: "Contact Us",
    description: "Have an opportunity, question or idea you would like to discuss?",
    cta: "Contact Paahibu Space",
    href: "/contact",
  },
];

export default function InvolvePage() {
  return (
    <>
      <section className="relative w-full min-h-[500px] flex items-center bg-primary overflow-hidden py-20 lg:py-28 px-4 md:px-0">
        <div className="absolute inset-0">
          <Image
            alt="Community members coming together in support of Paahibu Space's work"
            src="/assets/images/join-movement.png"
            fill
            priority
            className="object-cover opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/70" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-white text-4xl lg:text-6xl leading-tight tracking-tight">
              Be Part of What We Are Building
            </h1>
            <p className="text-blue-100 text-lg lg:text-xl leading-relaxed">
              There are different ways to contribute to Paahibu Space&apos;s work. Whether through
              funding, institutional partnership, professional expertise, volunteering or
              collaboration, your contribution can help expand access and strengthen solutions
              alongside the communities we work with.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white dark:bg-background-dark py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 divide-y divide-gray-200 dark:divide-gray-700 sm:divide-y-0 border-t border-b border-gray-200 dark:border-gray-700">
            {paths.map((path, index) => (
              <div
                key={path.id}
                className={`flex flex-col gap-4 p-8 lg:p-10 sm:border-gray-200 dark:sm:border-gray-700 ${
                  index % 2 === 0 ? "sm:border-r" : ""
                } ${index < 2 ? "sm:border-b" : ""}`}
              >
  
                <h2 className="text-2xl text-neutral-dark dark:text-white">
                  {path.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed flex-1">
                  {path.description}
                </p>
                <Link
                  href={path.href}
                  className="inline-flex items-center gap-2 text-primary dark:text-secondary font-bold hover:gap-3 transition-all w-fit"
                >
                  {path.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
