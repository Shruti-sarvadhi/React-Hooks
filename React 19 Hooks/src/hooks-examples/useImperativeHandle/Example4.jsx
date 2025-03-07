import { useRef } from "react";
import Timer from "./child/Timer";

export default function Example4() {
  const timerRef = useRef();

  return (
    <div>
      <Timer ref={timerRef} />
      <button onClick={() => timerRef.current.start()}>Start</button>
      <button onClick={() => timerRef.current.stop()}>Stop</button>
      <button onClick={() => timerRef.current.reset()}>Reset</button>
    </div>
  );
}
