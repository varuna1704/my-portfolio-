import React, { useState } from 'react';
import { IconSplitHandle, IconBlueprint, IconCheck } from './Icons';

export default function BlueprintComparison({ className = '' }) {
  // Slider position from 0 to 100 (50 is center split)
  const [sliderPos, setSliderPos] = useState(50);
  const [activeAnnotation, setActiveAnnotation] = useState(0);

  const annotations = [
    {
      title: "Reusable Liquid Section",
      code: "{% section 'product-hero.liquid' %}",
      desc: "Schema-driven modular block allowing merchant customization of badges, roast icons, and origin maps directly in the Dawn theme editor."
    },
    {
      title: "Dynamic Variant Selector",
      code: "{% render 'grind-variant-picker' %}",
      desc: "Synchronizes Whole Bean, Filter, and Espresso SKU selections without full page reloads, maintaining fast mobile interactions."
    },
    {
      title: "Drawer Cart Pathway",
      code: "{% render 'cart-drawer-trigger' %}",
      desc: "Lightweight AJAX cart slide-out that updates item counts and subtotal instantly with keyboard focus trap."
    }
  ];

  return (
    <div className={`blueprint-comparison-wrapper ${className}`} style={{ width: '100%' }}>
      {/* Top Bar with Mode Labels & Keyboard Hint */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '8px 12px',
          backgroundColor: 'var(--bg-input)',
          border: '1px solid var(--border-default)',
          borderBottom: 'none',
          fontSize: '0.75rem',
          fontFamily: 'var(--font-mono)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ color: 'var(--accent-orange)' }}>
            <IconBlueprint size={15} />
          </span>
          <span style={{ color: sliderPos < 50 ? 'var(--accent-orange)' : 'var(--text-secondary)' }}>
            STRUCTURE ({100 - sliderPos}%)
          </span>
          <span style={{ color: 'var(--text-tertiary)' }}>·</span>
          <span style={{ color: sliderPos >= 50 ? 'var(--accent-orange)' : 'var(--text-secondary)' }}>
            FINISHED UI ({sliderPos}%)
          </span>
        </div>

        <div style={{ color: 'var(--text-tertiary)', fontSize: '0.6875rem' }}>
          Drag slider or use Left / Right arrow keys
        </div>
      </div>

      {/* Interactive Draggable / Keyboard Split Viewport */}
      <div
        className="blueprint-comparison-container"
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16 / 10',
          overflow: 'hidden',
          border: '1px solid var(--border-default)',
          backgroundColor: '#0B0D10'
        }}
      >
        {/* LAYER 1 (Underneath): STRUCTURE / BLUEPRINT VIEW */}
        <div
          className="blueprint-layer blueprint-layer-structure"
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'clamp(16px, 3vw, 28px)'
          }}
        >
          {/* Blueprint Wireframe Graphic Layout */}
          <div
            style={{
              width: '100%',
              height: '100%',
              border: '1.5px dashed rgba(242, 118, 69, 0.4)',
              borderRadius: '2px',
              padding: '16px',
              display: 'grid',
              gridTemplateColumns: '1fr 1.2fr',
              gap: '20px',
              alignItems: 'center',
              position: 'relative'
            }}
          >
            {/* Blueprint Section Tag */}
            <div
              style={{
                position: 'absolute',
                top: '6px',
                left: '8px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6875rem',
                color: 'var(--accent-orange)',
                backgroundColor: 'rgba(11, 13, 16, 0.9)',
                padding: '1px 6px',
                border: '1px solid var(--border-subtle)'
              }}
            >
              &#123;% section 'product-hero' %&#125;
            </div>

            {/* Left Wireframe: Product Silhouette */}
            <div
              style={{
                height: '100%',
                border: '1px dashed #303740',
                backgroundColor: 'rgba(20, 24, 29, 0.6)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                position: 'relative'
              }}
            >
              <div style={{ width: '48px', height: '64px', border: '1.5px solid var(--accent-orange)', opacity: 0.6 }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', color: 'var(--text-tertiary)' }}>
                [ MEDIA GALLERY COMPONENT ]
              </span>
            </div>

            {/* Right Wireframe: Schemas and Fields */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', justifyContent: 'center' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', color: '#10B981' }}>
                &#123;&#123; product.vendor &#125;&#125; · ORIGIN TAG
              </div>
              <div style={{ height: '14px', width: '80%', backgroundColor: '#21262E', border: '1px solid #303740' }} />
              <div style={{ height: '10px', width: '35%', backgroundColor: 'rgba(242, 118, 69, 0.2)', border: '1px solid var(--accent-orange)' }} />
              
              <div style={{ margin: '6px 0', borderTop: '1px dashed #21262E', paddingTop: '6px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', color: 'var(--text-tertiary)' }}>
                  &#123;% render 'variant-selector' %&#125;
                </span>
                <div style={{ display: 'flex', gap: '6px', marginTop: '4px' }}>
                  <div style={{ width: '40px', height: '18px', border: '1px dashed #303740' }} />
                  <div style={{ width: '40px', height: '18px', border: '1px dashed #303740' }} />
                  <div style={{ width: '40px', height: '18px', border: '1px dashed #303740' }} />
                </div>
              </div>

              <div style={{ height: '24px', width: '90%', border: '1px dashed var(--accent-orange)', backgroundColor: 'rgba(242, 118, 69, 0.1)' }} />
            </div>
          </div>
        </div>

        {/* LAYER 2 (On Top): FINISHED UI VIEW (Clipped by slider position) */}
        <div
          className="blueprint-layer"
          style={{
            position: 'absolute',
            inset: 0,
            clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)`,
            backgroundColor: 'var(--bg-card)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'clamp(16px, 3vw, 28px)',
            transition: 'clip-path 0.05s ease-out'
          }}
        >
          {/* Finished UI Graphic Layout */}
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: 'var(--bg-input)',
              border: '1px solid var(--border-default)',
              borderRadius: '2px',
              padding: '16px',
              display: 'grid',
              gridTemplateColumns: '1fr 1.2fr',
              gap: '20px',
              alignItems: 'center',
              position: 'relative'
            }}
          >
            {/* Live Indicator */}
            <div
              style={{
                position: 'absolute',
                top: '6px',
                left: '8px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6875rem',
                color: 'var(--text-primary)',
                backgroundColor: 'var(--bg-card)',
                padding: '1px 6px',
                border: '1px solid var(--border-default)'
              }}
            >
              DAWN 2.0 · FINISHED THEME
            </div>

            {/* Left Column: Polished Product Visual */}
            <div
              style={{
                height: '100%',
                backgroundColor: '#101419',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}
            >
              <svg width="68" height="82" viewBox="0 0 84 100" fill="none" aria-hidden="true">
                <path d="M14 18H70L66 94H18L14 18Z" fill="#14181D" stroke="#303740" strokeWidth="1.5" />
                <rect x="12" y="10" width="60" height="8" rx="1" fill="#1E252E" stroke="#303740" strokeWidth="1.2" />
                <rect x="24" y="32" width="36" height="42" rx="1" fill="#0B0D10" stroke="#F27645" strokeWidth="1" />
                <circle cx="42" cy="46" r="6" fill="#F27645" />
                <line x1="30" y1="58" x2="54" y2="58" stroke="#F4F1EA" strokeWidth="1.5" />
                <line x1="33" y1="64" x2="51" y2="64" stroke="#AAB2BD" strokeWidth="1" />
              </svg>
              <div style={{ marginTop: '6px', fontFamily: 'var(--font-mono)', fontSize: '0.625rem', color: 'var(--accent-orange)' }}>
                YIRGACHEFFE SINGLE-ORIGIN
              </div>
            </div>

            {/* Right Column: Polished Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ color: '#F59E0B', fontSize: '0.75rem' }}>★★★★★</span>
                <span style={{ fontSize: '0.6875rem', color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)' }}>(42 reviews)</span>
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: '700', fontSize: '1.15rem', color: 'var(--text-primary)' }}>
                Artisan Reserve Roast
              </div>
              <div style={{ fontSize: '0.9375rem', fontWeight: '600', color: 'var(--text-primary)' }}>
                $18.00 <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: '400' }}>· In Stock</span>
              </div>

              {/* Grind Selector */}
              <div style={{ display: 'flex', gap: '4px', margin: '4px 0' }}>
                <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-mono)', padding: '2px 6px', backgroundColor: 'var(--bg-card)', border: '1px solid var(--accent-orange)', color: 'var(--text-primary)' }}>Whole</span>
                <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-mono)', padding: '2px 6px', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-default)', color: 'var(--text-secondary)' }}>Filter</span>
                <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-mono)', padding: '2px 6px', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-default)', color: 'var(--text-secondary)' }}>Espresso</span>
              </div>

              {/* Add to Cart button */}
              <div
                style={{
                  padding: '7px 12px',
                  backgroundColor: 'var(--accent-orange)',
                  color: '#0B0D10',
                  fontWeight: '700',
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-sans)',
                  textAlign: 'center',
                  clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%)'
                }}
              >
                Add to Cart — $18.00
              </div>
            </div>
          </div>
        </div>

        {/* Divider Bar & Handle Indicator */}
        <div
          className="blueprint-divider-handle"
          style={{
            left: `${sliderPos}%`
          }}
        >
          <div className="blueprint-handle-button" aria-hidden="true">
            <IconSplitHandle size={16} />
          </div>
        </div>

        {/* Fully Accessible Native Range Slider covering viewport */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPos}
          onChange={(e) => setSliderPos(Number(e.target.value))}
          className="blueprint-range-slider"
          aria-label="Interactive slider to compare Liquid blueprint wireframe and finished store interface"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow={sliderPos}
        />
      </div>

      {/* 3 Verified Technical Annotations */}
      <div
        style={{
          marginTop: '16px',
          padding: '16px',
          backgroundColor: 'var(--bg-input)',
          border: '1px solid var(--border-default)',
          borderRadius: '2px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', flexWrap: 'wrap' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--text-tertiary)', textTransform: 'uppercase' }}>
            ARCHITECTURAL ANNOTATIONS:
          </span>
          <div style={{ display: 'flex', gap: '6px' }}>
            {annotations.map((ann, i) => (
              <button
                key={i}
                onClick={() => setActiveAnnotation(i)}
                style={{
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  padding: '3px 8px',
                  backgroundColor: activeAnnotation === i ? 'var(--bg-card)' : 'transparent',
                  border: `1px solid ${activeAnnotation === i ? 'var(--accent-orange)' : 'var(--border-default)'}`,
                  color: activeAnnotation === i ? 'var(--text-primary)' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  borderRadius: '2px'
                }}
              >
                {i + 1}. {ann.title}
              </button>
            ))}
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
            <span style={{ fontFamily: 'var(--font-sans)', fontWeight: '600', color: 'var(--text-primary)', fontSize: '0.9375rem' }}>
              {annotations[activeAnnotation].title}
            </span>
            <code
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--accent-orange)',
                backgroundColor: 'var(--bg-card)',
                padding: '2px 6px',
                border: '1px solid var(--border-subtle)'
              }}
            >
              {annotations[activeAnnotation].code}
            </code>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: '1.6' }}>
            {annotations[activeAnnotation].desc}
          </p>
        </div>
      </div>
    </div>
  );
}
