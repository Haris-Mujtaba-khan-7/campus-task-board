import { useEffect, useState } from "react";
import TaskCard from "./components/TaskCard";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Complete React Assignment",
      category: "Development",
    },
    {
      id: 2,
      title: "Prepare Database Presentation",
      category: "University",
    },
    {
      id: 3,
      title: "Submit Project Report",
      category: "Deadline",
    },
  ]);

  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") {
      return;
    }

    const task = {
      id: Date.now(),
      title: newTask,
      category: "Campus",
    };

    setTasks([...tasks, task]);
    setNewTask("");
  };

  useEffect(() => {
    console.log("Task list updated!");
    console.log("Total number of tasks:", tasks.length);
  }, [tasks]);

  return (
    <div className="app">
      <header className="header">
        <div>
          <p className="subtitle">STUDENT PRODUCTIVITY</p>
          <h1>Campus Task Board</h1>
          <p className="description">
            Organize your university tasks and stay on track.
          </p>
        </div>

        <div className="task-count">
          <strong>{tasks.length}</strong>
          <span>Tasks</span>
        </div>
      </header>

      <main className="container">
        <section className="add-task">
          <h2>Add New Task</h2>

          <div className="input-area">
            <input
              type="text"
              placeholder="Enter your campus task..."
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  addTask();
                }
              }}
            />

            <button onClick={addTask}>Add Task</button>
          </div>
        </section>

        <section className="tasks-section">
          <div className="section-heading">
            <div>
              <p className="subtitle">YOUR WORK</p>
              <h2>Task List</h2>
            </div>

            <span>{tasks.length} total</span>
          </div>

          <div className="task-list">
            {tasks.map((task, index) => (
              <TaskCard
                key={task.id}
                task={task}
                taskNumber={index + 1}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;