// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes, privateRoutes } from "@/routes/routesConfig";
import ProtectedRoute from "@/routes/ProtectedRoute"; // Your protected route component
import Layout from "@/pages/Layout";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Wrap all routes with the Layout */}
        <Route path="/" element={<Layout />}>
          {/* Public routes */}
          {publicRoutes.map(({ path, element }, index) => (
            <Route key={index} path={path} element={element} />
          ))}
          {/* Private routes wrapped in ProtectedRoute */}
          {privateRoutes.map(({ path, element }, index) => (
            <Route
              key={index}
              path={path}
              element={<ProtectedRoute>{element}</ProtectedRoute>}
            />
          ))}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
