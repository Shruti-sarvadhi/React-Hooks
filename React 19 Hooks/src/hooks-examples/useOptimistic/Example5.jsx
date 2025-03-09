import { useState, useOptimistic, useEffect } from "react";

export default function Example5() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  // Optimistic update: assumes the theme change will succeed
  const [optimisticTheme, setOptimisticTheme] = useOptimistic(theme);

  useEffect(() => {
    document.body.className = optimisticTheme; // Apply theme to body
  }, [optimisticTheme]);

  const toggleTheme = () => {
    const newTheme = optimisticTheme === "light" ? "dark" : "light";
    setOptimisticTheme(newTheme);

    try {
      localStorage.setItem("theme", newTheme); // Save to local storage
      setTheme(newTheme); // Confirm change
    } catch (error) {
      console.error("Failed to save theme:", error);
      setOptimisticTheme(theme); // Revert if error occurs
    }
  };

  return (
    <div className="p-4 text-center">
      <h2 className="mb-4">Optimistic Theme Switcher</h2>
      <p>Current Theme: {optimisticTheme}</p>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded bg-blue-500 text-white"
      >
        Toggle Theme
      </button>
    </div>
  );
}
