import PageHero from "@/components/sections/PageHero";
import ProgramObjectives from "@/components/sections/ProgramObjectives";
import Button from "@/components/ui/Button";

export default function WidibProgramPage() {
  const objectives = [
    {
      title: "Business Leadership",
      description: "Developing the next generation of women business leaders and executives.",
      iconKey: "leadership",
    },
    {
      title: "Institutional Growth",
      description: "Strengthening the capacity of women-led organizations.",
      iconKey: "support",
    },
    {
      title: "Strategic Partnerships",
      description: "Building alliances for sustainable impact and resource mobilization.",
      iconKey: "community",
    },
     {
      title: "Market Access",
      description: "Opening doors to new markets and opportunities for women entrepreneurs.",
      iconKey: "career",
    },
  ];

  return (
    <>
      <PageHero
        title={
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display">
            WIBID <span className="text-secondary">Program</span>
          </h1>
        }
        description="Women in Business and Institutional Development. Empowering women to lead resilient, scalable businesses and institutions."
        className="bg-primary"
      >
         <Button size="lg" variant="secondary" className="mt-8">Join the Network</Button>
      </PageHero>
      <ProgramObjectives objectives={objectives} />
    </>
  );
}
