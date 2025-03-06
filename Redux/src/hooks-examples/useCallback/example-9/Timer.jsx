import React from 'react';

const Timer = React.memo(({ seconds, onReset }) => {
  console.log('Timer rendered');
  return (
    <div>
      <p>Seconds: {seconds}</p>
      <button onClick={onReset}>Reset</button>
    </div>
  );
});

export default Timer;