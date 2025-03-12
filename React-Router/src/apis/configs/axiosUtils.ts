import apiClient from "./axiosConfig";
import { AxiosResponse } from "axios";

// Generic GET method
export const getRequest = async <T>(endpoint: string): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await apiClient.get(endpoint);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

// Generic POST method
export const postRequest = async <T, D>(endpoint: string, data: D): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await apiClient.post(endpoint, data);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

// Generic PUT method
export const putRequest = async <T, D>(endpoint: string, data: D): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await apiClient.put(endpoint, data);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

// Generic DELETE method
export const deleteRequest = async (endpoint: string): Promise<void> => {
  try {
    await apiClient.delete(endpoint);
  } catch (error) {
    return Promise.reject(error);
  }
};
