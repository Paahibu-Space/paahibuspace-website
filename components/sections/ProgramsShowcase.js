"use client";

import Link from "next/link";

export default function ProgramsShowcase() {
  return (
    <section className="py-20 lg:py-28 bg-[#f9f9fb]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-secondary font-bold tracking-wider uppercase text-sm">Programs</span>
          <h2 className="font-display font-bold text-4xl lg:text-[48px] text-primary mt-2 mb-4">What We Do</h2>
          <p className="max-w-2xl text-gray-600 text-lg">At Paahibu Space, we empower women, girls, and youth with the tools, skills, and networks they need to transform their lives.</p>
        </div>
        {/* Featured Program */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-12 flex flex-col lg:flex-row">
          <div className="lg:w-2/5 h-64 lg:h-auto relative">
            <img alt="Professional women in a meeting" className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3PXs83D1jkSp_jurz2k8J4ElQ6EuLmInkMCN6jynoPMkScopqb3U9gxBSlmVa5SSdVUuST9QUzTYOrI7FYZYb3zaXY7VQ-BTU-HZHGoV210w-ABGvaPkwt33dTd3YLlGYkzi_FYBu7iwfjBo5dy8k3yw1QTW-D85rcE5CI1I7auPhuSd_7GuORXDCxpATvzLy75ggJuSHPDBJVeTBCY9MDtfrN0EFYYxI0rOfSFWYNSxKm7au_CmFQOHwNi-DOQHsSUnwCzl61Ck" />
            <div className="absolute inset-0 bg-primary/10"></div>
          </div>
          <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
            <div className="bg-secondary/10 text-secondary font-bold text-xs px-3 py-1 rounded-full w-fit mb-4">Featured Program</div>
            <h3 className="font-display font-bold text-3xl text-primary mb-2">GROW Program</h3>
            <p className="text-gray-500 mb-6 font-medium">Growing Real Opportunities for Women</p>
            <div className="text-gray-600 mb-8 space-y-4">
              <p>A comprehensive accelerator designed to help women-led startups scale. We provide tailored mentorship, access to funding networks, and business strategy workshops.</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                  <span>Access to seed funding opportunities</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                  <span>1-on-1 Executive Mentorship</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                  <span>Market access strategy</span>
                </li>
              </ul>
            </div>
            <div className="flex gap-4">
              <Link href="/grow-program" className="bg-secondary hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">Apply Now</Link>
              <Link href="/grow-program" className="border border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors">Learn More</Link>
            </div>
          </div>
        </div>
        {/* Grid of Other Programs */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Program Card */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-secondary hover:scale-[1.02] transition-all duration-300">
            <div className="w-14 h-14 bg-orange-50 rounded-lg flex items-center justify-center text-secondary mb-6">
              <span className="material-symbols-outlined text-3xl">computer</span>
            </div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-display font-bold text-xl text-primary">WiDEI</h4>
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Digital Inclusion</span>
            </div>
            <p className="text-gray-600 text-sm mb-6 line-clamp-3">
              Women in Digital Entrepreneurship & Innovation. Bridging the digital divide for rural women.
            </p>
            <Link className="text-secondary text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all"
              href="/widei-program">Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span></Link>
          </div>
          {/* Program Card */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-secondary hover:scale-[1.02] transition-all duration-300">
            <div className="w-14 h-14 bg-orange-50 rounded-lg flex items-center justify-center text-secondary mb-6">
              <span className="material-symbols-outlined text-3xl">code</span>
            </div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-display font-bold text-xl text-primary">TechsiStars</h4>
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Coding Bootcamp</span>
            </div>
            <p className="text-gray-600 text-sm mb-6 line-clamp-3">
              An intensive coding bootcamp for young women aspiring to become software developers.
            </p>
            <Link className="text-secondary text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all"
              href="/techsistars-program">Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span></Link>
          </div>
          {/* Program Card */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-secondary hover:scale-[1.02] transition-all duration-300">
            <div className="w-14 h-14 bg-orange-50 rounded-lg flex items-center justify-center text-secondary mb-6">
              <span className="material-symbols-outlined text-3xl">work</span>
            </div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-display font-bold text-xl text-primary">Skills2Work</h4>
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Employability</span>
            </div>
            <p className="text-gray-600 text-sm mb-6 line-clamp-3">
              Soft skills and career readiness training to prepare graduates for the modern workplace.
            </p>
            <Link className="text-secondary text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all"
              href="#">Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
