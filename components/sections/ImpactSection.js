import { fetchAPI } from "@/lib/api";

export default async function ImpactSection() {
  const stats = await fetchAPI("/api/v1/impact-stats") || [
        { value: "1,000+", label: "Individuals Trained" },
        { value: "62", label: "Communities Reached" },
        { value: "500+", label: "MSMEs Supported" },
        { value: "10,000+", label: "Women & Girls Reached" }
  ];

  return (
    <section className="py-24 bg-primary relative overflow-hidden" id="impact">
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-secondary font-bold tracking-wide uppercase text-sm mb-2">Our Impact</h2>
            <h3 className="text-3xl font-black text-white sm:text-4xl mb-6">Changing the Face of Tech</h3>
            <p className="text-white/80 text-lg mb-10 max-w-md">Since our inception, we've been dedicated to creating tangible change in the tech ecosystem across Africa.</p>
            <div className="grid grid-cols-2 gap-8">
              {stats.slice(0, 4).map((stat, idx) => (
                  <div key={idx}>
                    <div className="text-4xl font-black text-white mb-1">{stat.value}</div>
                    <div className="text-sm font-medium text-secondary">{stat.label}</div>
                  </div>
              ))}
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-16 w-16 rounded-full bg-cover bg-center border-2 border-primary/10 dark:border-white/10"
                data-alt="Portrait of Poula Anek"
                style={{ backgroundImage: "url('/assets/images/team/poula.jpg')" }}>
              </div>
              <div>
                <h4 className="text-lg font-bold text-neutral-dark dark:text-white">Poula Anek</h4>
                <p className="text-sm text-neutral-gray dark:text-gray-400">Data Entry Intern</p>
              </div>
            </div>
            <p className="text-neutral-dark dark:text-gray-100 text-lg italic leading-relaxed mb-6">
              "The biggest win for me was right after the program, my mentor supported me in landing a 6-month remote data entry contract, something I never thought I could achieve before. I’m now a more confident, tech-savvy advocate who’s ready to drive real change."
            </p>
            <div className="flex items-center text-secondary">
              <span className="material-symbols-outlined filled text-lg">star</span>
              <span className="material-symbols-outlined filled text-lg">star</span>
              <span className="material-symbols-outlined filled text-lg">star</span>
              <span className="material-symbols-outlined filled text-lg">star</span>
              <span className="material-symbols-outlined filled text-lg">star</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
