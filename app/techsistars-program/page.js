import PageHero from "@/components/sections/PageHero";
import ProgramObjectives from "@/components/sections/ProgramObjectives";
import ProgramGains from "@/components/sections/ProgramGains";
import ProgramRoadmap from "@/components/sections/ProgramRoadmap";
import MentorsGrid from "@/components/sections/MentorsGrid";
import Testimonials from "@/components/sections/Testimonials";
import ApplySteps from "@/components/sections/ApplySteps";
import FAQ from "@/components/sections/FAQ";
import Button from "@/components/ui/Button";

export default function TechsiStarsProgram() {
  const objectives = [
    {
      title: "Foster Mentorship",
      description:
        "Creating dynamic spaces for knowledge exchange between experts and learners.",
      iconKey: "mentorship",
    },
    {
      title: "Skill Development",
      description:
        "Practical, hands-on sessions in coding, product design, and cybersecurity.",
      iconKey: "skill",
    },
    {
      title: "Career Exposure",
      description:
        "Direct exposure to diverse tech career paths and industry opportunities.",
      iconKey: "career",
    },
    {
      title: "Community Building",
      description: "Building a supportive network of future female tech leaders.",
      iconKey: "community",
    },
  ];

  const gainsPoints = [
    {
      title: "Experienced Female Mentors",
      description:
        "Be matched with leaders working across various tech fields who understand your journey.",
    },
    {
      title: "Tech Career Exposure",
      description:
        "Explore paths from software development to product design, data science, and cybersecurity.",
    },
    {
      title: "Hands-on Capacity Building",
      description:
        "Participate in tech challenges and skill development workshops that build your portfolio.",
    },
  ];

  const roadmapSteps = [
    {
        title: "Weeks 1-2: Foundations",
        description: "Introduction to computer science concepts, digital literacy, and setting up your development environment. Virtual sessions twice a week.",
        tag: "Virtual"
    },
    {
        title: "Weeks 3-4: Core Skills",
        description: "Intensive deep-dive into HTML/CSS, JavaScript basics, and UI/UX principles. Building your first static website.",
        tag: "Hybrid"
    },
    {
        title: "Weeks 5-6: Project & Demo",
        description: "Working in teams to solve a local problem using technology. Final demo day presentation to partners.",
        tag: "In-Person"
    }
  ];

  const mentors = [
    {
        name: "Sarah K.",
        role: "Senior Software Engineer",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwwQGpPbgeZdv4VpBuPJqpgv1eXq9Iuwh-Wle289rr6_xLU7CwoUiHeeEHAXxfjIbkNLku_oGyPzGt-Iak_65jjzyPQAw8Lx_P9G8mFWK1bJlD6TQ4OZKUYna9jUESpKWvv5kBaN28ZKGxvmFv4vS37hzjjzYXVczYkuVpbIZ-8qLjuCDVmrGizMOS3OoeX05wNUHcV1IT-raj-u8Dafn6dcbnI9JcdCkGCHnuE3ygXRj4DTzNTQm6Sm4wEBpAEuR1hz9LnCL5zL8",
        quote: "Mentorship is a two-way street. I learn as much from my mentees as they do from me."
    },
    {
        name: "Purity A.",
        role: "Data Scientist",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAm5f1uLTeNUe-VpljOa0FEKVob1Xe-j8ylgCV_Kr4GnlN0A8tmRjtClk7Ei8Uo4KG5iGdSw_xC8iqQcBLpPR9p7isltC_rAsDaia61AXoMk5QZr5weJieSHcKbVToXToO-s6ttulaIfb6HalaQ_Kgur9lZKzYfQFzxR9-WUL4t2YxVHoPHlYPOJPxBl-FOc72We3rrnwWB0SXzG6YAsDFmHu6M3PRj8Seic_I_cw69bOHmyB_ANfJ2th6jymgYtQTQ2qbRWphwsmo",
        quote: "Helping women navigate data careers is about rewriting the future code."
    },
    {
        name: "David M.",
        role: "Founder at AgriTech Solutions",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBmNf0sXuvW68GH5xcNB3UhBlczGWHsVKq2Y9uNgPeFEZx_94Wxyo9OzkCsOXs8y2FjlPKFDbEHU5ed_SV2t5M9wfQnzhwZlv-nRvqcWZ1sVMuGAg0qZYefmSIAMNykPcRDMRxdX0BPEYTu7m_6XQ4HOaz4RoN7y37oQi0-mTsYtl4maAEojxfA03ePvYoiXLLhchVneFDSVwDtgn7VC-jb1ybqWF0MAbnYmv0LrCUi6t8VdMdJLvCVunY7FAPIQzWNkoR2DC4gZXA",
        quote: "Innovation starts with a curious mind. I'm here to fuel that curiosity."
    },
    {
        name: "Grace O.",
        role: "Product Manager at FinServe",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-q36ijlZbwR7Wsi_XNFI8u8WkuYe_aCapxpopCg7hP1dHlDutzDYpKcudMwgYR7qMSmWBIojZdmdFgZgBzDG6ZAD3Qtllkj6W-5ybikF1xdYNt9v77cSEKsm0XfsFuQJnizLJl5pDmS9jsgkrtlTVJoU20wHuoPz5IbP0w-n0jGJ8EJbyPyPvHHhsVxbJa9Ws1QpHGLU-tbJIYr4P4MwW6tfCz9_G8TAIRkDbIntuoRIijVS5SWk2zt2LuLKyCctENP65TyUSzAk",
        quote: "Building products that solve real problems is my passion."
    }
  ];

  const testimonials = [
    {
        author: "Amina K.",
        role: "Frontend Developer",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqpYuLax1etq3JMXeQwKzi7ecenS_oNwL-NPhRdLpK5A_eNXhbYB49ujSl3jHyAIQwj6dvNpSZdXmK-DPYeKt21S3aHAidh-iqJscMGme1aVEkjQIY0y-AEw2CG9nfPrQ3ZpViSs2QO3gdUH-W6Mc8a-WDtu5Bn43golXevqX5Qy8-AAKYfTVFVZescEtspJgLfBee6bmZiWXDmVHdolBzqSNC5pOcIxMsaDwWnVKpuQ8F9RZ3KGSXpJyy2cmS3KZzTjvfOVIkvRc",
        quote: "The mentorship I received during TechsiStars was life-changing. My mentor didn't just teach me to code; she taught me how to navigate the industry as a woman."
    },
    {
        author: "Sarah M.",
        role: "Product Designer",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9K9kTZh73nJx_sKfNEWg8RaN3LM9bwOeSsLWSNcwA9cgBhmuQ9s6Hv4MBOwEYjWB3ghars_1zi_Whq9EPNKbXdiphJTXALw1OY6YVL6LkPW3FO0-W2kiZhJeCSGaF6lWNAAOScvYLOje0fCdX9SVal4sDYdC65Dp1MzV_glzF-VJrWlUvHcKO_pjmjzcdTmLLQbrzZpq4_mWGSlPNn6evm5so2yEg8w2oDiz8DItZi79Y08qh5WmxJmjUJI9CYGmuT-y_C9WkVNM",
        quote: "Before this program, I thought tech wasn't for me. Now, I'm leading design sprints at a fintech startup. The confidence I gained is my biggest asset."
    }
  ];

  const applySteps = [
    {
        title: "Submit Online Application",
        description: "Fill out the form with your details and a short essay."
    },
    {
        title: "Assessment & Interview",
        description: "Complete a basic logic test and a virtual interview."
    },
    {
        title: "Onboarding",
        description: "Get matched with a mentor and join the orientation."
    }
  ];

  const faqs = [
    {
        question: "Do I need prior coding experience?",
        answer: "No prior experience is required for our foundational track. We look for passion, commitment, and a willingness to learn."
    },
    {
        question: "Is this program free?",
        answer: "Yes, thanks to our partners, full scholarships are available for all admitted participants."
    },
    {
        question: "What is the time commitment?",
        answer: "Expect to dedicate about 6-10 hours per week, including live sessions and self-paced project work."
    }
  ];

  return (
    <>
      <PageHero
        title={
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display">
            TechsiStars <span className="text-secondary">Mentorship</span>
          </h1>
        }
        description="Igniting the passion for technology in young women through mentorship, skills training, and community support."
        className="bg-primary"
      >
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button size="lg" className="h-12 px-8">Apply for Cohort 4</Button>
            <Button variant="outline" size="lg" className="h-12 px-8 text-white border-white hover:bg-white hover:text-primary">Download Brochure</Button>
        </div>
      </PageHero>
      <ProgramObjectives objectives={objectives} />
      <ProgramGains 
        title="What You Will Gain"
        description="Beyond technical skills, TechsiStars prepares you for the holistic challenges of a career in technology."
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuAkzEgNQXZZvwrJk-rXsoRiVh2pVuI_hkIfP16t_VH01czrlKJ1YJZ76XU7reSKFIEpDnyH1HiIqs36goO3k5IG7maipHTVgzq-4YRcXoDD8487RYdJ3U9uEC75TJyJtvn9iqjKcVPdY0ns8f3K2qeU1p26PfhvbS4ki8eNd-Sfy5yh0EeF6t39437JvvjtWkERbD46bK-OT4_fdOpZOZiujxQNeGeWkKqNsNE5VTZ_RpwN488uhLALvV5WmC9kCyDE4VcaqJe4kFs"
        points={gainsPoints}
      />
      <ProgramRoadmap steps={roadmapSteps} />
      <MentorsGrid mentors={mentors} />
      <Testimonials testimonials={testimonials} />
      <ApplySteps steps={applySteps} />
      <FAQ faqs={faqs} />
    </>
  );
}
