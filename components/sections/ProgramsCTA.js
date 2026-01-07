import Button from "@/components/ui/Button";

export default function ProgramsCTA() {
  return (
    <section className="py-20 bg-primary text-white text-center relative overflow-hidden">
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-secondary rounded-full opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-purple-500 rounded-full opacity-20 pointer-events-none"></div>
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready to Transform Your Future?
        </h2>
        <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Join one of our programs today. Whether you are a student, a graduate,
          or an entrepreneur, there is a place for you at Paahibu Space.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="secondary" size="lg" className="text-lg py-4 h-auto">Apply Now</Button>
          <Button variant="white-outline" size="lg" className="text-lg py-4 h-auto">Become a Partner</Button>
        </div>
      </div>
    </section>
  );
}
