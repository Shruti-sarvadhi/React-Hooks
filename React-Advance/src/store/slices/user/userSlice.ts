import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API_ENDPOINTS from "@/apis/configs/endpoints";
import { getRequest, postRequest, putRequest, deleteRequest } from "@/apis/configs/axiosUtils";
import { RootState } from "@/store/store";

// Define User Type
interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  password: string;
}

// Initial State
interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

// Async Thunks for API Calls
export const fetchUsers = createAsyncThunk<User[], void, { rejectValue: string }>(
  "user/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      return await getRequest<User[]>(API_ENDPOINTS.USERS);
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "Failed to fetch users";
      return rejectWithValue(errorMessage);
    }
  },
);

export const addUser = createAsyncThunk<User, User, { rejectValue: string }>(
  "user/addUser",
  async (user, { rejectWithValue }) => {
    try {
      return await postRequest<User, User>(API_ENDPOINTS.USERS, user);
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "Failed to add user";
      return rejectWithValue(errorMessage);
    }
  },
);

export const updateUser = createAsyncThunk<
  User,
  { id: number; user: User },
  { rejectValue: string }
>("user/updateUser", async ({ id, user }, { rejectWithValue }) => {
  try {
    return await putRequest<User, User>(`${API_ENDPOINTS.USERS}/${id}`, user);
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Failed to update user";
    return rejectWithValue(errorMessage);
  }
});

export const deleteUser = createAsyncThunk<number, number, { rejectValue: string }>(
  "user/deleteUser",
  async (id, { rejectWithValue }) => {
    try {
      await deleteRequest(`${API_ENDPOINTS.USERS}/${id}`);
      return id;
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "Failed to delete user";
      return rejectWithValue(errorMessage);
    }
  },
);

// User Slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch Users
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Error fetching users";
      })

      // Add User
      .addCase(addUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
      })
      .addCase(addUser.rejected, (state, action) => {
        state.error = action.payload || "Error adding user";
      })

      // Update User
      .addCase(updateUser.fulfilled, (state, action) => {
        const index = state.users.findIndex((user) => user.id === action.payload.id);
        if (index !== -1) {
          state.users[index] = action.payload;
        }
      })

      // Delete User
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter((user) => user.id !== action.payload);
      });
  },
});

// Selectors
export const selectUsers = (state: RootState) => state.user.user.users;
export const selectUserLoading = (state: RootState) => state.user.user.loading;
export const selectUserError = (state: RootState) => state.user.user.error;

export default userSlice.reducer;
