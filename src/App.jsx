import React, { useState } from "react";
const App = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

  // Add a new task
  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
    setTask("");
  };

  // Toggle complete
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <div className="card">
        <div className="header">
          <h1 className="title">✅ To-Do List</h1>
          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        {/* Input & Add Button */}
        <div className="input-container">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a task..."
            className="task-input"
          />
          <button onClick={addTask} className="add-btn">
            Add
          </button>
        </div>

        {/* Task List */}
        <ul className="task-list">
          {tasks.length === 0 && <p className="empty-msg">No tasks yet 🚀</p>}
          {tasks.map((t) => (
            <li key={t.id} className="task-item">
              <span
                onClick={() => toggleComplete(t.id)}
                className={t.completed ? "completed" : ""}
              >
                {t.text}
              </span>
              <button onClick={() => deleteTask(t.id)} className="delete-btn">
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
