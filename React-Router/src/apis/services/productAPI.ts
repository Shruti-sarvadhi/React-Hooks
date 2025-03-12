// src/apis/services/productAPI.ts

import { API_ENDPOINTS } from "@/apis/configs";
import { getRequest } from "@/apis/configs";
import { Product } from "@/types";

// Fetch all products
export const getProducts = () => getRequest<Product[]>(API_ENDPOINTS.PRODUCTS.BASE);

// Fetch a single product by ID
export const getProductById = (id: number) =>
  getRequest<Product>(API_ENDPOINTS.PRODUCTS.PRODUCT(id));

// Fetch all categories
export const getCategories = () => getRequest<string[]>(API_ENDPOINTS.PRODUCTS.CATEGORIES);

// Fetch products by category
export const getProductsByCategory = (category: string) =>
  getRequest<Product[]>(API_ENDPOINTS.PRODUCTS.CATEGORY(category));
