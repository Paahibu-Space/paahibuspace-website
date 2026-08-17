import PageHero from "@/components/sections/PageHero";

export const metadata = {
  title: "Safeguarding",
  description: "Paahibu Space's commitment to safeguarding the women, girls, and communities we work with.",
};

export default function SafeguardingPage() {
  return (
    <>
      <PageHero
        title="Safeguarding"
        description="Our commitment to protecting the women, girls, and communities we work with."
      />
      <section className="py-20 px-6 md:px-12 bg-white dark:bg-background-dark">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            Our full safeguarding policy is coming soon. For questions or concerns, please{" "}
            <a href="/contact" className="text-primary dark:text-secondary font-semibold hover:underline">
              contact us
            </a>.
          </p>
        </div>
      </section>
    </>
  );
}
