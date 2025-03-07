import { useState, useDebugValue } from "react";

function expensiveComputation(num) {
  console.log("Running expensive computation...");
  let result = 0;
  for (let i = 0; i < 1e9; i++) {
    result += Math.sqrt(num * i); // Simulating heavy calculation
  }
  return result;
}

function useExpensiveCalculation(initialValue) {
  const [value, setValue] = useState(initialValue);

  // Expensive calculation runs ONLY when React DevTools request it
  useDebugValue(value, (v) => `Computed: ${expensiveComputation(v)}`);

  return { value, setValue };
}

export default useExpensiveCalculation;
