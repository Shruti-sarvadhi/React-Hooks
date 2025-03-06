import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: null,
  email: "",
  password: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { email, password } = action.payload;
      state.isAuthenticated = true;
      state.user = { email };
      state.email = email;
      state.password = password;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.email = "";
      state.password = "";
    },
    updateCredentials: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
  },
});

export const { login, logout, updateCredentials } = authSlice.actions;
export default authSlice.reducer;
