"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Globe, ShoppingCart, Puzzle, Rocket, Search, Palette, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    num: "01",
    title: "Website Development",
    desc: "Custom theme and plugin development, PSD to WordPress conversion, WooCommerce setup, and advanced functionality implementation built to perform.",
    tags: ["WordPress", "WooCommerce", "Elementor", "Custom Themes"],
  },
  {
    icon: ShoppingCart,
    num: "02",
    title: "E-Commerce Solutions",
    desc: "Building conversion-optimised online stores with bespoke themes, app integrations, and seamless checkout experiences on WooCommerce and Shopify.",
    tags: ["WooCommerce", "Shopify", "Liquid", "Stripe"],
  },
  {
    icon: Puzzle,
    num: "03",
    title: "Plugin & Theme Dev",
    desc: "Creating bespoke WordPress plugins and themes from scratch — built for performance, scalability, and a seamless admin experience.",
    tags: ["Custom Plugins", "Hooks/Filters", "REST API", "ACF"],
  },
  {
    icon: Rocket,
    num: "04",
    title: "Web Applications",
    desc: "Developing modern web-based SaaS products with clean architecture, subscription billing, user dashboards, and third-party API integrations.",
    tags: ["Next.js", "React", "API Integration", "Stripe"],
  },
  {
    icon: Search,
    num: "05",
    title: "SEO Optimization",
    desc: "Achieving 100% mobile performance scores through technical SEO audits, Core Web Vitals optimisation, speed enhancements, and schema markup.",
    tags: ["On-Page SEO", "Core Web Vitals", "Analytics", "Lighthouse"],
  },
  {
    icon: Palette,
    num: "06",
    title: "UI/UX Design",
    desc: "Crafting clean, conversion-focused interfaces in Figma — wireframing, prototyping, and pixel-perfect design handoffs that developers love.",
    tags: ["Figma", "Wireframing", "Prototyping", "Design Systems"],
  },
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Header
      gsap.fromTo(
        ".svc-header",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "expo.out",
          scrollTrigger: { trigger: ".svc-header", start: "top 80%" },
        }
      );

      // Staggered cards reveal with slight rotation and scaling
      gsap.fromTo(
        cardsRef.current,
        { y: 100, opacity: 0, rotateX: 15, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          scale: 1,
          duration: 1.2,
          stagger: 0.1,
          ease: "power4.out",
          scrollTrigger: { trigger: ".svc-grid", start: "top 75%" },
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>, el: HTMLDivElement | null) => {
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotX = ((y - cy) / cy) * -6; // Subtler 3D rotation
    const rotY = ((x - cx) / cx) * 6;
    
    gsap.to(el, {
      rotationX: rotX,
      rotationY: rotY,
      transformPerspective: 800,
      duration: 0.4,
      ease: "power2.out",
    });
    
    // Spotlight effect
    const spotlight = el.querySelector(".spotlight") as HTMLElement;
    if (spotlight) {
      gsap.to(spotlight, {
        x,
        y,
        opacity: 1,
        duration: 0.4,
        ease: "power2.out"
      });
    }
  };

  const onMouseLeave = (el: HTMLDivElement | null) => {
    if (!el) return;
    gsap.to(el, {
      rotationX: 0,
      rotationY: 0,
      duration: 0.8,
      ease: "elastic.out(1, 0.4)",
    });
    
    const spotlight = el.querySelector(".spotlight") as HTMLElement;
    if (spotlight) {
      gsap.to(spotlight, { opacity: 0, duration: 0.4 });
    }
  };

  return (
    <section
      id="services"
      ref={containerRef}
      className="py-24 md:py-40 bg-background relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#D7F65A]/3 to-transparent blur-[120px]" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="max-w-2xl mb-16 md:mb-24 flex flex-col items-center md:items-start text-center md:text-left mx-auto md:mx-0">
          <div className="svc-header section-tag mb-6">Expertise</div>
          <h2 className="svc-header text-[clamp(2.5rem,5vw,4.5rem)] font-black tracking-[-0.04em] text-white leading-[1.05]">
            Services &amp;<br />
            <span className="text-zinc-600">Solutions</span>
          </h2>
          <p className="svc-header mt-6 text-[18px] text-zinc-400 leading-relaxed">
            End-to-end digital solutions built for scale, performance, and impact.
          </p>
        </div>

        <div className="svc-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                ref={(el) => { cardsRef.current[i] = el; }}
                className="svc-card group relative bg-zinc-950/60 backdrop-blur-xl rounded-[2rem] p-8 border border-zinc-800/80 overflow-hidden transition-all duration-500 hover:border-[#D7F65A]/50 hover:shadow-[0_20px_80px_-15px_rgba(215,246,90,0.15)]"
                style={{ transformStyle: "preserve-3d" }}
                onMouseMove={(e) => onMouseMove(e, cardsRef.current[i])}
                onMouseLeave={() => onMouseLeave(cardsRef.current[i])}
              >
                {/* Spotlight element */}
                <div 
                  className="spotlight absolute pointer-events-none w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle_at_center,rgba(215,246,90,0.1)_0%,transparent_70%)] -translate-x-1/2 -translate-y-1/2 opacity-0 z-0"
                />

                <div className="relative z-10 flex flex-col h-full gap-6">
                  {/* Header Row */}
                  <div className="flex items-start justify-between">
                    <div 
                      className="w-16 h-16 rounded-2xl bg-black border border-zinc-800 flex items-center justify-center text-white group-hover:bg-[#D7F65A] group-hover:text-black group-hover:border-[#D7F65A] transition-all duration-500 shadow-xl" 
                      style={{ transform: "translateZ(40px)" }}
                    >
                      <Icon size={28} strokeWidth={1.5} />
                    </div>
                    <span 
                      className="text-6xl font-black text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.08)] group-hover:[-webkit-text-stroke:1.5px_rgba(215,246,90,0.3)] transition-all duration-500 select-none"
                      style={{ transform: "translateZ(20px)" }}
                    >
                      {s.num}
                    </span>
                  </div>

                  {/* Content */}
                  <div style={{ transform: "translateZ(30px)" }} className="flex-grow flex flex-col gap-4">
                    <h3 className="text-2xl font-bold text-white leading-tight tracking-tight">
                      {s.title}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed text-[15px] flex-grow">
                      {s.desc}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2" style={{ transform: "translateZ(20px)" }}>
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[12px] font-bold bg-black text-zinc-400 group-hover:text-zinc-200 rounded-full px-4 py-2 border border-zinc-800 transition-colors duration-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
