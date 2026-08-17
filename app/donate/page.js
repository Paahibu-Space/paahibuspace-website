import PageHero from "@/components/sections/PageHero";

export const metadata = {
  title: "Donate",
  description: "Support Paahibu Space's programmes and solutions working with women, girls and hard-to-reach and at-risk youth.",
};

export default function DonatePage() {
  return (
    <>
      <PageHero
        title="Donate"
        description="Support programmes and solutions working with women, girls and hard-to-reach and at-risk youth."
      />
      <section className="py-20 px-6 md:px-12 bg-white dark:bg-background-dark">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            Please{" "}
            <a href="/contact" className="text-primary dark:text-secondary font-semibold hover:underline">
              contact us
            </a>{" "}
            to discuss how you can support our work.
          </p>
        </div>
      </section>
    </>
  );
}
