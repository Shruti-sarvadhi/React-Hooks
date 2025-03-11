import "@/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import AppRoutes from "@/routes";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="p-4 flex-1">
          <AppRoutes />
        </div>
      </div>
    </Router>
  );
}

export default App;
