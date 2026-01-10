import Image from "next/image";

export default function CommunityFeatures() {
  return (
    <>
      <section className="w-full bg-[#faf9fb] py-10">
        <div className="container mx-auto px-6 max-w-[960px] text-center">
          <h2 className="text-neutral-dark text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-4">
            Why Join Hands With Us?
          </h2>
          <p className="text-[#555] text-lg max-w-2xl mx-auto">
            We are more than just a network. We are a movement designed to
            uplift, connect, and propel you forward.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#faf9fb] pb-24">
        <div className="container mx-auto px-6 max-w-[1080px] flex flex-col gap-20">
          {/* Feature 1 */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 group">
            <div className="w-full md:w-1/2 aspect-[4/3] rounded-lg overflow-hidden shadow-md">
              <Image
                alt="Two women colleagues discussing work on a laptop"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7DckuQvtfBkrRePEC3mzwmaCR3bfXhiIWlgvxGp2kRxRh6srXH3aTRvQ_UfY_VZjp09mW6eotu0CDEF1xrby-wkTqD0ZYp76jLLWzsN6ayPKKN340lsF9SCzpkFbz0eXqLxo7ffLszk0--9xK8tZApGwypJnScsf81GTgeCJ-gjx25yMGSxn6sRHllYU-BVrwQ8VvzbWQ4BLj-mdWl0eqfiXmR7eBHrdQHUhcXGjL4VEBpTC-sTwhBS3vVd6J0uk3x9MHfzwu-wQ"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="w-full md:w-1/2 p-10 rounded-lg flex flex-col gap-4 justify-center h-fit">
              <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                <span className="material-symbols-outlined">handshake</span>
              </div>
              <h3 className="text-2xl font-bold text-neutral-dark">
                Building Relationships
              </h3>
              <p className="text-[#555] leading-relaxed">
                We focus on mentorship and deep peer-to-peer connections rather
                than just transactional networking. Here, you find partners,
                collaborators, and friends—not just contacts in a database.
              </p>
              <a
                className="mt-2 text-primary font-bold text-sm hover:underline flex items-center gap-1"
                href="#"
              >
                Learn about Mentorship{" "}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12 group">
            <div className="w-full md:w-1/2 aspect-[4/3] rounded-lg overflow-hidden shadow-md">
              <Image
                alt="Group of diverse friends laughing together outdoors"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_hC0uiCbx57H_IVbqO7xWx5IfEzUYDrgPqLRKBdc-ERCkZl5l2n2kzex_YDyoRLWhU0eya0m-q8UQZKePH3jC7VHX3DcwrO0XxHYTsUD5Z0HA4YRUrVG6fzvXCbq0nJxCb1hNWbu5bipjOGu1vH145mNYZcKbbuyjapk9axvLuRB7cWSlG1JAFsw0Xgav8afgAowaEprxe0llw91YSC51UKFsxHEWqa4WXksljQkPTinTHkyU5elbkpQ5U0ItdAejJNH5Uxxjm4k"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="w-full md:w-1/2 p-10 rounded-lg flex flex-col gap-4 justify-center h-fit">
              <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                <span className="material-symbols-outlined">diversity_1</span>
              </div>
              <h3 className="text-2xl font-bold text-neutral-dark">
                One Big Family
              </h3>
              <p className="text-[#555] leading-relaxed">
                Experience a supportive, non-competitive atmosphere where
                everyone wins. We believe in lifting each other up as we climb,
                creating a safe space to share challenges and celebrate wins.
              </p>
              <a
                className="mt-2 text-primary font-bold text-sm hover:underline flex items-center gap-1"
                href="#"
              >
                Join the Family{" "}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 group">
            <div className="w-full md:w-1/2 aspect-[4/3] rounded-lg overflow-hidden shadow-md">
              <Image
                alt="Confident woman leading a presentation in an office"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCghx274muUBcaIf5e6HRoWO6VsbVGhkA_91iQQ3LIxYRK5sYRoP37aZuS9pwxSYFOITZvHjqOjpYUb-gnwtX4k-BV9WhlmZ3X7ymr7ZcPcqXbC56wPZiJdJW3DpIbNAo5Emaxtl0R2qt311id-6UUyXqNQQDYIrf1nSDETHdx4V4l-Sdq6oYqlDm_BNznZs7IXVrskOR-uvrDayirT2yg-rE1OoxQaOV5-lVTmVgZnMxFmwWepJCeB78xRkVyactJ81djwJql5HU4"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="w-full md:w-1/2 p-10 rounded-lg flex flex-col gap-4 justify-center h-fit">
              <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                <span className="material-symbols-outlined">stars</span>
              </div>
              <h3 className="text-2xl font-bold text-neutral-dark">
                Standing Out
              </h3>
              <p className="text-[#555] leading-relaxed">
                Our ecosystem provides visibility and career acceleration unique
                to the market. We help you showcase your skills to the world
                through exclusive events, features, and partner opportunities.
              </p>
              <a
                className="mt-2 text-primary font-bold text-sm hover:underline flex items-center gap-1"
                href="#"
              >
                See Success Stories{" "}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
