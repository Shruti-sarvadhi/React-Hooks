import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import authReducer from "./authSlice";

const userRootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
});

export default userRootReducer;
