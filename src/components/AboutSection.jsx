import { useInView, SectionLabel } from './shared';

export default function AboutSection() {
  const [ref, visible] = useInView();

  return (
    <section id="about" ref={ref} style={{ padding: "100px 8vw", display: "flex", flexDirection: "column", gap: "60px", opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(-40px)", transition: "all 0.8s ease" }}>
      <SectionLabel label="01 — About Me" />
      
      <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "60px", alignItems: "start" }}>
        {/* Left: Photo */}
        <div style={{ width: "100%", aspectRatio: "3/4", borderRadius: "16px", overflow: "hidden", border: "1.5px solid #1e293b", position: "relative" }}
             onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 0 40px rgba(255,107,53,0.15)"; }}
             onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; }}>
          <img src="/images/profile.png" alt="Varuna" style={{ width: "100%", height: "100%", objectFit: "cover" }} 
            onError={e => {
              e.currentTarget.style.display = "none";
              e.currentTarget.parentElement.innerHTML = `
                <div style="width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#0f172a,#1e293b);gap:16px;">
                  <div style="font-size:80px">👩‍💻</div>
                  <div style="color:#475569;font-family:'JetBrains Mono',monospace;font-size:11px;text-align:center;">Profile Image</div>
                </div>
              `;
            }}
          />
        </div>

        {/* Right: Content */}
        <div>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, color: "#fff", lineHeight: 1.1, marginBottom: 24 }}>
            I Help E-Commerce Brands Scale With <span style={{ color: "#ff6b35" }}>Shopify & Data-Driven Insights</span>
          </h2>
          
          <div style={{ color: "#94a3b8", fontSize: "16px", lineHeight: 1.8, display: "flex", flexDirection: "column", gap: "16px", marginBottom: "32px" }}>
            <p>Hi, I&apos;m Varuna Nikam. I&apos;m a full-stack e-commerce expert specializing in Shopify development and data analytics.</p>
            <p>With 5+ years of experience, I&apos;ve helped 50+ e-commerce brands increase their conversion rates, improve customer experience, and drive measurable revenue growth.</p>
            <p>My approach combines technical expertise with data-driven insights. I don&apos;t just build stores—I optimize them for growth.</p>
          </div>

          <div className="facts-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginBottom: "40px" }}>
            <div style={{ background: "#0f172a", border: "1px solid #1e293b", padding: "20px", borderRadius: "12px", transition: "transform 0.3s", cursor: "default" }}
                 onMouseEnter={e => e.currentTarget.style.transform = "translateY(-5px)"}
                 onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
              <h3 style={{ color: "#fff", fontFamily: "'Syne', sans-serif", fontSize: "18px", marginBottom: "16px" }}>Key Facts</h3>
              <ul style={{ color: "#94a3b8", fontSize: "14px", lineHeight: 2, paddingLeft: "16px", margin: 0 }}>
                <li>5+ Years Experience</li>
                <li>50+ Projects Completed</li>
                <li>$2M+ in Client Revenue Generated</li>
                <li>98% Client Satisfaction Rate</li>
              </ul>
            </div>
            <div style={{ background: "#0f172a", border: "1px solid #1e293b", padding: "20px", borderRadius: "12px", transition: "transform 0.3s", cursor: "default" }}
                 onMouseEnter={e => e.currentTarget.style.transform = "translateY(-5px)"}
                 onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
              <h3 style={{ color: "#fff", fontFamily: "'Syne', sans-serif", fontSize: "18px", marginBottom: "16px" }}>Expertise</h3>
              <ul style={{ color: "#94a3b8", fontSize: "14px", lineHeight: 2, paddingLeft: "16px", margin: 0 }}>
                <li>Shopify Development & Optimization</li>
                <li>E-Commerce Analytics</li>
                <li>Conversion Rate Optimization</li>
                <li>Data-Driven Strategy</li>
              </ul>
            </div>
          </div>

          <div style={{ marginBottom: "32px" }}>
            <h3 style={{ color: "#fff", fontFamily: "'Syne', sans-serif", fontSize: "20px", marginBottom: "12px" }}>Why I Do This</h3>
            <p style={{ color: "#94a3b8", fontSize: "15px", lineHeight: 1.7 }}>&quot;I&apos;m passionate about helping online businesses succeed. There&apos;s nothing more satisfying than seeing a client&apos;s conversion rate increase from 2% to 5.8% and watching their business grow as a result.&quot;</p>
          </div>
          
          <div style={{ marginBottom: "40px" }}>
            <h3 style={{ color: "#fff", fontFamily: "'Syne', sans-serif", fontSize: "20px", marginBottom: "12px" }}>Personal Touch</h3>
            <p style={{ color: "#94a3b8", fontSize: "15px", lineHeight: 1.7 }}>&quot;When I&apos;m not developing or analyzing data, you&apos;ll find me exploring new e-commerce trends, writing about growth strategies, or helping other developers level up their skills.&quot;</p>
          </div>
          
          <a
            href="#contact" data-hover
            style={{
              display: "inline-block", padding: "14px 36px", background: "#ff6b35", color: "#fff",
              borderRadius: "10px", textDecoration: "none", fontFamily: "'Syne', sans-serif",
              fontWeight: 700, fontSize: "15px", transition: "all 0.3s",
              boxShadow: "0 8px 30px #ff6b3540"
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 14px 40px #ff6b3560"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 30px #ff6b3540"; }}
          >
            Let&apos;s Work Together →
          </a>
        </div>
      </div>
      
      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .facts-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
