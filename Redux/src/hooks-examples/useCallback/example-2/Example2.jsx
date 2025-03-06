import React, { useState, useCallback } from 'react';
import Display from './Display';

function Example2() {
  const [value, setValue] = useState(1);
  const [multiplier, setMultiplier] = useState(2);

  const multiplyValue = useCallback(() => {
    setValue((prev) => prev * multiplier);
  }, [multiplier]); 

  return (
    <div>
      <h1>Value: {value}</h1>
      <button onClick={() => setMultiplier((m) => m + 1)}>
        Change Multiplier: {multiplier}
      </button>
      <Display onMultiply={multiplyValue} />
    </div>
  );
}

export default Example2
