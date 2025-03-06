import React, { useState, useCallback } from "react";

function Example7() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState(null);

  //Memoizes a function that fetches data based on user input
  const fetchData = useCallback(async () => {
    if (!query) return;

    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${query}`);
      if (!response.ok) {
        throw new Error("User not found");
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      setData({ error: error.message });
    }
  }, [query]);

  return (
    <div>
      <h2>Search User by ID</h2>
      <input
        type="number"
        placeholder="Enter user ID (1-10)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={fetchData}>Search</button>
      <p>Data: {data ? JSON.stringify(data, null, 2) : "No data"}</p>
    </div>
  );
}

export default Example7;
