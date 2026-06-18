import Link from "next/link";

export const metadata = {
  title: "Blog | Tahiruddin Sekh",
  description: "Insights on web development, SEO, and design.",
};

const posts = [
  { slug: "optimizing-nextjs-15", title: "Optimizing Next.js 15 for Maximum Performance", date: "Oct 24, 2026", category: "Development" },
  { slug: "mastering-gsap", title: "Mastering GSAP ScrollTrigger in React", date: "Sep 15, 2026", category: "Animation" },
  { slug: "future-of-ui-design", title: "The Future of Premium UI Design", date: "Aug 02, 2026", category: "Design" },
];

export default function Blog() {
  return (
    <div className="container mx-auto px-6 max-w-5xl py-20">
      <div className="mb-16">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">Insights & <span className="text-accent">Articles</span></h1>
        <p className="text-xl text-muted-foreground max-w-2xl">Thoughts, tutorials, and deep dives into web development, design, and digital strategy.</p>
      </div>

      <div className="space-y-8">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
            <div className="glass p-8 rounded-3xl border border-white/5 hover:border-accent/50 transition-all duration-300 flex flex-col md:flex-row justify-between md:items-center gap-6">
              <div>
                <div className="flex items-center gap-4 mb-4 text-sm font-medium">
                  <span className="text-accent">{post.category}</span>
                  <span className="text-white/20">•</span>
                  <span className="text-muted-foreground">{post.date}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white group-hover:text-accent transition-colors">{post.title}</h2>
              </div>
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:bg-accent group-hover:text-black transition-colors shrink-0">
                →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
