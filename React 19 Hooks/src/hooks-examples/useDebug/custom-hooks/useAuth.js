import { useState, useDebugValue } from "react";

function useAuth() {
  const [user, setUser] = useState(null);

  useDebugValue(user ? `Logged in as: ${user.name}` : "Not logged in");

  return { user, login: (name) => setUser({ name }), logout: () => setUser(null) };
}

export default useAuth