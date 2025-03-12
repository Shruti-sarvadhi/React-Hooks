import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const cartRootReducer = combineReducers({
  cart: cartReducer,
});

export default cartRootReducer;
