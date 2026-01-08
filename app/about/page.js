import PageHero from "@/components/sections/PageHero";
import Story from "@/components/sections/Story";
import Mission from "@/components/sections/Mission";
import WhyWomenInTech from "@/components/sections/WhyWomenInTech";
import Stats from "@/components/sections/Stats";
import GrowCommunity from "@/components/sections/GrowCommunity";
import LeadershipTeam from "@/components/sections/LeadershipTeam";

export default function AboutPage() {
  return (
    <>
      <PageHero
        title={
          <>
            Empowering the Next Generation of <br className="hidden md:block"/> African Women in Tech
          </>
        }
        description="Breaking barriers and building futures through technology, mentorship, and entrepreneurship."
        backgroundImage="https://lh3.googleusercontent.com/aida-public/AB6AXuChVnKlRze4PAP6RUwKXPEJVGO_xknBh7I7IrWtys_RrkCQ4JJGANdGSw1-dS2H3ZRz_lTY9XTwnPBmY23bHQsC702gjL3g4BsHLsIookfOrmEGXcMHWDDGggLCt3b6tJMkf06xYQ9PXV0kFuUntURKXaXPC2Rx4RzNtJJq78Va1beJJr8tYKd6B84IcbD_6AzwykNs79skTza8mARXHqYGqtNeBLfh2761q_DUdo__6cbvI9an8L_iS9ER0Pu8ctwIw19Gf8h2NgzA"
      />
      <Story />
      <Mission />
      <WhyWomenInTech />
      <Stats />
      <LeadershipTeam />
      <GrowCommunity />
    </>
  );
}
