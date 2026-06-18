"use client";

import { useRef, useCallback, ReactNode } from "react";
import gsap from "gsap";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export default function MagneticButton({
  children,
  className = "",
  strength = 0.4,
}: MagneticButtonProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const xTo = useRef<gsap.QuickToFunc | null>(null);
  const yTo = useRef<gsap.QuickToFunc | null>(null);
  const ixTo = useRef<gsap.QuickToFunc | null>(null);
  const iyTo = useRef<gsap.QuickToFunc | null>(null);

  const setupQuickTo = useCallback(() => {
    if (wrapRef.current && !xTo.current) {
      xTo.current = gsap.quickTo(wrapRef.current, "x", { duration: 0.6, ease: "elastic.out(1, 0.4)" });
      yTo.current = gsap.quickTo(wrapRef.current, "y", { duration: 0.6, ease: "elastic.out(1, 0.4)" });
    }
    if (innerRef.current && !ixTo.current) {
      ixTo.current = gsap.quickTo(innerRef.current, "x", { duration: 0.45, ease: "elastic.out(1, 0.4)" });
      iyTo.current = gsap.quickTo(innerRef.current, "y", { duration: 0.45, ease: "elastic.out(1, 0.4)" });
    }
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    setupQuickTo();
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    xTo.current?.(dx * strength);
    yTo.current?.(dy * strength);
    ixTo.current?.(dx * strength * 0.5);
    iyTo.current?.(dy * strength * 0.5);
  }, [strength, setupQuickTo]);

  const onMouseLeave = useCallback(() => {
    xTo.current?.(0);
    yTo.current?.(0);
    ixTo.current?.(0);
    iyTo.current?.(0);
  }, []);

  return (
    <div
      ref={wrapRef}
      className={`magnetic-wrap ${className}`}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div ref={innerRef}>
        {children}
      </div>
    </div>
  );
}
