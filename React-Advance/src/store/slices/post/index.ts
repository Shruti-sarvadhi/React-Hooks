import { combineReducers } from "@reduxjs/toolkit";
import postReducer from "./postSlice";

const postRootReducer = combineReducers({
  posts: postReducer,
});

export default postRootReducer;
