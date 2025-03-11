import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { setTheme } from "@/store/slices/settings/themeSlice";
import Alert from "@/components/Alert";

const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.settings.theme.theme);
  const [alert, setAlert] = useState<{ type: "success"; message: string } | null>(null);

  // Apply theme to the body
  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
    document.body.style.backgroundColor = theme === "dark" ? "#1a202c" : "#ffffff"; // Dark: Gray-900, Light: White
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    dispatch(setTheme(newTheme));
    setAlert({ type: "success", message: `Switched to ${newTheme} mode` });

    // Hide alert after 2 seconds
    setTimeout(() => setAlert(null), 2000);
  };

  return (
    <div className="p-4 border rounded shadow bg-white dark:bg-gray-800">
      {/* Show alert when theme changes */}
      {alert && <Alert type={alert.type} message={alert.message} />}

      <button
        onClick={toggleTheme}
        className="px-4 py-2 bg-blue-600 text-white rounded w-full"
      >
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
};

export default ThemeSwitcher;
