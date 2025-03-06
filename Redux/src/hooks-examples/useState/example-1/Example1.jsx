import React from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { login, logout, updateCredentials } from "@/store/slices/user/authSlice";

const Example1 = () => {
  const dispatch = useAppDispatch();
  const { isAuthenticated, email, password } = useAppSelector((state) => state.user.auth);

  const handleChange = (e) => {
    dispatch(updateCredentials({ name: e.target.name, value: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <h2>Welcome, {email}!</h2>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
            required
          />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default Example1;
