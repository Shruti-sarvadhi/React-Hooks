import { combineReducers } from "@reduxjs/toolkit";
import productReducer from "./productSlice";

const productRootReducer = combineReducers({
  product: productReducer,
});

export default productRootReducer;
