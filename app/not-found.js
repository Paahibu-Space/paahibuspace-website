import Link from "next/link";
import Button from "@/components/ui/Button";

export default function RootNotFound() {
  return (
    <main className="flex-grow flex items-center justify-center py-24 px-6 md:px-12 bg-background-light dark:bg-background-dark">
      <div className="max-w-2xl w-full text-center">
        <div className="relative mb-8 inline-block">
          <h1 className="text-9xl font-black text-gray-200 dark:text-gray-800 select-none">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="material-symbols-outlined text-7xl text-secondary animate-bounce">question_mark</span>
          </div>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary dark:text-white mb-6">
          Lost in Space?
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-lg mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s guide you back to our mission.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/">
            <Button size="lg" className="w-full sm:w-auto h-12 shadow-lg shadow-primary/20">
              Return Home
            </Button>
          </Link>
          <Link href="/impact">
            <Button variant="outline" size="lg" className="w-full sm:w-auto h-12 dark:shadow-lg dark:bg-white dark:hover:text-white">
              Our Impact
            </Button>
          </Link>
        </div>
        
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-16 border-t border-gray-100 dark:border-gray-800">
          <div className="text-center">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Programs</p>
            <Link href="/programs" className="text-sm font-medium text-primary dark:text-white hover:text-secondary transition-colors underline-offset-4 hover:underline">View All</Link>
          </div>
          <div className="text-center">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Community</p>
            <Link href="/stories" className="text-sm font-medium text-primary dark:text-white hover:text-secondary transition-colors underline-offset-4 hover:underline">Read Stories</Link>
          </div>
          <div className="text-center">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Latest</p>
            <Link href="/blog" className="text-sm font-medium text-primary dark:text-white hover:text-secondary transition-colors underline-offset-4 hover:underline">Our Blog</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
