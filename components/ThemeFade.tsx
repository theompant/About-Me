"use client";
import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

export default function ThemeFade() {
  const { theme } = useTheme();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add("active");
    const t = setTimeout(() => el.classList.remove("active"), 210); // match CSS 200ms + buffer
    return () => clearTimeout(t);
  }, [theme]);

  return <div ref={ref} className="theme-fade" />;
}
