export default function ImpactSection() {
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
              <div>
                <div className="text-4xl font-black text-white mb-1">500+</div>
                <div className="text-sm font-medium text-secondary">Women Trained</div>
              </div>
              <div>
                <div className="text-4xl font-black text-white mb-1">85%</div>
                <div className="text-sm font-medium text-secondary">Employment Rate</div>
              </div>
              <div>
                <div className="text-4xl font-black text-white mb-1">20+</div>
                <div className="text-sm font-medium text-secondary">Startups Launched</div>
              </div>
              <div>
                <div className="text-4xl font-black text-white mb-1">5</div>
                <div className="text-sm font-medium text-secondary">Countries Reached</div>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-16 w-16 rounded-full bg-cover bg-center border-2 border-primary/10 dark:border-white/10"
                data-alt="Portrait of Sarah, a confident young African woman"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBNoimbwvsR-UYUfUM48hr0ZfROKVfsF74wb0OyuB0i1onQdjUvyKpTnomoUAwlSLfQIu77ktTmDxlBrt4hgNxVvaeOFSGINZm-L-Gr4aBMpupXwqhUy2jU2aNuFVuHeb-WxLK8XrXM-JyfIXarQ6ye4T8rVx4astPNPMM4pHjCWhznewzEKO_Po0nkVW6O4FhfsLHobGKFgkzsUJhzNub6hwWowon16b8-yyXKZl9PenpI6yUlL1maXwVlm0gqB6jxQT8ldFxhsIBR')" }}>
              </div>
              <div>
                <h4 className="text-lg font-bold text-neutral-dark dark:text-white">Sarah M.</h4>
                <p className="text-sm text-neutral-gray dark:text-gray-400">Alumni, Data Science Cohort</p>
              </div>
            </div>
            <p className="text-neutral-dark dark:text-gray-100 text-lg italic leading-relaxed mb-6">
              "Before Paahibu, I thought tech wasn't for me. The community here didn't just teach me Python; they taught me to believe in my voice. Now, I lead a data team at a major fintech company."
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
