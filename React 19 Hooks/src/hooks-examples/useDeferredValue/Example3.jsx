import { useState, useDeferredValue, useMemo } from "react";

function expensiveCalculation(num) {
  console.log("Expensive computation running...");
  for (let i = 0; i < 100000000; i++) {} // Simulate heavy work
  return num * 2;
}

export default function Example3() {
  const [number, setNumber] = useState(0);
  const deferredNumber = useDeferredValue(number);
  const isStale=number!=deferredNumber
  const result = useMemo(() => expensiveCalculation(deferredNumber), [deferredNumber]);

  return (
    <div>
     {isStale?<p>previous value ...</p>:
     <div>
     <input
       type="number"
       value={number}
       onChange={(e) => setNumber(Number(e.target.value))}
     />
     <p>Computed Value: {result}</p>
   </div>}
   </div>

    
  );
}
