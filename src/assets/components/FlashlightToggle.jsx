import React from "react";

function FlashlightToggle({ active, setActive }) {
  return (
    <button
      onClick={() => setActive(!active)}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 10000,
        padding: "10px 20px",
        borderRadius: "8px",
        background: active ? "#ffc107" : "#333",
        color: active ? "#000" : "#fff",
        border: "none",
        cursor: "pointer",
        boxShadow: "0 0 10px rgba(0,0,0,0.6)"
      }}
    >
      {active ? "Light Off" : "Dark Mode"}
    </button>
  );
}

export default FlashlightToggle;
