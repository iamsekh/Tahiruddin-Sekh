"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const row1 = [
  { name: "HTML",       src: "/img/skills/html.png" },
  { name: "CSS",        src: "/img/skills/css.png" },
  { name: "JavaScript", src: "/img/skills/javascript.png" },
  { name: "React",      src: "/img/skills/react.png" },
  { name: "WordPress",  src: "/img/skills/wordpress.png" },
  { name: "PHP",        src: "/img/skills/php.png" },
  { name: "Shopify",    src: "/img/skills/shopify.png" },
  { name: "Bootstrap",  src: "/img/skills/bootstrap.png" },
];

const row2 = [
  { name: "Figma",   src: "/img/skills/figma.png" },
  { name: "Git",     src: "/img/skills/git.png" },
  { name: "GitHub",  src: "/img/skills/github.png" },
  { name: "MySQL",   src: "/img/skills/mysql.png" },
  { name: "VS Code", src: "/img/skills/vscode.png" },
  { name: "cPanel",  src: "/img/skills/cp.png" },
];

function LogoCard({ name, src }: { name: string; src: string }) {
  return (
    <div className="group relative flex-shrink-0 w-[140px] h-[140px] md:w-[160px] md:h-[160px] rounded-[1.75rem] bg-zinc-900 border border-zinc-800 flex flex-col items-center justify-center gap-4 p-5 hover:border-[#39ff14]/50 hover:shadow-[0_20px_50px_-10px_rgba(57,255,20,0.1)] hover:-translate-y-2 transition-all duration-400 cursor-default overflow-hidden">
      {/* Hover gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#39ff14]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
      
      <div className="relative z-10 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
        <Image src={src} alt={name} fill className="object-contain group-hover:scale-110 transition-transform duration-400" />
      </div>
      <span className="relative z-10 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.15em] text-zinc-400 group-hover:text-[#39ff14] transition-colors duration-300">{name}</span>
    </div>
  );
}

export default function TechStack() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const r1 = [...row1, ...row1, ...row1];
  const r2 = [...row2, ...row2, ...row2, ...row2];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".tech-header", {
        y: 40, opacity: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-20 bg-background relative overflow-hidden">
      {/* Gradient separator */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      
      {/* Decorative radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(57,255,20,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl mb-12 md:mb-20 relative z-10 text-center">
        <div className="tech-header">
          <div className="section-tag mb-6 mx-auto">Tech Stack</div>
          <h2 className="text-4xl md:text-[3.5rem] font-black tracking-[-0.03em] text-white leading-[1.1]">
            Tools &amp; <span className="text-zinc-600">Technologies</span>
          </h2>
          <p className="mt-4 text-zinc-400 text-[17px] max-w-xl mx-auto leading-relaxed">
            I build with modern, high-performance tools to ensure every project is scalable, fast, and secure.
          </p>
        </div>
      </div>

      <div className="relative w-full flex flex-col gap-6 md:gap-8 overflow-hidden py-6" aria-hidden="true">
        {/* Edge fade overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />

        {/* Row 1 → scroll left */}
        <div className="flex gap-5 md:gap-6 marquee-left w-max">
          {r1.map((s, i) => <LogoCard key={`r1-${i}`} {...s} />)}
        </div>

        {/* Row 2 → scroll right */}
        <div className="flex gap-5 md:gap-6 marquee-right w-max ml-[-15%]">
          {r2.map((s, i) => <LogoCard key={`r2-${i}`} {...s} />)}
        </div>
      </div>
    </section>
  );
}
