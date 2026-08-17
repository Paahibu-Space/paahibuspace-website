import Image from "next/image";

export default function DirectorMessage() {
  return (
    <section className="py-20 md:py-28 dark:bg-background-dark">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          <div className="w-full lg:w-2/5 shrink-0">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                alt="Hiqmat Sungdeme Saani, Founder and Executive Director of Paahibu Space"
                src="/assets/images/team/hiqmat.png"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>

          <div className="w-full lg:w-3/5">
            <span className="material-symbols-outlined text-secondary text-6xl" aria-hidden="true">
              format_quote
            </span>
            <blockquote className="mt-2">
              <p className="dark:text-white text-2xl md:text-4xl font-bold leading-snug mb-6">
                Seeing is Believing and Believing is Becoming.
              </p>
              <div className="space-y-4 dark:text-blue-100 text-lg leading-relaxed">
                <p>
                  From my experience growing up in an underrepresented community, sometimes we
                  simply cannot dream about the things we have not seen, regardless of the
                  potential we may have.
                </p>
                <p>
                  We have a responsibility to give every young person, especially girls and
                  young women, the opportunity to see who they can truly become by expanding
                  access, allowing them to imagine and innovate, and ultimately enabling them
                  to shape and transform what is possible through that innovation.
                </p>
              </div>
              <footer className="mt-8">
                <p className="dark:text-white font-bold">Hiqmat Sungdeme Saani</p>
                <p className="text-secondary text-sm font-medium">Founder &amp; Executive Director</p>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
