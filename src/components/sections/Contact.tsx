"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Phone, ArrowRight, Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".contact-elem", {
        y: 50, opacity: 0, duration: 0.8, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: containerRef.current, start: "top 75%" },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="contact" className="py-16 md:py-20 bg-surface relative overflow-hidden">
      {/* Gradient separator */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      
      {/* Decorative blob */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-[#39ff14]/5 to-transparent rounded-full blur-[80px] opacity-40 pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* ─ Left ─ */}
          <div className="flex flex-col gap-8">
            <div className="contact-elem section-tag w-fit">Get in touch</div>
            <h2 className="contact-elem text-4xl md:text-[3.5rem] font-black tracking-[-0.03em] text-white leading-[1.1]">
              Let&apos;s build<br />something<br /><span className="text-zinc-600">great together.</span>
            </h2>
            <p className="contact-elem text-[17px] text-zinc-400 leading-[1.7] max-w-md">
              Have a project in mind? Looking for a reliable developer for your business? Let&apos;s chat.
            </p>

            <div className="contact-elem flex flex-col gap-3">
              <a href="mailto:work.tahiruddinsekh@gmail.com"
                className="flex items-center gap-4 group hover:bg-zinc-900 rounded-2xl p-4 -ml-4 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-black border border-zinc-800 text-[#39ff14] flex items-center justify-center group-hover:bg-[#39ff14] group-hover:text-black group-hover:border-[#39ff14] transition-all duration-300 shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-0.5">Email</p>
                  <p className="font-semibold text-white text-sm">work.tahiruddinsekh@gmail.com</p>
                </div>
              </a>
              <a href="tel:+918670563907"
                className="flex items-center gap-4 group hover:bg-zinc-900 rounded-2xl p-4 -ml-4 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-black border border-zinc-800 text-[#39ff14] flex items-center justify-center group-hover:bg-[#39ff14] group-hover:text-black group-hover:border-[#39ff14] transition-all duration-300 shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-0.5">Phone / WhatsApp</p>
                  <p className="font-semibold text-white text-sm">+91 8670563907</p>
                </div>
              </a>
            </div>

            <div className="contact-elem flex gap-2.5">
              {[
                { icon: FaLinkedin, href: "https://www.linkedin.com/in/iamsekh/" },
                { icon: FaGithub, href: "https://github.com/iamsekh" },
                { icon: FaInstagram, href: "https://www.instagram.com/dev_sekh/" },
              ].map(({ icon: Icon, href }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-11 h-11 flex items-center justify-center rounded-xl bg-black border border-zinc-800 text-zinc-400 hover:bg-[#39ff14] hover:border-[#39ff14] hover:text-black transition-all duration-300 hover:-translate-y-0.5">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* ─ Right (form) ─ */}
          <div className="contact-elem">
            <form className="bg-zinc-900 border border-zinc-800 rounded-[1.5rem] p-8 md:p-10 flex flex-col gap-5 shadow-[0_16px_48px_-12px_rgba(0,0,0,0.5)]"
              onSubmit={e => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[12px] font-bold text-zinc-400 uppercase tracking-wider mb-2.5">Full Name</label>
                  <input type="text" placeholder="John Doe"
                    className="w-full rounded-xl border border-zinc-800 bg-black px-4 py-3.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-[#39ff14]/20 focus:border-[#39ff14] focus:bg-zinc-950 transition-all duration-200" />
                </div>
                <div>
                  <label className="block text-[12px] font-bold text-zinc-400 uppercase tracking-wider mb-2.5">Email Address</label>
                  <input type="email" placeholder="john@example.com"
                    className="w-full rounded-xl border border-zinc-800 bg-black px-4 py-3.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-[#39ff14]/20 focus:border-[#39ff14] focus:bg-zinc-950 transition-all duration-200" />
                </div>
              </div>
              <div>
                <label className="block text-[12px] font-bold text-zinc-400 uppercase tracking-wider mb-2.5">Subject</label>
                <input type="text" placeholder="Website Development"
                  className="w-full rounded-xl border border-zinc-800 bg-black px-4 py-3.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-[#39ff14]/20 focus:border-[#39ff14] focus:bg-zinc-950 transition-all duration-200" />
              </div>
              <div>
                <label className="block text-[12px] font-bold text-zinc-400 uppercase tracking-wider mb-2.5">Project Details</label>
                <textarea rows={5} placeholder="Tell me about your project..."
                  className="w-full rounded-xl border border-zinc-800 bg-black px-4 py-3.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-[#39ff14]/20 focus:border-[#39ff14] focus:bg-zinc-950 transition-all duration-200 resize-none" />
              </div>
              <button type="submit" className="btn-primary w-full justify-center text-base py-4">
                Send Message <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
