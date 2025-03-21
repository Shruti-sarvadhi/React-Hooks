import React, { useState, useCallback } from 'react';

function Example5() {
  const [isOn, setIsOn] = useState(false);

  const toggle = useCallback(() => {
    setIsOn((prev) => !prev);
  }, []);

  return (
    <div>
      <h1>{isOn ? 'ON' : 'OFF'}</h1>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}

export default Example5;