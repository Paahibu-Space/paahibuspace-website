import Hero from "@/components/sections/Hero";
import Story from "@/components/sections/Story";
import Mission from "@/components/sections/Mission";
import WhyWomenInTech from "@/components/sections/WhyWomenInTech";
import Stats from "@/components/sections/Stats";
import GrowCommunity from "@/components/sections/GrowCommunity";
import Team from "@/components/sections/Team";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center w-full">
      <Hero />
      <Story />
      <Mission />
      <WhyWomenInTech />
      <Stats />
      <GrowCommunity />
      <Team />
    </main>
  );
}
