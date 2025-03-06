import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import userReducer from "./userSlice";
import cartReducer from "./cartSlice";

const userReducerCombined = combineReducers({
  auth: authReducer,
  user: userReducer,
  cart: cartReducer,
});

export default userReducerCombined;
