import Link from "next/link";
import Image from "next/image";

export default function ImpactPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-white dark:bg-background-dark border-b border-gray-100 dark:border-gray-800 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm">
            <Link className="text-gray-500 hover:text-primary transition-colors" href="/">
              Home
            </Link>
            <span className="material-symbols-outlined text-[16px] text-gray-400">
              chevron_right
            </span>
            <span className="text-primary dark:text-white font-medium">
              Impact Stories
            </span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div
            className="bg-cover bg-center bg-no-repeat rounded-2xl overflow-hidden relative min-h-[480px] flex items-center justify-center shadow-xl"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(39, 41, 116, 0.8) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCSpaEnycqGSvS8EBKN4ZrCuwDoyORUD76IqvFxXM-wXbbBcmlIv-T1kVjvAipZ1oVQe_Vx4Qie3LmjG39t0hpyRtkqSTCGxas8x9uzpJzzV5xmYegkZpaxSeP8xwkHAq9RKg_JbL0dnTjxwW-IjqIbD0OPLa6RPhmGLNkHw9G0HJULC26sf1GXgZ54TYdg9cWI1iZiuUqO8vZwjzf1ObdPWZxMXvydnuycpEoWz0bHYCr8Tr7UO9vwIeEE_ok5tfXQMVG33NhMpqh-")',
            }}
          >
            <div className="relative z-10 text-center max-w-4xl px-4 flex flex-col items-center gap-6">
              <span className="bg-primary text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-2 shadow-sm">
                Real Impact • Real Stories • Real Change
              </span>
              <h1 className="text-white text-4xl md:text-5xl lg:text-7xl font-black leading-tight tracking-tight drop-shadow-sm font-display">
                Transforming African Futures <br className="hidden md:block" /> Through Technology
              </h1>
              <p className="text-gray-100 text-lg md:text-xl max-w-2xl font-normal leading-relaxed text-shadow">
                From rural villages to global tech hubs, meet the women and youth reshaping Africa's digital landscape through resilience, innovation, and code.
              </p>
              <button className="mt-6 flex items-center justify-center rounded-full h-14 px-10 bg-primary hover:bg-white hover:text-primary transition-all text-white text-base font-bold shadow-lg ring-4 ring-primary/20">
                Read Latest Story
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full bg-surface-light dark:bg-background-dark border-y border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-primary dark:text-white">
                Our Reach in Numbers
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mt-2 text-lg">
                Measuring the tangible impact of our mission across the continent.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Stat Card 1 */}
            <div className="flex flex-col gap-4 rounded-2xl p-6 bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 hover:border-primary/40 hover:shadow-md transition-all">
              <div className="p-3 bg-primary/10 dark:bg-primary/20 w-fit rounded-xl text-primary">
                <span className="material-symbols-outlined text-3xl">
                  school
                </span>
              </div>
              <div>
                <p className="text-4xl font-black text-primary dark:text-white tracking-tight">
                  500+
                </p>
                <p className="text-gray-600 dark:text-gray-400 font-medium mt-1">
                  Girls Trained
                </p>
              </div>
            </div>
            {/* Stat Card 2 */}
            <div className="flex flex-col gap-4 rounded-2xl p-6 bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 hover:border-primary/40 hover:shadow-md transition-all">
              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 w-fit rounded-xl text-blue-600 dark:text-blue-400">
                <span className="material-symbols-outlined text-3xl">
                  rocket_launch
                </span>
              </div>
              <div>
                <p className="text-4xl font-black text-primary dark:text-white tracking-tight">
                  30+
                </p>
                <p className="text-gray-600 dark:text-gray-400 font-medium mt-1">
                  Projects Launched
                </p>
              </div>
            </div>
            {/* Stat Card 3 */}
            <div className="flex flex-col gap-4 rounded-2xl p-6 bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 hover:border-primary/40 hover:shadow-md transition-all">
              <div className="p-3 bg-green-50 dark:bg-green-900/20 w-fit rounded-xl text-green-600 dark:text-green-400">
                <span className="material-symbols-outlined text-3xl">
                  workspace_premium
                </span>
              </div>
              <div>
                <p className="text-4xl font-black text-primary dark:text-white tracking-tight">
                  450+
                </p>
                <p className="text-gray-600 dark:text-gray-400 font-medium mt-1">
                  Certificates Awarded
                </p>
              </div>
            </div>
            {/* Stat Card 4 */}
            <div className="flex flex-col gap-4 rounded-2xl p-6 bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 hover:border-primary/40 hover:shadow-md transition-all">
              <div className="p-3 bg-purple-50 dark:bg-purple-900/20 w-fit rounded-xl text-purple-600 dark:text-purple-400">
                <span className="material-symbols-outlined text-3xl">
                  public
                </span>
              </div>
              <div>
                <p className="text-4xl font-black text-primary dark:text-white tracking-tight">
                  12
                </p>
                <p className="text-gray-600 dark:text-gray-400 font-medium mt-1">
                  Communities Reached
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project: SecureTechsiStars */}
      <section className="w-full py-20 bg-white dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-full">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB3PXs83D1jkSp_jurz2k8J4ElQ6EuLmInkMCN6jynoPMkScopqb3U9gxBSlmVa5SSdVUuST9QUzTYOrI7FYZYb3zaXY7VQ-BTU-HZHGoV210w-ABGvaPkwt33dTd3YLlGYkzi_FYBu7iwfjBo5dy8k3yw1QTW-D85rcE5CI1I7auPhuSd_7GuORXDCxpATvzLy75ggJuSHPDBJVeTBCY9MDtfrN0EFYYxI0rOfSFWYNSxKm7au_CmFQOHwNi-DOQHsSUnwCzl61Ck")',
                }}
              ></div>
              <div className="absolute inset-0 bg-primary/80 mix-blend-multiply opacity-60"></div>
            </div>
            <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-6 ">
                <span className="material-symbols-outlined text-primary text-xl dark:text-white">
                  verified
                </span>
                <span className="text-sm font-bold uppercase tracking-wider text-primary dark:text-white">
                  Featured Initiative
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-6 leading-tight">
                GROW Program
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-10">
                Our premier accelerator tailored for women-led startups and professionals looking to break the glass ceiling. We combine rigorous training, mentorship, and access to capital to accelerate professional journeys.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="flex items-center justify-center rounded-lg h-12 px-8 bg-primary text-white text-sm font-bold hover:bg-white hover:text-primary border-2 border-primary transition-colors">
                  Apply to GROW
                </button>
                <button className="flex items-center justify-center rounded-lg h-12 px-8 bg-transparent border-2 border-gray-200 dark:border-gray-600 text-primary dark:text-white text-sm font-bold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  See Success Stories
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Individual Stories Grid */}
      <section className="w-full py-16 bg-surface-light dark:bg-[#0f111a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-primary dark:text-white text-3xl md:text-4xl font-bold leading-tight tracking-tight">
              Inspiring Journeys
            </h2>
            <Link
              className="hidden sm:flex items-center gap-2 text-primary font-bold text-sm hover:underline"
              href="#"
            >
              View All Stories{" "}
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Story Card: Hiqmat */}
            <div className="group flex flex-col bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="h-64 overflow-hidden relative">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAPQ-cTUku5JPRypvy3Ylamp8bt_XT-nQfzk9CL2YPoGgry3KvHqO3LsDjtYciyhx2kj3o-jraScRzHiRoCIs8egujbwb3Op7BFjmRvFNYf5y7XdBRGWRhKihYg-ZOG8f-2_pmcZEB-rGlpD7u0KYVIxAjF6oG6TIzhMoUz3CeYVbbcP3lL0QHLAWFLE1Qcc8SvY1TA7fgmlspY_ljnQCheVVBgJomjCfrmFvGKlFoYgM2D7ULLB4EKnWUOmMN7IJirWe4wlK5CPpHA")',
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="mb-4">
                  <span className="bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                    Alumni Spotlight
                  </span>
                </div>
                <h3 className="text-xl font-bold text-primary dark:text-white mb-3">
                  Hiqmat: From Curiosity to Code
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                  "Before Paahibu, coding felt like magic—inaccessible and distant." Today, Hiqmat builds market-ready apps, proving that with the right tools, curiosity can become a career.
                </p>
                <a
                  className="inline-flex items-center text-primary font-bold text-sm hover:gap-2 transition-all"
                  href="#"
                >
                  Read Hiqmat's Full Journey{" "}
                  <span className="material-symbols-outlined text-sm ml-1">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
            {/* Story Card: Gifty */}
            <div className="group flex flex-col bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="h-64 overflow-hidden relative">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB7b9mpuMO7HVhEZUJ5RDHwBmw5XotQJpbF_4iHat9b3qrsjF-nrfLX5eF-Kkp1PODtQIOfShiRihtQDunz5dIDVw73rJxXLu_QSGbGbRZi7m_MSeFwgNECMAqlfk1Qsc2FHC5lRwyaPnpUJtmQRc2uyISZTN8ogPyX95PbEstOgRvz3S7fhl1jIMBzVHnxPlaAaaGdzxf01j91oA9_16O36yKJqaI67fXXVsttW1Wer2y239U4M2kZQP8qP0tHHBMcg1I36jq7-8iq")',
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="mb-4">
                  <span className="bg-purple-50 dark:bg-purple-900/40 text-purple-600 dark:text-purple-300 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                    Entrepreneurship
                  </span>
                </div>
                <h3 className="text-xl font-bold text-primary dark:text-white mb-3">
                  Gifty: Digital Doors for Artisans
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                  Gifty didn't just learn to code; she built a bridge. Her platform now connects rural artisans directly to global markets, transforming her community's local economy.
                </p>
                <a
                  className="inline-flex items-center text-primary font-bold text-sm hover:gap-2 transition-all"
                  href="#"
                >
                  See Gifty's Impact{" "}
                  <span className="material-symbols-outlined text-sm ml-1">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
            {/* Story Card: Rose */}
            <div className="group flex flex-col bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="h-64 overflow-hidden relative">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAD3I90nuTJX8INtl8DWSSXR3BHrqEK6byqC_HW1q7XPE5bXwfwVguR5K7N9DJjYYhU0Cm0kjVViwRBGmtPjV_KcZsmrfAURMpoNTQ9wEd6QKoW8LXXBL9LhLrtGICn4CYywI4RXn2cDqxCmG8vNDZT464ZvgiIXNP_RUmOxOO9YqSWe_vbmANGa7njzRCHhogq62fzohB7KmFAMenZ21UO1C-lCv4_ZGy3ht0V2TpGOe58y0_dMnkoHq_IB7QeKrpTO7iS6EQ2IR8H")',
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="mb-4">
                  <span className="bg-green-50 dark:bg-green-900/40 text-green-600 dark:text-green-300 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                    Leadership
                  </span>
                </div>
                <h3 className="text-xl font-bold text-primary dark:text-white mb-3">
                  Rose: The Multiplier Effect
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                  True impact multiplies. As a lead mentor, Rose has already guided 50+ students through their first lines of code, creating a ripple effect of empowerment.
                </p>
                <a
                  className="inline-flex items-center text-primary font-bold text-sm hover:gap-2 transition-all"
                  href="#"
                >
                  Meet Rose{" "}
                  <span className="material-symbols-outlined text-sm ml-1">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
            {/* Story Card: Mckeown */}
            <div className="group flex flex-col bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="h-64 overflow-hidden relative">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCF1oju_9Qeef6-5SvW0NcLh6LIm0ODI-eZzRviJ733zOgUHfL28NpSn6CywaTbe65ad6es92XWEiQr4fk9IX0PrrpFuSC62D_S7LuJ1LuBil28axJD956TvNEwfSKfIW8PGmh9N-3PuUMRCTzh9VRT19BEbiXnWMQjCua7x1en9WpbX3rpshzSEOPFUYX6OSRZWy4DYsPllb8o9p5U5RTlgwYp1CrAfLOSOpbinxl98GFFy1h5iuIPPut2ishWsaFy2MhjXBrqGtrF")',
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="mb-4">
                  <span className="bg-orange-50 dark:bg-orange-900/40 text-orange-600 dark:text-orange-300 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                    Career Success
                  </span>
                </div>
                <h3 className="text-xl font-bold text-primary dark:text-white mb-3">
                  Mckeown: Breaking Barriers
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                  From classroom to boardroom. Mckeown secured a pivotal role at a major telecom firm, proving that talent knows no gender—only opportunity.
                </p>
                <a
                  className="inline-flex items-center text-primary font-bold text-sm hover:gap-2 transition-all"
                  href="#"
                >
                  Follow Mckeown's Path{" "}
                  <span className="material-symbols-outlined text-sm ml-1">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
            {/* Program Extension Card */}
            <div className="group flex flex-col bg-primary rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-primary relative">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <span className="material-symbols-outlined text-9xl text-white">
                  extension
                </span>
              </div>
              <div className="p-10 flex flex-col flex-1 justify-center z-10">
                <div className="mb-6">
                  <span className="bg-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm tracking-wide">
                    Expansion
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Bridging the Digital Divide
                </h3>
                <p className="text-white/90 text-lg leading-relaxed mb-10">
                  We're going beyond the classroom. Discover our satellite hubs and mobile learning units that are bringing digital literacy to the most remote villages.
                </p>
                <button className="w-full bg-white text-primary font-bold py-3.5 px-6 rounded-xl hover:bg-gray-100 transition-colors shadow-sm">
                  View Our Roadmap
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Annual Impact & Visual Carousel Section */}
      <section className="w-full py-20 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/3">
              <h2 className="text-primary dark:text-white text-3xl font-bold leading-tight mb-4">
                Annual Impact Report
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-10">
                Transparency and results are at our core. Download our detailed
                annual report to see exactly how your support translates into
                changed lives.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 p-5 border border-gray-100 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 hover:border-primary/50 transition-all cursor-pointer group shadow-sm">
                  <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg text-red-500 dark:text-red-400">
                    <span className="material-symbols-outlined">
                      description
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-primary dark:text-white group-hover:text-primary transition-colors">
                      2025 Impact Report
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      PDF Download • 4.2 MB
                    </p>
                  </div>
                  <span className="material-symbols-outlined ml-auto text-gray-400 group-hover:text-primary transition-colors">
                    download
                  </span>
                </div>
                <div className="flex items-center gap-4 p-5 border border-gray-100 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 hover:border-primary/50 transition-all cursor-pointer group shadow-sm">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg text-blue-500 dark:text-blue-400">
                    <span className="material-symbols-outlined">bar_chart</span>
                  </div>
                  <div>
                    <p className="font-bold text-primary dark:text-white group-hover:text-primary transition-colors">
                      2025 Financial Overview
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      PDF Download • 1.8 MB
                    </p>
                  </div>
                  <span className="material-symbols-outlined ml-auto text-gray-400 group-hover:text-primary transition-colors">
                    download
                  </span>
                </div>
              </div>
            </div>
            {/* CSS-only horizontal scroll / Carousel visual */}
            <div className="lg:w-2/3 overflow-hidden w-full">
              <div className="flex gap-6 overflow-x-auto pb-8 snap-x hide-scrollbar px-2">
                <div className="min-w-[300px] h-[400px] snap-center rounded-2xl overflow-hidden relative shadow-md">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform hover:scale-105 duration-700"
                    style={{
                      backgroundImage:
                        'linear-gradient(to top, rgba(0,0,0,0.8), transparent), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAI127nPXtcZwKUTj87r-N0rKQ3qlZD5Xq41G73xOkXTr_mSDCXx_WusW7pXJ3jEbpBkFjIKFOI3mZOCYRRpb3DB8LBmKHVVmwa3uOsxNaaoxRMIuoNdssyk24Z859-48WVZ8JsDxzahJd9OqguSHei3zU7WUY06VXilRqAxJandfkYPhDPosa-Zq9qCGqklXQ_WcoKCbFE8Z9a5lq3V5fQ5Uzn4C_f7FJ_b0ywqSyOCijhuEAtSEV6Pd-mVujHZfeV63eD91ndhrqc")',
                    }}
                  ></div>
                  <div className="absolute bottom-0 left-0 p-8">
                    <p className="text-white font-bold text-xl mb-1">
                      Coding for Kids
                    </p>
                    <p className="text-white/80 text-sm">
                      Early education initiative
                    </p>
                  </div>
                </div>
                <div className="min-w-[300px] h-[400px] snap-center rounded-2xl overflow-hidden relative shadow-md">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform hover:scale-105 duration-700"
                    style={{
                      backgroundImage:
                        'linear-gradient(to top, rgba(0,0,0,0.8), transparent), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCcnXf8pewYc8bKFd6nCrt0VefJUJcOMGORbeUdobQFae27sedng_FOFYDfz9qApICwbzxS88wIM6aupyZX7CAZbPS7_riquslz12s8pvISCrdIQRAyI6FcYJRWbVrdsFZRW3ojkUFa7GCDuOU9MMMVgTQ49tZ1cODUJrcfCF4WjOBpGrY4y57utR0OXUvpsKTSOMTHWi1nGKwmeA8revq2YQgvixMOQlZX-GMBY1sx8TeWsBl61wu93CBrHnuDHunNYPC42aCdAepy")',
                    }}
                  ></div>
                  <div className="absolute bottom-0 left-0 p-8">
                    <p className="text-white font-bold text-xl mb-1">
                      Community Building
                    </p>
                    <p className="text-white/80 text-sm">Fostering networks</p>
                  </div>
                </div>
                <div className="min-w-[300px] h-[400px] snap-center rounded-2xl overflow-hidden relative shadow-md">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform hover:scale-105 duration-700"
                    style={{
                      backgroundImage:
                        'linear-gradient(to top, rgba(0,0,0,0.8), transparent), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAXF_-HeQBbnRfUdzMCac-vlJfugLJ263YcdeXVmdu5tymRUMXPk6eWMfppBYnwq5KISUeCb6hPdnoQVaDina652-FW37HNQRQ5pHPmBN09TiUV6bxCZUwGbYfgRYso11NY7AXsMqDHP10pFPg-aAuZTSuH32k_xlmIeRaMd1kGt50rzSZZzYNmoUj3KH3j1y4ZAol1T5hY_4oa0kbFzN2euDRHLU5tFCgy3T063cYfYyrVEBrhaxcHC3EhuyNHidZNGjVqzAei6dIp")',
                    }}
                  ></div>
                  <div className="absolute bottom-0 left-0 p-8">
                    <p className="text-white font-bold text-xl mb-1">
                      Hardware Skills
                    </p>
                    <p className="text-white/80 text-sm">
                      Hands-on technical training
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="bg-[#0b0c15] text-white py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">
            Be Part of the Next Story
          </h2>
          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Your contribution helps us extend our programs, reach more remote
            communities, and empower the next generation of women tech leaders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="h-14 px-10 bg-primary hover:bg-white hover:text-primary transition-all rounded-full font-bold text-white shadow-lg text-lg">
              Donate Now
            </button>
            <button className="h-14 px-10 bg-transparent border-2 border-gray-500 hover:border-white hover:bg-white/10 transition-all rounded-full font-bold text-white text-lg">
              Join the Movement
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
