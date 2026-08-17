export default function ImpactReport() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/3">
            <h2 className="text-neutral-dark text-3xl leading-tight mb-4">
              Annual Impact Report
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Transparency and results are at our core. Download our detailed
              annual report to see exactly how your support translates into
              changed lives.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group">
                <div className="bg-red-100 p-3 rounded-lg text-red-600">
                  <span className="material-symbols-outlined">description</span>
                </div>
                <div>
                  <p className="font-bold text-neutral-dark group-hover:text-primary transition-colors">
                    2023 Impact Report
                  </p>
                  <p className="text-xs text-gray-500">
                    PDF Download • 4.2 MB
                  </p>
                </div>
                <span className="material-symbols-outlined ml-auto text-gray-400">
                  download
                </span>
              </div>
              <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                  <span className="material-symbols-outlined">bar_chart</span>
                </div>
                <div>
                    <p className="font-bold text-neutral-dark group-hover:text-primary transition-colors">
                    2022 Performance Review
                  </p>
                  <p className="text-xs text-gray-500">
                    PDF Download • 3.8 MB
                  </p>
                </div>
                <span className="material-symbols-outlined ml-auto text-gray-400">
                  download
                </span>
              </div>
            </div>
          </div>
           {/* Placeholder for a visual chart or graphic if needed on the right */}
           <div className="hidden lg:block lg:w-2/3 h-full min-h-[400px] bg-gray-100 rounded-2xl">
               {/* Could add a chart image here later */}
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <span className="material-symbols-outlined text-6xl">pie_chart</span>
                </div>
           </div>
        </div>
      </div>
    </section>
  );
}
