import React, { useState } from "react";
import { useLang } from "../context/LangContext.jsx";

const SKILL_DOMAINS = [
  { label: "Shopify & Liquid", score: 95, icon: "🛍️", color: "#ff6b35", highlight: "Theme Dev, Liquid, Dawn, Stores" },
  { label: "Frontend & React", score: 90, icon: "⚛️", color: "#38bdf8", highlight: "React, JS, TS, HTML5/CSS3" },
  { label: "AI & GenAI", score: 88, icon: "🤖", color: "#a78bfa", highlight: "Prompts, Copilot, LLM Workflows" },
  { label: "Databases & SQL", score: 82, icon: "🗄️", color: "#00d4aa", highlight: "MySQL, PostgreSQL, Data Modeling" },
  { label: "Cloud & AWS", score: 78, icon: "☁️", color: "#f59e0b", highlight: "AWS re/Start, EC2, S3, IAM" },
];

export default function SkillsRadar() {
  const [activeIdx, setActiveIdx] = useState(null);
  const { t } = useLang();
  const s = t.skills || {};

  // SVG Geometry
  const size = 340;
  const center = size / 2;
  const radius = 115;
  const total = SKILL_DOMAINS.length;

  const getCoordinates = (index, valuePercent) => {
    const angle = (Math.PI * 2 / total) * index - Math.PI / 2;
    const r = (radius * valuePercent) / 100;
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    return { x, y };
  };

  // Polygon points
  const polygonPoints = SKILL_DOMAINS.map((d, i) => {
    const { x, y } = getCoordinates(i, d.score);
    return `${x},${y}`;
  }).join(" ");

  return (
    <div
      style={{
        background: "#0b1222",
        border: "1px solid #1e293b",
        borderRadius: 20,
        padding: "36px 32px",
        marginBottom: 48,
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: 36,
        alignItems: "center",
      }}
    >
      {/* Left: Radar SVG */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative" }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ maxWidth: "100%", overflow: "visible" }}>
          {/* Concentric grid circles */}
          {[20, 40, 60, 80, 100].map((level) => {
            const gridPts = SKILL_DOMAINS.map((_, i) => {
              const { x, y } = getCoordinates(i, level);
              return `${x},${y}`;
            }).join(" ");
            return (
              <polygon
                key={level}
                points={gridPts}
                fill="none"
                stroke="#1e293b"
                strokeWidth={level === 100 ? 1.5 : 1}
                strokeDasharray={level < 100 ? "4 4" : undefined}
              />
            );
          })}

          {/* Spokes from center */}
          {SKILL_DOMAINS.map((_, i) => {
            const outer = getCoordinates(i, 100);
            return (
              <line
                key={i}
                x1={center}
                y1={center}
                x2={outer.x}
                y2={outer.y}
                stroke="#1e293b"
                strokeWidth={1}
              />
            );
          })}

          {/* The Polygon Area */}
          <polygon
            points={polygonPoints}
            fill="rgba(255, 107, 53, 0.22)"
            stroke="#ff6b35"
            strokeWidth={2.5}
            style={{
              transition: "all 0.4s ease",
              filter: "drop-shadow(0 0 10px rgba(255, 107, 53, 0.4))",
            }}
          />

          {/* Nodes */}
          {SKILL_DOMAINS.map((d, i) => {
            const pt = getCoordinates(i, d.score);
            const isHovered = activeIdx === i;
            return (
              <g key={i}>
                <circle
                  cx={pt.x}
                  cy={pt.y}
                  r={isHovered ? 8 : 5}
                  fill={d.color}
                  stroke="#060a14"
                  strokeWidth={2}
                  style={{
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    filter: isHovered ? `drop-shadow(0 0 8px ${d.color})` : "none",
                  }}
                  onMouseEnter={() => setActiveIdx(i)}
                  onMouseLeave={() => setActiveIdx(null)}
                />
              </g>
            );
          })}

          {/* Outer Labels */}
          {SKILL_DOMAINS.map((d, i) => {
            const labelPt = getCoordinates(i, 118);
            const isHovered = activeIdx === i;
            return (
              <text
                key={i}
                x={labelPt.x}
                y={labelPt.y}
                textAnchor="middle"
                dominantBaseline="central"
                fill={isHovered ? d.color : "#94a3b8"}
                fontSize={11}
                fontFamily="'JetBrains Mono', monospace"
                fontWeight={isHovered ? 700 : 500}
                style={{ cursor: "pointer", transition: "all 0.2s ease" }}
                onMouseEnter={() => setActiveIdx(i)}
                onMouseLeave={() => setActiveIdx(null)}
              >
                {d.label}
              </text>
            );
          })}
        </svg>

        <div style={{
          marginTop: 12,
          fontSize: 12,
          color: "#64748b",
          fontFamily: "'JetBrains Mono', monospace",
          textAlign: "center"
        }}>
          {s.radarHint || "Hover nodes to inspect proficiency scores"}
        </div>
      </div>

      {/* Right: Domain Breakdown List */}
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <div style={{ marginBottom: 6 }}>
          <div style={{
            color: "#ff6b35",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            letterSpacing: 2,
            textTransform: "uppercase",
            marginBottom: 4
          }}>
            {s.radarTag || "Technical Proficiency"}
          </div>
          <h3 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 22,
            fontWeight: 800,
            color: "#fff",
            margin: 0
          }}>
            {s.radarTitle || "Core Competency Radar"}
          </h3>
        </div>

        {SKILL_DOMAINS.map((d, i) => {
          const isActive = activeIdx === i;
          return (
            <div
              key={i}
              onMouseEnter={() => setActiveIdx(i)}
              onMouseLeave={() => setActiveIdx(null)}
              style={{
                background: isActive ? "#131d33" : "#0f172a",
                border: `1px solid ${isActive ? d.color : "#1e293b"}`,
                borderRadius: 12,
                padding: "14px 18px",
                transition: "all 0.25s ease",
                cursor: "pointer",
                transform: isActive ? "translateX(6px)" : "none",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: 16 }}>{d.icon}</span>
                  <span style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    fontSize: 14,
                    color: isActive ? "#fff" : "#e2e8f0"
                  }}>
                    {d.label}
                  </span>
                </div>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 13,
                  fontWeight: 700,
                  color: d.color
                }}>
                  {d.score}%
                </span>
              </div>

              {/* Mini progress bar */}
              <div style={{ height: 4, background: "#1e293b", borderRadius: 99, overflow: "hidden", marginBottom: 6 }}>
                <div style={{
                  height: "100%",
                  width: `${d.score}%`,
                  background: d.color,
                  borderRadius: 99,
                  transition: "width 0.8s ease"
                }} />
              </div>

              <div style={{
                color: "#94a3b8",
                fontSize: 11,
                fontFamily: "'JetBrains Mono', monospace"
              }}>
                {d.highlight}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
