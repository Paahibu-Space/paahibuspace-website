import PageHero from "@/components/sections/PageHero";
import ProgramObjectives from "@/components/sections/ProgramObjectives";
import ProgramRoadmap from "@/components/sections/ProgramRoadmap";
import ProgramCommunity from "@/components/sections/ProgramCommunity";
import ProgramCTA from "@/components/sections/ProgramCTA";
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

  const roadmapSteps = [
    {
      title: "Digital Foundations & Branding",
      description: "Setting up your digital presence and defining your unique brand voice.",
      tag: "Week 1"
    },
    {
      title: "E-Commerce & Sales Channels",
      description: "Learning to sell online via social media, websites, and marketplaces.",
      tag: "Week 2"
    },
    {
      title: "Financial Management",
      description: "Bookkeeping basics, pricing models, and managing cash flow.",
      tag: "Week 3"
    },
    {
      title: "Customer Growth Strategy",
      description: "Marketing techniques to attract and retain loyal customers.",
      tag: "Week 4"
    },
    {
      title: "Pitch & Launch",
      description: "Crafting your business pitch and launching your digital campaign.",
      tag: "Week 5"
    }
  ];

  const communityBenefits = [
      "Weekly mental wellness check-ins",
      "Supportive peer accountability groups",
      "Lifetime access to the WiDiB Alumni network"
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
      <ProgramRoadmap steps={roadmapSteps} />
      <ProgramCommunity 
        title={
           <>
             More Than Just a Course, It's a <span className="text-secondary">Sisterhood</span>.
           </>
        }
        description="We believe that entrepreneurship can be lonely, but it doesn't have to be. Our program includes dedicated well-being sessions, peer support circles, and mental health resources to ensure you thrive personally as your business grows."
        benefits={communityBenefits}
      />
      <ProgramCTA
        title="Ready to Scale Your Institution?"
        description="Join a Cohort of visionary leaders transforming the African business landscape."
        primaryAction={{ label: "Apply Now - It's Free" }}
        secondaryAction={{ label: "Download Syllabus" }}
      />
    </>
  );
}
