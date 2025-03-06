import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch users (all users or single user based on userId)
export const fetchUsers = createAsyncThunk("user/fetchUsers", async (userId = null) => {
  const url = userId 
    ? `https://jsonplaceholder.typicode.com/users/${userId}` 
    : "https://jsonplaceholder.typicode.com/users";

  const response = await axios.get(url);
  return response.data;
});

const initialState = {
  users: [], // Stores all users
  user: null, // Stores single user
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      console.log("Action Payload:", action.payload);
      console.log("Before Update - State:", state);

      if (!Array.isArray(state.users)) {
        state.users = []; //   Ensures `users` is always an array
      }

      state.users.push({ name: action.payload }); //   Store user object in array

      console.log("After Update - State:", state);
    },
    clearUser: (state) => {
      state.users = []; //   Clears Redux state
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload; //   Store API users in Redux
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { updateUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
