import { useLayoutEffect, useRef, useState } from "react";

export default function Example5() {
  const [show, setShow] = useState(false);
  const boxRef = useRef(null);

  useLayoutEffect(() => {
    if (show) {
      boxRef.current?.offsetHeight; // Force reflow
      boxRef.current.style.opacity = "1";
      boxRef.current.style.transform = "translateY(0)";
    }
  }, [show]);

  return (
    <div>
      <button onClick={() => setShow((prev) => !prev)}>Toggle Box</button>
      <div
        ref={boxRef}
        style={{
          width: "100px",
          height: "100px",
          background: "tomato",
          opacity: 0,
          transform: "translateY(-20px)",
          transition: "opacity 0.5s, transform 0.5s",
        }}
      />
    </div>
  );
}
