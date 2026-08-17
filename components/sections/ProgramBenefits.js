import Image from "next/image";
import Button from "@/components/ui/Button";

export default function ProgramBenefits({ title, description, benefits, image, ctaText = "Apply Now" }) {
  return (
    <section className="w-full flex justify-center py-20 px-4 sm:px-10 lg:px-40 bg-white dark:bg-gray-900">
      <div className="flex flex-col md:flex-row max-w-[1080px] flex-1 gap-12 items-center">
        <div className="flex-1 space-y-8">
          <div>
            <h2 className="text-3xl font-display text-neutral-dark dark:text-white leading-tight mb-4">
              {title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              {description}
            </p>
          </div>
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="mt-1 min-w-[24px] text-green-500">
                  <span className="material-symbols-outlined">check_circle</span>
                </div>
                <div>
                  <h4 className="text-neutral-dark dark:text-white">
                    {benefit.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="pt-4">
            <Button size="lg" className="shadow-lg">
              {ctaText}
            </Button>
          </div>
        </div>
        <div className="flex-1 w-full md:h-auto min-h-[400px]">
          <div className="relative w-full h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              alt={title ? `Participants of ${title}` : "Paahibu Space program participants"}
              src={image}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                <p className="text-white font-bold text-xl">&quot;Paahibu gave us the tools to build our own future.&quot;</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
