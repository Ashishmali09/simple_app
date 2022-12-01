import React, { useState } from "react";

export const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Description cannot be blank");
    } else {
      addTodo(title, desc);
      setTitle("");
      setDesc("");
    }
  };
  return (
    <>
    <div className="container my-5 ml-32">
      <form className="pl-96" onSubmit={submit}>
        <label htmlFor="titleForTodo" className="text-3xl font-bold">
          Add a Todo
        </label>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail" className="form-label mt-9">
            <h3>Todo Title:</h3>
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control w-60 h-9"
            id="title"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            <h3>Todo description:</h3>
          </label>
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className=" form-control w-60 h-9"
            id="desc"
          />
        </div>

        <button
          type="submit"
          className="h-9 w-20 text-cyan-50 rounded-lg bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 "
        >
          Add Todo
        </button>
      </form>
    </div>
        <hr />
          </>
  );
};
