import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function ProgramOverview({ title, description, image, features }) {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-secondary-dark dark:text-secondary font-bold tracking-wider uppercase text-sm mb-2 block">
              Overview
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-dark dark:text-white mb-6">
              {title}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {description}
            </p>
            {features && (
              <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary mt-1">
                      check_circle
                    </span>
                    <span className="text-gray-700 dark:text-gray-200">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            )}
            <Button size="lg" className="shadow-lg">
              Apply Now
            </Button>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={image}
                alt={title}
                className="w-full h-auto object-cover"
                width={0}
                height={0}
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-secondary/10 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
