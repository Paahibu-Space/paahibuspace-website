import PageHero from "@/components/sections/PageHero";

export const metadata = {
  title: "Privacy Policy",
  description: "How Paahibu Space collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" />
      <section className="py-20 px-6 md:px-12 bg-white dark:bg-background-dark">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            For questions, please{" "}
            <a href="/contact" className="text-primary dark:text-secondary font-semibold hover:underline">
              contact us
            </a>.
          </p>
        </div>
      </section>
    </>
  );
}
