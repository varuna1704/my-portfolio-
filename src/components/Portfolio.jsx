import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import CaseStudiesSection from "./CaseStudiesSection";
import TestimonialsSection from "./TestimonialsSection";
import ContactSection from "./ContactSection";

// GitHub SVG Icon
const GitHubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

/* ─── DATA ─────────────────────────────────────────────────────────────── */

const NAV_ITEMS = ["About", "Services", "Case Studies", "Projects", "Testimonials", "Skills", "Experience", "Education", "Certifications", "Resume", "Contact"];

const SKILLS = [
  { name: "Shopify Development", level: 95, cat: "E-commerce" },
  { name: "Liquid / Storefront API", level: 90, cat: "E-commerce" },
  { name: "React.js / Next.js", level: 85, cat: "Frontend" },
  { name: "JavaScript (ES6+)", level: 88, cat: "Frontend" },
  { name: "Python", level: 80, cat: "Backend" },
  { name: "Node.js / Express", level: 75, cat: "Backend" },
  { name: "SQL (MySQL/PostgreSQL)", level: 85, cat: "Backend" },
  { name: "Java / Core Java", level: 75, cat: "Backend" },
  { name: "Data Analytics", level: 85, cat: "Data" },
  { name: "Excel / Power BI", level: 82, cat: "Data" },
];

const EXPERIENCE = [
  {
    role: "Process Associate",
    company: "Indigen Services",
    location: "Pune, Maharashtra",
    period: "Nov 2025 – Present",
    icon: "⚽",
    color: "#ff6b35",
    points: [
      "Worked on structured event classification and match tagging for international basketball games.",
      "Delivered high-quality analytics datasets for sports performance evaluation.",
      "Maintained 98%+ accuracy in high-speed data annotation environments."
    ]
  },
  {
    role: "Sports Trader Trainee",
    company: "Privan Sports",
    location: "Nashik, Maharashtra",
    period: "July 2024 – March 2025",
    icon: "📈",
    color: "#7c3aed",
    points: [
      "Tagged 2.5 full matches per day using structured event classification systems.",
      "Analyzed game patterns and provided data-driven insights for sports strategy.",
      "Managed real-time data feeds for international cricket and football matches."
    ]
  }
];

const PROJECTS = [
  {
    title: "AI Powered Review Generator",
    desc: "A powerful tool that generates authentic customer reviews using AI. Supports bulk processing and customization.",
    tech: ["React", "AI", "Tailwind"],
    link: "https://aicustomerreviewgenerator.netlify.app/",
    image: "/images/projects/review-gen.png",
    color: "#ff6b35"
  },
  {
    title: "EcoFarm Management System",
    desc: "A comprehensive solution for farm management, tracking crops, resources, and sales efficiency.",
    tech: ["PHP", "MySQL", "Bootstrap"],
    link: "https://github.com/varuna1704",
    image: "/images/projects/farm-system.png",
    color: "#00d4aa"
  },
  {
    title: "Gym Management Pro",
    desc: "Modern dashboard for gym owners to manage memberships, trainers, and schedules seamlessly.",
    tech: ["React", "Firebase", "MUI"],
    link: "https://github.com/varuna1704",
    image: "/images/projects/gym-system.png",
    color: "#7c3aed"
  }
];

const EDUCATION = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "Dr. B.V. Hiray College of Management",
    location: "Nashik",
    period: "2023 – 2025",
    focus: "Application Development & Data Analytics",
    icon: "🎓",
    color: "#ff6b35"
  },
  {
    degree: "BSc Computer Science",
    school: "Loknete Vyankatrao Hiray College",
    location: "Nashik",
    period: "2020 – 2023",
    focus: "Software Engineering & Database Management",
    icon: "🏫",
    color: "#7c3aed"
  }
];

const CERTIFICATIONS = [
  { title: "AWS re/Start Graduate", issuer: "Amazon Web Services", icon: "☁️", color: "#f59e0b" },
  { title: "AWS Solutions Architect Simulation", issuer: "Forage / AWS", icon: "🏗", color: "#ff6b35" },
  { title: "Introduction to Tech Apprenticeship", issuer: "Accenture UK", icon: "💼", color: "#00d4aa" },
  { title: "Tech Job Simulation", issuer: "Deloitte Australia", icon: "🔷", color: "#7c3aed" },
  { title: "GenAI Powered Data Analytics", issuer: "Tata", icon: "🤖", color: "#ec4899" }
];

const RESUME_DETAILS = [
  { icon: "📧", label: "Email", value: "nikamvaruna@gmail.com" },
  { icon: "📞", label: "Phone", value: "+91 7768289006" },
  { icon: "📍", label: "Location", value: "Nashik, MH, India" },
  { icon: "🌐", label: "Languages", value: "English, Hindi, Marathi" }
];

const CAT_COLORS = {
  "E-commerce": "#ff6b35",
  "Frontend": "#00d4aa",
  "Backend": "#7c3aed",
  "Data": "#f59e0b"
};

/* ─── HOOKS ─────────────────────────────────────────────────────────────── */

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

/* ─── SMALL COMPONENTS ─────────────────────────────────────────────────── */

function SectionLabel({ label }) {
  return (
    <p style={{
      color: "#334155",
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 11,
      letterSpacing: 3,
      textTransform: "uppercase",
      margin: 0,
    }}>
      {label}
    </p>
  );
}

function AnimatedBar({ level, color, visible }) {
  return (
    <div style={{ background: "#1a1a2e", borderRadius: 99, height: 7, overflow: "hidden" }}>
      <div style={{
        height: "100%",
        borderRadius: 99,
        background: `linear-gradient(90deg, ${color}, ${color}88)`,
        width: visible ? `${level}%` : "0%",
        transition: "width 1.4s cubic-bezier(0.4,0,0.2,1)",
        boxShadow: `0 0 12px ${color}55`,
      }} />
    </div>
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
        if (ci - 1 === 0) {
          setDel(false);
          setTi(t => (t + 1) % titles.length);
          setCi(0);
        } else setCi(c => c - 1);
      }
    }, del ? 50 : 95);
    return () => clearTimeout(timer);
  }, [ci, del, ti]);

  return (
    <div style={{ height: 50, display: "flex", alignItems: "center", gap: 6, marginTop: 18 }}>
      <span style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: "clamp(1.1rem,2.8vw,1.7rem)",
        color: "#ff6b35",
        fontWeight: 700,
      }}>
        {display}
      </span>
      <span style={{
        width: 3, height: "1.3em", background: "#ff6b35",
        borderRadius: 2, animation: "blink 1s infinite",
      }} />
    </div>
  );
}

/* ─── NAV ────────────────────────────────────────────────────────────────── */

function Nav({ active }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      padding: "0 6vw", height: 64,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      background: scrolled ? "#060a14f0" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid #1e293b" : "none",
      transition: "all 0.3s",
    }}>
      <a href="#about" style={{
        fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 22,
        color: "#fff", textDecoration: "none", letterSpacing: -1,
      }}>
        VN<span style={{ color: "#ff6b35" }}>.</span>
      </a>

      <div className="nav-links" style={{ display: "flex", gap: 24, alignItems: "center" }}>
        {NAV_ITEMS.map(item => {
          if (item === "Projects") {
            return (
              <Link
                key={item}
                to="/projects"
                data-hover
                style={{
                  color: active === item.toLowerCase() ? "#ff6b35" : "#64748b",
                  textDecoration: "none",
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 600, fontSize: 13,
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => e.target.style.color = "#ff6b35"}
                onMouseLeave={e => e.target.style.color = active === item.toLowerCase() ? "#ff6b35" : "#64748b"}
              >
                {item}
              </Link>
            );
          }
          return (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              data-hover
              style={{
                color: active === item.toLowerCase().replace(/\s+/g, '-') ? "#ff6b35" : "#64748b",
                textDecoration: "none",
                fontFamily: "'Syne', sans-serif",
                fontWeight: 600, fontSize: 13,
                transition: "color 0.2s",
              }}
              onMouseEnter={e => e.target.style.color = "#ff6b35"}
              onMouseLeave={e => e.target.style.color = active === item.toLowerCase().replace(/\s+/g, '-') ? "#ff6b35" : "#64748b"}
            >
              {item}
            </a>
          );
        })}
        <a
          href="https://github.com/varuna1704"
          target="_blank" rel="noreferrer" data-hover
          style={{
            padding: "7px 18px",
            background: "#ffffff10",
            border: "1.5px solid #ffffff20",
            color: "#94a3b8",
            borderRadius: 8,
            textDecoration: "none",
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700, fontSize: 12,
            transition: "all 0.2s",
            display: "flex", alignItems: "center", gap: 6,
          }}
          onMouseEnter={e => { e.currentTarget.style.background = "#24292e"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "#fff"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "#ffffff10"; e.currentTarget.style.color = "#94a3b8"; e.currentTarget.style.borderColor = "#ffffff20"; }}
        >
          <GitHubIcon /> GitHub ↗
        </a>
      </div>
    </nav>
  );
}

/* ─── HERO ────────────────────────────────────────────────────────────── */

function Hero() {
  return (
    <section id="home" style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      padding: "80px 8vw 40px", position: "relative", overflow: "hidden",
    }}>
      {/* Ambient blobs */}
      <div style={{
        position: "absolute", top: "8%", right: "3%",
        width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle, #ff6b3512 0%, transparent 70%)",
        pointerEvents: "none", animation: "float 8s ease-in-out infinite",
      }} />
      <div style={{
        position: "absolute", bottom: "5%", left: "6%",
        width: 360, height: 360, borderRadius: "50%",
        background: "radial-gradient(circle, #7c3aed12 0%, transparent 70%)",
        pointerEvents: "none", animation: "float 10s ease-in-out infinite reverse",
      }} />

      {/* Main Container */}
      <div
        className="hero-grid"
        style={{
          zIndex: 1, display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 60, alignItems: "center",
          width: "100%", maxWidth: 1200,
        }}
      >
        {/* Left: Text */}
        <div style={{ animation: "fade-in-up 0.8s ease forwards" }}>
          <p style={{
            color: "#ff6b35",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12, letterSpacing: 4,
            textTransform: "uppercase",
            marginBottom: 14, opacity: 0.8,
          }}>
            &gt; Based in Nashik, Maharashtra —
          </p>
          <h1 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(3rem,8vw,6rem)",
            fontWeight: 800, lineHeight: 1.04,
            margin: 0, color: "#fff",
          }}>
            Varuna<br />
            <span style={{ WebkitTextStroke: "2px #ff6b35", color: "transparent" }}>Nikam</span>
          </h1>
          <TypedText />
          <p style={{
            color: "#94a3b8", fontSize: 16, lineHeight: 1.9,
            maxWidth: 540, marginTop: 22,
          }}>
            Shopify Developer with hands-on experience building and optimizing e-commerce stores.
            MCA 2025 graduate combining technical development with data analytics and a passion
            for scalable digital products.
          </p>

          <div style={{ display: "flex", gap: 14, marginTop: 36, flexWrap: "wrap" }}>
            <a
              href="#contact" data-hover
              style={{
                padding: "13px 32px", background: "#ff6b35", color: "#fff",
                borderRadius: 10, textDecoration: "none",
                fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 14,
                boxShadow: "0 8px 30px #ff6b3540", transition: "all 0.25s",
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 14px 40px #ff6b3560"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 30px #ff6b3540"; }}
            >
              Start Your Project
            </a>
            <a
              href="#resume" data-hover
              style={{
                padding: "13px 32px", border: "1.5px solid #334155",
                color: "#94a3b8", borderRadius: 10, textDecoration: "none",
                fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 14,
                transition: "all 0.25s", display: "flex", alignItems: "center", gap: 8,
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#ff6b35"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#334155"; e.currentTarget.style.color = "#94a3b8"; }}
            >
              📄 View Resume
            </a>
          </div>

          <div style={{
            display: "flex", gap: 36, marginTop: 54, paddingTop: 36,
            borderTop: "1px solid #1e293b", flexWrap: "wrap",
          }}>
            {[
              { label: "Current Role", val: "Shopify Dev" },
              { label: "Experience", val: "1+ yr" },
              { label: "Certifications", val: "5" },
            ].map(s => (
              <div key={s.label}>
                <div style={{
                  fontFamily: "'Syne', sans-serif", fontSize: 28,
                  fontWeight: 800, color: "#fff",
                }}>{s.val}</div>
                <div style={{
                  color: "#475569", fontSize: 12, marginTop: 4,
                  fontFamily: "'JetBrains Mono', monospace",
                }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Profile Image */}
        <div
          className="hero-image-col"
          style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}
        >
          {/* Glow rings */}
          <div style={{
            position: "absolute", width: 460, height: 460, borderRadius: "50%",
            background: "radial-gradient(circle, #ff6b3510 0%, transparent 70%)",
            filter: "blur(40px)",
          }} />
          
          {/* Profile image container */}
          <div
            style={{
              position: "relative",
              width: "100%", maxWidth: 380,
              aspectRatio: "1/1.3",
              borderRadius: 24, overflow: "hidden",
              border: "1.5px solid #1e293b",
              boxShadow: "0 25px 50px rgba(255,107,53,0.18), 0 0 1px rgba(255,107,53,0.1)",
              transition: "all 0.4s cubic-bezier(0.34,1.56,0.64,1)",
              zIndex: 2,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-8px) scale(1.01)";
              e.currentTarget.style.boxShadow = "0 40px 70px rgba(255,107,53,0.28)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = "0 25px 50px rgba(255,107,53,0.18), 0 0 1px rgba(255,107,53,0.1)";
            }}
          >
            <img
              src="/images/headshots/varuna-headshot-professional-dark.jpg"
              alt="Varuna Nikam"
              style={{
                width: "100%", height: "100%",
                objectFit: "cover", objectPosition: "center",
                display: "block",
              }}
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

          {/* Badge */}
          <div style={{
            position: "absolute", bottom: 20, left: "10%",
            background: "#0f172aee", border: "1px solid #ff6b3540",
            borderRadius: 12, padding: "10px 16px",
            backdropFilter: "blur(12px)", zIndex: 3,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#00d4aa", animation: "blink 2s infinite" }} />
              <span style={{ color: "#94a3b8", fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>
                Available for hire
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── SKILLS ─────────────────────────────────────────────────────────── */

function Skills() {
  const [ref, visible] = useInView();
  const [active, setActive] = useState("All");
  const cats = ["All", ...new Set(SKILLS.map(s => s.cat))];
  const filtered = active === "All" ? SKILLS : SKILLS.filter(s => s.cat === active);

  return (
    <section id="skills" ref={ref} style={{ padding: "100px 8vw" }}>
      <SectionLabel label="02 — Skills" />
      <h2 style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: "clamp(2rem,5vw,3.2rem)",
        fontWeight: 800, color: "#fff",
        margin: "12px 0 36px",
      }}>
        My <span style={{ color: "#ff6b35" }}>Toolkit</span>
      </h2>

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 36 }}>
        {cats.map(c => (
          <button
            key={c} data-hover
            onClick={() => setActive(c)}
            style={{
              padding: "7px 20px", borderRadius: 99,
              border: `1.5px solid ${active === c ? "#ff6b35" : "#1e293b"}`,
              background: active === c ? "#ff6b3520" : "transparent",
              color: active === c ? "#ff6b35" : "#64748b",
              cursor: "pointer",
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700, fontSize: 12,
              transition: "all 0.2s",
            }}
          >
            {c}
          </button>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px,1fr))", gap: 18 }}>
        {filtered.map(s => (
          <div
            key={s.name}
            style={{
              background: "#0f172a", border: "1px solid #1e293b",
              borderRadius: 14, padding: "22px 24px", transition: "all 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = CAT_COLORS[s.cat]; e.currentTarget.style.transform = "translateY(-3px)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "#1e293b"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
              <span style={{ color: "#fff", fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 14 }}>{s.name}</span>
              <span style={{ color: CAT_COLORS[s.cat], fontFamily: "'JetBrains Mono', monospace", fontSize: 12, fontWeight: 700 }}>{s.level}%</span>
            </div>
            <AnimatedBar level={s.level} color={CAT_COLORS[s.cat]} visible={visible} />
            <span style={{
              color: "#334155", fontSize: 10, marginTop: 10, display: "block",
              fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase", letterSpacing: 1,
            }}>{s.cat}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── EXPERIENCE ─────────────────────────────────────────────────────── */

function Experience() {
  return (
    <section id="experience" style={{ padding: "100px 8vw" }}>
      <SectionLabel label="03 — Experience" />
      <h2 style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: "clamp(2rem,5vw,3.2rem)",
        fontWeight: 800, color: "#fff", margin: "12px 0 52px",
      }}>
        Work <span style={{ color: "#ff6b35" }}>History</span>
      </h2>
      <div style={{ maxWidth: 800, position: "relative" }}>
        <div style={{
          position: "absolute", left: 7, top: 4, bottom: 0,
          width: 2,
          background: "linear-gradient(to bottom, #ff6b35, #7c3aed44)",
          borderRadius: 2,
        }} />
        {EXPERIENCE.map((e, i) => (
          <div key={i} style={{ paddingLeft: 46, marginBottom: 52, position: "relative" }}>
            <div style={{
              position: "absolute", left: 0, top: 5,
              width: 16, height: 16, borderRadius: "50%",
              background: e.color, border: "3px solid #060a14",
              boxShadow: `0 0 0 4px ${e.color}30`,
            }} />
            <div
              style={{
                background: "#0f172a", border: "1px solid #1e293b",
                borderRadius: 16, padding: "28px 30px", transition: "border-color 0.2s",
              }}
              onMouseEnter={el => el.currentTarget.style.borderColor = e.color}
              onMouseLeave={el => el.currentTarget.style.borderColor = "#1e293b"}
            >
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 10, marginBottom: 6 }}>
                <span style={{ fontSize: 22 }}>{e.icon}</span>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 18, fontWeight: 800, color: "#fff", margin: 0 }}>{e.role}</h3>
                <span style={{ color: e.color, fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 14 }}>@ {e.company}</span>
              </div>
              <div style={{ display: "flex", gap: 16, marginBottom: 18, flexWrap: "wrap" }}>
                <span style={{ color: "#334155", fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>📅 {e.period}</span>
                <span style={{ color: "#334155", fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>📍 {e.location}</span>
              </div>
              <ul style={{ margin: 0, padding: "0 0 0 18px" }}>
                {e.points.map((pt, j) => (
                  <li key={j} style={{ color: "#94a3b8", fontSize: 14, lineHeight: 1.85, marginBottom: 5 }}>{pt}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── PROJECTS ───────────────────────────────────────────────────────── */

function Projects() {
  const [ref, visible] = useInView();
  return (
    <section id="projects" ref={ref} style={{ padding: "100px 8vw" }}>
      <SectionLabel label="04 — Projects" />
      <h2 style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: "clamp(2rem,5vw,3.2rem)",
        fontWeight: 800, color: "#fff", margin: "12px 0 48px",
      }}>
        Selected <span style={{ color: "#ff6b35" }}>Works</span>
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(340px,1fr))", gap: 32 }}>
        {PROJECTS.map((p, i) => (
          <div
            key={i}
            style={{
              background: "#0f172a", border: "1px solid #1e293b",
              borderRadius: 24, overflow: "hidden",
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(40px)",
              transitionDelay: `${i * 150}ms`,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = p.color;
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.boxShadow = `0 30px 60px ${p.color}15`;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "#1e293b";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div style={{ height: 210, overflow: "hidden", position: "relative", background: "#111827" }}>
              <img 
                src={p.image} 
                alt={p.title} 
                style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.8 }}
                onError={e => {
                   e.target.src = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop";
                }}
              />
              <div style={{ position: "absolute", top: 12, right: 12 }}>
                <a 
                  href={p.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  style={{ 
                    width: 38, height: 38, borderRadius: "50%", 
                    background: "#ff6b35", display: "flex", 
                    alignItems: "center", justifyContent: "center", 
                    color: "#fff", textDecoration: "none",
                    boxShadow: "0 4px 12px rgba(255,107,53,0.3)"
                  }}
                >↗</a>
              </div>
            </div>
            <div style={{ padding: 28 }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
                {p.tech.map(t => (
                  <span key={t} style={{ fontSize: 10, fontFamily: "'JetBrains Mono', monospace", color: p.color, background: `${p.color}15`, padding: "4px 10px", borderRadius: 99, fontWeight: 700 }}>{t}</span>
                ))}
              </div>
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 21, fontWeight: 800, color: "#fff", margin: "0 0 12px" }}>{p.title}</h3>
              <p style={{ color: "#94a3b8", fontSize: 14, lineHeight: 1.6, marginBottom: 24, height: 68, overflow: "hidden" }}>{p.desc}</p>
              <Link 
                to="/projects"
                style={{ 
                  color: p.color, fontFamily: "'Syne', sans-serif", 
                  fontWeight: 700, fontSize: 13, textDecoration: "none", 
                  display: "flex", alignItems: "center", gap: 6 
                }}
              >
                View Details ↗
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 60, display: "flex", justifyContent: "center" }}>
        <Link 
          to="/projects"
          data-hover
          style={{
            padding: "14px 40px",
            background: "transparent",
            border: "2px solid #ff6b35",
            color: "#ff6b35",
            borderRadius: 12,
            textDecoration: "none",
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: 15,
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            display: "flex",
            alignItems: "center",
            gap: 10
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = "#ff6b35";
            e.currentTarget.style.color = "#fff";
            e.currentTarget.style.boxShadow = "0 10px 30px #ff6b3540";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#ff6b35";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          View All Projects <span style={{ fontSize: 18 }}>→</span>
        </Link>
      </div>
    </section>
  );
}

/* ─── EDUCATION ──────────────────────────────────────────────────────── */

function Education() {
  return (
    <section id="education" style={{ padding: "100px 8vw" }}>
      <SectionLabel label="05 — Education" />
      <h2 style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: "clamp(2rem,5vw,3.2rem)",
        fontWeight: 800, color: "#fff", margin: "12px 0 48px",
      }}>
        Academic <span style={{ color: "#ff6b35" }}>Journey</span>
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))", gap: 24 }}>
        {EDUCATION.map((e, i) => (
          <div
            key={i}
            style={{
              background: "#0f172a", border: "1px solid #1e293b",
              borderRadius: 20, padding: "32px",
              transition: "all 0.3s", position: "relative", overflow: "hidden",
            }}
            onMouseEnter={el => { el.currentTarget.style.borderColor = e.color; el.currentTarget.style.transform = "translateY(-5px)"; }}
            onMouseLeave={el => { el.currentTarget.style.borderColor = "#1e293b"; el.currentTarget.style.transform = "translateY(0)"; }}
          >
            <div style={{
              position: "absolute", top: -30, right: -30,
              width: 120, height: 120, borderRadius: "50%",
              background: `${e.color}12`, pointerEvents: "none",
            }} />
            <span style={{ fontSize: 38, display: "block", marginBottom: 18 }}>{e.icon}</span>
            <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, color: "#fff", margin: "0 0 8px", lineHeight: 1.4 }}>{e.degree}</h3>
            <p style={{ color: e.color, fontSize: 13, fontFamily: "'Syne', sans-serif", fontWeight: 700, margin: "0 0 8px" }}>{e.school}</p>
            <p style={{ color: "#475569", fontSize: 12, fontFamily: "'JetBrains Mono', monospace", margin: "0 0 6px" }}>📍 {e.location}</p>
            <p style={{ color: "#334155", fontSize: 12, fontFamily: "'JetBrains Mono', monospace", margin: "0 0 16px" }}>📅 {e.period}</p>
            <span style={{
              padding: "5px 14px", borderRadius: 99,
              background: `${e.color}18`, color: e.color,
              fontSize: 11, fontFamily: "'JetBrains Mono', monospace",
            }}>{e.focus}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── CERTIFICATIONS ─────────────────────────────────────────────────── */

function Certifications() {
  const [ref, visible] = useInView();
  return (
    <section id="certifications" ref={ref} style={{ padding: "100px 8vw" }}>
      <SectionLabel label="06 — Certifications" />
      <h2 style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: "clamp(2rem,5vw,3.2rem)",
        fontWeight: 800, color: "#fff", margin: "12px 0 48px",
      }}>
        Professional <span style={{ color: "#ff6b35" }}>Credentials</span>
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: 18 }}>
        {CERTIFICATIONS.map((c, i) => (
          <div
            key={i} data-hover
            style={{
              background: "#0f172a", border: "1px solid #1e293b",
              borderRadius: 16, padding: "24px 26px",
              display: "flex", gap: 16, alignItems: "flex-start",
              transition: "all 0.25s",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transitionDelay: `${i * 80}ms`,
              cursor: "default",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = c.color; e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = `0 14px 30px ${c.color}18`; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "#1e293b"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
          >
            <div style={{
              fontSize: 26, flexShrink: 0, width: 50, height: 50,
              background: `${c.color}18`, borderRadius: 12,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>{c.icon}</div>
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

/* ─── RESUME ─────────────────────────────────────────────────────────── */

function Resume() {
  return (
    <section id="resume" style={{ padding: "100px 8vw" }}>
      <SectionLabel label="07 — Resume" />
      <h2 style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: "clamp(2rem,5vw,3.2rem)",
        fontWeight: 800, color: "#fff", margin: "12px 0 14px",
      }}>
        My <span style={{ color: "#ff6b35" }}>Resume</span>
      </h2>
      <p style={{ color: "#64748b", fontSize: 15, marginBottom: 48 }}>
        A snapshot of my professional background — download the full PDF below.
      </p>

      <div
        className="resume-grid"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, maxWidth: 960, alignItems: "start" }}
      >
        <div
          style={{ background: "#0f172a", border: "1px solid #1e293b", borderRadius: 20, overflow: "hidden", transition: "box-shadow 0.3s" }}
          onMouseEnter={e => e.currentTarget.style.boxShadow = "0 24px 60px #ff6b3520"}
          onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}
        >
          <div style={{ background: "#111827", padding: "16px 24px", borderBottom: "1px solid #1e293b", display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff6b35" }} />
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#f59e0b" }} />
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#00d4aa" }} />
            <span style={{ color: "#334155", fontFamily: "'JetBrains Mono', monospace", fontSize: 11, marginLeft: 8 }}>
              Varuna_Nikam_Resume.pdf
            </span>
          </div>
          <div style={{ padding: "28px 28px 24px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20, paddingBottom: 16, borderBottom: "1px solid #1e293b" }}>
              <div style={{
                width: 44, height: 44, borderRadius: "50%",
                background: "#ff6b3520", border: "2px solid #ff6b3540",
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20,
              }}>👩‍💻</div>
              <div>
                <div style={{ color: "#fff", fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 16 }}>Varuna Nikam</div>
                <div style={{ color: "#ff6b35", fontFamily: "'JetBrains Mono', monospace", fontSize: 10, marginTop: 2 }}>
                  SHOPIFY DEVELOPER · DATA ANALYST · MCA 2025
                </div>
              </div>
            </div>
            {RESUME_DETAILS.map((d, i) => (
              <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 12 }}>
                <span style={{ fontSize: 14, flexShrink: 0, marginTop: 1 }}>{d.icon}</span>
                <div>
                  <div style={{ color: "#334155", fontFamily: "'JetBrains Mono', monospace", fontSize: 9, textTransform: "uppercase", letterSpacing: 1 }}>{d.label}</div>
                  <div style={{ color: "#94a3b8", fontFamily: "'Syne', sans-serif", fontSize: 12, fontWeight: 600, marginTop: 2 }}>{d.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24, justifyContent: "center" }}>
          <div>
            <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 22, color: "#fff", margin: "0 0 12px" }}>
              Professional Resume
            </h3>
            <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.8 }}>
              My resume includes my full work history, educational background, technical skills,
              and all 5 professional certifications — ready for any recruiter or job portal.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 8 }}>
            <a
              href="/Varuna_Nikam_Resume.pdf"
              download="Varuna_Nikam_Resume.pdf"
              data-hover
              style={{
                padding: "14px 28px", background: "#ff6b35", color: "#fff",
                borderRadius: 10, textDecoration: "none",
                fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 14,
                boxShadow: "0 8px 30px #ff6b3540", transition: "all 0.25s",
                textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 14px 40px #ff6b3560"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 30px #ff6b3540"; }}
            >
              <span style={{ fontSize: 16 }}>⬇</span> Download Resume (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── CONTACT ────────────────────────────────────────────────────────── */

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

  const inp = {
    width: "100%", background: "#0f172a", border: "1.5px solid #1e293b",
    borderRadius: 10, padding: "13px 16px", color: "#fff",
    fontFamily: "'Syne', sans-serif", fontSize: 14,
    outline: "none", boxSizing: "border-box",
    transition: "border-color 0.2s", marginBottom: 14,
  };

  return (
    <section id="contact" style={{ padding: "100px 8vw 60px" }}>
      <SectionLabel label="08 — Contact" />
      <h2 style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: "clamp(2rem,5vw,3.2rem)",
        fontWeight: 800, color: "#fff", margin: "12px 0 14px",
      }}>
        Let&apos;s <span style={{ color: "#ff6b35" }}>Work Together</span>
      </h2>
      <p style={{ color: "#64748b", fontSize: 15, marginBottom: 48 }}>
        Open to freelance projects, full-time roles, and collaborations!
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 52, maxWidth: 880 }}>
        <div>
          <input
            type="text" placeholder="Your Name" value={form.name}
            onChange={e => handle("name", e.target.value)} style={inp}
            onFocus={e => e.target.style.borderColor = "#ff6b35"}
            onBlur={e => e.target.style.borderColor = "#1e293b"}
          />
          <input
            type="email" placeholder="Your Email" value={form.email}
            onChange={e => handle("email", e.target.value)} style={inp}
            onFocus={e => e.target.style.borderColor = "#ff6b35"}
            onBlur={e => e.target.style.borderColor = "#1e293b"}
          />
          <textarea
            placeholder="Your Message" value={form.message}
            onChange={e => handle("message", e.target.value)} rows={5}
            style={{ ...inp, resize: "none", marginBottom: 0 }}
            onFocus={e => e.target.style.borderColor = "#ff6b35"}
            onBlur={e => e.target.style.borderColor = "#1e293b"}
          />
          <button
            onClick={submit} data-hover
            style={{
              marginTop: 14, padding: "13px 0",
              background: sent ? "#00d4aa" : "#ff6b35",
              color: "#fff", border: "none", borderRadius: 10,
              fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 14,
              cursor: "pointer", transition: "all 0.3s", width: "100%",
              boxShadow: `0 8px 28px ${sent ? "#00d4aa40" : "#ff6b3540"}`,
            }}
          >
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
            <a
              key={c.label} href={c.href || "#"} data-hover
              target={c.href && c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href && c.href.startsWith("http") ? "noreferrer" : undefined}
              style={{
                display: "flex", alignItems: "center", gap: 16,
                padding: "14px 20px", background: "#0f172a",
                border: "1px solid #1e293b", borderRadius: 12,
                textDecoration: "none", transition: "all 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#ff6b35"; e.currentTarget.style.transform = "translateX(5px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#1e293b"; e.currentTarget.style.transform = "translateX(0)"; }}
            >
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

/* ─── ROOT ────────────────────────────────────────────────────────────── */

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); }),
      { threshold: 0.25 }
    );
    document.querySelectorAll("section[id]").forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <Nav active={activeSection} />
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <CaseStudiesSection />
        <Projects />
        <TestimonialsSection />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
        <Resume />
        <ContactSection />
      </main>
      <footer style={{
        borderTop: "1px solid #0f172a",
        padding: "24px 8vw",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        flexWrap: "wrap", gap: 12,
      }}>
        <span style={{ color: "#1e293b", fontFamily: "'JetBrains Mono', monospace", fontSize: 12 }}>
          © 2025 Varuna Nikam · Nashik, Maharashtra
        </span>
        <span style={{ color: "#1e293b", fontFamily: "'JetBrains Mono', monospace", fontSize: 12 }}>
          Built with React ⚡
        </span>
      </footer>
    </>
  );
}
