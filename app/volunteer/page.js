import PageHero from "@/components/sections/PageHero";

export const metadata = {
  title: "Volunteer",
  description: "Contribute professional expertise, mentorship, training, research, technology, or other specialist support to Paahibu Space.",
};

export default function VolunteerPage() {
  return (
    <>
      <PageHero
        title="Volunteer With Us"
        description="Contribute professional expertise, mentorship, training, research, technology, professional referrals or other specialist support."
      />
      <section className="py-20 px-6 md:px-12 bg-white dark:bg-background-dark">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            Our volunteer application process is coming soon. In the meantime, please{" "}
            <a href="/contact" className="text-primary dark:text-secondary font-semibold hover:underline">
              contact us
            </a>{" "}
            to share how you would like to contribute.
          </p>
        </div>
      </section>
    </>
  );
}
