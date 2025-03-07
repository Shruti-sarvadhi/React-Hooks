import { useInsertionEffect } from "react";

export default function Example5({ primaryColor }) {
  useInsertionEffect(() => {
    document.documentElement.style.setProperty("--primary-color", primaryColor);
  }, [primaryColor]);

  return <button style={{ backgroundColor: "var(--primary-color)" }}>Click Me</button>;
}
