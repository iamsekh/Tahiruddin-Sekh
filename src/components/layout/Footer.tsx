"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { ArrowUpRight, Heart } from "lucide-react";

const footerLinks = [
  { label: "About",      href: "#about" },
  { label: "Work",       href: "#projects" },
  { label: "Services",   href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Contact",    href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-background overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      {/* Accent glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gradient-to-t from-[#D7F65A]/5 to-transparent blur-[60px]" />

      <div className="container mx-auto px-6 max-w-7xl pt-16 pb-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 items-start mb-16">
          {/* Brand */}
          <div>
            <Link href="/" className="text-2xl font-black tracking-tighter text-white select-none">
              SEKH<span className="text-[#D7F65A]">.</span>
            </Link>
            <p className="text-sm text-zinc-400 mt-3 max-w-xs leading-relaxed">
              WordPress &amp; Web Developer crafting high-performance digital
              experiences that combine creativity with technical excellence.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D7F65A] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D7F65A]" />
              </span>
              <span className="text-[11px] font-bold text-[#D7F65A] uppercase tracking-widest">
                Available for Projects
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-[11px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-5">
              Navigation
            </p>
            <div className="flex flex-col gap-3">
              {footerLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-sm font-medium text-zinc-400 hover:text-[#D7F65A] transition-colors w-fit flex items-center gap-1.5 group"
                >
                  {l.label}
                  <ArrowUpRight
                    size={11}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Social + CTA */}
          <div>
            <p className="text-[11px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-5">
              Connect
            </p>
            <div className="flex gap-2.5 mb-6">
              {[
                { icon: FaLinkedin, href: "https://www.linkedin.com/in/iamsekh/", label: "LinkedIn" },
                { icon: FaGithub, href: "https://github.com/iamsekh", label: "GitHub" },
                { icon: FaInstagram, href: "https://www.instagram.com/dev_sekh/", label: "Instagram" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-[#D7F65A] hover:text-black hover:border-[#D7F65A] transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <a
              href="mailto:work.tahiruddinsekh@gmail.com"
              className="text-sm text-zinc-400 hover:text-[#D7F65A] transition-colors font-medium break-all"
            >
              work.tahiruddinsekh@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative pt-8">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent absolute top-0 left-0 right-0" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-[12px] text-zinc-600 font-medium">
              © {new Date().getFullYear()} Tahiruddin Sekh. All rights reserved.
            </p>
            <p className="text-[12px] text-zinc-600 flex items-center gap-1.5">
              Crafted with <Heart size={11} className="text-[#D7F65A]" fill="#D7F65A" /> and lots of coffee
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
