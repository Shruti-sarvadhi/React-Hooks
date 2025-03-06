import React from 'react'
import Child from './Child';
import { useState,useMemo } from 'react';

const Example3 = () => {
  const [count, setCount] = useState(0);
  const memoizedValue = useMemo(() => ({ value: `memoized data` }), []);

  return (
    <div>
       <button onClick={() => setCount(count + 1)}>Re-render ({count})</button>
       <Child data={memoizedValue}/>
    </div>
  )
}

export default Example3
