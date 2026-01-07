export default function GrowCommunity() {
  return (
    <section className="w-full relative py-24 px-4 overflow-hidden">
      <div
        className="absolute inset-0 bg-primary z-0"
        data-alt="Abstract deep blue geometric pattern background"
        style={{
          background: "linear-gradient(135deg, #1e215d 0%, #262973 100%)",
        }}
      ></div>
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full -translate-x-1/3 translate-y-1/3"></div>
      <div className="max-w-[1000px] mx-auto relative z-10 flex flex-col items-center text-center gap-8">
        <span className="bg-white/10 text-white px-4 py-1 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20">
          Our Flagship Community
        </span>
        <h2 className="text-white text-4xl md:text-5xl font-black leading-tight max-w-[800px]">
          Join the GROW Community
        </h2>
        <p className="text-blue-100 text-lg md:text-xl max-w-[700px]">
          Connect with mentors, find peers, access exclusive resources, and
          accelerate your career in technology. We are stronger together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <button className="flex items-center justify-center h-12 px-8 bg-white text-primary text-base font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg cursor-pointer">
            Join the Community
          </button>
          <button className="flex items-center justify-center h-12 px-8 bg-transparent border-2 border-white/30 text-white text-base font-bold rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
