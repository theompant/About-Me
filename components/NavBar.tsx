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
      <nav className="liquid-glass nav-root">
        <div className="nav-mobile-left mobile-only">
          <a href="/resume.pdf" target="_blank" rel="noopener" className="resume-btn" aria-label="Download Resume">
            📄
          </a>
        </div>
        <div className="nav-brand">
          <Link href="/" className="nav-logo">
            theompant<sup>™</sup>
          </Link>
        </div>
        <div className="nav-mobile-right mobile-only">
          <button className="theme-btn" aria-label="Toggle theme">
            <span>🌞</span>
          </button>
        </div>
        <div className="nav-actions desktop-only" />
      </nav>
    );
  }

  const effective = (theme === "system" ? systemTheme : theme) || "light";
  const themeIcon = effective === "dark" ? "🌞" : "🌙";

  return (
    <nav className="liquid-glass nav-root">
      {/* MOBILE: left icon */}
      <div className="nav-mobile-left mobile-only">
        <a href="/resume.pdf" target="_blank" rel="noopener" className="resume-btn" aria-label="Download Resume">
          📄
        </a>
      </div>
      {/* Branding (always left on desktop, centered on mobile) */}
      <div className="nav-brand">
        <Link href="/" className="nav-logo">
          theompant<sup>™</sup>
        </Link>
      </div>
      {/* MOBILE: right icon */}
      <div className="nav-mobile-right mobile-only">
        <button className="theme-btn" aria-label="Toggle theme" onClick={onToggleTheme}>
          <span>{themeIcon}</span>
        </button>
      </div>
      {/* DESKTOP: actions right */}
      <div className="nav-actions desktop-only">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener"
          className="resume-download-btn"
        >
          📄 Download Resume
        </a>
        <button
          className="theme-toggle-btn"
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
