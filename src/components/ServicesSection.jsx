import { useState } from 'react';
import { useInView, SectionLabel } from './shared';

import SERVICES from '../data/services.json';

export default function ServicesSection() {
  const [ref, visible] = useInView();
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (i) => setExpanded(expanded === i ? null : i);

  return (
    <section id="services" ref={ref} style={{ padding: "100px 8vw", position: "relative" }}>
      <SectionLabel label="02 — Services" />
      <h2 style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: "clamp(2rem,5vw,3.2rem)",
        fontWeight: 800, color: "#fff", margin: "12px 0 48px",
      }}>
        What I <span style={{ color: "#ff6b35" }}>Offer</span>
      </h2>

      <div className="services-grid" style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(4, 1fr)", 
        gap: "24px",
        marginBottom: "80px"
      }}>
        {SERVICES.map((srv, i) => {
          const isExpanded = expanded === i;

          return (
            <div 
              key={i}
              className="service-card"
              style={{
                background: "#1a1f3a",
                border: `1px solid ${isExpanded ? "#ff6b35" : "#1e293b"}`,
                borderRadius: "16px",
                overflow: "hidden",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                opacity: visible ? 1 : 0,
                transform: visible ? (isExpanded ? "translateY(-10px)" : "translateY(0)") : "translateY(40px)",
                transitionDelay: `${i * 100}ms`,
                boxShadow: isExpanded ? "0 20px 40px rgba(255,107,53,0.15)" : "none",
                display: "flex",
                flexDirection: "column",
                gridColumn: isExpanded ? "1 / -1" : "auto", // Spans full width when expanded
                marginBottom: isExpanded ? "20px" : "0" // Small gap adjustment
              }}
              onMouseEnter={e => {
                if (!isExpanded && visible) {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.borderColor = "#ff6b3540";
                }
              }}
              onMouseLeave={e => {
                if (!isExpanded && visible) {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "#1e293b";
                }
              }}
            >
              {/* Card Header (Clickable to expand) */}
              <div 
                onClick={() => toggleExpand(i)}
                style={{ 
                  padding: "32px", 
                  cursor: "pointer", 
                  flex: 1, 
                  display: "flex", 
                  flexDirection: "column",
                  alignItems: isExpanded ? "flex-start" : "center",
                  textAlign: isExpanded ? "left" : "center",
                  background: isExpanded ? "linear-gradient(135deg,rgba(26,31,58,1),rgba(15,23,42,1))" : "transparent"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "16px", width: "100%", justifyContent: isExpanded ? "flex-start" : "center" }}>
                  <span style={{ fontSize: isExpanded ? "48px" : "56px", marginBottom: isExpanded ? "0" : "24px", transition: "all 0.3s" }}>{srv.icon}</span>
                  {isExpanded && <h3 style={{ color: "#fff", fontFamily: "'Syne', sans-serif", fontSize: "24px", fontWeight: 800, margin: 0 }}>{srv.title}</h3>}
                </div>

                {!isExpanded && <h3 style={{ color: "#fff", fontFamily: "'Syne', sans-serif", fontSize: "20px", fontWeight: 800, marginBottom: "16px" }}>{srv.title}</h3>}
                {!isExpanded && <p style={{ color: "#94a3b8", fontSize: "14px", lineHeight: 1.6, marginBottom: "24px", flex: 1 }}>{srv.shortDesc}</p>}
                
                {!isExpanded && (
                  <button style={{ 
                    background: "transparent", color: "#ff6b35", border: "1px solid #ff6b35", 
                    width: "100%", padding: "10px", borderRadius: "8px", fontFamily: "'Syne', sans-serif", 
                    fontWeight: 700, fontSize: "14px", cursor: "pointer", transition: "all 0.3s" 
                  }}>Learn More ↓</button>
                )}
              </div>

              {/* Expandable Details */}
              <div style={{ 
                maxHeight: isExpanded ? "2000px" : "0", 
                opacity: isExpanded ? 1 : 0, 
                overflow: "hidden",
                transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
              }}>
                <div style={{ padding: "0 32px 32px 32px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px" }}>
                  <div>
                    <h4 style={{ color: "#fff", fontFamily: "'Syne', sans-serif", fontSize: "18px", marginBottom: "16px" }}>About This Service</h4>
                    <p style={{ color: "#94a3b8", fontSize: "15px", lineHeight: 1.8, marginBottom: "24px" }}>{srv.detailedDesc}</p>
                    
                    <div style={{ background: "#0f172a", padding: "16px", borderRadius: "8px", border: "1px solid #1e293b", marginBottom: "24px" }}>
                      <span style={{ color: "#475569", fontSize: "11px", fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase", display: "block", marginBottom: "4px" }}>Best For</span>
                      <span style={{ color: "#00d4aa", fontSize: "14px", fontFamily: "'Syne', sans-serif", fontWeight: 700 }}>{srv.bestFor}</span>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                      <div style={{ borderLeft: "2px solid #ff6b35", paddingLeft: "12px" }}>
                        <span style={{ color: "#475569", fontSize: "11px", fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase", display: "block", marginBottom: "4px" }}>Timeline</span>
                        <span style={{ color: "#e2e8f0", fontSize: "15px", fontFamily: "'Syne', sans-serif", fontWeight: 700 }}>{srv.timeline}</span>
                      </div>
                      <div style={{ borderLeft: "2px solid #ff6b35", paddingLeft: "12px" }}>
                        <span style={{ color: "#475569", fontSize: "11px", fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase", display: "block", marginBottom: "4px" }}>Investment</span>
                        <span style={{ color: "#e2e8f0", fontSize: "15px", fontFamily: "'Syne', sans-serif", fontWeight: 700 }}>{srv.price}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 style={{ color: "#fff", fontFamily: "'Syne', sans-serif", fontSize: "18px", marginBottom: "16px" }}>What's Included</h4>
                    <ul style={{ color: "#94a3b8", fontSize: "14px", lineHeight: 2, margin: "0 0 32px 0", paddingLeft: "20px" }}>
                      {srv.included.map((item, idx) => (
                        <li key={idx} style={{ marginBottom: "8px" }}>✓ {item}</li>
                      ))}
                    </ul>

                    <a 
                      href="#contact" 
                      onClick={(e) => {
                        // Pre-populate project type logic could be handled here or in the Contact section state
                      }}
                      style={{ 
                        display: "inline-block", background: "#ff6b35", color: "#fff", 
                        padding: "14px 28px", borderRadius: "8px", textDecoration: "none", 
                        fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "15px", 
                        width: "100%", textAlign: "center", transition: "all 0.3s",
                        boxShadow: "0 8px 30px #ff6b3540" 
                      }}
                    >
                      Get Started with {srv.title.split(' ')[0]} →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ 
        background: "linear-gradient(135deg,rgba(26,31,58,0.5),rgba(15,23,42,1))", 
        border: "1px solid #1e293b", 
        borderRadius: "16px", 
        padding: "48px 32px", 
        textAlign: "center" 
      }}>
        <h3 style={{ color: "#fff", fontFamily: "'Syne', sans-serif", fontSize: "28px", fontWeight: 800, marginBottom: "16px" }}>Not Sure Which Service You Need?</h3>
        <p style={{ color: "#94a3b8", fontSize: "16px", lineHeight: 1.6, maxWidth: "600px", margin: "0 auto 32px auto" }}>No problem! I'll help you figure out the perfect solution for your business. Let's chat about your goals and find the right approach.</p>
        
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
          <a href="#contact" data-hover style={{
            padding: "14px 32px", background: "#ff6b35", color: "#fff", 
            borderRadius: "10px", textDecoration: "none", fontFamily: "'Syne', sans-serif", 
            fontWeight: 800, fontSize: "15px", boxShadow: "0 8px 30px #ff6b3540", transition: "all 0.3s"
          }}>
            Schedule Free Consultation
          </a>
          <a href="#case-studies" data-hover style={{
            padding: "14px 32px", background: "transparent", color: "#fff", border: "1.5px solid #334155",
            borderRadius: "10px", textDecoration: "none", fontFamily: "'Syne', sans-serif", 
            fontWeight: 800, fontSize: "15px", transition: "all 0.3s"
          }}>
            View Case Studies
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
