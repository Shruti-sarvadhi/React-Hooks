import React, { useRef, useState } from 'react';

function App() {
  const timerRef = useRef(null);
  const [time, setTime] = useState(0);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
  };

  return (
    <div>
      <p>Time: {time} seconds</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}

export default App;