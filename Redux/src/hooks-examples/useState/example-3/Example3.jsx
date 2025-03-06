import React from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggleTheme } from "@/store/slices/app/themeSlice";

const Example3 = () => {
  const dispatch = useAppDispatch();
  const isDarkMode = useAppSelector((state) => state.app.theme.isDarkMode);

  return (
    <div style={{ background: isDarkMode ? "black" : "white", color: isDarkMode ? "white" : "black", padding: "20px" }}>
      <p>{isDarkMode ? "Dark Mode" : "Light Mode"}</p>
      <button onClick={() => dispatch(toggleTheme())}>
        {isDarkMode ? "🌙" : "☀️"}
      </button>
    </div>
  );
};

export default Example3;
