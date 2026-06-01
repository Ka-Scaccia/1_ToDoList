import "./App.css";
import "./CSS/utily.css";
import "./CSS/utily.css";
import "./App.css";
import { Task } from "./componenti/Task.js";
import { AddNewTask } from "./componenti/AddNewTask.js";
import { Header } from "./componenti/Header.js";
import { useState } from "react";

function App() {
  // useState
  // contatore task
  const [countActivity, setCountActivity] = useState(0);
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
        <div className="box3">
          <Task OnChecked={yesChecked} OnEdit={yesEdit}
          onDelete={yesDelete} />
        </div>
      </div>
    </div>
  );
}

export default App;
