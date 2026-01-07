import PageHero from "@/components/sections/PageHero";
import ProgramObjectives from "@/components/sections/ProgramObjectives";
import ImpactAction from "@/components/sections/ImpactAction";
import ProgramBenefits from "@/components/sections/ProgramBenefits";
import ProgramCTA from "@/components/sections/ProgramCTA";
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

  const benefits = [
    {
        title: "Global Certification",
        description: "Receive a recognized certificate of leadership upon program completion."
    },
    {
        title: "Exclusive Mentorship",
        description: "Get paired with industry leaders in technology and social entrepreneurship."
    },
    {
        title: "Resource Kit & Swag",
        description: "Access to presentation decks, branding materials, and official Paahibu merchandise."
    },
    {
        title: "Annual Summit Invite",
        description: "An all-expenses-paid trip to our annual leadership summit for top performers."
    }
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
      <ImpactAction />
      <ProgramBenefits 
        title="Why Join the Movement?"
        description="Beyond making an impact, you'll grow your career and network."
        benefits={benefits}
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuDgr64FCmHsqAbAkC-di4Bi-_yg7aS13CBSC_1XbAIUbEQwMVUoR2WXmhsd-tJUyF8ivS2AYOEES2Gblr0Pv-ltp1IO2rlmctWNOLbzu50xR4neMstjrFYb5ZbtsaO59VreJdVkzC_9Q3hyAt6dHSYgbQJRQVld82S7tScUcEEkEYWqhaWrMv4lkU88b7WgzcqbxT05XtQ9FxjBFrDrzXquQM1S8mKGslSK0EKnieNLbdDCt8bQBnlnqm_qMGFoNSBoEMFhOTk0QvG9"
        ctaText="Apply to be an Ambassador"
      />
      <ProgramCTA
        title="Ready to Lead?"
        description="Join a network of changemakers. Apply today to become a Community Ambassador and start driving impact in your region."
        primaryAction={{ label: "Apply to Be a Community Ambassador" }}
        secondaryAction={{ label: "Learn More About Roles" }}
      />
    </>
  );
}
