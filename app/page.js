import HeroSlider from "@/components/sections/HeroSlider";
import QuoteSection from "@/components/sections/QuoteSection";
import PhilosophySection from "@/components/sections/PhilosophySection";
import ProgramsShowcase from "@/components/sections/ProgramsShowcase";
import FemalePerspective from "@/components/sections/FemalePerspective";
import ImpactSection from "@/components/sections/ImpactSection";
import CommunityStories from "@/components/sections/CommunityStories";
import PartnersSection from "@/components/sections/PartnersSection";
import NewsletterSection from "@/components/sections/NewsletterSection";

export default function Home() {
  return (
    <main className="">
      <HeroSlider />
      <QuoteSection />
      <PhilosophySection />
      <ProgramsShowcase />
      <FemalePerspective />
      <ImpactSection />
      <CommunityStories />
      <PartnersSection />
      <NewsletterSection />
    </main>
  );
}
