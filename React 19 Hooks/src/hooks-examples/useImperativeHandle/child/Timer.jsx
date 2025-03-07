import { useState, useRef, useEffect, useImperativeHandle, forwardRef } from "react";

const Timer = forwardRef((_, ref) => {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  useImperativeHandle(ref, () => ({
    start: () => {
      if (!intervalRef.current) {
        intervalRef.current = setInterval(() => setTime((prev) => prev + 1), 1000);
      }
    },
    stop: () => {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    },
    reset: () => {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setTime(0);
    },
  }));

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return <p>Timer: {time}s</p>;
});

export default Timer;
