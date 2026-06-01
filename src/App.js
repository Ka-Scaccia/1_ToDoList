import "./App.css";
import "./CSS/utily.css";
import "./CSS/utily.css";
import "./App.css";
import { AddNewTask } from "./componenti/AddNewTask.js";
import { Header } from "./componenti/Header.js";
import { useState } from "react";

function App() {
  // useState
  const [countActivity, setCountActivity] = useState(0);
  const [activity, setActivity] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const yesClicked = () => setIsClicked(true);
  const noClicked = () => setIsClicked(false);
  return (
    <div className="App container">
      <div className="contenitorePrincipale flex">
        <div className="box1">
          <Header count={countActivity} setCount={setCountActivity} />
        </div>
        <div className="box2">
          <AddNewTask content={activity} setContent={setActivity}
          clickedBtn={yesClicked} />
        </div>
      </div>
    </div>
  );
}

export default App;
