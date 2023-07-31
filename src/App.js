import React from "react";
import Button from "./Components/dayButton/Button";
import "../src/app.css";
import {DAYS} from "../src/data";

function App() {
  // console.log(DAYS);
  return (
    <div className="App">
      <div className="navbar">
        <h2>30 days react ui</h2>
      </div>
      <div className="parent-btn">
        {DAYS.map((data) => {
          console.log(data);
          return <Button data = {data}/>;
        })}
      </div>
    </div>
  );
}

export default App;
