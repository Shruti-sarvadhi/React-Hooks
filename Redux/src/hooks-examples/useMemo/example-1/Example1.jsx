import React, { useState, useMemo } from "react";

function Example1() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(5);


  // recalculating only when num changes.
  const factorial = useMemo(() => {
    console.log("Calculating factorial...");
    return calculateFactorial(number);
  }, [number]);

  function calculateFactorial(n) {
    if (n <= 0) return 1;
    return n * calculateFactorial(n - 1);
  }

  return (
    <div>
      <h1>Factorial of {number}: {factorial}</h1>
      <button onClick={() => setNumber(number + 1)}>Increase Number</button>
      <button onClick={() => setCount(count + 1)}>Re-render ({count})</button>
    </div>
  );
}

export default Example1;
