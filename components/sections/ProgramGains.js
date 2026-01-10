import Image from "next/image";
export default function ProgramGains({ title, description, image, points }) {
  return (
    <section className="py-20 bg-primary dark:bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 rounded-full bg-secondary opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 rounded-full bg-blue-500 opacity-10 blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:flex lg:gap-16 items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              {title}
            </h2>
            <p className="text-blue-100 text-lg mb-8">{description}</p>
            <Image
              alt="Program benefits"
              className="rounded-xl shadow-2xl border border-white/10 w-full h-auto"
              src={image}
              width={0}
              height={0}
              sizes="(max-width: 1024px) 100vw, 50vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div className="lg:w-1/2">
            <ul className="space-y-6">
              {points.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center mt-1">
                    <span className="material-symbols-outlined text-white text-sm">
                      check
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">{point.title}</h4>
                    <p className="text-blue-100 text-sm">
                      {point.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
