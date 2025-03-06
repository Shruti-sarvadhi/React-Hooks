import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchUsers, clearUser } from "@/store/slices/user/userSlice";

function Example7() {
  const [query, setQuery] = useState("");
  const dispatch = useAppDispatch();
  const { user, loading, error } = useAppSelector((state) => state.user?.user);
  console.log(query);
  

  const handleSearch = () => {
    if (!query.trim()) return;
    dispatch(fetchUsers(query));
  };

  return (
    <div>
      <h2>Search User by ID</h2>
      <input
        type="number"
        placeholder="Enter user ID (1-10)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch} disabled={loading}>
        {loading ? "Loading..." : "Search"}
      </button>
      <button onClick={() => dispatch(clearUser())}>Clear</button>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {user && <pre>{JSON.stringify(user, null, 2)}</pre>}
    </div>
  );
}

export default Example7;
