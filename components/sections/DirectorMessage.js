import Image from "next/image";

export default function DirectorMessage() {
  return (
    <section className="bg-primary">
      <div className="flex flex-col lg:flex-row-reverse lg:items-stretch">
        <div className="relative w-full aspect-[4/5] lg:w-2/5 lg:aspect-auto">
          <Image
            alt="Hiqmat Sungdeme Saani, Founder and Executive Director of Paahibu Space"
            src="/assets/images/team/director_quote.webp"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
        </div>

        <div className="w-full lg:w-3/5 flex items-center py-12 md:py-16 lg:py-20">
          <div className="w-full px-6 md:px-12 lg:px-16">
            <blockquote>
              <p className="text-white text-2xl md:text-4xl font-display font-normal leading-snug mb-6">
                Seeing is Believing and Believing is Becoming
              </p>
              <div className="space-y-4 text-blue-100 text-lg leading-relaxed">
                <p>
                  &quot;From my experience growing up in an underrepresented community, sometimes we
                  simply cannot dream about the things we have not seen, regardless of the
                  potential we may have.
                </p>
                <p>
                  We have a responsibility to give every young person, especially girls and
                  young women, the opportunity to see who they can truly become by expanding
                  access, allowing them to imagine and innovate, and ultimately enabling them
                  to shape and transform what is possible through that innovation.&quot;
                </p>
              </div>
              <footer className="mt-8">
                <p className="text-white font-bold">Hiqmat Sungdeme Saani</p>
                <p className="text-secondary text-sm font-medium">Founder &amp; Executive Director</p>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
