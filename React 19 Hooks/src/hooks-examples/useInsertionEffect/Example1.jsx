import { useInsertionEffect } from "react";

export default function Example1() {
  useInsertionEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = `
      body {
        background-color: #f5f5f5;
        font-family: Arial, sans-serif;
      }
    `;
    document.head.appendChild(styleTag);

    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  return <h2 style={{"color":"black"}}>Global Styles Applied with useInsertionEffect: background color white</h2>;
}
