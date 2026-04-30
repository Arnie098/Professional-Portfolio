import React, { useState, useEffect } from "react";
import "./Css/FlashlightOverlay.css";

const FlashlightOverlay = () => {
  const [pos, setPos] = useState({ x: -9999, y: -9999 });
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const handleMove = (e) => {
      if (enabled) setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [enabled]);

  return (
    <>
      {enabled && (
        <div
          className="flashlight-overlay"
          style={{
            background: `radial-gradient(circle 150px at ${pos.x}px ${pos.y}px, transparent 0%, rgba(0, 0, 0, 0.95) 100%)`,
          }}
        />
      )}
      <button
        className="flashlight-toggle"
        onClick={() => setEnabled((prev) => !prev)}
      >
        {enabled ? "Dark-mode Off" : "Dark-mode On"}
      </button>
    </>
  );
};

export default FlashlightOverlay;
