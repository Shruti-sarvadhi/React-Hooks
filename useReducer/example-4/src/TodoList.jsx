import React, { useReducer, useState } from "react";

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, { id: Date.now(), text: action.text }];
    case "remove":
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
}

function TodoList() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [text, setText] = useState("");

  return (
    <div className="p-4 border rounded-lg">
      <input
        className="border p-2 mr-2"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="px-3 py-1 bg-green-500 text-white rounded"
        onClick={() => {
          dispatch({ type: "add", text });
          setText("");
        }}
      >
        Add Todo
      </button>
      <ul className="mt-3">
        {state.map((todo) => (
          <li key={todo.id} className="mt-2">
            {todo.text}
            <button
              className="ml-2 px-2 py-1 bg-red-500 text-white rounded"
              onClick={() => dispatch({ type: "remove", id: todo.id })}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
