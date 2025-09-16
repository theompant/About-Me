"use client";
import { useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeSync() {
  const { theme } = useTheme();
  useEffect(() => {
    const r = document.documentElement.style;
    if (theme === "dark") {
      r.removeProperty("--m3-surface");
      r.removeProperty("--m3-on-surface");
      r.removeProperty("--m3-surface-container");
      r.removeProperty("--m3-surface-container-high");
    }
  }, [theme]);
  return null;
}
