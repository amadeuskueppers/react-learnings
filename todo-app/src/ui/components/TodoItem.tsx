import React from "react";
import ITodoItem from "./ITodoItem";

const TodoItem: React.FC<ITodoItem> = (props) => {
  return <div className="TodoItem">{props.text}</div>;
};

export default TodoItem;
