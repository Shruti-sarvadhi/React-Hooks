import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [], //   Ensure cart is an array
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log("Adding to cart:", action.payload); //   Log what is being added
      state.cart = [...state.cart, action.payload];
      console.log("Updated Cart:", state.cart); //   Log updated cart state
    },
    
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      state.cart = state.cart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
