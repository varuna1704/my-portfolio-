import React from 'react';

const defaultProps = {
  width: 20,
  height: 20,
  strokeWidth: 1.85,
  color: 'currentColor',
  'aria-hidden': 'true',
};

/**
 * 1. Explore Work:
 * Browser window with clipped top tab and outward arrow
 */
export function IconExploreWork({ size = 20, color = 'currentColor', className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={1.85}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...defaultProps}
      {...props}
    >
      {/* Browser frame with clipped top-right corner */}
      <path d="M3 7V19C3 19.5523 3.44772 20 4 20H20C20.5523 20 21 19.5523 21 19V9L18 6H4C3.44772 6 3 6.44772 3 7Z" />
      {/* Top bar divider */}
      <line x1="3" y1="10" x2="21" y2="10" />
      {/* Browser address / controls dots */}
      <circle cx="6" cy="8" r="0.8" fill={color} />
      <circle cx="9" cy="8" r="0.8" fill={color} />
      {/* Outward arrow exiting window */}
      <path d="M12 15L17 15L17 10" />
      <line x1="17" y1="15" x2="11" y2="21" strokeOpacity="0.4" />
      <line x1="11" y1="15" x2="17" y2="15" />
    </svg>
  );
}

/**
 * 2. Resume:
 * Document with folded corner and clean downward download arrow
 */
export function IconResume({ size = 20, color = 'currentColor', className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={1.85}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...defaultProps}
      {...props}
    >
      {/* Sheet outline with folded top-right corner */}
      <path d="M14 2H5C4.44772 2 4 2.44772 4 3V21C4 21.5523 4.44772 22 5 22H19C19.5523 22 20 21.5523 20 21V8L14 2Z" />
      {/* Fold corner geometry */}
      <polyline points="14 2 14 8 20 8" />
      {/* Download arrow inside */}
      <line x1="12" y1="11" x2="12" y2="17" />
      <polyline points="9 14 12 17 15 14" />
    </svg>
  );
}

/**
 * 3. Case Study:
 * Two overlapping interface panels suggesting a closer look at the work
 */
export function IconCaseStudy({ size = 20, color = 'currentColor', className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={1.85}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...defaultProps}
      {...props}
    >
      {/* Background panel */}
      <path d="M7 4H19C19.5523 4 20 4.44772 20 5V15" strokeOpacity="0.6" />
      {/* Foreground primary panel */}
      <rect x="4" y="8" width="13" height="12" rx="1.5" />
      {/* Inspection line / lens detail */}
      <line x1="7" y1="12" x2="13" y2="12" />
      <line x1="7" y1="15" x2="11" y2="15" />
    </svg>
  );
}

/**
 * 4. Live Website:
 * Browser window with a diagonal outward arrow
 */
export function IconLiveWebsite({ size = 20, color = 'currentColor', className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={1.85}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...defaultProps}
      {...props}
    >
      {/* Browser frame */}
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      {/* Diagonal outward arrow */}
      <path d="M12 14L16 14L16 10" />
      <line x1="16" y1="14" x2="10" y2="20" strokeOpacity="0.3" />
      <line x1="11" y1="15" x2="16" y2="10" />
    </svg>
  );
}

/**
 * 5. Source Code:
 * Custom code-bracket symbol with angular slash
 */
export function IconSourceCode({ size = 20, color = 'currentColor', className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={1.85}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...defaultProps}
      {...props}
    >
      {/* Left bracket */}
      <polyline points="8 7 3 12 8 17" />
      {/* Right bracket */}
      <polyline points="16 7 21 12 16 17" />
      {/* Central angular slash */}
      <line x1="14" y1="4" x2="10" y2="20" />
    </svg>
  );
}

/**
 * 6. Contact:
 * An open envelope with a small message card sliding up
 */
export function IconContact({ size = 20, color = 'currentColor', className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={1.85}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...defaultProps}
      {...props}
    >
      {/* Message card sliding up */}
      <path d="M7 9V5C7 4.44772 7.44772 4 8 4H16C16.5523 4 17 4.44772 17 5V9" strokeOpacity="0.75" />
      <line x1="9" y1="7" x2="15" y2="7" strokeOpacity="0.75" />
      {/* Envelope body */}
      <path d="M3 9C3 8.44772 3.44772 8 4 8H20C20.5523 8 21 8.44772 21 9V19C21 19.5523 20.5523 20 20 20H4C3.44772 20 3 19.5523 3 19V9Z" />
      {/* V-fold lines */}
      <polyline points="3 9 12 14 21 9" />
    </svg>
  );
}

/**
 * 7. Navigation Icons:
 * Menu, Close, Back, Directional Arrow
 */
export function IconMenu({ size = 22, color = 'currentColor', className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...defaultProps}
      {...props}
    >
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="16" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </svg>
  );
}

export function IconClose({ size = 22, color = 'currentColor', className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...defaultProps}
      {...props}
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export function IconArrowRight({ size = 18, color = 'currentColor', className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...defaultProps}
      {...props}
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export function IconArrowUpRight({ size = 18, color = 'currentColor', className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...defaultProps}
      {...props}
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

export function IconBack({ size = 18, color = 'currentColor', className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...defaultProps}
      {...props}
    >
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  );
}

/**
 * 8. Social:
 * Recognized GitHub and LinkedIn marks
 */
export function IconGitHub({ size = 20, color = 'currentColor', className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...defaultProps}
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export function IconLinkedIn({ size = 20, color = 'currentColor', className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...defaultProps}
      {...props}
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m-1.4 9.74h2.79v-8.37H5.06v8.37z" />
    </svg>
  );
}

/**
 * 9. Auxiliary Utility Icons
 */
export function IconCheck({ size = 18, color = 'currentColor', className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...defaultProps}
      {...props}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function IconSparkles({ size = 18, color = 'currentColor', className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={1.85}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...defaultProps}
      {...props}
    >
      <path d="M12 2L14.4 8.6L21 11L14.4 13.4L12 20L9.6 13.4L3 11L9.6 8.6L12 2Z" />
    </svg>
  );
}
