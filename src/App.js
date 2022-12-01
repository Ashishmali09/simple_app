// import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import { About } from "./components/About";
import { Todos } from "./components/Todos";
import { AddTodo } from "./components/AddTodo";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    // console.log("I am deleted from Todo", todo);
    let index = todos.indexOf(todo);
    todos.splice(index, 1);

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    // console.log("I am adding this todo", title, desc);
    let id;
    if (todos.length === 0) {
      id = 0;
    } else {
      id = todos[todos.length - 1].id + 1;
    }
    const myTodo = {
      id: id,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    // console.log(myTodo);
  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Header title="Todo's List" searchBar={false} />

        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <>
                  <AddTodo addTodo={addTodo} />
                  <Todos todos={todos} onDelete={onDelete} />
                </>
              );
            }}
          ></Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
