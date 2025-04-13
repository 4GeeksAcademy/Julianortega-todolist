import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [hoverIndex, setHoverIndex] = useState(-1);

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
      <h1 className="text-center mb-4">Todo List</h1>
      <input
        type="text"
        className="form-control"
        placeholder="Add a task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyDown={addTask}
      />
      
      <div className="mt-2 text-muted">
        {tasks.length === 0 
          ? "No tasks" 
          : `${tasks.length} ${tasks.length === 1 ? 'task' : 'tasks'}`}
      </div>

      <ul className="list-group mt-3">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(-1)}
          >
            {task}
            <button
              className="btn btn-danger btn-sm"
              onClick={() => deleteTask(index)}
              style={{
                opacity: hoverIndex === index ? 1 : 0,
                transition: "opacity 0.3s ease"
              }}
            >
              &#10006;
            </button>
          </li>
        ))}
      </ul>

      <style>{`
        .list-group-item:hover .btn {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
};

export default TodoList;