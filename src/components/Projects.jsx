import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ALL_PROJECTS } from '../data/caseStudies';
import {
  IconBack,
  IconArrowRight,
  IconLiveWebsite,
  IconSourceCode,
  IconCheck
} from './Icons';
import { UtilityButton, SplitArrowButton } from './Buttons';
import CaseStudyModal from './CaseStudyModal';

const FILTERS = [
  { id: 'all', label: 'All Projects' },
  { id: 'shopify', label: 'Shopify & Liquid' },
  { id: 'frontend', label: 'Frontend & React' },
  { id: 'ai', label: 'AI Tooling' }
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);

  const filteredProjects = ALL_PROJECTS.filter(p => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'shopify') {
      return p.category.toLowerCase().includes('shopify') || p.technologies.some(t => t.toLowerCase().includes('liquid') || t.toLowerCase().includes('shopify'));
    }
    if (activeFilter === 'frontend') {
      return p.category.toLowerCase().includes('frontend') || p.category.toLowerCase().includes('web') || p.technologies.some(t => t.toLowerCase().includes('react'));
    }
    if (activeFilter === 'ai') {
      return p.category.toLowerCase().includes('ai') || p.technologies.some(t => t.toLowerCase().includes('ai') || t.toLowerCase().includes('prompt'));
    }
    return true;
  });

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', color: 'var(--text-primary)' }}>
      {/* Top Header Bar */}
      <header
        style={{
          borderBottom: '1px solid var(--border-default)',
          backgroundColor: 'rgba(11, 13, 16, 0.94)',
          backdropFilter: 'blur(10px)',
          position: 'sticky',
          top: 0,
          zIndex: 50
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '70px'
          }}
        >
          <Link
            to="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.9375rem',
              color: 'var(--text-secondary)',
              fontWeight: '500',
              textDecoration: 'none',
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
          >
            <IconBack size={18} />
            <span>Back to Portfolio</span>
          </Link>

          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--text-tertiary)' }}>
            CURATED DIRECTORY · {filteredProjects.length} PROJECTS
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="container" style={{ padding: 'clamp(48px, 6vw, 80px) var(--section-padding-x)' }}>
        {/* Intro */}
        <div style={{ maxWidth: '780px', marginBottom: '44px' }}>
          <span className="mono-label">Projects Index</span>
          <h1
            style={{
              fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)',
              color: 'var(--text-primary)',
              margin: '12px 0 16px',
              fontFamily: 'var(--font-display)'
            }}
          >
            Engineering & Project Showcase
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7' }}>
            A curated collection of commercial Shopify storefronts, theme customizations, responsive web applications, and developer tools. Every entry represents verified personal contributions with active links or documented architecture.
          </p>
        </div>

        {/* Filter Pills */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            flexWrap: 'wrap',
            marginBottom: '40px',
            borderBottom: '1px solid var(--border-default)',
            paddingBottom: '20px'
          }}
        >
          {FILTERS.map(f => {
            const isActive = activeFilter === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                style={{
                  padding: '8px 18px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8125rem',
                  fontWeight: isActive ? '600' : '400',
                  color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                  backgroundColor: isActive ? 'var(--bg-card)' : 'transparent',
                  border: `1px solid ${isActive ? 'var(--accent-orange)' : 'var(--border-default)'}`,
                  borderRadius: '2px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '32px'
          }}
        >
          {filteredProjects.map((p) => (
            <div
              key={p.id}
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-default)',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRadius: '2px'
              }}
            >
              <div>
                {/* 16:10 Frame Preview */}
                <div
                  style={{
                    width: '100%',
                    aspectRatio: '16 / 10',
                    backgroundColor: 'var(--bg-input)',
                    border: '1px solid var(--border-default)',
                    overflow: 'hidden',
                    marginBottom: '20px',
                    position: 'relative'
                  }}
                >
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={`${p.title} preview`}
                      loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  ) : (
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--text-tertiary)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.8125rem',
                        gap: '8px'
                      }}
                    >
                      <span>[ INTERFACE PREVIEW ]</span>
                      <span style={{ color: 'var(--text-secondary)', fontSize: '0.75rem' }}>{p.category}</span>
                    </div>
                  )}
                </div>

                {/* Tags & Badges */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-orange)', textTransform: 'uppercase' }}>
                    {p.category}
                  </span>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', border: '1px solid var(--border-default)', padding: '2px 6px', color: 'var(--text-secondary)' }}>
                    {p.badge}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: '1.35rem',
                    color: 'var(--text-primary)',
                    marginBottom: '10px',
                    fontFamily: 'var(--font-display)'
                  }}
                >
                  {p.title}
                </h3>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: '1.65', marginBottom: '12px' }}>
                  <strong style={{ color: 'var(--text-primary)', fontWeight: '600' }}>Contribution: </strong>
                  {p.contribution}
                </p>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '20px' }}>
                  <strong style={{ color: 'var(--text-primary)', fontWeight: '600' }}>Outcome: </strong>
                  {p.outcome}
                </p>

                {/* Tech Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
                  {p.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '2px 8px',
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
              </div>

              {/* Action Buttons */}
              <div
                style={{
                  borderTop: '1px solid var(--border-subtle)',
                  paddingTop: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  flexWrap: 'wrap'
                }}
              >
                {p.links?.caseStudy && (
                  <SplitArrowButton
                    label="Case Study"
                    onClick={() => setActiveCaseStudy(p)}
                  />
                )}
                {p.links?.live && (
                  <UtilityButton
                    type="live"
                    href={p.links.live}
                    label="Live Site"
                  />
                )}
                {p.links?.github && (
                  <UtilityButton
                    type="code"
                    href={p.links.github}
                    label="Code"
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Back Link at Bottom */}
        <div style={{ marginTop: '64px', textAlign: 'center' }}>
          <Link
            to="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.95rem',
              color: 'var(--text-primary)',
              fontWeight: '600',
              padding: '12px 24px',
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-default)'
            }}
          >
            <IconBack size={18} />
            <span>Return to Portfolio Homepage</span>
          </Link>
        </div>
      </main>

      {/* Case Study Modal */}
      {activeCaseStudy && (
        <CaseStudyModal
          study={activeCaseStudy}
          onClose={() => setActiveCaseStudy(null)}
        />
      )}
    </div>
  );
}
