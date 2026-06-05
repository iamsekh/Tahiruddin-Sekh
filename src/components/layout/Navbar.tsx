"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { label: "About",      href: "#about" },
  { label: "Services",   href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects" },
  { label: "Contact",    href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center pt-5 px-4">
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`w-full max-w-4xl transition-all duration-500 ease-out rounded-full flex items-center justify-between px-2 pl-6 py-2
          ${scrolled 
            ? "bg-white/80 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.08)] border border-zinc-200/60" 
            : "bg-white/50 backdrop-blur-lg border border-zinc-200/40"
          }`}
      >
        {/* Logo */}
        <Link href="/" className="text-lg font-black tracking-tighter text-black select-none">
          SEKH<span className="text-zinc-300">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <a key={l.label} href={l.href}
              className="px-4 py-2 text-[13px] font-semibold text-zinc-500 hover:text-black rounded-full hover:bg-zinc-100/80 transition-all duration-200">
              {l.label}
            </a>
          ))}
          <a href="#contact"
            className="ml-3 flex items-center gap-1.5 bg-black text-white text-[13px] font-semibold rounded-full px-5 py-2.5 hover:bg-zinc-800 transition-colors shadow-sm">
            Hire Me <ArrowUpRight size={14} strokeWidth={2.5} />
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2.5 rounded-full hover:bg-zinc-100 transition-colors">
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.96 }} 
            animate={{ opacity: 1, y: 0, scale: 1 }} 
            exit={{ opacity: 0, y: -10, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-4 top-20 bg-white/95 backdrop-blur-3xl rounded-3xl p-6 flex flex-col gap-1 md:hidden border border-zinc-200 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] z-50">
            {links.map(l => (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)}
                className="px-4 py-3.5 text-base font-semibold text-zinc-700 hover:text-black hover:bg-zinc-100 rounded-2xl transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)}
              className="btn-primary justify-center mt-4 py-4 text-base">
              Hire Me <ArrowUpRight size={16} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
