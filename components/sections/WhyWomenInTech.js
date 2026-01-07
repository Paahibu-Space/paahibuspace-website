export default function WhyWomenInTech() {
  return (
    <section className="py-20 bg-background-light relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Why Female Perspectives in Tech Matter
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          <div className="lg:col-span-5 flex flex-col h-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full min-h-[500px] group">
              <img
                alt="Diverse women collaborating in a technology workspace"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUQSfCS19mU8bnukcpA9zRHUxkRYBvRVOK4S3wsCFlPVFIdt6_55_81_hdxE9G1ixAqyk9vo6pIxvleY_fb1eUBEBOv5LQG0i7g55Jr4CoFh4fJaI9Z2GUMcYXnHhGK8Sa6QqlDntFomnxsvJFOCnEUZtfvEOSecocvOzN47B-h7MU4_7sYqESl8UBe35uqKV9UfG6qAjF5fhGEwt3ryZSMHLgdwZaccafXMbI7Z3DVYpiJGpYb94lT7AqMvTdCX3kUAs0OGf4vkU"
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
                      28%
                    </span>
                  </div>
                  <p className="text-gray-200 text-lg mt-2 font-medium leading-relaxed border-l-4 border-secondary pl-4">
                    Women hold only 28% of jobs in the global technology
                    workforce.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                  <div className="text-secondary font-bold text-lg mb-1 flex items-center gap-2">
                    <span className="material-symbols-outlined">
                      trending_up
                    </span>
                    Economic Impact
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold text-white tracking-tight">
                      $12T
                    </span>
                  </div>
                  <p className="text-sm text-gray-200 mt-2">
                    Could be added to global GDP by 2025 simply by advancing
                    gender equality in the workforce.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-center gap-6">
            <p className="text-gray-600 mb-6 text-lg">
              We believe that diversity isn't just a metric to be met—it's the
              engine of progress. When women lead in technology, the entire
              ecosystem evolves.
            </p>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-[6px] border-secondary flex flex-col sm:flex-row gap-6 items-start">
              <div className="flex-shrink-0 bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-4xl">
                  lightbulb
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">
                  Increased Innovation
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Diverse teams bring wider perspectives that solve complex
                  problems faster. Women introduce unique insights that drive
                  breakthrough solutions in software and hardware development.
                </p>
              </div>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-[6px] border-secondary flex flex-col sm:flex-row gap-6 items-start">
              <div className="flex-shrink-0 bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-4xl">
                  diversity_3
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">
                  Effective Leadership
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Female leaders are proven to foster more inclusive cultures
                  and higher team engagement. Empathy-driven leadership results
                  in sustainable organizational growth and retention.
                </p>
              </div>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-[6px] border-secondary flex flex-col sm:flex-row gap-6 items-start">
              <div className="flex-shrink-0 bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-4xl">
                  rocket_launch
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">
                  Entrepreneurship Growth
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Women-led startups generate more revenue per dollar invested.
                  Supporting female entrepreneurs unlocks a massive, untapped
                  market potential across the African continent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
