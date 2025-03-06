import React from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { login, logout } from "@/store/slices/user/authSlice";

const Example2 = () => {
  const dispatch = useAppDispatch();
  const isLogIn = useAppSelector((state) => state.user.auth.isAuthenticated);

  const handleLogin = () => {
    dispatch(login({ email: "user@example.com", password: "password123" })); // Provide required login details
  };

  return (
    <>
      <div>{isLogIn ? "Welcome, you are logged in" : "Please log in"}</div>
      <button onClick={() => dispatch(isLogIn ? logout() : handleLogin())}>
        {isLogIn ? "Logout" : "Login"}
      </button>
    </>
  );
};

export default Example2;
