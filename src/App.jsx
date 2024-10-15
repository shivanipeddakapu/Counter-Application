import React, { useReducer } from "react";
import "./index.css"

export default function App() {
  function reducer(state, action) {
    switch (action) {
      case "inc":
        return state + 1;
      case "dec":
        return state - 1;
      case "res":
        return 0;
      default:
        return state;
    }
  }

  let [count, dispatch] = useReducer(reducer, 0);

  return (
    <div className="container">
      <div className="counter">
        <h1>{count}</h1>
      </div>
      <button className="btn increment" onClick={() => dispatch("inc")}> Increment</button>
      <button className="btn decrement" onClick={() => dispatch("dec")}>Decrement</button>
      <button className="btn reset" onClick={() => dispatch("res")}>Reset</button>
    </div>
  );
}
