import PageHero from "@/components/sections/PageHero";
import PhilosophyValues from "@/components/sections/PhilosophyValues";
import Button from "@/components/ui/Button";

export default function PhilosophyPage() {
  return (
    <>
      <section className="relative w-full min-h-[500px] flex items-center justify-center bg-primary overflow-hidden py-20 px-4 md:px-0">
         <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/assets/images/bg/philosophy-bg.png')" }}></div>
         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div className="relative order-2 md:order-1 hidden md:block">
                 <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                    <img 
                      alt="Women in tech collaboration" 
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" 
                      src="/assets/images/conn-emp.png" 
                    />
                 </div>
                 <div className="absolute -bottom-6 -right-6 bg-secondary p-4 rounded-xl shadow-lg hidden lg:block">
                    <span className="material-symbols-outlined text-white text-3xl">diversity_1</span>
                 </div>
            </div>
            <div className="space-y-6 text-center md:text-left order-1 md:order-2">
                 <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                    Hey Sis, You Belong in Tech Too
                 </h1>
                 <p className="text-blue-100 text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
                    At Paahibu Space, we're breaking barriers and creating opportunities for women and girls to thrive in technology, innovation, and entrepreneurship. This is your space to learn, grow, and lead.
                 </p>
                 <Button variant="white-outline" size="lg">Learn More</Button>
            </div>
         </div>
      </section>

      {/* How We Do It Section */}
      <section className="py-20 px-6 md:px-12 bg-white dark:bg-background-dark">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary dark:text-white relative z-10 mb-6">
            How We Do It
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400 mb-16 text-lg leading-relaxed">
            At Paahibu Space, we employ a multi-faceted approach to empowerment, ensuring women and youth are equipped with the holistic support needed to lead in the digital age.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {/* Digital Skills & Entrepreneurship */}
            <div className="bg-orange-50 dark:bg-orange-900/20 p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 border border-orange-100 dark:border-orange-900/30 shadow-sm hover:shadow-md">
              <div className="w-14 h-14 mb-6 text-primary flex items-center justify-center bg-white dark:bg-white/10 rounded-xl shadow-sm">
                <span className="material-symbols-outlined text-3xl">computer</span>
              </div>
              <h3 className="font-display font-bold text-xl text-primary dark:text-white mb-3 leading-tight">
                Digital Skills & Entrepreneurship
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Providing comprehensive training in coding, digital marketing, and business management to build future-ready careers.
              </p>
            </div>

            {/* Policy & Advocacy */}
            <div className="bg-green-50 dark:bg-green-900/20 p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 border border-green-100 dark:border-green-900/30 shadow-sm hover:shadow-md">
              <div className="w-14 h-14 mb-6 text-green-600 dark:text-green-400 flex items-center justify-center bg-white dark:bg-white/10 rounded-xl shadow-sm">
                <span className="material-symbols-outlined text-3xl">campaign</span>
              </div>
              <h3 className="font-display font-bold text-xl text-primary dark:text-white mb-3 leading-tight">
                Policy & Advocacy
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Championing gender-inclusive policies and breaking systemic barriers to ensure equal access to technology.
              </p>
            </div>

            {/* Community & Network Building */}
            <div className="bg-red-50 dark:bg-red-900/20 p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 border border-red-100 dark:border-red-900/30 shadow-sm hover:shadow-md">
              <div className="w-14 h-14 mb-6 text-red-500 dark:text-red-400 flex items-center justify-center bg-white dark:bg-white/10 rounded-xl shadow-sm">
                <span className="material-symbols-outlined text-3xl">groups</span>
              </div>
              <h3 className="font-display font-bold text-xl text-primary dark:text-white mb-3 leading-tight">
                Community & Network Building
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Fostering a supportive ecosystem of peers, mentors, and industry leaders to catalyze growth and collaboration.
              </p>
            </div>

            {/* Mentorship & Leadership */}
            <div className="bg-pink-50 dark:bg-pink-900/20 p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 border border-pink-100 dark:border-pink-900/30 shadow-sm hover:shadow-md">
              <div className="w-14 h-14 mb-6 text-pink-500 dark:text-pink-400 flex items-center justify-center bg-white dark:bg-white/10 rounded-xl shadow-sm">
                <span className="material-symbols-outlined text-3xl">volunteer_activism</span>
              </div>
              <h3 className="font-display font-bold text-xl text-primary dark:text-white mb-3 leading-tight">
                Mentorship & Leadership
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Nurturing the next generation of leaders through personalized guidance from established industry professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <PhilosophyValues />
    </>
  );
}
