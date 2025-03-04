import React, { useState, useCallback } from 'react';
import Counter from './Counter';

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const incrementWithLimit = useCallback(() => {
    setCount((prev) => (prev < 10 ? prev + step : prev));
  }, [step]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <input
        type="number"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      />
      <p>will not increment after 10</p>
      <Counter onIncrement={incrementWithLimit} />
    </div>
  );
}

export default App;