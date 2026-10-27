import React from "react";
import { useLang } from "../context/LangContext.jsx";

export default function GithubActivityGraph() {
  const { t } = useLang();
  const g = t.github || {};

  return (
    <div
      style={{
        background: "#0b1222",
        border: "1px solid #1e293b",
        borderRadius: 20,
        padding: "32px 28px",
        marginTop: 40,
        display: "flex",
        flexDirection: "column",
        gap: 24,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
        <div>
          <div style={{
            color: "#ff6b35",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            letterSpacing: 2,
            textTransform: "uppercase",
            marginBottom: 4,
          }}>
            {g.liveSectionTag || "Open Source & Activity"}
          </div>
          <h3 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 22,
            fontWeight: 800,
            color: "#fff",
            margin: 0,
          }}>
            {g.liveSectionTitle || "Live GitHub Contributions"}
          </h3>
        </div>

        <a
          href="https://github.com/varuna1704"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 16px",
            background: "#1e293b",
            border: "1px solid #334155",
            borderRadius: 8,
            color: "#e2e8f0",
            textDecoration: "none",
            fontSize: 12,
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 600,
            transition: "all 0.2s ease",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = "#ff6b35";
            e.currentTarget.style.color = "#ff6b35";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = "#334155";
            e.currentTarget.style.color = "#e2e8f0";
          }}
        >
          <span>{g.profileLinkText || "@varuna1704 on GitHub ↗"}</span>
        </a>
      </div>

      {/* GitHub Contributions Heatmap SVG */}
      <div
        style={{
          background: "#080d1a",
          border: "1px solid #1e293b",
          borderRadius: 12,
          padding: "20px 16px",
          overflowX: "auto",
        }}
      >
        <div style={{ minWidth: 680, display: "flex", justifyContent: "center" }}>
          <img
            src="https://ghchart.rshah.org/ff6b35/varuna1704"
            alt="Varuna Nikam's GitHub Contributions Chart"
            style={{ width: "100%", height: "auto", display: "block" }}
            loading="lazy"
          />
        </div>
      </div>

      {/* GitHub Stats Cards Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 16,
          alignItems: "center",
        }}
      >
        <div
          style={{
            background: "#0f172a",
            border: "1px solid #1e293b",
            borderRadius: 12,
            padding: "12px",
            display: "flex",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <img
            src="https://github-readme-stats.vercel.app/api?username=varuna1704&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0f172a&title_color=ff6b35&icon_color=00d4aa&text_color=cbd5e1"
            alt="Varuna's GitHub Stats"
            style={{ maxWidth: "100%", height: "auto" }}
            loading="lazy"
            onError={e => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>

        <div
          style={{
            background: "#0f172a",
            border: "1px solid #1e293b",
            borderRadius: 12,
            padding: "12px",
            display: "flex",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=varuna1704&layout=compact&theme=tokyonight&hide_border=true&bg_color=0f172a&title_color=ff6b35&text_color=cbd5e1"
            alt="Varuna's Top Languages"
            style={{ maxWidth: "100%", height: "auto" }}
            loading="lazy"
            onError={e => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>
      </div>
    </div>
  );
}
