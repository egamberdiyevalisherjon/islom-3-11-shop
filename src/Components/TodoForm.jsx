import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoForm = ({ addTodo }) => {
  const [name, setName] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (!name) return;
    addTodo({
      id: uuidv4(),
      name,
      isFinished: false,
    });
    setName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="display-4 text-center mb-3">Todo App</h2>
      <div className="row">
        <div className="col-md-10">
          <input
            type="text"
            autoComplete="false"
            className="form-control"
            placeholder="Todo"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col-md-2">
          <button className="btn btn-success d-block w-100">Add</button>
        </div>
      </div>
    </form>
  );
};

export default TodoForm;
