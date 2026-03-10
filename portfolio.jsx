import { useState, useEffect, useRef } from "react";

const NAV_ITEMS = ["About", "Skills", "Experience", "Education", "Certifications", "Resume", "Contact"];

const SKILLS = [
  { name: "Shopify Development", level: 90, cat: "E-commerce" },
  { name: "Theme Customization", level: 88, cat: "E-commerce" },
  { name: "HTML5", level: 92, cat: "Frontend" },
  { name: "CSS / UI Design", level: 85, cat: "Frontend" },
  { name: "Core Java", level: 80, cat: "Backend" },
  { name: "Python", level: 75, cat: "Backend" },
  { name: "SQL", level: 82, cat: "Data" },
  { name: "Data Analytics", level: 78, cat: "Data" },
];

const EXPERIENCE = [
  {
    role: "Shopify Developer",
    company: "Indigen Services & AI SaaS Development",
    period: "November 2025 – Present · 5 months",
    location: "Nashik, Maharashtra, India",
    color: "#ff6b35",
    icon: "🛍",
    points: [
      "Develop & optimize Shopify stores — theme customization, front-end coding, and UX improvements",
      "Boost store performance by enhancing conversion rate and page experience",
      "Contribute to AI SaaS product development alongside e-commerce work",
    ],
  },
  {
    role: "Data Analyst",
    company: "Privan Sports",
    period: "July 2024 – March 2025 · 9 months",
    location: "Remote / Global Teams",
    color: "#00d4aa",
    icon: "📊",
    tools: [
      {
        name: "SQ – Advanced Version",
        icon: "🏀",
        points: [
          "Tagged 1.5 matches/day at frame-level granularity with 100% QC accuracy",
          "Mapped jersey numbers, court positions & event timestamps for spatial performance modeling",
          "Handled high-frame-density workflows requiring precision-based data entry",
        ],
      },
      {
        name: "VidSwap – Advanced Version",
        icon: "🎬",
        points: [
          "Tagged 2.5 full matches/day (~80/month) using structured event classification",
          "Annotated goals, plays & player-specific events across international basketball matches",
          "Delivered analytics-ready datasets supporting performance & strategy evaluation",
        ],
      },
    ],
  },
];

const EDUCATION = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "Dr. B.V. Hiray College of Management & Research Centre",
    location: "Malegaon, Nashik",
    period: "August 2023 – June 2025",
    focus: "Computer Programming, Specific Applications",
    icon: "🎓",
    color: "#ff6b35",
  },
  {
    degree: "Bachelor of Computer Science",
    school: "MGV's Loknete Vyankatrao Hiray Arts, Science & Commerce",
    location: "Nashik",
    period: "March 2020 – July 2023",
    focus: "Computer Science",
    icon: "🏫",
    color: "#7c3aed",
  },
];

const CERTIFICATIONS = [
  { title: "AWS re/Start Graduate", issuer: "Amazon Web Services", icon: "☁️", color: "#f59e0b" },
  { title: "Solutions Architecture Job Simulation", issuer: "AWS", icon: "🏗", color: "#ff6b35" },
  { title: "Introduction to Technology Apprenticeship", issuer: "Accenture UK", icon: "💼", color: "#00d4aa" },
  { title: "Technology Job Simulation", issuer: "Deloitte Australia", icon: "🔷", color: "#7c3aed" },
  { title: "GenAI Powered Data Analytics", issuer: "Tata", icon: "🤖", color: "#ec4899" },
];

const CAT_COLORS = {
  "E-commerce": "#ff6b35",
  Frontend: "#00d4aa",
  Backend: "#7c3aed",
  Data: "#f59e0b",
};

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function AnimatedBar({ level, color, visible }) {
  return (
    <div style={{ background: "#1a1a2e", borderRadius: 99, height: 7, overflow: "hidden" }}>
      <div style={{
        height: "100%", borderRadius: 99,
        background: `linear-gradient(90deg, ${color}, ${color}88)`,
        width: visible ? `${level}%` : "0%",
        transition: "width 1.4s cubic-bezier(0.4,0,0.2,1)",
        boxShadow: `0 0 12px ${color}55`,
      }} />
    </div>
  );
}

function Cursor() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [big, setBig] = useState(false);
  useEffect(() => {
    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    const onOver = (e) => setBig(!!e.target.closest("a,button,[data-hover]"));
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => { window.removeEventListener("mousemove", onMove); window.removeEventListener("mouseover", onOver); };
  }, []);
  return (
    <>
      <div style={{ position: "fixed", left: pos.x - 6, top: pos.y - 6, width: 12, height: 12, borderRadius: "50%", background: "#ff6b35", pointerEvents: "none", zIndex: 9999, transform: big ? "scale(2.2)" : "scale(1)", transition: "transform 0.15s" }} />
      <div style={{ position: "fixed", left: big ? pos.x - 28 : pos.x - 20, top: big ? pos.y - 28 : pos.y - 20, width: big ? 56 : 40, height: big ? 56 : 40, borderRadius: "50%", border: "1.5px solid #ff6b3555", pointerEvents: "none", zIndex: 9998, transition: "all 0.18s ease" }} />
    </>
  );
}

function TypedText() {
  const titles = ["Shopify Developer", "E-commerce Specialist", "Data Analyst", "MCA Graduate 2025"];
  const [display, setDisplay] = useState("");
  const [ti, setTi] = useState(0);
  const [del, setDel] = useState(false);
  const [ci, setCi] = useState(0);
  useEffect(() => {
    const cur = titles[ti];
    const timer = setTimeout(() => {
      if (!del) {
        setDisplay(cur.slice(0, ci + 1));
        if (ci + 1 === cur.length) setTimeout(() => setDel(true), 1400);
        else setCi(c => c + 1);
      } else {
        setDisplay(cur.slice(0, ci - 1));
        if (ci - 1 === 0) { setDel(false); setTi(t => (t + 1) % titles.length); setCi(0); }
        else setCi(c => c - 1);
      }
    }, del ? 50 : 95);
    return () => clearTimeout(timer);
  }, [ci, del, ti]);
  return (
    <div style={{ height: 50, display: "flex", alignItems: "center", gap: 6, marginTop: 18 }}>
      <span style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.1rem,2.8vw,1.7rem)", color: "#ff6b35", fontWeight: 700 }}>{display}</span>
      <span style={{ width: 3, height: "1.3em", background: "#ff6b35", borderRadius: 2, animation: "blink 1s infinite" }} />
    </div>
  );
}

function Hero() {
  return (
    <section id="about" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "80px 8vw 40px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "8%", right: "3%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, #ff6b3514 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "5%", left: "6%", width: 360, height: 360, borderRadius: "50%", background: "radial-gradient(circle, #7c3aed14 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ zIndex: 1, maxWidth: 740 }}>
        <p style={{ color: "#ff6b35", fontFamily: "'JetBrains Mono', monospace", fontSize: 12, letterSpacing: 4, textTransform: "uppercase", marginBottom: 14, opacity: 0.8 }}>
          &gt; Based in Nashik, Maharashtra —
        </p>
        <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(3rem,8vw,6rem)", fontWeight: 800, lineHeight: 1.04, margin: 0, color: "#fff" }}>
          Varuna<br />
          <span style={{ WebkitTextStroke: "2px #ff6b35", color: "transparent" }}>Nikam</span>
        </h1>
        <TypedText />
        <p style={{ color: "#94a3b8", fontSize: 16, lineHeight: 1.9, maxWidth: 560, marginTop: 22 }}>
          Shopify Developer with hands-on experience building and optimizing e-commerce stores. MCA 2025 graduate combining technical development with data analytics and a passion for scalable digital products.
        </p>

        <div style={{ display: "flex", gap: 14, marginTop: 36, flexWrap: "wrap" }}>
          <a href="#contact" data-hover
            style={{ padding: "13px 32px", background: "#ff6b35", color: "#fff", borderRadius: 10, textDecoration: "none", fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 14, boxShadow: "0 8px 30px #ff6b3540", transition: "all 0.25s" }}
            onMouseEnter={e => { e.target.style.transform = "translateY(-3px)"; e.target.style.boxShadow = "0 14px 40px #ff6b3560"; }}
            onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "0 8px 30px #ff6b3540"; }}>
            Hire Me
          </a>
          <a href="#resume" data-hover
            style={{ padding: "13px 32px", border: "1.5px solid #334155", color: "#94a3b8", borderRadius: 10, textDecoration: "none", fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 14, transition: "all 0.25s", display: "flex", alignItems: "center", gap: 8 }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "#ff6b35"; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "#334155"; e.currentTarget.style.color = "#94a3b8"; }}>
            📄 View Resume
          </a>
          <a href="mailto:nikamvaruna@gmail.com" data-hover
            style={{ padding: "13px 32px", border: "1.5px solid #334155", color: "#94a3b8", borderRadius: 10, textDecoration: "none", fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 14, transition: "all 0.25s" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "#ff6b35"; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "#334155"; e.currentTarget.style.color = "#94a3b8"; }}>
            ✉ Email Me
          </a>
        </div>

        <div style={{ display: "flex", gap: 36, marginTop: 54, paddingTop: 36, borderTop: "1px solid #1e293b", flexWrap: "wrap" }}>
          {[
            { label: "Current Role", val: "Shopify Dev" },
            { label: "Experience", val: "1+ yr" },
            { label: "Certifications", val: "5" },
          ].map(s => (
            <div key={s.label}>
              <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 26, fontWeight: 800, color: "#fff" }}>{s.val}</div>
              <div style={{ color: "#475569", fontSize: 12, marginTop: 4, fontFamily: "'JetBrains Mono', monospace" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const [ref, visible] = useInView();
  const [active, setActive] = useState("All");
  const cats = ["All", ...new Set(SKILLS.map(s => s.cat))];
  const filtered = active === "All" ? SKILLS : SKILLS.filter(s => s.cat === active);
  return (
    <section id="skills" ref={ref} style={{ padding: "100px 8vw" }}>
      <SectionLabel label="02 — Skills" />
      <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: 800, color: "#fff", margin: "12px 0 36px" }}>
        My <span style={{ color: "#ff6b35" }}>Toolkit</span>
      </h2>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 36 }}>
        {cats.map(c => (
          <button key={c} data-hover onClick={() => setActive(c)}
            style={{ padding: "7px 20px", borderRadius: 99, border: `1.5px solid ${active === c ? "#ff6b35" : "#1e293b"}`, background: active === c ? "#ff6b3520" : "transparent", color: active === c ? "#ff6b35" : "#64748b", cursor: "pointer", fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 12, transition: "all 0.2s" }}>
            {c}
          </button>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px,1fr))", gap: 18 }}>
        {filtered.map(s => (
          <div key={s.name}
            style={{ background: "#0f172a", border: "1px solid #1e293b", borderRadius: 14, padding: "22px 24px", transition: "all 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = CAT_COLORS[s.cat]; e.currentTarget.style.transform = "translateY(-3px)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "#1e293b"; e.currentTarget.style.transform = "translateY(0)"; }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
              <span style={{ color: "#fff", fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 14 }}>{s.name}</span>
              <span style={{ color: CAT_COLORS[s.cat], fontFamily: "'JetBrains Mono', monospace", fontSize: 12, fontWeight: 700 }}>{s.level}%</span>
            </div>
            <AnimatedBar level={s.level} color={CAT_COLORS[s.cat]} visible={visible} />
            <span style={{ color: "#334155", fontSize: 10, marginTop: 10, display: "block", fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase", letterSpacing: 1 }}>{s.cat}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" style={{ padding: "100px 8vw" }}>
      <SectionLabel label="03 — Experience" />
      <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: 800, color: "#fff", margin: "12px 0 52px" }}>
        Work <span style={{ color: "#ff6b35" }}>History</span>
      </h2>
      <div style={{ maxWidth: 760, position: "relative" }}>
        <div style={{ position: "absolute", left: 7, top: 4, bottom: 0, width: 2, background: "linear-gradient(to bottom, #ff6b35, #7c3aed44)", borderRadius: 2 }} />
        {EXPERIENCE.map((e, i) => (
          <div key={i} style={{ paddingLeft: 46, marginBottom: 52, position: "relative" }}>
            <div style={{ position: "absolute", left: 0, top: 5, width: 16, height: 16, borderRadius: "50%", background: e.color, border: "3px solid #060a14", boxShadow: `0 0 0 4px ${e.color}30` }} />
            <div style={{ background: "#0f172a", border: "1px solid #1e293b", borderRadius: 16, padding: "28px 30px", transition: "border-color 0.2s" }}
              onMouseEnter={el => el.currentTarget.style.borderColor = e.color}
              onMouseLeave={el => el.currentTarget.style.borderColor = "#1e293b"}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 10, marginBottom: 6 }}>
                <span style={{ fontSize: 22 }}>{e.icon}</span>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 18, fontWeight: 800, color: "#fff", margin: 0 }}>{e.role}</h3>
                <span style={{ color: e.color, fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 14 }}>@ {e.company}</span>
              </div>
              <div style={{ display: "flex", gap: 16, marginBottom: 18, flexWrap: "wrap" }}>
                <span style={{ color: "#334155", fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>📅 {e.period}</span>
                <span style={{ color: "#334155", fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>📍 {e.location}</span>
              </div>
              {e.tools ? (
                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  {e.tools.map((tool, ti) => (
                    <div key={ti} style={{ borderLeft: `2px solid ${e.color}44`, paddingLeft: 16 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                        <span style={{ fontSize: 16 }}>{tool.icon}</span>
                        <span style={{ color: e.color, fontFamily: "'JetBrains Mono', monospace", fontSize: 12, fontWeight: 700 }}>{tool.name}</span>
                      </div>
                      <ul style={{ margin: 0, padding: "0 0 0 18px" }}>
                        {tool.points.map((pt, j) => (
                          <li key={j} style={{ color: "#94a3b8", fontSize: 14, lineHeight: 1.85, marginBottom: 5 }}>{pt}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <ul style={{ margin: 0, padding: "0 0 0 18px" }}>
                  {e.points.map((pt, j) => (
                    <li key={j} style={{ color: "#94a3b8", fontSize: 14, lineHeight: 1.85, marginBottom: 6 }}>{pt}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" style={{ padding: "100px 8vw" }}>
      <SectionLabel label="04 — Education" />
      <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: 800, color: "#fff", margin: "12px 0 48px" }}>
        Academic <span style={{ color: "#ff6b35" }}>Background</span>
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))", gap: 24 }}>
        {EDUCATION.map((e, i) => (
          <div key={i}
            style={{ background: "#0f172a", border: "1px solid #1e293b", borderRadius: 20, padding: "32px", transition: "all 0.3s", position: "relative", overflow: "hidden" }}
            onMouseEnter={el => { el.currentTarget.style.borderColor = e.color; el.currentTarget.style.transform = "translateY(-5px)"; }}
            onMouseLeave={el => { el.currentTarget.style.borderColor = "#1e293b"; el.currentTarget.style.transform = "translateY(0)"; }}>
            <div style={{ position: "absolute", top: -30, right: -30, width: 100, height: 100, borderRadius: "50%", background: `${e.color}12`, pointerEvents: "none" }} />
            <span style={{ fontSize: 38, display: "block", marginBottom: 18 }}>{e.icon}</span>
            <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, color: "#fff", margin: "0 0 8px", lineHeight: 1.4 }}>{e.degree}</h3>
            <p style={{ color: e.color, fontSize: 13, fontFamily: "'Syne', sans-serif", fontWeight: 700, margin: "0 0 6px" }}>{e.school}</p>
            <p style={{ color: "#475569", fontSize: 12, fontFamily: "'JetBrains Mono', monospace", margin: "0 0 6px" }}>📍 {e.location}</p>
            <p style={{ color: "#334155", fontSize: 12, fontFamily: "'JetBrains Mono', monospace", margin: "0 0 14px" }}>📅 {e.period}</p>
            <span style={{ padding: "5px 14px", borderRadius: 99, background: `${e.color}18`, color: e.color, fontSize: 11, fontFamily: "'JetBrains Mono', monospace" }}>{e.focus}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section id="certifications" style={{ padding: "100px 8vw" }}>
      <SectionLabel label="05 — Certifications" />
      <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: 800, color: "#fff", margin: "12px 0 48px" }}>
        Credentials <span style={{ color: "#ff6b35" }}>&amp; Certs</span>
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: 18 }}>
        {CERTIFICATIONS.map((c, i) => (
          <div key={i} data-hover
            style={{ background: "#0f172a", border: "1px solid #1e293b", borderRadius: 16, padding: "24px 26px", display: "flex", gap: 16, alignItems: "flex-start", transition: "all 0.25s", cursor: "pointer" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = c.color; e.currentTarget.style.transform = "translateX(4px)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "#1e293b"; e.currentTarget.style.transform = "translateX(0)"; }}>
            <div style={{ fontSize: 28, flexShrink: 0, width: 48, height: 48, background: `${c.color}18`, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>{c.icon}</div>
            <div>
              <div style={{ color: "#fff", fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 14, lineHeight: 1.4, marginBottom: 6 }}>{c.title}</div>
              <div style={{ color: c.color, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, fontWeight: 600 }}>{c.issuer}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Resume() {
  const resumeDetails = [
    { icon: "🛍", label: "Current Role", value: "Shopify Developer @ Indigen Services" },
    { icon: "📊", label: "Previous Role", value: "Data Analyst @ Privan Sports" },
    { icon: "🎓", label: "Education", value: "MCA 2025 · Dr. B.V. Hiray College, Nashik" },
    { icon: "☁️", label: "Top Certification", value: "AWS re/Start Graduate" },
    { icon: "💻", label: "Core Skills", value: "Shopify · HTML5 · Java · Python · SQL" },
    { icon: "📍", label: "Location", value: "Nashik, Maharashtra, India" },
  ];

  return (
    <section id="resume" style={{ padding: "100px 8vw" }}>
      <SectionLabel label="06 — Resume" />
      <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: 800, color: "#fff", margin: "12px 0 14px" }}>
        My <span style={{ color: "#ff6b35" }}>Resume</span>
      </h2>
      <p style={{ color: "#64748b", fontSize: 15, marginBottom: 48 }}>
        A snapshot of my professional background — download the full PDF below.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, maxWidth: 960, alignItems: "start" }}>

        {/* — Left: resume preview card */}
        <div style={{ background: "#0f172a", border: "1px solid #1e293b", borderRadius: 20, overflow: "hidden", transition: "box-shadow 0.3s" }}
          onMouseEnter={e => e.currentTarget.style.boxShadow = "0 24px 60px #ff6b3520"}
          onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}>

          {/* card top bar */}
          <div style={{ background: "#111827", padding: "16px 24px", borderBottom: "1px solid #1e293b", display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff6b35" }} />
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#f59e0b" }} />
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#00d4aa" }} />
            <span style={{ color: "#334155", fontFamily: "'JetBrains Mono', monospace", fontSize: 11, marginLeft: 8 }}>Varuna_Nikam_Resume.pdf</span>
          </div>

          {/* card body — mini resume preview */}
          <div style={{ padding: "28px 28px 24px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20, paddingBottom: 16, borderBottom: "1px solid #1e293b" }}>
              <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#ff6b3520", border: "2px solid #ff6b3540", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>👩‍💻</div>
              <div>
                <div style={{ color: "#fff", fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 16 }}>Varuna Nikam</div>
                <div style={{ color: "#ff6b35", fontFamily: "'JetBrains Mono', monospace", fontSize: 10, marginTop: 2 }}>SHOPIFY DEVELOPER · DATA ANALYST · MCA 2025</div>
              </div>
            </div>

            {resumeDetails.map((d, i) => (
              <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 12 }}>
                <span style={{ fontSize: 14, flexShrink: 0, marginTop: 1 }}>{d.icon}</span>
                <div>
                  <div style={{ color: "#334155", fontFamily: "'JetBrains Mono', monospace", fontSize: 9, textTransform: "uppercase", letterSpacing: 1 }}>{d.label}</div>
                  <div style={{ color: "#94a3b8", fontFamily: "'Syne', sans-serif", fontSize: 12, fontWeight: 600, marginTop: 2 }}>{d.value}</div>
                </div>
              </div>
            ))}

            <div style={{ marginTop: 8, paddingTop: 16, borderTop: "1px solid #1e293b" }}>
              <div style={{ color: "#334155", fontFamily: "'JetBrains Mono', monospace", fontSize: 9, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Certifications</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {["AWS re/Start", "AWS Solutions Arch", "Accenture UK", "Deloitte AU", "Tata GenAI"].map(c => (
                  <span key={c} style={{ padding: "3px 10px", borderRadius: 99, background: "#1e293b", color: "#64748b", fontSize: 10, fontFamily: "'JetBrains Mono', monospace" }}>{c}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* — Right: info + download */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24, justifyContent: "center" }}>
          <div>
            <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 22, color: "#fff", margin: "0 0 12px" }}>
              Professional Resume
            </h3>
            <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.8 }}>
              My resume includes my full work history, educational background, technical skills, and all 5 professional certifications. Available in a clean black & white corporate format — ready for submission to any job portal or recruiter.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { icon: "✅", text: "Work experience at Indigen Services & Privan Sports" },
              { icon: "✅", text: "MCA & BSc Computer Science education" },
              { icon: "✅", text: "5 industry certifications (AWS, Accenture, Deloitte, Tata)" },
              { icon: "✅", text: "Full skills breakdown: Shopify, Java, Python, SQL, HTML5" },
              { icon: "✅", text: "ATS-friendly format · Clean black & white layout" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <span style={{ fontSize: 14 }}>{item.icon}</span>
                <span style={{ color: "#94a3b8", fontSize: 13, fontFamily: "'Syne', sans-serif" }}>{item.text}</span>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 8 }}>
            <a href="/Varuna_Nikam_Resume.pdf" download="Varuna_Nikam_Resume.pdf" data-hover
              style={{ padding: "14px 28px", background: "#ff6b35", color: "#fff", borderRadius: 10, textDecoration: "none", fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 14, boxShadow: "0 8px 30px #ff6b3540", transition: "all 0.25s", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 14px 40px #ff6b3560"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 30px #ff6b3540"; }}>
              <span style={{ fontSize: 16 }}>⬇</span> Download Resume (PDF)
            </a>
            <a href="https://www.linkedin.com/in/varunanikam-200255255" target="_blank" rel="noreferrer" data-hover
              style={{ padding: "14px 28px", border: "1.5px solid #1e293b", color: "#64748b", borderRadius: 10, textDecoration: "none", fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 14, transition: "all 0.25s", textAlign: "center" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#ff6b35"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#1e293b"; e.currentTarget.style.color = "#64748b"; }}>
              View LinkedIn Profile ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const handle = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const submit = () => {
    if (form.name && form.email && form.message) {
      setSent(true);
      setTimeout(() => setSent(false), 3000);
      setForm({ name: "", email: "", message: "" });
    }
  };
  const inp = { width: "100%", background: "#0f172a", border: "1.5px solid #1e293b", borderRadius: 10, padding: "13px 16px", color: "#fff", fontFamily: "'Syne', sans-serif", fontSize: 14, outline: "none", boxSizing: "border-box", transition: "border-color 0.2s", marginBottom: 14 };
  return (
    <section id="contact" style={{ padding: "100px 8vw 60px" }}>
      <SectionLabel label="06 — Contact" />
      <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: 800, color: "#fff", margin: "12px 0 14px" }}>
        Let's <span style={{ color: "#ff6b35" }}>Work Together</span>
      </h2>
      <p style={{ color: "#64748b", fontSize: 15, marginBottom: 48 }}>Open to freelance projects, full-time roles, and collaborations!</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 52, maxWidth: 880 }}>
        <div>
          <input type="text" placeholder="Your Name" value={form.name} onChange={e => handle("name", e.target.value)} style={inp}
            onFocus={e => e.target.style.borderColor = "#ff6b35"} onBlur={e => e.target.style.borderColor = "#1e293b"} />
          <input type="email" placeholder="Your Email" value={form.email} onChange={e => handle("email", e.target.value)} style={inp}
            onFocus={e => e.target.style.borderColor = "#ff6b35"} onBlur={e => e.target.style.borderColor = "#1e293b"} />
          <textarea placeholder="Your Message" value={form.message} onChange={e => handle("message", e.target.value)} rows={5}
            style={{ ...inp, resize: "none", marginBottom: 0 }}
            onFocus={e => e.target.style.borderColor = "#ff6b35"} onBlur={e => e.target.style.borderColor = "#1e293b"} />
          <button onClick={submit} data-hover
            style={{ marginTop: 14, padding: "13px 0", background: sent ? "#00d4aa" : "#ff6b35", color: "#fff", border: "none", borderRadius: 10, fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 14, cursor: "pointer", transition: "all 0.3s", width: "100%", boxShadow: `0 8px 28px ${sent ? "#00d4aa40" : "#ff6b3540"}` }}>
            {sent ? "✓ Sent!" : "Send Message →"}
          </button>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14, justifyContent: "center" }}>
          {[
            { icon: "✉️", label: "Email", val: "nikamvaruna@gmail.com", href: "mailto:nikamvaruna@gmail.com" },
            { icon: "📱", label: "Mobile", val: "+91 7768289006", href: "tel:+917768289006" },
            { icon: "💼", label: "LinkedIn", val: "linkedin.com/in/varunanikam-200255255", href: "https://www.linkedin.com/in/varunanikam-200255255" },
            { icon: "📍", label: "Location", val: "Nashik, Maharashtra, India", href: null },
          ].map(c => (
            <a key={c.label} href={c.href || "#"} data-hover
              style={{ display: "flex", alignItems: "center", gap: 16, padding: "14px 20px", background: "#0f172a", border: "1px solid #1e293b", borderRadius: 12, textDecoration: "none", transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#ff6b35"; e.currentTarget.style.transform = "translateX(5px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#1e293b"; e.currentTarget.style.transform = "translateX(0)"; }}>
              <span style={{ fontSize: 20 }}>{c.icon}</span>
              <div>
                <div style={{ color: "#334155", fontSize: 10, fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase", letterSpacing: 1 }}>{c.label}</div>
                <div style={{ color: "#e2e8f0", fontSize: 13, fontFamily: "'Syne', sans-serif", marginTop: 2, fontWeight: 600 }}>{c.val}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ label }) {
  return <p style={{ color: "#334155", fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: 3, textTransform: "uppercase", margin: 0 }}>{label}</p>;
}

function Nav({ active }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, padding: "0 6vw", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between", background: scrolled ? "#060a14f0" : "transparent", backdropFilter: scrolled ? "blur(20px)" : "none", borderBottom: scrolled ? "1px solid #1e293b" : "none", transition: "all 0.3s" }}>
      <a href="#about" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 19, color: "#fff", textDecoration: "none" }}>
        VN<span style={{ color: "#ff6b35" }}>.</span>
      </a>
      <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
        {NAV_ITEMS.map(item => (
          <a key={item} href={`#${item.toLowerCase()}`} data-hover
            style={{ color: active === item.toLowerCase() ? "#ff6b35" : "#64748b", textDecoration: "none", fontFamily: "'Syne', sans-serif", fontWeight: 600, fontSize: 13, transition: "color 0.2s" }}
            onMouseEnter={e => e.target.style.color = "#ff6b35"}
            onMouseLeave={e => e.target.style.color = active === item.toLowerCase() ? "#ff6b35" : "#64748b"}>
            {item}
          </a>
        ))}
        <a href="https://www.linkedin.com/in/varunanikam-200255255" target="_blank" rel="noreferrer" data-hover
          style={{ padding: "7px 18px", background: "#ff6b3520", border: "1.5px solid #ff6b3540", color: "#ff6b35", borderRadius: 8, textDecoration: "none", fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 12, transition: "all 0.2s" }}
          onMouseEnter={e => { e.target.style.background = "#ff6b35"; e.target.style.color = "#fff"; }}
          onMouseLeave={e => { e.target.style.background = "#ff6b3520"; e.target.style.color = "#ff6b35"; }}>
          LinkedIn ↗
        </a>
      </div>
    </nav>
  );
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about");
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); }),
      { threshold: 0.25 }
    );
    document.querySelectorAll("section[id]").forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@400;600;700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; cursor: none !important; }
        html { scroll-behavior: smooth; }
        body { background: #060a14; color: #e2e8f0; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0f172a; }
        ::-webkit-scrollbar-thumb { background: #ff6b35; border-radius: 2px; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @media (max-width: 700px) { nav > div > a:not(:last-child) { display: none; } }
      `}</style>
      <Cursor />
      <Nav active={activeSection} />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <footer style={{ borderTop: "1px solid #0f172a", padding: "24px 8vw", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <span style={{ color: "#1e293b", fontFamily: "'JetBrains Mono', monospace", fontSize: 12 }}>© 2025 Varuna Nikam · Nashik, Maharashtra</span>
        <span style={{ color: "#1e293b", fontFamily: "'JetBrains Mono', monospace", fontSize: 12 }}>Built with React ⚡</span>
      </footer>
    </>
  );
}
