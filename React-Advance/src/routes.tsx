import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import UserForm from "@/pages/UserForm";
import UserFormFormik from "@/pages/UserFormFormik";
import { publicRoutes } from "@/utils/nav";

const routeComponents: { [key: string]: React.ComponentType } = {
  "/": Home,
  "/user-form": UserForm,
  "/user-form-formik": UserFormFormik,
};

const AppRoutes = () => {
  return (
    <Routes>
      {publicRoutes.map(({ path }, index) => {
        const Component = routeComponents[path];
        return <Route key={index} path={path} element={<Component />} />;
      })}
    </Routes>
  );
};

export default AppRoutes;
