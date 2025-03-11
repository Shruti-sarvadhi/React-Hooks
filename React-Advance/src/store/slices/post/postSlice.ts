import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { getPosts, postPosts, updatePost, deletePost } from "@/apis/services/PostAPI";

interface Post {
  id: number;
  title: string;
  content: string;
}

interface PostState {
  posts: Post[];
  loading: boolean;
  error: string | null;
}

const initialState: PostState = {
  posts: [],
  loading: false,
  error: null,
};

// Fetch all posts
export const fetchPosts = createAsyncThunk<Post[], void, { rejectValue: string }>(
  "posts/fetchPosts",
  async (_, { rejectWithValue }) => {
    try {
      return await getPosts();
    } catch (error: unknown) {
      return rejectWithValue(error instanceof Error ? error.message : "Failed to fetch posts");
    }
  }
);

// Add a new post
export const addPost = createAsyncThunk<Post, Omit<Post, "id">, { rejectValue: string }>(
  "posts/addPost",
  async (newPost, { rejectWithValue }) => {
    try {
      return await postPosts(newPost);
    } catch (error: unknown) {
      return rejectWithValue(error instanceof Error ? error.message : "Failed to add post");
    }
  }
);

// Update an existing post
export const modifyPost = createAsyncThunk<Post, { id: number; data: Partial<Post> }, { rejectValue: string }>(
  "posts/modifyPost",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      return await updatePost(id, data);
    } catch (error: unknown) {
      return rejectWithValue(error instanceof Error ? error.message : "Failed to update post");
    }
  }
);

// Delete a post
export const removePost = createAsyncThunk<number, number, { rejectValue: string }>(
  "posts/removePost",
  async (id, { rejectWithValue }) => {
    try {
      await deletePost(id);
      return id;
    } catch (error: unknown) {
      return rejectWithValue(error instanceof Error ? error.message : "Failed to delete post");
    }
  }
);

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.loading = false;
        state.error = action.payload || "An unknown error occurred";
      })
      .addCase(addPost.fulfilled, (state, action: PayloadAction<Post>) => {
        state.posts.push(action.payload);
      })
      .addCase(addPost.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.error = action.payload || "Failed to add post";
      })
      .addCase(modifyPost.fulfilled, (state, action: PayloadAction<Post>) => {
        state.posts = state.posts.map((post) =>
          post.id === action.payload.id ? action.payload : post
        );
      })
      .addCase(modifyPost.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.error = action.payload || "Failed to update post";
      })
      .addCase(removePost.fulfilled, (state, action: PayloadAction<number>) => {
        state.posts = state.posts.filter((post) => post.id !== action.payload);
      })
      .addCase(removePost.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.error = action.payload || "Failed to delete post";
      });
  },
});

export default postSlice.reducer;
