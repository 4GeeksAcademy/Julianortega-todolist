import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = (e) => {
    if (e.key === "Enter" && newTask.trim() !== "") {
      setTasks([...tasks, newTask.trim()]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Todo List</h1>
      <input
        type="text"
        className="form-control"
        placeholder="Add a task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyDown={addTask}
      />
      <ul className="list-group mt-3">
        {tasks.length === 0 ? (
          <li className="list-group-item text-muted">No tasks, add a task</li>
        ) : (
          tasks.map((task, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {task}
              <button
                className="btn btn-danger btn-sm"
                onClick={() => deleteTask(index)}
              >
                &#10006;
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TodoList;
