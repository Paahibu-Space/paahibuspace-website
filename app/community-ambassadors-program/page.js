import PageHero from "@/components/sections/PageHero";
import ProgramObjectives from "@/components/sections/ProgramObjectives";
import Button from "@/components/ui/Button";

export default function CommunityAmbassadorsPage() {
  const objectives = [
    {
      title: "Grassroots Impact",
      description: "Taking technology and digital literacy to the last mile.",
      iconKey: "community",
    },
    {
      title: "Local Leadership",
      description: "Empowering local champions to lead change in their communities.",
      iconKey: "leadership",
    },
    {
      title: "Sustainable Change",
      description: "Creating long-term impact through community-owned initiatives.",
      iconKey: "support",
    },
  ];

  return (
    <>
      <PageHero
        title={
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display">
            Community <span className="text-secondary">Ambassadors</span>
          </h1>
        }
        description="Empowering local leaders to drive digital transformation in their communities. Be the change you want to see."
        className="bg-primary"
      >
         <Button size="lg" variant="secondary" className="mt-8">Become an Ambassador</Button>
      </PageHero>
      <ProgramObjectives objectives={objectives} />
    </>
  );
}
