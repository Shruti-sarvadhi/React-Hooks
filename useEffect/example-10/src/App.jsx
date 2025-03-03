import React, { useState, useEffect } from "react";

const App = () => {
  const [query, setQuery] = useState(""); 
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!query) {
      setResults([]); // Clear results if input is empty
      return;
    }

    const timeout = setTimeout(() => {
      fetch(`https://jsonplaceholder.typicode.com/users?name_like=${query}`)
        .then((res) => res.json())
        .then((data) => setResults(data))
        .catch((err) => console.error("Error fetching data:", err));
    }, 500); //Delay API call by 500ms

    return () => clearTimeout(timeout); 
  }, [query]); 

  return (
    <div style={{ padding: "20px" }}>
      <h2>Search</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search users like Leanne"
      />
      <ul>
        {results.length > 0 ? (
          results.map((user) => <li key={user.id}>{user.name}</li>)
        ) : (
          query && <li>No results found</li>
        )}
      </ul>
    </div>
  );
};

export default App;
