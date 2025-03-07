import { useLayoutEffect, useState } from "react";

export default function Example4() {
  const [items, setItems] = useState(Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`));

  useLayoutEffect(() => {
    window.scrollTo(0, sessionStorage.getItem("scrollPos") || 0);
  }, []);

  const addItems = () => {
    sessionStorage.setItem("scrollPos", window.scrollY);
    setItems((prev) => [...prev, `Item ${prev.length + 1}`]);
  };

  return (
    <div style={{ height: "500px", overflowY: "auto" }}>
      <button onClick={addItems}>Add Item</button>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
