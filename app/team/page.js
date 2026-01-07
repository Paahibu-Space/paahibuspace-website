import PageHero from "@/components/sections/PageHero";
import LeadershipTeam from "@/components/sections/LeadershipTeam";
import AdvisoryBoard from "@/components/sections/AdvisoryBoard";
import GlobalReach from "@/components/sections/GlobalReach";
import TeamCTA from "@/components/sections/TeamCTA";

export default function TeamPage() {
  return (
    <>
      <PageHero
        title={
          <>
            <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-4 block">
              Who We Are
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-display">
              Meet The Team
            </h1>
          </>
        }
        description="The passionate individuals driving our mission to empower African women in technology. We are innovators, mentors, and leaders."
        backgroundImage="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80"
        className="bg-secondary"
      />
      <LeadershipTeam />
      <AdvisoryBoard />
      <GlobalReach />
      <TeamCTA />
    </>
  );
}
