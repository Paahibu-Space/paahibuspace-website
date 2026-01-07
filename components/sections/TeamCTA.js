import Button from "@/components/ui/Button";

export default function TeamCTA() {
  return (
    <section className="py-24 px-6 md:px-12 bg-secondary text-white relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80')",
        }}
      ></div>
      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Passionate about empowering women?
        </h2>
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
          We are always looking for talented individuals to join our core team
          or volunteer as mentors. Help us shape the future of African tech.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" size="lg" className="rounded-full h-auto py-4 text-lg">View Open Positions</Button>
          <Button variant="white-outline" size="lg" className="rounded-full h-auto py-4 text-lg">Contact Us</Button>
        </div>
      </div>
    </section>
  );
}
