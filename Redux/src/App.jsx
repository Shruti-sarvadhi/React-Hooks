import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "@/pages";
import { useStateExamples, useEffectExamples, useCallbackExamples, useMemoExamples, useReducerExamples, useRefExamples } from "@/hooks-examples";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggleSidebar } from "@/store/slices/app/settingsSlice";
import "./App.css"; // Add styles for sidebar

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
          {isSidebarOpen && (
            <nav>
              <Link to="/">🏠 Home</Link>
              <Link to="/useState/example-1">🛠 useState</Link>
              <Link to="/useEffect/example-1">⚡ useEffect</Link>
              <Link to="/useRef/example-1">🔗 useRef</Link>
              <Link to="/useReducer/example-1">📦 useReducer</Link>
              <Link to="/useMemo/example-1">🧠 useMemo</Link>
              <Link to="/useCallback/example-1">🔁 useCallback</Link>
            </nav>
          )}
        </aside>

        {/* Main Content */}
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />

            {/* useState Examples */}
            {Object.entries(useStateExamples)
              .sort(([a], [b]) => a.match(/\d+/)[0] - b.match(/\d+/)[0])
              .map(([key, Component], index) => (
                <Route key={`useState-${index}`} path={`/useState/example-${index + 1}`} element={<Component />} />
              ))}

            {/* useEffect Examples */}
            {Object.entries(useEffectExamples)
              .sort(([a], [b]) => a.match(/\d+/)[0] - b.match(/\d+/)[0])
              .map(([key, Component], index) => (
                <Route key={`useEffect-${index}`} path={`/useEffect/example-${index + 1}`} element={<Component />} />
              ))}

            {/* useRef Examples */}
            {Object.entries(useRefExamples)
              .sort(([a], [b]) => a.match(/\d+/)[0] - b.match(/\d+/)[0])
              .map(([key, Component], index) => (
                <Route key={`useRef-${index}`} path={`/useRef/example-${index + 1}`} element={<Component />} />
              ))}

            {/* useReducer Examples */}
            {Object.entries(useReducerExamples)
              .sort(([a], [b]) => a.match(/\d+/)[0] - b.match(/\d+/)[0])
              .map(([key, Component], index) => (
                <Route key={`useReducer-${index}`} path={`/useReducer/example-${index + 1}`} element={<Component />} />
              ))}

            {/* useMemo Examples */}
            {Object.entries(useMemoExamples)
              .sort(([a], [b]) => a.match(/\d+/)[0] - b.match(/\d+/)[0])
              .map(([key, Component], index) => (
                <Route key={`useMemo-${index}`} path={`/useMemo/example-${index + 1}`} element={<Component />} />
              ))}

            {/* useCallback Examples */}
            {Object.entries(useCallbackExamples)
              .sort(([a], [b]) => a.match(/\d+/)[0] - b.match(/\d+/)[0])
              .map(([key, Component], index) => (
                <Route key={`useCallback-${index}`} path={`/useCallback/example-${index + 1}`} element={<Component />} />
              ))}
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
