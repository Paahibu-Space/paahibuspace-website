import StoriesGrid from "@/components/sections/StoriesGrid";

export default function StoriesPage() {
  return (
    <>
      <section className="bg-white border-b border-gray-100 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
                <nav className="flex items-center gap-2 text-sm mb-6">
                    <a className="text-gray-500 hover:text-primary font-medium transition-colors" href="/">Home</a>
                    <span className="text-gray-300">/</span>
                    <span className="text-secondary font-semibold">Stories</span>
                </nav>
                <h1 className="text-4xl md:text-5xl font-extrabold text-secondary tracking-tight mb-4 leading-tight">
                    Stories
                </h1>
                <p className="text-lg md:text-xl text-gray-500 max-w-2xl leading-relaxed">
                    Real stories of transformation and impact from the Paahibu Space community. Discover how we are empowering the next generation.
                </p>
            </div>
        </div>
      </section>
      <StoriesGrid />
    </>
  );
}
