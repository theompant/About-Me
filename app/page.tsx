"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { applyTheme, seedDynamicTheme } from "@/lib/dynamic-color";
import profile from "@/content/profile.json";
import skills from "@/content/skills.json";
import projects from "@/content/projects.json";
import education from "@/content/education.json";
import experience from "@/content/experience.json";
import certs from "@/content/certifications.json";
import NavBar from "@/components/NavBar";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";

/* Extract a coarse dominant color from an image element */
function extractDominantColor(img: HTMLImageElement, step = 10): string {
  try {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return "#6750a4";
    canvas.width = img.naturalWidth || img.width;
    canvas.height = img.naturalHeight || img.height;
    if (!canvas.width || !canvas.height) return "#6750a4";
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    const { data } = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let r = 0, g = 0, b = 0, count = 0;
    const stride = Math.max(1, Math.floor((data.length / 4) / 5000));
    for (let i = 0; i < data.length; i += 4 * stride) {
      r += data[i]; g += data[i + 1]; b += data[i + 2]; count++;
    }
    if (!count) return "#6750a4";
    r = Math.round(r / count); g = Math.round(g / count); b = Math.round(b / count);
    return "#" + [r, g, b].map(x => x.toString(16).padStart(2, "0")).join("");
  } catch {
    return "#6750a4";
  }
}

const SEED_STORAGE_KEY = "m3_seed_v1";

export default function Home() {
  const initialSeed =
    (typeof window !== "undefined" && localStorage.getItem(SEED_STORAGE_KEY)) || "#6750a4";

  const [seed, setSeed] = useState<string>(initialSeed);
  const seededOnce = useRef(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    applyTheme(seedDynamicTheme(seed));
    try { localStorage.setItem(SEED_STORAGE_KEY, seed); } catch {}
  }, [seed]);

  useEffect(() => {
    applyTheme(seedDynamicTheme(seed));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useLayoutEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && !seededOnce.current) {
      const c = extractDominantColor(img);
      setSeed(c);
      seededOnce.current = true;
    }
  }, []);

  const handleImgLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    if (seededOnce.current) return;
    const c = extractDominantColor(e.currentTarget);
    setSeed(c);
    seededOnce.current = true;
  };

  return (
    <>
      <NavBar />
      <main className="container" style={{ paddingTop: 12 }}>
        {/* Header Section */}
        <header
          className="fade-in"
          style={{
            display: "flex",
            gap: 20,
            alignItems: "center",
            margin: "72px 0 40px",
            padding: "8px 0",
            flexWrap: "wrap",
            background:
              "linear-gradient(180deg, color-mix(in srgb, var(--m3-surface) 92%, transparent), transparent)",
            borderRadius: 16,
          }}
        >
          <img
            ref={imgRef}
            src="/photo.jpg"
            alt="Om Pant"
            width={80}
            height={80}
            onLoad={handleImgLoad}
            key="/photo.jpg"
            style={{ borderRadius: 20, objectFit: "cover", flexShrink: 0 }}
          />

          <div style={{ flex: 1, minWidth: "300px" }}>
            <h1>{profile.name}</h1>
            <p style={{ fontSize: "1.1rem", marginBottom: "12px" }}>{profile.title}</p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href={profile.links.github as string} className="badge" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={profile.links.linkedin as string} className="badge" target="_blank" rel="noopener noreferrer">LinkedIn</a>

              <span className="badge">📍 {profile.location}</span>
              <a href={`mailto:${profile.email}`} className="badge">✉️ {profile.email}</a>
              <a href={`tel:${profile.phone}`} className="badge">📱 {profile.phone}</a>
            </div>
          </div>
        </header>

        {/* About Section */}
        <section className="card fade-in">
          <h2>About Me</h2>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>{profile.objective}</p>
        </section>

        {/* Skills Section */}
        <section className="card fade-in">
          <h2>Skills & Technologies</h2>

          <div style={{ marginBottom: "16px" }}>
            <h3 style={{ fontSize: "1rem", marginBottom: "8px", color: "var(--m3-secondary)" }}>Tools & Frameworks</h3>
            <div>{skills.tools.map((t) => <span key={t} className="badge">{t}</span>)}</div>
          </div>

          <div style={{ marginBottom: "16px" }}>
            <h3 style={{ fontSize: "1rem", marginBottom: "8px", color: "var(--m3-secondary)" }}>Programming Languages</h3>
            <div>{skills.languages.map((t) => <span key={t} className="badge">{t}</span>)}</div>
          </div>

          <div style={{ marginBottom: "16px" }}>
            <h3 style={{ fontSize: "1rem", marginBottom: "8px", color: "var(--m3-secondary)" }}>Development Platforms</h3>
            <div>{skills.platforms.map((t) => <span key={t} className="badge">{t}</span>)}</div>
          </div>

          <div>
            <h3 style={{ fontSize: "1rem", marginBottom: "8px", color: "var(--m3-secondary)" }}>Core Competencies</h3>
            <div>{skills.coursework.concat(skills.soft).map((t) => <span key={t} className="badge">{t}</span>)}</div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="card fade-in">
          <h2>Professional Experience</h2>
          {experience.map((e, index) => (
            <div key={e.role + e.company} style={{ marginBottom: index < experience.length - 1 ? "24px" : 0 }}>
              <h3>{e.role}</h3>
              <p style={{ fontWeight: 600, color: "var(--m3-primary)", marginBottom: "4px" }}>{e.company}</p>

              {/* meta row: location left, dates right */}
              <p className="meta" style={{ marginBottom: "12px" }}>
                <span>📍 {e.location}</span>
                <span className="spacer" />
                <span className="dates">📅 {e.dates}</span>
              </p>

              <ul>{e.bullets.map((b, i) => <li key={i}>{b}</li>)}</ul>
            </div>
          ))}
        </section>

        {/* Projects Section */}
        <section className="card fade-in">
          <h2>Featured Projects</h2>
          {projects.map((p, index) => (
            <div key={p.name} style={{ marginBottom: index < projects.length - 1 ? "24px" : 0 }}>
              <h3>{p.name}</h3>
              <p style={{ marginBottom: "12px" }}>{p.summary}</p>
              <div style={{ marginBottom: "12px" }}>{p.stack.map((s) => <span key={s} className="badge">{s}</span>)}</div>
              <ul>{p.highlights.map((h, i) => <li key={i}>{h}</li>)}</ul>
            </div>
          ))}
        </section>

        {/* Education & Certifications */}
        <div style={{ display: "grid", gap: "20px", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
          <section className="card fade-in">
            <h2>Education</h2>
            {education.map((ed, index) => (
              <div key={ed.school} style={{ marginBottom: index < education.length - 1 ? "12px" : 0 }}>
                <h3 style={{ fontSize: "1.1rem" }}>{ed.degree}</h3>
                <p style={{ fontWeight: 500, color: "var(--m3-primary)" }}>{ed.school}</p>

                {/* meta row: location left, dates right */}
                <p className="meta" style={{ marginBottom: "8px" }}>
                  <span>📍 {ed.location}</span>
                  <span className="spacer" />
                  <span className="dates">📅 {ed.dates}</span>
                </p>
              </div>
            ))}
          </section>

          <section className="card fade-in">
            <h2>Certifications</h2>
            <ul>{certs.map((c, i) => <li key={i} style={{ marginBottom: "8px" }}>{c}</li>)}</ul>
          </section>
        </div>

        {/* Contact Form Section */}
        <ContactForm />

        <footer style={{ margin: "40px 0 20px", textAlign: "center", opacity: 0.7, fontSize: "0.9rem" }}>
          {/* optional footer */}
        </footer>
      </main>
    </>
  );
}