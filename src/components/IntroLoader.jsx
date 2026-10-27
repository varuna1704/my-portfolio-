import React, { useState, useEffect } from "react";

export default function IntroLoader({ onComplete }) {
  const [percent, setPercent] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Safety max timeout: never stay longer than 1.8s
    const safety = setTimeout(() => {
      setFading(true);
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 400);
    }, 1800);

    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setFading(true);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 400);
          return 100;
        }
        return prev + Math.floor(Math.random() * 18 + 12);
      });
    }, 80);

    return () => {
      clearInterval(interval);
      clearTimeout(safety);
    };
  }, [onComplete]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#030712",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        opacity: fading ? 0 : 1,
        transform: fading ? "translateY(-15px)" : "translateY(0)",
        pointerEvents: fading ? "none" : "all",
      }}
    >
      {/* Background ambient radial glow */}
      <div
        style={{
          position: "absolute",
          width: 350,
          height: 350,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,107,53,0.18) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div style={{ textAlign: "center", zIndex: 1, padding: "0 20px" }}>
        {/* Monogram */}
        <div
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(3.5rem, 8vw, 5.5rem)",
            letterSpacing: -2,
            color: "#ffffff",
            marginBottom: 8,
            lineHeight: 1,
          }}
        >
          VN<span style={{ color: "#ff6b35" }}>.</span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12,
            color: "#94a3b8",
            letterSpacing: 2,
            textTransform: "uppercase",
            marginBottom: 32,
          }}
        >
          Shopify & Frontend Developer
        </div>

        {/* Progress bar container */}
        <div
          style={{
            width: "220px",
            height: "4px",
            background: "#1e293b",
            borderRadius: "99px",
            overflow: "hidden",
            margin: "0 auto 12px",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${Math.min(percent, 100)}%`,
              background: "linear-gradient(90deg, #ff6b35, #00d4aa)",
              borderRadius: "99px",
              transition: "width 0.1s ease-out",
            }}
          />
        </div>

        {/* Numeric percentage indicator */}
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            color: "#64748b",
          }}
        >
          {Math.min(percent, 100)}%
        </div>
      </div>
    </div>
  );
}
