import React, { useState, useEffect, useMemo } from 'react';
import UserList from './UserList';

function App() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const processedUsers = useMemo(() => {
    if (!users) return [];
    return users.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
    }));
  }, [users]);

  return (
    <div>
      <h1>User List</h1>
      <UserList users={processedUsers} />
    </div>
  );
}

export default App;