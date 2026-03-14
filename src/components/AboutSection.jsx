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
        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          
          {/* Header & Bio */}
          <div>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, color: "#fff", lineHeight: 1.1, marginBottom: 24 }}>
              I Help E-Commerce Brands Scale With <span style={{ color: "#ff6b35" }}>Shopify & Data-Driven Insights</span>
            </h2>
            <div style={{ color: "#94a3b8", fontSize: "16px", lineHeight: 1.8, display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>Hi, I&apos;m Varuna Nikam. I&apos;m a full-stack e-commerce expert specializing in Shopify development and data analytics.</p>
              <p>With 5+ years of hands-on experience, I&apos;ve helped 50+ e-commerce brands increase their conversion rates, improve customer experience, and drive measurable revenue growth. My passion? Taking struggling stores and turning them into high-performing sales machines.</p>
              <p>Here&apos;s what makes me different: I combine deep technical expertise with data-driven insights. I don&apos;t just build stores—I optimize them for growth. I analyze what&apos;s working, test improvements, and implement solutions that deliver real results.</p>
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
                { label: "Experience", val: "5+ Years" },
                { label: "Brands Helped", val: "50+" },
                { label: "Revenue Generated", val: "$2M+" },
                { label: "Avg Conversion Inc.", val: "40%" },
                { label: "Client Satisfaction", val: "98%" }
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
              <p style={{ color: "#e2e8f0", fontSize: "15px", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>&quot;I&apos;m passionate about helping online businesses succeed. There&apos;s nothing more satisfying than seeing a client&apos;s conversion rate jump from 2% to 5.8% in 90 days, watching that translate into hundreds of thousands in additional revenue. I love the intersection of technical skill and business impact.&quot;</p>
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
            <h3 style={{ color: "#fff", fontFamily: "'Syne', sans-serif", fontSize: "20px", marginBottom: "12px" }}>Ideal Clients</h3>
            <p style={{ color: "#94a3b8", fontSize: "15px", marginBottom: "12px" }}>I work best with e-commerce brands that:</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "20px" }}>
              {["Are serious about growth", "Value data-driven decisions", "Want a true partner", "Will test & optimize"].map((tag, i) => (
                <span key={i} style={{ background: "#1e293b", color: "#e2e8f0", padding: "6px 14px", borderRadius: "99px", fontSize: "13px", fontFamily: "'JetBrains Mono', monospace" }}>{tag}</span>
              ))}
            </div>
            <p style={{ color: "#94a3b8", fontSize: "15px", fontStyle: "italic" }}>Whether you&apos;re launching your first store or scaling an existing one, I can help.</p>
          </div>

          {/* CTA */}
          <div style={{ marginTop: "10px" }}>
            <p style={{ color: "#e2e8f0", fontSize: "16px", marginBottom: "20px", fontWeight: 600 }}>If you&apos;re looking for a Shopify expert who understands both the technical side and the business impact, let&apos;s connect.</p>
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
