import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  avatar: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.avatar = action.payload.avatar;
    },
    clearUser: (state) => {
      state.name = "";
      state.email = "";
      state.avatar = "";
    },
  },
});

export const { updateUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
