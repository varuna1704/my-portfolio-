import { useState, useCallback } from 'react';
import { useInView, SectionLabel } from './shared';
import { submitFormToFormspree } from '../services/emailService';
import { useLang } from '../context/LangContext.jsx';

export default function ContactSection() {
  const [ref, visible] = useInView();
  const { t } = useLang();
  const c = t.contact;

  const [form, setForm] = useState({ 
    name: "", email: "", phone: "", description: "", terms: false 
  });
  const [status, setStatus] = useState("idle");
  const [copied, setCopied] = useState(false);

  // Feature 13: Copy Email Button
  const copyEmail = useCallback(() => {
    navigator.clipboard.writeText("nikamvaruna@gmail.com").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  };

  const submit = async (e) => {
    e.preventDefault();
    if (form.name && form.email && form.description && form.terms) {
      setStatus("sending");
      
      try {
        await submitFormToFormspree(form);

        setStatus("success");
        setTimeout(() => {
          setStatus("idle");
          setForm({ name: "", email: "", phone: "", description: "", terms: false });
        }, 8000);

      } catch (error) {
        console.error("Submission error:", error);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
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
    fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase",
    letterSpacing: "1px", marginBottom: "8px",
  };

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        padding: "100px 5vw",
        background: "linear-gradient(to bottom, #020617, #0a0f1e)",
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(40px)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
      }}
    >
      <SectionLabel label={c.sectionLabel} />

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{
          fontFamily: "'Syne', sans-serif", fontSize: "clamp(32px,5vw,52px)",
          fontWeight: 800, color: "#fff", lineHeight: 1.1, marginBottom: 8,
        }}>
          {c.title}
        </h2>
        <p style={{ color: "#94a3b8", fontSize: 16, marginBottom: 52, maxWidth: 500 }}>
          {c.subtitle}
        </p>

        <div
          className="contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
          }}
        >
          {/* Left: Contact Form */}
          <div>
            {status === "success" ? (
              <div style={{
                padding: "48px 32px", background: "#0f172a",
                border: "1px solid #1e293b", borderRadius: 16, textAlign: "center",
              }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>🎉</div>
                <h3 style={{ color: "#00d4aa", fontFamily: "'Syne', sans-serif", fontSize: 22, marginBottom: 8 }}>
                  {c.successTitle}
                </h3>
                <p style={{ color: "#94a3b8" }}>
                  {c.successDesc}
                </p>
              </div>
            ) : (
              <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <div>
                    <label style={labelStyle}>{c.nameLabel}</label>
                    <input required name="name" placeholder={c.namePlaceholder} value={form.name} onChange={handleChange} style={inputStyle} onFocus={e => e.target.style.borderColor = "#ff6b35"} onBlur={e => e.target.style.borderColor = "#1e293b"} minLength={2} />
                  </div>
                  <div>
                    <label style={labelStyle}>{c.emailLabel}</label>
                    <input required type="email" name="email" placeholder={c.emailPlaceholder} value={form.email} onChange={handleChange} style={inputStyle} onFocus={e => e.target.style.borderColor = "#ff6b35"} onBlur={e => e.target.style.borderColor = "#1e293b"} />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>{c.phoneLabel}</label>
                  <input type="tel" name="phone" placeholder={c.phonePlaceholder} value={form.phone} onChange={handleChange} style={inputStyle} onFocus={e => e.target.style.borderColor = "#ff6b35"} onBlur={e => e.target.style.borderColor = "#1e293b"} />
                </div>

                <div>
                  <label style={labelStyle}>{c.descLabel}</label>
                  <textarea required name="description" placeholder={c.descPlaceholder} value={form.description} onChange={handleChange} rows={5} style={{ ...inputStyle, resize: "none" }} onFocus={e => e.target.style.borderColor = "#ff6b35"} onBlur={e => e.target.style.borderColor = "#1e293b"} minLength={20} />
                </div>

                <label style={{ display: "flex", alignItems: "center", gap: "10px", color: "#94a3b8", fontSize: "14px", cursor: "pointer" }}>
                  <input required type="checkbox" name="terms" checked={form.terms} onChange={handleChange} style={{ width: "16px", height: "16px", accentColor: "#ff6b35" }} />
                  <span>{c.termsLabel}</span>
                </label>

                {status === "error" && (
                  <p style={{ color: "#ef4444", fontSize: "14px", margin: 0 }}>{c.errorMsg}</p>
                )}

                <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginTop: "12px" }}>
                   <button type="submit" disabled={status === "sending"} style={{
                    padding: "16px 36px", background: status === "sending" ? "#475569" : "#d9531b", color: "#FFFFFF", border: "none", borderRadius: "10px",
                    fontFamily: "'Syne', sans-serif", fontWeight: 600, fontSize: "16px", cursor: status === "sending" ? "not-allowed" : "pointer",
                    transition: "all 0.3s", boxShadow: status === "sending" ? "none" : "0 8px 30px rgba(217, 83, 27, 0.25)", flex: 1, minWidth: "200px"
                  }}>
                    {status === "sending" ? (
                      <span style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: "center" }}>
                        <span style={{ width: "16px", height: "16px", border: "2px solid #fff", borderTopColor: "transparent", borderRadius: "50%", animation: "spin 1s linear infinite" }} />
                        {c.sendingButton}
                      </span>
                    ) : c.sendButton}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right: Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <h3 style={{ color: "#fff", fontFamily: "'Syne', sans-serif", fontSize: "20px", margin: 0 }}>{c.contactInfoTitle}</h3>
              {[
                { icon: "✉️", label: "Email", val: "nikamvaruna@gmail.com", href: "mailto:nikamvaruna@gmail.com", canCopy: true },
                { icon: "💼", label: "LinkedIn", val: "linkedin.com/in/varunanikam-200255255", href: "https://www.linkedin.com/in/varunanikam-200255255" },
                { icon: "👩‍💻", label: "GitHub", val: "github.com/varuna1704", href: "https://github.com/varuna1704" },
                { icon: "📍", label: "Location", val: "Nashik, Maharashtra, India", href: "https://maps.google.com/?q=Nashik,+Maharashtra,+India" },
                { icon: "📱", label: "Phone", val: "+91 7768028906", href: "tel:+917768028906" },
              ].map((item, i) => (
                <div key={i} style={{ position: "relative" }}>
                  <a
                    href={item.href || "#"}
                    data-hover
                    target={item.href && item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href && item.href.startsWith("http") ? "noreferrer" : undefined}
                    style={{
                      display: "flex", alignItems: "center", gap: "16px", padding: "16px",
                      background: "#0f172a", border: "1px solid #1e293b", borderRadius: "12px",
                      textDecoration: "none", transition: "all 0.2s",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "#ff6b35"; e.currentTarget.style.transform = "translateX(5px)"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "#1e293b"; e.currentTarget.style.transform = "translateX(0)"; }}
                  >
                    <span style={{ fontSize: "24px" }}>{item.icon}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ color: "#94a3b8", fontSize: "11px", fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase", letterSpacing: "1px" }}>{item.label}</div>
                      <div style={{ color: "#e2e8f0", fontSize: "15px", fontFamily: "'Syne', sans-serif", marginTop: "4px", fontWeight: 600 }}>{item.val}</div>
                    </div>
                    {/* Feature 13: Copy Email Button */}
                    {item.canCopy && (
                      <button
                        onClick={e => { e.preventDefault(); copyEmail(); }}
                        title="Copy email to clipboard"
                        style={{
                          background: copied ? "#00d4aa22" : "#1e293b",
                          border: `1px solid ${copied ? "#00d4aa" : "#334155"}`,
                          borderRadius: 8,
                          color: copied ? "#00d4aa" : "#94a3b8",
                          cursor: "pointer",
                          fontSize: 11,
                          fontFamily: "'JetBrains Mono', monospace",
                          padding: "6px 10px",
                          transition: "all 0.2s",
                          whiteSpace: "nowrap",
                          flexShrink: 0,
                        }}
                      >
                        {copied ? c.copiedBtn : c.copyBtn}
                      </button>
                    )}
                  </a>
                </div>
              ))}
              
              <div style={{ padding: "0 16px", display: "flex", gap: "20px", marginTop: "10px" }}>
                <div style={{ borderLeft: "2px solid #00d4aa", paddingLeft: "10px" }}>
                  <div style={{ color: "#94a3b8", fontSize: "11px", fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase" }}>{c.currentStatusLabel}</div>
                  <div style={{ color: "#e2e8f0", fontSize: "14px", fontFamily: "'Syne', sans-serif" }}>{c.currentStatusVal}</div>
                </div>
                <div style={{ borderLeft: "2px solid #f59e0b", paddingLeft: "10px" }}>
                  <div style={{ color: "#94a3b8", fontSize: "11px", fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase" }}>{c.responseTimeLabel}</div>
                  <div style={{ color: "#e2e8f0", fontSize: "14px", fontFamily: "'Syne', sans-serif" }}>{c.responseTimeVal}</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
