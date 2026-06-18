import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  return (
    <div className="container mx-auto px-6 max-w-4xl py-20">
      <Link href="/projects" className="inline-flex items-center text-muted-foreground hover:text-white transition-colors mb-12">
        <ArrowLeft size={20} className="mr-2" /> Back to Projects
      </Link>
      
      <div className="mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 capitalize">{slug.replace(/-/g, ' ')}</h1>
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <div className="glass px-4 py-2 rounded-full">Role: Lead Developer</div>
          <div className="glass px-4 py-2 rounded-full">Timeline: 4 Weeks</div>
          <div className="glass px-4 py-2 rounded-full">Tech: Next.js, Tailwind, GSAP</div>
        </div>
      </div>

      <div className="aspect-video w-full glass rounded-3xl overflow-hidden border border-white/10 mb-16 bg-[#0A0A0A]">
        <img src="/img/profile.png" alt="Project Cover" className="w-full h-full object-cover opacity-50" />
      </div>

      <div className="prose prose-invert prose-lg max-w-none">
        <h2 className="text-white text-3xl font-bold mb-4">Project Overview</h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          This project involved completely redesigning and rebuilding a legacy application into a modern, high-performance web experience. The goal was to improve user engagement, decrease load times, and implement a scalable architecture for future features.
        </p>

        <h2 className="text-white text-3xl font-bold mb-4">The Challenge</h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          The main challenge was migrating a large dataset without downtime while simultaneously redesigning the core user flows. We also needed to ensure Lighthouse performance scores stayed above 95 across all metrics.
        </p>

        <h2 className="text-white text-3xl font-bold mb-4">The Solution</h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          We utilized Next.js App Router for optimized server-side rendering, combined with Tailwind CSS for a highly maintainable design system. GSAP and Framer Motion were integrated to provide premium, smooth animations that guide the user's attention.
        </p>
      </div>
    </div>
  );
}
