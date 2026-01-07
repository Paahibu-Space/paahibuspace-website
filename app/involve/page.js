import PageHero from "@/components/sections/PageHero";
import InvolvePaths from "@/components/sections/InvolvePaths";
import ImpactCommunity from "@/components/sections/ImpactCommunity";
import Button from "@/components/ui/Button";

export default function InvolvePage() {
  return (
    <>
      <PageHero
        title={
          <h1 className="text-4xl lg:text-6xl font-black leading-tight tracking-tight text-neutral-dark">
            Empowering African <span className="text-secondary">Women in Technology</span>
          </h1>
        }
        description="Join the Paahibu Space community to access mentorship, resources, and career growth opportunities tailored for you."
        className="bg-background-light"
      >
        <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
          <Button variant="primary" size="lg" className="h-12 px-8 text-base shadow-md">
            Get Involved
          </Button>
          <Button variant="ghost" size="lg" className="h-12 px-8 text-base bg-[#eee9f1] hover:bg-[#e0dbe5]">
            Learn More
          </Button>
        </div>
      </PageHero>
      <div className="w-full bg-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-neutral-dark text-3xl font-bold leading-tight tracking-tight mb-2">
            Choose Your Path
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Whether you are starting your journey or looking to give back, we
            have a place for you.
          </p>
        </div>
      </div>
      <InvolvePaths />
      <ImpactCommunity />
    </>
  );
}
