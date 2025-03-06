import { Link } from "react-router-dom";
import { useState } from "react";
import { hooks } from "./Home/Home";

// const hooks = [
//   {
//     name: "useState",
//     examples: [
//       "Form Input Handling",
//       "Conditional Rendering",
//       "Toggle Flags (true/false)",
//       "Counter",
//       "Get API Data and Store in State",
//       "Countdown Timer",
//       "Pagination Control",
//       "Search Filter Query",
//       "Drag-and-Drop Position",
//       "Rate Limiting Clicks",
//     ],
//   },
//   {
//     name: "useEffect",
//     examples: [
//       "Fetch API Data",
//       "Managing Timers or Intervals",
//       "Multi-Language Localization",
//       "Trigger Animation on State Change",
//       "Fetch New Data on Prop Change",
//       "Subscribe to Window Events",
//       "Local Storage Sync",
//       "Cleanup Operations",
//       "Integrate with Third-Party Libraries",
//       "Debouncing Input for Search",
//     ],
//   },
//   {
//     name: "useReducer",
//     examples: [
//       "Counter with Multiple Actions",
//       "Form Handling",
//       "Shopping Cart",
//       "Todo List",
//       "Light/Dark Theme Toggle",
//       "Stopwatch (Start/Stop/Reset)",
//       "API Data Fetching",
//       "Drag and Drop",
//       "Undo and Redo",
//       "Expense Tracker",
//     ],
//   },
//   {
//     name: "useRef",
//     examples: [
//       "Access DOM Elements",
//       "Store Previous Values",
//       "Create a Timer",
//       "Copy Text to Clipboard",
//       "Animate Elements",
//       "Manage Form Inputs",
//       "Track Scroll Position",
//       "Render Count Tracking",
//       "Canvas Drawing",
//       "Video Player Controls",
//     ],
//   },
//   {
//     name: "useMemo",
//     examples: [
//       "Basic Computation Optimization",
//       "Efficient List Filtering",
//       "Prevent Child Re-renders",
//       "Optimized Parent-Child State Updates",
//       "Memoized Chart Data",
//       "Memoized API Data",
//       "Memoized Dynamic Styles",
//       "Optimized Array Sorting",
//       "Memoized Value with Multiple Inputs",
//       "Optimized Data Transformation",
//     ],
//   },
//   {
//     name: "useCallback",
//     examples: [
//       "Prevent Child Re-renders",
//       "Memoize Callback with State Dependency",
//       "Debounced Callback for Input Handling",
//       "Avoid Recreating Callbacks in Lists",
//       "Memoized Toggle Function",
//       "Handle Form Submission",
//       "Callback for External API Calls",
//       "Click Events in List Items",
//       "Memoized Timer Reset Function",
//       "Conditional Callback Updates",
//     ],
//   },
// ];

const HookLinks = () => {
  const [activeHook, setActiveHook] = useState(null); // Controls which hook expands

  return (
    <nav className="sidebar-nav">
      <Link to="/">🏠 Home</Link>

      {hooks.map((hook) => (
        <div key={hook.name}>
          {/* Hook Name - Click to Show Examples */}
          <button
            className="hook-title"
            onClick={() => setActiveHook(activeHook === hook.name ? null : hook.name)}
          >
            {hook.name} {activeHook === hook.name ? "▲" : "▼"}
          </button>

          {/* Show Examples if Active */}
          {activeHook === hook.name && (
            <div className="example-links">
              {hook.examples.map((example, index) => (
                <Link key={index} to={`/${hook.name}/example-${index + 1}`}>
                  {example}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default HookLinks;
