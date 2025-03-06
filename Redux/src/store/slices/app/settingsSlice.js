import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSidebarOpen: true, // Default sidebar state
  isDarkMode: false, // Default theme state (can also be managed in themeSlice)
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen; // Toggle sidebar
    },
    setDarkMode: (state, action) => {
      state.isDarkMode = action.payload; // Enable or disable dark mode
    },
  },
});

export const { toggleSidebar, setDarkMode } = settingsSlice.actions;
export default settingsSlice.reducer;
