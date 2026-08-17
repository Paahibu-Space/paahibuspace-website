"use client";

import { useState } from "react";

const components = [
  {
    title: "Fellow Training",
    body: "Thirty young women are trained as Digital Walansi Fellows across four core areas: digital skills and safety, AI literacy, Media and Information Literacy (MIL), and the prevention of and response to Technology-Facilitated Gender-Based Violence (TFGBV).",
  },
  {
    title: "School Deployment",
    body: "Fellows are deployed to secondary schools across selected regions in Ghana, where they facilitate learning directly with both students and teachers — bringing digital safety, AI literacy, and MIL skills into the classroom.",
  },
  {
    title: "Digital Walansi Clubs",
    body: "Fellows support Digital Walansi Clubs in each school — sustained spaces for peer learning, digital leadership, and responsible technology use that continue the programme's work between Fellow visits.",
  },
  {
    title: "Walansi Kontonbile Platform",
    body: "Alongside in-person facilitation, students and teachers gain access to Walansi Kontonbile — a responsible AI learning and student-support platform, co-developed with participating schools and Digital Walansi Clubs, that combines AI-supported learning, anonymous digital-safety reporting, and access to trusted professional support.",
  },
  {
    title: "Evidence & Research",
    body: "The programme generates evidence on how young people use AI and digital technologies in Ghanaian secondary schools — the opportunities and risks they encounter, the support they need, and how responsible AI can be integrated into education while protecting their rights, safety, and wellbeing.",
  },
];

export default function ComponentsAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div className="border-t border-gray-200 dark:border-white/10">
      {components.map((c, i) => (
        <div key={c.title} className="border-b border-gray-200 dark:border-white/10">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center gap-6 py-6 text-left group hover:bg-gray-50 dark:hover:bg-white/5 transition-colors px-2"
          >
            <span className="flex-1 text-lg font-bold text-primary dark:text-white group-hover:text-secondary transition-colors">
              {c.title}
            </span>
            <span className="material-symbols-outlined text-gray-400 shrink-0">
              {open === i ? "expand_less" : "expand_more"}
            </span>
          </button>
          {open === i && (
            <div className="pl-2 pr-6 pb-8">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">{c.body}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
