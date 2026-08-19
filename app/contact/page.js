import Link from "next/link";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Paahibu Space — for programmes, partnerships, donations, or general enquiries.",
};

const enquiries = [
  {
    icon: "forum",
    title: "General Enquiries",
    body: "Questions about who we are, what we do, or where to start. If you're not sure who to reach, this is the right place.",
    email: "info@paahibuspace.org",
  },
  {
    icon: "school",
    title: "Programmes & Participation",
    body: "Applications, training schedules, Digital Walansi Clubs, and questions about joining or delivering any of our programmes.",
    email: "programs@paahibuspace.org",
  },
  {
    icon: "handshake",
    title: "Partnerships, Donations & Institutional Giving",
    body: "Funding, sponsorships, in-kind contributions, and conversations with foundations, companies and development organisations.",
    email: "partnerships@paahibuspace.org",
  },
  {
    icon: "build",
    title: "Technical & Website Support",
    body: "Trouble using this website, a broken link, or a technical issue with an online form or account.",
    email: "support@paahibuspace.org",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full bg-primary dark:bg-background-dark py-28 md:py-36 px-6 md:px-12 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-display text-white text-5xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight max-w-3xl">
            Contact Us
          </h1>
          <p className="mt-8 text-gray-200 text-lg md:text-xl leading-relaxed max-w-2xl">
            Have an opportunity, question or idea you would like to discuss?
            We would love to hear from you.
          </p>
          <p className="mt-6 text-gray-300 leading-relaxed max-w-2xl">
            Choose the address below that best fits your enquiry, or reach us
            by phone or in person in Wa, Upper West Region.
          </p>
        </div>
      </section>

      {/* Who to contact */}
      <section className="bg-white dark:bg-background-dark py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mb-16">
            <h2 className="font-display text-neutral-dark dark:text-white text-4xl md:text-5xl tracking-tight">
              Who to Contact
            </h2>
            <p className="mt-5 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              Reaching the right inbox helps us respond faster.
            </p>
          </div>

          <div>
            {enquiries.map((item) => (
              <div
                key={item.title}
                className="grid md:grid-cols-[minmax(0,220px)_1fr] gap-6 md:gap-12 py-10 border-t border-gray-100 dark:border-gray-800"
              >
                <div className="flex md:flex-col items-center md:items-start gap-4">
                  <span className="material-symbols-outlined text-secondary" style={{ fontSize: "40px" }}>
                    {item.icon}
                  </span>
                  <h3 className="text-neutral-dark dark:text-white text-xl md:text-2xl leading-snug">
                    {item.title}
                  </h3>
                </div>
                <div className="flex flex-col gap-3 max-w-2xl">
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.body}
                  </p>
                  <a
                    href={`mailto:${item.email}`}
                    className="inline-flex items-center gap-2 text-primary dark:text-secondary font-bold w-fit group"
                  >
                    {item.email}
                    <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
            ))}
            <div className="border-t border-gray-100 dark:border-gray-800" />
          </div>
        </div>
      </section>

      {/* Visit or call */}
      <section className="bg-background-light dark:bg-[#1a141e] py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-neutral-dark dark:text-white text-4xl md:text-5xl tracking-tight mb-16">
            Visit or Call
          </h2>

          <div className="grid sm:grid-cols-2 gap-16 md:gap-20">
            <div className="flex flex-col gap-4">
              <span className="material-symbols-outlined text-primary dark:text-secondary" style={{ fontSize: "44px" }}>
                location_on
              </span>
              <h3 className="text-neutral-dark dark:text-white text-2xl md:text-3xl">
                Our Location
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                Wa, Upper West Region, Ghana.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <span className="material-symbols-outlined text-primary dark:text-secondary" style={{ fontSize: "44px" }}>
                call
              </span>
              <h3 className="text-neutral-dark dark:text-white text-2xl md:text-3xl">
                Phone
              </h3>
              <a
                href="tel:+233556410924"
                className="inline-flex items-center gap-2 text-primary dark:text-secondary font-bold text-lg w-fit group"
              >
               
                +233 55 641 0924
                <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Safeguarding note */}
      <section className="bg-primary py-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white text-2xl md:text-3xl">
            Raising a Safeguarding Concern
          </h2>
          <p className="mt-5 text-gray-200 leading-relaxed">
            If you need to report a safeguarding concern, please write to{" "}
            <a
              href="mailto:info@paahibuspace.org"
              className="underline underline-offset-4 decoration-1 hover:decoration-2"
            >
              info@paahibuspace.org
            </a>{" "}
            and it will be directed to the appropriate team. Read more on our{" "}
            <Link
              href="/safeguarding"
              className="underline underline-offset-4 decoration-1 hover:decoration-2"
            >
              safeguarding page
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
