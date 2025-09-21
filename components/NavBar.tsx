import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function NavBar() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const onToggleTheme = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    window.dispatchEvent(new CustomEvent("theme-ripple", { detail: { x, y } } as any));
    const effective = (theme === "system" ? systemTheme : theme) || "light";
    setTheme(effective === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return (
      <nav className="liquid-glass" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 24px", position: "sticky", top: 0, zIndex: 100 }}>
        <Link href="/" className="nav-logo">
          theompant<sup>™</sup>
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ fontSize: "14px", fontWeight: 500 }}>Theme</span>
        </div>
      </nav>
    );
  }

  const effective = (theme === "system" ? systemTheme : theme) || "light";

  return (
    <nav className="liquid-glass" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 24px", position: "sticky", top: 0, zIndex: 100, transition: "all var(--m3-fast)" }}>
      <Link href="/" className="nav-logo">
        theompant<sup>™</sup>
      </Link>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        {/* Resume Download Button */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener"
          className="resume-download-btn"
        >
          📄 Download Resume
        </a>
        {/* Theme Toggle */}
        <button
          onClick={onToggleTheme}
          style={{
            background: "color-mix(in srgb, var(--m3-primary) 12%, transparent)",
            border: "1px solid color-mix(in srgb, var(--m3-primary) 20%, transparent)",
            borderRadius: "999px",
            padding: "8px 16px",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: 500,
            display: "flex",
            alignItems: "center",
            gap: "6px",
            transition: "all var(--m3-fast)",
            color: "var(--m3-on-surface)"
          }}
          onMouseOver={e => {
            e.currentTarget.style.background = "color-mix(in srgb, var(--m3-primary) 16%, transparent)";
            e.currentTarget.style.transform = "scale(1.02)";
          }}
          onMouseOut={e => {
            e.currentTarget.style.background = "color-mix(in srgb, var(--m3-primary) 12%, transparent)";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          {effective === "dark" ? (
            <>
              <span>🌞</span> Light
            </>
          ) : (
            <>
              <span>🌙</span> Dark
            </>
          )}
        </button>
      </div>
    </nav>
  );
}
