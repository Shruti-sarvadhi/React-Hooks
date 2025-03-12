import React from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "@/store";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  // Assume auth state is under state.user.auth.user
  const { user } = useAppSelector((state) => state.user.auth);
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
