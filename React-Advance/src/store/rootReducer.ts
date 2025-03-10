import { combineReducers } from "@reduxjs/toolkit";
import userRootReducer from "./slices/user";
import settingsRootReducer from "./slices/settings";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["settings"], // Persist only settings
};

const rootReducer = combineReducers({
  user: userRootReducer,
  settings: settingsRootReducer,
});

export default persistReducer(persistConfig, rootReducer);
