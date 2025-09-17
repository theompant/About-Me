import React from "react";

type Props = {
  title: string;
  items: string[];
  className?: string;
};

export function GlassPanel({ title, items, className }: Props) {
  return (
    <section className={`liquidGlass ${className ?? ""}`} aria-label={title}>
      <div style={{ padding: 20 }}>
        <h3 className="cardTitle">{title}</h3>
        <ul className="cardList">
          {items.map((item) => (
            <li key={item} className="badge">{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
