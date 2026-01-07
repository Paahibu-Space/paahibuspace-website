import Link from "next/link";

export default function ImpactSpotlight({ 
  title, 
  story, 
  backgroundStory, 
  image, 
  quote, 
  personName, 
  personRole 
}) {
  return (
    <section className="py-20 bg-[#0d1b12] text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <img 
              alt={personName} 
              className="w-full h-auto object-cover" 
              src={image} 
            />
            <div className="absolute bottom-6 left-6 right-6 bg-black/70 backdrop-blur-md p-4 rounded-xl border border-white/10">
              <p className="text-secondary font-bold text-xs uppercase mb-1">Impact Spotlight</p>
              <p className="text-white font-medium">"{quote}"</p>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-10 bg-secondary"></span>
              <span className="text-secondary font-bold uppercase tracking-wider text-sm">Success Story</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              {title}
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {story}
            </p>
            {backgroundStory && (
               <p className="text-gray-300 mb-8 leading-relaxed">
                {backgroundStory}
               </p>
            )}
            <Link href="/stories" className="inline-flex items-center gap-2 text-secondary font-bold hover:gap-3 transition-all">
              Read more stories like {personName}'s
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
