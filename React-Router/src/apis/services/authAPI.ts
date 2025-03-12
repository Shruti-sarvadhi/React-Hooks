// src/apis/services/authAPI.ts

import { API_ENDPOINTS } from "@/apis/configs";
import { postRequest } from "@/apis/configs";

interface LoginCredentials {
  username: string;
  password: string;
}

interface AuthResponse {
  token: string;
}

// User login
export const login = (credentials: LoginCredentials) =>
  postRequest<AuthResponse, LoginCredentials>(API_ENDPOINTS.AUTH.LOGIN, credentials);
