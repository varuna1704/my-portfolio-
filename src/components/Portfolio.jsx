import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  IconExploreWork,
  IconResume,
  IconLiveWebsite,
  IconSourceCode,
  IconCaseStudy,
  IconContact,
  IconMenu,
  IconClose,
  IconGitHub,
  IconLinkedIn,
  IconArrowRight,
  IconArrowUpRight,
  IconCheck,
  IconSparkles
} from './Icons';
import {
  EditorialAction,
  ClippedButton,
  SplitArrowButton,
  UtilityButton,
  OffsetShadowButton
} from './Buttons';
import CaseStudyModal from './CaseStudyModal';
import { FEATURED_WORK } from '../data/caseStudies';
import { submitFormToFormspree } from '../services/emailService';

/* ─── DATA CONSTANTS ─────────────────────────────────────────────────── */
const RESUME_URL = "https://drive.google.com/file/d/1_S__H96JjAN67uPp7c1F7o6wYR00hOUS/view?usp=drive_link";
const GITHUB_URL = "https://github.com/varuna1704";
const LINKEDIN_URL = "https://www.linkedin.com/in/varunanikam-200255255/";
const EMAIL_ADDRESS = "nikamvaruna@gmail.com";

const CAPABILITIES = [
  {
    title: "Shopify Theme Customization",
    desc: "Customizing Dawn and OS 2.0 themes with clean Liquid architectures, reducing reliance on slow third-party apps.",
    tags: ["Liquid", "Dawn Theme", "Theme App Extensions", "JSON Templates"]
  },
  {
    title: "Liquid Sections & Snippets",
    desc: "Modular, reusable Liquid sections and snippet components tailored for merchant autonomy in the theme customizer.",
    tags: ["Sections", "Snippets", "Liquid Schema", "Shopify Objects"]
  },
  {
    title: "Responsive Frontend UI",
    desc: "Accessible, fast-loading web interfaces built with React, TypeScript, and semantic modern CSS.",
    tags: ["React", "TypeScript", "CSS Grid", "WCAG A11y"]
  },
  {
    title: "Store Operations & Integrations",
    desc: "Review widget synchronization, catalog and collection tagging, drawer cart tuning, and checkout readiness.",
    tags: ["Catalog Architecture", "Review Widgets", "Drawer Cart", "Store Ops"]
  },
  {
    title: "Selected AI Applications",
    desc: "Prompt-engineered developer tools and workflow assistants for testing e-commerce layout variations.",
    tags: ["Prompt Workflows", "JavaScript", "Evaluation UI"]
  }
];

const WORK_PROCESS = [
  {
    step: "01",
    title: "Store & UI Audit",
    desc: "Review existing theme structure, asset weight, app script overhead, and target responsive layouts."
  },
  {
    step: "02",
    title: "Liquid Architecture",
    desc: "Build modular sections with clean schema settings, semantic markup, and native CSS styling."
  },
  {
    step: "03",
    title: "Cross-Device Testing",
    desc: "Rigorous QA across mobile viewports, touch interactions, checkout pathways, and loading speeds."
  },
  {
    step: "04",
    title: "Merchant Handover",
    desc: "Configure intuitive customizer controls and provide clear documentation so clients manage drops effortlessly."
  }
];

const EXPERIENCE_HISTORY = [
  {
    role: "Shopify Developer",
    company: "Indigen Services & AI SaaS Development",
    location: "Nashik, MH",
    period: "Nov 2025 – May 2026",
    summary: "Led theme customization, custom section development, and store maintenance across multiple live e-commerce brands.",
    contributions: [
      {
        type: "Store Maintenance",
        detail: "Maintained 4 live commercial Shopify stores: Mavena (Women's Fashion), MidFox (Pet Products), Pawfully (Pet Products), and Retromedy (Lifestyle Products)."
      },
      {
        type: "Full Store Build",
        detail: "Built a complete Shopify storefront for an artisan coffee house client from scratch on Dawn, including custom roast guides, origin maps, and drawer cart."
      },
      {
        type: "Liquid Engineering",
        detail: "Replaced heavy third-party promotional apps with lightweight native Liquid snippets for announcement bars and synchronized review widgets."
      }
    ],
    stores: [
      { name: "Mavena", niche: "Women's Fashion", url: "https://mavenaco.com/" },
      { name: "MidFox", niche: "Pet Products", url: "https://midfox.com/" },
      { name: "Pawfully", niche: "Pet Supplies" },
      { name: "Retromedy", niche: "Lifestyle Goods" }
    ]
  },
  {
    role: "Data Analyst",
    company: "Privan Sports",
    location: "Nashik, MH",
    period: "Jul 2024 – Mar 2025",
    summary: "Sports data annotation, video analysis, and dataset preparation for algorithmic performance models.",
    contributions: [
      {
        type: "VidSwap Project",
        detail: "Basketball match annotation, possession tracking, player positioning classification, and event logging."
      },
      {
        type: "SQ Project",
        detail: "Frame-by-frame event tagging and structured dataset verification for high-precision sports analytics."
      }
    ]
  }
];

const EDUCATION_HISTORY = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Dr. B.V. Hiray College of Management",
    location: "Nashik, Maharashtra",
    period: "2023 – 2025",
    focus: "Application Development, Web Architectures & Database Systems"
  },
  {
    degree: "Bachelor of Science in Computer Science (BSc CS)",
    institution: "Loknete Vyankatrao Hiray College",
    location: "Nashik, Maharashtra",
    period: "2020 – 2023",
    focus: "Software Engineering, Algorithms & Database Management"
  }
];

const CREDENTIALS = {
  completed: [
    {
      title: "AWS re/Start Graduate",
      issuer: "Amazon Web Services",
      type: "Graduate Program"
    }
  ],
  simulations: [
    {
      title: "AWS Solutions Architecture Simulation",
      issuer: "Amazon Web Services / Forage",
      type: "Job Simulation"
    },
    {
      title: "Deloitte Australia Technology Simulation",
      issuer: "Deloitte Australia / Forage",
      type: "Job Simulation"
    },
    {
      title: "Introduction to Tech Apprenticeship",
      issuer: "Accenture UK / Forage",
      type: "Job Simulation"
    },
    {
      title: "GenAI Powered Data Analytics",
      issuer: "Tata / Forage",
      type: "Job Simulation"
    }
  ],
  inProgress: [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      status: "In Progress"
    },
    {
      title: "Shopify Developer Certification",
      issuer: "Shopify",
      status: "Planned"
    }
  ]
};

/* ─── ROOT COMPONENT ──────────────────────────────────────────────────── */
export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);

  // Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'Hiring for a Role',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({ loading: false, success: false, error: null });

  // Close mobile nav on escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({ loading: false, success: false, error: "Please fill in all required fields." });
      return;
    }

    setFormStatus({ loading: true, success: false, error: null });

    try {
      await submitFormToFormspree(formData);
      setFormStatus({ loading: false, success: true, error: null });
      setFormData({ name: '', email: '', inquiryType: 'Hiring for a Role', message: '' });
    } catch (err) {
      console.error("Form submission error:", err);
      setFormStatus({
        loading: false,
        success: false,
        error: "Message delivery failed. Please email me directly at " + EMAIL_ADDRESS
      });
    }
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', color: 'var(--text-primary)' }}>
      {/* Skip to Content for Screen Readers & Keyboard Users */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* ─── HEADER ────────────────────────────────────────────────────── */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          backgroundColor: 'rgba(11, 13, 16, 0.94)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid var(--border-default)',
          width: '100%'
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '72px'
          }}
        >
          {/* Distinctive VN Monogram returning to top */}
          <a
            href="#home"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
              color: 'var(--text-primary)'
            }}
            aria-label="Varuna Nikam - Return to top"
          >
            <div
              style={{
                width: '38px',
                height: '38px',
                backgroundColor: 'var(--bg-card)',
                border: '1.5px solid var(--border-default)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-mono)',
                fontWeight: '700',
                fontSize: '0.9375rem',
                letterSpacing: '-0.02em',
                clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%)',
                color: 'var(--text-primary)'
              }}
            >
              <span style={{ color: 'var(--accent-orange)' }}>V</span>N
            </div>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: '600',
                fontSize: '0.9375rem',
                letterSpacing: '-0.01em'
              }}
            >
              Varuna Nikam
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="desktop-nav"
            style={{ display: 'flex', alignItems: 'center', gap: '32px' }}
          >
            <a
              href="#work"
              style={{
                fontSize: '0.9375rem',
                color: 'var(--text-secondary)',
                fontWeight: '500',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              Work
            </a>
            <a
              href="#about"
              style={{
                fontSize: '0.9375rem',
                color: 'var(--text-secondary)',
                fontWeight: '500',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              About
            </a>
            <a
              href="#experience"
              style={{
                fontSize: '0.9375rem',
                color: 'var(--text-secondary)',
                fontWeight: '500',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              Experience
            </a>
            <a
              href="#contact"
              style={{
                fontSize: '0.9375rem',
                color: 'var(--text-secondary)',
                fontWeight: '500',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              Contact
            </a>

            {/* Compact Resume Action */}
            <ClippedButton
              label="View Resume"
              href={RESUME_URL}
            />
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-toggle"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            style={{
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              width: '42px',
              height: '42px',
              border: '1px solid var(--border-default)',
              backgroundColor: 'var(--bg-card)',
              color: 'var(--text-primary)',
              borderRadius: '2px',
              cursor: 'pointer'
            }}
          >
            {mobileMenuOpen ? <IconClose size={20} /> : <IconMenu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderBottom: '1px solid var(--border-default)',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}
          >
            <a
              href="#work"
              onClick={() => setMobileMenuOpen(false)}
              style={{ fontSize: '1.1rem', color: 'var(--text-primary)', fontWeight: '600' }}
            >
              Work
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              style={{ fontSize: '1.1rem', color: 'var(--text-primary)', fontWeight: '600' }}
            >
              About
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              style={{ fontSize: '1.1rem', color: 'var(--text-primary)', fontWeight: '600' }}
            >
              Experience
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              style={{ fontSize: '1.1rem', color: 'var(--text-primary)', fontWeight: '600' }}
            >
              Contact
            </a>
            <div style={{ paddingTop: '12px', borderTop: '1px solid var(--border-subtle)' }}>
              <ClippedButton
                label="View Resume"
                href={RESUME_URL}
                onClick={() => setMobileMenuOpen(false)}
              />
            </div>
          </div>
        )}
      </header>

      {/* ─── MAIN CONTENT ──────────────────────────────────────────────── */}
      <main id="main-content">

        {/* ─── HERO SECTION ────────────────────────────────────────────── */}
        <section
          id="home"
          className="section-padding"
          style={{
            borderBottom: '1px solid var(--border-default)',
            position: 'relative'
          }}
        >
          <div className="container">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: 'clamp(36px, 6vw, 64px)',
                alignItems: 'center'
              }}
            >
              {/* Left Column: Intro, Headline, Copy, Actions */}
              <div>
                {/* Small Introduction */}
                <div style={{ marginBottom: '16px' }}>
                  <span className="mono-label">
                    Hi, I’m Varuna Nikam
                  </span>
                </div>

                {/* Primary Headline */}
                <h1
                  style={{
                    fontSize: 'clamp(2.5rem, 5.5vw, 4rem)',
                    color: 'var(--text-primary)',
                    marginBottom: '20px',
                    letterSpacing: '-0.03em',
                    lineHeight: '1.08',
                    fontFamily: 'var(--font-display)'
                  }}
                >
                  Shopify stores.<br />
                  <span style={{ color: 'var(--accent-orange)' }}>Thoughtful</span> web experiences.
                </h1>

                {/* Supporting Text */}
                <p
                  style={{
                    fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
                    color: 'var(--text-secondary)',
                    marginBottom: '32px',
                    lineHeight: '1.75'
                  }}
                >
                  I build and customize Shopify storefronts with Liquid, responsive interfaces and practical integrations. Based in Nashik, I also create React applications and selected AI-powered tools.
                </p>

                {/* Action Buttons */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '24px',
                    flexWrap: 'wrap',
                    marginBottom: '36px'
                  }}
                >
                  <EditorialAction
                    label="Explore My Work"
                    href="#work"
                  />
                  <ClippedButton
                    label="Get My Resume"
                    href={RESUME_URL}
                  />
                </div>

                {/* Availability Status Badge */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '8px 14px',
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-default)',
                    borderRadius: '2px',
                    fontSize: '0.8125rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-secondary)'
                  }}
                >
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: '#10B981',
                      boxShadow: '0 0 8px rgba(16, 185, 129, 0.4)'
                    }}
                    aria-hidden="true"
                  />
                  <span>Available for frontend & Shopify roles · Nashik / Remote</span>
                </div>
              </div>

              {/* Right Column: Professional Portrait naturally cropped */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    maxWidth: '420px',
                    width: '100%',
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-default)',
                    padding: '12px',
                    clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)'
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      aspectRatio: '4 / 5',
                      overflow: 'hidden',
                      backgroundColor: 'var(--bg-input)',
                      position: 'relative'
                    }}
                  >
                    <img
                      src="/images/headshots/varuna-headshot-professional-dark.webp"
                      alt="Varuna Nikam - Shopify and Frontend Developer based in Nashik, Maharashtra"
                      loading="eager"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "/images/headshots/varuna-headshot-professional-dark.png";
                      }}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center top',
                        filter: 'contrast(1.03)'
                      }}
                    />
                  </div>

                  {/* Subtle Caption Plate */}
                  <div
                    style={{
                      marginTop: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '4px 4px 0',
                      borderTop: '1px solid var(--border-subtle)'
                    }}
                  >
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>
                      VARUNA NIKAM
                    </span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-orange)' }}>
                      NASHIK, MH
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── FEATURED WORK ───────────────────────────────────────────── */}
        <section
          id="work"
          className="section-padding"
          style={{
            borderBottom: '1px solid var(--border-default)'
          }}
        >
          <div className="container">
            {/* Section Header */}
            <div style={{ marginBottom: '48px' }}>
              <span className="mono-label">Selected Work</span>
              <h2
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  color: 'var(--text-primary)',
                  marginTop: '12px',
                  fontFamily: 'var(--font-display)'
                }}
              >
                Featured Projects
              </h2>
              <p style={{ color: 'var(--text-secondary)', marginTop: '8px' }}>
                Verified Shopify storefronts, theme architectures, and developer tooling.
              </p>
            </div>

            {/* Layout: 1 Large Primary Featured Project */}
            {FEATURED_WORK.length > 0 && (() => {
              const main = FEATURED_WORK[0];
              return (
                <div
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-default)',
                    marginBottom: '36px',
                    padding: 'clamp(24px, 4vw, 44px)',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: 'clamp(24px, 4vw, 48px)',
                    alignItems: 'center'
                  }}
                >
                  {/* Left Column: Details */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--accent-orange)', textTransform: 'uppercase' }}>
                        {main.category}
                      </span>
                      <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', border: '1px solid var(--border-default)', padding: '2px 8px', color: 'var(--text-secondary)', borderRadius: '2px' }}>
                        {main.badge}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                        color: 'var(--text-primary)',
                        marginBottom: '14px',
                        fontFamily: 'var(--font-display)'
                      }}
                    >
                      {main.title}
                    </h3>

                    <p style={{ color: 'var(--text-secondary)', marginBottom: '18px', fontSize: '1rem', lineHeight: '1.7' }}>
                      <strong style={{ color: 'var(--text-primary)', fontWeight: '600' }}>Personal Contribution: </strong>
                      {main.contribution}
                    </p>

                    <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '0.95rem', lineHeight: '1.65' }}>
                      <strong style={{ color: 'var(--text-primary)', fontWeight: '600' }}>Outcome: </strong>
                      {main.outcome}
                    </p>

                    {/* Tech Badges */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
                      {main.technologies.map((t, idx) => (
                        <span
                          key={idx}
                          style={{
                            fontSize: '0.8125rem',
                            fontFamily: 'var(--font-mono)',
                            padding: '4px 10px',
                            backgroundColor: 'var(--bg-input)',
                            border: '1px solid var(--border-default)',
                            color: 'var(--text-secondary)',
                            borderRadius: '2px'
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
                      <SplitArrowButton
                        label="View Case Study"
                        onClick={() => setActiveCaseStudy(main)}
                      />
                      {main.links?.live && (
                        <UtilityButton
                          type="live"
                          href={main.links.live}
                          label="Live Store"
                        />
                      )}
                      {main.links?.github && (
                        <UtilityButton
                          type="code"
                          href={main.links.github}
                          label="Repository"
                        />
                      )}
                    </div>
                  </div>

                  {/* Right Column: 16:10 Frame Preview */}
                  <div>
                    <div
                      style={{
                        width: '100%',
                        aspectRatio: '16 / 10',
                        backgroundColor: 'var(--bg-input)',
                        border: '1px solid var(--border-default)',
                        overflow: 'hidden',
                        position: 'relative'
                      }}
                    >
                      <img
                        src={main.image}
                        alt={`${main.title} screenshot`}
                        loading="lazy"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                      />
                      <div
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          backgroundColor: 'rgba(11, 13, 16, 0.85)',
                          padding: '10px 16px',
                          borderTop: '1px solid var(--border-default)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.75rem',
                          color: 'var(--text-tertiary)'
                        }}
                      >
                        <span>SHOPIFY · DAWN 2.0</span>
                        <span style={{ color: 'var(--accent-orange)' }}>FEATURED BUILD</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* Layout: 2 Supporting Featured Projects Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '28px'
              }}
            >
              {FEATURED_WORK.slice(1, 3).map((proj) => (
                <div
                  key={proj.id}
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-default)',
                    padding: '28px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    {/* Frame Screenshot */}
                    <div
                      style={{
                        width: '100%',
                        aspectRatio: '16 / 10',
                        backgroundColor: 'var(--bg-input)',
                        border: '1px solid var(--border-default)',
                        overflow: 'hidden',
                        marginBottom: '20px'
                      }}
                    >
                      <img
                        src={proj.image}
                        alt={`${proj.title} screenshot`}
                        loading="lazy"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-orange)', textTransform: 'uppercase' }}>
                        {proj.category}
                      </span>
                      <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', border: '1px solid var(--border-default)', padding: '2px 6px', color: 'var(--text-secondary)' }}>
                        {proj.badge}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.35rem', color: 'var(--text-primary)', marginBottom: '12px', fontFamily: 'var(--font-display)' }}>
                      {proj.title}
                    </h3>

                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: '1.65', marginBottom: '14px' }}>
                      <strong style={{ color: 'var(--text-primary)', fontWeight: '600' }}>Contribution: </strong>
                      {proj.contribution}
                    </p>

                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '20px' }}>
                      <strong style={{ color: 'var(--text-primary)', fontWeight: '600' }}>Outcome: </strong>
                      {proj.outcome}
                    </p>

                    {/* Tech List */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
                      {proj.technologies.slice(0, 4).map((t, idx) => (
                        <span
                          key={idx}
                          style={{
                            fontSize: '0.75rem',
                            fontFamily: 'var(--font-mono)',
                            padding: '3px 8px',
                            backgroundColor: 'var(--bg-input)',
                            border: '1px solid var(--border-default)',
                            color: 'var(--text-secondary)'
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', borderTop: '1px solid var(--border-subtle)', paddingTop: '18px' }}>
                    <SplitArrowButton
                      label="View Case Study"
                      onClick={() => setActiveCaseStudy(proj)}
                    />
                    {proj.links?.live && (
                      <UtilityButton
                        type="live"
                        href={proj.links.live}
                        label="Live Site"
                      />
                    )}
                    {proj.links?.github && (
                      <UtilityButton
                        type="code"
                        href={proj.links.github}
                        label="Code"
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Archive / Full Index Link */}
            <div
              style={{
                marginTop: '44px',
                textAlign: 'center',
                padding: '24px',
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-default)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '16px'
              }}
            >
              <div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--accent-orange)' }}>
                  CURATED PROJECT DIRECTORY
                </span>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', marginTop: '4px' }}>
                  Explore additional React applications, full-stack projects, and repositories.
                </p>
              </div>

              <Link
                to="/projects"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: '600',
                  fontSize: '0.9375rem',
                  border: '1px solid var(--border-default)',
                  backgroundColor: 'var(--bg-input)',
                  padding: '10px 20px',
                  borderRadius: '2px',
                  transition: 'border-color 0.2s ease'
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent-orange)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border-default)'}
              >
                <span>View All Projects</span>
                <IconArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* ─── ABOUT & COMPACT BENTO SECTION ───────────────────────────── */}
        <section
          id="about"
          className="section-padding"
          style={{
            borderBottom: '1px solid var(--border-default)'
          }}
        >
          <div className="container">
            {/* Header */}
            <div style={{ marginBottom: '44px' }}>
              <span className="mono-label">Background & Capabilities</span>
              <h2
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  color: 'var(--text-primary)',
                  marginTop: '12px',
                  fontFamily: 'var(--font-display)'
                }}
              >
                About & Expertise
              </h2>
            </div>

            {/* Compact Bento Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(12, 1fr)',
                gap: '24px'
              }}
            >
              {/* Card 1: Professional Story (8 Cols on Desktop) */}
              <div
                className="bento-card-story"
                style={{
                  gridColumn: 'span 8',
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-default)',
                  padding: 'clamp(24px, 3.5vw, 40px)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-orange)', textTransform: 'uppercase' }}>
                    01 — The Story
                  </span>
                  <h3
                    style={{
                      fontSize: '1.5rem',
                      color: 'var(--text-primary)',
                      margin: '12px 0 16px',
                      fontFamily: 'var(--font-display)'
                    }}
                  >
                    Frontend Foundations with Commercial E-Commerce Focus
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.75', marginBottom: '14px' }}>
                    Based in Nashik, Maharashtra, I hold a Master of Computer Applications (MCA) and specialize in developing customized Shopify storefronts using Liquid alongside responsive frontend applications.
                  </p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.75' }}>
                    My work bridges the gap between clean code and commercial store operations. Whether configuring custom Liquid sections for Dawn, streamlining product catalogs, or engineering responsive React dashboards, I prioritize fast load times, accessible interfaces, and maintainable architectures.
                  </p>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '24px',
                    borderTop: '1px solid var(--border-subtle)',
                    paddingTop: '20px',
                    marginTop: '24px',
                    flexWrap: 'wrap'
                  }}
                >
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>LOCATION</div>
                    <div style={{ fontWeight: '600', color: 'var(--text-primary)' }}>Nashik, MH, India</div>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>SPECIALTY</div>
                    <div style={{ fontWeight: '600', color: 'var(--text-primary)' }}>Shopify Liquid & Frontend</div>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>DEGREE</div>
                    <div style={{ fontWeight: '600', color: 'var(--text-primary)' }}>MCA (2023–2025)</div>
                  </div>
                </div>
              </div>

              {/* Card 2: Availability & Collaboration (4 Cols on Desktop) */}
              <div
                className="bento-card-avail"
                style={{
                  gridColumn: 'span 4',
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-default)',
                  padding: 'clamp(24px, 3.5vw, 40px)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-orange)', textTransform: 'uppercase' }}>
                    02 — Availability
                  </span>
                  <h3
                    style={{
                      fontSize: '1.4rem',
                      color: 'var(--text-primary)',
                      margin: '12px 0 16px',
                      fontFamily: 'var(--font-display)'
                    }}
                  >
                    Open for Opportunities
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '20px' }}>
                    Actively considering full-time Shopify / Frontend Developer positions, as well as selected client contracts for custom store builds and theme modernizations.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                      <IconCheck size={16} color="var(--accent-orange)" />
                      <span>Full-Time Frontend / Shopify Roles</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                      <IconCheck size={16} color="var(--accent-orange)" />
                      <span>Shopify Theme Customization Contracts</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                      <IconCheck size={16} color="var(--accent-orange)" />
                      <span>Remote (IST / Global) or Nashik / Pune</span>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '24px' }}>
                  <a
                    href="#contact"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      color: 'var(--accent-orange)',
                      fontFamily: 'var(--font-sans)'
                    }}
                  >
                    <span>Discuss a role or project</span>
                    <IconArrowRight size={16} />
                  </a>
                </div>
              </div>

              {/* Card 3: Core Capabilities (Full Width / 12 Cols) */}
              <div
                style={{
                  gridColumn: 'span 12',
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-default)',
                  padding: 'clamp(24px, 3.5vw, 40px)'
                }}
              >
                <div style={{ marginBottom: '24px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-orange)', textTransform: 'uppercase' }}>
                    03 — Capabilities
                  </span>
                  <h3
                    style={{
                      fontSize: '1.5rem',
                      color: 'var(--text-primary)',
                      margin: '8px 0',
                      fontFamily: 'var(--font-display)'
                    }}
                  >
                    Core Technical Strengths
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                    Practical skills grounded in real project execution without arbitrary percentage ratings.
                  </p>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '20px'
                  }}
                >
                  {CAPABILITIES.map((cap, idx) => (
                    <div
                      key={idx}
                      style={{
                        backgroundColor: 'var(--bg-input)',
                        border: '1px solid var(--border-subtle)',
                        padding: '20px',
                        borderRadius: '2px'
                      }}
                    >
                      <h4
                        style={{
                          fontSize: '1.05rem',
                          color: 'var(--text-primary)',
                          marginBottom: '8px',
                          fontFamily: 'var(--font-sans)',
                          fontWeight: '600'
                        }}
                      >
                        {cap.title}
                      </h4>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: '1.6', marginBottom: '14px' }}>
                        {cap.desc}
                      </p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {cap.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            style={{
                              fontSize: '0.75rem',
                              fontFamily: 'var(--font-mono)',
                              padding: '2px 8px',
                              backgroundColor: 'var(--bg-card)',
                              border: '1px solid var(--border-default)',
                              color: 'var(--text-tertiary)'
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card 4: Working Process (Full Width / 12 Cols) */}
              <div
                style={{
                  gridColumn: 'span 12',
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-default)',
                  padding: 'clamp(24px, 3.5vw, 40px)'
                }}
              >
                <div style={{ marginBottom: '24px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-orange)', textTransform: 'uppercase' }}>
                    04 — How I Work
                  </span>
                  <h3
                    style={{
                      fontSize: '1.5rem',
                      color: 'var(--text-primary)',
                      margin: '8px 0',
                      fontFamily: 'var(--font-display)'
                    }}
                  >
                    Structured Delivery Process
                  </h3>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: '20px'
                  }}
                >
                  {WORK_PROCESS.map((proc, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: '16px',
                        borderLeft: '2px solid var(--accent-orange)',
                        backgroundColor: 'var(--bg-input)'
                      }}
                    >
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--accent-orange)', marginBottom: '4px' }}>
                        {proc.step}
                      </div>
                      <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '6px', fontWeight: '600' }}>
                        {proc.title}
                      </h4>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: '1.6' }}>
                        {proc.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── EXPERIENCE & CREDENTIALS ────────────────────────────────── */}
        <section
          id="experience"
          className="section-padding"
          style={{
            borderBottom: '1px solid var(--border-default)'
          }}
        >
          <div className="container">
            {/* Header */}
            <div style={{ marginBottom: '48px' }}>
              <span className="mono-label">Career & Education</span>
              <h2
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  color: 'var(--text-primary)',
                  marginTop: '12px',
                  fontFamily: 'var(--font-display)'
                }}
              >
                Experience & Credentials
              </h2>
              <p style={{ color: 'var(--text-secondary)', marginTop: '8px' }}>
                Accurate record of professional roles, verified credentials, and academic background.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: 'clamp(32px, 5vw, 64px)'
              }}
            >
              {/* Left Column: Work History */}
              <div>
                <h3
                  style={{
                    fontSize: '1.3rem',
                    color: 'var(--text-primary)',
                    marginBottom: '24px',
                    fontFamily: 'var(--font-display)',
                    borderBottom: '1px solid var(--border-default)',
                    paddingBottom: '12px'
                  }}
                >
                  Professional Experience
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                  {EXPERIENCE_HISTORY.map((exp, idx) => (
                    <div
                      key={idx}
                      style={{
                        backgroundColor: 'var(--bg-card)',
                        border: '1px solid var(--border-default)',
                        padding: '24px',
                        borderRadius: '2px'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                        <div>
                          <h4 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', fontWeight: '600' }}>
                            {exp.role}
                          </h4>
                          <div style={{ color: 'var(--accent-orange)', fontSize: '0.9375rem', fontWeight: '500' }}>
                            {exp.company}
                          </div>
                        </div>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--text-tertiary)' }}>
                          {exp.period}
                        </div>
                      </div>

                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '16px' }}>
                        {exp.summary}
                      </p>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {exp.contributions.map((c, cIdx) => (
                          <div key={cIdx} style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                            <strong style={{ color: 'var(--text-primary)' }}>{c.type}: </strong>
                            {c.detail}
                          </div>
                        ))}
                      </div>

                      {exp.stores && (
                        <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '1px solid var(--border-subtle)' }}>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>
                            MAINTAINED CLIENT STORES:
                          </span>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '6px' }}>
                            {exp.stores.map((s, sIdx) => (
                              <span
                                key={sIdx}
                                style={{
                                  fontSize: '0.75rem',
                                  fontFamily: 'var(--font-mono)',
                                  backgroundColor: 'var(--bg-input)',
                                  padding: '2px 8px',
                                  border: '1px solid var(--border-subtle)',
                                  color: 'var(--text-secondary)'
                                }}
                              >
                                {s.name} ({s.niche})
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Credentials & Education */}
              <div>
                {/* Credentials Grouping */}
                <h3
                  style={{
                    fontSize: '1.3rem',
                    color: 'var(--text-primary)',
                    marginBottom: '24px',
                    fontFamily: 'var(--font-display)',
                    borderBottom: '1px solid var(--border-default)',
                    paddingBottom: '12px'
                  }}
                >
                  Verified Credentials
                </h3>

                <div style={{ marginBottom: '32px' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-orange)', marginBottom: '10px' }}>
                    COMPLETED CREDENTIALS
                  </div>
                  {CREDENTIALS.completed.map((c, i) => (
                    <div
                      key={i}
                      style={{
                        backgroundColor: 'var(--bg-card)',
                        border: '1px solid var(--border-default)',
                        padding: '14px 18px',
                        marginBottom: '10px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}
                    >
                      <div>
                        <div style={{ fontWeight: '600', color: 'var(--text-primary)', fontSize: '0.9375rem' }}>{c.title}</div>
                        <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>{c.issuer}</div>
                      </div>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#10B981', border: '1px solid rgba(16, 185, 129, 0.3)', padding: '2px 8px' }}>
                        COMPLETED
                      </span>
                    </div>
                  ))}
                </div>

                <div style={{ marginBottom: '32px' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-tertiary)', marginBottom: '10px' }}>
                    INDUSTRY JOB SIMULATIONS
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px' }}>
                    {CREDENTIALS.simulations.map((c, i) => (
                      <div
                        key={i}
                        style={{
                          backgroundColor: 'var(--bg-card)',
                          border: '1px solid var(--border-default)',
                          padding: '12px 16px',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}
                      >
                        <div>
                          <div style={{ fontWeight: '500', color: 'var(--text-primary)', fontSize: '0.875rem' }}>{c.title}</div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>{c.issuer}</div>
                        </div>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-secondary)' }}>
                          SIMULATION
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Education Grouping */}
                <h3
                  style={{
                    fontSize: '1.3rem',
                    color: 'var(--text-primary)',
                    marginBottom: '20px',
                    fontFamily: 'var(--font-display)',
                    borderBottom: '1px solid var(--border-default)',
                    paddingBottom: '12px'
                  }}
                >
                  Education
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {EDUCATION_HISTORY.map((edu, idx) => (
                    <div
                      key={idx}
                      style={{
                        backgroundColor: 'var(--bg-card)',
                        border: '1px solid var(--border-default)',
                        padding: '16px 20px'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
                        <div style={{ fontWeight: '600', color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                          {edu.degree}
                        </div>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>
                          {edu.period}
                        </span>
                      </div>
                      <div style={{ color: 'var(--accent-orange)', fontSize: '0.875rem', marginTop: '2px' }}>
                        {edu.institution} · {edu.location}
                      </div>
                      <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                        Focus: {edu.focus}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CONTACT SECTION ─────────────────────────────────────────── */}
        <section
          id="contact"
          className="section-padding"
          style={{
            position: 'relative'
          }}
        >
          <div className="container">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: 'clamp(36px, 6vw, 64px)'
              }}
            >
              {/* Left Column: Headline & Direct Contact Info */}
              <div>
                <span className="mono-label">Get in Touch</span>
                <h2
                  style={{
                    fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)',
                    color: 'var(--text-primary)',
                    margin: '16px 0',
                    fontFamily: 'var(--font-display)',
                    lineHeight: '1.1'
                  }}
                >
                  Let’s build something useful.
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '32px' }}>
                  Whether you are hiring for a Shopify / Frontend developer role, need a custom Liquid storefront, or want to explore collaboration — my inbox is open.
                </p>

                {/* Direct Channels */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginBottom: '36px' }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-tertiary)', marginBottom: '4px' }}>
                      DIRECT EMAIL
                    </div>
                    <a
                      href={`mailto:${EMAIL_ADDRESS}`}
                      style={{
                        fontSize: '1.1rem',
                        color: 'var(--text-primary)',
                        fontWeight: '600',
                        textDecoration: 'none'
                      }}
                    >
                      {EMAIL_ADDRESS}
                    </a>
                  </div>

                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-tertiary)', marginBottom: '4px' }}>
                      LOCATION & TIMEZONE
                    </div>
                    <div style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>
                      Nashik, Maharashtra, India · IST (UTC+5:30)
                    </div>
                  </div>

                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-tertiary)', marginBottom: '6px' }}>
                      PROFILES
                    </div>
                    <div style={{ display: 'flex', gap: '14px' }}>
                      <a
                        href={GITHUB_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          color: 'var(--text-secondary)',
                          fontSize: '0.875rem',
                          padding: '6px 12px',
                          border: '1px solid var(--border-default)',
                          backgroundColor: 'var(--bg-card)'
                        }}
                      >
                        <IconGitHub size={16} />
                        <span>GitHub</span>
                      </a>
                      <a
                        href={LINKEDIN_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          color: 'var(--text-secondary)',
                          fontSize: '0.875rem',
                          padding: '6px 12px',
                          border: '1px solid var(--border-default)',
                          backgroundColor: 'var(--bg-card)'
                        }}
                      >
                        <IconLinkedIn size={16} />
                        <span>LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-default)',
                  padding: 'clamp(24px, 4vw, 40px)',
                  borderRadius: '2px'
                }}
              >
                <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '20px', fontFamily: 'var(--font-display)' }}>
                  Send a Message
                </h3>

                {formStatus.success ? (
                  <div
                    style={{
                      padding: '24px',
                      backgroundColor: 'var(--bg-input)',
                      border: '1px solid #10B981',
                      borderRadius: '2px',
                      textAlign: 'center'
                    }}
                  >
                    <div style={{ color: '#10B981', fontSize: '1.8rem', marginBottom: '8px' }}>✓</div>
                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '8px', fontSize: '1.1rem' }}>
                      Message Received
                    </h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                      Thank you for reaching out! I will review your note and get back to you promptly.
                    </p>
                    <button
                      onClick={() => setFormStatus({ loading: false, success: false, error: null })}
                      style={{
                        marginTop: '16px',
                        padding: '8px 16px',
                        border: '1px solid var(--border-default)',
                        backgroundColor: 'transparent',
                        color: 'var(--text-primary)',
                        cursor: 'pointer',
                        fontSize: '0.875rem'
                      }}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} noValidate>
                    {formStatus.error && (
                      <div
                        style={{
                          padding: '12px 16px',
                          backgroundColor: 'rgba(239, 68, 68, 0.1)',
                          border: '1px solid #EF4444',
                          color: '#F87171',
                          fontSize: '0.875rem',
                          marginBottom: '20px'
                        }}
                      >
                        {formStatus.error}
                      </div>
                    )}

                    {/* Name */}
                    <div style={{ marginBottom: '18px' }}>
                      <label
                        htmlFor="contact-name"
                        style={{
                          display: 'block',
                          fontSize: '0.875rem',
                          fontFamily: 'var(--font-sans)',
                          fontWeight: '500',
                          color: 'var(--text-primary)',
                          marginBottom: '6px'
                        }}
                      >
                        Your Name <span style={{ color: 'var(--accent-orange)' }}>*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleFormChange}
                        placeholder="e.g. Maya Sharma"
                        style={{
                          width: '100%',
                          backgroundColor: 'var(--bg-input)',
                          border: '1px solid var(--border-default)',
                          color: 'var(--text-primary)',
                          padding: '12px 14px',
                          fontSize: '0.9375rem',
                          borderRadius: '2px'
                        }}
                      />
                    </div>

                    {/* Email */}
                    <div style={{ marginBottom: '18px' }}>
                      <label
                        htmlFor="contact-email"
                        style={{
                          display: 'block',
                          fontSize: '0.875rem',
                          fontFamily: 'var(--font-sans)',
                          fontWeight: '500',
                          color: 'var(--text-primary)',
                          marginBottom: '6px'
                        }}
                      >
                        Your Email <span style={{ color: 'var(--accent-orange)' }}>*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleFormChange}
                        placeholder="e.g. maya@company.com"
                        style={{
                          width: '100%',
                          backgroundColor: 'var(--bg-input)',
                          border: '1px solid var(--border-default)',
                          color: 'var(--text-primary)',
                          padding: '12px 14px',
                          fontSize: '0.9375rem',
                          borderRadius: '2px'
                        }}
                      />
                    </div>

                    {/* Inquiry Type */}
                    <div style={{ marginBottom: '18px' }}>
                      <label
                        htmlFor="contact-inquiry"
                        style={{
                          display: 'block',
                          fontSize: '0.875rem',
                          fontFamily: 'var(--font-sans)',
                          fontWeight: '500',
                          color: 'var(--text-primary)',
                          marginBottom: '6px'
                        }}
                      >
                        Nature of Inquiry
                      </label>
                      <select
                        id="contact-inquiry"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleFormChange}
                        style={{
                          width: '100%',
                          backgroundColor: 'var(--bg-input)',
                          border: '1px solid var(--border-default)',
                          color: 'var(--text-primary)',
                          padding: '12px 14px',
                          fontSize: '0.9375rem',
                          borderRadius: '2px'
                        }}
                      >
                        <option value="Hiring for a Role">Hiring for a Developer Role</option>
                        <option value="Shopify Project">Shopify Store Build / Theme Customization</option>
                        <option value="Frontend Application">Frontend Web Application</option>
                        <option value="General Conversation">General Inquiries / Networking</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div style={{ marginBottom: '24px' }}>
                      <label
                        htmlFor="contact-message"
                        style={{
                          display: 'block',
                          fontSize: '0.875rem',
                          fontFamily: 'var(--font-sans)',
                          fontWeight: '500',
                          color: 'var(--text-primary)',
                          marginBottom: '6px'
                        }}
                      >
                        Tell me about the role or project <span style={{ color: 'var(--accent-orange)' }}>*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleFormChange}
                        placeholder="Briefly describe your timeline, requirements, or role details..."
                        style={{
                          width: '100%',
                          backgroundColor: 'var(--bg-input)',
                          border: '1px solid var(--border-default)',
                          color: 'var(--text-primary)',
                          padding: '12px 14px',
                          fontSize: '0.9375rem',
                          borderRadius: '2px',
                          resize: 'vertical'
                        }}
                      />
                    </div>

                    {/* Offset-Shadow Button: "Send Message" */}
                    <OffsetShadowButton
                      label="Send Message"
                      loading={formStatus.loading}
                      type="submit"
                    />
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* ─── FOOTER ────────────────────────────────────────────────────── */}
      <footer
        style={{
          borderTop: '1px solid var(--border-default)',
          backgroundColor: 'var(--bg-input)',
          padding: '36px 0'
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontWeight: '700',
                fontSize: '0.875rem',
                color: 'var(--text-primary)'
              }}
            >
              <span style={{ color: 'var(--accent-orange)' }}>V</span>N
            </div>
            <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              © 2026 Varuna Nikam. Crafted with React & Liquid.
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <a
              href="#home"
              style={{
                fontSize: '0.8125rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-secondary)',
                textDecoration: 'none'
              }}
            >
              BACK TO TOP ↑
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              style={{ color: 'var(--text-secondary)' }}
            >
              <IconGitHub size={18} />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              style={{ color: 'var(--text-secondary)' }}
            >
              <IconLinkedIn size={18} />
            </a>
          </div>
        </div>
      </footer>

      {/* ─── CASE STUDY MODAL ──────────────────────────────────────────── */}
      {activeCaseStudy && (
        <CaseStudyModal
          study={activeCaseStudy}
          onClose={() => setActiveCaseStudy(null)}
        />
      )}
    </div>
  );
}
