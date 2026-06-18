"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marcus Thielemann",
    role: "Owner, Tomrer Nordsjaelland",
    avatar: "MT",
    stars: 5,
    text: "Tahiruddin delivered a flawless website for our carpentry business. The performance improvements alone doubled our inquiry rate. Truly exceptional work — fast, responsive, and professional.",
  },
  {
    name: "Nadia El-Fassi",
    role: "Founder, Toile Eco Designers",
    avatar: "NE",
    stars: 5,
    text: "Our WooCommerce migration was seamless. Performance went from 60% to 100% on mobile — I've seen nothing like it. Tahiruddin understands both design and technical SEO deeply.",
  },
  {
    name: "Rajesh Mehta",
    role: "Director, Royal Cotton Textile",
    avatar: "RM",
    stars: 5,
    text: "The e-commerce store Tahiruddin built for us is stunning and blazing fast. Our sales have increased by 40% since launch. He's my go-to developer for everything web-related.",
  },
  {
    name: "Sipho Ndlovu",
    role: "CEO, Dlozi Shop",
    avatar: "SN",
    stars: 5,
    text: "Excellent communication, pixel-perfect execution, and delivered ahead of schedule. The Shopify store looks and performs exactly as we envisioned. Highly recommended!",
  },
  {
    name: "Ananya Sharma",
    role: "Marketing Lead, Grocee",
    avatar: "AS",
    stars: 5,
    text: "Tahiruddin's attention to UX and conversion optimization is unmatched. Our cart abandonment rate dropped significantly after he redesigned our checkout flow.",
  },
  {
    name: "Lars Petersen",
    role: "Webmaster, Nordic Commerce",
    avatar: "LP",
    stars: 5,
    text: "Clean code, great documentation, and always available when we needed changes. The custom plugin he built for us has saved hours of manual work every week.",
  },
];

function TestimonialCard({ t }: { t: (typeof testimonials)[0] }) {
  return (
    <div className="flex-shrink-0 w-[360px] md:w-[400px] bg-zinc-950 border border-zinc-800/80 rounded-3xl p-7 flex flex-col gap-4 mx-3 hover:border-[#D7F65A]/40 transition-all duration-300">
      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: t.stars }).map((_, i) => (
          <Star key={i} size={14} fill="#D7F65A" className="text-[#D7F65A]" />
        ))}
      </div>
      {/* Quote */}
      <p className="text-zinc-300 text-[15px] leading-relaxed flex-grow">&ldquo;{t.text}&rdquo;</p>
      {/* Author */}
      <div className="flex items-center gap-3 mt-2">
        <div className="w-10 h-10 rounded-full bg-[#D7F65A] text-black flex items-center justify-center font-black text-sm flex-shrink-0">
          {t.avatar}
        </div>
        <div>
          <p className="text-white font-bold text-sm leading-none mb-1">{t.name}</p>
          <p className="text-zinc-500 text-[12px]">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const row1 = [...testimonials, ...testimonials];
  const row2 = [...testimonials].reverse();
  const row2x = [...row2, ...row2];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".test-header",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: containerRef.current, start: "top 80%" },
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-20 md:py-32 bg-background relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(215,246,90,0.04)_0%,transparent_70%)]" />

      <div className="container mx-auto px-6 max-w-7xl mb-14">
        <div className="test-header section-tag mb-6">Client Love</div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2 className="test-header text-4xl md:text-[3.5rem] font-black tracking-[-0.04em] text-white leading-[1.05]">
            What clients<br />
            <span className="text-zinc-600">say about me.</span>
          </h2>
          <p className="test-header text-zinc-400 text-[17px] max-w-sm leading-relaxed">
            Real feedback from real clients who trusted me to build their digital presence.
          </p>
        </div>
      </div>

      {/* Rows */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        {/* Row 1 — left */}
        <div className="mb-5 pb-1">
          <div className="flex marquee-left w-max">
            {row1.map((t, i) => (
              <TestimonialCard key={`r1-${i}`} t={t} />
            ))}
          </div>
        </div>

        {/* Row 2 — right (opposite direction) */}
        <div>
          <div className="flex marquee-right w-max">
            {row2x.map((t, i) => (
              <TestimonialCard key={`r2-${i}`} t={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
