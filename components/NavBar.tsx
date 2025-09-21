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

  const effective = (theme === "system" ? systemTheme : theme) || "light";
  const themeIcon = effective === "dark" ? "🌞" : "🌙";

  return (
    <nav className="liquid-glass nav-root">
      {/* Desktop: classic flex, branding left, actions right */}
      <div className="nav-desk">
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
            className="resume-download-btn pill-btn"
          >
            <span role="img" aria-label="Download Resume">📄</span>
            <span className="nav-btn-label">Download Resume</span>
          </a>
          {mounted ? (
            <button
              className="theme-toggle-btn pill-btn"
              aria-label="Toggle theme"
              onClick={onToggleTheme}
            >
              <span role="img" aria-label="Theme">{themeIcon}</span>
              <span className="nav-btn-label">{effective === "dark" ? "Light" : "Dark"}</span>
            </button>
          ) : (
            <span className="theme-toggle-btn pill-btn" aria-hidden="true">
              <span role="img" aria-label="Theme">🌙</span>
              <span className="nav-btn-label">Dark</span>
            </span>
          )}
        </div>
      </div>

      {/* Mobile: pills left/right, branding perfectly centered, all on one row */}
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
        <div className="nav-logo-mobile-wrap">
          <Link href="/" className="nav-logo nav-logo-mobile">
            theompant<sup>™</sup>
          </Link>
        </div>
        {mounted ? (
          <button
            className="pill-btn"
            aria-label="Toggle theme"
            onClick={onToggleTheme}
          >
            <span role="img" aria-label="Theme">{themeIcon}</span>
          </button>
        ) : (
          <span className="pill-btn" aria-hidden="true">
            <span role="img" aria-label="Theme">🌙</span>
          </span>
        )}
      </div>
    </nav>
  );
}
