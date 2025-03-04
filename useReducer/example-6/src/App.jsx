import React, { useReducer, useEffect, useRef } from 'react';

const initialState = { time: 0, isRunning: false };

function reducer(state, action) {
  switch (action.type) {
    case 'start':
      return { ...state, isRunning: true };
    case 'stop':
      return { ...state, isRunning: false };
    case 'reset':
      return { time: 0, isRunning: false };
    case 'run':
      return { ...state, time: state.time + 1 };
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const intervalRef = useRef();

  useEffect(() => {
    if (state.isRunning) {
      intervalRef.current = setInterval(() => dispatch({ type: 'run' }), 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [state.isRunning]);

  return (
    <div>
      <p>Time: {state.time}s</p>
      <button onClick={() => dispatch({ type: 'start' })}>Start</button>
      <button onClick={() => dispatch({ type: 'stop' })}>Stop</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}

export default App;