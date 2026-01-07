export default function Stats() {
  return (
    <section className="w-full px-4 py-16 bg-white border-y border-gray-100">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center gap-2">
            <span className="text-4xl md:text-5xl font-black text-primary">
              5k+
            </span>
            <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">
              Women Trained
            </span>
          </div>
          <div className="flex flex-col items-center text-center gap-2">
            <span className="text-4xl md:text-5xl font-black text-primary">
              1.2k
            </span>
            <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">
              Community Members
            </span>
          </div>
          <div className="flex flex-col items-center text-center gap-2">
            <span className="text-4xl md:text-5xl font-black text-primary">
              85%
            </span>
            <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">
              Employment Rate
            </span>
          </div>
          <div className="flex flex-col items-center text-center gap-2">
            <span className="text-4xl md:text-5xl font-black text-primary">
              7+
            </span>
            <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">
              Years of Impact
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
