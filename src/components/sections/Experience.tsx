"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const experience = [
  {
    period: "Aug 2023 – Present",
    title: "WordPress Developer",
    company: "Freelance",
    location: "Remote",
    type: "Full-time",
    desc: "Fully customised themes and implemented advanced functionalities for websites like Royal Cotton Textile and Dlozi Shop. Maintained and optimised client websites.",
    tags: ["WordPress", "WooCommerce", "PHP", "Performance"],
  },
  {
    period: "Feb 2024 – Nov 2025",
    title: "Webmaster",
    company: "Toile",
    location: "Remote",
    type: "Part-Time",
    desc: "Migrated the company's website to Hostinger. Improved mobile performance score from 60% to 100%. Managed multivendor operations and resolved email issues.",
    tags: ["Migration", "Core Web Vitals", "Technical Support"],
  },
  {
    period: "Jan 2023 – Mar 2023",
    title: "CNID Apprenticeship",
    company: "ECIL",
    location: "Hyderabad, India",
    type: "Apprenticeship",
    desc: "Assisted in development and deployment of communication and network infrastructure. Gained practical experience with SCADA software.",
    tags: ["SCADA", "Networking", "Infrastructure"],
  },
];

const education = [
  {
    period: "2019 – 2021",
    title: "Diploma in Computer Science",
    company: "Jahangirabad Institute of Technology",
    location: "UP, India",
    type: "Full-time",
    desc: "Comprehensive CSE program with a CGPA of 7.1. Developed strong programming and engineering fundamentals.",
    tags: ["C++", "Java", "Data Structures"],
  },
  {
    period: "2017 – 2019",
    title: "10+2 Vocational — Computer Maintenance",
    company: "Satish Chandra Govt. ITI",
    location: "India",
    type: "Full-time",
    desc: "Secured CGPA of 6.9. Prepared for a career in tech infrastructure with hands-on hardware training.",
    tags: ["Hardware", "Networking", "Troubleshooting"],
  },
];

export default function Experience() {
  const [tab, setTab] = useState<"exp" | "edu">("exp");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Header
      gsap.fromTo(
        ".exp-header",
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

  const items = tab === "exp" ? experience : education;

  return (
    <section
      id="experience"
      ref={containerRef}
      className="py-20 md:py-32 bg-background relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-1/4 w-[600px] h-[600px] bg-gradient-to-bl from-[#D7F65A]/5 to-transparent blur-[120px]" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Header & Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20">
          <div>
            <div className="exp-header section-tag mb-6">Background</div>
            <h2 className="exp-header text-[clamp(2.5rem,5vw,4rem)] font-black tracking-[-0.04em] text-white leading-[1.05]">
              Experience &amp;<br />
              <span className="text-zinc-600">Education</span>
            </h2>
          </div>

          <div className="exp-header flex p-1.5 bg-zinc-950/80 backdrop-blur-md border border-zinc-800/80 rounded-full w-fit shadow-xl">
            {(["exp", "edu"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`flex items-center gap-2 px-8 py-3 rounded-full font-bold text-sm transition-all duration-400 ${
                  tab === t
                    ? "bg-[#D7F65A] text-black shadow-[0_4px_20px_rgba(215,246,90,0.3)] scale-100"
                    : "text-zinc-400 hover:text-white scale-95"
                }`}
              >
                {t === "exp" ? <Briefcase size={16} /> : <GraduationCap size={16} />}
                {t === "exp" ? "Work" : "Education"}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Layout */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {items.map((item, i) => (
                <div 
                  key={i} 
                  className="group flex flex-col bg-zinc-950/50 backdrop-blur-xl border border-zinc-800/60 rounded-[2rem] p-8 hover:bg-zinc-900/50 hover:border-[#D7F65A]/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(215,246,90,0.1)]"
                >
                  {/* Period & Type */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-bold text-[#D7F65A] uppercase tracking-widest bg-[#D7F65A]/10 px-3 py-1.5 rounded-full border border-[#D7F65A]/20">
                      {item.period}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 group-hover:text-[#D7F65A] group-hover:border-[#D7F65A]/50 transition-colors">
                      {tab === "exp" ? <Briefcase size={14} /> : <GraduationCap size={14} />}
                    </span>
                  </div>

                  {/* Title & Company */}
                  <div className="mb-6 flex-grow">
                    <h3 className="text-xl lg:text-2xl font-bold text-white tracking-tight leading-tight mb-2">
                      {item.title}
                    </h3>
                    <p className="text-zinc-400 font-medium text-sm flex items-center gap-1.5 mb-1.5">
                      <span className="text-white">{item.company}</span>
                    </p>
                    <p className="text-zinc-500 text-xs flex items-center gap-1">
                      <MapPin size={12} /> {item.location}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                    {item.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-zinc-800/50">
                    {item.tags.map(tag => (
                      <span key={tag} className="text-[11px] font-semibold text-zinc-500 bg-zinc-900 px-2.5 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
