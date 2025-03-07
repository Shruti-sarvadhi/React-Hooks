import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import { Home } from "@/pages";
import HookLinks from "@/pages/HookLinks";
import {useActionStateExample,useDebugExample,useDeferredValueExample,useImperativeHandleExample,useInsertionEffectExample,useLayoutEffectExample,useOptimisticExample,useSyncExternalStoreExample,useTransitionExample } from '../src/hooks-examples/index'

const hooksData = {
  useActionState: useActionStateExample,
  useDebug: useDebugExample,
  useDeferredValue: useDeferredValueExample,
  useImperativeHandle: useImperativeHandleExample,
  useInsertionEffect: useInsertionEffectExample,
  useLayoutEffect: useLayoutEffectExample,
  useOptimistic: useOptimisticExample,
  useSyncExternalStore: useSyncExternalStoreExample,
  useTransition: useTransitionExample,
};

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <Router>
      <div className="app-container">
        {/* Sidebar */}
        <aside className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
          <button className="toggle-btn" onClick={() => setSidebarOpen(!isSidebarOpen)}>
            {isSidebarOpen ? "←" : "→"}
          </button>

          {isSidebarOpen && <Home />}
        </aside>

        {/* Main Content */}
        <main className="content">
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<Home />} />

            {/* Generate Routes for Each Hook Example */}
            {Object.entries(hooksData).map(([hookName, examples]) =>
              Object.entries(examples).map(([key, Component], index) => (
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