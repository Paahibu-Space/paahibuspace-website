import PageHero from "@/components/sections/PageHero";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Paahibu Space.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        description="We'd love to hear from you."
      />
      <section className="py-20 px-6 md:px-12 bg-white dark:bg-background-dark">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="flex flex-col items-center gap-2">
            <span className="material-symbols-outlined text-secondary text-3xl">location_on</span>
            <p className="text-gray-600 dark:text-gray-400">Wa-UWR, Ghana</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="material-symbols-outlined text-secondary text-3xl">call</span>
            <a href="tel:+233247254326" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-secondary">
              +233 24 725 4326
            </a>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="material-symbols-outlined text-secondary text-3xl">mail</span>
            <a href="mailto:info@paahibuspace.org" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-secondary">
              info@paahibuspace.org
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
