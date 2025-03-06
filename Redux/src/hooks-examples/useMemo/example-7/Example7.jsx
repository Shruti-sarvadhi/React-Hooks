import React, { useState, useMemo } from 'react';
import StyledBox from './StyledBox';

function Example7() {
  const [size, setSize] = useState(100);

  const boxStyle = useMemo(() => ({
    width: `${size}px`,
    height: `${size}px`,
    backgroundColor: `hsl(${size % 360}, 50%, 50%)`,
  }), [size]);

  return (
    <div>
      <h1>Dynamic Box</h1>
      <input
        type="range"
        min="50"
        max="200"
        value={size}
        onChange={(e) => setSize(Number(e.target.value))}
      />
      <StyledBox style={boxStyle} />
    </div>
  );
}

export default Example7;