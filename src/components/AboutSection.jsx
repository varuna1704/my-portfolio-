import { useInView, SectionLabel } from './shared';
import { useLang } from '../context/LangContext.jsx';

export default function AboutSection() {
  const [ref, visible] = useInView();
  const { t } = useLang();
  const a = t.about;

  return (
    <section id="about" ref={ref} style={{ padding: "100px 8vw", display: "flex", flexDirection: "column", gap: "60px", opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(-40px)", transition: "all 0.8s ease" }}>
      <SectionLabel label={a.sectionLabel} />
      
      <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "60px", alignItems: "start" }}>
        {/* Left: Photo */}
        <div style={{ width: "100%", aspectRatio: "3/4", borderRadius: "16px", overflow: "hidden", border: "1.5px solid #1e293b", position: "relative" }}
             onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 0 40px rgba(255,107,53,0.15)"; }}
             onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; }}>
          <picture style={{ width: "100%", height: "100%" }}>
            <source srcSet="/images/headshots/varuna-headshot-professional-dark.webp" type="image/webp" />
            <img src="/images/headshots/varuna-headshot-professional-dark.png" alt="Varuna" style={{ width: "100%", height: "100%", objectFit: "cover" }} 
              onError={e => {
                e.currentTarget.style.display = "none";
                e.currentTarget.parentElement.innerHTML = `
                  <div style="width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#0f172a,#1e293b);gap:16px;">
                    <div style="font-size:80px">👩‍💻</div>
                    <div style="color:#94a3b8;font-family:'JetBrains Mono',monospace;font-size:11px;text-align:center;">Profile Image</div>
                  </div>
                `;
              }}
            />
          </picture>
        </div>

        {/* Right: Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          
          {/* Header & Bio */}
          <div>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, color: "#fff", lineHeight: 1.1, marginBottom: 24 }}>
              {a.titlePrefix}<span style={{ color: "#ff6b35" }}>{a.name}</span>
            </h2>
            <div style={{ color: "#94a3b8", fontSize: "16px", lineHeight: 1.8, display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{a.bio1}</p>
              <p>{a.bio2}</p>
            </div>
          </div>

          {/* What I Do / Specializations */}
          <div>
            <h3 style={{ color: "#fff", fontFamily: "'Syne', sans-serif", fontSize: "22px", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
              {a.specializationsHeading}
            </h3>
            <div className="what-i-do-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
              {a.specializations.map((item, idx) => (
                <div key={idx} style={{ background: "#0f172a", border: "1px solid #1e293b", padding: "24px", borderRadius: "12px" }}>
                  <h4 style={{ color: "#e2e8f0", fontFamily: "'Syne', sans-serif", fontSize: "18px", marginBottom: "10px" }}>{item.title}</h4>
                  <p style={{ color: "#94a3b8", fontSize: "15px", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Stats */}
          <div>
            <h3 style={{ color: "#fff", fontFamily: "'Syne', sans-serif", fontSize: "22px", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
              {a.keyStatsHeading}
            </h3>
            <div className="stats-facts-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "16px" }}>
              {a.stats.map((stat, i) => (
                <div key={i} style={{ background: "#111827", border: "1px solid #1e293b", padding: "16px", borderRadius: "10px", textAlign: "center" }}>
                  <div style={{ color: "#fff", fontFamily: "'Syne', sans-serif", fontSize: "20px", fontWeight: 800 }}>{stat.val}</div>
                  <div style={{ color: "#94a3b8", fontSize: "12px", fontFamily: "'JetBrains Mono', monospace", marginTop: "4px" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Why I Do This & Personal Touch */}
          <div style={{ display: "grid", gap: "24px" }}>
            <div style={{ padding: "24px", background: "#ff6b3510", borderRadius: "12px", borderLeft: "4px solid #ff6b35" }}>
              <h3 style={{ color: "#ff6b35", fontFamily: "'Syne', sans-serif", fontSize: "18px", marginBottom: "12px" }}>{a.whyHeading}</h3>
              <p style={{ color: "#e2e8f0", fontSize: "15px", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>{a.whyQuote}</p>
            </div>
            
            <div>
              <h3 style={{ color: "#fff", fontFamily: "'Syne', sans-serif", fontSize: "20px", marginBottom: "12px" }}>{a.personalHeading}</h3>
              <p style={{ color: "#94a3b8", fontSize: "15px", lineHeight: 1.7 }}>{a.personalDesc}</p>
            </div>
          </div>

          {/* Working Style */}
          <div>
            <h3 style={{ color: "#fff", fontFamily: "'Syne', sans-serif", fontSize: "22px", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
              {a.workingStyleHeading}
            </h3>
            <p style={{ color: "#94a3b8", fontSize: "15px", marginBottom: "20px" }}>{a.workingStyleIntro}</p>
            <ul style={{ color: "#94a3b8", fontSize: "15px", lineHeight: 1.8, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "12px", margin: 0 }}>
              {a.workingStyles.map((ws, idx) => (
                <li key={idx}>
                  <strong style={{ color: "#fff" }}>{ws.title}</strong>
                  {ws.desc}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div style={{ marginTop: "10px" }}>
            <p style={{ color: "#e2e8f0", fontSize: "16px", marginBottom: "20px", fontWeight: 600 }}>{a.ctaText}</p>
            <a
              href="#contact" data-hover
              style={{
                display: "inline-flex", alignItems: "center", gap: "10px", padding: "16px 40px", background: "#d9531b", color: "#FFFFFF",
                borderRadius: "10px", textDecoration: "none", fontFamily: "'Syne', sans-serif",
                fontWeight: 600, fontSize: "16px", transition: "all 0.3s",
                boxShadow: "0 8px 30px rgba(217, 83, 27, 0.25)"
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 14px 40px rgba(217, 83, 27, 0.4)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 30px rgba(217, 83, 27, 0.25)"; }}
            >
              {a.ctaButton}
            </a>
          </div>
        </div>
      </div>
      
      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .stats-facts-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
