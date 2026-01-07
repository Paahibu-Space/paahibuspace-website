import PageHero from "@/components/sections/PageHero";
import ImpactStories from "@/components/sections/ImpactStories";
import ImpactReport from "@/components/sections/ImpactReport";

export default function ImpactPage() {
  return (
    <>
      <PageHero
        title={
          <h1 className="text-4xl lg:text-6xl font-black leading-tight tracking-tight text-neutral-dark">
            Making a Real <span className="text-secondary">Difference</span>
          </h1>
        }
        description="We believe in the power of measurement and transparency. Every program, workshop, and mentorship session is designed to deliver tangible results."
        className="bg-background-light"
      />
      <ImpactStories />
      <ImpactReport />
    </>
  );
}
