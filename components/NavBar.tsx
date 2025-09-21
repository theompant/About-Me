import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function NavBar() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 640);
    handleResize(); // check once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onToggleTheme = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    window.dispatchEvent(new CustomEvent("theme-ripple", { detail: { x, y } } as any));
    const effective = (theme === "system" ? systemTheme : theme) || "light";
    setTheme(effective === "dark" ? "light" : "dark");
  };

  const effective = (theme === "system" ? systemTheme : theme) || "light";
  const themeIcon = effective === "dark" ? "🌞" : "🌙";

  if (!mounted) {
    // Optional: fallback skeleton or empty header
    return (
      <nav className="liquid-glass nav-root"></nav>
    );
  }

  return (
    <nav className="liquid-glass nav-root">
      {isMobile ? (
        <div className="nav-mobile">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener"
            className="pill-btn"
            aria-label="Download Resume"
          >
            <span role="img" aria-label="Download Resume">📄</span>
          </a>
          <span className="nav-logo nav-logo-mobile">theompant<sup>™</sup></span>
          <button className="pill-btn" aria-label="Toggle theme" onClick={onToggleTheme}>
            <span>{themeIcon}</span>
          </button>
        </div>
      ) : (
        <>
          <div className="nav-brand">
            <Link href="/" className="nav-logo">
              theompant<sup>™</sup>
            </Link>
          </div>
          <div className="nav-actions">
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
        </>
      )}
    </nav>
  );
}
