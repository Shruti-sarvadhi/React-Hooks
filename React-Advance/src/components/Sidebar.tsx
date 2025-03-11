import { Link } from "react-router-dom";
import { publicRoutes } from "@/utils/nav";
import MemoizedCounter from "@/pages/MemoizedCounter";
import ThemeSwitcher from "./ThemeSwitcher";

const Sidebar = () => {
  return (
    <nav className="w-64 min-h-screen bg-gray-800 text-white p-4">
      <h2 className="text-xl font-bold mb-4">Navigation</h2>
      <ThemeSwitcher/>
      <MemoizedCounter/>
      <ul>
        {publicRoutes.map(({ path, name }, index) => (
          <li key={index} className="mb-2">
            <Link to={path} className="block p-2 hover:bg-gray-700 rounded">
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
