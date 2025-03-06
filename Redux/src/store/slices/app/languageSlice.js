import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "en", // Default language
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload; // Set new language (e.g., "fr", "es")
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
