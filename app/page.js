import HeroSlider from "@/components/sections/HeroSlider";
import QuoteSection from "@/components/sections/QuoteSection";
import PhilosophySection from "@/components/sections/PhilosophySection";
import ProgramsShowcase from "@/components/sections/ProgramsShowcase";
import FemalePerspective from "@/components/sections/FemalePerspective";
import ImpactSection from "@/components/sections/ImpactSection";
import CommunityStories from "@/components/sections/CommunityStories";
import PartnersSection from "@/components/sections/PartnersSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import { fetchAPI } from "@/lib/api";

export default async function Home() {
  const stories = await fetchAPI("/api/v1/stories") || [];

  return (
    <main className="">
      <HeroSlider />
      <QuoteSection />
      <PhilosophySection />
      <ProgramsShowcase />
      <FemalePerspective />
      <ImpactSection />
      <CommunityStories stories={stories} />
      <PartnersSection />
      <NewsletterSection />
    </main>
  );
}
