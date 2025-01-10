
import React, { useState, useEffect } from "react";
import "../components/ToDo.css";

export function ToDoApplication() {
  const [todos, setTodos] = useState(() => {
    const savedTasks = localStorage.getItem("todos");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [newTodo, setNewTodo] = useState("");
  const [editingTodo, setEditingTodo] = useState(null);
  const [editedText, setEditedText] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([
        ...todos,
        { id: Date.now(), text: newTodo.trim(), completed: false },
      ]);
      setNewTodo(""); 
    }
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    setEditingTodo(id);
    setEditedText(todoToEdit.text);
  };

  const saveEditedTodo = () => {
    setTodos(
      todos.map((todo) =>
        todo.id === editingTodo ? { ...todo, text: editedText.trim() } : todo
      )
    );
    setEditingTodo(null);
    setEditedText("");
  };

  const clearAllTasks = () => {
    setTodos([]);
  };

  const allTasksCompleted = todos.every((todo) => todo.completed);

  return (
    <div className="border w-50 mt-5 m-auto p-3 shadow-lg rounded-5 maincontainer">
      <h3>TO-DO TASK'S</h3>
      <div className="inputcon">
        <input
          className="form-control"
          type="text"
          placeholder="Enter today's task"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button
          className="btn btn-primary m-2 w-25"
          onClick={addTodo}
          disabled={!newTodo.trim()}
        >
          Add Task
        </button>
      </div>

      {editingTodo ? (
        <div className="edit-container">
          <input
            className="form-control mt-2 w-75"
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button className="btn btn-success m-2" onClick={saveEditedTodo}>
            Save
          </button>
          <button
            className="btn btn-secondary m-2"
            onClick={() => setEditingTodo(null)}
          >
            Cancel
          </button>
        </div>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                  cursor: "pointer",
                }}
                onClick={() => toggleTodo(todo.id)}
              >
                {todo.text}
              </span>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className="m-5 p-1"
              />
              <button
                className="btn btn-warning m-5"
                onClick={() => editTodo(todo.id)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger m-5"
                onClick={() => removeTodo(todo.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}

      {todos.length > 0 && (
        <div>
          <button
            className="clearbtn"
            onClick={clearAllTasks}
            disabled={!allTasksCompleted}
          >
            Completed All Tasks
          </button>
        </div>
      )}
    </div>
  );
}


