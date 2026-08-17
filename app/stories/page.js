import Link from "next/link";
import StoriesGrid from "@/components/sections/StoriesGrid";
import { fetchAPI } from "@/lib/api";

export const metadata = {
  title: "Stories",
  description: "Real stories from the women and girls whose lives have been transformed through Paahibu Space's mentorship, training, and community programs.",
};

export default async function StoriesPage() {
  const stories = await fetchAPI("/api/v1/stories") || [];

  return (
    <>
      <section className="bg-white dark:bg-background-dark border-b border-gray-100 dark:border-gray-800 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
                <nav className="flex items-center gap-2 text-sm mb-6">
                    <Link className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary font-medium transition-colors" href="/">Home</Link>
                    <span className="text-gray-300 dark:text-gray-600">/</span>
                    <span className="text-primary dark:text-white font-semibold">Stories</span>
                </nav>
                <h1 className="text-4xl md:text-5xl text-primary dark:text-white tracking-tight mb-4 leading-tight">
                    Stories
                </h1>
                <p className="text-lg md:text-xl text-gray-500 dark:text-gray-300 max-w-2xl leading-relaxed">
                    Real stories of transformation and impact from the Paahibu Space community. Discover how we are empowering the next generation.
                </p>
            </div>
        </div>
      </section>
      <StoriesGrid initialStories={stories} />
    </>
  );
}
