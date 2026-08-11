export default function PhilosophySection() {
  return (
    <section className="py-24 bg-background-light dark:bg-background-dark/50 transition-colors" id="philosophy">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 md:text-center max-w-3xl mx-auto animate-fade-up">
          <h2 className="text-secondary font-bold tracking-wide uppercase text-sm mb-2">Our Philosophy</h2>
          <h3 className="text-3xl font-black text-neutral-dark dark:text-white sm:text-4xl">Holistic Growth Pillars</h3>
          <p className="mt-4 text-lg text-neutral-gray dark:text-gray-400">We believe that technical skills alone aren&apos;t enough. Our approach nurtures the whole person through three core pillars.</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="group relative border border-gray-200 dark:border-gray-700 dark:bg-gray-800 p-8 transition-all hover:-translate-y-1">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-900/20 text-primary dark:text-blue-400 group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>favorite</span>
            </div>
            <h4 className="mb-3 text-xl font-bold text-neutral-dark dark:text-white">Safe Space</h4>
            <p className="text-neutral-gray dark:text-gray-400 leading-relaxed">Creating psychological safety where failing is part of learning and questions are always encouraged.</p>
          </div>
          <div className="group relative border border-gray-200 dark:border-gray-700 dark:bg-gray-800 p-8 transition-all hover:-translate-y-1">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-900/20 text-primary dark:text-blue-400 group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>terminal</span>
            </div>
            <h4 className="mb-3 text-xl font-bold text-neutral-dark dark:text-white">Skill Building</h4>
            <p className="text-neutral-gray dark:text-gray-400 leading-relaxed">Practical, hands-on technical training in coding, design, and data science tailored for market needs.</p>
          </div>
          <div className="group relative border border-gray-200 dark:border-gray-700 dark:bg-gray-800 p-8 transition-all hover:-translate-y-1">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-900/20 text-primary dark:text-blue-400 group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>groups</span>
            </div>
            <h4 className="mb-3 text-xl font-bold text-neutral-dark dark:text-white">Community First</h4>
            <p className="text-neutral-gray dark:text-gray-400 leading-relaxed">Building a lifelong network of support, peer mentorship, and sisterhood across the continent.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
