import React, { useState, useEffect } from "react";

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

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
      className="ml-4 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600
                 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100
                 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
    >
      {darkMode ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}

export default DarkModeToggle;
