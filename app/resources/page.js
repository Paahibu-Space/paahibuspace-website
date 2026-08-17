import PageHero from "@/components/sections/PageHero";

export const metadata = {
  title: "Resources",
  description: "Guides, toolkits, and resources from Paahibu Space.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        title="Resources"
        description="Guides, toolkits, and resources for our community."
      />
      <section className="py-20 px-6 md:px-12 bg-white dark:bg-background-dark">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            Our resource library is coming soon. In the meantime, check out our{" "}
            <a href="/research-insights" className="text-primary dark:text-secondary font-semibold hover:underline">
              Research &amp; Insights
            </a>{" "}
            articles.
          </p>
        </div>
      </section>
    </>
  );
}
