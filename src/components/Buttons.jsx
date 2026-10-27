import React from 'react';
import '../styles/buttons.css';
import {
  IconExploreWork,
  IconResume,
  IconArrowRight,
  IconArrowUpRight,
  IconLiveWebsite,
  IconSourceCode,
  IconContact
} from './Icons';

/**
 * A. Hero: Editorial Underline Action
 */
export function EditorialAction({ label = "Explore My Work", href = "#work", onClick, className = '' }) {
  const Component = href ? 'a' : 'button';
  return (
    <Component
      href={href}
      onClick={onClick}
      className={`btn-editorial-underline ${className}`}
    >
      <span>{label}</span>
      <span className="icon-box">
        <IconExploreWork size={19} />
      </span>
      <span className="underline-bar" aria-hidden="true" />
    </Component>
  );
}

/**
 * B. Resume: Clipped-Corner Button
 */
export function ClippedButton({
  label = "View Resume",
  href = "https://drive.google.com/file/d/1_S__H96JjAN67uPp7c1F7o6wYR00hOUS/view?usp=drive_link",
  target = "_blank",
  rel = "noopener noreferrer",
  download,
  onClick,
  className = ''
}) {
  const Component = href ? 'a' : 'button';
  return (
    <Component
      href={href}
      target={target}
      rel={rel}
      download={download}
      onClick={onClick}
      className={`btn-clipped-corner ${className}`}
    >
      <IconResume size={18} />
      <span>{label}</span>
    </Component>
  );
}

/**
 * C. Projects: Split-Arrow Button
 */
export function SplitArrowButton({ label = "View Case Study", onClick, href, className = '' }) {
  const Component = href ? 'a' : 'button';
  return (
    <Component
      href={href}
      onClick={onClick}
      className={`btn-split-arrow ${className}`}
    >
      <span className="btn-label">{label}</span>
      <span className="arrow-compartment" aria-hidden="true">
        <IconArrowRight size={16} />
      </span>
    </Component>
  );
}

/**
 * D. Project Utilities: Compact Icon Actions
 */
export function UtilityButton({
  type = "live", // "live" | "code"
  href,
  label,
  className = '',
  tooltip
}) {
  const isLive = type === "live";
  const defaultLabel = isLive ? "Live Site" : "Source Code";
  const displayLabel = label !== undefined ? label : defaultLabel;
  const accessibleName = tooltip || displayLabel || defaultLabel;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-utility-icon ${className}`}
      aria-label={accessibleName}
      title={accessibleName}
    >
      {isLive ? <IconLiveWebsite size={16} /> : <IconSourceCode size={16} />}
      {displayLabel && <span>{displayLabel}</span>}
    </a>
  );
}

/**
 * E. Contact: Offset-Shadow Button
 */
export function OffsetShadowButton({
  label = "Send Message",
  loading = false,
  disabled = false,
  type = "submit",
  onClick,
  className = ''
}) {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={`btn-offset-shadow ${className}`}
    >
      {loading ? (
        <>
          <span style={{ display: 'inline-block', animation: 'spin 1s linear infinite' }}>⏳</span>
          <span>Sending Message...</span>
        </>
      ) : (
        <>
          <IconContact size={18} />
          <span>{label}</span>
        </>
      )}
    </button>
  );
}
