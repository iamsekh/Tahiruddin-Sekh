"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ArrowRight, Download } from "lucide-react";
import { SiOpenai, SiAnthropic } from "react-icons/si";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      
      tl.from(".hero-tag", { y: 30, opacity: 0, duration: 0.8 })
        .from(".hero-name-line", { y: 80, opacity: 0, duration: 1, stagger: 0.12, ease: "expo.out" }, "-=0.4")
        .from(".hero-sub", { y: 40, opacity: 0, duration: 0.8 }, "-=0.6")
        .from(".hero-desc", { y: 30, opacity: 0, duration: 0.7 }, "-=0.5")
        .from(".hero-cta-wrap", { y: 30, opacity: 0, duration: 0.7 }, "-=0.4")
        .from(".hero-image-wrap", { scale: 0.9, opacity: 0, duration: 1.4, ease: "expo.out" }, 0.3)
        .from(".hero-badge", { scale: 0, opacity: 0, duration: 0.6, stagger: 0.15, ease: "back.out(1.7)" }, "-=0.6")
        .from(".hero-line", { scaleX: 0, duration: 1.2, ease: "power3.inOut" }, "-=0.8");
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="home" className="relative min-h-screen flex items-center lg:items-end overflow-hidden pb-0 pt-28 md:pt-36 lg:pt-40 bg-background">
      <div className="absolute inset-0 dot-grid opacity-[0.2] pointer-events-none" />
      
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-0 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-[#39ff14]/10 to-transparent blur-[120px] opacity-80" />
        <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#39ff14]/5 to-transparent blur-[100px] opacity-60" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl grid lg:grid-cols-2 gap-8 lg:gap-12 items-center lg:items-end relative z-10">
        {/* ── Left Column ── */}
        <div className="flex flex-col gap-6 lg:gap-8 pb-4 lg:pb-32">
          <div className="hero-tag section-tag w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#39ff14] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#39ff14]" />
            </span>
            Available for opportunities
          </div>

          <div className="overflow-hidden">
            <h1 className="text-[clamp(3.5rem,8vw,7rem)] font-black tracking-[-0.04em] leading-[0.95] text-white">
              <span className="hero-name-line block">Tahiruddin</span>
              <span className="hero-name-line block text-gradient">Sekh</span>
            </h1>
          </div>

          <p className="hero-sub text-xl md:text-2xl font-medium text-zinc-400 tracking-tight">
            WordPress &amp; Web Developer
          </p>

          <p className="hero-desc text-[17px] text-zinc-400 leading-[1.7] max-w-md">
            Building beautiful, high-performance websites and web apps for 4+ years — specialising in WordPress, WooCommerce, Shopify, and modern front-end frameworks.
          </p>

          <div className="hero-cta-wrap flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1 w-full">
            <a href="https://drive.google.com/file/d/1L2MezHz7-9G60Uwive_fOPAlix7TNwaN/view?usp=sharing"
              target="_blank" rel="noopener noreferrer" className="btn-primary w-full sm:w-auto">
              View Resume <Download size={16} />
            </a>
            <Link href="#contact" className="btn-secondary w-full sm:w-auto">
              Contact Me <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* ── Right Column ── */}
        <div className="hero-image-wrap relative w-full h-[450px] md:h-[550px] lg:h-[750px] flex items-end justify-center mt-2 lg:mt-0">
          
          {/* Main Image */}
          <div className="relative w-full h-full z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] pointer-events-none">
            <Image
              src="/img/profile.png"
              alt="Tahiruddin Sekh"
              fill priority
              className="object-contain object-bottom"
              sizes="(max-width:768px) 100vw, 50vw"
            />
          </div>

          {/* ─── Badges ─── */}

          {/* React (Left top) - Circular */}
          <motion.div 
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="hero-badge absolute top-[15%] left-[2%] z-20 hidden md:flex items-center justify-center w-16 h-16 bg-zinc-900/80 backdrop-blur-md border border-zinc-800 rounded-full shadow-lg"
          >
            <Image src="/img/skills/react.png" alt="React" width={36} height={36} className="object-contain" />
          </motion.div>

          {/* Claude (Left bottom) - Circular */}
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="hero-badge absolute bottom-[25%] left-[2%] z-20 hidden md:flex items-center justify-center w-16 h-16 bg-zinc-900/80 backdrop-blur-md border border-zinc-800 rounded-full shadow-lg text-[#d97757]"
          >
            <SiAnthropic size={36} />
          </motion.div>

          {/* WordPress (Right top) - Circular */}
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            className="hero-badge absolute top-[18%] right-[2%] z-20 hidden md:flex items-center justify-center w-16 h-16 bg-zinc-900/80 backdrop-blur-md border border-zinc-800 rounded-full shadow-lg"
          >
            <Image src="/img/skills/wordpress.png" alt="WordPress" width={36} height={36} className="object-contain" />
          </motion.div>

          {/* ChatGPT (Right bottom) - Circular */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
            className="hero-badge absolute bottom-[25%] right-[2%] z-20 hidden md:flex items-center justify-center w-16 h-16 bg-zinc-900/80 backdrop-blur-md border border-zinc-800 rounded-full shadow-lg text-[#10a37f]"
          >
            <SiOpenai size={36} />
          </motion.div>

          {/* 4+ Years Card - Perfectly centered */}
          <motion.div 
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            className="hero-badge absolute bottom-[2%] left-1/2 -translate-x-1/2 z-30 glass rounded-3xl px-8 py-5 shadow-2xl flex items-center gap-4 whitespace-nowrap"
          >
            <span className="text-4xl md:text-5xl font-black text-white leading-none tracking-tighter">4+</span>
            <span className="text-[11px] md:text-xs font-bold text-zinc-400 uppercase tracking-[0.15em] leading-tight">Years<br/>Experience</span>
          </motion.div>

        </div>
      </div>

      <div className="hero-line absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
    </section>
  );
}
