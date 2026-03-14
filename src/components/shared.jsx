import { useRef, useState, useEffect } from "react";

export function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

export function SectionLabel({ label }) {
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
