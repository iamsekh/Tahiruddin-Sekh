"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Globe, ShoppingCart, Puzzle, Rocket, Search, Palette } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "WordPress Development",
    desc: "Custom theme and plugin development, PSD to WordPress conversion, WooCommerce setup, and advanced functionality implementation.",
    tags: ["Themes", "Plugins", "WooCommerce", "Elementor"],
  },
  {
    icon: ShoppingCart,
    title: "Shopify Development",
    desc: "Building and customising Shopify stores with bespoke themes, app integrations, and conversion-optimised product pages.",
    tags: ["Custom Themes", "Apps", "Liquid", "Checkout"],
  },
  {
    icon: Puzzle,
    title: "Plugin & Theme Dev",
    desc: "Creating bespoke WordPress plugins and themes from scratch — built for performance, scalability, and a seamless admin experience.",
    tags: ["Custom Plugins", "Hooks/Filters", "REST API", "ACF"],
  },
  {
    icon: Rocket,
    title: "SaaS Web Applications",
    desc: "Developing modern web-based SaaS products with clean architecture, subscription billing, user dashboards, and API integrations.",
    tags: ["Next.js", "React", "API", "Stripe"],
  },
  {
    icon: Search,
    title: "SEO & Performance",
    desc: "Achieving 100% mobile performance scores through technical SEO audits, Core Web Vitals optimisation, and speed enhancements.",
    tags: ["On-Page SEO", "Core Web Vitals", "Analytics", "Lighthouse"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Crafting clean, conversion-focused interfaces in Figma — wireframing, prototyping, and pixel-perfect design handoffs.",
    tags: ["Figma", "Wireframing", "Prototyping", "Design Systems"],
  },
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(".svc-card", 
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: containerRef.current, start: "top 85%" } }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={containerRef} className="py-16 md:py-20 bg-background relative overflow-hidden">
      {/* Gradient separator */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      
      <div className="container mx-auto px-6 max-w-7xl">
        {/* header */}
        <div className="max-w-2xl mb-12 md:mb-20">
          <div className="section-tag mb-6">What I do</div>
          <h2 className="text-4xl md:text-[3.5rem] font-black tracking-[-0.03em] text-white leading-[1.1]">
            Services &amp;<br /><span className="text-zinc-600">Expertise</span>
          </h2>
        </div>

        {/* grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title}
                className="svc-card group relative bg-zinc-900 rounded-[1.5rem] p-8 border border-zinc-800 overflow-hidden transition-all duration-400 hover:border-[#39ff14]/50 hover:shadow-[0_24px_60px_-12px_rgba(57,255,20,0.1)] hover:-translate-y-1">
                
                {/* Hover gradient reveal */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#39ff14]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex flex-col h-full gap-5">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-black/50 border border-zinc-800 flex items-center justify-center text-[#39ff14] group-hover:bg-[#39ff14] group-hover:text-black transition-all duration-300">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white leading-tight tracking-tight">{s.title}</h3>
                  <p className="text-zinc-400 leading-relaxed text-[14px] flex-grow">{s.desc}</p>
                  
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {s.tags.map(t => (
                      <span key={t} className="text-[11px] font-semibold bg-black text-zinc-400 rounded-full px-3 py-1 border border-zinc-800">
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
