import React from "react";
import { render } from "react-dom";
import Board from "./components";
import "./App.css";
const App = () => {
  return (
    <React.StrictMode>
      <div>
        <Board />
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
