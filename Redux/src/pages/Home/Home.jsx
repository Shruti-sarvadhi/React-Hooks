import { Link } from "react-router-dom";
import "./Home.css"; // Import the CSS file for styling

export const hooks = [
  {
    name: "useState",
    examples: [
      "Form Input Handling*",
      "Conditional Rendering*",
      "Toggle Flags (true/false)*",
      "Counter",
      "Get API Data and Store in State",
      "Countdown Timer",
      "Pagination Control",
      "Search Filter Query",
      "Drag-and-Drop Position",
      "Rate Limiting Clicks",
    ],
  },
  {
    name: "useEffect",
    examples: [
      "Fetch API Data",
      "Managing Timers or Intervals",
      "Multi-Language Localization*",
      "Trigger Animation on State Change",
      "Fetch New Data on Prop Change",
      "Subscribe to Window Events",
      "Local Storage Sync*",
      "Cleanup Operations",
      "Integrate with Third-Party Libraries",
      "Debouncing Input for Search",
    ],
  },
  {
    name: "useMemo",
    examples: [
      "Basic Computation Optimization",
      "Efficient List Filtering",
      "Prevent Child Re-renders",
      "Optimized Parent-Child State Updates",
      "Memoized Chart Data",
      "Memoized API Data",
      "Memoized Dynamic Styles",
      "Optimized Array Sorting",
      "Memoized Value with Multiple Inputs",
      "Optimized Data Transformation",
    ],
  },
  {
    name: "useCallback",
    examples: [
      "Prevent Child Re-renders",
      "Memoize Callback with State Dependency",
      "Debounced Callback for Input Handling",
      "Avoid Recreating Callbacks in Lists",
      "Memoized Toggle Function",
      "Handle Form Submission*",
      "Callback for External API Calls",
      "Click Events in List Items",
      "Memoized Timer Reset Function",
      "Conditional Callback Updates",
    ],
  },
  {
    name: "useRef",
    examples: [
      "Access DOM Elements",
      "Store Previous Values",
      "Create a Timer",
      "Copy Text to Clipboard*",
      "Animate Elements",
      "Manage Form Inputs",
      "Track Scroll Position",
      "Render Count Tracking",
      "Canvas Drawing",
      "Video Player Controls",
    ],
  },
  {
    name: "useReducer",
    examples: [
      "Counter with Multiple Actions",
      "Form Handling",
      "Shopping Cart*",
      "Todo List*",
      "Light/Dark Theme Toggle",
      "Stopwatch (Start/Stop/Reset)",
      "API Data Fetching",
      "Drag and Drop",
      "Undo and Redo",
      "Expense Tracker",
    ],
  },
];

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">React Hooks Examples</h1>

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
