import { useState, useTransition } from "react";

export default function Example1() {
  const [query, setQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [isPending, startTransition] = useTransition();

  const items = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);

  const handleSearch = (e) => {
    setQuery(e.target.value);
    
    // Mark expensive filtering as a transition
    startTransition(() => {
      const results = items.filter((item) =>
        item.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setFilteredItems(results);
    });
  };

  return (
    <div>
      <input type="text" value={query} onChange={handleSearch} placeholder="Search..." />
      {isPending && <p>Loading results...</p>}
      <ul>
        {filteredItems.slice(0, 20).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
