import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [], // ✅ Ensures `users` starts as an array
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      console.log("Action Payload:", action.payload);
      console.log("Before Update - State:", state);

      if (!Array.isArray(state.users)) {
        state.users = []; // ✅ Ensures `users` is always an array
      }

      state.users.push({ name: action.payload }); // ✅ Store user object in array

      console.log("After Update - State:", state);
    },
    clearUser: (state) => {
      state.users = []; // ✅ Clears Redux state
    },
  },
});

export const { updateUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
