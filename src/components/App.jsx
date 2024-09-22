import React, { useState } from "react";

function App() {
  const [inputText, setinputText] = useState("");
  const [tasks, setTask] = useState([]);
  function handleChange(event) {
    const newvalue = event.target.value;
    setinputText(newvalue);
  }
  function handleTask() {
    setTask((prev) => {
      return [...prev, inputText];
    });
    setinputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={handleTask}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {tasks.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
