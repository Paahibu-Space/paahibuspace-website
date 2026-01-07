import PageHero from "@/components/sections/PageHero";
import Testimonials from "@/components/sections/Testimonials";
import ProgramOverview from "@/components/sections/ProgramOverview";
import Button from "@/components/ui/Button";

export default function GrowProgramPage() {
  const testimonials = [
    {
      author: "Amina K.",
      role: "Tech Founder",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDHU5x5r74aRsO-M90yUoArKZDOlyRqcK8WZZ-JB1kgAhzB7ixi5Ry6ywv30_QQPQ970tM9ZB-xdUAdre8Bz4T_OQRE-EJjqehIpeXkglCOTUizJyw_qLrB-UzpT7luvMKS6_I8GpzjxKDsoY8JkfXJn3Wj_zhRPFa7_JgaMD3SoHaVDydoG72i68AT875B6EavFNXXEAEBMhg6BmWu2Bvtih-ktUmGAL-viItERjsQo_lBAdnNOjBSX9l9G-MCPuYXekQKs8FtCbA",
      quote:
        "The mentorship I received helped me pivot my startup during a critical time. The community here is unmatched—truly sisters in tech.",
    },
    {
      author: "Chioma O.",
      role: "Freelance Designer",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDgSfLhkS24XlmdkGHqXsyT6gwD4oJpQLSSY4QztPQppCSIQmRSd3eylvnUA0EWlOzzH-0nknexjtwrLS6wH73oIXLDhH_zJeBeZKsBGM-oWcg2WxKQdNzFzdi6HJKJ9wTCoIlyyK7HjHO6F-XdlarsB_dC9G5OZFyNIUfF5MlCeBrXqe2iP7GUj0Gvk7IPw9GrR5pqFUB-RPo36HWEdFMwfMTb_2jz6Obe9F6UDnzXoVBXdDAde0vH_M2yLYSRfivhbIjuAVpcMSg",
      quote:
        "I found my first major international client through a GROW networking event. This program gave me the confidence to charge what I'm worth.",
    },
    {
      author: "Zainab A.",
      role: "Policy Analyst",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAO_w_MMQ48gJ3q3rNx2zN3W3J_YKZZfS1XlCUJH-wIFM-5rQUbPM2Wg1GojKgOMRT-lKGQTfdQZbWq4R96EPSTpP1McI_UTw97nQelRJwG79q-xaaIx17weXl_9QoXNU2QOgXlDP7-uwppDO_SQgvL8KSSgdaNJpPST3tRe929luj49IICYz7iV0hLQDYMJQZxCn6ITblugcY2HuhmjUTJVN_VSmhYqyq-Qq22_V3AJNO5CSl6LLPYVi3KS9YqsCjougr7-Rycb4Q",
      quote:
        "Advocating for digital rights is tough, but doing it with the backing of the GROW network makes our voice so much stronger in policy circles.",
    },
  ];

  const features = [
    "Business Acceleration: Scale your startup with expert guidance.",
    "Executive Coaching: 1-on-1 sessions with seasoned leaders.",
    "Access to Capital: Connect with investors and funding opportunities.",
    "Global Network: Join a community of high-achieving women.",
  ];

  return (
    <>
      <PageHero
        title={
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display">
            GROW <span className="text-secondary">Program</span>
          </h1>
        }
        description="Join a community dedicated to your professional growth. Access exclusive resources, workshops, and peer support to accelerate your journey."
        className="bg-primary"
      />
      
      <ProgramOverview 
        title="Accelerate Your Growth"
        description="The GROW program is our premier accelerator tailored for women-led startups and professionals looking to break the glass ceiling. We combine rigorous training, mentorship, and direct access to opportunities."
        features={features}
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuB3PXs83D1jkSp_jurz2k8J4ElQ6EuLmInkMCN6jynoPMkScopqb3U9gxBSlmVa5SSdVUuST9QUzTYOrI7FYZYb3zaXY7VQ-BTU-HZHGoV210w-ABGvaPkwt33dTd3YLlGYkzi_FYBu7iwfjBo5dy8k3yw1QTW-D85rcE5CI1I7auPhuSd_7GuORXDCxpATvzLy75ggJuSHPDBJVeTBCY9MDtfrN0EFYYxI0rOfSFWYNSxKm7au_CmFQOHwNi-DOQHsSUnwCzl61Ck"
      />

      <div className="py-20 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
                <div className="p-6">
                    <div className="text-5xl md:text-6xl font-black text-primary mb-2">85%</div>
                    <div className="text-xl font-medium text-white">Career Advancement</div>
                    <p className="text-white/60 text-sm mt-2">Members report salary increase or promotion</p>
                </div>
                <div className="p-6">
                    <div className="text-5xl md:text-6xl font-black text-primary mb-2">40%</div>
                    <div className="text-xl font-medium text-white">Business Growth</div>
                    <p className="text-white/60 text-sm mt-2">Reported by participants within 1 year</p>
                </div>
                <div className="p-6">
                    <div className="text-5xl md:text-6xl font-black text-primary mb-2">20+</div>
                    <div className="text-xl font-medium text-white">Policy Engagements</div>
                    <p className="text-white/60 text-sm mt-2">Advocating for digital inclusion</p>
                </div>
            </div>
        </div>
      </div>

      <Testimonials testimonials={testimonials} />

      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-5 text-center">
            <h2 className="text-neutral-dark font-display text-4xl md:text-5xl font-bold mb-6">Ready to GROW?</h2>
            <p className="text-gray-600 text-xl mb-10 max-w-2xl mx-auto">
                Join a community that is reshaping the narrative of African women in technology and business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="shadow-lg">Apply to GROW</Button>
                <Button variant="outline" size="lg" className="hover:bg-primary hover:text-white border-primary text-primary">Learn More About Impact</Button>
            </div>
        </div>
    </section>
    </>
  );
}
