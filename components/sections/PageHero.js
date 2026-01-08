import { clsx } from "clsx";

export default function PageHero({
  title,
  description,
  children,
  className,
  backgroundImage,
}) {
  return (
    <section
      className={clsx(
        "relative w-full overflow-hidden bg-primary text-white",
        className
      )}
    >
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-secondary blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-72 h-72 rounded-full bg-purple-500 blur-3xl"></div>
      </div>

      {backgroundImage && (
         <div
            className="absolute inset-0 w-full h-full bg-cover bg-center opacity-30 mix-blend-overlay"
            style={{ backgroundImage: `url("${backgroundImage}")` }}
          />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="flex flex-col gap-6 text-center items-center">
          {title}
          {description && (
            <div className="max-w-2xl mx-auto text-lg md:text-xl text-blue-100 leading-relaxed">
              {description}
            </div>
          )}
          {children && <div className="mt-4 flex flex-wrap gap-4 justify-center">{children}</div>}
        </div>
      </div>

       {/* Decorative Wave Bottom */}
       <div className="absolute bottom-0 w-full overflow-hidden leading-none z-20">
            <svg class="relative block w-full h-12 md:h-16" data-name="Layer 1" preserveAspectRatio="none"
                viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
                <path className="fill-background-light"
                    d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z">
                </path>
            </svg>
        </div>
    </section>
  );
}
