// src/apis/services/cartAPI.ts

import { API_ENDPOINTS } from "@/apis/configs";
import { getRequest, postRequest, putRequest, deleteRequest } from "@/apis/configs";
import { Cart } from "@/types";

// Fetch all carts
export const getCarts = () => getRequest<Cart[]>(API_ENDPOINTS.CARTS.BASE);

// Fetch a single cart by ID
export const getCartById = (id: number) => getRequest<Cart>(API_ENDPOINTS.CARTS.CART(id));

// Fetch carts by user ID
export const getCartsByUserId = (userId: number) =>
  getRequest<Cart[]>(API_ENDPOINTS.CARTS.USER_CARTS(userId));

// Create a new cart
export const createCart = (cartData: Cart) =>
  postRequest<Cart, Cart>(API_ENDPOINTS.CARTS.BASE, cartData);

// Update an existing cart
export const updateCart = (id: number, cartData: Cart) =>
  putRequest<Cart, Cart>(API_ENDPOINTS.CARTS.CART(id), cartData);

// Delete a cart
export const deleteCart = (id: number) => deleteRequest(API_ENDPOINTS.CARTS.CART(id));
