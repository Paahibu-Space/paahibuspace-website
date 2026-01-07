export default function DetailedMission() {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
            Our Purpose
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-gray-600">
            We are dedicated to bridging the gap and fostering excellence through
            three core pillars designed to uplift every member of our community.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Card 1 */}
          <div className="group hover:-translate-y-1 transition-transform duration-300 bg-background-light rounded-xl p-8 border border-gray-100 shadow-sm h-full flex flex-col">
            <div className="mb-6 text-secondary group-hover:scale-110 transition-transform duration-300 origin-left">
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "80px" }}
              >
                door_open
              </span>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-3">ACCESS</h3>
            <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
              Bridging the digital divide by providing essential resources to
              those who need them most. We ensure no talent is left behind due
              to lack of opportunity.
            </p>
            <div className="bg-white rounded-lg p-4 mt-auto">
              <p className="text-xs font-bold text-neutral-dark uppercase tracking-wider mb-3">
                Offerings
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="material-symbols-outlined text-primary text-lg shrink-0">
                    check_circle
                  </span>
                  <span>Technical Scholarships</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="material-symbols-outlined text-primary text-lg shrink-0">
                    check_circle
                  </span>
                  <span>Hardware Grants</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="material-symbols-outlined text-primary text-lg shrink-0">
                    check_circle
                  </span>
                  <span>High-Speed Internet Access</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group hover:-translate-y-1 transition-transform duration-300 bg-background-light rounded-xl p-8 border border-gray-100 shadow-sm h-full flex flex-col">
            <div className="mb-6 text-secondary group-hover:scale-110 transition-transform duration-300 origin-left">
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "80px" }}
              >
                lightbulb
              </span>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-3">INNOVATE</h3>
            <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
              Fostering creativity and technical excellence through hands-on
              experimentation. We create safe spaces for bold ideas and
              cutting-edge development.
            </p>
            <div className="bg-white rounded-lg p-4 mt-auto">
              <p className="text-xs font-bold text-neutral-dark uppercase tracking-wider mb-3">
                Offerings
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="material-symbols-outlined text-primary text-lg shrink-0">
                    check_circle
                  </span>
                  <span>Global Hackathons</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="material-symbols-outlined text-primary text-lg shrink-0">
                    check_circle
                  </span>
                  <span>R&D Innovation Labs</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="material-symbols-outlined text-primary text-lg shrink-0">
                    check_circle
                  </span>
                  <span>Tech Showcases</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group hover:-translate-y-1 transition-transform duration-300 bg-background-light rounded-xl p-8 border border-gray-100 shadow-sm h-full flex flex-col">
            <div className="mb-6 text-secondary group-hover:scale-110 transition-transform duration-300 origin-left">
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "80px" }}
              >
                trending_up
              </span>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-3">TRANSFORM</h3>
            <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
              Changing career trajectories and leadership landscapes
              permanently. We don't just teach code; we build the next
              generation of industry leaders.
            </p>
            <div className="bg-white rounded-lg p-4 mt-auto">
              <p className="text-xs font-bold text-neutral-dark uppercase tracking-wider mb-3">
                Offerings
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="material-symbols-outlined text-primary text-lg shrink-0">
                    check_circle
                  </span>
                  <span>Leadership Coaching</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="material-symbols-outlined text-primary text-lg shrink-0">
                    check_circle
                  </span>
                  <span>Job Placement Partners</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="material-symbols-outlined text-primary text-lg shrink-0">
                    check_circle
                  </span>
                  <span>Global Alumni Network</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <button className="flex items-center gap-2 h-14 px-10 rounded-full bg-primary hover:bg-blue-900 text-white text-lg font-bold shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
            <span>Join the Mission</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>
    </section>
  );
}
