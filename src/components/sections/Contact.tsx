"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Phone, Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Headline char-like stagger
      gsap.fromTo(
        ".contact-head",
        { y: "110%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          duration: 1,
          stagger: 0.12,
          ease: "expo.out",
          scrollTrigger: { trigger: ".contact-headline", start: "top 75%" },
        }
      );

      gsap.fromTo(
        ".contact-elem",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: ".contact-body", start: "top 80%" },
        }
      );

      // Background blobs
      gsap.to(".contact-blob-1", {
        x: 60,
        y: -40,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".contact-blob-2", {
        x: -50,
        y: 30,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 3,
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative py-24 md:py-40 bg-background overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      {/* Animated background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="contact-blob-1 absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-[#D7F65A]/10 to-transparent blur-[120px]" />
        <div className="contact-blob-2 absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#D7F65A]/6 to-transparent blur-[100px]" />
        <div className="noise-overlay" />
        <div className="absolute inset-0 dot-grid opacity-[0.12]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        {/* Big headline */}
        <div className="contact-headline mb-20 text-center">
          <div className="section-tag mb-8 mx-auto">Let&apos;s Talk</div>
          <h2 className="text-[clamp(2.5rem,7vw,7rem)] font-black tracking-[-0.04em] leading-[0.95] text-white">
            <div className="line-wrap"><span className="contact-head block">Let&apos;s Create</span></div>
            <div className="line-wrap">
              <span className="contact-head block text-gradient">Something</span>
            </div>
            <div className="line-wrap">
              <span className="contact-head block text-zinc-500">Remarkable.</span>
            </div>
          </h2>
        </div>

        {/* Content grid */}
        <div className="contact-body grid lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Left — Info */}
          <div className="flex flex-col gap-8">
            <p className="contact-elem text-[18px] text-zinc-400 leading-[1.8] max-w-md">
              Have a project in mind, an idea to explore, or just want to say hello?
              I&apos;d love to hear from you. Let&apos;s build something great together.
            </p>

            <div className="contact-elem flex flex-col gap-3">
              <a
                href="mailto:work.tahiruddinsekh@gmail.com"
                className="group flex items-center gap-4 hover:bg-zinc-950 rounded-2xl p-4 -ml-4 transition-all duration-300 border border-transparent hover:border-zinc-800"
              >
                <div className="w-12 h-12 rounded-2xl bg-zinc-950 border border-zinc-800 text-[#D7F65A] flex items-center justify-center group-hover:bg-[#D7F65A] group-hover:text-black group-hover:border-[#D7F65A] transition-all duration-300 flex-shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider mb-0.5">Email</p>
                  <p className="font-semibold text-white text-sm">work.tahiruddinsekh@gmail.com</p>
                </div>
              </a>
              <a
                href="tel:+918670563907"
                className="group flex items-center gap-4 hover:bg-zinc-950 rounded-2xl p-4 -ml-4 transition-all duration-300 border border-transparent hover:border-zinc-800"
              >
                <div className="w-12 h-12 rounded-2xl bg-zinc-950 border border-zinc-800 text-[#D7F65A] flex items-center justify-center group-hover:bg-[#D7F65A] group-hover:text-black group-hover:border-[#D7F65A] transition-all duration-300 flex-shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider mb-0.5">Phone / WhatsApp</p>
                  <p className="font-semibold text-white text-sm">+91 8670563907</p>
                </div>
              </a>
            </div>

            <div className="contact-elem">
              <p className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider mb-4">Find me on</p>
              <div className="flex gap-3">
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
                    className="w-12 h-12 flex items-center justify-center rounded-2xl bg-zinc-950 border border-zinc-800 text-zinc-400 hover:bg-[#D7F65A] hover:border-[#D7F65A] hover:text-black transition-all duration-300 hover:-translate-y-1"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="contact-elem">
            <form
              className="bg-zinc-950 border border-zinc-800 rounded-[2rem] p-8 md:p-10 flex flex-col gap-5 shadow-[0_32px_80px_-20px_rgba(0,0,0,0.6)]"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] font-bold text-zinc-500 uppercase tracking-wider mb-2.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-zinc-800 bg-black px-4 py-3.5 text-sm text-white placeholder:text-zinc-700 focus:outline-none focus:ring-2 focus:ring-[#D7F65A]/20 focus:border-[#D7F65A] transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-zinc-500 uppercase tracking-wider mb-2.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-zinc-800 bg-black px-4 py-3.5 text-sm text-white placeholder:text-zinc-700 focus:outline-none focus:ring-2 focus:ring-[#D7F65A]/20 focus:border-[#D7F65A] transition-all duration-200"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-zinc-500 uppercase tracking-wider mb-2.5">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Website Development"
                  className="w-full rounded-xl border border-zinc-800 bg-black px-4 py-3.5 text-sm text-white placeholder:text-zinc-700 focus:outline-none focus:ring-2 focus:ring-[#D7F65A]/20 focus:border-[#D7F65A] transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-zinc-500 uppercase tracking-wider mb-2.5">
                  Services You Want
                </label>
                <div className="relative">
                  <select
                    className="w-full appearance-none rounded-xl border border-zinc-800 bg-black px-4 py-3.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#D7F65A]/20 focus:border-[#D7F65A] transition-all duration-200 cursor-pointer"
                    defaultValue=""
                  >
                    <option value="" disabled className="text-zinc-500">Select a service...</option>
                    <option value="wordpress">WordPress Development</option>
                    <option value="ecommerce">E-Commerce Solution</option>
                    <option value="custom_app">Custom Web App</option>
                    <option value="seo">SEO & Performance</option>
                    <option value="ui_ux">UI/UX Design</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-zinc-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-zinc-500 uppercase tracking-wider mb-2.5">
                  Project Details
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full rounded-xl border border-zinc-800 bg-black px-4 py-3.5 text-sm text-white placeholder:text-zinc-700 focus:outline-none focus:ring-2 focus:ring-[#D7F65A]/20 focus:border-[#D7F65A] transition-all duration-200 resize-none"
                />
              </div>
              <MagneticButton className="w-full">
                <button
                  type="submit"
                  className="btn-primary w-full justify-center text-base py-4"
                >
                  Send Message <Send size={16} />
                </button>
              </MagneticButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
