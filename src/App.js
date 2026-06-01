import "./App.css";
import "./CSS/utily.css";
import "./CSS/utily.css";
import "./App.css";
import { Task } from "./componenti/Task.js";
import { AddNewTask } from "./componenti/AddNewTask.js";
import { Header } from "./componenti/Header.js";
import { useState } from "react";

function App() {
  // ARRAY
  const [tasks, setTasks] = useState([]);
  // USESTATE
  // contatore task
  const [countActivity, setCountActivity] = useState(0);
  // contenuto nuova task
  const [activity, setActivity] = useState("");
  // controllo click btn "Aggiungi"
  const [isClicked, setIsClicked] = useState(false);
  const yesClicked = () => setIsClicked(true);
  const noClicked = () => setIsClicked(false);
  // controllo click task fatto
  const [isChecked, setIsChecked] = useState(false);
  const yesChecked = () => setIsChecked(true);
  const noChecked = () => setIsChecked(false);
  // controllo click su icona edit
  const [isClickedEdit, setIsClickedEdit] = useState(false);
  const yesEdit = () => setIsClickedEdit(true);
  const noEdit = () => setIsClickedEdit(false);
  // controllo click su icona delete
  const [isClickedDelete, setIsClickedDelete] = useState(false);
  const yesDelete = () => setIsClickedDelete(true);
  const noDelete = () => setIsClickedDelete(false);
  // FUNCTION
  // aggiungi un nuovo task: se il contenuto dell'input è popolato
  // aggiungi un nuovo array e resetta contenuto input e controllo click BTN
  const addTask = () => {
    if (!activity.trim()) {
      alert("Scrivere qualcosa!");
      return;
    }
    const newTask = { id: Date.now(), title: activity };
    setTasks((prev) => [...prev, newTask]);
    setActivity("");
    setIsClicked(false);
  };

  // se l'utente ha cliccato il bottone "Aggiungi"
  if (setIsClicked) {
    return (
      <>
        <div className="App container">
          <div className="contenitorePrincipale flex">
            <div className="box1">
              <Header count={countActivity} setCount={setCountActivity} />
            </div>
            <div className="box2">
              <AddNewTask
                content={activity}
                setContent={setActivity}
                clickedBtn={addTask}
              />
            </div>
            {/* ritorno la lista dei tasks */}
            {tasks.map((task) => (
              <Task
                key={task.id}
                title={task.title}
                OnChecked={yesChecked}
                OnEdit={yesEdit}
                onDelete={yesDelete}
              />
            ))}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="App container">
        <div className="contenitorePrincipale flex">
          <div className="box1">
            <Header count={countActivity} setCount={setCountActivity} />
          </div>
          <div className="box2">
            <AddNewTask
              content={activity}
              setContent={setActivity}
              clickedBtn={yesClicked}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
