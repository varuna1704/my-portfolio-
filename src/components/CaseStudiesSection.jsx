import { useState } from 'react';
import { useInView, SectionLabel } from './shared';

import CASE_STUDIES from '../data/case-studies.json';

export default function CaseStudiesSection() {
  const [ref, visible] = useInView();
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (i) => setExpanded(expanded === i ? null : i);

  return (
    <section id="case-studies" ref={ref} style={{ padding: "100px 8vw" }}>
      <SectionLabel label="03 — Case Studies" />
      <h2 style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: "clamp(2rem,5vw,3.2rem)",
        fontWeight: 800, color: "#fff", margin: "12px 0 48px",
      }}>
        Proven <span style={{ color: "#ff6b35" }}>Results</span>
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginBottom: "50px" }}>
        {CASE_STUDIES.map((study, i) => {
          const isExpanded = expanded === i;
          
          return (
            <div 
              key={i} 
              style={{
                background: "#0f172a",
                border: `1.5px solid ${isExpanded ? "#ff6b35" : "#1e293b"}`,
                borderRadius: "16px",
                overflow: "hidden",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transitionDelay: `${i * 100}ms`,
                boxShadow: isExpanded ? "0 20px 50px rgba(255,107,53,0.15)" : "none"
              }}
            >
              {/* Header (Always visible) */}
              <div 
                onClick={() => toggleExpand(i)}
                style={{ 
                  padding: "24px 32px", 
                  cursor: "pointer", 
                  display: "flex", 
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "20px",
                  background: isExpanded ? "#111827" : "transparent"
                }}
              >
                <div>
                  <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "12px" }}>
                    <span style={{ 
                      background: "#ff6b3520", color: "#ff6b35", fontSize: "11px", 
                      padding: "4px 12px", borderRadius: "99px", fontFamily: "'JetBrains Mono', monospace",
                      fontWeight: 700
                    }}>{study.industry}</span>
                    <span style={{ color: "#94a3b8", fontSize: "13px", fontFamily: "'JetBrains Mono', monospace" }}>{study.type}</span>
                  </div>
                  <h3 style={{ 
                    color: "#fff", fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.2rem, 3vw, 1.8rem)", 
                    margin: 0, fontWeight: 800 
                  }}>{study.title}</h3>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
                  <div style={{ textAlign: "right", display: "flex", flexDirection: "column" }}>
                    <span style={{ color: "#00d4aa", fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "20px" }}>{study.metric}</span>
                    <span style={{ color: "#475569", fontSize: "11px", fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase" }}>Key Result</span>
                  </div>
                  <button style={{ 
                    background: "transparent", border: "1px solid #334155", width: "40px", height: "40px", 
                    borderRadius: "50%", color: "#fff", fontSize: "20px", display: "flex", alignItems: "center", 
                    justifyContent: "center", transition: "transform 0.3s", cursor: "pointer",
                    transform: isExpanded ? "rotate(180deg)" : "rotate(0)"
                  }}>↓</button>
                </div>
              </div>

              {/* Body (Expandable) */}
              <div style={{ 
                maxHeight: isExpanded ? "1500px" : "0", 
                opacity: isExpanded ? 1 : 0, 
                overflow: "hidden",
                transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                borderTop: isExpanded ? "1px solid #1e293b" : "none"
              }}>
                <div style={{ padding: "32px" }}>
                  <div className="case-content-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", marginBottom: "40px" }}>
                    
                    {/* Challenge & Before */}
                    <div>
                      <h4 style={{ color: "#fff", fontFamily: "'Syne', sans-serif", fontSize: "18px", marginBottom: "16px", borderBottom: "1px solid #1e293b", paddingBottom: "8px" }}>The Challenge</h4>
                      <p style={{ color: "#94a3b8", fontSize: "15px", lineHeight: 1.7, marginBottom: "24px" }}>{study.challenge}</p>
                      
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                        {study.beforeMetrics.map((m, idx) => (
                          <div key={idx} style={{ background: "#111827", padding: "16px", borderRadius: "8px", border: "1px solid #1e293b" }}>
                            <div style={{ color: "#475569", fontSize: "11px", fontFamily: "'JetBrains Mono', monospace", marginBottom: "4px" }}>Before {m.label}</div>
                            <div style={{ color: "#ef4444", fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "20px" }}>{m.value}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Solution & Results */}
                    <div>
                      <h4 style={{ color: "#fff", fontFamily: "'Syne', sans-serif", fontSize: "18px", marginBottom: "16px", borderBottom: "1px solid #1e293b", paddingBottom: "8px" }}>The Solution</h4>
                      <ul style={{ color: "#94a3b8", fontSize: "15px", lineHeight: 1.8, margin: "0 0 24px 0", paddingLeft: "20px" }}>
                        {study.solution.map((item, idx) => (
                          <li key={idx}>✓ {item}</li>
                        ))}
                      </ul>
                      
                      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "24px" }}>
                        {study.tech.map((t, idx) => (
                          <span key={idx} style={{ background: "#111827", border: "1px solid #334155", color: "#e2e8f0", padding: "4px 10px", borderRadius: "4px", fontSize: "11px", fontFamily: "'JetBrains Mono', monospace" }}>{t}</span>
                        ))}
                      </div>

                      <div style={{ color: "#94a3b8", fontSize: "14px", fontFamily: "'JetBrains Mono', monospace" }}>⏱ Timeline: {study.timeline}</div>
                    </div>
                  </div>

                  {/* Highlights / Results Section */}
                  <div style={{ background: "#111827", border: "1px solid #ff6b3540", borderRadius: "12px", padding: "32px" }}>
                    <h4 style={{ color: "#ff6b35", fontFamily: "'Syne', sans-serif", fontSize: "22px", marginBottom: "24px", textAlign: "center" }}>RESULTS HIGHLIGHT</h4>
                    
                    <div className="results-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", marginBottom: "32px" }}>
                      {study.afterMetrics.map((m, idx) => (
                        <div key={idx} style={{ background: "#0f172a", padding: "20px", borderRadius: "8px", textAlign: "center", position: "relative", overflow: "hidden" }}>
                          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: m.good ? "#00d4aa" : "#ff6b35" }}></div>
                          <div style={{ color: "#64748b", fontSize: "12px", fontFamily: "'JetBrains Mono', monospace", marginBottom: "8px", textTransform: "uppercase" }}>{m.label}</div>
                          <div style={{ color: "#fff", fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "32px", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                            {m.value}
                          </div>
                          <div style={{ color: m.good ? "#00d4aa" : "#ef4444", fontSize: "14px", fontWeight: 700, marginTop: "4px" }}>
                            {m.change} {m.icon}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div style={{ display: "flex", justifyContent: "center", gap: "32px", flexWrap: "wrap", paddingTop: "24px", borderTop: "1px solid #1e293b" }}>
                      {study.annualImpact.map((ai, idx) => (
                        <div key={idx} style={{ textAlign: "center" }}>
                          <span style={{ color: "#475569", fontSize: "11px", fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase", display: "block", marginBottom: "4px" }}>{ai.label}</span>
                          <span style={{ color: "#e2e8f0", fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "18px" }}>{ai.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Takeaway */}
                  <div style={{ marginTop: "32px", padding: "24px", background: "#ff6b3510", borderRadius: "8px", borderLeft: "4px solid #ff6b35" }}>
                    <span style={{ color: "#ff6b35", fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", display: "block", marginBottom: "8px" }}>Key Takeaway</span>
                    <p style={{ color: "#e2e8f0", fontSize: "15px", lineHeight: 1.6, margin: 0, fontStyle: "italic" }}>&quot;{study.takeaway}&quot;</p>
                  </div>

                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ textAlign: "center" }}>
        <p style={{ color: "#94a3b8", fontSize: "16px", marginBottom: "20px" }}>See similar results for your store?</p>
        <a 
          href="#contact" 
          data-hover
          style={{
            display: "inline-block", padding: "14px 36px", background: "#ff6b35", 
            color: "#fff", borderRadius: "10px", textDecoration: "none", 
            fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "15px", 
            transition: "all 0.3s", boxShadow: "0 8px 30px #ff6b3540"
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = "translateY(-3px)";
            e.currentTarget.style.boxShadow = "0 14px 40px #ff6b3560";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 8px 30px #ff6b3540";
          }}
        >
          Get Your Custom Strategy →
        </a>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .case-content-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
