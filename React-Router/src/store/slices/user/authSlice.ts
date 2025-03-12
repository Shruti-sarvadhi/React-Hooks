import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@/types/user';
import { login } from '@/apis/services/authAPI';

interface AuthState {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

export const loginUser = createAsyncThunk<
  { token: string; user: User },
  { username: string; password: string }
>(
  'auth/loginUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await login(credentials);
      // For demonstration, we create a dummy user.
      // In a real app, you might fetch user details after login.
      const user: User = {
        id: 0,
        email: `${credentials.username}@example.com`,
        username: credentials.username,
        password: '',
      };
      return { token: response.token, user };
    } catch (error: unknown) {
      if (error instanceof Error && 'response' in error) {
        const errorResponse = (error as { response: { data: string } }).response;
        return rejectWithValue(errorResponse.data || 'Login failed');
      }
      return rejectWithValue('Login failed');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        loginUser.fulfilled,
        (state, action: PayloadAction<{ token: string; user: User }>) => {
          state.loading = false;
          state.token = action.payload.token;
          state.user = action.payload.user;
        }
      )
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;
