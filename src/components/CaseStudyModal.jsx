import React, { useEffect, useRef } from 'react';
import {
  IconClose,
  IconCheck,
  IconLiveWebsite,
  IconGitHub,
  IconArrowUpRight
} from './Icons';
import { UtilityButton, ClippedButton } from './Buttons';

export default function CaseStudyModal({ study, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (!study) return;

    // Save previous active element to restore focus on close
    const prevActive = document.activeElement;

    // Prevent body scroll when modal is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus close button inside modal
    const closeBtn = modalRef.current?.querySelector('.modal-close-btn');
    closeBtn?.focus();

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      prevActive?.focus?.();
    };
  }, [study, onClose]);

  if (!study) return null;

  return (
    <div
      className="case-study-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(11, 13, 16, 0.88)',
        backdropFilter: 'blur(8px)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(16px, 3vw, 40px)',
        overflowY: 'auto'
      }}
    >
      <div
        ref={modalRef}
        className="case-study-content"
        style={{
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-default)',
          maxWidth: '860px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          borderRadius: '4px',
          padding: 'clamp(24px, 4vw, 48px)',
          position: 'relative',
          boxShadow: '0 24px 64px rgba(0, 0, 0, 0.6)'
        }}
      >
        {/* Top Header Row with Category, Badge & Close Button */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid var(--border-default)',
          paddingBottom: '20px',
          marginBottom: '28px',
          gap: '16px',
          flexWrap: 'wrap'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8125rem',
                color: 'var(--accent-orange)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase'
              }}
            >
              {study.category}
            </span>
            <span
              style={{
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                padding: '3px 8px',
                border: '1px solid var(--border-default)',
                color: 'var(--text-secondary)',
                borderRadius: '2px'
              }}
            >
              {study.badge}
            </span>
          </div>

          <button
            onClick={onClose}
            className="modal-close-btn"
            aria-label="Close Case Study"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              border: '1px solid var(--border-default)',
              backgroundColor: 'var(--bg-input)',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              borderRadius: '2px',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent-orange)';
              e.currentTarget.style.color = 'var(--text-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-default)';
              e.currentTarget.style.color = 'var(--text-secondary)';
            }}
          >
            <IconClose size={18} />
          </button>
        </div>

        {/* Case Study Title & Subtitle */}
        <h2
          id="case-study-title"
          style={{
            fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
            color: 'var(--text-primary)',
            marginBottom: '10px',
            fontFamily: 'var(--font-display)'
          }}
        >
          {study.title}
        </h2>
        <p style={{
          fontSize: '1.125rem',
          color: 'var(--text-secondary)',
          marginBottom: '28px',
          lineHeight: '1.6'
        }}>
          {study.subtitle}
        </p>

        {/* Stats Row */}
        {study.stats && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '14px',
            marginBottom: '36px',
            padding: '16px',
            background: 'var(--bg-input)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '2px'
          }}>
            {study.stats.map((s, idx) => (
              <div key={idx}>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--text-tertiary)',
                  textTransform: 'uppercase',
                  marginBottom: '4px'
                }}>
                  {s.label}
                </div>
                <div style={{
                  fontSize: '1.05rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-sans)'
                }}>
                  {s.value}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 1. Project Overview */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{
            fontSize: '1.2rem',
            color: 'var(--text-primary)',
            marginBottom: '10px',
            fontFamily: 'var(--font-display)'
          }}>
            1. Project Overview
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7' }}>
            {study.overview}
          </p>
        </div>

        {/* 2. Context & Problem */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{
            fontSize: '1.2rem',
            color: 'var(--text-primary)',
            marginBottom: '10px',
            fontFamily: 'var(--font-display)'
          }}>
            2. Context & Problem
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7' }}>
            {study.problem}
          </p>
        </div>

        {/* 3. My Role & Personal Scope */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{
            fontSize: '1.2rem',
            color: 'var(--text-primary)',
            marginBottom: '10px',
            fontFamily: 'var(--font-display)'
          }}>
            3. My Role & Scope
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7' }}>
            {study.roleScope}
          </p>
        </div>

        {/* 4. Features & Changes Delivered */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{
            fontSize: '1.2rem',
            color: 'var(--text-primary)',
            marginBottom: '12px',
            fontFamily: 'var(--font-display)'
          }}>
            4. Features & Changes Delivered
          </h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {study.featuresDelivered.map((feat, i) => (
              <li
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  color: 'var(--text-secondary)',
                  fontSize: '0.98rem',
                  lineHeight: '1.6'
                }}
              >
                <span style={{ color: 'var(--accent-orange)', marginTop: '4px', flexShrink: 0 }}>
                  <IconCheck size={16} />
                </span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 5. Technical Decisions */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{
            fontSize: '1.2rem',
            color: 'var(--text-primary)',
            marginBottom: '10px',
            fontFamily: 'var(--font-display)'
          }}>
            5. Technical Decisions
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7' }}>
            {study.technicalDecisions}
          </p>
        </div>

        {/* Technologies Badge Group */}
        <div style={{ marginBottom: '32px' }}>
          <h4 style={{
            fontSize: '0.85rem',
            fontFamily: 'var(--font-mono)',
            textTransform: 'uppercase',
            color: 'var(--text-tertiary)',
            letterSpacing: '0.06em',
            marginBottom: '12px'
          }}>
            Stack & Technologies
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {study.technologies.map((t, idx) => (
              <span
                key={idx}
                style={{
                  fontSize: '0.8125rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-primary)',
                  backgroundColor: 'var(--bg-input)',
                  border: '1px solid var(--border-default)',
                  padding: '5px 12px',
                  borderRadius: '2px'
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* 6. Validation & Testing */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{
            fontSize: '1.2rem',
            color: 'var(--text-primary)',
            marginBottom: '10px',
            fontFamily: 'var(--font-display)'
          }}>
            6. Validation & Testing
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7' }}>
            {study.validation}
          </p>
        </div>

        {/* 7. Verified Results & Outcomes */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{
            fontSize: '1.2rem',
            color: 'var(--text-primary)',
            marginBottom: '10px',
            fontFamily: 'var(--font-display)'
          }}>
            7. Verified Outcomes
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7' }}>
            {study.results}
          </p>
        </div>

        {/* 8. Tradeoffs & Lessons */}
        <div style={{ marginBottom: '36px' }}>
          <h3 style={{
            fontSize: '1.2rem',
            color: 'var(--text-primary)',
            marginBottom: '10px',
            fontFamily: 'var(--font-display)'
          }}>
            8. Tradeoffs & Lessons
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7' }}>
            {study.tradeoffs}
          </p>
        </div>

        {/* Actions & Links Footer */}
        <div style={{
          borderTop: '1px solid var(--border-default)',
          paddingTop: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {study.links?.live && (
              <UtilityButton
                type="live"
                href={study.links.live}
                label="Visit Live Store"
              />
            )}
            {study.links?.github && (
              <UtilityButton
                type="code"
                href={study.links.github}
                label="GitHub Repository"
              />
            )}
          </div>

          <button
            onClick={onClose}
            style={{
              padding: '10px 20px',
              background: 'transparent',
              color: 'var(--text-secondary)',
              border: '1px solid var(--border-default)',
              borderRadius: '2px',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.875rem',
              fontWeight: '500',
              cursor: 'pointer'
            }}
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
}
