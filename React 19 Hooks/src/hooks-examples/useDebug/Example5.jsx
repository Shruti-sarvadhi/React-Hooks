import React from 'react'
import useAuth from './custom-hooks/useAuth';

const Example5 = () => {
  const { user, login, logout } = useAuth();
  return (
    <div>
      <h2>{user ? `Welcome, ${user.name}` : "Please log in"}</h2>
      <button onClick={() => login("Alice")}>Login as Alice</button>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Example5
