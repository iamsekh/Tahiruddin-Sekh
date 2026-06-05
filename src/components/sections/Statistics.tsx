"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const stats = [
  { value: 4, suffix: "+", label: "Years Experience" },
  { value: 20, suffix: "+", label: "Projects Completed" },
  { value: 20, suffix: "+", label: "Happy Clients" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
];

export default function Statistics() {
  const containerRef = useRef<HTMLDivElement>(null);
  const countRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Count-up animation
      countRefs.current.forEach((el) => {
        if (!el) return;
        const target = parseInt(el.dataset.target || "0");
        gsap.fromTo(el, 
          { innerHTML: 0 },
          {
            innerHTML: target,
            duration: 2.5,
            ease: "power2.out",
            snap: { innerHTML: 1 },
            scrollTrigger: { trigger: containerRef.current, start: "top 85%", once: true },
          }
        );
      });
      
      // Stagger fade-in
      gsap.from(".stat-item", {
        y: 40, opacity: 0, duration: 0.8, stagger: 0.12, ease: "power3.out",
        scrollTrigger: { trigger: containerRef.current, start: "top 85%" },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative py-20 bg-white overflow-hidden">
      {/* Subtle top/bottom lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />
      
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12">
          {stats.map((s, i) => (
            <div key={i} className="stat-item flex flex-col items-center text-center">
              <div className="text-5xl md:text-[3.5rem] font-black text-black tracking-tighter tabular-nums">
                <span ref={el => { countRefs.current[i] = el; }} data-target={s.value}>0</span>
                <span className="text-zinc-300">{s.suffix}</span>
              </div>
              <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-[0.2em] mt-3">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
