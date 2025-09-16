"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function NavBar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  return (
    <nav className="liquid-nav">
      <div className="container liquid-nav-inner">
        <Link
          href="/"
          style={{
            fontWeight: 700,
            fontSize: "1.2rem",
            color: "var(--m3-primary)",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <img
            src="/photo.jpg"
            alt="Om Pant"
            width={32}
            height={32}
            style={{ borderRadius: 8, objectFit: "cover", flexShrink: 0 }}
          />
          Om Pant
        </Link>

        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <button
            className="button sheen"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            style={{
              background: "var(--m3-surface-container)",
              color: "var(--m3-on-surface)",
              fontSize: "12px",
            }}
          >
            {theme === "dark" ? "🌞" : "🌙"} {theme === "dark" ? "Light" : "Dark"}
          </button>

          <a className="button sheen" href="mailto:ompant624@gmail.com" style={{ fontSize: "12px" }}>
            ✉️ Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
