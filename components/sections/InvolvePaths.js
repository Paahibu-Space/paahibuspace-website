export default function InvolvePaths() {
  return (
    <section className="flex flex-col lg:flex-row w-full min-h-[600px]">
      <div className="flex-1 bg-primary flex flex-col items-center justify-center p-12 lg:p-[60px] text-center gap-8 group transition-all duration-300">
        <div className="p-4 rounded-full bg-white/10 mb-2">
          <span
            className="material-symbols-outlined text-white text-[80px] lg:text-[100px]"
          >
            handshake
          </span>
        </div>
        <div className="flex flex-col gap-4 max-w-md">
          <h2 className="text-white font-display font-bold text-3xl lg:text-4xl tracking-tight">
            Become a Mentor
          </h2>
          <p className="text-white/90 font-display text-lg leading-relaxed">
            Share your expertise to empower the next generation of African women
            in tech. Your guidance can shape careers and build the future.
          </p>
        </div>
        <button className="mt-4 border-2 border-white bg-transparent text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl cursor-pointer">
          Apply to Mentor
        </button>
      </div>
      <div className="flex-1 bg-accent flex flex-col items-center justify-center p-12 lg:p-[60px] text-center gap-8 group transition-all duration-300">
        <div className="p-4 rounded-full bg-white/10 mb-2">
          <span
            className="material-symbols-outlined text-white text-[80px] lg:text-[100px]"
          >
            local_florist
          </span>
        </div>
        <div className="flex flex-col gap-4 max-w-md">
          <h2 className="text-white font-display font-bold text-3xl lg:text-4xl tracking-tight">
            Join GROW Program
          </h2>
          <p className="text-white/90 font-display text-lg leading-relaxed">
            Join a community dedicated to your professional growth. Access
            exclusive resources, workshops, and peer support to accelerate your
            journey.
          </p>
        </div>
        <button className="mt-4 border-2 border-white bg-white text-secondary px-10 py-4 rounded-lg font-bold text-lg hover:bg-transparent hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl cursor-pointer">
          Join GROW
        </button>
      </div>
    </section>
  );
}
