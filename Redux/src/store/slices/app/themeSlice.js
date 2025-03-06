import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkMode: false, // Default: Light mode
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode; // Toggle dark mode
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
