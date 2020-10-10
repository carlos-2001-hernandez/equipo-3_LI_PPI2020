import React, { Component } from "react";
import "../Style/Citas.css";

import { todos } from "../todos.json";

import TodoForm from "../Componentes/TodoForm";

class Citas extends Component {
  constructor() {
    super();
    this.state = {
      todos
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  removeTodo(index) {
    this.setState({
      todos: this.state.todos.filter((e, i) => {
        return i !== index;
      })
    });
  }

  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    });
  }

  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4 text-center " key={i}>
          <div className="card mt-4">
            <div className="card-title text-center">
              <h3>{todo.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {todo.priority}
              </span>
            </div>
            <div className="card-body">
              <p>{todo.description}</p>
              <p>
                <mark>{todo.responsible}</mark>
              </p>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="App py-5">
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-danger text-white border-bottom shadow-sm">
          <h5 className="my-0 mr-md-auto font-weight-normal">
            AGENDA TU CITA{" "}
          </h5>
          <span className="badge badge-pill badge-primary ml-2">
            {todos.length}
          </span>
        </div>
        <div align="center">
          <img src="../img/logo.jpg" alt="C.D.A C13"/>
        </div>

        <div align="center">
          <div className="container "></div>
          <div className="row mt-4">
            <div className="col-md-4 text-center ">
              <div className="py-2"></div>
              <TodoForm onAddTodo={this.handleAddTodo}></TodoForm>
            </div>

            <div className="col-md-8">
              <div className="row">{todos}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Citas;
