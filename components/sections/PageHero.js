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
        "relative w-full min-h-[500px] flex items-center bg-primary dark:bg-background-dark overflow-hidden py-24 px-4 md:px-0",
        className
      )}
    >
      {backgroundImage && (
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url("${backgroundImage}")` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/70 dark:from-background-dark dark:via-background-dark/95 dark:to-background-dark/70" />
        </div>
      )}
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="max-w-2xl space-y-6">
          <div className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-6xl text-shadow-sm">
            {title}
          </div>
          {description && (
            <p className="text-gray-200 dark:text-gray-300 text-lg font-normal leading-relaxed md:text-xl text-shadow-sm">
              {description}
            </p>
          )}
          {children && (
            <div className="mt-4 flex flex-wrap gap-4">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
