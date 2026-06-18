"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ArrowRight, ArrowDown } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

// Project images for animated gallery columns
const col1Images = [
  { src: "/img/project/tomer-cover.png",    name: "Tomrer Nordsjaelland" },
  { src: "/img/project/toile-cover.png",    name: "Toile" },
  { src: "/img/project/royal-cover.png",    name: "Royal Cotton" },
  { src: "/img/project/dlozi-cover.png",    name: "Dlozi" },
  { src: "/img/project/hospilaty-cover.png",name: "Sahyadri Hospital" },
];
const col2Images = [
  { src: "/img/project/grocee.png",         name: "Grocee" },
  { src: "/img/project/gl.png",             name: "Gulsan Libas" },
  { src: "/img/project/recipe-cover.png",   name: "Food Recipe" },
  { src: "/img/project/resturant-cover.png",name: "Restaurant" },
  { src: "/img/project/interio-cover.png",  name: "Interio Designs" },
];
const col3Images = [
  { src: "/img/project/portfolio-cover.png",name: "Portfolio" },
  { src: "/img/project/healty-cover.png",   name: "Healthy Blog" },
  { src: "/img/project/tomer-cover.png",    name: "Tomrer" },
  { src: "/img/project/royal-cover.png",    name: "Royal Cotton" },
  { src: "/img/project/toile-cover.png",    name: "Toile Eco" },
];

function GalleryCard({ src, name }: { src: string; name: string }) {
  return (
    <div className="relative flex-shrink-0 w-full rounded-2xl overflow-hidden group aspect-[4/3]">
      <Image
        src={src}
        alt={name}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 220px"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <p className="text-white text-xs font-semibold truncate">{name}</p>
      </div>
    </div>
  );
}

function GalleryColumn({
  images,
  speed,
  offset = 0,
  blur = false,
}: {
  images: typeof col1Images;
  speed: number;
  offset?: number;
  blur?: boolean;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const repeated = [...images, ...images, ...images];

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    gsap.set(el, { y: offset });

    const totalH = el.scrollHeight / 3;
    const anim = gsap.to(el, {
      y: `-=${totalH}`,
      duration: speed,
      ease: "none",
      repeat: -1,
      modifiers: {
        y: gsap.utils.unitize((v) => parseFloat(v) % totalH),
      },
    });

    return () => { anim.kill(); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="relative overflow-hidden"
      style={{ filter: blur ? "blur(1.5px)" : "none", opacity: blur ? 0.5 : 1 }}
    >
      <div ref={trackRef} className="flex flex-col gap-3">
        {repeated.map((img, i) => (
          <GalleryCard key={i} {...img} />
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 2.3 }); // after loader

      // Headline lines — slide up from clip
      tl.fromTo(
        ".h-line",
        { y: "110%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 1, stagger: 0.12, ease: "expo.out" }
      )
        .fromTo(
          ".hero-sub",
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          "-=0.5"
        )
        .fromTo(
          ".hero-desc",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
          "-=0.5"
        )
        .fromTo(
          ".hero-cta",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: "power3.out" },
          "-=0.4"
        )
        .fromTo(
          ".hero-badge",
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.6, stagger: 0.1, ease: "back.out(2)" },
          "-=0.5"
        )
        .fromTo(
          ".gallery-col",
          { opacity: 0, x: 40 },
          { opacity: 1, x: 0, duration: 1, stagger: 0.1, ease: "expo.out" },
          0.3
        );

      // Animate numbers
      gsap.from(".counter-4", { textContent: "0", duration: 2, ease: "power2.out", snap: { textContent: 1 }, delay: 3.5 });
      gsap.from(".counter-50", { textContent: "0", duration: 2.5, ease: "power2.out", snap: { textContent: 1 }, delay: 3.5 });
      gsap.from(".counter-100", { textContent: "0", duration: 3, ease: "power2.out", snap: { textContent: 1 }, delay: 3.5 });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
    >
      {/* Noise */}
      <div className="noise-overlay" />

      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-[0.18] pointer-events-none" />

      {/* Gradient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-blob absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#D7F65A]/12 to-transparent blur-[100px]" />
        <div className="animate-blob animation-delay-2 absolute top-1/2 -left-40 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#D7F65A]/6 to-transparent blur-[80px]" />
        <div className="animate-blob animation-delay-4 absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-gradient-to-tl from-[#D7F65A]/8 to-transparent blur-[70px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl grid lg:grid-cols-[1fr_0.85fr] gap-6 lg:gap-0 items-center relative z-10 pt-28 md:pt-36 pb-16">

        {/* ── Left Column ── */}
        <div className="flex flex-col gap-7 pr-0 lg:pr-10">

          {/* Status badge */}
          <div className="hero-badge section-tag w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D7F65A] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D7F65A]" />
            </span>
            Available for new projects
          </div>

          {/* Headline with line-clip animation */}
          <div>
            <h1 className="text-[clamp(3rem,7vw,6.5rem)] font-black tracking-[-0.04em] leading-[0.95] text-white">
              <div className="line-wrap">
                <span className="h-line block">Crafting</span>
              </div>
              <div className="line-wrap">
                <span className="h-line block text-gradient">Exceptional</span>
              </div>
              <div className="line-wrap">
                <span className="h-line block">Digital</span>
              </div>
              <div className="line-wrap">
                <span className="h-line block text-zinc-600">Experiences.</span>
              </div>
            </h1>
          </div>

          {/* Sub-role */}
          <p className="hero-sub text-xl md:text-2xl font-medium text-zinc-400 tracking-tight -mt-3">
            WordPress Developer &amp; Web Engineer
          </p>

          {/* Description */}
          <p className="hero-desc text-[17px] text-zinc-400 leading-[1.75] max-w-[480px]">
            I design and develop modern websites, web applications, and digital
            experiences that combine creativity with performance — built to impress,
            engineered to convert.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full">
            <div className="w-full sm:w-auto">
              <MagneticButton className="w-full sm:w-auto [&>div]:w-full">
                <a href="#projects" className="hero-cta btn-primary w-full sm:w-auto justify-center">
                  View Work <ArrowRight size={16} />
                </a>
              </MagneticButton>
            </div>
            <a href="#contact" className="hero-cta btn-secondary w-full sm:w-auto justify-center">
              Contact Me
            </a>
          </div>

          {/* Stat badges */}
          <div className="flex flex-wrap gap-4 mt-2">
            {[
              { val: 4,   suffix: "+",   label: "Years Experience" },
              { val: 50,  suffix: "+",   label: "Projects Delivered" },
              { val: 100, suffix: "%",   label: "Client Satisfaction" },
            ].map(({ val, suffix, label }) => (
              <div key={label} className="hero-badge glass rounded-2xl px-5 py-3 flex items-center gap-3">
                <span className="text-2xl font-black text-white leading-none flex items-center">
                  <span className={`counter-${val}`}>{val}</span>{suffix}
                </span>
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.12em] leading-tight max-w-[60px]">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right Column: Animated Gallery ── */}
        <div className="relative h-[500px] md:h-[680px] overflow-hidden">
          {/* Fade edges top/bottom */}
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />

          <div className="grid grid-cols-3 gap-3 h-full px-2">
            {/* Col 1 — slow */}
            <div className="gallery-col">
              <GalleryColumn images={col1Images} speed={25} offset={0} />
            </div>
            {/* Col 2 — medium, offset start */}
            <div className="gallery-col mt-[-80px]">
              <GalleryColumn images={col2Images} speed={18} offset={-60} />
            </div>
            {/* Col 3 — fast, blurred for depth */}
            <div className="gallery-col mt-[-40px]">
              <GalleryColumn images={col3Images} speed={22} offset={-30} blur />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-bounce opacity-60">
        <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Scroll</span>
        <ArrowDown size={14} className="text-zinc-500" />
      </div>

      {/* Bottom separator */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
    </section>
  );
}
