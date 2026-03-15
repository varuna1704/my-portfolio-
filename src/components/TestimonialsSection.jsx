import { useInView, SectionLabel } from './shared';

import TESTIMONIALS_DATA from '../data/testimonials.json';

export default function TestimonialsSection() {
  const [ref, visible] = useInView();

  return (
    <section id="testimonials" ref={ref} style={{ padding: "100px 8vw", position: "relative" }}>
      <SectionLabel label="05 — What Clients Say" />
      <h2 style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: "clamp(2rem,5vw,3.2rem)",
        fontWeight: 800, color: "#fff", margin: "12px 0 48px",
      }}>
        Client <span style={{ color: "#ff6b35" }}>Success Stories</span>
      </h2>

      <div className="testimonials-grid" style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", 
        gap: "28px",
        marginBottom: "60px"
      }}>
        {TESTIMONIALS_DATA.map((t, i) => (
          <div 
            key={i} 
            className="testimonial-card"
            data-hover
            style={{
              background: "#1a1f3a",
              borderTop: "3px solid #ff6b35",
              borderRadius: "12px",
              padding: "32px",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(40px)",
              transition: "all 0.5s ease",
              transitionDelay: `${i * 150}ms`,
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              cursor: "default"
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = visible ? "translateY(-8px)" : "translateY(40px)";
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(255,107,53,0.15)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = visible ? "translateY(0)" : "translateY(40px)";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.2)";
            }}
          >
            <div style={{ display: "flex", gap: "4px" }}>
              {[...Array(t.stars)].map((_, i) => (
                <span key={i} style={{ color: "#f59e0b", fontSize: "18px" }}>★</span>
              ))}
            </div>
            
            <p style={{ 
              color: "#e2e8f0", 
              fontSize: "16px", 
              lineHeight: 1.7, 
              fontFamily: "'Syne', sans-serif",
              flex: 1,
              margin: 0,
              fontStyle: "italic"
            }}>
              &quot;{t.quote}&quot;
            </p>
            
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginTop: "8px" }}>
              <div style={{ 
                width: "48px", height: "48px", borderRadius: "50%", 
                background: "#0f172a", border: "1.5px solid #334155",
                display: "flex", alignItems: "center", justifyContent: "center",
                overflow: "hidden"
              }}>
                {t.image ? (
                  <img src={t.image} alt={t.author} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                ) : (
                  <span style={{ fontSize: "20px" }}>👤</span>
                )}
              </div>
              <div>
                <div style={{ color: "#fff", fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "15px" }}>{t.author}</div>
                <div style={{ color: "#94a3b8", fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", marginTop: "2px" }}>{t.company}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <p style={{ color: "#94a3b8", fontSize: "16px", marginBottom: "20px" }}>Ready to join these successful brands?</p>
        <a 
          href="#contact" 
          data-hover
          style={{
            display: "inline-block", padding: "14px 36px", background: "transparent", 
            border: "2px solid #ff6b35", color: "#ff6b35", borderRadius: "10px", 
            textDecoration: "none", fontFamily: "'Syne', sans-serif", fontWeight: 700, 
            fontSize: "15px", transition: "all 0.3s"
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = "#ff6b35";
            e.currentTarget.style.color = "#fff";
            e.currentTarget.style.boxShadow = "0 8px 25px rgba(255,107,53,0.3)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#ff6b35";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          Start Your Project →
        </a>
      </div>

    </section>
  );
}
