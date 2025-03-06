import React, { useRef, useEffect } from 'react';
import { useState } from 'react';

function Example8() {
  const renderCount = useRef(0);
  const [count,setCount]=useState(0)

  useEffect(() => {
    renderCount.current += 1;
  });

  return (
    <div>
      <p>This component has rendered {renderCount.current} times.</p>
      <button onClick={()=>setCount(count+1)}>render</button>
    </div>
  );
}

export default Example8;