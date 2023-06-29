import React, { useState } from "react";

function TodoCreate({ todos, setTodos }) {
  const [title, setTitle] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const hanleAddTodo = () => {
    const newTodo = {
      id: Date.now(),
      title,
    };
    setTodos([...todos, newTodo]);
    setTitle("");
  };
  return (
    <form>
      <div className="form-container">
        <input value={title} onChange={titleChangeHandler}></input>
        <button type="button" onClick={hanleAddTodo}>
          추가하기
        </button>
      </div>
    </form>
  );
}

export default TodoCreate;
