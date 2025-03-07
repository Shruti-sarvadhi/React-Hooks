import { useInsertionEffect } from "react";

export default function Example2({ theme }) {
  useInsertionEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = `
      .custom-box {
        padding: 20px;
        border-radius: 10px;
        background-color: ${theme === "dark" ? "#333" : "#fff"};
        color: ${theme === "dark" ? "#fff" : "#000"};
      }
    `;
    document.head.appendChild(styleTag);

    return () => {
      document.head.removeChild(styleTag);
    };
  }, [theme]);

  return <div className="custom-box">Themed Box</div>;
}
