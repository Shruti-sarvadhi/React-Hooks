import { useInsertionEffect } from "react";

export default function Example4() {
  useInsertionEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = `
      .child-component {
        color: red !important;
        font-weight: bold;
      }
    `;
    document.head.appendChild(styleTag);

    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  return <ChildComponent />;
}

function ChildComponent() {
  return <p className="child-component">This text is always red.</p>;
}
