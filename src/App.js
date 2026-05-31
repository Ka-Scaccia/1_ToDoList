import "./App.css";
import "./CSS/utily.css";
import { Header } from "./componenti/Header.js";
import { useState } from "react";

function App() {
  // useState
  const [ countActivity, setCountActivity ] = useState(0);
  return (
    <div className="App container">
      <Header count={countActivity} setCount={setCountActivity} />
    </div>
  );
}

export default App;
