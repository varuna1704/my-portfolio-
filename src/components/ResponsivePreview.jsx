import React, { useState, useEffect } from 'react';
import { IconDesktop, IconTablet, IconMobile, IconCart, IconMenu, IconCheck } from './Icons';

export default function ResponsivePreview({ className = '' }) {
  // Breakpoint choices: 'desktop' | 'tablet' | 'mobile'
  const [device, setDevice] = useState('desktop');

  // On small client screens, default to mobile view
  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 640) {
      setDevice('mobile');
    }
  }, []);

  const deviceWidths = {
    desktop: '100%',
    tablet: '560px',
    mobile: '360px'
  };

  return (
    <div className={`responsive-preview-section ${className}`} style={{ width: '100%', margin: '28px 0' }}>
      {/* Header & Device Switcher Toolbar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          marginBottom: '16px',
          paddingBottom: '12px',
          borderBottom: '1px solid var(--border-default)'
        }}
      >
        <div>
          <h4
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: '600',
              fontSize: '1rem',
              color: 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <span>Responsive Layout Adaptation</span>
            <span
              style={{
                fontSize: '0.6875rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--accent-orange)',
                border: '1px solid var(--border-default)',
                padding: '2px 6px',
                borderRadius: '2px'
              }}
            >
              CONTAINER PREVIEW
            </span>
          </h4>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginTop: '2px' }}>
            Switch between viewports to observe column re-stacking, navigation collapse, and touch target scaling.
          </p>
        </div>

        {/* Device Buttons */}
        <div
          role="group"
          aria-label="Responsive viewport mode"
          style={{
            display: 'flex',
            gap: '6px',
            backgroundColor: 'var(--bg-card)',
            padding: '4px',
            border: '1px solid var(--border-default)',
            borderRadius: '2px'
          }}
        >
          <button
            onClick={() => setDevice('desktop')}
            aria-pressed={device === 'desktop'}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              fontSize: '0.8125rem',
              fontFamily: 'var(--font-mono)',
              border: 'none',
              backgroundColor: device === 'desktop' ? 'var(--bg-input)' : 'transparent',
              color: device === 'desktop' ? 'var(--accent-orange)' : 'var(--text-secondary)',
              cursor: 'pointer',
              borderRadius: '2px',
              transition: 'all var(--motion-fast)'
            }}
          >
            <IconDesktop size={15} />
            <span>Desktop</span>
          </button>

          <button
            onClick={() => setDevice('tablet')}
            aria-pressed={device === 'tablet'}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              fontSize: '0.8125rem',
              fontFamily: 'var(--font-mono)',
              border: 'none',
              backgroundColor: device === 'tablet' ? 'var(--bg-input)' : 'transparent',
              color: device === 'tablet' ? 'var(--accent-orange)' : 'var(--text-secondary)',
              cursor: 'pointer',
              borderRadius: '2px',
              transition: 'all var(--motion-fast)'
            }}
          >
            <IconTablet size={15} />
            <span>Tablet</span>
          </button>

          <button
            onClick={() => setDevice('mobile')}
            aria-pressed={device === 'mobile'}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              fontSize: '0.8125rem',
              fontFamily: 'var(--font-mono)',
              border: 'none',
              backgroundColor: device === 'mobile' ? 'var(--bg-input)' : 'transparent',
              color: device === 'mobile' ? 'var(--accent-orange)' : 'var(--text-secondary)',
              cursor: 'pointer',
              borderRadius: '2px',
              transition: 'all var(--motion-fast)'
            }}
          >
            <IconMobile size={15} />
            <span>Mobile</span>
          </button>
        </div>
      </div>

      {/* Viewport Frame with reserved min-height to prevent jumping */}
      <div
        style={{
          width: '100%',
          backgroundColor: '#090C0F',
          border: '1px solid var(--border-default)',
          padding: '24px 16px',
          display: 'flex',
          justifyContent: 'center',
          overflowX: 'auto',
          minHeight: '380px'
        }}
      >
        <div
          className="responsive-preview-viewport"
          style={{
            maxWidth: deviceWidths[device],
            width: '100%',
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-default)',
            minHeight: '330px',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          {/* Mock Browser Header inside Viewport */}
          <div
            style={{
              backgroundColor: 'var(--bg-input)',
              borderBottom: '1px solid var(--border-subtle)',
              padding: '8px 12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '0.6875rem',
              fontFamily: 'var(--font-mono)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: 'var(--accent-orange)', fontWeight: '700' }}>
                COFFEE STORE
              </span>
              {device === 'desktop' && (
                <div style={{ display: 'flex', gap: '12px', color: 'var(--text-secondary)', marginLeft: '12px' }}>
                  <span>Shop</span>
                  <span>Origins</span>
                  <span>Roast Guide</span>
                </div>
              )}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ color: 'var(--text-tertiary)' }}>
                {device === 'desktop' ? '1100px (Desktop)' : device === 'tablet' ? '768px (Tablet)' : '390px (Mobile)'}
              </span>
              {device === 'mobile' ? (
                <IconMenu size={14} color="var(--text-secondary)" />
              ) : (
                <IconCart size={14} color="var(--text-secondary)" />
              )}
            </div>
          </div>

          {/* Adapted Content Area */}
          <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: device === 'mobile' ? '1fr' : '1fr 1.2fr',
                gap: device === 'mobile' ? '12px' : '20px',
                alignItems: 'center'
              }}
            >
              {/* Product Visual Container */}
              <div
                style={{
                  backgroundColor: 'var(--bg-input)',
                  border: '1px solid var(--border-subtle)',
                  aspectRatio: device === 'mobile' ? '16 / 9' : '1 / 1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative'
                }}
              >
                <svg width="48" height="60" viewBox="0 0 84 100" fill="none" aria-hidden="true">
                  <path d="M14 18H70L66 94H18L14 18Z" fill="#14181D" stroke="#303740" strokeWidth="1.5" />
                  <rect x="12" y="10" width="60" height="8" rx="1" fill="#1E252E" stroke="#303740" strokeWidth="1.2" />
                  <circle cx="42" cy="46" r="6" fill="#F27645" />
                </svg>
                <div style={{ position: 'absolute', bottom: '6px', fontSize: '0.625rem', fontFamily: 'var(--font-mono)', color: 'var(--text-tertiary)' }}>
                  MEDIA GALLERY SECTION
                </div>
              </div>

              {/* Product Info & Options */}
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--accent-orange)' }}>
                  DAWN SECTION · PDP
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: '700', fontSize: device === 'mobile' ? '1rem' : '1.15rem', color: 'var(--text-primary)' }}>
                  Single-Origin Yirgacheffe
                </div>
                <div style={{ fontSize: '0.875rem', fontWeight: '600', color: 'var(--text-primary)', margin: '4px 0 10px' }}>
                  $18.00 USD
                </div>

                {/* Option selector pills */}
                <div style={{ display: 'flex', gap: '6px', marginBottom: '12px' }}>
                  <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-mono)', padding: '3px 6px', border: '1px solid var(--accent-orange)', color: 'var(--text-primary)' }}>
                    Whole Bean
                  </span>
                  <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-mono)', padding: '3px 6px', border: '1px solid var(--border-default)', color: 'var(--text-secondary)' }}>
                    Filter
                  </span>
                  {device !== 'mobile' && (
                    <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-mono)', padding: '3px 6px', border: '1px solid var(--border-default)', color: 'var(--text-secondary)' }}>
                      Espresso
                    </span>
                  )}
                </div>

                {/* Add to Cart button */}
                <button
                  disabled
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    backgroundColor: 'var(--accent-orange)',
                    color: '#0B0D10',
                    fontWeight: '700',
                    fontSize: '0.75rem',
                    border: 'none',
                    clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%)',
                    cursor: 'default'
                  }}
                >
                  Add to Cart — $18.00
                </button>
              </div>
            </div>

            {/* Viewport Specific Behavior Annotation */}
            <div
              style={{
                marginTop: '14px',
                paddingTop: '8px',
                borderTop: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.6875rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-tertiary)'
              }}
            >
              <span>
                {device === 'desktop' && "DESKTOP: Full header, side-by-side gallery, horizontal variant pills."}
                {device === 'tablet' && "TABLET: Compact 2-column grid with 44px touch targets."}
                {device === 'mobile' && "MOBILE: Collapsed drawer navigation, full-width thumb-zone CTA."}
              </span>
              <span style={{ color: 'var(--accent-orange)' }}>
                {device === 'mobile' ? '1 COL' : '2 COL'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
