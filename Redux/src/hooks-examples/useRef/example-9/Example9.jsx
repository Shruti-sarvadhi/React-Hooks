import { useRef, useState, useEffect } from "react";

function Example9() {
  const canvasRef = useRef(null);//canvasRef stores the reference to the canvas element
  const ctxRef = useRef(null);//ctxRef stores the 2D drawing context to perform drawing actions.
  const [drawing, setDrawing] = useState(false);

  useEffect(() => {
    
    const canvas = canvasRef.current;
    canvas.width = 600; // Set canvas width
    canvas.height = 400; // Set canvas height
    const ctx = canvas.getContext("2d");
    ctx.lineWidth = 3; // Set line thickness
    ctx.lineCap = "round"; // Round edges for smooth drawing
    ctx.strokeStyle = "black"; // Line color
    ctxRef.current = ctx;
  }, []);

  const startDrawing = (event) => {
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(
      event.nativeEvent.offsetX,
      event.nativeEvent.offsetY
    );
    setDrawing(true);
  };

  const draw = (event) => {
    if (!drawing) return;
    ctxRef.current.lineTo(
      event.nativeEvent.offsetX,
      event.nativeEvent.offsetY
    );
    ctxRef.current.stroke();
  };

  const stopDrawing = () => {
    ctxRef.current.closePath();
    setDrawing(false);
  };

  const clearCanvas = () => {
    ctxRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Canvas Drawing with useRef</h2>
      <canvas
        ref={canvasRef}
        style={{ border: "1px solid black", cursor: "crosshair" }}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
      ></canvas>
      <br />
      <button
        onClick={clearCanvas}
        style={{
          marginTop: "10px",
          padding: "10px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Clear Canvas
      </button>
    </div>
  );
}

export default Example9;
