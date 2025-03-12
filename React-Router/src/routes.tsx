import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import { publicRoutes } from "@/utils/nav";

const routeComponents: { [key: string]: React.ComponentType } = {
  "/": Home,
  
 
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
