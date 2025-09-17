import React from "react";
import { GlassPanel } from "./GlassPanel";

const toolsAndFrameworks = ["JIRA","Postman","Oracle SQL Developer","Selenium WebDriver","FireFlink"];
const languages = ["Java (basic)","SQL (Oracle)","HTML","CSS","JavaScript"];
const devPlatforms = ["VS Code","Eclipse IDE"];
const competencies = ["OOP","Operating Systems","Computer Networks","Teamwork","Communication","Rapport Building","People Management"];

export function SkillsGrid() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
      <GlassPanel title="Tools & Frameworks" items={toolsAndFrameworks} />
      <GlassPanel title="Programming Languages" items={languages} />
      <GlassPanel title="Development Platforms" items={devPlatforms} />
      <GlassPanel title="Core Competencies" items={competencies} />
    </div>
  );
}
