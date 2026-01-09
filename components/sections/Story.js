export default function Story() {
  return (
    <section className="w-full px-4 py-16 md:px-20 lg:px-40 bg-white dark:bg-background-dark">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden shadow-xl relative">
          <div
            className="w-full h-full bg-cover bg-center"
            data-alt="Close up of a young African woman smiling while coding"
            style={{
              backgroundImage:
                'url("/assets/images/youthled.png")',
            }}
          ></div>
          <div className="absolute bottom-4 right-4 bg-white/90 dark:bg-gray-800/90 px-4 py-2 rounded-lg backdrop-blur-sm shadow-sm">
            <span className="text-primary dark:text-secondary text-xs font-bold tracking-widest uppercase">
              Our Roots
            </span>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <div>
            <span className="text-primary dark:text-secondary font-bold tracking-wider text-sm uppercase">
              Who We Are
            </span>
            <h2 className="text-neutral-dark dark:text-white text-3xl md:text-4xl font-black leading-tight mt-2">
              Youth-Led, Women-Centered
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
            Paahibu Space is a youth-led, women-centered non-profit organization committed to
            bridging the gender gap in digital access, economic empowerment, and leadership.
            We equip women-owned businesses, female entrepreneurs and girls with the
            competencies to leverage technology for business and career growth.
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
            Founded in 2020, we aim to unite women, girls and young people into an organized
            tech and entrepreneurship environment. Our work directly tackles the economic,
            social, environmental and digital inequalities that hinder women’s participation in
            the workforce, leadership and business ecosystem.
          </p>
        </div>
      </div>
    </section>
  );
}
