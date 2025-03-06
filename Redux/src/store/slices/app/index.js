import { combineReducers } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import languageReducer from "./languageSlice";
import notificationReducer from "./notificationSlice";
import settingsReducer from "./settingsSlice";

const appReducer = combineReducers({
  theme: themeReducer,
  language: languageReducer,
  notifications: notificationReducer,
  settings: settingsReducer,
});

export default appReducer;
