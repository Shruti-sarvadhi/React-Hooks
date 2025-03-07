import { useRef } from "react";
import VideoPlayer from "./child/VideoPlayer";

export default function Example5() {
  const videoRef = useRef();

  return (
    <div>
      <VideoPlayer ref={videoRef} />
      <div className="mt-4">
        <button onClick={() => videoRef.current.play()}>Play</button>
        <button onClick={() => videoRef.current.pause()}>Pause</button>
        <button onClick={() => videoRef.current.restart()}>Restart</button>
      </div>
    </div>
  );
}
