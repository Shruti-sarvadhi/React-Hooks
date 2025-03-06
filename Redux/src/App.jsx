import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "@/pages";
import { useStateExamples,useEffectExamples,useCallbackExamples,useMemoExamples,useReducerExamples,useRefExamples } from "@/hooks-examples";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

          {/* useState Examples */}
          {Object.entries(useStateExamples)
          .sort(([a], [b]) => a.match(/\d+/)[0] - b.match(/\d+/)[0]) // Extract numbers and sort numerically
          .map(([key, Component], index) => (
            <Route key={`useState-${index}`} path={`/useState/example-${index + 1}`} element={<Component />} />
          ))}


          {/* useEffect Examples */}
          {Object.entries(useEffectExamples)
            .sort(([a], [b]) => a.match(/\d+/)[0] - b.match(/\d+/)[0]) // Sort numerically
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
    </Router>
  );
};

export default App;
