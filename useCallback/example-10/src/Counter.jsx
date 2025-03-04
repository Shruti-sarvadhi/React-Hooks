import React from 'react';

const Counter = React.memo(({ onIncrement }) => {
  console.log('Counter rendered');
  return <button onClick={onIncrement}>Increment with Limit</button>;
});

export default Counter;