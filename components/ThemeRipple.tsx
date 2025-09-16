"use client";
import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";

export default function ThemeRipple() {
  const { theme } = useTheme();
  const rootRef = useRef<HTMLDivElement | null>(null);
  // Store the last click position from the toggle
  useEffect(() => {
    const handler = (e: CustomEvent<{ x: number; y: number }>) => {
      const host = rootRef.current;
      if (!host) return;
      // Create a dot at click position
      const dot = document.createElement("span");
      host.appendChild(dot);
      // Compute scale to cover viewport from click point
      const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
      const maxDx = Math.max(e.detail.x, vw - e.detail.x);
      const maxDy = Math.max(e.detail.y, vh - e.detail.y);
      const radius = Math.hypot(maxDx, maxDy);
      const scale = (radius * 2) / 24; // 24px base

      // Position and scale via CSS vars for smoothness
      dot.style.setProperty("--x", `${e.detail.x}px`);
      dot.style.setProperty("--y", `${e.detail.y}px`);
      dot.style.setProperty("--scale", `${scale}`);

      // Kick animation on next frame
      requestAnimationFrame(() => {
        dot.classList.add("expand");
      });

      // Cleanup after animation
      const t = setTimeout(() => {
        dot.remove();
      }, 560);
      return () => clearTimeout(t);
    };

    // Listen for global theme-ripple events
    window.addEventListener("theme-ripple" as any, handler as any);
    return () => window.removeEventListener("theme-ripple" as any, handler as any);
  }, []);

  // Repaint on theme change so the dot background matches new surface quickly
  useEffect(() => {
    if (!rootRef.current) return;
    // Force style recalc by touching variable
    rootRef.current.style.backgroundColor = "transparent";
    // no-op; circle uses var(--m3-surface)
  }, [theme]);

  return <div ref={rootRef} className="theme-ripple" />;
}
