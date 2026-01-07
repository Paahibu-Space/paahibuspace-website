import Link from "next/link";

export default function Navigation() {
  return (
    <div className="flex items-center gap-8">
      {/* Programs Mega Menu */}
      <div className="group relative">
        <button className="flex items-center gap-1 text-sm font-medium text-neutral-dark hover:text-secondary transition-colors py-6">
          Programs
          <span className="material-symbols-outlined text-lg">expand_more</span>
        </button>
        <div className="mega-menu absolute left-1/2 -translate-x-1/2 top-full w-screen max-w-4xl opacity-0 invisible translate-y-2 bg-white rounded-2xl shadow-xl border border-gray-100 p-6 z-50">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-8 grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
                  Learning Paths
                </h3>
                <Link
                  href="/programs"
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group/item"
                >
                  <div className="bg-blue-50 text-primary p-2 rounded-lg group-hover/item:bg-primary group-hover/item:text-white transition-colors">
                    <span className="material-symbols-outlined">code</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-neutral-dark">
                      Web Development
                    </div>
                    <div className="text-xs text-neutral-gray mt-1">
                      Full-stack bootcamp for beginners
                    </div>
                  </div>
                </Link>
                <Link
                  href="/programs"
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group/item"
                >
                  <div className="bg-orange-50 text-secondary p-2 rounded-lg group-hover/item:bg-secondary group-hover/item:text-white transition-colors">
                    <span className="material-symbols-outlined">data_usage</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-neutral-dark">
                      Data Science
                    </div>
                    <div className="text-xs text-neutral-gray mt-1">
                      Analytics and visualization skills
                    </div>
                  </div>
                </Link>
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
                  Growth & Support
                </h3>
                <Link
                  href="/grow-program"
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group/item"
                >
                  <div className="bg-purple-50 text-purple-600 p-2 rounded-lg group-hover/item:bg-purple-600 group-hover/item:text-white transition-colors">
                    <span className="material-symbols-outlined">
                      supervisor_account
                    </span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-neutral-dark">
                      Mentorship
                    </div>
                    <div className="text-xs text-neutral-gray mt-1">
                      Connect with industry leaders
                    </div>
                  </div>
                </Link>
                <Link
                  href="/programs"
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group/item"
                >
                  <div className="bg-green-50 text-green-600 p-2 rounded-lg group-hover/item:bg-green-600 group-hover/item:text-white transition-colors">
                    <span className="material-symbols-outlined">
                      rocket_launch
                    </span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-neutral-dark">
                      Founder's Lab
                    </div>
                    <div className="text-xs text-neutral-gray mt-1">
                      Incubator for female founders
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-span-4 bg-primary/5 rounded-xl p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-primary mb-2">
                  Next Cohort
                </h3>
                <p className="text-sm text-neutral-gray mb-4">
                  Applications are open for the Summer 2024 Web Dev intake.
                </p>
              </div>
              <button className="w-full rounded-lg bg-primary py-2.5 text-sm font-bold text-white shadow-sm hover:bg-blue-900 transition-all cursor-pointer">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* About Mega Menu */}
      <div className="group relative">
        <button className="flex items-center gap-1 text-sm font-medium text-neutral-dark hover:text-secondary transition-colors py-6">
          About
          <span className="material-symbols-outlined text-lg">expand_more</span>
        </button>
        <div className="mega-menu absolute left-1/2 -translate-x-1/2 top-full w-64 opacity-0 invisible translate-y-2 bg-white rounded-xl shadow-xl border border-gray-100 p-2 z-50">
          <Link
            href="/mission"
            className="block px-4 py-2 text-sm text-neutral-dark hover:bg-gray-50 hover:text-primary rounded-lg"
          >
            Our Mission
          </Link>
          <Link
            href="/team"
            className="block px-4 py-2 text-sm text-neutral-dark hover:bg-gray-50 hover:text-primary rounded-lg"
          >
            Leadership Team
          </Link>
          <Link
            href="/philosophy"
            className="block px-4 py-2 text-sm text-neutral-dark hover:bg-gray-50 hover:text-primary rounded-lg"
          >
            Philosophy
          </Link>
          <Link
            href="/#partners"
            className="block px-4 py-2 text-sm text-neutral-dark hover:bg-gray-50 hover:text-primary rounded-lg"
          >
            Partners
          </Link>
        </div>
      </div>

      <Link
        href="/impact"
        className="text-sm font-medium text-neutral-dark hover:text-secondary transition-colors"
      >
        Impact
      </Link>
      <Link
        href="/stories"
        className="text-sm font-medium text-neutral-dark hover:text-secondary transition-colors"
      >
        Stories
      </Link>
      
      <div className="ml-4">
        <button className="rounded-full bg-secondary px-6 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-orange-600 hover:shadow transition-all cursor-pointer">
          Join Us
        </button>
      </div>
    </div>
  );
}
