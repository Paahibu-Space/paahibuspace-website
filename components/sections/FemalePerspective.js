export default function FemalePerspective() {
  return (
    <section className="py-20 bg-white dark:bg-background-dark/50 transition-colors">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-display font-bold text-3xl lg:text-[36px] text-primary dark:text-white mb-4">Why We Need Female Perspective in Tech</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl">Technology shapes how we live, work, and connect, yet women are still underrepresented in creating these solutions.</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Stats Panel */}
          <div className="lg:w-1/2 bg-[#E9D5FF] dark:bg-purple-900/40 p-8 lg:p-12 transition-colors">
            <div className="grid grid-cols-2 gap-8 h-full">
              <div className="flex flex-col justify-center">
                <span className="font-bold text-4xl lg:text-[48px] text-primary dark:text-purple-100 mb-1">37%</span>
                <span className="text-sm text-gray-700 dark:text-purple-200 font-medium">Internet Access Gap in Africa</span>
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-bold text-4xl lg:text-[48px] text-primary dark:text-purple-100 mb-1">&lt;30%</span>
                <span className="text-sm text-gray-700 dark:text-purple-200 font-medium">Female Researchers in STEM</span>
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-bold text-4xl lg:text-[48px] text-primary dark:text-purple-100 mb-1">7%</span>
                <span className="text-sm text-gray-700 dark:text-purple-200 font-medium">Funding for Female Founders</span>
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-bold text-4xl lg:text-[48px] text-primary dark:text-purple-100 mb-1">97M</span>
                <span className="text-sm text-gray-700 dark:text-purple-200 font-medium">New Digital Jobs by 2025</span>
              </div>
            </div>
          </div>
          {/* Impact Areas */}
          <div className="lg:w-1/2 flex flex-col gap-6 justify-center">
            <div className="flex gap-4 items-start p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">

              <div>
                <h3 className="font-bold text-xl text-primary dark:text-white mb-2">Increased Innovation</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Diverse teams bring diverse perspectives, leading to more innovative solutions for everyone.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">

              <div>
                <h3 className="font-bold text-xl text-primary dark:text-white mb-2">Effective Leadership</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Women leaders often foster more inclusive, collaborative, and sustainable work environments.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">

              <div>
                <h3 className="font-bold text-xl text-primary dark:text-white mb-2">Entrepreneurship Growth</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Supporting female founders boosts local economies and creates job opportunities.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
