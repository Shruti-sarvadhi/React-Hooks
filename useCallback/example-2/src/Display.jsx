import React from 'react';

const Display = React.memo(({ onMultiply }) => {
  console.log('Display rendered');
  return <button onClick={onMultiply}>Multiply Value</button>;
});

export default Display;