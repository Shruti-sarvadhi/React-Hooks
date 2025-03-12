// src/apis/services/userAPI.ts

import { API_ENDPOINTS } from "@/apis/configs";
import { getRequest, postRequest, putRequest, deleteRequest } from "@/apis/configs";
import { User } from "@/types";

// Fetch all users
export const getUsers = () => getRequest<User[]>(API_ENDPOINTS.USERS.BASE);

// Fetch a single user by ID
export const getUserById = (id: number) => getRequest<User>(API_ENDPOINTS.USERS.USER(id));

// Create a new user
export const createUser = (userData: User) =>
  postRequest<User, User>(API_ENDPOINTS.USERS.BASE, userData);

// Update an existing user
export const updateUser = (id: number, userData: User) =>
  putRequest<User, User>(API_ENDPOINTS.USERS.USER(id), userData);

// Delete a user
export const deleteUser = (id: number) => deleteRequest(API_ENDPOINTS.USERS.USER(id));
