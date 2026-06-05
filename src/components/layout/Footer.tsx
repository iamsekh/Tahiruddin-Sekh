"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-white overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />
      
      <div className="container mx-auto px-6 max-w-7xl pt-16 pb-6">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Brand */}
          <div>
            <Link href="/" className="text-2xl font-black tracking-tighter text-black select-none">
              SEKH<span className="text-zinc-300">.</span>
            </Link>
            <p className="text-sm text-zinc-500 mt-3 max-w-xs leading-relaxed">
              WordPress &amp; Web Developer crafting high-performance digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-[0.2em] mb-4">Quick Links</p>
            <div className="flex flex-col gap-2.5">
              {footerLinks.map(l => (
                <a key={l.label} href={l.href} className="text-sm font-medium text-zinc-500 hover:text-black transition-colors w-fit flex items-center gap-1 group">
                  {l.label}
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-[0.2em] mb-4">Connect</p>
            <div className="flex gap-2.5">
              {[
                { icon: FaLinkedin, href: "https://www.linkedin.com/in/iamsekh/" },
                { icon: FaGithub, href: "https://github.com/iamsekh" },
                { icon: FaInstagram, href: "https://www.instagram.com/dev_sekh/" },
              ].map(({ icon: Icon, href }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-500 hover:bg-black hover:text-white transition-all duration-300 hover:-translate-y-0.5">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 flex flex-col items-center justify-center gap-4 relative">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-zinc-200 to-transparent absolute top-0 left-0 right-0" />
          <p className="text-[12px] text-zinc-400 font-medium relative text-center">© {new Date().getFullYear()} Tahiruddin Sekh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
