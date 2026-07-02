import Image from "next/image";
import { fetchAPI } from "@/lib/api";

export default async function PartnersSection() {
  const partners = await fetchAPI("/api/v1/partners");

  return (
    <div className="py-24 bg-white dark:bg-background-dark/80 relative overflow-hidden transition-colors">
      <div className="absolute left-0 w-full h-[500px] bg-gradient-to-b from-primary/5 dark:from-primary/10 to-transparent -z-10 pointer-events-none">
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col items-center text-center max-w-[800px] mx-auto mb-10">
              <h2 className="text-primary dark:text-indigo-400 text-sm font-bold uppercase tracking-wider mb-3">Our Network</h2>
              <h2 className="text-[#161019] dark:text-white text-3xl md:text-4xl font-extrabold leading-tight tracking-[-0.015em] px-4 pb-4">
                Trusted By Leading Organizations
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-[600px]">
                Together with our partners, we are redefining the future of technology for women across Africa through education, mentorship, and opportunity.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-12 p-4 mb-16 items-center justify-items-center">
              {partners && partners.length > 0 ? partners.map((partner, index) => (
                <div key={index} className="group flex items-center justify-center w-full h-[80px] p-2 transition-all duration-300 relative">
                  <Image 
                    alt={`${partner.name} Partner Logo`} 
                    className="object-contain"
                    src={partner.logo_url} 
                    fill
                    sizes="20vw"
                  />
                </div>
              )) : (
                 <p className="text-gray-500 col-span-full">Loading partners...</p>
              )}
            </div>
            <div className="flex flex-col items-center gap-6">
              <button className="flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-transparent border-2 border-primary dark:border-white text-primary dark:text-white hover:bg-primary hover:text-white dark:hover:bg-white dark:hover:text-primary transition-colors duration-300 text-base font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">Become a Partner</span>
              </button>
            </div>
      </div>
    </div>
  );
}
