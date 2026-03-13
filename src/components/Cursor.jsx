import { useState, useEffect } from "react";

export default function Cursor() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [big, setBig] = useState(false);

  useEffect(() => {
    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    const onOver = (e) => setBig(!!e.target.closest("a, button, [data-hover]"));
    
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  return (
    <>
      <style>{`
        * { cursor: none !important; }
        @media (max-width: 1024px) {
          * { cursor: auto !important; }
          .custom-cursor { display: none !important; }
        }
      `}</style>
      <div 
        className="custom-cursor"
        style={{
          position: "fixed", left: pos.x - 6, top: pos.y - 6,
          width: 12, height: 12, borderRadius: "50%", background: "#ff6b35",
          pointerEvents: "none", zIndex: 9999,
          transform: big ? "scale(2.2)" : "scale(1)",
          transition: "transform 0.15s",
          mixBlendMode: "screen",
        }} 
      />
      <div 
        className="custom-cursor"
        style={{
          position: "fixed",
          left: big ? pos.x - 28 : pos.x - 20,
          top: big ? pos.y - 28 : pos.y - 20,
          width: big ? 56 : 40, height: big ? 56 : 40,
          borderRadius: "50%", border: "1.5px solid #ff6b3555",
          pointerEvents: "none", zIndex: 9998,
          transition: "all 0.18s ease",
        }} 
      />
    </>
  );
}
