import { Routes, Route } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./routesConfig";
import Layout from "@/pages/Layout";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      {/* All routes are nested under the Layout, which uses an <Outlet /> to render child routes */}
      <Route path="/" element={<Layout />}>
        {/* Map through public routes */}
        {publicRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
        {/* Map through private routes and wrap them in ProtectedRoute */}
        {privateRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<ProtectedRoute>{route.element}</ProtectedRoute>}
          />
        ))}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
