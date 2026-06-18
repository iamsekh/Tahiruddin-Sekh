"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Target, Lightbulb, Zap, Rocket } from "lucide-react";

const stats = [
  { num: "4+",  label: "Years of Experience" },
  { num: "50+", label: "Projects Delivered" },
  { num: "100%",label: "Performance Scores" },
  { num: "3+",  label: "Countries Served" },
];

const passions = [
  { 
    icon: Target,
    title: "Precision & Craft", 
    body: "Every project is a canvas. I pour attention to detail into every pixel, interaction, and line of code." 
  },
  { 
    icon: Lightbulb,
    title: "Design Thinking", 
    body: "I approach challenges from the user's perspective — creating interfaces that feel intuitive and effortless." 
  },
  { 
    icon: Zap,
    title: "High Performance", 
    body: "Speed is a feature. I optimize Core Web Vitals to ensure lightning-fast load times and smooth rendering." 
  },
  { 
    icon: Rocket,
    title: "Scalable Products", 
    body: "From concept to launch, I build robust architectures that don't just work today, but scale for tomorrow." 
  },
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Image clip-path reveal
      gsap.fromTo(
        ".about-img-wrap",
        { clipPath: "inset(0 100% 0 0)", filter: "blur(10px)" },
        {
          clipPath: "inset(0 0% 0 0)",
          filter: "blur(0px)",
          duration: 1.4,
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: ".about-img-wrap",
            start: "top 75%",
          },
        }
      );

      // Parallax on photo
      gsap.to(".about-photo", {
        y: -40,
        scale: 1.05,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Text lines reveal
      gsap.fromTo(
        ".about-line",
        { y: "105%", opacity: 0, rotateZ: 2 },
        {
          y: "0%",
          opacity: 1,
          rotateZ: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-heading",
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        ".about-fade",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-body",
            start: "top 80%",
          },
        }
      );

      // Passion cards stagger
      gsap.fromTo(
        ".passion-card",
        { y: 80, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".passions-grid",
            start: "top 85%",
          },
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative bg-background overflow-hidden"
    >
      {/* ── PART 1: Big intro ── */}
      <div className="relative py-24 md:py-40">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#D7F65A]/8 to-transparent blur-[120px]" />
        </div>

        <div className="container mx-auto px-6 max-w-7xl grid lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-center relative z-10">
          
          {/* Image column */}
          <div className="about-img-wrap relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[2.5rem] overflow-hidden order-2 lg:order-1 border border-zinc-800/50 shadow-2xl">
            <div className="about-photo relative w-full h-[120%] -top-[10%]">
              <Image
                src="/img/pro.jpeg"
                alt="Tahiruddin Sekh"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={100}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent mix-blend-multiply" />
            </div>
            
            {/* Floating label */}
            <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 right-6 md:right-8 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-5 md:p-6 flex items-center justify-between">
              <div>
                <p className="text-[10px] md:text-xs font-bold text-[#D7F65A] uppercase tracking-widest mb-1">Based in</p>
                <p className="text-white font-bold text-sm md:text-base">India · Remote</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-[#D7F65A] text-black flex items-center justify-center -rotate-45">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </div>
            </div>
          </div>

          {/* Text column */}
          <div className="order-1 lg:order-2 flex flex-col gap-8">
            <div className="section-tag w-fit">Behind the Code</div>

            <h2 className="about-heading text-[clamp(2.5rem,5vw,4.5rem)] font-black tracking-[-0.04em] leading-[1.02] text-white">
              <div className="line-wrap"><span className="about-line block">Crafting digital</span></div>
              <div className="line-wrap"><span className="about-line block">experiences</span></div>
              <div className="line-wrap">
                <span className="about-line block">
                  that <span className="text-[#D7F65A]">convert.</span>
                </span>
              </div>
            </h2>

            <div className="about-body">
              <p className="about-fade text-[17px] md:text-[19px] text-zinc-400 leading-[1.7] max-w-lg mb-6">
                I&apos;m a passionate Web Engineer with{" "}
                <span className="text-white font-semibold">4+ years of expertise</span> in
                frontend development, performance optimization, and scalable architectures.
              </p>
              <p className="about-fade text-[16px] text-zinc-500 leading-[1.8] max-w-lg">
                I&apos;ve helped businesses build digital presences that look beautiful and perform flawlessly. From custom WordPress themes to modern Next.js applications, I focus on the intersection of design and engineering.
              </p>

              {/* Stats inline */}
              <div className="about-fade grid grid-cols-2 gap-6 mt-10 pt-10 border-t border-zinc-800/60">
                {stats.slice(0, 2).map(({ num, label }) => (
                  <div key={label}>
                    <div className="text-4xl font-black text-white mb-1">{num}</div>
                    <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest">{label}</div>
                  </div>
                ))}
              </div>

              <div className="about-fade flex flex-col sm:flex-row gap-4 mt-10">
                <a
                  href="https://drive.google.com/file/d/1eglR4yOCLKUt3WazYvZoY2ccRY99FK3p/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  View Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── PART 2: What Drives Me ── */}
      <div className="py-20 md:py-32 bg-zinc-950/30 border-t border-zinc-900">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-16 md:mb-20 text-center max-w-3xl mx-auto">
            <div className="section-tag mb-6 mx-auto">Philosophy</div>
            <h3 className="text-3xl md:text-5xl font-black tracking-[-0.03em] text-white leading-tight">
              The principles I build by.
            </h3>
            <p className="mt-6 text-zinc-400 text-lg">Great digital products require more than just code. They require a holistic approach to design, performance, and user experience.</p>
          </div>
          
          <div className="passions-grid grid md:grid-cols-2 gap-6">
            {passions.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="passion-card group relative bg-black border border-zinc-800 rounded-[2rem] p-8 md:p-10 overflow-hidden hover:border-[#D7F65A]/30 transition-all duration-500 hover:shadow-[0_0_50px_-15px_rgba(215,246,90,0.1)]"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 pointer-events-none">
                  <Icon size={120} strokeWidth={1} />
                </div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#D7F65A] mb-8 group-hover:bg-[#D7F65A] group-hover:text-black group-hover:border-[#D7F65A] transition-colors duration-500">
                    <Icon size={24} />
                  </div>
                  
                  <h4 className="text-2xl font-bold text-white mb-4">{title}</h4>
                  <p className="text-zinc-400 leading-relaxed text-[16px]">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
