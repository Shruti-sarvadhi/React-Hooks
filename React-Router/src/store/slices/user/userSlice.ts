import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from '@/types/user';
import {
  getUsers,
  createUser,
  updateUser as updateUserService,
  deleteUser as deleteUserService,
  getUserById,
} from '@/apis/services/userAPI';

interface UserState {
  users: User[];
  selectedUser: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  users: [],
  selectedUser: null,
  loading: false,
  error: null,
};

export const fetchUsers = createAsyncThunk<User[]>(
  'user/fetchUsers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getUsers();
      return response;
    } catch (error: unknown) {
      let message = 'Fetching users failed';
      if (axios.isAxiosError(error)) {
        message = error.response?.data || error.message;
      } else if (error instanceof Error) {
        message = error.message;
      }
      return rejectWithValue(message);
    }
  }
);

export const fetchUserById = createAsyncThunk<User, number>(
  'user/fetchUserById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await getUserById(id);
      return response;
    } catch (error: unknown) {
      let message = 'Fetching user failed';
      if (axios.isAxiosError(error)) {
        message = error.response?.data || error.message;
      } else if (error instanceof Error) {
        message = error.message;
      }
      return rejectWithValue(message);
    }
  }
);

export const addUser = createAsyncThunk<User, User>(
  'user/addUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await createUser(userData);
      return response;
    } catch (error: unknown) {
      let message = 'Creating user failed';
      if (axios.isAxiosError(error)) {
        message = error.response?.data || error.message;
      } else if (error instanceof Error) {
        message = error.message;
      }
      return rejectWithValue(message);
    }
  }
);

export const updateUser = createAsyncThunk<User, { id: number; userData: User }>(
  'user/updateUser',
  async ({ id, userData }, { rejectWithValue }) => {
    try {
      const response = await updateUserService(id, userData);
      return response;
    } catch (error: unknown) {
      let message = 'Updating user failed';
      if (axios.isAxiosError(error)) {
        message = error.response?.data || error.message;
      } else if (error instanceof Error) {
        message = error.message;
      }
      return rejectWithValue(message);
    }
  }
);

export const deleteUser = createAsyncThunk<number, number>(
  'user/deleteUser',
  async (id, { rejectWithValue }) => {
    try {
      await deleteUserService(id);
      return id;
    } catch (error: unknown) {
      let message = 'Deleting user failed';
      if (axios.isAxiosError(error)) {
        message = error.response?.data || error.message;
      } else if (error instanceof Error) {
        message = error.message;
      }
      return rejectWithValue(message);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Additional synchronous reducers can be added here
  },
  extraReducers: (builder) => {
    builder
      // fetchUsers
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // fetchUserById
      .addCase(fetchUserById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserById.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.selectedUser = action.payload;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // addUser
      .addCase(addUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(addUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // updateUser
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        const index = state.users.findIndex((u) => u.id === action.payload.id);
        if (index !== -1) {
          state.users[index] = action.payload;
        }
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // deleteUser
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteUser.fulfilled, (state, action: PayloadAction<number>) => {
        state.loading = false;
        state.users = state.users.filter((user) => user.id !== action.payload);
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default userSlice.reducer;
