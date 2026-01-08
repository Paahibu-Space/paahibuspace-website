import { clsx } from "clsx";

export default function PageHero({
  title,
  description,
  children,
  className,
  backgroundImage,
}) {
  return (
    <section className={clsx("w-full relative", className)}>
      <div
        className="flex min-h-[500px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-center justify-center p-4 relative"
        style={{
          backgroundImage: backgroundImage
            ? `linear-gradient(rgba(38, 41, 115, 0.7) 0%, rgba(20, 20, 30, 0.8) 100%), url("${backgroundImage}")`
            : undefined,
        }}
      >
        <div className="flex flex-col gap-4 text-center max-w-[800px] z-10">
          <div className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-6xl text-shadow-sm">
            {title}
          </div>
          {description && (
            <p className="text-gray-200 text-lg font-normal leading-relaxed md:text-xl max-w-[600px] mx-auto text-shadow-sm">
              {description}
            </p>
          )}
          {children && (
            <div className="mt-4 flex flex-wrap gap-4 justify-center">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
