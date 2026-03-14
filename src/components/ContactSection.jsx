import { useState } from 'react';
import { useInView, SectionLabel } from './shared';

export default function ContactSection() {
  const [ref, visible] = useInView();
  const [form, setForm] = useState({ 
    name: "", email: "", phone: "", company: "", 
    projectType: "", description: "", budget: "", terms: false 
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  };

  const submit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.projectType && form.description && form.terms) {
      setStatus("sending");
      setTimeout(() => setStatus("success"), 1500);
      setTimeout(() => {
        setStatus("idle");
        setForm({ name: "", email: "", phone: "", company: "", projectType: "", description: "", budget: "", terms: false });
      }, 5000);
    } else {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const inputStyle = {
    width: "100%", background: "#0f172a", border: "1.5px solid #1e293b",
    borderRadius: "10px", padding: "14px 16px", color: "#fff",
    fontFamily: "'Syne', sans-serif", fontSize: "14px",
    outline: "none", boxSizing: "border-box", transition: "all 0.3s",
  };

  const labelStyle = {
    display: "block", color: "#94a3b8", fontSize: "12px", 
    fontFamily: "'JetBrains Mono', monospace", marginBottom: "8px", textTransform: "uppercase"
  };

  return (
    <section id="contact" ref={ref} style={{ padding: "100px 8vw 60px" }}>
      <SectionLabel label="08 — Contact" />
      <h2 style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: "clamp(2rem,5vw,3.2rem)",
        fontWeight: 800, color: "#fff", margin: "12px 0 14px",
      }}>
        Let's <span style={{ color: "#ff6b35" }}>Work Together</span>
      </h2>
      <p style={{ color: "#64748b", fontSize: "16px", marginBottom: "48px", maxWidth: "600px", lineHeight: 1.6 }}>
        Have a project in mind? I'd love to hear about it. Let's chat about how I can help your business grow.
      </p>

      <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: "60px", maxWidth: "1200px" }}>
        
        {/* Left: Form */}
        <div style={{
          background: "#1a1f3a", padding: "40px", borderRadius: "16px",
          border: "1px solid #1e293b", opacity: visible ? 1 : 0, 
          transform: visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.6s ease"
        }}>
          {status === "success" ? (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <div style={{ fontSize: "60px", marginBottom: "20px" }}>🎉</div>
              <h3 style={{ color: "#00d4aa", fontFamily: "'Syne', sans-serif", fontSize: "24px", marginBottom: "16px" }}>Thanks for reaching out!</h3>
              <p style={{ color: "#94a3b8", fontSize: "16px" }}>I'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px" }}>
                <div>
                  <label style={labelStyle}>Name *</label>
                  <input required name="name" type="text" placeholder="John Doe" value={form.name} onChange={handleChange} style={inputStyle} onFocus={e => e.target.style.borderColor = "#ff6b35"} onBlur={e => e.target.style.borderColor = "#1e293b"} />
                </div>
                <div>
                  <label style={labelStyle}>Email *</label>
                  <input required name="email" type="email" placeholder="john@company.com" value={form.email} onChange={handleChange} style={inputStyle} onFocus={e => e.target.style.borderColor = "#ff6b35"} onBlur={e => e.target.style.borderColor = "#1e293b"} />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px" }}>
                <div>
                  <label style={labelStyle}>Phone (Optional)</label>
                  <input name="phone" type="tel" placeholder="+1 (234) 567-8900" value={form.phone} onChange={handleChange} style={inputStyle} onFocus={e => e.target.style.borderColor = "#ff6b35"} onBlur={e => e.target.style.borderColor = "#1e293b"} />
                </div>
                <div>
                  <label style={labelStyle}>Company (Optional)</label>
                  <input name="company" type="text" placeholder="Your Brand" value={form.company} onChange={handleChange} style={inputStyle} onFocus={e => e.target.style.borderColor = "#ff6b35"} onBlur={e => e.target.style.borderColor = "#1e293b"} />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px" }}>
                <div>
                  <label style={labelStyle}>Project Type *</label>
                  <select required name="projectType" value={form.projectType} onChange={handleChange} style={{ ...inputStyle, appearance: "none", cursor: "pointer" }} onFocus={e => e.target.style.borderColor = "#ff6b35"} onBlur={e => e.target.style.borderColor = "#1e293b"}>
                    <option value="" disabled>Select a service...</option>
                    <option value="Shopify Store Setup">Shopify Store Setup</option>
                    <option value="Analytics & Optimization">Analytics & Optimization</option>
                    <option value="Conversion Rate Optimization">Conversion Rate Optimization</option>
                    <option value="Custom Development">Custom Development</option>
                    <option value="Consulting">Consulting</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Budget</label>
                  <select name="budget" value={form.budget} onChange={handleChange} style={{ ...inputStyle, appearance: "none", cursor: "pointer" }} onFocus={e => e.target.style.borderColor = "#ff6b35"} onBlur={e => e.target.style.borderColor = "#1e293b"}>
                    <option value="" disabled>Select range...</option>
                    <option value="Under $2,500">Under $2,500</option>
                    <option value="$2,500 - $5,000">$2,500 - $5,000</option>
                    <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                    <option value="$10,000+">$10,000+</option>
                    <option value="Not sure">Not sure</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={labelStyle}>Project Description *</label>
                <textarea required name="description" placeholder="Tell me about your business goals and what you need help with..." value={form.description} onChange={handleChange} rows={5} style={{ ...inputStyle, resize: "none" }} onFocus={e => e.target.style.borderColor = "#ff6b35"} onBlur={e => e.target.style.borderColor = "#1e293b"} minLength={20} />
              </div>

              <label style={{ display: "flex", alignItems: "center", gap: "10px", color: "#94a3b8", fontSize: "14px", cursor: "pointer" }}>
                <input required type="checkbox" name="terms" checked={form.terms} onChange={handleChange} style={{ width: "16px", height: "16px", accentColor: "#ff6b35" }} />
                <span>I've read and agree to the terms (required)</span>
              </label>

              {status === "error" && (
                <p style={{ color: "#ef4444", fontSize: "14px", margin: 0 }}>Please fill out all required fields correctly.</p>
              )}

              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginTop: "12px" }}>
                <button type="submit" disabled={status === "sending"} style={{
                  padding: "16px 36px", background: "#ff6b35", color: "#fff", border: "none", borderRadius: "10px",
                  fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "16px", cursor: "pointer",
                  transition: "all 0.3s", boxShadow: "0 8px 30px #ff6b3540", flex: 1, minWidth: "200px"
                }}>
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
                <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer" style={{
                  padding: "16px 36px", background: "transparent", color: "#fff", border: "2px solid #334155", 
                  borderRadius: "10px", textDecoration: "none", fontFamily: "'Syne', sans-serif", 
                  fontWeight: 800, fontSize: "16px", cursor: "pointer", transition: "all 0.3s", flex: 1, minWidth: "200px",
                  textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px"
                }}>
                  📅 Book a Time
                </a>
              </div>
            </form>
          )}
        </div>

        {/* Right: Info & Lead Magnet */}
        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <h3 style={{ color: "#fff", fontFamily: "'Syne', sans-serif", fontSize: "20px", margin: 0 }}>Contact Info</h3>
            {[
              { icon: "✉️", label: "Email", val: "nikamvaruna@gmail.com", href: "mailto:nikamvaruna@gmail.com" },
              { icon: "📱", label: "Phone", val: "+91 7768289006", href: "tel:+917768289006" },
              { icon: "💼", label: "LinkedIn", val: "linkedin.com/in/varunanikam", href: "https://www.linkedin.com/in/varunanikam-200255255/" },
              { icon: "👩‍💻", label: "GitHub", val: "github.com/varuna1704", href: "https://github.com/varuna1704" },
            ].map((c, i) => (
              <a
                key={i} href={c.href || "#"} data-hover
                target={c.href && c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href && c.href.startsWith("http") ? "noreferrer" : undefined}
                style={{
                  display: "flex", alignItems: "center", gap: "16px", padding: "16px",
                  background: "#0f172a", border: "1px solid #1e293b", borderRadius: "12px",
                  textDecoration: "none", transition: "all 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#ff6b35"; e.currentTarget.style.transform = "translateX(5px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#1e293b"; e.currentTarget.style.transform = "translateX(0)"; }}
              >
                <span style={{ fontSize: "24px" }}>{c.icon}</span>
                <div>
                  <div style={{ color: "#334155", fontSize: "11px", fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase", letterSpacing: "1px" }}>{c.label}</div>
                  <div style={{ color: "#e2e8f0", fontSize: "15px", fontFamily: "'Syne', sans-serif", marginTop: "4px", fontWeight: 600 }}>{c.val}</div>
                </div>
              </a>
            ))}
            
            <div style={{ padding: "0 16px", display: "flex", gap: "20px", marginTop: "10px" }}>
              <div style={{ borderLeft: "2px solid #00d4aa", paddingLeft: "10px" }}>
                <div style={{ color: "#475569", fontSize: "11px", fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase" }}>Current Status</div>
                <div style={{ color: "#e2e8f0", fontSize: "14px", fontFamily: "'Syne', sans-serif" }}>Available for new projects</div>
              </div>
              <div style={{ borderLeft: "2px solid #f59e0b", paddingLeft: "10px" }}>
                <div style={{ color: "#475569", fontSize: "11px", fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase" }}>Response Time</div>
                <div style={{ color: "#e2e8f0", fontSize: "14px", fontFamily: "'Syne', sans-serif" }}>Within 24 hours</div>
              </div>
            </div>
          </div>

          <div style={{ 
            background: "linear-gradient(135deg, rgba(26,31,58,0.7), rgba(15,23,42,1))", 
            padding: "32px", borderRadius: "16px", border: "1px solid #1e293b" 
          }}>
            <h3 style={{ color: "#fff", fontFamily: "'Syne', sans-serif", fontSize: "20px", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
              🎁 Free E-Commerce Checklist
            </h3>
            <p style={{ color: "#94a3b8", fontSize: "15px", lineHeight: 1.6, marginBottom: "20px" }}>
              Get the 15-point optimization checklist top stores use to increase conversion rates.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <input type="text" placeholder="First Name" style={inputStyle} onFocus={e => e.target.style.borderColor = "#ff6b35"} onBlur={e => e.target.style.borderColor = "#1e293b"} />
              <input type="email" placeholder="Email Address" style={inputStyle} onFocus={e => e.target.style.borderColor = "#ff6b35"} onBlur={e => e.target.style.borderColor = "#1e293b"} />
              <button data-hover style={{
                padding: "12px", background: "#ff6b3515", border: "1px solid #ff6b35", color: "#ff6b35", borderRadius: "8px",
                fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "14px", cursor: "pointer", transition: "all 0.3s"
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "#ff6b35"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#ff6b3515"; e.currentTarget.style.color = "#ff6b35"; }}
              >
                Get Free Checklist
              </button>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
