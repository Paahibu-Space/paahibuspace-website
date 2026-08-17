import Link from "next/link";

export default function GrowCommunity() {
  return (
    <section className="w-full relative py-24 px-4 overflow-hidden bg-primary dark:bg-background-dark">
      <div
        className="absolute inset-0 bg-primary dark:bg-background-dark z-0"
        role="img"
        aria-label="Abstract deep blue geometric pattern background"
        style={{
          background: "linear-gradient(135deg, #1e215d 0%, #262973 100%)",
        }}
      ></div>
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full translate-x-1/3 -translate-y-1/3" aria-hidden="true"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full -translate-x-1/3 translate-y-1/3" aria-hidden="true"></div>
      <div className="max-w-[1000px] mx-auto relative z-10 flex flex-col items-center text-center gap-8 animate-fade-up">
        <h2 className="text-white text-4xl md:text-5xl leading-tight max-w-[800px]">
          Building a Sustainable Future
        </h2>
        <p className="text-blue-100 dark:text-gray-300 text-lg md:text-xl max-w-[700px]">
          We are committed to long-term impact through financial independence, program scalability,
          and leadership development. Join us in creating lasting change for African women in tech.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Link
            href="/partners"
            aria-label="Become a partner organization"
            className="flex items-center justify-center h-12 px-8 bg-white dark:bg-secondary text-primary dark:text-white text-base font-bold rounded-lg hover:bg-gray-100 dark:hover:bg-orange-600 transition-colors cursor-pointer">
            Partner With Us
          </Link>
        </div>
      </div>
    </section>
  );
}
