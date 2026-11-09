"use client";

import { useState } from "react";
import { useTodosContext } from "./todosContext";

export default function ReactContextTodoList() {
  const { todos, addTodo, updateTodo, deleteTodo } = useTodosContext();
  const [title, setTitle] = useState("");

  const create = () => {
    const trimmed = title.trim();
    if (!trimmed) return;
    addTodo(trimmed);
    setTitle("");
  };

  return (
    <div id="wd-react-context-todo-list">
      <h3>Todo List</h3>
      <div className="mb-3 flex gap-2">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && create()}
          placeholder="New todo"
          id="wd-todo-new-title"
          className="flex-1 rounded border border-neutral-300 px-3 py-1.5"
        />
        <button
          type="button"
          onClick={create}
          id="wd-todo-add"
          className="rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
        >
          Add
        </button>
      </div>
      <ul className="list-none p-0">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="mb-2 flex gap-2"
            id={`wd-todo-${todo.id}`}
          >
            <input
              value={todo.title}
              onChange={(e) => updateTodo(todo.id, e.target.value)}
              className="flex-1 rounded border border-neutral-300 px-3 py-1.5"
            />
            <button
              type="button"
              onClick={() => deleteTodo(todo.id)}
              className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
