"use client";

import { useState } from "react";

const components = [
  {
    num: "01",
    title: "Fellow Recruitment & Five-Day Residential Training",
    body: "Thirty young women aged 18 to 30 are selected through an open, competitive Expression of Interest process and complete a five-day training programme. The curriculum covers technology-facilitated gender-based violence and Ghana's legal framework; practical digital safety skills; media and information literacy; AI and deepfake recognition; survivor-centred safeguarding; ethical storytelling; digital civic leadership; and community facilitation.",
  },
  {
    num: "02",
    title: "School Deployment & Workshop Facilitation",
    body: "Each Fellow is deployed to a designated partner school for thirteen weeks. She facilitates a minimum of three structured digital safety and media literacy workshops per school, reaching girls aged 13 to 24, and engages communities through sessions in hair salons and dagebile rotational savings groups — spaces where women gather by choice and where social trust already exists.",
  },
  {
    num: "03",
    title: "Digital Walansi Clubs",
    body: "A student-led Digital Walansi Club is established in each partner school, formally constituted under a Club Constitution with elected student leadership — President, Vice-President, Secretary, and Safety Champion. The Club is governed by students and designed to function independently after the Fellow's deployment ends, ensuring programme continuity beyond the funded cycle.",
  },
  {
    num: "04",
    title: "Digital Walansi Corners",
    body: "The Digital Walansi Corner is a dedicated school space integrated into existing infrastructure. It houses the Digital Reflection Box — a secure, padlocked anonymous reporting mechanism for students to raise digital safety concerns — and functions as a recognised space for identity, self-expression, and aspiration, reminding students that their academic journey extends beyond grades.",
  },
  {
    num: "05",
    title: "Bi-Weekly Fellow Development Sessions",
    body: "Throughout the three-month deployment, all Fellows participate in bi-weekly virtual professional development and peer reflection sessions. Sessions rotate across four categories: technical deepening on digital rights; facilitation and communication skills; personal and professional development; and guest speaker sessions with practitioners from partner organisations.",
  },
  {
    num: "06",
    title: "Inter-School Quiz Competition",
    body: "An inter-school Digital Safety and Media Literacy Quiz Competition brings student teams from all five partner schools together, reinforcing learning, celebrating student achievement, and building a shared community of knowledge across the programme's school network.",
  },
];

export default function ComponentsAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div className="border-t border-gray-200 dark:border-white/10">
      {components.map((c, i) => (
        <div key={c.num} className="border-b border-gray-200 dark:border-white/10">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center gap-6 py-6 text-left group hover:bg-gray-50 dark:hover:bg-white/5 transition-colors px-2"
          >
            <span className="text-xs font-bold text-secondary w-8 shrink-0">{c.num}</span>
            <span className="flex-1 text-lg font-bold text-primary dark:text-white group-hover:text-secondary transition-colors">
              {c.title}
            </span>
            <span className="material-symbols-outlined text-gray-400 shrink-0">
              {open === i ? "expand_less" : "expand_more"}
            </span>
          </button>
          {open === i && (
            <div className="pl-14 pr-6 pb-8">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">{c.body}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
