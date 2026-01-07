export default function FemalePerspective() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-display font-bold text-3xl lg:text-[36px] text-primary mb-4">Why We Need Female Perspective in Tech</h2>
          <p className="text-gray-600 max-w-3xl">Technology shapes how we live, work, and connect, yet women are still underrepresented in creating these solutions.</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Stats Panel */}
          <div className="lg:w-1/2 bg-[#E9D5FF] rounded-xl p-8 lg:p-12">
            <div className="grid grid-cols-2 gap-8 h-full">
              <div className="flex flex-col justify-center">
                <span className="font-display font-bold text-4xl lg:text-[48px] text-primary mb-1">28%</span>
                <span className="text-sm text-gray-700 font-medium">Global tech workforce</span>
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-display font-bold text-4xl lg:text-[48px] text-primary mb-1">25%</span>
                <span className="text-sm text-gray-700 font-medium">Workforce Representation</span>
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-display font-bold text-4xl lg:text-[48px] text-primary mb-1">11%</span>
                <span className="text-sm text-gray-700 font-medium">Leading Positions</span>
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-display font-bold text-4xl lg:text-[48px] text-primary mb-1">35%</span>
                <span className="text-sm text-gray-700 font-medium">Gender Pay Gap</span>
              </div>
            </div>
          </div>
          {/* Impact Areas */}
          <div className="lg:w-1/2 flex flex-col gap-6 justify-center">
            <div className="flex gap-4 items-start p-4 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="w-12 h-12 shrink-0 bg-orange-50 rounded-full flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">lightbulb</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-primary mb-2">Increased Innovation</h3>
                <p className="text-gray-600 text-sm">Diverse teams bring diverse perspectives, leading to more innovative solutions for everyone.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start p-4 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="w-12 h-12 shrink-0 bg-orange-50 rounded-full flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">leaderboard</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-primary mb-2">Effective Leadership</h3>
                <p className="text-gray-600 text-sm">Women leaders often foster more inclusive, collaborative, and sustainable work environments.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start p-4 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="w-12 h-12 shrink-0 bg-orange-50 rounded-full flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">trending_up</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-primary mb-2">Entrepreneurship Growth</h3>
                <p className="text-gray-600 text-sm">Supporting female founders boosts local economies and creates job opportunities.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
