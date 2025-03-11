import { useState, memo, Profiler } from "react";
import { createPortal } from "react-dom";
import { Input } from "@/components"; // Custom Input component

// Memoized Counter Component (Only re-renders when count changes)
const Counter = memo(({ count }: { count: number }) => {
  // eslint-disable-next-line no-console
  console.log("Counter component re-rendered");
  return <h2 className="text-xl font-bold">Counter: {count}</h2>;
});

// Performance logging function
const onRenderCallback = (
  id: string,
  phase: "mount" | "update" | "nested-update",
  actualDuration: number
) => {
  // eslint-disable-next-line no-console
  console.log(`Profiler [${id}] - Phase: ${phase}, Render time: ${actualDuration}ms`);
};

const MemoizedCounterWithProfiler = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <Profiler id="MemoizedCounter" onRender={onRenderCallback}>
      <div className="p-6 border rounded shadow-md max-w-md mx-auto space-y-4">
        {/* Counter rendered inside a Portal */}
        {createPortal(<Counter count={count} />, document.getElementById("portal-root")!)}

        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Increment
        </button>

        {/* Using Custom Input Component */}
        <Input
          label="Enter Text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something..."
        />
      </div>
    </Profiler>
  );
};

export default MemoizedCounterWithProfiler;
