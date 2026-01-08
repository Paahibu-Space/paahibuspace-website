import PageHero from "@/components/sections/PageHero";
import ProgramsGrid from "@/components/sections/ProgramsGrid";
import RegionalImpact from "@/components/sections/RegionalImpact";
import ProgramsCTA from "@/components/sections/ProgramsCTA";

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        title={
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Empowering Innovation <br />
            <span className="text-secondary">Through Action</span>
          </h1>
        }
        description="Our programs are designed to break barriers and create opportunities for women and girls in the Upper West Region and beyond."
        className="bg-primary"
      />
      <ProgramsGrid />
      <RegionalImpact />
      <ProgramsCTA />
    </>
  );
}
