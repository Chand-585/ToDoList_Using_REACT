import React, { useState } from "react";
function ToDoItems(props) {
  const [isDone, setDone] = useState(false);
  function handleClick() {
    setDone((prevValue) => {
      return !prevValue;
    });
  }
  return (
    <li
      onClick={handleClick}
      style={{ textDecoration: isDone ? "line-through" : "none" }}
    >
      {props.text}
    </li>
  );
}
export default ToDoItems;
