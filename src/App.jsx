import React, { useState } from "react";
import "./App.css";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "react를 배워봅시다." },
    { id: 2, title: "useState를 배워봅시다." },
  ]);

  return (
    <main>
      <TodoCreate todos={todos} setTodos={setTodos} />
      <h2>Todo List</h2>
      <TodoList todos={todos} setTodos={setTodos} />
    </main>
  );
};

export default App;
