import React from 'react'
import { memo } from 'react'

const Child2 = memo(({ value }) => {
    console.log("Child 2 rerendered");
  
    return (
      <p>Child 2- {value}</p>
    );
  });

export default Child2
