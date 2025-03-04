import React, { useReducer } from "react";

const initialState = { darkMode: false };

function reducer(state, action) {
  switch (action.type) {
    case "toggle":
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className={`p-4 border rounded-lg ${state.darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
      <p>Current Mode: {state.darkMode ? "Dark" : "Light"}</p>
      <button
        className="mt-2 px-3 py-1 bg-blue-500 text-white rounded"
        onClick={() => dispatch({ type: "toggle" })}
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default App;
