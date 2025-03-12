// src/pages/Layout.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";

const Layout: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
