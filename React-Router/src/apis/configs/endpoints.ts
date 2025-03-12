const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
  },
  USERS: {
    BASE: "/users",
    USER: (id: number) => `/users/${id}`,
  },
  PRODUCTS: {
    BASE: "/products",
    PRODUCT: (id: number) => `/products/${id}`,
    CATEGORIES: "/products/categories",
    CATEGORY: (category: string) => `/products/category/${category}`,
  },
  CARTS: {
    BASE: "/carts",
    CART: (id: number) => `/carts/${id}`,
    USER_CARTS: (userId: number) => `/carts/user/${userId}`,
  },
};

export default API_ENDPOINTS;
