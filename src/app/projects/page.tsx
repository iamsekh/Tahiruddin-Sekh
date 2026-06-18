"use client";
import { useState } from "react";
import Image from "next/image";
import { ExternalLink, X, ZoomIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const projects = [
  {
    title: "Tomrer Nordsjaelland",
    category: "Commercial",
    image: "/img/project/tomer-cover.png",
    link: "https://tomrernordsjaelland.dk",
    desc: "Full WordPress website for a Scandinavian commercial client.",
  },
  {
    title: "Toile",
    category: "eCommerce",
    image: "/img/project/toile-cover.png",
    link: "http://toileecodesigners.com/",
    desc: "WooCommerce store with custom theme and multivendor functionality.",
  },
  {
    title: "Royal Cotton Textile",
    category: "eCommerce",
    image: "/img/project/royal-cover.png",
    link: "https://royalcottontextile.com",
    desc: "Product catalogue site with custom WordPress theme and SEO.",
  },
  {
    title: "Dlozi",
    category: "eCommerce",
    image: "/img/project/dlozi-cover.png",
    link: "https://dlozi.shop",
    desc: "Shopify store with custom theme and product management.",
  },
  {
    title: "Gulsan Libas",
    category: "eCommerce",
    image: "/img/project/gl.png",
    link: "#",
    desc: "Fashion eCommerce built on WordPress with Elementor.",
  },
  {
    title: "Sahyadri Hospital",
    category: "Commercial",
    image: "/img/project/hospilaty-cover.png",
    link: "#",
    desc: "Professional hospital website with appointment features.",
  },
  {
    title: "Food Recipe",
    category: "Landing Page",
    image: "/img/project/recipe-cover.png",
    link: "https://foodlove.42web.io/",
    desc: "Recipe blog with custom design and fast load times.",
  },
  {
    title: "Grocee",
    category: "eCommerce",
    image: "/img/project/grocee.png",
    link: "https://grocee.free.nf/",
    desc: "Online grocery store with WooCommerce.",
  },
  {
    title: "Restaurant Landing Page",
    category: "Landing Page",
    image: "/img/project/resturant-cover.png",
    link: "#",
    desc: "Elegant restaurant website with menu and reservation section.",
  },
  {
    title: "Modern Interio Designs",
    category: "Commercial",
    image: "/img/project/interio-cover.png",
    link: "#",
    desc: "Interior design agency portfolio site.",
  },
  {
    title: "Healthy Blog",
    category: "Landing Page",
    image: "/img/project/healty-cover.png",
    link: "#",
    desc: "Health & wellness content site with SEO optimisation.",
  },
  {
    title: "Portfolio",
    category: "Landing Page",
    image: "/img/project/portfolio-cover.png",
    link: "#",
    desc: "Custom portfolio template with clean minimalistic design.",
  },
];

const categories = ["All", "Commercial", "eCommerce", "Landing Page"];

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? projects : projects.filter(p => p.category === filter);

  return (
    <>
      <section id="projects" className="py-16 md:py-20 bg-background relative overflow-hidden">
        {/* Gradient separator */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
        
        <div className="container mx-auto px-6 max-w-7xl">
          {/* header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12 md:mb-16">
            <div>
              <div className="section-tag mb-6">Portfolio</div>
              <h2 className="text-4xl md:text-[3.5rem] font-black tracking-[-0.03em] text-white leading-[1.1]">
                Selected<br /><span className="text-zinc-600">Work</span>
              </h2>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 p-1 bg-zinc-900 border border-zinc-800 rounded-[2rem] w-full md:w-fit shadow-sm">
              {categories.map(c => (
                <button key={c} onClick={() => setFilter(c)}
                  className={`px-4 py-2 rounded-full text-[12px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer flex-grow text-center
                    ${filter === c ? "bg-[#39ff14] text-black shadow-md" : "text-zinc-400 hover:text-white"}`}>
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Project Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => (
                <motion.div 
                  key={p.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className={`group bg-zinc-900 rounded-[1.5rem] overflow-hidden border border-zinc-800 flex flex-col transition-all duration-400 hover:border-[#39ff14]/50 hover:shadow-[0_24px_60px_-12px_rgba(57,255,20,0.1)] hover:-translate-y-1 ${p.link === "#" ? "opacity-80" : ""}`}
                >
                  {/* Image Container */}
                  <div 
                    onClick={() => setSelectedImage(p.image)}
                    className="aspect-[16/10] relative overflow-hidden bg-black cursor-pointer"
                  >
                    <Image src={p.image} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                      <div className="bg-[#39ff14] text-black p-3 rounded-full shadow-2xl scale-0 group-hover:scale-100 transition-transform duration-300">
                        <ZoomIn size={18} />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col gap-3 flex-grow">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 w-fit">
                      {p.category}
                    </span>
                    
                    {p.link !== "#" ? (
                      <a href={p.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group/link w-fit">
                        <h3 className="text-lg font-bold text-white group-hover/link:text-[#39ff14] transition-colors tracking-tight">{p.title}</h3>
                        <ExternalLink size={14} className="text-zinc-500 group-hover/link:text-[#39ff14] transition-colors" />
                      </a>
                    ) : (
                      <h3 className="text-lg font-bold text-white tracking-tight">{p.title}</h3>
                    )}

                    <p className="text-[13px] text-zinc-400 leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-6 cursor-zoom-out"
          >
            <button 
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
              className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            >
              <X size={22} />
            </button>
            
            <motion.div 
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <Image 
                src={selectedImage} 
                alt="Project Preview" 
                fill 
                className="object-contain bg-black"
                quality={100}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
