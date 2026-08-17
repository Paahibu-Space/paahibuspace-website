import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full relative">
      <div className="flex min-h-[500px] flex-col gap-6 items-center justify-center p-4 relative overflow-hidden bg-primary dark:bg-background-dark">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuChVnKlRze4PAP6RUwKXPEJVGO_xknBh7I7IrWtys_RrkCQ4JJGANdGSw1-dS2H3ZRz_lTY9XTwnPBmY23bHQsC702gjL3g4BsHLsIookfOrmEGXcMHWDDGggLCt3b6tJMkf06xYQ9PXV0kFuUntURKXaXPC2Rx4RzNtJJq78Va1beJJr8tYKd6B84IcbD_6AzwykNs79skTza8mARXHqYGqtNeBLfh2761q_DUdo__6cbvI9an8L_iS9ER0Pu8ctwIw19Gf8h2NgzA"
          alt="Group of diverse African women collaborating on laptops in a modern office"
          fill
          priority
          className="object-cover -z-10"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(rgba(38, 41, 115, 0.7) 0%, rgba(20, 20, 30, 0.8) 100%)",
          }}
        ></div>
        <div className="flex flex-col gap-4 text-center max-w-[800px] z-10 animate-fade-up">
          <h1 className="text-white text-4xl leading-tight tracking-[-0.033em] md:text-6xl">
            Empowering the Next Generation of African Women in Tech
          </h1>
          <p className="text-gray-200 dark:text-gray-300 text-lg font-normal leading-relaxed md:text-xl max-w-[600px] mx-auto">
            Breaking barriers and building futures through technology, mentorship,
            and entrepreneurship.
          </p>
        </div>
      </div>
    </section>
  );
}
