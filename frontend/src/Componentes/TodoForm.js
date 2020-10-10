import React, { Component } from "react";

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      responsible: "",
      description: "",
      priority: "low"
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddTodo(this.state);
    this.setState({
      title: "",
      responsible: "",
      description: "",
      priority: "low"
    });
  }

  handleInputChange(e) {
    const { value, name } = e.target;
    console.log(value, name);
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="card">
        <form onSubmit={this.handleSubmit} className="card-body">
          <div className="form-group">
            <input
              type="text"
              name="title"
              className="form-control"
              value={this.state.title}
              onChange={this.handleInputChange}
              placeholder="Nombre completo"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="responsible"
              className="form-control"
              value={this.state.responsible}
              onChange={this.handleInputChange}
              placeholder="Correo eletronico"
              o
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="description"
              className="form-control"
              value={this.state.description}
              onChange={this.handleInputChange}
              placeholder="Lugar de encuentro"
            />
          </div>
          <div className="form-group">
            <select
              name="priority"
              className="form-control"
              value={this.state.priority}
              onChange={this.handleInputChange}
            >
              <option>Hora</option>
              <option>9:00am</option>
              <option>10:00am</option>
              <option>11:00am</option>
              <option>1:00pm</option>
              <option>2:00pm</option>
              <option>3:00pm</option>
              <option>4:00pm</option>
              <option>5:00pm</option>
              <option>6:00pm</option>
              <option>7:00pm</option>
              <option>8:00pm</option>
            </select>
          </div>
          <button type="submit" className="btn btn-outline-danger">
            Guardar
          </button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
