import { combineReducers } from "@reduxjs/toolkit";
import userRootReducer from "./slices/user";
import settingsRootReducer from "./slices/settings";
import postRootReducer from "./slices/post";
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
  post: postRootReducer,
});

export default persistReducer(persistConfig, rootReducer);
