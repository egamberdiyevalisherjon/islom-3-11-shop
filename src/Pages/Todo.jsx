import React, { useState } from "react";
import TodoForm from "../Components/TodoForm";
import TodoList from "../Components/TodoList";

const Todo = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todo-items")) || []
  );

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  localStorage.setItem("todo-items", JSON.stringify(todos));

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <section className="py-5">
      <div className="container">
        <TodoForm addTodo={addTodo} removeTodo={removeTodo} />
        <TodoList removeTodo={removeTodo} todos={todos} />
      </div>
    </section>
  );
};

export default Todo;
