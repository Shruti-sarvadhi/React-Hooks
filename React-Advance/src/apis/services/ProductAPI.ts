import API_ENDPOINTS from "../configs/endpoints";
import { getRequest } from "../configs/axiosUtils";

interface Product {
  id: number;
  title: string;
  content: string;
}

// Fetch Products
export const getProducts = () => getRequest<Product[]>(API_ENDPOINTS.POSTS);
