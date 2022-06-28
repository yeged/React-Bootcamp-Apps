import React from "react";
import "./TodoItem.css";

function Todo(props) {
  const { content } = props;
  return <div onClick={props.onClick}>{content} </div>;
}

export default Todo;
