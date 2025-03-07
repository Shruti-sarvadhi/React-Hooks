import { useState, useTransition } from "react";

export default function Example4() {
  const [number, setNumber] = useState(2);
  const [result, setResult] = useState(null);
  const [isPending, startTransition] = useTransition();

  const expensiveCalculation = (num) => {
    let total = 1;
    for (let i = 1; i <= 10000000; i++) {
      total = (total * num) % 10000007;
    }
    return total;
  };

  const handleCalculate = () => {
    startTransition(() => {
      setResult(expensiveCalculation(number));
    });
  };

  return (
    <div>
      <input type="number" value={number} onChange={(e) => setNumber(Number(e.target.value))} />
      <button onClick={handleCalculate}>Calculate</button>
      {isPending && <p>Processing...</p>}
      {result && <p>Result: {result}</p>}
    </div>
  );
}
