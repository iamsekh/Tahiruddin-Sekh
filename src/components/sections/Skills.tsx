"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Skill {
  name: string;
  src: string;
  level: number;
}

const skills: Skill[] = [
  { name: "WordPress",   src: "/img/skills/wordpress.png",  level: 95 },
  { name: "WooCommerce", src: "/img/skills/wordpress.png",  level: 90 },
  { name: "Elementor",   src: "/img/skills/vscode.png",     level: 92 },
  { name: "HTML",        src: "/img/skills/html.png",       level: 98 },
  { name: "CSS",         src: "/img/skills/css.png",        level: 95 },
  { name: "JavaScript",  src: "/img/skills/javascript.png", level: 85 },
  { name: "React",       src: "/img/skills/react.png",      level: 80 },
  { name: "Next.js",     src: "/img/skills/react.png",      level: 75 },
  { name: "SEO",         src: "/img/skills/github.png",     level: 90 },
  { name: "Figma",       src: "/img/skills/figma.png",      level: 82 },
  { name: "PHP",         src: "/img/skills/php.png",        level: 78 },
  { name: "Git",         src: "/img/skills/git.png",        level: 85 },
  { name: "Shopify",     src: "/img/skills/shopify.png",    level: 80 },
  { name: "MySQL",       src: "/img/skills/mysql.png",      level: 72 },
  { name: "Bootstrap",   src: "/img/skills/bootstrap.png",  level: 88 },
];

function SkillPill({ skill }: { skill: Skill }) {
  return (
    <div className="group flex-shrink-0 flex items-center gap-4 bg-zinc-950/50 backdrop-blur-md border border-zinc-800/80 rounded-2xl px-6 py-4 hover:border-[#D7F65A]/40 hover:bg-zinc-900 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_-10px_rgba(215,246,90,0.1)] min-w-[190px]">
      <div className="relative w-9 h-9 flex-shrink-0 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
        <Image
          src={skill.src}
          alt={skill.name}
          fill
          className="object-contain"
        />
      </div>
      <div>
        <p className="text-white font-bold text-sm tracking-tight">{skill.name}</p>
        <p className="text-zinc-500 text-xs font-medium mt-0.5 group-hover:text-[#D7F65A] transition-colors duration-300">
          Proficiency: {skill.level}%
        </p>
      </div>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  // Triple the array for seamless loop
  const row1 = [...skills, ...skills, ...skills];
  const row2 = [...skills].reverse();
  const row2x = [...row2, ...row2, ...row2];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(
        ".skills-header-el",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
          },
        }
      );

      // Horizontal scroll effect: scroll down = move left
      const track = trackRef.current;
      if (!track) return;

      gsap.fromTo(
        track,
        { x: 0 },
        {
          x: "-33.33%",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 md:py-32 bg-background relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      <div className="pointer-events-none absolute left-0 top-0 w-[400px] h-[400px] bg-gradient-to-br from-[#D7F65A]/6 to-transparent blur-[80px]" />

      {/* Header */}
      <div ref={headerRef} className="container mx-auto px-6 max-w-7xl mb-14">
        <div className="skills-header-el section-tag mb-6">Skill Set</div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2 className="skills-header-el text-4xl md:text-[3.5rem] font-black tracking-[-0.04em] text-white leading-[1.05]">
            Tools &amp; <br /><span className="text-zinc-600">Technologies</span>
          </h2>
          <p className="skills-header-el text-zinc-400 text-[17px] max-w-md leading-relaxed">
            A decade&apos;s worth of tools, condensed into the ones I actually use to
            build world-class products.
          </p>
        </div>
      </div>

      {/* Scrolling rows */}
      <div className="relative overflow-hidden py-4">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

        {/* Row 1 — scroll driven (left) */}
        <div className="mb-4">
          <div ref={trackRef} className="flex gap-4 w-max">
            {row1.map((skill, i) => (
              <SkillPill key={`r1-${i}`} skill={skill} />
            ))}
          </div>
        </div>

        {/* Row 2 — CSS marquee (right) */}
        <div>
          <div className="flex gap-4 w-max marquee-right">
            {row2x.map((skill, i) => (
              <SkillPill key={`r2-${i}`} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
