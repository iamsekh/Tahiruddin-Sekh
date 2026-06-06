"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, GraduationCap, Calendar, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const experience = [
  {
    period: "Aug 2023 – Present",
    title: "WordPress Developer",
    company: "Freelance",
    type: "Full-time",
    bullets: [
      "Fully customised themes and implemented advanced functionalities for websites like Royal Cotton Textile and Dlozi Shop.",
      "Developed custom code to add unique features tailored to each client's requirements.",
      "Provided technical support, maintenance, and performance optimisations for client websites.",
    ],
  },
  {
    period: "Feb 2024 – Nov 2025",
    title: "Webmaster",
    company: "Toile",
    type: "Part-Time",
    bullets: [
      "Migrated the company's website from cPanel to Hostinger, ensuring a seamless transition.",
      "Improved mobile performance score from 60% to 100% and desktop performance to 92%.",
      "Handled all technical customer queries and built strong customer relationships.",
      "Managed multivendor operations and resolved all email account issues.",
    ],
  },
  {
    period: "Jan 2023 – Mar 2023",
    title: "CNID Apprenticeship",
    company: "ECIL, Hyderabad",
    type: "Apprenticeship",
    bullets: [
      "Assisted in development and deployment of communication and network infrastructure projects.",
      "Gained practical experience with SCADA software for real-time monitoring and industrial process control.",
    ],
  },
];

const education = [
  {
    period: "2019 – 2021",
    title: "Diploma in Computer Science & Engineering",
    institution: "Jahangirabad Institute of Technology (JIT)",
    desc: "Comprehensive program in CSE with a CGPA of 7.1.",
  },
  {
    period: "2017 – 2019",
    title: "10+2 Vocational — Computer Maintenance & Networking",
    institution: "Satish Chandra Govt. ITI",
    desc: "Secured a CGPA of 6.9. Prepared for a career in tech infrastructure.",
  },
  {
    period: "2017",
    title: "High School",
    institution: "Mamoon National School",
    desc: "Completed High School with a CGPA of 6.63.",
  },
];

export default function Experience() {
  const [tab, setTab] = useState<"exp" | "edu">("exp");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(".timeline-item", 
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: "power3.out", scrollTrigger: { trigger: containerRef.current, start: "top 85%" } }
      );
    }, containerRef);
    return () => ctx.revert();
  }, [tab]);

  return (
    <section id="experience" ref={containerRef} className="py-16 md:py-20 bg-background relative overflow-hidden">
      {/* Gradient separator */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      
      <div className="container mx-auto px-6 max-w-5xl">
        {/* header */}
        <div className="mb-12 md:mb-16">
          <div className="section-tag mb-6">Background</div>
          <h2 className="text-4xl md:text-[3.5rem] font-black tracking-[-0.03em] text-white leading-[1.1]">
            Experience &amp;<br /><span className="text-zinc-600">Education</span>
          </h2>

          {/* tabs */}
          <div className="flex gap-2 mt-10 p-1 bg-zinc-900 rounded-full w-fit">
            <button onClick={() => setTab("exp")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${tab === "exp" ? "bg-[#39ff14] text-black shadow-lg" : "text-zinc-400 hover:text-white"}`}>
              <Briefcase size={15} /> Work
            </button>
            <button onClick={() => setTab("edu")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${tab === "edu" ? "bg-[#39ff14] text-black shadow-lg" : "text-zinc-400 hover:text-white"}`}>
              <GraduationCap size={15} /> Education
            </button>
          </div>
        </div>

        {/* timeline */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={tab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="relative pl-8 border-l-2 border-zinc-800 space-y-8"
          >
            {tab === "exp"
              ? experience.map((e, i) => (
                <div key={i} className="timeline-item relative group">
                  {/* Dot */}
                  <div className="absolute -left-[1.56rem] top-8 w-3 h-3 rounded-full bg-[#39ff14] ring-4 ring-background shadow-sm" />
                  
                  <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-[#39ff14]/50 hover:shadow-[0_16px_40px_-12px_rgba(57,255,20,0.1)] transition-all duration-300">
                    <div className="flex flex-wrap gap-3 items-start justify-between mb-5">
                      <div>
                        <h3 className="text-xl font-bold text-white tracking-tight">{e.title}</h3>
                        <p className="text-zinc-400 font-medium text-sm mt-1">{e.company}</p>
                      </div>
                      <div className="flex items-center gap-2 text-[11px] font-bold text-zinc-400 bg-black border border-zinc-800 rounded-full px-3 py-1.5 uppercase tracking-wider">
                        <Calendar size={11} /> {e.period}
                        <span className="text-zinc-600">· {e.type}</span>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {e.bullets.map((b, j) => (
                        <li key={j} className="flex gap-3 text-[14px] text-zinc-400 leading-relaxed">
                          <ArrowUpRight size={14} className="mt-0.5 text-[#39ff14] shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))
              : education.map((e, i) => (
                <div key={i} className="timeline-item relative group">
                  <div className="absolute -left-[1.56rem] top-8 w-3 h-3 rounded-full bg-[#39ff14] ring-4 ring-background shadow-sm" />
                  
                  <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-[#39ff14]/50 hover:shadow-[0_16px_40px_-12px_rgba(57,255,20,0.1)] transition-all duration-300">
                    <div className="flex flex-wrap gap-3 items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-white tracking-tight">{e.title}</h3>
                        <p className="text-zinc-400 font-medium text-sm mt-1">{e.institution}</p>
                      </div>
                      <div className="flex items-center gap-2 text-[11px] font-bold text-zinc-400 bg-black border border-zinc-800 rounded-full px-3 py-1.5 uppercase tracking-wider">
                        <Calendar size={11} /> {e.period}
                      </div>
                    </div>
                    <p className="text-[14px] text-zinc-400 leading-relaxed">{e.desc}</p>
                  </div>
                </div>
              ))
            }
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
