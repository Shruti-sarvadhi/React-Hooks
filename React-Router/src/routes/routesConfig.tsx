// src/routes/routesConfig.tsx
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import ProductDetails from "@/pages/ProductDetails";
import Cart from "@/pages/Cart";
import Checkout from "@/pages/Checkout";
import Profile from "@/pages/Profile";
import Products from "@/pages/Products";

export const publicRoutes = [
  { path: "login", element: <Login /> },
  { path: "products", element: <Products /> },
  { path: "product/:id", element: <ProductDetails /> },
  { path: "cart", element: <Cart /> },
  { path: "", element: <Home /> }, // Home as the default route
];

export const privateRoutes = [
  { path: "checkout", element: <Checkout /> },
  { path: "profile", element: <Profile /> },
];
