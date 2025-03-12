import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Product } from '@/types/product';
import { getProducts, getProductById } from '@/apis/services/productAPI';

interface ProductState {
  products: Product[];
  selectedProduct: Product | null;
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  selectedProduct: null,
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk<Product[]>(
  'product/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getProducts();
      return response;
    } catch (error: unknown) {
      let message = 'Fetching products failed';
      if (axios.isAxiosError(error)) {
        message = error.response?.data || error.message;
      } else if (error instanceof Error) {
        message = error.message;
      }
      return rejectWithValue(message);
    }
  }
);

export const fetchProductById = createAsyncThunk<Product, number>(
  'product/fetchProductById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await getProductById(id);
      return response;
    } catch (error: unknown) {
      let message = 'Fetching product failed';
      if (axios.isAxiosError(error)) {
        message = error.response?.data || error.message;
      } else if (error instanceof Error) {
        message = error.message;
      }
      return rejectWithValue(message);
    }
  }
);

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    clearSelectedProduct: (state) => {
      state.selectedProduct = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle fetchProducts
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Handle fetchProductById
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action: PayloadAction<Product>) => {
        state.loading = false;
        state.selectedProduct = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearSelectedProduct } = productSlice.actions;
export default productSlice.reducer;
