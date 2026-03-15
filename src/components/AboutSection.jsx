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
          <img src="/images/headshots/varuna-headshot-professional-dark.jpg" alt="Varuna" style={{ width: "100%", height: "100%", objectFit: "cover" }} 
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
        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          
          {/* Header & Bio */}
          <div>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, color: "#fff", lineHeight: 1.1, marginBottom: 24 }}>
              Shopify Developer & Data Analyst — <span style={{ color: "#ff6b35" }}>Fresh Skills, Real Results</span>
            </h2>
            <div style={{ color: "#94a3b8", fontSize: "16px", lineHeight: 1.8, display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>Hi, I&apos;m Varuna Nikam — an MCA 2025 graduate and Shopify developer with 1 year of professional experience. I&apos;m building real, measurable outcomes for startups and small businesses who value quality work and honest communication.</p>
              <p>I specialize in Shopify store setup, e-commerce analytics, and conversion rate optimization. I&apos;ve worked on live client projects where I improved page load times, reduced cart abandonment, and set up data tracking systems from scratch.</p>
              <p>I&apos;m transparent about where I am in my journey: early-career, hungry to learn, and deeply focused on delivering quality. I charge competitive rates and bring the energy of someone building their reputation — which means you get my best work, every time.</p>
            </div>
          </div>

          {/* What I Do */}
          <div>
            <h3 style={{ color: "#fff", fontFamily: "'Syne', sans-serif", fontSize: "22px", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ color: "#ff6b35" }}>⚡</span> What I Do
            </h3>
            <div className="what-i-do-grid" style={{ display: "grid", gap: "20px" }}>
              <div style={{ background: "#0f172a", border: "1px solid #1e293b", padding: "24px", borderRadius: "12px" }}>
                <h4 style={{ color: "#e2e8f0", fontFamily: "'Syne', sans-serif", fontSize: "18px", marginBottom: "10px" }}>Shopify Development & Optimization</h4>
                <p style={{ color: "#94a3b8", fontSize: "15px", lineHeight: 1.7, margin: 0 }}>I design and develop custom Shopify stores that convert. From initial setup to advanced customization, I create stores optimized for sales that also reflect your brand perfectly.</p>
              </div>
              <div style={{ background: "#0f172a", border: "1px solid #1e293b", padding: "24px", borderRadius: "12px" }}>
                <h4 style={{ color: "#e2e8f0", fontFamily: "'Syne', sans-serif", fontSize: "18px", marginBottom: "10px" }}>E-Commerce Analytics</h4>
                <p style={{ color: "#94a3b8", fontSize: "15px", lineHeight: 1.7, margin: 0 }}>Most store owners don&apos;t know why they lose customers. I set up comprehensive tracking, analyze behavior patterns, and identify exactly where to optimize for maximum impact and revenue.</p>
              </div>
              <div style={{ background: "#0f172a", border: "1px solid #1e293b", padding: "24px", borderRadius: "12px" }}>
                <h4 style={{ color: "#e2e8f0", fontFamily: "'Syne', sans-serif", fontSize: "18px", marginBottom: "10px" }}>Conversion Rate Optimization</h4>
                <p style={{ color: "#94a3b8", fontSize: "15px", lineHeight: 1.7, margin: 0 }}>I take stores from 2% conversion to 5%+ through strategic testing, data analysis, and systematic optimization. Small improvements compound into massive, measurable results.</p>
              </div>
            </div>
          </div>

          {/* Key Stats */}
          <div>
            <h3 style={{ color: "#fff", fontFamily: "'Syne', sans-serif", fontSize: "22px", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ color: "#00d4aa" }}>📈</span> Key Stats
            </h3>
            <div className="stats-facts-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "16px" }}>
              {[
                { label: "Professional Since", val: "2024" },
                { label: "MCA Graduate", val: "2025" },
                { label: "Projects Delivered", val: "5+" },
                { label: "Page Load Improved", val: "53%" },
                { label: "Availability", val: "Open" }
              ].map((stat, i) => (
                <div key={i} style={{ background: "#111827", border: "1px solid #1e293b", padding: "16px", borderRadius: "10px", textAlign: "center" }}>
                  <div style={{ color: "#fff", fontFamily: "'Syne', sans-serif", fontSize: "20px", fontWeight: 800 }}>{stat.val}</div>
                  <div style={{ color: "#64748b", fontSize: "12px", fontFamily: "'JetBrains Mono', monospace", marginTop: "4px" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Why I Do This & Personal Touch */}
          <div style={{ display: "grid", gap: "24px" }}>
            <div style={{ padding: "24px", background: "#ff6b3510", borderRadius: "12px", borderLeft: "4px solid #ff6b35" }}>
              <h3 style={{ color: "#ff6b35", fontFamily: "'Syne', sans-serif", fontSize: "18px", marginBottom: "12px" }}>Why I Do This</h3>
              <p style={{ color: "#e2e8f0", fontSize: "15px", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>&quot;I&apos;m at the beginning of my professional journey and I think that&apos;s actually my advantage. I&apos;m hungry, current on the latest tools, and I genuinely care about every project I take on. Startups and small businesses deserve the same quality of technical work as big brands — I&apos;m here to deliver that.&quot;</p>
            </div>
            
            <div>
              <h3 style={{ color: "#fff", fontFamily: "'Syne', sans-serif", fontSize: "20px", marginBottom: "12px" }}>Personal Touch</h3>
              <p style={{ color: "#94a3b8", fontSize: "15px", lineHeight: 1.7 }}>When I&apos;m not optimizing stores or analyzing data, you&apos;ll find me exploring new e-commerce trends, researching growth strategies, or helping other developers level up their skills. I&apos;m also a continuous learner—staying on top of the latest in Shopify, analytics, and e-commerce best practices.</p>
            </div>
          </div>

          {/* Working Style */}
          <div>
            <h3 style={{ color: "#fff", fontFamily: "'Syne', sans-serif", fontSize: "22px", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ color: "#f59e0b" }}>🤝</span> Working Style
            </h3>
            <p style={{ color: "#94a3b8", fontSize: "15px", marginBottom: "20px" }}>I believe in transparency, communication, and data-driven decisions. Here&apos;s how I work:</p>
            <ul style={{ color: "#94a3b8", fontSize: "15px", lineHeight: 1.8, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "12px", margin: 0 }}>
              <li><strong style={{ color: "#fff" }}>Listen First:</strong> I start by understanding your business goals, challenges, and unique situation. No cookie-cutter solutions.</li>
              <li><strong style={{ color: "#fff" }}>Analyze Deeply:</strong> I dig into your data, competition, and user behavior to identify real opportunities (not just surface-level fixes).</li>
              <li><strong style={{ color: "#fff" }}>Test & Iterate:</strong> I don&apos;t guess. I test improvements, measure results, and double down on what works.</li>
              <li><strong style={{ color: "#fff" }}>Communicate Clearly:</strong> I explain technical concepts in business terms. You&apos;ll always know what I&apos;m doing and why.</li>
              <li><strong style={{ color: "#fff" }}>Focus on Impact:</strong> My goal isn&apos;t technical complexity. It&apos;s to increase your revenue and grow your business.</li>
            </ul>
          </div>

          {/* Ideal Clients */}
          <div>
            <h3 style={{ color: "#fff", fontFamily: "'Syne', sans-serif", fontSize: "20px", marginBottom: "12px" }}>Perfect For</h3>
            <p style={{ color: "#94a3b8", fontSize: "15px", marginBottom: "12px" }}>I&apos;m the right fit if you are:</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "20px" }}>
              {["A startup or small business", "Budget-conscious but quality-focused", "Launching your first Shopify store", "Need honest, no-fluff advice"].map((tag, i) => (
                <span key={i} style={{ background: "#1e293b", color: "#e2e8f0", padding: "6px 14px", borderRadius: "99px", fontSize: "13px", fontFamily: "'JetBrains Mono', monospace" }}>{tag}</span>
              ))}
            </div>
            <p style={{ color: "#94a3b8", fontSize: "15px", fontStyle: "italic" }}>Quality work at competitive pricing — that&apos;s my commitment to early-stage businesses.</p>
          </div>

          {/* CTA */}
          <div style={{ marginTop: "10px" }}>
            <p style={{ color: "#e2e8f0", fontSize: "16px", marginBottom: "20px", fontWeight: 600 }}>Looking for a developer who&apos;s honest about their experience, delivers quality work, and is priced right for your budget? Let&apos;s talk.</p>
            <a
              href="#contact" data-hover
              style={{
                display: "inline-flex", alignItems: "center", gap: "10px", padding: "16px 40px", background: "#ff6b35", color: "#fff",
                borderRadius: "10px", textDecoration: "none", fontFamily: "'Syne', sans-serif",
                fontWeight: 800, fontSize: "16px", transition: "all 0.3s",
                boxShadow: "0 8px 30px #ff6b3540"
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 14px 40px #ff6b3560"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 30px #ff6b3540"; }}
            >
              Let&apos;s Work Together <span style={{ fontSize: "20px" }}>→</span>
            </a>
          </div>
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
