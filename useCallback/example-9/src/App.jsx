import React, { useState, useCallback, useEffect } from 'react';
import Timer from './Timer';

function App() {
  const [seconds, setSeconds] = useState(0);

  //Memoizes a function to reset a timer
  const resetTimer = useCallback(() => {
    setSeconds(0);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Timer seconds={seconds} onReset={resetTimer} />
    </div>
  );
}

export default App;