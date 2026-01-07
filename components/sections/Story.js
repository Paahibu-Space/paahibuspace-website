export default function Story() {
  return (
    <section className="w-full px-4 py-16 md:px-20 lg:px-40 bg-white">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden shadow-xl relative">
          <div
            className="w-full h-full bg-cover bg-center"
            data-alt="Close up of a young African woman smiling while coding"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB_1acxFSzjk4CD7F1s4DMmR6I3NlsqIHX3C_qbTq53Lt6b0ANLRPfT3addwPOFABuPyrBXZ02Ks5pY11DPgsp8YdfxJ30XQCvuGHzm92rYLeAvKU0qOzhRRHafqIm34SIejH9d_JWCCrSNE6S7n3k9KS0FKtR05I6MsV93sTV1UHZbNBOio9Y1Nu0EF1lIjmAdqS8bJ9P42mlwzGfFzD-Myau4QhNppysYVJ23jcr9wTzO5nSLZFrccB0DWu0nyWY7CQrTS9ffKiAh")',
            }}
          ></div>
          <div className="absolute bottom-4 right-4 bg-white/90 px-4 py-2 rounded-lg backdrop-blur-sm shadow-sm">
            <span className="text-primary text-xs font-bold tracking-widest uppercase">
              Our Roots
            </span>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <div>
            <span className="text-primary font-bold tracking-wider text-sm uppercase">
              About Us
            </span>
            <h2 className="text-neutral-dark text-3xl md:text-4xl font-black leading-tight mt-2">
              The Story of Paahibu
            </h2>
          </div>
          <p className="text-gray-600 text-base leading-relaxed">
            Rooted in our local language,{" "}
            <span className="font-bold text-primary">'Paahibu' means 'Gift'</span>.
            We believe that every woman's potential is a gift that should be
            nurtured and shared with the world.
          </p>
          <p className="text-gray-600 text-base leading-relaxed">
            Founded to address the significant gender gap in technology across
            Africa, we started as a small coding club in a community center.
            Today, we have grown into a movement that champions female excellence
            in STEM.
          </p>
          <div className="pt-4">
            <button className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all cursor-pointer">
              <span>Read our full history</span>
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
