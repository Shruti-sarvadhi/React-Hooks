import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0, // Counter value
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1; // Increase count
    },
    decrement: (state) => {
      state.count -= 1; // Decrease count
    },
    reset: (state) => {
      state.count = 0; // Reset count
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
