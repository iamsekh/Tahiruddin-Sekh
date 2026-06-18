"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function PageLoader({ onComplete }: { onComplete?: () => void }) {
  const loaderRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const lineFillRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    gsap.registerPlugin(ScrollTrigger);

    const loader = loaderRef.current;
    const counter = counterRef.current;
    const lineFill = lineFillRef.current;
    if (!loader || !counter || !lineFill) return;

    // Prevent scroll during load
    document.body.style.overflow = "hidden";

    const obj = { val: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "";
        ScrollTrigger.refresh();
        onComplete?.();
      },
    });

    // Fast count from 0 to 100
    tl.to(obj, {
      val: 100,
      duration: 1.2, // Faster
      ease: "power3.inOut",
      onUpdate() {
        const v = Math.round(obj.val);
        if (counter) counter.textContent = `${v}%`;
        if (lineFill) lineFill.style.width = `${v}%`;
      },
    })
    // Exit: Horizontal split instead of vertical for a different style
    .to(".loader-panel", {
      scaleY: 0,
      duration: 0.7,
      ease: "power4.inOut",
      transformOrigin: "top",
      stagger: 0.1,
    }, "+=0.1")
    .to("#loader-content", {
      opacity: 0,
      scale: 0.9,
      duration: 0.4,
      ease: "power2.in",
    }, "-=0.7")
    // Hide loader entirely
    .set(loader, { display: "none" });

    return () => {
      tl.kill();
      document.body.style.overflow = "";
    };
  }, [mounted, onComplete]);

  if (!mounted) return null;

  return (
    <div id="page-loader" ref={loaderRef} className="fixed inset-0 z-[999] flex items-center justify-center pointer-events-none">
      <div className="loader-panel absolute inset-0 bg-zinc-950 z-0 origin-top" />
      <div id="loader-content" className="relative z-10 flex flex-col items-center gap-6">
        <div id="loader-logo" className="text-4xl font-black text-white tracking-tighter">
          SEKH<span className="text-[#D7F65A]">.</span>
        </div>
        <div id="loader-line" className="w-48 h-[2px] bg-zinc-800 rounded-full overflow-hidden">
          <div id="loader-line-fill" ref={lineFillRef} className="h-full bg-[#D7F65A] w-0" />
        </div>
        <div id="loader-counter" ref={counterRef} className="text-[#D7F65A] font-mono text-sm tracking-widest">
          0%
        </div>
      </div>
    </div>
  );
}
