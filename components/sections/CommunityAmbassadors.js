import Button from "@/components/ui/Button";

import Image from "next/image";

export default function CommunityAmbassadors({ members = [] }) {
  const ambassadors = members;

  return (
    <section className="py-20 px-6 md:px-12 bg-background-light dark:bg-background-dark border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="mb-6 md:mb-0">
                <h2 className="text-3xl text-primary dark:text-white">Community Ambassadors</h2>
                <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-lg">
                    Ensuring community voices shape our programs across 30+ communities.
                </p>
            </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {ambassadors.map((ambassador, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm hover:shadow-md transition text-center border border-gray-100 dark:border-gray-700">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 border-2 border-primary dark:border-primary/50 relative">
                        <Image alt={ambassador.name} className="object-cover"
                            src={ambassador.image_url} fill sizes="96px" />
                    </div>
                    <h3 className="text-primary dark:text-white">{ambassador.name}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{ambassador.role}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
