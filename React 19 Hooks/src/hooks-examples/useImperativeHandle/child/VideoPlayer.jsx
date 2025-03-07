import { useRef, useImperativeHandle, forwardRef } from "react";

const VideoPlayer = forwardRef((_, ref) => {
  const videoRef = useRef();

  useImperativeHandle(ref, () => ({
    play: () => videoRef.current.play(),
    pause: () => videoRef.current.pause(),
    restart: () => {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    },
  }));

  return (
    <video ref={videoRef} width="400" controls>
      <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
});

export default VideoPlayer;
