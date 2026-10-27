import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "radial-gradient(circle at 50% 40%, #1e1b4b 0%, #060a14 70%)",
      color: "#fff",
      padding: "24px",
      textAlign: "center",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Background ambient glow */}
      <div style={{
        position: "absolute",
        width: 450,
        height: 450,
        borderRadius: "50%",
        background: "radial-gradient(circle, #ff6b3515 0%, transparent 70%)",
        filter: "blur(50px)",
        pointerEvents: "none"
      }} />

      <div style={{ zIndex: 1, maxWidth: 520 }}>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 14,
          color: "#ff6b35",
          letterSpacing: 3,
          textTransform: "uppercase",
          marginBottom: 12
        }}>
          Error 404 — Lost In Space
        </div>

        <h1 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "clamp(4.5rem, 14vw, 8rem)",
          fontWeight: 800,
          lineHeight: 1,
          margin: "0 0 16px",
          background: "linear-gradient(135deg, #fff 30%, #ff6b35 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}>
          404
        </h1>

        <p style={{
          color: "#94a3b8",
          fontFamily: "'Syne', sans-serif",
          fontSize: "clamp(16px, 3vw, 20px)",
          lineHeight: 1.6,
          marginBottom: 36
        }}>
          The page or route you're looking for doesn't exist or has moved into another branch.
        </p>

        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            to="/"
            style={{
              padding: "14px 32px",
              background: "#d9531b",
              color: "#fff",
              borderRadius: 10,
              textDecoration: "none",
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: 15,
              boxShadow: "0 8px 25px rgba(217, 83, 27, 0.35)",
              transition: "all 0.25s"
            }}
            onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
            onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
          >
            ← Return to Portfolio
          </Link>
          <Link
            to="/projects"
            style={{
              padding: "14px 28px",
              border: "1.5px solid #334155",
              color: "#cbd5e1",
              borderRadius: 10,
              textDecoration: "none",
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: 15,
              transition: "all 0.25s"
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "#ff6b35";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "#334155";
              e.currentTarget.style.color = "#cbd5e1";
            }}
          >
            View Projects ↗
          </Link>
        </div>
      </div>
    </div>
  );
}
