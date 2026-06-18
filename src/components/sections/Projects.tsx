"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

const allProjects = [
  {
    id: 1,
    name: "Tomrer Nordsjaelland",
    category: "Commercial",
    cover: "/img/project/tomer-cover.png",
    url: "https://tomrernordsjaelland.dk",
  },
  {
    id: 2,
    name: "Toile Eco Designers",
    category: "e-Commerce",
    cover: "/img/project/toile-cover.png",
    url: "http://toileecodesigners.com/",
  },
  {
    id: 3,
    name: "Royal Cotton Textile",
    category: "e-Commerce",
    cover: "/img/project/royal-cover.png",
    url: "https://royalcottontextile.com",
  },
  {
    id: 4,
    name: "Dlozi Shop",
    category: "e-Commerce",
    cover: "/img/project/dlozi-cover.png",
    url: "https://dlozi.shop",
  },
  {
    id: 5,
    name: "Gulsan Libas",
    category: "e-Commerce",
    cover: "/img/project/gl.png",
    url: "#",
  },
  {
    id: 6,
    name: "Sahyadri Hospital",
    category: "Commercial",
    cover: "/img/project/hospilaty-cover.png",
    url: "#",
  },
  {
    id: 7,
    name: "Food Recipe App",
    category: "Landing-Page",
    cover: "/img/project/recipe-cover.png",
    url: "https://foodlove.42web.io/",
  },
  {
    id: 8,
    name: "Grocee Market",
    category: "e-Commerce",
    cover: "/img/project/grocee.png",
    url: "https://grocee.free.nf/",
  },
  {
    id: 9,
    name: "Restaurant Landing",
    category: "Landing-Page",
    cover: "/img/project/resturant-cover.png",
    url: "#",
  },
  {
    id: 10,
    name: "Modern Interio",
    category: "Commercial",
    cover: "/img/project/interio-cover.png",
    url: "#",
  },
  {
    id: 11,
    name: "Healthy Blog",
    category: "Landing-Page",
    cover: "/img/project/healty-cover.png",
    url: "#",
  },
  {
    id: 12,
    name: "Portfolio Template",
    category: "Landing-Page",
    cover: "/img/project/portfolio-cover.png",
    url: "#",
  },
];

const FILTERS = ["All", "e-Commerce", "Landing-Page", "Commercial"] as const;
type Filter = (typeof FILTERS)[number];

function ProjectCard({
  project,
}: {
  project: (typeof allProjects)[0];
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotX = ((y - cy) / cy) * -12;
    const rotY = ((x - cx) / cx) * 12;
    gsap.to(innerRef.current, {
      rotationX: rotX,
      rotationY: rotY,
      duration: 0.3,
      ease: "power2.out",
      transformPerspective: 800,
    });
  };

  const onMouseLeave = () => {
    gsap.to(innerRef.current, {
      rotationX: 0,
      rotationY: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.5)",
    });
  };

  return (
    <div
      ref={cardRef}
      className="proj-card group relative"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div ref={innerRef} className="proj-card-inner">
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800 hover:border-[#D7F65A]/50 transition-all duration-400 hover:shadow-[0_24px_60px_-10px_rgba(215,246,90,0.15)]">
          <Image
            src={project.cover}
            alt={project.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

          {/* Content reveal */}
          <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
            <div className="flex items-end justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold text-[#D7F65A] uppercase tracking-[0.2em] mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-white font-bold text-xl leading-tight">{project.name}</h3>
              </div>
              {project.url !== "#" && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#D7F65A] hover:scale-110 transition-all duration-300 shadow-xl"
                >
                  <ArrowUpRight size={20} strokeWidth={2.5} />
                </a>
              )}
            </div>
          </div>

          {/* Category pill always visible */}
          <div className="absolute top-4 left-4">
            <span className="text-[10px] font-bold bg-black/70 backdrop-blur-sm text-zinc-300 uppercase tracking-widest px-3 py-1.5 rounded-full border border-zinc-700">
              {project.category}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const filtered =
    activeFilter === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeFilter);

  // Animate grid on filter change and on scroll entry
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".proj-card",
        { y: 60, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.06,
          ease: "power3.out",
        }
      );
    }, gridRef);
    return () => ctx.revert();
  }, [activeFilter]);

  // Scroll-triggered header
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".proj-header-item",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="py-20 md:py-32 bg-background relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#D7F65A]/5 to-transparent blur-[100px]" />

      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div>
            <div className="proj-header-item section-tag mb-6">Selected Work</div>
            <h2 className="proj-header-item text-4xl md:text-[3.5rem] font-black tracking-[-0.04em] text-white leading-[1.05]">
              Projects &amp;<br />
              <span className="text-zinc-600">Case Studies</span>
            </h2>
          </div>

          {/* Filter tabs */}
          <div className="proj-header-item flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeFilter === f
                    ? "bg-[#D7F65A] text-black shadow-[0_4px_20px_rgba(215,246,90,0.35)]"
                    : "bg-zinc-900 border border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-white"
                }`}
              >
                {f === "Landing-Page" ? "Landing Page" : f}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-6"
        >
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
