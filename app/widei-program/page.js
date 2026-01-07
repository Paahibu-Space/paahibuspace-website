import PageHero from "@/components/sections/PageHero";
import ProgramObjectives from "@/components/sections/ProgramObjectives";
import Button from "@/components/ui/Button";

export default function WideiProgramPage() {
  const objectives = [
    {
      title: "Digital Innovation",
      description: "Harnessing digital tools to solve local problems and create value.",
      iconKey: "skill",
    },
    {
      title: "Entrepreneurial Spirit",
      description: "Fostering a mindset of ownership and creative problem solving.",
      iconKey: "mentorship",
    },
    {
      title: "Policy Advocacy",
      description: "Championing policies that support women in the digital economy.",
      iconKey: "community",
    },
     {
      title: "Global Connectivity",
      description: "Connecting local innovators with global markets and resources.",
      iconKey: "career",
    },
  ];

  return (
    <>
      <PageHero
        title={
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display">
            WiDEI <span className="text-secondary">Program</span>
          </h1>
        }
        description="Women in Digital Entrepreneurship & Innovation. A collaborative platform fostering creativity, shared growth, and advocacy for digital inclusion policies."
        className="bg-primary"
      >
         <Button size="lg" variant="secondary" className="mt-8">Join the Initiative</Button>
      </PageHero>
      <ProgramObjectives objectives={objectives} />
    </>
  );
}
