"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function NavBar() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const onToggleTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
    // 1) Emit ripple origin at toggle center (viewport coords)
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    window.dispatchEvent(new CustomEvent("theme-ripple", { detail: { x, y } } as any));

    // 2) Flip theme
    const effective = (theme === "system" ? systemTheme : theme) || "light";
    setTheme(effective === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    // Avoid hydration mismatch for theme text
    return (
      <nav className="liquid-nav">
        <div className="liquid-nav-inner">
          <Link href="/" className="sheen" style={{ fontWeight: 700 }}>Om Pant</Link>
          <button className="badge" disabled>Theme</button>
        </div>
      </nav>
    );
  }

  const effective = (theme === "system" ? systemTheme : theme) || "light";

  return (
    <nav className="liquid-nav">
      <div className="liquid-nav-inner">
        <Link href="/" className="sheen" style={{ fontWeight: 700 }}>Om Pant</Link>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {/* Other actions/links as needed */}
          <button className="badge" onClick={onToggleTheme} aria-label="Toggle theme">
  {effective === "dark" ? (
    <>
      <span role="img" aria-label="sun">🌞</span>&nbsp;Light
    </>
  ) : (
    <>
      <span role="img" aria-label="moon">🌙</span>&nbsp;Dark
    </>
  )}
</button>

        </div>
      </div>
    </nav>
  );
}
