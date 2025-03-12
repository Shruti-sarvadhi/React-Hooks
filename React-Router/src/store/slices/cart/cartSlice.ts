import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Cart } from '@/types/cart';
import {
  getCartsByUserId,
  getCartById,
  createCart,
  updateCart,
  deleteCart,
} from '@/apis/services/cartAPI';

interface CartState {
  carts: Cart[];
  selectedCart: Cart | null;
  loading: boolean;
  error: string | null;
}

const initialState: CartState = {
  carts: [],
  selectedCart: null,
  loading: false,
  error: null,
};

// Fetch carts for a specific user
export const fetchCartsByUserId = createAsyncThunk<Cart[], number>(
  'cart/fetchCartsByUserId',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await getCartsByUserId(userId);
      return response;
    } catch (error: unknown) {
      let message = 'Fetching carts failed';
      if (axios.isAxiosError(error)) {
        message = error.response?.data || error.message;
      } else if (error instanceof Error) {
        message = error.message;
      }
      return rejectWithValue(message);
    }
  }
);

// Fetch a single cart by its ID
export const fetchCartById = createAsyncThunk<Cart, number>(
  'cart/fetchCartById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await getCartById(id);
      return response;
    } catch (error: unknown) {
      let message = 'Fetching cart failed';
      if (axios.isAxiosError(error)) {
        message = error.response?.data || error.message;
      } else if (error instanceof Error) {
        message = error.message;
      }
      return rejectWithValue(message);
    }
  }
);

// Create a new cart
export const addCart = createAsyncThunk<Cart, Cart>(
  'cart/addCart',
  async (cartData, { rejectWithValue }) => {
    try {
      const response = await createCart(cartData);
      return response;
    } catch (error: unknown) {
      let message = 'Creating cart failed';
      if (axios.isAxiosError(error)) {
        message = error.response?.data || error.message;
      } else if (error instanceof Error) {
        message = error.message;
      }
      return rejectWithValue(message);
    }
  }
);

// Update an existing cart
export const updateCartThunk = createAsyncThunk<Cart, { id: number; cartData: Cart }>(
  'cart/updateCart',
  async ({ id, cartData }, { rejectWithValue }) => {
    try {
      const response = await updateCart(id, cartData);
      return response;
    } catch (error: unknown) {
      let message = 'Updating cart failed';
      if (axios.isAxiosError(error)) {
        message = error.response?.data || error.message;
      } else if (error instanceof Error) {
        message = error.message;
      }
      return rejectWithValue(message);
    }
  }
);

// Delete a cart
export const deleteCartThunk = createAsyncThunk<number, number>(
  'cart/deleteCart',
  async (id, { rejectWithValue }) => {
    try {
      await deleteCart(id);
      return id;
    } catch (error: unknown) {
      let message = 'Deleting cart failed';
      if (axios.isAxiosError(error)) {
        message = error.response?.data || error.message;
      } else if (error instanceof Error) {
        message = error.message;
      }
      return rejectWithValue(message);
    }
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearSelectedCart: (state) => {
      state.selectedCart = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle fetchCartsByUserId
      .addCase(fetchCartsByUserId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCartsByUserId.fulfilled, (state, action: PayloadAction<Cart[]>) => {
        state.loading = false;
        state.carts = action.payload;
      })
      .addCase(fetchCartsByUserId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Handle fetchCartById
      .addCase(fetchCartById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCartById.fulfilled, (state, action: PayloadAction<Cart>) => {
        state.loading = false;
        state.selectedCart = action.payload;
      })
      .addCase(fetchCartById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Handle addCart
      .addCase(addCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addCart.fulfilled, (state, action: PayloadAction<Cart>) => {
        state.loading = false;
        state.carts.push(action.payload);
      })
      .addCase(addCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Handle updateCartThunk
      .addCase(updateCartThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateCartThunk.fulfilled, (state, action: PayloadAction<Cart>) => {
        state.loading = false;
        const index = state.carts.findIndex((c) => c.id === action.payload.id);
        if (index !== -1) {
          state.carts[index] = action.payload;
        }
      })
      .addCase(updateCartThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Handle deleteCartThunk
      .addCase(deleteCartThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteCartThunk.fulfilled, (state, action: PayloadAction<number>) => {
        state.loading = false;
        state.carts = state.carts.filter((cart) => cart.id !== action.payload);
      })
      .addCase(deleteCartThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearSelectedCart } = cartSlice.actions;
export default cartSlice.reducer;
