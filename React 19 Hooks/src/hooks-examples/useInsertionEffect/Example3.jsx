import { useInsertionEffect } from "react";

export default function Example3() {
  useInsertionEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = `
      .third-party-button {
        background-color: blue !important;
        color: white !important;
        padding: 10px 20px;
        border: none;
        cursor: pointer;
      }
    `;
    document.head.appendChild(styleTag);

    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  return <button className="third-party-button">Styled Button</button>;
}
