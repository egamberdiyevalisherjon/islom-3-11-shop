import React, { useState } from "react";

const TodoListItem = ({ todo: { name, isFinished, id }, removeTodo }) => {
  const [finished, setFinished] = useState(isFinished);

  function handleCheckbox(e) {
    setFinished(e.target.checked);
  }

  function handleDeleteTodo() {
    removeTodo(id);
  }

  return (
    <li className="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
      <div>
        <input
          type="checkbox"
          checked={finished}
          onChange={handleCheckbox}
          className="me-2"
        />
        <span className={finished ? "text-decoration-line-through" : ""}>
          {name}
        </span>
      </div>
      <button onClick={handleDeleteTodo} className="btn btn-danger">
        Delete
      </button>
    </li>
  );
};

const TodoList = ({ todos = [], removeTodo }) => {
  return (
    <ul className="list-group mt-3">
      {todos.map((todo) => (
        <TodoListItem removeTodo={removeTodo} todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};

export default TodoList;
