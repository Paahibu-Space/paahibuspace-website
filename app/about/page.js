import PageHero from "@/components/sections/PageHero";
import Story from "@/components/sections/Story";
import Mission from "@/components/sections/Mission";
import WhyWomenInTech from "@/components/sections/WhyWomenInTech";
import Stats from "@/components/sections/Stats";
import GrowCommunity from "@/components/sections/GrowCommunity";

export default function AboutPage() {
  return (
    <>
      <PageHero
        title={
          <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] md:text-6xl max-w-4xl mx-auto">
            Empowering the <br className="hidden md:block"/> Next Generation of <br className="hidden md:block"/><span className="text-secondary">African Women in Tech</span>
          </h1>
        }
        description="Breaking barriers and building futures through technology, mentorship, and entrepreneurship."
        backgroundImage="https://lh3.googleusercontent.com/aida-public/AB6AXuChVnKlRze4PAP6RUwKXPEJVGO_xknBh7I7IrWtys_RrkCQ4JJGANdGSw1-dS2H3ZRz_lTY9XTwnPBmY23bHQsC702gjL3g4BsHLsIookfOrmEGXcMHWDDGggLCt3b6tJMkf06xYQ9PXV0kFuUntURKXaXPC2Rx4RzNtJJq78Va1beJJr8tYKd6B84IcbD_6AzwykNs79skTza8mARXHqYGqtNeBLfh2761q_DUdo__6cbvI9an8L_iS9ER0Pu8ctwIw19Gf8h2NgzA"
      />
      <Story />
      <Mission />
      <WhyWomenInTech />
      <Stats />
      <GrowCommunity />
    </>
  );
}
