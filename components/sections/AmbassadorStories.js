"use client";

import Image from "next/image";

import { useState } from 'react';

const stories = [
  {
    quote: "The program gave me the tools to mobilize over 500 women for financial literacy workshops.",
    name: "Sarah Mensah",
    role: "Community Ambassador, Kumasi",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7dUx4OF3DHNjXNMSutLyi324BNyRtt5eT_CBFD8yGMgskTNnq80sTAK--W_DAJaYlfgOb_NtFPlPUnfqR1EZ3GOLvvtneBpRwDm7O4pG1KiA2NFD9oxlDr1XlYQdV-F3z0_3wwhSALy4ShgIlEuc6uVXJKNEQfaZbc3d-Ztyx3Aukxoz-Kb4F9DwA9q1i0dcAKw4nxXTPdPy04DuULc6KVcVuKxg2FagMB2-lcfe81YdVVjJ-bVqpVI72I16pfytg3XdZW0J0AtA",
    project: {
      title: "Project: Digital Market Access",
      desc: "Sarah identified that women in her local market were losing sales due to lack of digital payment options. She partnered with local fintechs to bridge the gap.",
      stats: [
        { value: "500+", label: "Women Trained" },
        { value: "30%", label: "Income Increase" }
      ]
    }
  },
  {
    quote: "We are building a network of support that transcends borders, empowering one woman at a time.",
    name: "Grace Nakato",
    role: "Community Ambassador, Uganda",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDTKitB-AANTmSdNVUu4qKFfF2f1SGkPtelx8QFj99goEjamkmXzrClK5MKs3e37IJTzcyUY2cwywfQNKy1eBxZ-MglhVdSPxK6vmzRxX92ZGrSm-Fe2eZGLKFjhfP0Ff6Su_4RFaxzr9t8KjzqNjwFxO8QllEliflXr6O3AciEI7R8l1X6j3Qcn2xSbuHk6f4kAQ7MyIvrUF1GaVyIBhDskWYeMB4cQgURNw-KkQdCxDAHZtFYyety6QuIDXDDA5GKYd_OnvJZmo",
    project: {
      title: "Project: Cross-Border Trade",
      desc: "Grace leveraged the WiDiB curriculum to teach artisans how to export their crafts using social commerce platforms.",
      stats: [
        { value: "300+", label: "Artisans Onboarded" },
        { value: "25%", label: "Export Growth" }
      ]
    }
  },
  {
    quote: "Seeing young girls code for the first time is why I do this every day.",
    name: "Wanjiru Kamau",
    role: "Community Ambassador, Kenya",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdM6GX4VWnpX_qgKYr5N3sm-oCA_4NyxoVIQMiDhvhivQLToZW5FvQLCCHTXN1AH55SwfzVgMCLtHd2GABuNSEW1we3UttU1CrY759YtuutpTJmlqHUeb7enFDAlzenbXQepOFuqgL4xNzGsiEp7gUIsC2ItPYyYH5pH-R6e0lR-vytJDCm90DxakhIz_v8-58HjIKh_e5Qv52z265G26Kdt4HMOQZfMnTdecd2eUwM4LCg61Ktv2ygUIca02nOqBqSl0b-pA8JX4",
    project: {
      title: "Project: Code for Girls",
      desc: "Wanjiru established weekend coding bootcamps in Nairobi slums to give young women a headstart in tech careers.",
      stats: [
        { value: "150+", label: "Girls Mentored" },
        { value: "100%", label: "Job Placement" }
      ]
    }
  }
];

export default function AmbassadorStories() {
  const [activeStory, setActiveStory] = useState(0);

  const nextStory = () => setActiveStory((prev) => (prev + 1) % stories.length);
  const prevStory = () => setActiveStory((prev) => (prev - 1 + stories.length) % stories.length);

  return (
      <section className="py-20 bg-[#0b1120] text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-secondary/20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-96 w-96 rounded-full bg-secondary/10 blur-3xl"></div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex items-center gap-2 mb-8 text-secondary font-bold uppercase tracking-wider text-sm">
                    <span className="material-symbols-outlined text-lg">star</span>
                    Impact Stories
                </div>
                
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8 animate-fade-in" key={activeStory}>
                        <h2 className="text-4xl font-extrabold leading-tight min-h-[120px]">
                            &quot;{stories[activeStory].quote}&quot;
                        </h2>
                        <div className="flex items-center gap-4">
                            <Image alt={stories[activeStory].name} className="rounded-full object-cover border-2 border-secondary"
                                src={stories[activeStory].image} width={64} height={64} />
                            <div>
                                <p className="font-bold text-lg">{stories[activeStory].name}</p>
                                <p className="text-gray-400 text-sm">{stories[activeStory].role}</p>
                            </div>
                        </div>
                        <div className="flex gap-4 pt-4">
                            <button onClick={prevStory} className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                                <span className="material-symbols-outlined">arrow_back</span>
                            </button>
                            <button onClick={nextStory} className="h-10 w-10 rounded-full bg-secondary border border-secondary flex items-center justify-center hover:bg-orange-600 transition-colors">
                                <span className="material-symbols-outlined text-[#0b1120]">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                     {/* Mini Case Study Card */}
                     <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm animate-fade-in" key={`card-${activeStory}`}>
                        <div className="mb-4 inline-flex items-center gap-2 rounded bg-green-500/20 px-3 py-1 text-xs font-medium text-green-300">
                            <span className="h-2 w-2 rounded-full bg-green-400"></span>
                            Success Story
                        </div>
                        <h3 className="text-2xl font-bold mb-4">{stories[activeStory].project.title}</h3>
                        <p className="text-gray-300 mb-6 leading-relaxed min-h-[80px]">
                            {stories[activeStory].project.desc}
                        </p>
                        <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                            {stories[activeStory].project.stats.map((stat, i) => (
                                <div key={i}>
                                    <p className="text-3xl font-bold text-secondary">{stat.value}</p>
                                    <p className="text-sm text-gray-400">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
      </section>
  );
}
