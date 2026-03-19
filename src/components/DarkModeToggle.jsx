import React, { useState, useEffect } from "react";

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      style={{
        background: "transparent",
        border: "1px solid rgba(245,158,11,0.3)",
        borderRadius: 6,
        color: "var(--amber)",
        padding: "4px 10px",
        fontSize: "0.75rem",
        fontFamily: "var(--font-display)",
        cursor: "pointer",
        transition: "all 0.2s",
      }}
      onMouseEnter={e => e.currentTarget.style.background = "rgba(245,158,11,0.1)"}
      onMouseLeave={e => e.currentTarget.style.background = "transparent"}
    >
      {darkMode ? "☀ Light" : "☽ Dark"}
    </button>
  );
}

export default DarkModeToggle;