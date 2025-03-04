import React from 'react'
import { memo } from 'react'

const Child1 = memo(({ value }) => {
    console.log("Child 1 rerendered");
  
    return (
      <p>Child 1 - {value}</p>
    );
  });

export default Child1
