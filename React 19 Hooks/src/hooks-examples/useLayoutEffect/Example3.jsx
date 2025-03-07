import { useLayoutEffect, useRef, useState } from "react";

export default function Example3() {
  const boxRef = useRef(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    setHeight(boxRef.current?.offsetHeight || 0);
  }, []);

  return (
    <div>
      <div ref={boxRef} style={{ padding: "20px", background: "lightblue" }}>
        This box height is measured.
      </div>
      <p>Box Height: {height}px</p>
    </div>
  );
}
