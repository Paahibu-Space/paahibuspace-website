import Image from "next/image";
import Button from "@/components/ui/Button";

export default function RegionalImpact() {
  return (
    <section className="py-20 bg-gray-100 dark:bg-background-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <span className="text-secondary-dark dark:text-secondary font-bold tracking-widest uppercase text-sm">
              Where We Work
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-neutral-dark dark:text-white mt-2 mb-6 leading-tight">
              Rooted in the Upper West Region
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed text-lg">
              Our impact begins at home. While our digital reach is global, our
              physical programs are deeply rooted in Wa, Ghana. We are building a
              tech ecosystem right here in the Upper West Region of Ghana, proving that innovation
              knows no geography.
            </p>
            {/* <ul className="space-y-4 mb-10 text-left inline-block lg:block">
              <li className="flex items-start gap-4 text-gray-700 dark:text-gray-300">
                <span className="material-symbols-outlined text-secondary text-2xl shrink-0">
                  check_circle
                </span>
                <span className="text-lg">Physical Hub in Wa</span>
              </li>
              <li className="flex items-start gap-4 text-gray-700 dark:text-gray-300">
                <span className="material-symbols-outlined text-secondary text-2xl shrink-0">
                  check_circle
                </span>
                <span className="text-lg">Community Ambassadors Network</span>
              </li>
              <li className="flex items-start gap-4 text-gray-700 dark:text-gray-300">
                <span className="material-symbols-outlined text-secondary text-2xl shrink-0">
                  check_circle
                </span>
                <span className="text-lg">Partnerships with local schools</span>
              </li>
            </ul> */}

          </div>
          
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <div className="relative max-w-lg mx-auto lg:ml-auto">
              <div className="bg-white dark:bg-zinc-800 p-3 sm:p-4 rounded-3xl shadow-2xl relative z-10 lg:rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden">
                  <Image
                    alt="Students collaborating on digital projects in Ghana"
                    className="object-cover"
                    src="/assets/images/programs/women-trained.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 40vw, 500px"
                  />
                </div>
              </div>
              
              {/* Floating Stat - Adjusted for Mobile */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-8 sm:-left-8 bg-secondary text-white p-5 sm:p-8 rounded-2xl shadow-2xl z-20 max-w-[200px] sm:max-w-xs animate-float">
                <p className="font-black text-3xl sm:text-5xl leading-none mb-1 shadow-sm">10,000+</p>
                <p className="text-xs sm:text-sm font-bold uppercase tracking-wider opacity-90">
                  Women & Girls Trained
                </p>
              </div>
              
              {/* Decorative background element */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
