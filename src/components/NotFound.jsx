import React from "react";
import { Link } from "react-router-dom";
import { IconBack, IconArrowRight } from "./Icons";

export default function NotFound() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "var(--bg-primary)",
      color: "var(--text-primary)",
      padding: "24px",
      textAlign: "center"
    }}>
      <div style={{ maxWidth: 540 }}>
        <div style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.8125rem",
          color: "var(--accent-orange)",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          marginBottom: 16
        }}>
          Page Not Found
        </div>

        <h1 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(4.5rem, 12vw, 7.5rem)",
          fontWeight: 800,
          lineHeight: 1,
          margin: "0 0 20px",
          color: "var(--text-primary)"
        }}>
          404
        </h1>

        <p style={{
          color: "var(--text-secondary)",
          fontSize: "1.05rem",
          lineHeight: 1.7,
          marginBottom: 36
        }}>
          The page or route you are looking for does not exist or has been relocated.
        </p>

        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            to="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 24px",
              backgroundColor: "var(--text-primary)",
              color: "#0B0D10",
              fontWeight: 600,
              fontSize: "0.9375rem",
              textDecoration: "none",
              borderRadius: "2px",
              boxShadow: "3px 3px 0 var(--accent-orange)"
            }}
          >
            <IconBack size={16} />
            <span>Return to Portfolio</span>
          </Link>

          <Link
            to="/projects"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 22px",
              border: "1px solid var(--border-default)",
              backgroundColor: "var(--bg-card)",
              color: "var(--text-primary)",
              fontWeight: 500,
              fontSize: "0.9375rem",
              textDecoration: "none",
              borderRadius: "2px"
            }}
          >
            <span>View Projects</span>
            <IconArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
