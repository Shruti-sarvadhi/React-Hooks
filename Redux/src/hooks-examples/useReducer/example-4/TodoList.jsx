import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addTodo, removeTodo } from "@/store/slices/features/todoSlice";

function TodoList() {
  const [text, setText] = useState("");
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.features.todos.todos); //   Get todos from Redux

  const handleAddTodo = () => {
    if (text.trim() === "") return;

    dispatch(addTodo({ id: Date.now(), text })); //   Dispatch Redux action
    setText(""); //   Clear input
  };

  return (
    <div className="p-4 border rounded-lg">
      <input
        className="border p-2 mr-2"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="px-3 py-1 bg-green-500 text-white rounded"
        onClick={handleAddTodo}
      >
        Add Todo
      </button>

      <ul className="mt-3">
        {todos.map((todo) => (
          <li key={todo.id} className="mt-2">
            {todo.text}
            <button
              className="ml-2 px-2 py-1 bg-red-500 text-white rounded"
              onClick={() => dispatch(removeTodo(todo.id))} //   Dispatch remove action
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
