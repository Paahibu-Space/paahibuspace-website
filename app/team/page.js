import DirectorMessage from "@/components/sections/DirectorMessage";
import LeadershipTeam from "@/components/sections/LeadershipTeam";
import AdvisoryBoard from "@/components/sections/AdvisoryBoard";
import GlobalReach from "@/components/sections/GlobalReach";
import CommunityAmbassadors from "@/components/sections/CommunityAmbassadors";
import TeamCategorySection from "@/components/sections/TeamCategorySection";
import TeamCTA from "@/components/sections/TeamCTA";
import { fetchAPI } from "@/lib/api";

export const metadata = {
  title: "Our Team",
  description: "Meet the leadership team, advisory board, and community ambassadors driving Paahibu Space's mission across Africa.",
};

// Maps a team category's slug to the bespoke section component used to render it.
// Any category created in the admin CMS that isn't listed here still renders
// automatically, using the generic TeamCategorySection as a fallback — see below.
const CATEGORY_SECTIONS = {
  'leadership': LeadershipTeam,
  'advisory-board': AdvisoryBoard,
  'ambassadors': CommunityAmbassadors,
  'global-reach': GlobalReach,
};

export default async function TeamPage() {
  const [team, categories] = await Promise.all([
    fetchAPI("/api/v1/team"),
    fetchAPI("/api/v1/team/categories"),
  ]);

  const members = team || [];

  // Helper to safely get the category slug whether it's a string or an object (API returns the relation object)
  const getCategorySlug = (member) => {
    if (typeof member.category === 'object' && member.category !== null) {
      return member.category.slug || "";
    }
    return "";
  };

  // Categories are the source of truth for which sections exist and in what order —
  // nothing is hardcoded here, so a category added in the admin CMS shows up automatically.
  const orderedCategories = categories && categories.length > 0
    ? [...categories].sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
    : [];

  const sections = orderedCategories.map((category) => ({
    slug: category.slug,
    title: category.name,
    Component: CATEGORY_SECTIONS[category.slug] || TeamCategorySection,
    members: members.filter((m) => getCategorySlug(m) === category.slug),
  }));

  return (
    <>
      <DirectorMessage />
      {/* Sections are rendered in the order configured for each category in the admin CMS */}
      {sections.map(({ slug, title, Component, members }) => (
        <Component key={slug} title={title} members={members} />
      ))}
    </>
  );
}
