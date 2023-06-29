import React from "react";

function TodoList({ todos }) {
  const renderTodo = (todos) => {
    return todos.map((todo) => <li className="list-box">{todo.title}</li>);
  };
  return <ul>{renderTodo(todos)}</ul>;
}

export default TodoList;
