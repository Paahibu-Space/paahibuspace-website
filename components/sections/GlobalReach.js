import Button from "@/components/ui/Button";
import Image from "next/image";

export default function GlobalReach() {
  return (
    <section className="py-20 px-6 md:px-12 bg-background-light dark:bg-background-dark overflow-hidden relative transition-colors duration-300">
      <div className="absolute -right-20 top-20 w-96 h-96 bg-primary opacity-5 dark:opacity-10 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Map Visualization Side */}
        <div className="relative order-2 lg:order-1 h-[500px] w-full bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-inner flex items-center justify-center transition-colors duration-300">
          <div className="relative w-full h-full max-w-md mx-auto">
            <Image
                src="/images/africa_map_outline.png"
                alt="Map of Africa"
                className="object-contain opacity-40 dark:opacity-30 hue-rotate-180 dark:hue-rotate-0 pointer-events-none"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
            />
            
            {/* Map Pin 1 */}
            <div className="absolute top-[48%] left-[22%] group cursor-pointer">
              <div className="w-4 h-4 bg-secondary rounded-full relative z-10 shadow-lg border-2 border-white dark:border-gray-800"></div>
              <div className="absolute inset-0 w-4 h-4 bg-secondary rounded-full animate-ping opacity-75"></div>
              <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-48 bg-white dark:bg-gray-700 p-3 rounded-lg shadow-xl opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none transform scale-100 lg:scale-95 lg:group-hover:scale-100 border border-gray-100 dark:border-gray-600">
                <Image
                  className="rounded-full object-cover mb-2 border-2 border-secondary mx-auto"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAZbF5VlnKbopcsRZuxFJdkgKE0pW2CjTaBf1JB8_ScM44mXs_EvkyqGKAUrmgEXqryuyIM_cIvUATOMiv4ztC15xFZc_2wB2bWGoT0uXS4hYRPww7abTGYP4xzimiYx_oARiVeBqYFHJMNffmi_Tan7beMPqVmyRJEEWzpknh-kng6epgStH41FTc_WQCASQTTFByfrke6b0FPiTSzjII0DX3GAurImxaTfeFsh__xUe1D-jSWOw2xpHZQ4lUVnRxx6E8us9VF4s"
                  alt="Efya A."
                  width={48}
                  height={48}
                />
                <p className="text-xs font-bold text-center text-primary dark:text-white">
                  Efya A.
                </p>
                <p className="text-[10px] text-center text-gray-500 dark:text-gray-300 uppercase tracking-wide">
                  Accra, Ghana
                </p>
                 <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-white dark:bg-gray-700 rotate-45 border-r border-b border-gray-100 dark:border-gray-600"></div>
              </div>
            </div>

             {/* Map Pin 2 */}
             <div className="absolute top-[52%] right-[22%] group cursor-pointer">
                <div className="w-4 h-4 bg-secondary rounded-full relative z-10 shadow-lg border-2 border-white dark:border-gray-800"></div>
                <div className="absolute inset-0 w-4 h-4 bg-secondary rounded-full animate-ping opacity-75 delay-300"></div>
                <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-48 bg-white dark:bg-gray-700 p-3 rounded-lg shadow-xl opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none transform scale-100 lg:scale-95 lg:group-hover:scale-100 border border-gray-100 dark:border-gray-600">
                    <Image className="rounded-full object-cover mb-2 border-2 border-secondary mx-auto"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6Ev7_sk4bifE-MvoBhkDNXwmWTJhXszgzTW9AoygJoAsF88l-whTkwoHWWa6DJ8eSmju5Ytc5EdF8tzrNXJKilD1B2_tfT7P2Yn-U4RFOYoBf2X3nz2wFN1J1hsoTt7V1zmwzidCiB9oktx-1xVIQUOX8qWJywGgzk9vpv98sfQduwqEjrl_rkGfNaz-WOR8S7o_dhsTUUJkDT-Sjy6_W5Z9YN_YxXbI_oAOb0yj51_BKmZ39a00TWDWJXfdm7v9RFxZhiaYP9Do" 
                        alt="Wanjiku K."
                        width={48}
                        height={48}
                    />
                    <p className="text-xs font-bold text-center text-primary dark:text-white">Wanjiku K.</p>
                    <p className="text-[10px] text-center text-gray-500 dark:text-gray-300 uppercase tracking-wide">Nairobi, Kenya</p>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-white dark:bg-gray-700 rotate-45 border-r border-b border-gray-100 dark:border-gray-600"></div>
                </div>
            </div>

          </div>
          
           <div className="absolute bottom-6 left-8 bg-white/90 dark:bg-gray-700/90 p-4 rounded-xl shadow-lg backdrop-blur-sm max-w-[200px] border border-gray-100 dark:border-gray-600">
                <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 bg-secondary rounded-full"></div>
                    <span className="text-xs font-bold text-gray-700 dark:text-gray-200">Active Chapters</span>
                </div>
                <p className="text-[10px] text-gray-500 dark:text-gray-400 leading-tight">Driving grassroots change and ensuring community voices shape our programs across 30+ communities.</p>
            </div>
        </div>

        {/* Text Content Side */}
        <div className="order-1 lg:order-2">
          <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block">
            Our Reach
          </span>
          <h2 className="text-3xl md:text-4xl text-primary dark:text-white mb-6">
            Community Ambassadors
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Our Community Ambassadors are pivotal to our mission, ensuring that community voices are included in all levels of decision-making. They represent Paahibu Space on campuses and in cities across Africa, providing crucial feedback that informs our programmatic design and implementation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="secondary" className="justify-center">
              Meet All Ambassadors
              <span className="material-symbols-outlined ml-2 text-sm">
                group
              </span>
            </Button>
            <Button variant="outline" className="justify-center hover:bg-secondary hover:text-white border-secondary text-primary dark:text-white dark:border-gray-500 dark:hover:border-secondary transition-colors">
              Become an Ambassador
              <span className="material-symbols-outlined ml-2 text-sm">
                volunteer_activism
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
