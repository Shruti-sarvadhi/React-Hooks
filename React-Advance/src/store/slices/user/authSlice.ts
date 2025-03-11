import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API_ENDPOINTS from "@/apis/configs/endpoints";
import { postRequest } from "@/apis/configs/axiosUtils";
import { RootState } from "@/store/store";

// Define User & Auth State Types
interface User {
  id: number;
  name: string;
  email: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

// **Login Action**
export const loginUser = createAsyncThunk<
  User, 
  { email: string; password: string }, 
  { rejectValue: string }
>("auth/loginUser", async (credentials, { rejectWithValue }) => {
  try {
    const response = await postRequest<User, { email: string; password: string }>(
      `${API_ENDPOINTS.USERS}/login`, 
      credentials
    );
    return response;
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Failed to log in";
    return rejectWithValue(errorMessage);
  }
});

// **Logout Action**
export const logoutUser = createAsyncThunk("auth/logoutUser", async () => {
  // Clear any stored authentication tokens (if applicable)
  return null; // This resets the user state
});

// **Auth Slice**
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Login failed";
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.isAuthenticated = false;
      });
  },
});

// **Selectors**
export const selectAuthUser = (state: RootState) => state.user.auth.user;
export const selectAuthLoading = (state: RootState) => state.user.auth.loading;
export const selectAuthError = (state: RootState) => state.user.auth.error;
export const selectIsAuthenticated = (state: RootState) => state.user.auth.isAuthenticated;

export default authSlice.reducer;
