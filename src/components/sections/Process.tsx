"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const steps = [
  { num: "01", title: "Discovery", desc: "Understanding your business goals, target audience, and project requirements." },
  { num: "02", title: "Planning", desc: "Creating a comprehensive roadmap, wireframes, and technical architecture." },
  { num: "03", title: "Design", desc: "Crafting premium, user-centric interfaces with modern aesthetics." },
  { num: "04", title: "Development", desc: "Writing clean, scalable code using cutting-edge technologies." },
  { num: "05", title: "Testing", desc: "Rigorous quality assurance across all devices and browsers." },
  { num: "06", title: "Launch", desc: "Deploying the project securely and ensuring optimal performance." },
  { num: "07", title: "Support", desc: "Ongoing maintenance, updates, and continuous improvements." },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      gsap.from(".process-header", {
        scrollTrigger: { trigger: containerRef.current, start: "top 80%" },
        y: 50, opacity: 0, duration: 1, ease: "power3.out", stagger: 0.2
      });

      const cards = gsap.utils.toArray(".process-step");
      cards.forEach((card: any, i) => {
        gsap.from(card, {
          scrollTrigger: { trigger: card, start: "top 85%" },
          x: i % 2 === 0 ? -50 : 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out"
        });
      });

      gsap.from(".process-line", {
        scrollTrigger: { trigger: containerRef.current, start: "top 50%", end: "bottom 80%", scrub: 1 },
        scaleY: 0,
        transformOrigin: "top center",
        ease: "none"
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="process" className="py-32 relative">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="process-header text-sm font-medium text-accent tracking-widest uppercase mb-4">
            Development Process
          </h2>
          <h3 className="process-header text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            How We Get There
          </h3>
          <p className="process-header text-lg text-muted-foreground">
            A proven, structured approach to deliver excellence at every stage of the project.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 hidden md:block">
            <div className="process-line w-full h-full bg-accent origin-top" />
          </div>

          <div className="space-y-12">
            {steps.map((step, i) => (
              <div key={step.num} className={`process-step relative flex flex-col md:flex-row items-start md:items-center ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                <div className="hidden md:block w-1/2" />
                
                {/* Node */}
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-[#050505] border-2 border-accent flex items-center justify-center z-10 shadow-[0_0_15px_rgba(196,229,87,0.3)] hidden md:flex">
                  <span className="text-accent font-bold">{step.num}</span>
                </div>

                <div className={`w-full md:w-1/2 pl-0 md:pl-0 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                  <div className="glass p-8 rounded-3xl border border-white/5 hover:border-accent/30 transition-colors relative">
                    <span className="md:hidden absolute -top-4 -left-4 w-10 h-10 rounded-full bg-accent text-black font-bold flex items-center justify-center">{step.num}</span>
                    <h4 className="text-2xl font-bold text-white mb-3">{step.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
