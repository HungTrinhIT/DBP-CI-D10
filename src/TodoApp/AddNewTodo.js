import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
class AddNewTodo extends Component {
  state = {
    todoTitle: "",
  };

  onTodoChange = (e) => {
    this.setState({
      todoTitle: e.target.value,
    });
  };

  btnAddTodo = () => {
    const newTodo = {
      title: this.state.todoTitle,
      isCompleted: false,
      id: uuidv4(),
      //   id: this.props.todos.length + 1,
    };
    this.setState({
      todoTitle: "",
    });
    this.props.onAddTodo(newTodo);
  };
  render() {
    return (
      <div>
        <h3>Add new Todo</h3>
        <div className="fg">
          <input
            type="text"
            value={this.state.todoTitle}
            onChange={this.onTodoChange}
          />
          <button onClick={this.btnAddTodo}>Add</button>
        </div>
      </div>
    );
  }
}

export default AddNewTodo;
