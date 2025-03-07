import { useState, useDeferredValue } from "react";

export default function Example1() {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const isStale=query!=deferredQuery

  return (
   <div>
     {isStale?<p>previous value ...</p>:<div>
      <input
        type="text"
        placeholder="Type to search..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <p>Immediate Value: {query}</p>
      <p>Deferred Value: {deferredQuery}</p>
    </div>}
   </div>
    
  );
}
