"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // quickTo for buttery smooth tracking
    const dotX = gsap.quickTo(dot, "x", { duration: 0.1, ease: "power3.out" });
    const dotY = gsap.quickTo(dot, "y", { duration: 0.1, ease: "power3.out" });
    const ringX = gsap.quickTo(ring, "x", { duration: 0.25, ease: "power2.out" });
    const ringY = gsap.quickTo(ring, "y", { duration: 0.25, ease: "power2.out" });

    // We only want the circle cursor during hover/scroll interactions.
    // By default, let's keep opacity at 0
    gsap.set([dot, ring], { opacity: 0 });

    let isScrolling: any;

    const onMove = (e: MouseEvent) => {
      dotX(e.clientX);
      dotY(e.clientY);
      ringX(e.clientX);
      ringY(e.clientY);
    };

    const onScroll = () => {
      // Show cursor during scroll
      gsap.to([dot, ring], { opacity: 1, duration: 0.2 });
      
      clearTimeout(isScrolling);
      isScrolling = setTimeout(() => {
        // Hide cursor when scroll stops, unless hovering an interactive element
        if (!dot.classList.contains("is-hovering")) {
          gsap.to([dot, ring], { opacity: 0, duration: 0.4 });
        }
      }, 500);
    };

    const onEnterInteractive = () => {
      dot.classList.add("is-hovering");
      gsap.to([dot, ring], { opacity: 1, duration: 0.2 });
      gsap.to(dot, { scale: 0, duration: 0.2, ease: "power2.out" });
      gsap.to(ring, { scale: 2, borderColor: "rgba(215,246,90,0.9)", backgroundColor: "rgba(215,246,90,0.1)", duration: 0.3, ease: "power2.out" });
    };

    const onLeaveInteractive = () => {
      dot.classList.remove("is-hovering");
      gsap.to(dot, { scale: 1, duration: 0.2, ease: "power2.out" });
      gsap.to(ring, { scale: 1, borderColor: "rgba(215,246,90,0.5)", backgroundColor: "transparent", duration: 0.3, ease: "power2.out" });
      gsap.to([dot, ring], { opacity: 0, duration: 0.4, delay: 0.1 });
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("scroll", onScroll, { passive: true });

    // Attach to all interactive elements
    const attachListeners = () => {
      const interactives = document.querySelectorAll("a, button, [data-cursor-hover]");
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onEnterInteractive);
        el.removeEventListener("mouseleave", onLeaveInteractive);
        el.addEventListener("mouseenter", onEnterInteractive);
        el.addEventListener("mouseleave", onLeaveInteractive);
      });
    };

    attachListeners();

    // Observe DOM changes for dynamically added elements
    const observer = new MutationObserver(() => {
      attachListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        id="cursor-dot"
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 w-2 h-2 bg-[#D7F65A] rounded-full z-[9999]"
        style={{ transform: "translate(-50%, -50%)" }}
      />
      <div
        id="cursor-ring"
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 w-8 h-8 border border-[#D7F65A]/50 rounded-full z-[9998]"
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </>
  );
}
