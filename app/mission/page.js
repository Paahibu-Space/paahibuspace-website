import PageHero from "@/components/sections/PageHero";
import DetailedMission from "@/components/sections/DetailedMission";
import CommunityFeatures from "@/components/sections/CommunityFeatures";
import Button from "@/components/ui/Button";

export default function MissionPage() {
  return (
    <>
      <PageHero
        title={
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
            Empowering African <span className="text-secondary">Women in Tech</span>
          </h1>
        }
        description="A professional platform balancing credibility with warm approachability to transform the tech landscape. We are building the future, one line of code at a time."
      >
        <Button variant="secondary" className="h-12 px-8 text-base shadow-lg hover:scale-105 transition-transform">
          Join the Community
        </Button>
        <Button variant="white" className="h-12 px-8 text-base shadow-sm">
          View Programs
        </Button>
      </PageHero>
      <DetailedMission />
      <CommunityFeatures />
    </>
  );
}
