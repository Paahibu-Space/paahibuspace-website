export default function ProgramGallery({ images }) {
  if (!images || images.length < 4) return null;

  return (
    <section className="py-20 px-4 md:px-10 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center text-neutral-dark dark:text-white">Program in Action</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
          {/* Large Item */}
          <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-xl">
            <img 
              alt={images[0].alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              src={images[0].src} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <span className="bg-secondary text-white text-xs font-bold px-2 py-1 rounded mb-2 inline-block">{images[0].tag}</span>
              <h3 className="text-white text-xl font-bold">{images[0].title}</h3>
            </div>
          </div>
          
          {/* Small Items */}
          {images.slice(1).map((img, index) => (
             <div key={index} className={`relative group overflow-hidden rounded-xl ${index === 2 ? 'md:col-span-1 md:row-span-1' : ''}`}>
                <img 
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src={img.src} 
                />
                <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/60 w-full">
                  <h3 className="text-white text-sm font-bold">{img.title}</h3>
                </div>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
