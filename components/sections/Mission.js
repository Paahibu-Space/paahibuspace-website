export default function Mission() {
  return (
    <section className="w-full px-4 py-16 bg-background-light dark:bg-background-dark/50">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
        <div className="text-center max-w-[700px] mx-auto">
          <h2 className="text-neutral-dark dark:text-white text-3xl leading-tight mb-4">
            Mission, Vision & Values
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            A world where African women and girls thrive in STEAME and leadership, addressing community and global challenges through technology.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="flex flex-col gap-4 border border-gray-200 dark:border-gray-700 dark:bg-gray-800 p-8 transition-all hover:-translate-y-1">
            <div className="size-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary dark:text-purple-300 mb-2">
              <span className="material-symbols-outlined text-3xl">
                track_changes
              </span>
            </div>
            <h3 className="text-neutral-dark dark:text-white text-xl">
              Our Mission
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              We equip businesses and nonprofits with the competencies to leverage technology,
              while educating and empowering African women and girls in STEAM, innovation,
              and leadership with a vision to reach millions more across the continent.
            </p>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col gap-4 border border-gray-200 dark:border-gray-700 dark:bg-gray-800 p-8 transition-all hover:-translate-y-1">
             <div className="size-12 rounded-full bg-primary/10 dark:bg-orange-500/20 flex items-center justify-center text-secondary mb-2">
              <span className="material-symbols-outlined text-3xl">visibility</span>
            </div>
            <h3 className="text-neutral-dark dark:text-white text-xl">
              Our Vision
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              A world where all people can lead free and dignified lives by inviting people
              everywhere to access, innovate, connect, and transform communities and
              systems sustainably.
            </p>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col gap-4 border border-gray-200 dark:border-gray-700 dark:bg-gray-800 p-8 transition-all hover:-translate-y-1">
             <div className="size-12 rounded-full bg-primary/10 dark:bg-green-500/20 flex items-center justify-center text-green-600 dark:text-green-400 mb-2">
              <span className="material-symbols-outlined text-3xl">
                lightbulb
              </span>
            </div>
            <h3 className="text-neutral-dark dark:text-white text-xl">
              Why We Do It
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              We see the tangible impact in the lives of women we support. We witness young girls developing tech solutions, and female entrepreneurs creating job opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
