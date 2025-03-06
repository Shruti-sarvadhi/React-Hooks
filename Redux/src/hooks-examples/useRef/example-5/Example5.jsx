import { useRef } from "react";

function Example5() {
  const boxRef = useRef(null);
  let position = 0;

  const moveBox = () => {
    if (boxRef.current) {
      position += 100;
      boxRef.current.style.transform = `translateX(${position}px)`;
      boxRef.current.style.transition = "transform 0.5s ease"; // Smooth animation
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <div
        ref={boxRef}
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "blue",
          marginBottom: "10px",
        }}
      ></div>
      <button onClick={moveBox} style={{ padding: "10px", backgroundColor: "black", color: "white", border: "none", cursor: "pointer" }}>
        Move Box
      </button>
    </div>
  );
}

export default Example5;
