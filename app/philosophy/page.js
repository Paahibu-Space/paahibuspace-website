import PageHero from "@/components/sections/PageHero";
import PhilosophyValues from "@/components/sections/PhilosophyValues";
import Button from "@/components/ui/Button";

export default function PhilosophyPage() {
  return (
    <>
      <section className="relative w-full min-h-[500px] flex items-center justify-center bg-primary overflow-hidden py-20 px-4 md:px-0">
         <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80')" }}></div>
         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div className="relative order-2 md:order-1 hidden md:block">
                 <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                    <img 
                      alt="Women in tech collaboration" 
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuB58QEJ1u-QhLOp7wkGmCkkpsICP1UOPB9bKMAuzkjARmFRgTjdbjiZw0x-0tq9VDOkb3NtbkKvFpPsFyDDWuA0v02NheC5QoBBn9jXVr75Um5o3OiEzvk3L15ET1Ik1gDr2WdkgBKvjAbqa2stq6yxje5CNxikgHHWcRpIzYNBy5atcugqS0GOxE1dsKbYQ37JiOFt-HBrq1Ofe7VEf9DpwxiDZyKNP9KpPO0bNbV1OeC2CuoxaqTQU0Uu47tQPwWjUSoSRzXvAnU" 
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
      <PhilosophyValues />
    </>
  );
}
