import PageHero from "@/components/sections/PageHero";
import { fetchAPI } from "@/lib/api";

export default async function PartnersPage() {
  const partners = await fetchAPI("/api/v1/partners") || [];

  return (
    <main className="flex-grow">
      <PageHero
        title={
          <>
            <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-4 block">
              Our Supporters
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-display">
              Partners & Donors
            </h1>
          </>
        }
        description="We collaborate with visionary organizations that share our commitment to empowering women in tech across Africa."
        backgroundImage="/assets/images/bg/partners-hero.webp"
        className="bg-primary"
      />

      <section className="py-20 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {partners.map((partner, idx) => (
              <a
                key={idx}
                href={partner.website || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow aspect-[3/2]"
              >
                <img
                  src={partner.src || partner.logo}
                  alt={partner.name}
                  className="max-h-16 w-auto object-contain dark:brightness-0 dark:invert transition-all opacity-80 hover:opacity-100"
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
