import React, { useRef } from 'react';

function App() {
  const videoRef = useRef(null);

  const playVideo = () => videoRef.current.play();
  const pauseVideo = () => videoRef.current.pause();

  return (
    <div>
      <video 
        ref={videoRef}
        width="400"
        controls
      >
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
      </video>
      <div>
        <button onClick={playVideo}>Play</button>
        <button onClick={pauseVideo}>Pause</button>
      </div>
    </div>
  );
}

export default App;