import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

function TodoList(props) {


  return (
    <div>
      <ul>
        {props.todos.map((todo) => {
          return (
            <li style={todo.checked ? {textDecorationLine: "line-through"} : null} className="list-group-item">
              <TodoItem onClick={() => props.onClick(todo.id)} {...todo} key={todo.id} />
              <button style={{position: "absolute", right: "20px", bottom: "6px"}} onClick={() => props.onDelete(todo.id)} className="btn btn-danger">Sil</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
