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
  return (
    <div className="App container">
      <div className="contenitorePrincipale flex">
        <div className="box1">
          <Header count={countActivity} setCount={setCountActivity} />
        </div>
        <div className="box2">
          <AddNewTask />
        </div>
      </div>
    </div>
  );
}

export default App;
