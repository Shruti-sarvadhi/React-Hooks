import { useState, useDeferredValue } from "react";

const items = Array.from({ length: 1000000 }, (_, i) => `Item ${i + 1}`);

export default function Example2() {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const isStale=query!=deferredQuery
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(deferredQuery.toLowerCase())
  );

  return (
    <div>
     {isStale?<p>previous value ...</p>:
     <div>
     <input type="text" onChange={(e) => setQuery(e.target.value)} placeholder="Search..." />
     <ul>
       {filteredItems.slice(0, 20).map((item, index) => (
         <li key={index}>{item}</li>
       ))}
     </ul>
   </div>}
   </div>

    
  );
}
