import React, { Component } from "react";

class AddNewTodo extends Component {
  state = {
    todoTitle: "",
  };

  btnAdd_Clicked = () => {
    const newItem = {
      id: Math.floor(Math.random() * 100),
      title: this.state.todoTitle,
      complete: false,
    };
    this.props.onTaskItemAdded(newItem);
    this.setState({
      todoTitle: "",
    });
  };

  onTodoChange = (e) => {
    this.setState({
      todoTitle: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <h3>Add Item</h3>
        <div className="fg">
          <input
            type="text"
            value={this.state.todoTitle}
            onChange={this.onTodoChange}
            // onKeyUp={txtItemTitle_KeyUp}
          />
          <button type="button" onClick={this.btnAdd_Clicked}>
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default AddNewTodo;
