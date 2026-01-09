import React from 'react';
import Link from 'next/link';
import { fetchAPI } from "@/lib/api";
import SidebarNewsletter from "@/components/ui/SidebarNewsletter";

export default async function BlogListingPage() {
  const blogPosts = await fetchAPI("/api/v1/blog") || [];
  
  // Handle empty state
  if (blogPosts.length === 0) {
      return (
        <main className="flex-grow flex justify-center py-20 px-4 mt-[64px] bg-background-light dark:bg-background-dark">
            <div className="text-center">
                <h1 className="text-2xl font-bold dark:text-white mb-2">No Posts Found</h1>
                <p className="text-gray-500">Check back later for updates.</p>
            </div>
        </main>
      );
  }

  return (
    <main className="flex-grow flex justify-center py-8 px-4 sm:px-6 lg:px-8 mt-[64px]">
      <div className="w-full max-w-[1280px] flex flex-col gap-10">
        {/* Page Header */}
        <section className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between border-b border-gray-200 dark:border-[#2b2c40] pb-6">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-primary dark:text-white">Blog & Updates</h1>
            <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">Insights, news, and stories from our community.</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button className="rounded-full bg-primary text-white px-4 py-1.5 text-sm font-medium transition-colors">All</button>
            {Array.from(new Set(blogPosts.map(post => post.category?.name || post.category).filter(Boolean))).map((category, idx) => (
              <button 
                key={idx}
                className="rounded-full bg-gray-100 dark:bg-[#2b2c40] text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#363852] px-4 py-1.5 text-sm font-medium transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Content Grid & Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Article Grid */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts.map((post, index) => (
                <article
                  key={post.id || index}
                  className="group flex flex-col overflow-hidden rounded-xl bg-white dark:bg-[#1f202e] shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-[#2b2c40]"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <div
                      className="h-full w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                      style={{backgroundImage: `url("${post.featured_image_url || '/assets/images/blog-placeholder.jpg'}")`}}
                      aria-label={post.title}
                    ></div>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white group-hover:text-secondary transition-colors">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="mb-4 flex-1 text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
                      {post.excerpt || post.preview || ''}
                    </p>
                    <div className="mt-auto flex items-center gap-3 border-t border-gray-100 dark:border-[#2b2c40] pt-4">
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-gray-900 dark:text-white">{post.author || 'Paahibu Space'}</span>
                        <span className="text-[10px] text-gray-500">
                          {post.published_at ? new Date(post.published_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : ''}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            
            {/* Pagination UI - Visual only for now */}
            <div className="flex items-center justify-center gap-2 mt-4">
              <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-white dark:bg-[#2b2c40] text-gray-500 hover:bg-gray-100 dark:hover:bg-[#363852]">
                <span className="material-symbols-outlined text-sm">chevron_left</span>
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white font-bold">1</button>
              <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-white dark:bg-[#2b2c40] text-gray-600 dark:text-gray-300 font-medium hover:bg-gray-100 dark:hover:bg-[#363852] transition-colors">2</button>
              <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-white dark:bg-[#2b2c40] text-gray-600 dark:text-gray-300 font-medium hover:bg-gray-100 dark:hover:bg-[#363852] transition-colors">3</button>
              <span className="text-gray-400 px-1">...</span>
              <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-white dark:bg-[#2b2c40] text-gray-500 hover:bg-gray-100 dark:hover:bg-[#363852]">
                <span className="material-symbols-outlined text-sm">chevron_right</span>
              </button>
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-8">
             {/* Sidebar Content same as before */}
             {/* Newsletter */}
            <SidebarNewsletter />
            {/* Trending Topics - Mock */}
            <div className="rounded-xl bg-white dark:bg-[#1f202e] p-6 shadow-sm border border-gray-100 dark:border-[#2b2c40]">
              <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-xl">trending_up</span>
                Trending Now
              </h3>
              <div className="flex flex-col gap-4">
                {[
                  { id: "01", title: "Digital Literacy for Kids", views: "2.4k views" },
                  { id: "02", title: "Web Development 101", views: "1.8k views" },
                  { id: "03", title: "Women in Tech Gala", views: "1.2k views" }
                ].map((item, idx) => (
                  <React.Fragment key={idx}>
                    <a className="group flex gap-3 items-start" href="#">
                      <span className="mt-1 text-2xl font-black text-gray-200 dark:text-[#2b2c40] group-hover:text-primary transition-colors">
                        {item.id}
                      </span>
                      <div>
                        <h4 className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                          {item.title}
                        </h4>
                        <span className="text-xs text-gray-500">{item.views}</span>
                      </div>
                    </a>
                    {idx < 2 && <div className="h-px bg-gray-100 dark:bg-[#2b2c40]"></div>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
