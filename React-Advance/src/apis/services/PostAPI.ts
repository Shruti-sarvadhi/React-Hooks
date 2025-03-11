import API_ENDPOINTS from "../configs/endpoints";
import { getRequest, postRequest, putRequest, deleteRequest } from "../configs/axiosUtils";
interface Post {
  id: number;
  title: string;
  content: string;
}

// Fetch Posts
export const getPosts = () => getRequest<Post[]>(API_ENDPOINTS.POSTS);
// Add Post
export const postPosts = (newPost: Omit<Post, "id">) =>
  postRequest<Post, Omit<Post, "id">>(API_ENDPOINTS.POSTS, newPost);

// Update Post
export const updatePost = (id: number, updatedData: Partial<Post>) =>
  putRequest<Post, Partial<Post>>(`${API_ENDPOINTS.POSTS}/${id}`, updatedData);

// Delete Post
export const deletePost = (id: number) =>
  deleteRequest(`${API_ENDPOINTS.POSTS}/${id}`);