import { combineReducers } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import counterReducer from "./counterSlice";
import chatReducer from "./chatSlice";

const featuresReducer = combineReducers({
  todos: todoReducer,
  counter: counterReducer,
  chat: chatReducer,
});

export default featuresReducer;
