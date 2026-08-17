"use client";

import { useState } from "react";
import Image from "next/image";

const partnerBenefits = [
  {
    title: "Direct access to grassroots evidence",
    body: "Evidence on how young people are using AI and digital technologies in Ghanaian secondary schools, the opportunities and risks they encounter, and the support they need.",
  },
  {
    title: "A tested, localised MIL model",
    body: "The Digital Walansi training model for digital safety, AI literacy, and media and information literacy — designed for underserved school communities.",
  },
  {
    title: "Gender and youth lens for digital rights",
    body: "A structured, evidence-based model for engaging young people experiencing online harm and TFGBV, and building their agency as digital citizens.",
  },
  {
    title: "Field-based testing of tools",
    body: "Pilot ideas, test communication strategies, and explore integration with the Walansi Kontonbile platform through Digital Walansi Clubs and school workshops.",
  },
  {
    title: "Co-creation of knowledge products",
    body: "Jointly produce policy briefs on responsible AI and digital safety in education, case studies, and research outputs for national and regional platforms.",
  },
  {
    title: "Structured school-based access",
    body: "Access to partner secondary schools, teachers, and the wider network of community actors engaged through the Digital Walansi deployment.",
  },
  {
    title: "Visibility and co-branding",
    body: "Named in all programme documentation, donor reports, social media, and on every Digital Walansi Fellow certificate at graduation.",
  },
  {
    title: "Reach into underserved communities",
    body: "Documented evidence of reach into underserved regions of Ghana — geographies consistently underserved by digital safety and AI literacy programming.",
  },
];

export default function PartnersTabs({ partners = [] }) {
  const [activeTab, setActiveTab] = useState("benefits");

  return (
    <div>
      <div className="flex gap-1 mb-12 border-b border-white/10">
        {["benefits", "funders"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 text-xs font-bold tracking-widest uppercase transition-colors ${
              activeTab === tab
                ? "text-secondary border-b-2 border-secondary"
                : "text-white/40 hover:text-white/70"
            }`}
          >
            {tab === "benefits" ? "What Partners Gain" : "Partners & Funders"}
          </button>
        ))}
      </div>

      {activeTab === "benefits" && (
        <div className="grid md:grid-cols-2 gap-px bg-white/5">
          {partnerBenefits.map((b, i) => (
            <div key={b.title} className="p-8 bg-primary hover:bg-white/5 transition-colors border border-white/5">
              <div className="flex items-start gap-4">

                <div>
                  <h3 className="text-base text-white mb-2 leading-tight">{b.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{b.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === "funders" && (
        <div className="grid md:grid-cols-2 gap-8">
          {partners.length > 0 ? (
            partners.map((p) => (
              <div key={p.id} className="p-10 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-4 mb-6">
                  {p.logo_url ? (
                    <div className="relative w-14 h-14 bg-white rounded-md overflow-hidden shrink-0">
                      <Image src={p.logo_url} alt={p.name} fill className="object-contain p-2" sizes="56px" />
                    </div>
                  ) : (
                    <div className="w-14 h-14 bg-secondary/20 flex items-center justify-center text-secondary font-mono text-xs shrink-0">
                      {p.name.slice(0, 4).toUpperCase()}
                    </div>
                  )}
                  <div>
                    {p.role_label && (
                      <div className="text-xs tracking-widest uppercase text-white/40 font-mono">{p.role_label}</div>
                    )}
                    <div className="text-white font-bold">{p.name}</div>
                  </div>
                </div>
                {p.description && (
                  <p className="text-sm text-white/50 leading-relaxed mb-4">{p.description}</p>
                )}
                {p.website_url && (
                  <a
                    href={p.website_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-secondary hover:text-white transition-colors"
                  >
                    Visit website <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                  </a>
                )}
              </div>
            ))
          ) : (
            <div className="col-span-full py-12 text-center bg-white/5 rounded-2xl border border-dashed border-white/10">
              <p className="text-white/50 font-medium">Partner and funder profiles will appear here once published.</p>
            </div>
          )}
        </div>
      )}

      <div className="mt-16 p-8 border border-secondary/20 bg-secondary/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="text-white font-bold text-xl mb-1">Interested in partnering?</p>
          <p className="text-white/50 text-sm">Reach out to the Paahibu Space team to explore how your organisation can engage.</p>
        </div>
        <a
          href="mailto:programs@paahibuspace.org"
          className="inline-flex items-center gap-3 bg-secondary hover:opacity-90 transition-opacity text-white px-8 py-4 whitespace-nowrap rounded-lg font-bold"
        >
          <span className="text-xs tracking-widest uppercase">Contact Paahibu Space</span>
          <span className="material-symbols-outlined text-[16px]">open_in_new</span>
        </a>
      </div>
    </div>
  );
}
