import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { fetchAPI } from "@/lib/api";

export async function generateStaticParams() {
   // ISR: Fetch all slugs to pre-render
   try {
     const stories = await fetchAPI("/api/v1/stories") || [];
     return stories.map((story) => ({
        slug: story.slug,
     }));
   } catch (e) {
     return [];
   }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const story = await fetchAPI(`/api/v1/stories/${slug}`);

  if (!story || story.error) {
    return { title: "Story Not Found" };
  }

  const title = story.title || story.name || "Story";
  const description = story.excerpt || story.summary || "Read this story from the Paahibu Space community.";
  const image = story.image || story.image_url;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      images: image ? [{ url: image }] : undefined,
    },
  };
}

export default async function StoryPage({ params }) {
  const { slug } = await params;
  const story = await fetchAPI(`/api/v1/stories/${slug}`);

  if (!story || story.error) {
    return notFound();
  }

  return (
    <div className="relative flex flex-col pt-[64px]">
      {/* Hero Section */}
      <div className="relative w-full overflow-hidden bg-background-dark py-12 md:py-20 lg:py-24">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[128px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto flex flex-col px-4 md:px-10 lg:px-40 items-center">
          <div className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="flex flex-col gap-6 order-2 lg:order-1">
                <div className="flex items-center gap-2">
                  <span className="bg-primary/30 text-secondary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {story.type}
                  </span>
                  <span className="text-gray-400 text-sm">5 min read</span>
                </div>
                <h1 className="text-white text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
                  Empowering the Future:{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                    {story.name}&apos;s Story
                  </span>
                </h1>
                <p className="text-gray-300 text-lg md:text-xl font-normal leading-relaxed max-w-[540px]">
                  {story.story}
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <button className="flex cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary hover:bg-primary/80 text-white text-base font-bold transition-all shadow-lg shadow-primary/20 gap-2">
                    <span className="material-symbols-outlined">
                      play_circle
                    </span>
                    <span>Watch Video</span>
                  </button>
                  <button className="flex cursor-pointer items-center justify-center rounded-lg h-12 px-6 border border-gray-600 hover:border-white hover:bg-white/5 text-white text-base font-medium transition-all">
                    <span>Share Story</span>
                  </button>
                </div>
              </div>
              {/* Right Image */}
              <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[500px] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                  <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-60 z-10"></div>
                  <Image
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    alt={`${story.name} profile`}
                    src={story.image}
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                  {/* Floating Card */}
                  <div className="absolute bottom-6 left-6 right-6 z-20 bg-gray-900/90 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="bg-secondary/20 p-2 rounded-lg text-secondary">
                        <span className="material-symbols-outlined">
                          campaign
                        </span>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-medium uppercase">
                          Current Role
                        </p>
                        <p className="text-white text-sm font-bold">
                          {story.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -z-10 -right-4 -bottom-4 w-full h-full border-2 border-secondary/30 rounded-2xl hidden md:block"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Quote Section */}
      <div className="w-full bg-background-dark border-y border-white/5 py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-40 flex justify-center">
          <div className="max-w-[800px] text-center flex flex-col items-center gap-6">
            <span className="material-symbols-outlined text-6xl text-secondary opacity-80">
              format_quote
            </span>
            <h3 className="text-2xl md:text-3xl lg:text-4xl leading-tight text-white italic">
              &quot;{story.quote}&quot;
            </h3>
            <div className="flex flex-col items-center gap-1">
              <p className="text-secondary font-bold text-lg">{story.name}</p>
              <p className="text-gray-400 text-sm">{story.program}</p>
            </div>
          </div>
        </div>
      </div>
      {/* The Journey Section (Grid + Feature) */}
      <div className="w-full bg-background-dark py-20 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-40 flex justify-center">
          <div className="w-full flex flex-col gap-16">
            {/* Text Content */}
            <div className="grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-5 flex flex-col gap-6">
                <h2 className="text-secondary text-sm tracking-wider uppercase">
                  {story.fullStory?.spark || "The Story"}
                </h2>
                <h3 className="text-3xl md:text-4xl text-white leading-tight">
                  {story.fullStory?.heading || story.program}
                </h3>
                {story.fullStory?.text ? (
                    story.fullStory.text.map((paragraph, i) => (
                        <p key={i} className="text-gray-300 leading-relaxed">
                            {paragraph}
                        </p>
                    ))
                ) : (
                    <p className="text-gray-300 leading-relaxed">{story.story}</p>
                )}
              </div>
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Feature Cards - Either from data or generic */}
                 {story.features ? story.features.map((feature, i) => (
                     <div key={i} className="bg-white/5 p-6 rounded-xl border border-white/5 hover:border-secondary/50 transition-colors group">
                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-white transition-colors mb-4">
                            <span className="material-symbols-outlined">{feature.icon}</span>
                        </div>
                        <h4 className="text-white text-lg mb-2">{feature.title}</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">{feature.text}</p>
                    </div>
                 )) : (
                     <>
                        <div className="bg-white/5 p-6 rounded-xl border border-white/5 hover:border-secondary/50 transition-colors group">
                            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-white transition-colors mb-4">
                                <span className="material-symbols-outlined">verified</span>
                            </div>
                            <h4 className="text-white text-lg mb-2">Impact</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">Making a tangible difference in the community through dedication and skill.</p>
                        </div>
                        <div className="bg-white/5 p-6 rounded-xl border border-white/5 hover:border-secondary/50 transition-colors group">
                            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-white transition-colors mb-4">
                                <span className="material-symbols-outlined">rocket_launch</span>
                            </div>
                            <h4 className="text-white text-lg mb-2">Innovation</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">Leveraging technology to solve local problems and create new opportunities.</p>
                        </div>
                     </>
                 )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Timeline Section - Only show if data exists */}
      {story.timeline && story.timeline.length > 0 && (
      <div className="w-full bg-background-dark py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-40 flex justify-center">
          <div className="max-w-[960px] w-full flex flex-col gap-12">
            <div className="text-center mb-4">
              <h2 className="text-3xl text-white mb-4">
                Milestones of Impact
              </h2>
              <p className="text-gray-400">
                Tracking {story.name.split(' ')[0]}&apos;s journey
              </p>
            </div>
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-[20px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-secondary to-primary/20"></div>
              {/* Timeline Items */}
              {story.timeline.map((item, i) => (
                  <div key={i} className="relative flex gap-8 mb-12 group last:mb-0">
                    <div className="relative z-10 flex-none w-[42px] h-[42px] rounded-full bg-background-dark border-2 border-secondary flex items-center justify-center shadow-[0_0_15px_rgba(246,135,31,0.3)]">
                        <span className="material-symbols-outlined text-secondary text-sm">
                        {item.icon}
                        </span>
                    </div>
                    <div className="flex-1 bg-background-dark p-6 rounded-lg border border-white/5 hover:border-secondary/30 transition-all">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-lg text-white">{item.title}</h3>
                            <span className="text-secondary text-sm font-bold bg-secondary/10 px-2 py-1 rounded">
                                {item.year}
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm">{item.text}</p>
                    </div>
                 </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      )}
      {/* Call to Action Section */}
      <div className="w-full bg-primary relative overflow-hidden">
        {/* Decorative Patterns */}
        <Image
          className="object-cover opacity-10"
          alt="African pattern background"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDv0jaIERxQkrEW7_r8T5XWODPN2V6Ly5nu7_t9m_2s1evuyUUmYPfPlsqG_TBgYn9gzmUSl67HnAnpsEgy3y5BWmFwO28DBLLcmM_UHIp57gZE5C50PVU1mftUC7urChVHk65WYs_g-2ZDc9Uo-Ud-um0x5Bu3Ngy1rBL4zBnqknBZC5X4ml_mx2DMTMf8qI7QVcVVuDTSuunO7t_oXIpadwlV0VNiyTugG8g02JlcmljiKaWYC3yH8vx3sbjMbqn8UimByJGJ5WmM"
          fill
        />
        <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-40 flex justify-center py-20 relative z-10">
          <div className="max-w-[800px] text-center flex flex-col items-center gap-8">
            <h2 className="text-3xl md:text-5xl text-white leading-tight">
              Help Us Create More Stories Like {story.name.split(' ')[0]}&apos;s
            </h2>
            <p className="text-blue-100 text-lg md:text-xl max-w-[600px]">
              Your support provides the resources, mentorship, and safe spaces
              needed for young women to thrive in technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <button className="bg-secondary hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-transform hover:scale-105 shadow-xl shadow-black/20">
                Donate Now
              </button>
              <button className="bg-transparent border-2 border-white/30 hover:bg-white/10 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors">
                Become a Mentor
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
