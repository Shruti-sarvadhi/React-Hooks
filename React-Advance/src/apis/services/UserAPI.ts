import API_ENDPOINTS from "../configs/endpoints";
import { getRequest, postRequest, putRequest, deleteRequest } from "../configs/axiosUtils";

interface User {
  id?: number;
  name: string;
  email: string;
}

// Fetch Users
export const getUsers = () => getRequest<User[]>(API_ENDPOINTS.USERS);

// Create User
export const createUser = (userData: User) => postRequest<User, User>(API_ENDPOINTS.USERS, userData);

// Update User
export const updateUser = (id: number, userData: User) =>
  putRequest<User, User>(`${API_ENDPOINTS.USERS}/${id}`, userData);

// Delete User
export const deleteUser = (id: number) => deleteRequest(`${API_ENDPOINTS.USERS}/${id}`);
