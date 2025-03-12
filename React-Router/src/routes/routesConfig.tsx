// src/routes/routesConfig.tsx
import {Home,Login,Products,ProductDetails,Cart,Checkout,Profile} from "@/pages";


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
