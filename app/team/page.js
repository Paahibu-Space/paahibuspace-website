import PageHero from "@/components/sections/PageHero";
import LeadershipTeam from "@/components/sections/LeadershipTeam";
import AdvisoryBoard from "@/components/sections/AdvisoryBoard";
import GlobalReach from "@/components/sections/GlobalReach";
import CommunityAmbassadors from "@/components/sections/CommunityAmbassadors";
import TeamCTA from "@/components/sections/TeamCTA";
import { fetchAPI } from "@/lib/api";

export default async function TeamPage() {
  const team = await fetchAPI("/api/v1/team") || [];
  
  // Helper to safely get the category name whether it's a string or an object (API usually returns relation object)
  const getCategory = (member) => {
    if (typeof member.category === 'object' && member.category !== null) {
      return member.category.name || "";
    }
    return member.category || "";
  };

  const leadership = team.filter(m => getCategory(m) === 'Leadership');
  const advisory = team.filter(m => getCategory(m) === 'Advisory Board');
  const ambassadors = team.filter(m => getCategory(m) === 'Ambassadors');
  const globalReach = team.filter(m => getCategory(m) === 'Global Reach');

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
        backgroundImage="/assets/images/bg/team-with-grow.webp"
        className="bg-secondary"
      />
      {/* Pass filtered members to respective components */}
      <LeadershipTeam members={leadership} />
      <AdvisoryBoard members={advisory} />
      <CommunityAmbassadors members={ambassadors} />
      <GlobalReach members={globalReach} />
      <TeamCTA />
    </>
  );
}
