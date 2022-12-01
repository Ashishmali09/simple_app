import React from "react";
import { Todo } from "./Todo";

export const Todos = (props) => {
  //  const {todos}=props;
  return (
    <div className="container min-h-screen my-9 text-center">
      <h2 className="text-center my-4 text-2xl font-bold">Todo's List</h2>
      {props.todos.length === 0
        ? "No Todos to display"
        : props.todos.map((todo) => {
            return <Todo todo={todo} key={todo.id} onDelete={props.onDelete} />;
          })}
    </div>
  );
};
