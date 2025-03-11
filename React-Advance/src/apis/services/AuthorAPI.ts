import API_ENDPOINTS from "../configs/endpoints";
import { postRequest } from "../configs/axiosUtils";

// Define types for authentication requests
interface LoginPayload {
  email: string;
  password: string;
}

interface AuthResponse {
  token: string;
  user: {
    id: number;
    name: string;
    email: string;
  };
}

// User Login API
export const loginUser = (credentials: LoginPayload) =>
  postRequest<AuthResponse, LoginPayload>(`${API_ENDPOINTS.USERS}/login`, credentials);
