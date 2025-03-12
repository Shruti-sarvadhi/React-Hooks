import { combineReducers } from "@reduxjs/toolkit";
import userRootReducer from "./slices/user";
import settingsRootReducer from "./slices/settings";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import productRootReducer from "./slices/product";
import cartRootReducer from "./slices/cart";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["settings","user"], // Persist only settings
};

const rootReducer = combineReducers({
  user: userRootReducer,
  settings: settingsRootReducer,
  product:productRootReducer,
  cart:cartRootReducer
});

export default persistReducer(persistConfig, rootReducer);
