import PageHero from "@/components/sections/PageHero";
import ProgramObjectives from "@/components/sections/ProgramObjectives";
import ImpactSpotlight from "@/components/sections/ImpactSpotlight";
import ProgramGallery from "@/components/sections/ProgramGallery";
import ProgramCTA from "@/components/sections/ProgramCTA";
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

  const galleryImages = [
    {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXP3jLj4PGTOB7PRHiM7H9_l0e8WF2jMItFeaCLzsnUVSMiAW-lc6e0McNp4AS9gq_jlwZBl0zeTRxBgu7y92YVPftMkhW03vgvg0h7JTmF4nxXcv80P91L5gr6ox_QcIAQha46HCImr3pWkqLerdIXQ7fmBqyb9ut6wyXvKE40ndyo6X1JA_RBPd0485JZi-WwQ4l9gLOyl995wMpqbMLb1G8dPj9G4-hyZ6jDAOIDODl7_-y6WeCHTSu89JfSsgunvFkxIODk_S0",
        alt: "Outdoor Digital Literacy Class",
        title: "Outdoor Digital Literacy Class",
        tag: "Training"
    },
    {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCxOt3DUEFE_IH6iIQIy7HbwYXGb4oJeQ9ZNE9ukCc95tASSBYpuFpIPLC0f9TnGqt31pNrD6jiCR3iQJK2_XLyHzLebHM-p_ny01Z78rw9V2f87i2IYbAABEP7gHAT5U9CicbocbvafkwkgbamSTEGDH_OCpQt3v3ZpJsAqJk5hlmNQcrZXnfjaLRtbQw_OkDB95fV6WrjU0EKH_89EGtzXj3A3ZMVXbActz_vSBbGRuSqexrvLxUlSa1yp8Ffl1iTI7sK0bdGoZW5",
        alt: "Mobile Money Tools",
        title: "Mobile Money Tools"
    },
    {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1F3Q6gnayM32ep05hPRouDodCbQUmR_I9vFi03iWaywB3TokB-EWXljiTy0xeveT0c1hqV6hUDGEfBdJn60A3Tf5nxCsg5wozCaC7-jTQ44z_a4ArrS3h3A_zbx8rHcK0PsGExfewHWvbz9vtnOJuvV4piUY2KWj0NJiSQsQScrLYUUU1_vknnRISixF20vp7DKskDK74qQTwojmvbB4BtAKjh4EG8kiLsPbsz_K4yMKxJvrx9qgClwSPTivpnxg0KVFVQWINLJ3t",
        alt: "Empowerment",
        title: "Empowerment"
    },
    {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCoKYpieAcvktKt6Zf9xVFHy9EMgaWQx-NAM7FRiT2bD9lHyfS-zQii-vjYAuI6CDlHofv7yRWC9mIuXJTBapIYxTGNR72VFVYZsEm6TUFr8iwe3mY0qQ3TwZnFA7zqwBo8ZLMQTYH6kXOmAZwhfEFZSWfd0K10GAORrspZ2nZa5yB7ftwjYRYqiFe3t7QFvRfRzSBr80ZbyWcz7ZDazv_HNfCV9BWRjrvCNMsDY0HrtfFBIYMKwHSb1bOaR3s-1hAPUE8tzgrd2RVN",
        alt: "Peer Mentorship",
        title: "Peer Mentorship"
    }
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
      <ImpactSpotlight 
        title="Meet Amina: From Market Stall to Online Enterprise"
        story="Amina, a 34-year-old fabric weaver, used to rely solely on foot traffic in her local market. Seasonal rains often meant zero income for weeks."
        backgroundStory="Through the WiDEI program, she digitized her inventory. We helped her set up a WhatsApp Business profile and taught her how to photograph her intricate patterns. Today, Amina receives orders from across the country, coordinates delivery via mobile money, and has hired two apprentices."
        quote="My fabrics are now sold in the capital city, but I still live in my village."
        personName="Amina"
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuBq_q_j5Yc3t4o7nU8wz7S9tC0qR8vE6xL1kZ2yF3mG4H5p-I7J9rK0sT8uV1bX5W9dY6aZ3e4fH8g0iJ1kL2mN3oP4qQ5rS6tU7vW8xY9z-A0bC1dD2e3fG4h5i6jK7lM8n9oP0qR1s2t3uV4wX5y6z7A8b9c0d1e2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t7u8v9w0x1y2z3"
      />
      <ProgramGallery images={galleryImages} />
      <ProgramCTA
        title="Help Us Bridge the Gap"
        description="Your support provides data bundles, smartphones, and training materials for women in rural communities."
        primaryAction={{ label: "Donate Now" }}
        secondaryAction={{ label: "Become a Partner" }}
      />
    </>
  );
}
