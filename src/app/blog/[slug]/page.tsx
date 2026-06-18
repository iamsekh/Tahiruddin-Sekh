import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  return (
    <>
      <div className="fixed top-0 left-0 h-1 bg-accent z-[60] w-1/3" />
      
      <div className="container mx-auto px-6 max-w-3xl py-20">
        <Link href="/blog" className="inline-flex items-center text-muted-foreground hover:text-white transition-colors mb-12">
          <ArrowLeft size={20} className="mr-2" /> Back to Blog
        </Link>
        
        <article>
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-6 text-sm font-medium">
              <span className="text-accent uppercase tracking-widest">Development</span>
              <span className="text-white/20">•</span>
              <span className="text-muted-foreground">Oct 24, 2026</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight capitalize">{slug.replace(/-/g, ' ')}</h1>
          </header>

          <div className="prose prose-invert prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-xl text-white font-medium mb-8">
              In modern web development, performance is no longer a luxury—it's a requirement. This article explores advanced techniques for optimizing Next.js 15 applications.
            </p>
            
            <p className="mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            
            <h2 className="text-white text-2xl font-bold mt-12 mb-6">Server Components vs. Client Components</h2>
            <p className="mb-6">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <div className="glass p-6 rounded-2xl my-8 border-l-4 border-l-accent">
              <p className="m-0 italic text-white/90">"The fastest request is the one that is never made." — High Performance Web Principles</p>
            </div>
            
            <h2 className="text-white text-2xl font-bold mt-12 mb-6">Optimizing Images and Assets</h2>
            <p className="mb-6">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
