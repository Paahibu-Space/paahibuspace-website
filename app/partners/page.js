import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import { fetchAPI } from "@/lib/api";

export const metadata = {
  title: "Partners",
  description:
    "Partnership is central to how Paahibu Space works. Meet the funding, programme, technical and ecosystem partners who work alongside us.",
};

export default async function PartnersPage() {
  const categories = (await fetchAPI("/api/v1/partners/categories")) || [];

  return (
    <main className="flex-grow bg-background-light dark:bg-background-dark">
      <PageHero
        title={
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-display">
            Building Change Through Partnership
          </h1>
        }
        description="Partnership is central to how Paahibu Space works. We collaborate with organisations that invest in locally led ideas, contribute expertise and resources, strengthen institutional capacity, connect communities to opportunities and work alongside us to increase the reach and depth of our work."
        backgroundImage="/assets/images/leadership.png"
      />

      {/* Category sections */}
      {categories.map((category, idx) => (
        <section
          key={category.id ?? category.slug}
          className="bg-white dark:bg-surface-dark border-b border-gray-200 dark:border-white/10"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
            <div className="max-w-3xl mb-10">
              <h2 className="text-2xl md:text-3xl font-extrabold text-primary dark:text-white tracking-tight">
                {category.name}
              </h2>
              {category.description && (
                <p className="mt-4 text-base md:text-lg leading-relaxed text-neutral-gray dark:text-gray-300">
                  {category.description}
                </p>
              )}
            </div>

            {category.partners && category.partners.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {category.partners.map((partner) => {
                  const Wrapper = partner.website_url ? "a" : "div";
                  return (
                    <Wrapper
                      key={partner.id}
                      {...(partner.website_url
                        ? {
                            href: partner.website_url,
                            target: "_blank",
                            rel: "noopener noreferrer",
                          }
                        : {})}
                      className="flex flex-col items-center gap-3 p-6"
                    >
                      <div className="relative w-full h-16">
                        {partner.logo_url && (
                          <Image
                            src={partner.logo_url}
                            alt={partner.name}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 40vw, 20vw"
                          />
                        )}
                      </div>
                      <span className="text-xs font-medium text-center text-neutral-dark dark:text-gray-300">
                        {partner.name}
                      </span>
                    </Wrapper>
                  );
                })}
              </div>
            ) : (
              <div className="border border-dashed border-gray-300 dark:border-white/20 px-6 py-10 text-center">
                <p className="text-sm text-neutral-gray dark:text-gray-400">
                  Partner logos coming soon.
                </p>
              </div>
            )}
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-primary">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20 text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
            Partner With Paahibu Space
          </h2>
          <p className="mt-6 text-base md:text-lg leading-relaxed text-gray-200">
            We welcome partnerships across programme design and implementation,
            research and evidence, technology development, education,
            entrepreneurship, policy advocacy, community engagement,
            institutional development and funding.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-secondary text-white text-sm font-bold px-8 h-12 hover:opacity-90 transition-opacity"
            >
              Partner With Us
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
