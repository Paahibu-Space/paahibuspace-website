import PageHero from "@/components/sections/PageHero";
import StoriesGrid from "@/components/sections/StoriesGrid";

export default function BlogPage() {
  return (
    <>
      <PageHero
        title={
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display">
            Our <span className="text-secondary">Blog</span>
          </h1>
        }
        description="Latest news, updates, and insights from the Paahibu Space team and community."
        className="bg-primary"
      />
      <StoriesGrid />
    </>
  );
}
