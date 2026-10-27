import React, { useState, useEffect, useRef } from 'react';
import { IconCart, IconReplay, IconCheck } from './Icons';

export default function StorefrontAssembly({ className = '' }) {
  const [assembled, setAssembled] = useState(false);
  const [selectedGrind, setSelectedGrind] = useState('Whole Bean');
  const [cartCount, setCartCount] = useState(0);
  const [addedFeedback, setAddedFeedback] = useState(false);
  const [key, setKey] = useState(1);
  const containerRef = useRef(null);

  // Check reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;

  useEffect(() => {
    if (prefersReducedMotion) {
      setAssembled(true);
      return;
    }

    // Trigger assembly once when component mounts or enters view
    const timer = setTimeout(() => {
      setAssembled(true);
    }, 2200);

    return () => clearTimeout(timer);
  }, [key, prefersReducedMotion]);

  const handleReplay = (e) => {
    e.preventDefault();
    if (prefersReducedMotion) return;
    setAssembled(false);
    setKey(prev => prev + 1);
  };

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
    setAddedFeedback(true);
    setTimeout(() => {
      setAddedFeedback(false);
    }, 1600);
  };

  return (
    <div
      ref={containerRef}
      key={key}
      className={`storefront-assembly ${assembled ? 'is-assembled' : 'is-assembling'} ${className}`}
      style={{
        clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)',
        maxWidth: '520px',
        margin: '0 auto'
      }}
    >
      {/* 1. Browser Window Frame Bar */}
      <div
        className="assembly-browser-bar"
        style={{
          backgroundColor: 'var(--bg-input)',
          borderBottom: '1px solid var(--border-default)',
          padding: '8px 14px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '8px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#EF4444', opacity: 0.8 }} />
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#F59E0B', opacity: 0.8 }} />
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10B981', opacity: 0.8 }} />
        </div>

        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.6875rem',
            color: 'var(--text-tertiary)',
            backgroundColor: 'var(--bg-card)',
            padding: '3px 10px',
            border: '1px solid var(--border-subtle)',
            borderRadius: '2px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            maxWidth: '260px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          }}
        >
          <span style={{ color: 'var(--accent-orange)' }}>liquid://</span>
          <span>storefront/product.liquid</span>
        </div>

        {/* Discreet Cart Badge & Replay Control */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            title="Demo cart count"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              color: cartCount > 0 ? 'var(--accent-orange)' : 'var(--text-secondary)',
              fontSize: '0.75rem',
              fontFamily: 'var(--font-mono)'
            }}
          >
            <IconCart size={14} />
            <span>{cartCount}</span>
          </div>

          <button
            onClick={handleReplay}
            title="Replay assembly sequence"
            aria-label="Replay storefront assembly animation"
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-tertiary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              padding: '2px',
              transition: 'color var(--motion-fast)'
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-tertiary)'}
          >
            <IconReplay size={14} />
          </button>
        </div>
      </div>

      {/* Concept Disclaimer Pill */}
      <div
        style={{
          padding: '4px 14px',
          backgroundColor: 'rgba(242, 118, 69, 0.08)',
          borderBottom: '1px solid var(--border-subtle)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.6875rem',
          fontFamily: 'var(--font-mono)',
          color: 'var(--accent-orange)'
        }}
      >
        <span>STOREFRONT ASSEMBLY DEMO</span>
        <span style={{ color: 'var(--text-tertiary)' }}>Interactive concept — not a client project</span>
      </div>

      {/* Assembly Body */}
      <div style={{ padding: 'clamp(14px, 2.5vw, 20px)' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '16px',
            alignItems: 'center'
          }}
        >
          {/* 2. Product Visual Illustration */}
          <div
            className="assembly-image-card"
            style={{
              backgroundColor: 'var(--bg-input)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '2px',
              aspectRatio: '1 / 1',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* SVG Single-Origin Coffee Package Visual */}
            <svg width="84" height="100" viewBox="0 0 84 100" fill="none" aria-hidden="true">
              {/* Bag Body with Clipped Gusset */}
              <path d="M14 18H70L66 94H18L14 18Z" fill="#14181D" stroke="#303740" strokeWidth="1.5" />
              {/* Top Heat-Sealed Fold */}
              <rect x="12" y="10" width="60" height="8" rx="1" fill="#191E25" stroke="#303740" strokeWidth="1.2" />
              {/* Coffee Brand Badge */}
              <rect x="24" y="32" width="36" height="42" rx="1" fill="#0B0D10" stroke="#F27645" strokeWidth="1" strokeDasharray="2 1" />
              {/* Roast Dot */}
              <circle cx="42" cy="46" r="6" fill="#F27645" />
              <line x1="30" y1="58" x2="54" y2="58" stroke="#F4F1EA" strokeWidth="1.5" />
              <line x1="33" y1="64" x2="51" y2="64" stroke="#AAB2BD" strokeWidth="1" />
            </svg>
            <div
              style={{
                position: 'absolute',
                bottom: '6px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.625rem',
                color: 'var(--text-tertiary)'
              }}
            >
              12 OZ / 340G · WHOLE BEAN
            </div>
          </div>

          {/* 3. Product Details & Option Controls */}
          <div>
            <div className="assembly-details">
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6875rem',
                  color: 'var(--accent-orange)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  marginBottom: '2px'
                }}
              >
                Single-Origin Roast
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: '700',
                  fontSize: '1.15rem',
                  color: 'var(--text-primary)',
                  lineHeight: '1.2'
                }}
              >
                Yirgacheffe G1
              </div>
              <div
                style={{
                  fontSize: '0.9375rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginTop: '4px',
                  marginBottom: '12px'
                }}
              >
                $18.00 <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', fontWeight: '400' }}>USD</span>
              </div>
            </div>

            {/* 4. Option Selector (Grind) */}
            <div className="assembly-options" style={{ marginBottom: '14px' }}>
              <div
                style={{
                  fontSize: '0.6875rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-secondary)',
                  marginBottom: '6px'
                }}
              >
                GRIND SELECTION:
              </div>
              <div style={{ display: 'flex', gap: '6px' }}>
                {['Whole Bean', 'Filter', 'Espresso'].map((grind) => {
                  const isSelected = selectedGrind === grind;
                  return (
                    <button
                      key={grind}
                      onClick={() => setSelectedGrind(grind)}
                      style={{
                        padding: '4px 8px',
                        fontSize: '0.6875rem',
                        fontFamily: 'var(--font-mono)',
                        backgroundColor: isSelected ? 'rgba(242, 118, 69, 0.15)' : 'var(--bg-input)',
                        color: isSelected ? 'var(--text-primary)' : 'var(--text-secondary)',
                        border: `1px solid ${isSelected ? 'var(--accent-orange)' : 'var(--border-default)'}`,
                        borderRadius: '2px',
                        cursor: 'pointer',
                        transition: 'all var(--motion-fast)'
                      }}
                    >
                      {grind}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Add to Cart Action */}
            <div className="assembly-action-row">
              <button
                onClick={handleAddToCart}
                style={{
                  width: '100%',
                  padding: '9px 14px',
                  backgroundColor: addedFeedback ? '#10B981' : 'var(--accent-orange)',
                  color: '#0B0D10',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: '700',
                  fontSize: '0.8125rem',
                  border: 'none',
                  clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  transition: 'background-color var(--motion-fast)'
                }}
              >
                {addedFeedback ? (
                  <>
                    <IconCheck size={14} />
                    <span>Added to Cart</span>
                  </>
                ) : (
                  <>
                    <IconCart size={14} />
                    <span>Add to Cart — $18.00</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* 5. Assembly Caption */}
        <div
          className="assembly-caption"
          style={{
            marginTop: '14px',
            paddingTop: '10px',
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.75rem',
            color: 'var(--text-secondary)'
          }}
        >
          <span style={{ fontStyle: 'italic' }}>
            “Built with Liquid. Designed for people.”
          </span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--text-tertiary)' }}>
            DEMO CART SIMULATION
          </span>
        </div>
      </div>
    </div>
  );
}
