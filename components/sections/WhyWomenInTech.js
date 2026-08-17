import Image from "next/image";

export default function WhyWomenInTech() {
  return (
    <section className="py-20 bg-background-light dark:bg-background-dark relative overflow-hidden transition-colors">
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-100 dark:bg-orange-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl md:text-4xl text-primary dark:text-white mb-3">
            Why Female Perspectives in Technology Matter
          </h2>
          <p className="text-lg md:text-xl font-semibold text-secondary">
            Technology Should Reflect the People Expected to Live With It
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          <div className="lg:col-span-5 flex flex-col h-full">
            <div className="relative rounded-2xl overflow-hidden h-full min-h-[500px] group">
              <Image
                alt="Diverse women collaborating in a technology workspace"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                src="/assets/images/conn-emp.png"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/90 to-primary/40"></div>
              <div className="relative h-full flex flex-col justify-end p-8 md:p-10 text-white">
                <div className="mb-10">
                  <div className="text-secondary font-bold text-lg mb-2 flex items-center gap-2">
                    <span className="material-symbols-outlined">public</span>
                    The Current Gap
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-7xl font-bold text-white tracking-tighter">
                      37%
                    </span>
                  </div>
                  <p className="text-gray-200 text-lg mt-2 font-medium leading-relaxed border-l-4 border-secondary pl-4">
                    Gender gap in internet access in Sub-Saharan Africa.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                  <div className="text-secondary font-bold text-lg mb-1 flex items-center gap-2">
                    <span className="material-symbols-outlined">
                      trending_up
                    </span>
                    Market Potential
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold text-white tracking-tight">
                      30%
                    </span>
                  </div>
                  <p className="text-sm text-gray-200 mt-2">
                    Of businesses in Africa are run by women, yet they receive only 7% of funding.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-center gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl text-primary dark:text-white mb-2">
                More Than Users
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Women and girls are not simply users of technology. They are students, entrepreneurs, workers, creators, community leaders and problem-solvers whose experiences should influence how technology is designed, governed and used.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl text-primary dark:text-white mb-2">
                Barriers That Remain
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Yet unequal access, online harms, limited representation and exclusion from technology decision-making continue to shape who benefits from digital transformation.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl text-primary dark:text-white mb-2">
                Our Approach
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Paahibu Space works to increase the participation and agency of girls and women across the technology ecosystem—from strengthening digital and AI capabilities and creating safer pathways for online participation to supporting women entrepreneurs to use technology and involving girls and women in developing locally relevant solutions. We believe better technology is built when the people affected by it have meaningful opportunities to shape it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
