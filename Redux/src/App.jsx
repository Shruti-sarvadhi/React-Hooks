import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "@/pages";
import {HookLinks} from "@/pages";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggleSidebar } from "@/store/slices/app/settingsSlice";
import { useStateExamples, useEffectExamples, useCallbackExamples, useMemoExamples, useReducerExamples, useRefExamples } from "@/hooks-examples";
import "./App.css";

const hooksData = {
  useState: useStateExamples,
  useEffect: useEffectExamples,
  useReducer: useReducerExamples,
  useRef: useRefExamples,
  useMemo: useMemoExamples,
  useCallback: useCallbackExamples,
};

const App = () => {
  const dispatch = useAppDispatch();
  const isSidebarOpen = useAppSelector((state) => state.app.settings.isSidebarOpen);

  return (
    <Router>
      <div className="app-container">
        {/* Sidebar */}
        <aside className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
          <button className="toggle-btn" onClick={() => dispatch(toggleSidebar())}>
            {isSidebarOpen ? "←" : "→"}
          </button>
          
          {isSidebarOpen && <HookLinks />}
        </aside>

        {/* Main Content */}
        <main className="content">
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<Home />} />

            {/* Generate Routes for Each Hook Example */}
            {Object.entries(hooksData).map(([hookName, examples]) =>
              Object.entries(examples)
                .sort(([a], [b]) => a.match(/\d+/)[0] - b.match(/\d+/)[0]) // Sort by example number
                .map(([key, Component], index) => (
                  <Route
                    key={`${hookName}-${index}`}
                    path={`/${hookName}/example-${index + 1}`}
                    element={<Component />}
                  />
                ))
            )}
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
