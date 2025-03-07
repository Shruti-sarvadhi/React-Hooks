import { useState, useDebugValue } from "react";

function useTheme() {
  const [theme, setTheme] = useState("light");

  useDebugValue(theme === "light" ? "🌞 Light Mode" : "🌙 Dark Mode");

  return { theme, toggleTheme: () => setTheme(theme === "light" ? "dark" : "light") };
}

export default useTheme