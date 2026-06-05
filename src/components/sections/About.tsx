"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const skills = [
  "HTML", "CSS", "JavaScript", "WordPress", "WooCommerce",
  "Shopify", "PHP", "Bootstrap", "SEO", "Google Analytics",
  "Figma", "Wireframing", "Elementor", "Git", "cPanel"
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Main elements stagger in
      gsap.from(".about-item", {
        y: 50, opacity: 0, duration: 0.9, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: containerRef.current, start: "top 65%" },
      });
      // Skill pills cascade
      gsap.from(".skill-pill", {
        scale: 0.8, opacity: 0, duration: 0.5, stagger: 0.04, ease: "back.out(1.4)",
        scrollTrigger: { trigger: ".skill-pill", start: "top 85%" },
      });
      // Image parallax
      gsap.to(".about-image", {
        y: -40,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-32 bg-white relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-zinc-100 to-transparent rounded-full blur-[80px] opacity-50 pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image column */}
          <div className="about-item relative mx-auto lg:mx-0 max-w-md w-full aspect-[4/5] flex items-center justify-center">
            <div className="relative w-full h-full drop-shadow-2xl">
              <Image src="/img/coder.gif" alt="Coding illustration" fill className="object-contain" />
            </div>
          </div>

          {/* Text column */}
          <div className="flex flex-col gap-8">
            <div className="about-item section-tag w-fit">About me</div>
            
            <h2 className="about-item text-4xl md:text-[3.5rem] font-black tracking-[-0.03em] text-black leading-[1.1]">
              Crafting web<br/>experiences<br/><span className="text-zinc-300">that convert.</span>
            </h2>
            
            <p className="about-item text-[17px] text-zinc-500 leading-[1.75] max-w-lg">
              Experienced WordPress Developer with 4+ years of expertise in theme and plugin customisation, PSD to WordPress conversion, SEO, and website performance optimisation. Skilled in delivering user-focused solutions and managing technical operations to exceed client expectations.
            </p>

            {/* Skill pills */}
            <div className="about-item flex flex-wrap gap-2 pt-1">
              {skills.map(s => (
                <span key={s} className="skill-pill text-[12px] font-semibold bg-white border border-zinc-200 text-zinc-600 rounded-full px-4 py-2 hover:bg-black hover:text-white hover:border-black transition-all duration-300 cursor-default select-none">
                  {s}
                </span>
              ))}
            </div>

            <div className="about-item flex gap-4 pt-2">
              <a href="https://drive.google.com/file/d/1eglR4yOCLKUt3WazYvZoY2ccRY99FK3p/view?usp=sharing"
                target="_blank" rel="noopener noreferrer"
                className="btn-primary">
                View Resume
              </a>
              <a href="#contact" className="btn-secondary">Get In Touch</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
