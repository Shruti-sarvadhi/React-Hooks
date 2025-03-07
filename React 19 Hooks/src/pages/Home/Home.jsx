import { Link } from "react-router-dom";
import "./Home.css"; // Import the CSS file for styling

// Define hooks and their example names
const hooks = [
  {
    name: "useActionState",
    examples: ["Example 1", "Example 2", "Example 3", "Example 4", "Example 5"],
  },
  {
    name: "useDebug",
    examples: ["Example 1", "Example 2", "Example 3", "Example 4", "Example 5"],
  },
  {
    name: "useDeferredValue",
    examples: ["Example 1", "Example 2", "Example 3", "Example 4", "Example 5"],
  },
  {
    name: "useImperativeHandle",
    examples: ["Example 1", "Example 2", "Example 3", "Example 4", "Example 5"],
  },
  {
    name: "useInsertionEffect",
    examples: ["Example 1", "Example 2", "Example 3", "Example 4", "Example 5"],
  },
  {
    name: "useLayoutEffect",
    examples: ["Example 1", "Example 2", "Example 3", "Example 4", "Example 5"],
  },
  {
    name: "useOptimistic",
    examples: ["Example 1", "Example 2", "Example 3", "Example 4", "Example 5"],
  },
  {
    name: "useSyncExternalStore",
    examples: ["Example 1", "Example 2", "Example 3", "Example 4", "Example 5"],
  },
  {
    name: "useTransition",
    examples: ["Example 1", "Example 2", "Example 3", "Example 4", "Example 5"],
  },
];

const Home = () => {
  return (
    <div className="home-container">
     

      {hooks.map((hook, hookIndex) => (
        <div key={hookIndex} className="hook-section">
          <h2 className="hook-title">{hook.name}</h2>
          <div className="example-grid">
            {hook.examples.map((example, exampleIndex) => (
              <Link
                key={exampleIndex}
                to={`/${hook.name}/example-${exampleIndex + 1}`}
                className="example-link"
              >
                {example}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
