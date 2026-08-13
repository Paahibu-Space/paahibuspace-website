import PageHero from "@/components/sections/PageHero";
import LeadershipTeam from "@/components/sections/LeadershipTeam";
import AdvisoryBoard from "@/components/sections/AdvisoryBoard";
import GlobalReach from "@/components/sections/GlobalReach";
import CommunityAmbassadors from "@/components/sections/CommunityAmbassadors";
import TeamCTA from "@/components/sections/TeamCTA";
import { fetchAPI } from "@/lib/api";

export const metadata = {
  title: "Our Team",
  description: "Meet the leadership team, advisory board, and community ambassadors driving Paahibu Space's mission across Africa.",
};

// Maps a team category name to the (differently styled) section component used to render it.
const CATEGORY_SECTIONS = {
  'Leadership': LeadershipTeam,
  'Advisory Board': AdvisoryBoard,
  'Ambassadors': CommunityAmbassadors,
  'Global Reach': GlobalReach,
};

// Fallback order used if the categories API is unavailable.
const DEFAULT_CATEGORY_ORDER = ['Leadership', 'Advisory Board', 'Ambassadors', 'Global Reach'];

export default async function TeamPage() {
  const [team, categories] = await Promise.all([
    fetchAPI("/api/v1/team"),
    fetchAPI("/api/v1/team/categories"),
  ]);

  const members = team || [];

  // Helper to safely get the category name whether it's a string or an object (API usually returns relation object)
  const getCategory = (member) => {
    if (typeof member.category === 'object' && member.category !== null) {
      return member.category.name || "";
    }
    return member.category || "";
  };

  // Order sections by the category's admin-configured `order`, falling back to the default order
  // for any category name that isn't returned by the API (e.g. the API is unreachable).
  const orderedCategoryNames = categories && categories.length > 0
    ? [...categories]
        .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
        .map((c) => c.name)
    : DEFAULT_CATEGORY_ORDER;

  const sections = orderedCategoryNames
    .filter((name) => CATEGORY_SECTIONS[name])
    .map((name) => ({
      name,
      Component: CATEGORY_SECTIONS[name],
      members: members.filter((m) => getCategory(m) === name),
    }));

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
      {/* Sections are rendered in the order configured for each category in the admin CMS */}
      {sections.map(({ name, Component, members }) => (
        <Component key={name} members={members} />
      ))}
      <TeamCTA />
    </>
  );
}
