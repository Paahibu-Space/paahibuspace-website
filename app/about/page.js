import PageHero from "@/components/sections/PageHero";
import Story from "@/components/sections/Story";
import Mission from "@/components/sections/Mission";
import WhyWomenInTech from "@/components/sections/WhyWomenInTech";
import Stats from "@/components/sections/Stats";
import GrowCommunity from "@/components/sections/GrowCommunity";
import LeadershipTeam from "@/components/sections/LeadershipTeam";
import { fetchAPI } from "@/lib/api";

export const metadata = {
  title: "About Us",
  description: "Meet the youth-led, women-centered team behind Paahibu Space and learn how we're bridging the gender gap in digital access, economic empowerment, and leadership across Africa.",
};

export default async function AboutPage() {
    // Helper to safely get the category name whether it's a string or an object (API usually returns relation object)
  const getCategory = (member) => {
    if (typeof member.category === 'object' && member.category !== null) {
      return member.category.name || "";
    }
    return member.category || "";
  };
  const team = await fetchAPI("/api/v1/team") || [];
  const leadership = team.filter(m => getCategory(m) === 'Leadership');
  
  return (
    <>
      <PageHero
        title={
          <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] md:text-6xl">
            Empowering the Next Generation of <br className="hidden md:block"/> African Women in Tech
          </h1>
        }
        description="Breaking barriers and building futures through technology, mentorship, and entrepreneurship."
        backgroundImage="/assets/images/bg/team-with-grow.webp"
      />
      <Story />
      <Mission />
      <WhyWomenInTech />
      <Stats />
      <LeadershipTeam members={leadership} />
      <GrowCommunity />
    </>
  );
}
