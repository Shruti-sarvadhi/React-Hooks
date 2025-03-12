import { combineReducers } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import notificationsReducer from "./notificationsSlice";

const settingsRootReducer = combineReducers({
  theme: themeReducer,
  notifications: notificationsReducer,
});

export default settingsRootReducer;
