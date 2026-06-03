import "./App.css";
import "./CSS/utily.css";
import { Task } from "./componenti/Task.js";
import { AddNewTask } from "./componenti/AddNewTask.js";
import { Header } from "./componenti/Header.js";
import { useState } from "react";

function App() {
  // ARRAY
  // lista task
  const [tasks, setTasks] = useState([]);
  // USESTATE
  // contatore task
  const countActivity = tasks.filter((task) => !task.checked).length;
  // contenuto nuova task
  const [activity, setActivity] = useState("");
  // FUNCTION
  // aggiungi un nuovo task: se il contenuto dell'input è popolato
  // aggiungi un nuovo array e reset contenuto
  const addTask = () => {
    if (!activity.trim()) {
      alert("Scrivere qualcosa!");
      return;
    } else {
      const newTask = { id: Date.now(), title: activity, checked: false };
      setTasks((prev) => [...prev, newTask]);
      setActivity("");
    }
  };
  // reset input nuovi task
  const toggleTaskChecked = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task,
      ),
    );
  };
  // eliminazione task
  const toggleTaskDelete = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }

  return (
    <div className="App container">
      <div className="contenitorePrincipale flex">
        <div className="box1">
          <Header count={countActivity} />
        </div>
        <div className="box2">
          <AddNewTask
            content={activity}
            setContent={setActivity}
            clickedBtn={addTask}
          />
        </div>
        {/* ritorno la lista dei tasks */}
        <div className="listTask flex">
          {tasks.map((task) => (
            <div
              key={task.id}
              className={`listTask_box ${task.checked ? "bottom" : ""}`}
            >
              <Task
                title={task.title}
                checked={task.checked}
                setChecked={() => toggleTaskChecked(task.id)}
                onDelete={() => toggleTaskDelete(task.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
