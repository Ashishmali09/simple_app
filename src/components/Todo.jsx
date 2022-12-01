import React from "react";

export const Todo = ({ todo, onDelete }) => {
  return (
    <div className="text-center ">
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>

      <button
        type="submit"
        className="h-9 mx-auto px-4 w-20 rounded-full
         bg-rose-500 hover:bg-rose-600
          border-rose-500 hover:border-rose-600
           text-white flex flex-col items-center justify-center my-4"
        onClick={() => {
          onDelete(todo);
        }}
      >
        Delete
      </button>
      <hr />
    </div>
  );
};
